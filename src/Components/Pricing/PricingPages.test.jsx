import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Pricing1 from "./Pricing1";
import ModulePricing from "./ModulePricing";

const card = (name) => screen.getByRole("heading", { level: 3, name }).closest(".pricing1-card");

const fillLeadForm = async (user) => {
  await user.type(screen.getByLabelText(/Company Name/), "Acme Pte Ltd");
  await user.type(screen.getByLabelText(/Your Name/), "Alex Tan");
  await user.type(screen.getByLabelText(/Work Email/), "alex@acme.com.sg");
  await user.type(screen.getByLabelText(/Phone Number/), "+65 9123 4567");
};

const sentBody = (fetchMock) => JSON.parse(fetchMock.mock.calls[0][1].body);

let fetchMock;

beforeEach(() => {
  fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    status: 201,
    json: () => Promise.resolve({ ok: true, id: 1 }),
  });
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("/Pricing", () => {
  const renderPricing = () =>
    render(
      <MemoryRouter>
        <Pricing1 />
      </MemoryRouter>
    );

  it("annual toggle changes the displayed price", async () => {
    const user = userEvent.setup();
    renderPricing();

    // Annual prepay is the default: SGD 150 x 12 x 0.85 = SGD 1,530 per year (SGD 127.50 / month)
    expect(within(card("Basic")).getByText("SGD 127.50")).toBeInTheDocument();
    expect(within(card("Basic")).getByText(/SGD 1,530\s+billed yearly, excl\. GST/)).toBeInTheDocument();

    await user.click(screen.getAllByRole("button", { name: "Monthly" })[0]);

    expect(screen.getAllByRole("button", { name: "Monthly" })[0]).toHaveAttribute("aria-pressed", "true");
    expect(within(card("Basic")).getByText("SGD 150")).toBeInTheDocument();
    expect(within(card("Basic")).getByText("Billed monthly, excl. GST")).toBeInTheDocument();
  });

  it("employee calculator updates every tier and is sent with the lead", async () => {
    const user = userEvent.setup();
    renderPricing();

    await user.click(screen.getAllByRole("button", { name: "Monthly" })[0]);

    const input = screen.getAllByLabelText("Number of employees")[0];
    await user.clear(input);
    await user.type(input, "40");

    // base + 30 extra employees x 4 / 6 / 8
    expect(within(card("Basic")).getByText("SGD 270")).toBeInTheDocument();
    expect(within(card("Intermediate")).getByText("SGD 430")).toBeInTheDocument();
    expect(within(card("Advanced")).getByText("SGD 590")).toBeInTheDocument();

    await user.click(within(card("Advanced")).getByRole("button", { name: /Request Pricing/ }));

    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("Billing: Monthly")).toBeInTheDocument();
    expect(within(dialog).getByText("40 employees")).toBeInTheDocument();
    // Employees range pre-filled from the calculator
    expect(within(dialog).getByLabelText(/Number of Employees/)).toHaveValue("11-50");

    await fillLeadForm(user);
    await user.click(within(dialog).getByLabelText(/Biometric device integration/));
    await user.click(within(dialog).getByRole("button", { name: /Submit Request/ }));
    await screen.findByRole("status");

    const body = sentBody(fetchMock);
    expect(body.planInterest).toBe("ADVANCED");
    expect(body.companySize).toBe("11-50");
    expect(body.requirements).toContain("Plan: Complete ERP Advanced");
    expect(body.requirements).toContain("Billing cycle: Monthly");
    expect(body.requirements).toContain("Quantity: 40 employees");
    expect(body.requirements).toContain("Price shown: SGD 590 / month\n");
    expect(body.requirements).toContain("Add-ons: Biometric device integration (SGD 49 / month per site)");
    expect(body.requirements).toContain("Modules: HRM, Finance & Accounts, Sales, Procurement, CRM, Recruitment");
  });

  it("custom quote box sends CUSTOM", async () => {
    const user = userEvent.setup();
    renderPricing();

    await user.click(screen.getByRole("button", { name: "Request a custom quote" }));
    expect(screen.getByRole("dialog")).toHaveAccessibleName("Request a custom quote");

    await fillLeadForm(user);
    await user.selectOptions(screen.getByLabelText(/Number of Employees/), "1-10");
    await user.click(screen.getByRole("button", { name: /Submit Request/ }));
    await screen.findByRole("status");

    expect(sentBody(fetchMock).planInterest).toBe("CUSTOM");
  });

  it("coming-soon add-ons send a notify request", async () => {
    const user = userEvent.setup();
    renderPricing();

    await user.click(screen.getByRole("button", { name: "Notify me about API access" }));
    expect(screen.getByRole("dialog")).toHaveAccessibleName("Notify me when API access is available");

    await fillLeadForm(user);
    await user.selectOptions(screen.getByLabelText(/Number of Employees/), "1-10");
    await user.click(screen.getByRole("button", { name: /Submit Request/ }));

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Thanks, we will let you know when API access is available."
    );

    const body = sentBody(fetchMock);
    expect(body.planInterest).toBe("ADDON-API");
    expect(body.requirements.startsWith("Notify me when available")).toBe(true);
    expect(body.requirements).toContain("Add-on: API access (SGD 79 / month)");
  });

  it("shows module-wise plans with tabs and sends the module planInterest", async () => {
    const user = userEvent.setup();
    renderPricing();

    const section = document.getElementById("modules");
    expect(within(section).getByRole("heading", { level: 2, name: "Individual modules" })).toBeInTheDocument();

    // HRM is the first tab
    expect(within(section).getByRole("button", { name: "HRM" })).toHaveAttribute("aria-pressed", "true");
    expect(within(section).getByRole("heading", { level: 3, name: /HRM: Core HR/ })).toBeInTheDocument();

    // Switch to Sales and use the module's own toggle + calculator
    await user.click(within(section).getByRole("button", { name: "Sales" }));
    expect(within(section).getByRole("heading", { level: 3, name: "Sales (Product / Service)" })).toBeInTheDocument();
    await user.click(within(section).getByRole("button", { name: "Monthly" }));

    const users = within(section).getByLabelText("Number of users");
    await user.clear(users);
    await user.type(users, "8");

    const advanced = within(section).getByRole("heading", { level: 4, name: "Advanced" }).closest(".mp-card");
    expect(within(advanced).getByText(/For 8 users:/)).toHaveTextContent("For 8 users: SGD 160 / month");

    await user.click(within(advanced).getByRole("button", { name: /Request Pricing/ }));
    await fillLeadForm(user);
    await user.selectOptions(screen.getByLabelText(/Number of Employees/), "11-50");
    await user.click(screen.getByRole("button", { name: /Submit Request/ }));
    await screen.findByRole("status");

    const body = sentBody(fetchMock);
    expect(body.planInterest).toBe("SALES-ADVANCED");
    expect(body.requirements).toContain("Quantity: 8 users");
    expect(body.requirements).toContain("Price shown: SGD 160 / month\n");
  });

  it("banner on /Pricing offers both Complete ERP and individual modules", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Pricing1 headingTag="h1" />
      </MemoryRouter>
    );

    // Only a hidden page title: no visible badge / headline / intro in the banner
    expect(screen.getByRole("heading", { level: 1, name: "SBros ERP Pricing" })).toHaveClass("visually-hidden");
    expect(screen.queryByText("Choose the Right")).not.toBeInTheDocument();
    expect(screen.queryByText(/Take the complete ERP package/)).not.toBeInTheDocument();

    const erp = screen.getByRole("link", { name: /Option 1\s*Complete ERP package/ });
    const mods = screen.getByRole("link", { name: /Option 2\s*Individual modules/ });
    expect(erp).toHaveAttribute("href", "#erp-plans");
    expect(mods).toHaveAttribute("href", "#modules");

    // both targets exist on the page
    expect(document.getElementById("erp-plans")).toHaveTextContent("Complete ERP package");
    expect(document.getElementById("modules")).toHaveTextContent("Individual modules");

    // "From" prices follow the billing toggle (annual default: x 10 / 12)
    expect(erp).toHaveTextContent("From SGD 127.50 / month for 10 employees");
    expect(mods).toHaveTextContent("From SGD 3.40 per employee / month");

    await user.click(screen.getAllByRole("button", { name: "Monthly" })[0]);
    expect(erp).toHaveTextContent("From SGD 150 / month for 10 employees");
    expect(mods).toHaveTextContent("From SGD 4 per employee / month");
  });

  it("only promises what the ERP platform delivers (audit wording)", () => {
    render(
      <MemoryRouter>
        <Pricing1 headingTag="h1" />
      </MemoryRouter>
    );
    const text = document.body.textContent;

    // one plan per customer: no mixing tiers across modules
    expect(text).not.toMatch(/Mix tiers/i);
    expect(screen.getAllByText(/Need different tiers for different modules\? Ask us for a custom quote\./).length).toBeGreaterThanOrEqual(2);

    // manual upgrades, no downgrade promise, honest security line
    expect(text).toContain("Upgrade any time: our team adjusts your invoice pro-rata.");
    expect(text).not.toMatch(/downgrade|pro-rated|enterprise-grade|24\/7/i);
    expect(text).toContain("Secure cloud hosting with SSL encryption and daily backups.");

    // trial is a request, not instant access
    expect(text).not.toMatch(/Start Free Trial/i);
    // 3 Complete ERP cards + 3 tier cards in "Individual modules"
    expect(screen.getAllByRole("button", { name: "Request a free trial" })).toHaveLength(6);

    // Inventory is part of every ERP plan
    expect(screen.getAllByText("Also included: Inventory (warehouses and stock)")).toHaveLength(3);

    // job slots are not enforced yet
    // coming-soon add-ons and features: shown, never sold
    expect(screen.getByRole("button", { name: "Notify me about Extra storage" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Request Extra storage" })).not.toBeInTheDocument();
    expect(screen.getAllByText(/InvoiceNow \(Peppol\) e-invoicing/).length).toBeGreaterThanOrEqual(2);

    // 15-day trial and 15% annual prepay are shown
    expect(text).toContain("15-day free trial (extendable to 30 days on request)");
    expect(text).toContain("Annual prepay: pay the yearly subscription upfront and save 15%.");

    // the package covers all six modules
    expect(screen.getAllByText("All six modules on the Basic plan")).toHaveLength(1);
  });

  it("lists every module as a tab", () => {
    renderPricing();
    const section = document.getElementById("modules");
    ["HRM", "Finance & Accounts", "Sales", "Procurement", "CRM", "Recruitment"].forEach((name) =>
      expect(within(section).getByRole("button", { name })).toBeInTheDocument()
    );
  });

  it("has no Custom plan card in the Complete ERP grid", () => {
    renderPricing();
    expect(document.querySelectorAll(".pricing1-grid .pricing1-card")).toHaveLength(3);
  });
});

describe("module pages", () => {
  const renderModule = (path) =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/module-pricing/:moduleId" element={<ModulePricing />} />
        </Routes>
      </MemoryRouter>
    );

  it("enforces the minimum in the per-user calculator and sends the quantity", async () => {
    const user = userEvent.setup();
    renderModule("/module-pricing/sales");

    await user.click(screen.getByRole("button", { name: "Monthly" }));

    const input = screen.getByLabelText("Number of users");
    await user.clear(input);
    await user.type(input, "3");
    await user.tab();

    expect(input).toHaveValue(5);

    const basic = screen.getByRole("heading", { level: 2, name: "Basic" }).closest(".mp-card");
    expect(within(basic).getByText(/For 5 users:/)).toHaveTextContent("For 5 users: SGD 50 / month");

    await user.click(within(basic).getByRole("button", { name: "Request a free trial" }));
    expect(screen.getByRole("dialog")).toHaveAccessibleName("Request your 15-day free trial");

    await fillLeadForm(user);
    await user.selectOptions(screen.getByLabelText(/Number of Employees/), "1-10");
    await user.click(screen.getByRole("button", { name: /Submit Request/ }));
    await screen.findByRole("status");

    const body = sentBody(fetchMock);
    expect(body.planInterest).toBe("SALES-BASIC");
    expect(body.requirements.startsWith("Free trial request (15 days)")).toBe(true);
    expect(body.requirements).toContain("Quantity: 5 users");
    expect(body.requirements).toContain("Price shown: SGD 50 / month\n");
  });

  it("HRM Intermediate for 25 employees shows SGD 150", async () => {
    const user = userEvent.setup();
    renderModule("/module-pricing/hrm");

    await user.click(screen.getByRole("button", { name: "Monthly" }));
    const input = screen.getByLabelText("Number of employees");
    await user.clear(input);
    await user.type(input, "25");

    const card = screen.getByRole("heading", { level: 2, name: "Intermediate" }).closest(".mp-card");
    expect(within(card).getByText(/For 25 employees:/)).toHaveTextContent("SGD 150 / month");
  });

  it("shows the Recruitment page with active-job limits and add-ons", () => {
    renderModule("/module-pricing/recruitment");

    expect(screen.getByRole("heading", { level: 1, name: "Recruitment" })).toBeInTheDocument();
    expect(screen.getByText("Up to 5 active job openings")).toBeInTheDocument();
    expect(screen.getByText("Up to 20 active job openings")).toBeInTheDocument();
    expect(screen.getByText("Unlimited active job openings")).toBeInTheDocument();
    // no bundles or recruitment-only add-ons in the 24 Oct price list
    expect(screen.queryByText(/bundle/i)).not.toBeInTheDocument();
    expect(screen.queryByText("Public Careers Site")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Request Training" })).toBeInTheDocument();
  });
});
