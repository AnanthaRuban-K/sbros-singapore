import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import PlanLeadForm from "./PlanLeadForm";

const MODULE_PLAN = {
  kind: "module",
  planInterest: "HRM - Intermediate",
  label: "HRM - Intermediate",
  modules: ["HRM"],
};


const jsonResponse = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  json: () => Promise.resolve(body),
});

const renderForm = (plan = MODULE_PLAN, onClose = vi.fn()) => {
  render(
    <MemoryRouter>
      <PlanLeadForm plan={plan} onClose={onClose} />
    </MemoryRouter>
  );
  return { onClose };
};

const fillForm = async (user) => {
  await user.type(screen.getByLabelText(/Company Name/), "Acme Pte Ltd");
  await user.type(screen.getByLabelText(/Your Name/), "Alex Tan");
  await user.type(screen.getByLabelText(/Work Email/), "alex@acme.com.sg");
  await user.type(screen.getByLabelText(/Phone Number/), "+65 9123 4567");
  await user.selectOptions(screen.getByLabelText(/Number of Employees/), "11-50");
  await user.type(screen.getByLabelText(/Message/), "Need payroll by January.");
};

const submitButton = () => screen.getByRole("button", { name: /Submit Request|Sending/ });

let fetchMock;

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("PlanLeadForm", () => {
  it("shows the selected plan and submits the lead to the ERP", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue(
      jsonResponse(201, { ok: true, id: 7, message: "Thanks — our team will be in touch shortly." })
    );

    renderForm();

    expect(screen.getByRole("dialog")).toHaveAccessibleName("Get pricing – HRM - Intermediate");

    await fillForm(user);
    await user.click(submitButton());

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Thank you - our team will send you pricing for your selected plan within one business day."
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://erp.test/api/v1/public/leads");
    expect(options.method).toBe("POST");
    expect(options.headers["Content-Type"]).toBe("application/json");
    expect(options.credentials).toBe("omit");

    const body = JSON.parse(options.body);
    expect(body).toMatchObject({
      company: "Acme Pte Ltd",
      contactName: "Alex Tan",
      email: "alex@acme.com.sg",
      phone: "+65 9123 4567",
      companySize: "11-50",
      planInterest: "HRM - Intermediate",
    });
    expect(body).not.toHaveProperty("website");
    expect(body.requirements).toContain("Request type: Pricing request");
    expect(body.requirements).toContain("Plan: HRM - Intermediate");
    expect(body.requirements).toContain("Number of employees: 11-50");
    expect(body.requirements).toContain("Need payroll by January.");
  });

  it("never shows or sends a price", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue(jsonResponse(201, { ok: true, id: 8 }));

    renderForm();
    expect(document.body.textContent).not.toMatch(/SGD|\/ ?month|per (user|employee)/);

    await fillForm(user);
    await user.click(submitButton());
    await screen.findByRole("status");

    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.requirements).not.toMatch(/SGD|Price|Billing/);
  });

  it("does not call the API when required fields are missing", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(submitButton());

    expect(screen.getByText("Company Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Work Email is required.")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("shows a friendly message and field errors on 422", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue(
      jsonResponse(422, { detail: [{ loc: ["body", "email"], msg: "Email domain is not accepted." }] })
    );

    renderForm();
    await fillForm(user);
    await user.click(submitButton());

    expect(await screen.findByRole("alert")).toHaveTextContent(/check the highlighted fields/);
    expect(screen.getByText("Email domain is not accepted.")).toBeInTheDocument();
    expect(screen.getByLabelText(/Work Email/)).toHaveAttribute("aria-invalid", "true");
    expect(submitButton()).toBeEnabled();
  });

  it("shows a rate-limit message on 429", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue(jsonResponse(429, { detail: "Too many requests" }));

    renderForm();
    await fillForm(user);
    await user.click(submitButton());

    expect(await screen.findByRole("alert")).toHaveTextContent(/wait about 10 minutes/);
  });

  it("shows a network message when the request fails", async () => {
    const user = userEvent.setup();
    fetchMock.mockRejectedValue(new TypeError("Failed to fetch"));

    renderForm();
    await fillForm(user);
    await user.click(submitButton());

    expect(await screen.findByRole("alert")).toHaveTextContent(/couldn't reach our server/);
  });

  it("shows success without calling the API when the honeypot is filled", async () => {
    const user = userEvent.setup();
    renderForm();

    await fillForm(user);
    fireEvent.change(screen.getByLabelText("Leave this field empty"), {
      target: { value: "http://spam.example" },
    });
    await user.click(submitButton());

    expect(await screen.findByRole("status")).toHaveTextContent(/send you pricing for your selected plan/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sends only one request when submitted repeatedly", async () => {
    const user = userEvent.setup();
    let resolveFetch;
    fetchMock.mockReturnValue(new Promise((resolve) => { resolveFetch = resolve; }));

    renderForm();
    await fillForm(user);

    const button = submitButton();
    await user.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("Sending...");

    // Enter key / programmatic submits while the first request is in flight
    fireEvent.submit(button.closest("form"));
    fireEvent.submit(button.closest("form"));

    expect(fetchMock).toHaveBeenCalledTimes(1);

    resolveFetch(jsonResponse(201, { ok: true, id: 9 }));
    await screen.findByRole("status");

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    const { onClose } = renderForm();

    await user.keyboard("{Escape}");

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  });
});
