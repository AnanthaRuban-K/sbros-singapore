import {
  BILLING_LABELS,
  TRIAL_DAYS,
  allAddOns,
  completeErp,
  modules,
  platformAddOns,
  recruitmentAddOns,
} from "./pricingData";
import { completeErpMonthly, describePrice, moduleMonthly, tierName } from "./pricingCalc";

// =====================================================
// Builds the `plan` object passed to <PlanLeadForm />.
// See "selection" in src/api/erpLeads.js.
// =====================================================

const addOnText = (addOn) => `${addOn.name} (${addOn.price})`;

// Available add-ons a visitor can tick in the lead form
export const addOnOptionsFor = (moduleId) =>
  allAddOns
    .filter((a) => a.status === "available")
    .filter((a) => (moduleId ? !a.modules || a.modules.includes(moduleId) : !a.modules || a.modules.includes("hrm")))
    .map((a) => ({ code: a.code, label: addOnText(a) }));

/* ---------- Complete ERP plan ---------- */
export const completeErpLead = ({ tierId, billing, employees, trial = false }) => ({
  kind: "complete",
  planInterest: tierId.toUpperCase(),
  label: `${completeErp.name} ${tierName(tierId)}`,
  billingCycle: BILLING_LABELS[billing],
  quantity: employees,
  quantityUnit: "employees",
  priceShown: describePrice(completeErpMonthly(tierId, employees), billing),
  modules: completeErp.moduleIds.map((id) => modules[id].name),
  freeTrial: trial,
  trialDays: TRIAL_DAYS,
  addOnOptions: addOnOptionsFor(null),
});

/* ---------- single module tier ---------- */
export const moduleLead = ({ moduleId, tierId, billing, quantity, trial = false, bundle = null }) => {
  const module = modules[moduleId];
  const unitPlural = module.pricing.unitPlural;
  const bundleAddOns = (bundle?.addOnCodes || [])
    .map((code) => allAddOns.find((a) => a.code === code))
    .filter(Boolean);

  return {
    kind: "module",
    planInterest: bundle ? bundle.planInterest : `${moduleId}-${tierId}`.toUpperCase(),
    label: bundle
      ? `${module.name} ${bundle.name} bundle`
      : `${module.name} – ${tierName(tierId)}`,
    billingCycle: BILLING_LABELS[billing],
    quantity: unitPlural ? quantity : null,
    quantityUnit: unitPlural || null,
    priceShown: bundle
      ? describePrice(bundle.price, billing)
      : describePrice(moduleMonthly(module, tierId, quantity), billing),
    modules: [module.name],
    freeTrial: trial,
    trialDays: TRIAL_DAYS,
    preselectedAddOns: bundleAddOns.map(addOnText),
    addOnOptions: addOnOptionsFor(moduleId).filter(
      (o) => !bundleAddOns.some((a) => a.code === o.code)
    ),
  };
};

/* ---------- custom quote ---------- */
export const customLead = ({ billing, moduleId = null }) => ({
  kind: "custom",
  planInterest: moduleId ? `CUSTOM-${moduleId.toUpperCase()}` : "CUSTOM",
  label: moduleId ? `${modules[moduleId].name} – Custom` : "Custom",
  billingCycle: BILLING_LABELS[billing],
  modules: moduleId ? [modules[moduleId].name] : completeErp.moduleIds.map((id) => modules[id].name),
  addOnOptions: addOnOptionsFor(moduleId),
});

/* ---------- add-on request / notify ---------- */
export const addOnLead = (addOn) => ({
  kind: "addon",
  planInterest: `ADDON-${addOn.code}`,
  label: addOn.name,
  addOn: { name: addOn.name, price: addOn.price },
  notify: addOn.status === "coming_soon",
});

// Add-ons listed on a module page: module-specific group first, then platform add-ons
export const addOnGroupsForModule = (moduleId) => {
  const own = recruitmentAddOns.filter((a) => a.modules.includes(moduleId));
  const platform = platformAddOns.filter((a) => !a.modules || a.modules.includes(moduleId));
  return [
    own.length > 0 && { title: `${modules[moduleId].name} add-ons`, addOns: own },
    { title: "Platform add-ons", addOns: platform },
  ].filter(Boolean);
};
