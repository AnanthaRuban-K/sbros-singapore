import { LEAD_LIMITS } from "../../api/erpLeads";

// =====================================================
// 15-day free trial request: shared constants and helpers
// =====================================================

// Sent as planInterest; shown in ERP Provider Console › Leads
export const TRIAL_PLAN_INTEREST = "FREE_TRIAL_15D";

export const TRIAL_NOTE = "15 days free · No credit card · Full access to your chosen modules";

/* ---------- requirements text: "Modules: HRM, Payroll" + message ---------- */
export const buildTrialRequirements = (modules, message) => {
  const parts = [];
  if (modules.length) parts.push(`Modules: ${modules.join(", ")}`);
  const text = String(message || "").trim();
  if (text) parts.push(text);
  parts.push("Consent: agreed to be contacted about the trial and to the Privacy Policy.");
  return parts.join("\n\n").slice(0, LEAD_LIMITS.requirements);
};
