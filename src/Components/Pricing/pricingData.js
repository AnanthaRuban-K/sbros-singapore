// =====================================================
// PLANS DATA  (single source for the Plans page, home teaser and enquiry form)
// One Solution ERP plans and features.
// The website never shows a price: every plan has a "Get pricing" enquiry and
// our sales team replies with the base price for the chosen plan.
// To change a plan, feature or add-on status, edit this file only.
// =====================================================

// Free trial length (days) on any plan, and how far it can be extended on request
export const TRIAL_DAYS = 15;
export const TRIAL_MAX_DAYS = 30;

export const TIERS = [
  { id: "basic", name: "Basic" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
];

export const tierName = (tierId) => TIERS.find((t) => t.id === tierId)?.name || tierId;

// =====================================================
// MODULES
// note:  shown under the module title (e.g. "Unlimited users")
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
    tiers: {
      basic: {
        features: [
          "Employee master, documents, self-service portal",
          "Organisation structure, departments, designations",
          "Onboarding and exit / offboarding",
          "Attendance, punch-in, shifts, holidays",
          "Leave apply and approve, configurable leave types and government-paid leave claims",
          "Payroll processing and payslips",
          "CPF contributions and SDL, CPF EZPay file",
          "IR8A and Appendix 8A preparation for IRAS filing",
          // "Mobile app for employees" - publish once confirmed
        ],
      },
      intermediate: {
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
        features: [
          "IR21 tax clearance tracking",
          "Bonus and ad-hoc payments",
          "Multi-level approval workflows",
          "Audit log, attendance and statutory reports",
        ],
      },
    },
  },

  finance: {
    id: "finance",
    name: "Finance & Accounts",
    title: "Finance & Accounts",
    icon: "bi bi-wallet-fill",
    note: "Unlimited users",
    tiers: {
      basic: {
        features: [
          "Chart of accounts, general ledger",
          "Journals and vouchers",
          "Customer invoices, vendor bills, payments",
          "Customer and vendor ledgers",
          "Trial balance, P&L, balance sheet, cash flow and ageing reports",
          "GST (9%) tax codes and GST tax invoices",
          "GST F5 return report",
        ],
      },
      intermediate: {
        features: [
          "Bank accounts and bank reconciliation",
          "Credit and debit notes",
          "Cost centres",
          "Multi-currency and exchange rates",
          "Fiscal years, posting periods, finance approvals",
          { text: "InvoiceNow (Peppol) e-invoicing to IRAS", comingSoon: true },
        ],
      },
      advanced: {
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
    tiers: {
      basic: {
        features: [
          "Sales quotations",
          "Sales orders",
          "Sales invoices (GST tax invoice format)",
          "Direct sales",
        ],
      },
      intermediate: {
        features: [
          "Quotation revisions",
          "Delivery order (DO) and dispatch / service delivery",
          "Credit notes and sales returns",
        ],
      },
      advanced: {
        features: [
          "Pick lists and packing lists",
          "Return request and approval workflow",
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
    note: "Unlimited users",
    tiers: {
      basic: {
        features: ["Material and product requests", "Purchase orders"],
      },
      intermediate: {
        features: ["Vendor quotation upload", "Quotation comparison and selection"],
      },
      advanced: {
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
    tiers: {
      basic: {
        features: ["Customer master", "Leads and contacts"],
      },
      intermediate: {
        features: ["Marketing campaigns", "Follow-up reminders (email and WhatsApp)"],
      },
      advanced: {
        features: [
          "Campaign analytics",
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
    tiers: {
      basic: {
        limit: "Up to 5 active jobs",
        features: [
          "Job openings",
          "Applications inbox",
          "Candidate pipeline (board view)",
          "Candidate documents and activity history",
          "Basic dashboard",
        ],
      },
      intermediate: {
        limit: "Up to 20 active jobs",
        features: [
          "Job requisitions with approval",
          "Interview scheduling and panels",
          "\"My Interviews\" for panel members",
          "Offer management with approval",
          "Recruitment reports",
        ],
      },
      advanced: {
        limit: "Unlimited active jobs",
        features: [
          "Hiring analytics (funnel, time-to-fill, time-to-hire)",
          "Custom pipeline stages and settings",
          "Hire-to-employee conversion into HRM onboarding",
          "Full audit trail",
        ],
      },
    },
  },
};

// =====================================================
// COMPLETE ERP PACKAGE  (all six modules, one plan)
// =====================================================

export const completeErp = {
  name: "Complete ERP",
  title: "Complete ERP Package",
  intro:
    "All six modules on the chosen plan, with cross-module integration: Payroll to Finance, Procurement to Payables, Recruitment to HRM onboarding.",
  moduleIds: MODULE_ORDER,
  plans: [
    {
      tier: "basic",
      icon: "leaf",
      description: "Perfect for startups and small teams",
      features: [
        "All six modules on the Basic plan",
        "Cross-module integration: Payroll to Finance, Procurement to Payables, Recruitment to HRM onboarding",
        "Singapore compliance: CPF and SDL, IR8A preparation, GST (9%)",
      ],
    },
    {
      tier: "intermediate",
      icon: "chart",
      description: "Ideal for growing businesses",
      features: [
        "All six modules on the Intermediate plan",
        "FWL and MOM work pass tracking",
        { text: "InvoiceNow (Peppol) e-invoicing", comingSoon: true },
      ],
    },
    {
      tier: "advanced",
      icon: "rocket",
      description: "For established and expanding teams",
      features: [
        "All six modules on the Advanced plan",
        "IR21 tax clearance tracking",
      ],
    },
  ],
};

// =====================================================
// ADD-ONS  (names only)
// status: "available" | "coming_soon" (coming soon: shown, no enquiry)
// =====================================================

export const addOns = [
  { code: "BIOMETRIC", name: "Biometric device integration", status: "available" },
  { code: "PREMIUM-SUPPORT", name: "Premium support", status: "available" },
  { code: "IMPLEMENTATION", name: "Implementation and data migration", status: "available" },
  { code: "TRAINING", name: "Training", status: "available" },
  { code: "STORAGE", name: "Extra storage", status: "coming_soon" },
  { code: "API", name: "API access", status: "coming_soon" },
  { code: "SSO", name: "Single sign-on (SSO / SAML)", status: "coming_soon" },
  { code: "SANDBOX", name: "Sandbox environment", status: "coming_soon" },
  { code: "AUDIT-RETENTION", name: "Extended audit log retention", status: "coming_soon" },
];

// =====================================================
// PLAN TERMS (no prices)
// =====================================================

export const planTerms = [
  `${TRIAL_DAYS}-day free trial, extendable to ${TRIAL_MAX_DAYS} days on request`,
  "Discount for annual prepayment",
  "Prices exclude GST",
];
