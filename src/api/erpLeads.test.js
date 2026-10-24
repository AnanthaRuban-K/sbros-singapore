import { afterEach, describe, expect, it, vi } from "vitest";

// API_BASE is read when the module loads, so re-import after changing the env
const loadModule = async (url) => {
  vi.resetModules();
  vi.stubEnv("VITE_ERP_API_URL", url);
  return import("./erpLeads");
};

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("submitLead", () => {
  it("fails with a clear config error and sends nothing when VITE_ERP_API_URL is missing", async () => {
    const { submitLead } = await loadModule("");
    const fetchImpl = vi.fn();
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    await expect(submitLead({}, { fetchImpl })).rejects.toMatchObject({
      kind: "config",
      message: expect.stringContaining("VITE_ERP_API_URL is not set"),
    });

    expect(fetchImpl).not.toHaveBeenCalled();
    expect(consoleError).toHaveBeenCalled();
  });

  it("joins the base URL and path without a double slash", async () => {
    const { submitLead } = await loadModule("https://erp.example.com/");
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      json: () => Promise.resolve({ ok: true, id: 1 }),
    });

    await submitLead({}, { fetchImpl });

    expect(fetchImpl.mock.calls[0][0]).toBe("https://erp.example.com/api/v1/public/leads");
  });
});
