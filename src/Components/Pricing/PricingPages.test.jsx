import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import Pricing1 from "./Pricing1";
import ModulePlansRedirect from "./ModulePlansRedirect";
import { completeErpLead, customLead, moduleLead, addOnLead } from "./leadSelections";
import { MODULE_ORDER, TIERS, addOns } from "./pricingData";

// Anything that looks like a price on the page
const PRICE_PATTERN = /SGD|S\$|\$\s?\d|\/ ?month|per (user|employee|organisation)|billed|save \d|\d+%|from \d/i;

const renderPlans = () =>
  render(
    <MemoryRouter>
      <Pricing1 headingTag="h1" />
    </MemoryRouter>
  );

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

describe("/Pricing plans page", () => {
  it("shows no price anywhere", () => {
    renderPlans();
    // GST (9%) is a tax rate in a feature name, not a price
    const text = document.body.textContent.replace(/GST \(9%\)/g, "");
    expect(text).not.toMatch(PRICE_PATTERN);
  });

  it("shows only the allowed plan terms", () => {
    renderPlans();
    const text = document.body.textContent;
    expect(text).toContain("15-day free trial, extendable to 30 days on request");
    expect(text).toContain("Discount for annual prepayment");
    expect(text).toContain("Prices exclude GST");
  });

  it("has a Complete ERP section and one section per module, each with three plans", () => {
    renderPlans();

    const erp = document.getElementById("erp-plans");
    expect(erp).toHaveTextContent("Complete ERP Package");
    expect(document.querySelectorAll(".pricing1-grid .pricing1-card")).toHaveLength(3);

    MODULE_ORDER.forEach((id) => {
      const section = document.getElementById(`plans-${id}`);
      expect(section).toBeInTheDocument();
      expect(section.querySelectorAll(".mp-card")).toHaveLength(3);
      expect(within(section).getAllByText("Everything in the plan below, plus:")).toHaveLength(2);
    });

    // 3 Complete ERP cards + 6 modules x 3 plans
    expect(screen.getAllByRole("button", { name: /^Get pricing for / })).toHaveLength(3 + MODULE_ORDER.length * TIERS.length);
  });

  it("marks coming-soon features with a muted tag", () => {
    renderPlans();
    const hrm = document.getElementById("plans-hrm");
    const giro = within(hrm).getByText(/Bank salary payment file \(GIRO\)/);
    expect(within(giro.closest("li")).getByText("Coming soon")).toBeInTheDocument();
    expect(screen.getAllByText(/InvoiceNow \(Peppol\)/).length).toBeGreaterThanOrEqual(2);
  });

  it("Get pricing opens the enquiry form with the plan selected", async () => {
    const user = userEvent.setup();
    renderPlans();

    await user.click(screen.getByRole("button", { name: "Get pricing for HRM Intermediate" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAccessibleName("Get pricing – HRM - Intermediate");
    expect(within(dialog).getByText("HRM - Intermediate")).toBeInTheDocument();
    expect(dialog.textContent).not.toMatch(PRICE_PATTERN);
  });

  it("add-ons: available ones can be enquired about, coming-soon ones cannot", () => {
    renderPlans();
    const section = document.getElementById("add-ons");

    addOns.forEach((a) => {
      expect(within(section).getByText(a.name)).toBeInTheDocument();
      const button = within(section).queryByRole("button", { name: `Ask about ${a.name}` });
      if (a.status === "available") expect(button).toBeInTheDocument();
      else expect(button).not.toBeInTheDocument();
    });
  });
});

describe("planInterest values", () => {
  it("name the plan as the sales team reads it, within 50 characters", () => {
    expect(completeErpLead("advanced").planInterest).toBe("Complete ERP - Advanced");
    expect(moduleLead("hrm", "intermediate").planInterest).toBe("HRM - Intermediate");
    expect(moduleLead("finance", "basic").planInterest).toBe("Finance & Accounts - Basic");
    expect(customLead().planInterest).toBe("Custom quote");
    expect(addOnLead({ name: "Training" }).planInterest).toBe("Add-on - Training");

    const all = [
      ...TIERS.map((t) => completeErpLead(t.id).planInterest),
      ...MODULE_ORDER.flatMap((id) => TIERS.map((t) => moduleLead(id, t.id).planInterest)),
      ...addOns.map((a) => addOnLead(a).planInterest),
    ];
    all.forEach((code) => expect(code.length).toBeLessThanOrEqual(50));
  });
});

describe("old module pricing URLs", () => {
  const Where = () => {
    const { pathname, hash } = useLocation();
    return <p data-testid="where">{pathname + hash}</p>;
  };

  const renderAt = (path) =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/module-pricing/:moduleId" element={<ModulePlansRedirect />} />
          <Route path="/module-pricing/:moduleId/:planId/details" element={<ModulePlansRedirect />} />
          <Route path="/Pricing" element={<Where />} />
        </Routes>
      </MemoryRouter>
    );

  it("redirect to the module's section of the Plans page", () => {
    renderAt("/module-pricing/hrm");
    expect(screen.getByTestId("where")).toHaveTextContent("/Pricing#plans-hrm");
  });

  it("redirect plan detail pages too, and unknown modules to the module list", () => {
    renderAt("/module-pricing/crm/advanced/details");
    expect(screen.getByTestId("where")).toHaveTextContent("/Pricing#plans-crm");
  });

  it("send unknown modules to the module list", () => {
    renderAt("/module-pricing/unknown");
    expect(screen.getByTestId("where")).toHaveTextContent("/Pricing#modules");
  });
});
