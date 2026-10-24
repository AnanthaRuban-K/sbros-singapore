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
  it("Complete ERP Advanced for 40 employees is SGD 590 (350 + 30 x 8)", () => {
    expect(completeErpMonthly("advanced", 40)).toBe(590);
  });

  it("Complete ERP never goes below the base price", () => {
    expect(completeErpMonthly("basic", 3)).toBe(150);
    expect(completeErpMonthly("basic", 11)).toBe(154);
  });

  it("HRM Intermediate for 25 employees is SGD 150", () => {
    expect(moduleMonthly(modules.hrm, "intermediate", 25)).toBe(150);
  });

  it("HRM Basic for 6 employees charges the 10-employee minimum (SGD 40)", () => {
    expect(moduleMonthly(modules.hrm, "basic", 6)).toBe(40);
  });

  it("Sales Basic for 3 users charges the 5-user minimum (SGD 50)", () => {
    expect(moduleMonthly(modules.sales, "basic", 3)).toBe(50);
  });

  it("Sales Advanced for 8 users is SGD 160", () => {
    expect(moduleMonthly(modules.sales, "advanced", 8)).toBe(160);
  });

  it("Finance is a flat price per organisation, any user count", () => {
    expect(moduleMonthly(modules.finance, "basic")).toBe(30);
    expect(moduleMonthly(modules.finance, "intermediate", 3)).toBe(60);
    expect(moduleMonthly(modules.finance, "advanced", 500)).toBe(90);
  });

  it("flat modules ignore quantity", () => {
    expect(moduleMonthly(modules.procurement, "advanced", 99)).toBe(149);
    expect(moduleMonthly(modules.recruitment, "basic")).toBe(49);
  });
});

describe("cheaper than separately table", () => {
  it("matches the approved figures", () => {
    expect(comparisonRows()).toEqual([
      { employees: 10, separately: 643, complete: 350, savingPercent: 46 },
      { employees: 20, separately: 723, complete: 430, savingPercent: 41 },
      { employees: 50, separately: 963, complete: 670, savingPercent: 30 },
      { employees: 100, separately: 1363, complete: 1070, savingPercent: 21 },
    ]);
  });
});

describe("billing cycle", () => {
  it("annual prepay = monthly x 12 x 0.85, shown as the effective monthly price", () => {
    expect(cyclePrice(150, "annual")).toEqual({ perYear: 1530, perMonth: 127.5 });
    expect(cyclePrice(590, "annual")).toEqual({ perYear: 6018, perMonth: 501.5 });
    expect(cyclePrice(150, "monthly")).toEqual({ perYear: null, perMonth: 150 });
  });

  it("formats prices for display and for the lead", () => {
    expect(formatSGD(1363)).toBe("SGD 1,363");
    expect(formatSGD(127.5)).toBe("SGD 127.50");
    // the billing cycle has its own line in the lead, so it is not repeated here
    expect(describePrice(590, "monthly")).toBe("SGD 590 / month");
    expect(describePrice(590, "annual")).toBe(
      "SGD 6,018 per year (SGD 501.50 / month effective)"
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
    expect(addOnLead(platformAddOns.find((x) => x.code === "STORAGE")).planInterest).toBe("ADDON-STORAGE");
  });

  it("keeps every planInterest within 50 characters", () => {
    const longest = ["procurement", "recruitment"].map(
      (id) => moduleLead({ moduleId: id, tierId: "intermediate", billing: "annual" }).planInterest
    );
    longest.forEach((code) => expect(code.length).toBeLessThanOrEqual(50));
  });
});
