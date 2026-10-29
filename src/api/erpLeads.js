// =====================================================
// ONE SOLUTION ERP – PUBLIC LEAD API
// POST {VITE_ERP_API_URL}/api/v1/public/leads
// Leads appear in ERP Provider Console › Leads.
// =====================================================

const API_BASE = (import.meta.env.VITE_ERP_API_URL || "").replace(/\/+$/, "");

const LEADS_PATH = "/api/v1/public/leads";

const TIMEOUT_MS = 15000;

// Field limits from the API contract
export const LEAD_LIMITS = {
  company: 200,
  contactName: 150,
  email: 254,
  phone: 50,
  country: 100,
  companySize: 40,
  planInterest: 50,
  requirements: 4000,
};

export class LeadError extends Error {
  constructor(kind, message, fieldErrors = {}) {
    super(message);
    this.name = "LeadError";
    // "validation" | "rate_limit" | "network" | "server" | "config"
    this.kind = kind;
    // API field name -> message (only for "validation")
    this.fieldErrors = fieldErrors;
  }
}

/* ---------- 422 body -> { field: message } ---------- */
// Accepts FastAPI style { detail: [{ loc: [..., "email"], msg }] }
// or { errors: { email: "..." } }.
const readFieldErrors = (body) => {
  const result = {};

  if (Array.isArray(body?.detail)) {
    body.detail.forEach((item) => {
      const field = Array.isArray(item?.loc) ? item.loc[item.loc.length - 1] : null;
      if (typeof field === "string" && item?.msg) result[field] = item.msg;
    });
  } else if (body?.errors && typeof body.errors === "object") {
    Object.entries(body.errors).forEach(([field, msg]) => {
      result[field] = Array.isArray(msg) ? msg.join(" ") : String(msg);
    });
  }

  return result;
};

/* ---------- submit ---------- */
export const submitLead = async (payload, { fetchImpl = fetch } = {}) => {
  if (!API_BASE) {
    // Build was made without .env.production / VITE_ERP_API_URL: never call "undefined/api/..."
    const message =
      "VITE_ERP_API_URL is not set. Add it to .env.production (or the build environment) and rebuild.";
    console.error(`[erpLeads] ${message}`);
    throw new LeadError("config", message);
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let response;

  try {
    response = await fetchImpl(`${API_BASE}${LEADS_PATH}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "omit",
      signal: controller.signal,
    });
  } catch {
    // Offline, DNS, timeout or blocked by CORS
    throw new LeadError("network", "Network request failed.");
  } finally {
    clearTimeout(timer);
  }

  const body = await response.json().catch(() => null);

  if (response.ok) {
    return { id: body?.id, message: body?.message };
  }

  if (response.status === 422) {
    throw new LeadError("validation", "Validation failed.", readFieldErrors(body));
  }

  if (response.status === 429) {
    throw new LeadError("rate_limit", "Too many requests.");
  }

  throw new LeadError("server", `Unexpected status ${response.status}.`);
};

/* =====================================================
   PAYLOAD BUILDERS  (no prices: the sales team replies with pricing)
   selection = {
     kind: "complete" | "module" | "custom" | "addon",
     planInterest: "Complete ERP - Advanced" | "HRM - Intermediate" | "Custom quote" | "Add-on - Training",
     label: string,
     modules?: string[],
     addOn?: { name },               // kind "addon"
     addOnOptions?: [{ code, label }] // tick boxes shown in the form
   }
   values.addOns: labels of the add-ons ticked in the form
===================================================== */

const clip = (value, max) => String(value || "").trim().slice(0, max);

const requestTypeOf = (selection) => {
  if (selection.kind === "addon") return "Add-on enquiry";
  if (selection.kind === "custom") return "Custom quote request";
  return "Pricing request";
};

export const buildRequirements = (selection, values, pageUrl) => {
  const lines = [];

  lines.push(`Request type: ${requestTypeOf(selection)}`);
  lines.push(selection.addOn ? `Add-on: ${selection.addOn.name}` : `Plan: ${selection.label}`);

  if (selection.modules?.length) lines.push(`Modules: ${selection.modules.join(", ")}`);

  const addOns = values.addOns || [];
  if (addOns.length) lines.push(`Add-ons: ${addOns.join("; ")}`);

  lines.push(`Number of employees: ${values.employees || "Not specified"}`);

  if (pageUrl) lines.push(`Page: ${pageUrl}`);

  const message = String(values.message || "").trim();

  lines.push("", "Message:", message || "(none)");

  return lines.join("\n").slice(0, LEAD_LIMITS.requirements);
};

export const buildLeadPayload = (selection, values, pageUrl) => ({
  company: clip(values.company, LEAD_LIMITS.company),
  contactName: clip(values.contactName, LEAD_LIMITS.contactName),
  email: clip(values.email, LEAD_LIMITS.email),
  phone: clip(values.phone, LEAD_LIMITS.phone),
  companySize: clip(values.employees, LEAD_LIMITS.companySize),
  planInterest: clip(selection.planInterest, LEAD_LIMITS.planInterest),
  requirements: buildRequirements(selection, values, pageUrl),
});
