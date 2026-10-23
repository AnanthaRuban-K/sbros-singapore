import { describe, expect, it } from "vitest";
import { modules } from "./pricingData";
import {
  comparisonRows,
  completeErpMonthly,
  cyclePrice,
  describePrice,
  formatSGD,
  moduleMonthly,
} from "./pricingCalc";
import { addOnLead, completeErpLead, customLead, moduleLead } from "./leadSelections";
import { platformAddOns } from "./pricingData";

describe("price calculator", () => {
  it("Complete ERP Advanced for 40 employees is SGD 560", () => {
    expect(completeErpMonthly("advanced", 40)).toBe(560);
  });

  it("Complete ERP never goes below the base price", () => {
    expect(completeErpMonthly("basic", 3)).toBe(150);
    expect(completeErpMonthly("basic", 11)).toBe(153);
  });

  it("HRM Intermediate for 25 employees is SGD 150", () => {
    expect(moduleMonthly(modules.hrm, "intermediate", 25)).toBe(150);
  });

  it("Sales Basic for 3 users charges the 5-user minimum (SGD 50)", () => {
    expect(moduleMonthly(modules.sales, "basic", 3)).toBe(50);
  });

  it("Finance charges extra users above the 3 included", () => {
    expect(moduleMonthly(modules.finance, "intermediate", 3)).toBe(69);
    expect(moduleMonthly(modules.finance, "intermediate", 5)).toBe(69 + 2 * 23);
  });

  it("flat modules ignore quantity", () => {
    expect(moduleMonthly(modules.procurement, "advanced", 99)).toBe(149);
    expect(moduleMonthly(modules.recruitment, "basic")).toBe(49);
  });
});

describe("cheaper than separately table", () => {
  it("matches the approved figures", () => {
    expect(comparisonRows()).toEqual([
      { employees: 10, separately: 513, complete: 350, savingPercent: 32 },
      { employees: 20, separately: 603, complete: 420, savingPercent: 30 },
      { employees: 50, separately: 873, complete: 630, savingPercent: 28 },
      { employees: 100, separately: 1323, complete: 980, savingPercent: 26 },
    ]);
  });
});

describe("billing cycle", () => {
  it("annual = monthly x 10 per year, shown as the effective monthly price", () => {
    expect(cyclePrice(150, "annual")).toEqual({ perYear: 1500, perMonth: 125 });
    expect(cyclePrice(150, "monthly")).toEqual({ perYear: null, perMonth: 150 });
  });

  it("formats prices for display and for the lead", () => {
    expect(formatSGD(1323)).toBe("SGD 1,323");
    expect(formatSGD(250 * 10 / 12)).toBe("SGD 208.33");
    // the billing cycle has its own line in the lead, so it is not repeated here
    expect(describePrice(560, "monthly")).toBe("SGD 560 / month");
    expect(describePrice(560, "annual")).toBe(
      "SGD 5,600 per year (SGD 466.67 / month effective)"
    );
  });
});

describe("planInterest values", () => {
  it("uses the ERP codes", () => {
    expect(completeErpLead({ tierId: "advanced", billing: "annual", employees: 10 }).planInterest).toBe("ADVANCED");
    expect(moduleLead({ moduleId: "hrm", tierId: "intermediate", billing: "annual", quantity: 10 }).planInterest).toBe("HRM-INTERMEDIATE");
    expect(moduleLead({ moduleId: "finance", tierId: "basic", billing: "annual", quantity: 3 }).planInterest).toBe("FINANCE-BASIC");
    expect(moduleLead({ moduleId: "sales", tierId: "advanced", billing: "annual", quantity: 5 }).planInterest).toBe("SALES-ADVANCED");
    expect(moduleLead({ moduleId: "procurement", tierId: "basic", billing: "annual" }).planInterest).toBe("PROCUREMENT-BASIC");
    expect(moduleLead({ moduleId: "crm", tierId: "intermediate", billing: "annual", quantity: 5 }).planInterest).toBe("CRM-INTERMEDIATE");
    expect(moduleLead({ moduleId: "recruitment", tierId: "advanced", billing: "annual" }).planInterest).toBe("RECRUITMENT-ADVANCED");
    expect(customLead({ billing: "annual" }).planInterest).toBe("CUSTOM");
    expect(customLead({ billing: "annual", moduleId: "hrm" }).planInterest).toBe("CUSTOM-HRM");
    expect(customLead({ billing: "annual", moduleId: "procurement" }).planInterest).toBe("CUSTOM-PROCUREMENT");
    const [starter, pro] = modules.recruitment.bundles;
    expect(moduleLead({ moduleId: "recruitment", tierId: starter.tier, billing: "annual", bundle: starter }).planInterest).toBe("RECRUITMENT-BUNDLE-STARTER");
    expect(moduleLead({ moduleId: "recruitment", tierId: pro.tier, billing: "annual", bundle: pro }).planInterest).toBe("RECRUITMENT-BUNDLE-PRO");
    expect(addOnLead(platformAddOns[0]).planInterest).toBe("ADDON-STORAGE");
  });

  it("keeps every planInterest within 50 characters", () => {
    const longest = ["procurement", "recruitment"].map(
      (id) => moduleLead({ moduleId: id, tierId: "intermediate", billing: "annual" }).planInterest
    );
    longest.forEach((code) => expect(code.length).toBeLessThanOrEqual(50));
  });
});
