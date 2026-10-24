// =====================================================
// PRICING DATA  (single source for every pricing page)
// Source: One Solution ERP - Plans & Pricing, initial selling price,
// version 1.0, 24 October 2026.
// List prices are SGD per month, excluding GST.
// To change a price, feature or add-on status, edit this file only.
// =====================================================

export const CURRENCY = "SGD";

// Free trial length (days) on any plan, and how far it can be extended on request
export const TRIAL_DAYS = 15;
export const TRIAL_MAX_DAYS = 30;

// Annual prepay: pay the year upfront and save 15%
export const ANNUAL_DISCOUNT = 0.15;

export const BILLING_LABELS = {
  monthly: "Monthly",
  annual: "Annual prepay (save 15%)",
};

export const PRICING_NOTE = {
  base: "All prices in SGD per month, excluding GST.",
  annual: "Annual prepay: pay the year upfront and save 15%.",
  monthly: "Billed monthly. Choose annual prepay to save 15%.",
};

export const TIERS = [
  { id: "basic", name: "Basic" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
];

// =====================================================
// MODULES
// pricing.model:
//   "per_unit"  price x max(quantity, min)   (min payable = price x min)
//   "flat"      flat price per organisation
// tier.limit: plan limit shown on the card (e.g. Recruitment active jobs)
// Feature item: "text" or { text, comingSoon: true }
// Each tier lists only what it adds to the tier below.
// =====================================================

export const MODULE_ORDER = ["hrm", "finance", "sales", "procurement", "crm", "recruitment"];

export const modules = {
  hrm: {
    id: "hrm",
    name: "HRM",
    title: "HRM: Core HR, Attendance, Leave and Payroll",
    icon: "bi bi-people-fill",
    pricing: { model: "per_unit", unit: "employee", unitPlural: "employees", min: 10 },
    tiers: {
      basic: {
        price: 4,
        features: [
          "Employee master, documents, self-service portal",
          "Organisation structure, departments, designations",
          "Onboarding and exit / offboarding",
          "Attendance, punch-in, shifts, holidays",
          "Leave apply and approve, configurable leave types and government-paid leave claims",
          "Payroll processing and payslips",
          "CPF contributions and SDL, CPF EZPay file",
          "IR8A and Appendix 8A preparation for IRAS filing",
          "Mobile app for employees",
        ],
      },
      intermediate: {
        price: 6,
        features: [
          "Attendance correction, overtime",
          "Leave policies, cancellation, carry forward",
          "Expense claims",
          "Employee contracts, payroll adjustments",
          "Performance management",
          "Announcements, company policies, asset tracking",
          "MOM work pass and quota tracking, FWL contributions",
          { text: "Bank salary payment file (GIRO)", comingSoon: true },
        ],
      },
      advanced: {
        price: 8,
        features: [
          "IR21 tax clearance tracking (cessation of foreign employees)",
          "Bonus and ad-hoc payments",
          "Multi-level approval workflows",
          "Audit log, attendance and statutory reports",
        ],
      },
    },
    footnote:
      "CPF, SDL and IR8A preparation are in every plan. FWL and MOM work pass tracking start at Intermediate; IR21 tax clearance tracking is in Advanced.",
  },

  finance: {
    id: "finance",
    name: "Finance & Accounts",
    title: "Finance & Accounts",
    icon: "bi bi-wallet-fill",
    pricing: {
      model: "flat",
      note: "Unlimited users, no per-user charge (accountants and auditors can be added free)",
    },
    tiers: {
      basic: {
        price: 30,
        features: [
          "Chart of accounts, general ledger",
          "Journals and vouchers",
          "Customer invoices, vendor bills, payments",
          "Customer and vendor ledgers",
          "Trial balance, P&L, balance sheet, cash flow and ageing reports",
          "GST (9%) tax codes and GST tax invoices",
          "GST F5 return report (main boxes calculated automatically)",
        ],
      },
      intermediate: {
        price: 60,
        features: [
          "Bank accounts and bank reconciliation",
          "Credit notes and debit notes",
          "Cost centres",
          "Multi-currency and exchange rates",
          "Fiscal years, posting periods, finance approvals",
          { text: "InvoiceNow (Peppol) e-invoicing to IRAS", comingSoon: true },
        ],
      },
      advanced: {
        price: 90,
        features: [
          "Fixed assets and depreciation",
          "Tally sync and export",
          "Payroll-to-Finance integration",
          "Period re-open with approval",
          "Online payment tracking (FAST, GIRO, PayNow)",
          "Data migration (ledgers and opening balances)",
          { text: "Sub-ledger reconciliation", comingSoon: true },
        ],
      },
    },
  },

  sales: {
    id: "sales",
    name: "Sales",
    title: "Sales (Product / Service)",
    icon: "bi bi-bag-check-fill",
    pricing: { model: "per_unit", unit: "user", unitPlural: "users", min: 5 },
    tiers: {
      basic: {
        price: 10,
        features: [
          "Sales quotations",
          "Sales orders",
          "Sales invoices (GST tax invoice format)",
          "Direct sales",
        ],
      },
      intermediate: {
        price: 15,
        features: [
          "Quotation revisions",
          "Delivery order (DO) and dispatch; service delivery",
          "Credit notes and sales returns",
        ],
      },
      advanced: {
        price: 20,
        features: [
          "Pick lists and packing lists",
          "Return request and approval workflow; service cancellation approval",
          "Customer purchase orders",
          "Service and maintenance tracking",
        ],
      },
    },
  },

  procurement: {
    id: "procurement",
    name: "Procurement",
    title: "Procurement",
    icon: "bi bi-cart-check-fill",
    pricing: { model: "flat", note: "Unlimited users, flat price, no per-user charge" },
    tiers: {
      basic: {
        price: 49,
        features: ["Material and product requests", "Purchase orders"],
      },
      intermediate: {
        price: 99,
        features: ["Vendor quotation upload", "Quotation comparison and selection"],
      },
      advanced: {
        price: 149,
        features: [
          "Goods receipt (GRN) flow",
          "Vendor bills linked to PO and GRN in Finance payables",
          "Approval workflows",
        ],
      },
    },
  },

  crm: {
    id: "crm",
    name: "CRM",
    title: "CRM: Customer Relationship Management",
    icon: "bi bi-person-lines-fill",
    pricing: { model: "per_unit", unit: "user", unitPlural: "users", min: 5 },
    tiers: {
      basic: {
        price: 8,
        features: ["Customer master", "Leads and contacts"],
      },
      intermediate: {
        price: 12,
        features: ["Marketing campaigns", "Follow-up reminders (email and WhatsApp)"],
      },
      advanced: {
        price: 15,
        features: [
          "Campaign analytics (ROI, cost per conversion)",
          "Team-based data access",
          "CRM audit trail",
          "Lead scoring and web-form lead capture",
        ],
      },
    },
  },

  recruitment: {
    id: "recruitment",
    name: "Recruitment",
    title: "Recruitment",
    icon: "bi bi-person-badge-fill",
    intro:
      "Priced flat per organisation, so recruiters, hiring managers and interview panel members can all take part at no extra cost.",
    pricing: { model: "flat", note: "Unlimited users, flat price, no per-user charge" },
    tiers: {
      basic: {
        price: 49,
        limit: "Up to 5 active job openings",
        features: [
          "Job openings",
          "Applications inbox",
          "Candidate pipeline (board view)",
          "Candidate documents and activity history",
          "Basic dashboard",
        ],
      },
      intermediate: {
        price: 99,
        limit: "Up to 20 active job openings",
        features: [
          "Job requisitions with approval",
          "Interview scheduling and panels",
          "\"My Interviews\" for panel members",
          "Offer management with approval",
          "Recruitment reports",
        ],
      },
      advanced: {
        price: 149,
        limit: "Unlimited active job openings",
        features: [
          "Hiring analytics: funnel, time-to-fill and time-to-hire",
          "Custom pipeline stages and settings",
          "Hire-to-employee conversion into HRM onboarding",
          "Full audit trail",
        ],
      },
    },
  },
};

// =====================================================
// COMPLETE ERP PACKAGE  (all six modules, one tier)
// price = base + max(0, employees - includedEmployees) x extraEmployee
// =====================================================

export const completeErp = {
  name: "Complete ERP",
  moduleIds: ["hrm", "finance", "sales", "procurement", "crm", "recruitment"],
  // Also part of every ERP plan, not sold as a separate module
  alsoIncluded: ["Inventory (warehouses and stock)"],
  includedEmployees: 10,
  plans: [
    {
      tier: "basic",
      icon: "leaf",
      base: 150,
      extraEmployee: 4,
      description: "Perfect for startups and small teams",
      features: [
        "All six modules on the Basic plan",
        "Features as listed under each module's Basic plan",
        "Cross-module integration: Payroll to Finance, Procurement to Payables, Recruitment to HRM onboarding",
        "Singapore compliance: CPF and SDL, IR8A preparation, GST (9%)",
      ],
    },
    {
      tier: "intermediate",
      icon: "chart",
      base: 250,
      extraEmployee: 6,
      description: "Ideal for growing businesses",
      features: [
        "All six modules on the Intermediate plan",
        "Features as listed under each module's Intermediate plan",
        "Cross-module integration, as in Basic",
        "Singapore compliance: CPF, SDL and FWL, IR8A preparation, MOM work pass tracking, GST (9%)",
        { text: "InvoiceNow (Peppol) e-invoicing", comingSoon: true },
      ],
    },
    {
      tier: "advanced",
      icon: "rocket",
      base: 350,
      extraEmployee: 8,
      description: "For established and expanding teams",
      features: [
        "All six modules on the Advanced plan",
        "Features as listed under each module's Advanced plan",
        "Cross-module integration, as in Basic",
        "Singapore compliance: as Intermediate, plus IR21 tax clearance tracking",
        { text: "InvoiceNow (Peppol) e-invoicing", comingSoon: true },
      ],
    },
  ],
  // "Cheaper than buying modules separately" table (Advanced tier).
  // Figures and footnote are calculated from the module prices above.
  comparison: {
    tier: "advanced",
    employeeCounts: [10, 20, 50, 100],
  },
};

// =====================================================
// ADD-ONS
// status: "available" | "coming_soon" (coming soon: shown, never sold)
// modules: module ids where the add-on is listed (omit = all modules)
// =====================================================

export const platformAddOns = [
  { code: "BIOMETRIC", name: "Biometric device integration", price: "SGD 49 / month per site", description: "Attendance devices synced automatically", status: "available", modules: ["hrm"] },
  { code: "PREMIUM-SUPPORT", name: "Premium support", price: "15% of subscription (minimum SGD 99 / month)", description: "Dedicated account manager, 4-hour response time", status: "available" },
  { code: "IMPLEMENTATION", name: "Implementation and data migration", price: "SGD 500 / 1,500 / 3,000 one-time", description: "Fixed packages: 500 (1-2 modules, up to 20 employees), 1,500 (3-4 modules), 3,000 (all modules + data migration). Waived for founding customers.", status: "available" },
  { code: "TRAINING", name: "Training", price: "SGD 300 per session", description: "Online or on-site", status: "available" },
  { code: "STORAGE", name: "Extra storage", price: "SGD 10 / month per 10 GB", description: "Documents, payslips, resumes", status: "coming_soon" },
  { code: "API", name: "API access", price: "SGD 79 / month", description: "Integration with your other systems", status: "coming_soon" },
  { code: "SSO", name: "Single sign-on (SSO / SAML)", price: "SGD 99 / month", description: "Microsoft / Google login for enterprise customers", status: "coming_soon" },
  { code: "SANDBOX", name: "Sandbox environment", price: "SGD 99 / month", description: "Test configuration safely before going live", status: "coming_soon" },
  { code: "AUDIT-RETENTION", name: "Extended audit log retention", price: "SGD 29 / month", description: "Standard plans keep records for 5 years (IRAS / ACRA minimum). This add-on extends retention to 7 years or longer.", status: "coming_soon" },
];

export const allAddOns = platformAddOns;

// =====================================================
// HERO TRUST POINTS (top of /Pricing)
// =====================================================

export const heroHighlights = [
  `${TRIAL_DAYS}-day free trial (extendable to ${TRIAL_MAX_DAYS} days on request)`,
  "No credit card required",
  "Annual prepay: save 15%",
  "Mobile app on every plan",
];

// =====================================================
// BILLING TERMS (bottom of /Pricing)
// =====================================================

export const billingTerms = [
  `Free trial: ${TRIAL_DAYS} days, can be extended to ${TRIAL_MAX_DAYS} days on request.`,
  "Annual prepay: pay the yearly subscription upfront and save 15%.",
  "Prices in SGD per month, exclusive of GST. GST is added at the prevailing rate.",
  "Upgrade any time: our team adjusts your invoice pro-rata.",
  "Each higher plan includes everything in the plan below.",
  "Need different tiers for different modules? Ask us for a custom quote.",
  "Every plan includes the mobile app, data backup, SSL security and standard email support.",
];
