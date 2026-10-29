import { addOns, completeErp, modules, tierName } from "./pricingData";

// =====================================================
// Builds the `plan` object passed to <PlanLeadForm />.
// planInterest (max 50 chars) is the plan as the sales team reads it,
// e.g. "Complete ERP - Advanced" or "HRM - Intermediate".
// No prices: the sales team replies with the base price.
// See "selection" in src/api/erpLeads.js.
// =====================================================

// Available add-ons a visitor can tick in the enquiry form
export const addOnOptions = addOns
  .filter((a) => a.status === "available")
  .map((a) => ({ code: a.code, label: a.name }));

const allModuleNames = () => completeErp.moduleIds.map((id) => modules[id].name);

/* ---------- Complete ERP plan ---------- */
export const completeErpLead = (tierId) => {
  const label = `${completeErp.name} - ${tierName(tierId)}`;
  return { kind: "complete", planInterest: label, label, modules: allModuleNames(), addOnOptions };
};

/* ---------- single module plan ---------- */
export const moduleLead = (moduleId, tierId) => {
  const label = `${modules[moduleId].name} - ${tierName(tierId)}`;
  return { kind: "module", planInterest: label, label, modules: [modules[moduleId].name], addOnOptions };
};

/* ---------- custom quote ---------- */
export const customLead = () => ({
  kind: "custom",
  planInterest: "Custom quote",
  label: "Custom quote",
  modules: allModuleNames(),
  addOnOptions,
});

/* ---------- add-on enquiry ---------- */
export const addOnLead = (addOn) => {
  const label = `Add-on - ${addOn.name}`;
  return { kind: "addon", planInterest: label, label: addOn.name, addOn: { name: addOn.name } };
};
