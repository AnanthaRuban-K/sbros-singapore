import {
  ANNUAL_MONTHS_CHARGED,
  TIERS,
  completeErp,
  modules,
} from "./pricingData";

// =====================================================
// PRICE CALCULATIONS (pure functions, no React)
// =====================================================

export const tierName = (tierId) => TIERS.find((t) => t.id === tierId)?.name || tierId;

/* ---------- money ---------- */
export const formatSGD = (amount) => {
  const rounded = Math.round(amount * 100) / 100;
  const decimals = Number.isInteger(rounded) ? 0 : 2;
  return `SGD ${rounded.toLocaleString("en-SG", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
};

/* ---------- billing cycle ----------
   monthly: pay the list price every month
   annual:  pay 10 months for 12 (list x 10 per year)            */
export const cyclePrice = (monthly, billing) => {
  if (billing === "annual") {
    const perYear = monthly * ANNUAL_MONTHS_CHARGED;
    return { perMonth: perYear / 12, perYear };
  }
  return { perMonth: monthly, perYear: null };
};

// Text for the lead `requirements`, matching what the visitor saw
export const describePrice = (monthly, billing) => {
  const { perMonth, perYear } = cyclePrice(monthly, billing);
  if (billing === "annual") {
    return `${formatSGD(perYear)} per year (${formatSGD(perMonth)} / month effective)`;
  }
  return `${formatSGD(perMonth)} / month`;
};

/* ---------- quantities ---------- */
export const toQuantity = (value, fallback) => {
  const n = Math.floor(Number(value));
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

/* ---------- complete ERP ---------- */
export const completeErpPlan = (tierId) => completeErp.plans.find((p) => p.tier === tierId);

export const completeErpMonthly = (tierId, employees) => {
  const plan = completeErpPlan(tierId);
  const extra = Math.max(0, employees - completeErp.includedEmployees);
  return plan.base + extra * plan.extraEmployee;
};

/* ---------- modules ----------
   Returns the monthly list price for `quantity`
   (employees / users; ignored for flat modules).                */
export const moduleDefaultQuantity = (module) => {
  const { pricing } = module;
  if (pricing.model === "per_unit") return pricing.min;
  if (pricing.model === "flat_with_users") return pricing.included;
  return null;
};

export const moduleMinQuantity = (module) =>
  module.pricing.model === "per_unit" ? module.pricing.min : 1;

export const moduleMonthly = (module, tierId, quantity) => {
  const { pricing } = module;
  const tier = module.tiers[tierId];

  if (pricing.model === "per_unit") {
    return tier.price * Math.max(quantity ?? pricing.min, pricing.min);
  }

  if (pricing.model === "flat_with_users") {
    const users = quantity ?? pricing.included;
    return tier.price + Math.max(0, users - pricing.included) * tier.extraUser;
  }

  return tier.price;
};

// Short unit label shown next to a tier's list price
export const moduleUnitLabel = (module) => {
  const { pricing } = module;
  if (pricing.model === "per_unit") return `per ${pricing.unit} / month`;
  return "per organisation / month";
};

// One-line rules under the price, e.g. "Min. 10 employees (min payable SGD 40)"
export const moduleRuleText = (module, tierId) => {
  const { pricing } = module;
  const tier = module.tiers[tierId];

  if (pricing.model === "per_unit") {
    return `Min. ${pricing.min} ${pricing.unitPlural} (min payable ${formatSGD(tier.price * pricing.min)} / month)`;
  }

  if (pricing.model === "flat_with_users") {
    return `${pricing.included} users included, extra user ${formatSGD(tier.extraUser)} / month`;
  }

  return pricing.note;
};

/* ---------- cumulative features ----------
   [{ tierId, tierName, features }] for every tier up to `tierId` */
export const featuresUpTo = (module, tierId) => {
  const last = TIERS.findIndex((t) => t.id === tierId);
  return TIERS.slice(0, last + 1).map((t) => ({
    tierId: t.id,
    tierName: t.name,
    features: module.tiers[t.id].features,
  }));
};

/* ---------- "cheaper than separately" ---------- */
export const separatelyMonthly = (tierId, employees) =>
  completeErp.moduleIds.reduce((sum, id) => {
    const module = modules[id];
    const qty = module.pricing.unit === "employee" ? employees : undefined;
    return sum + moduleMonthly(module, tierId, qty);
  }, 0);

export const comparisonRows = () => {
  const { tier, employeeCounts } = completeErp.comparison;
  return employeeCounts.map((employees) => {
    const separately = separatelyMonthly(tier, employees);
    const complete = completeErpMonthly(tier, employees);
    return {
      employees,
      separately,
      complete,
      savingPercent: Math.round((1 - complete / separately) * 100),
    };
  });
};

/* ---------- "From" prices for the /Pricing banner ---------- */
// Cheapest Complete ERP plan (base price, includes 10 employees)
export const completeErpFrom = () => Math.min(...completeErp.plans.map((p) => p.base));

// Cheapest per-employee / per-user module tier, e.g. { price: 4, unit: "employee" }
export const moduleFrom = () =>
  Object.values(modules)
    .filter((m) => m.pricing.model === "per_unit")
    .map((m) => ({ price: Math.min(...Object.values(m.tiers).map((t) => t.price)), unit: m.pricing.unit }))
    .sort((a, b) => a.price - b.price)[0];

/* ---------- employee range for the lead form ---------- */
export const employeeRange = (employees) => {
  if (!employees) return "";
  if (employees <= 10) return "1-10";
  if (employees <= 50) return "11-50";
  if (employees <= 200) return "51-200";
  if (employees <= 500) return "201-500";
  return "500+";
};
