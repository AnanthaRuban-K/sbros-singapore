// =====================================================
// PRICING DATA  (single source for every pricing page)
// Source: One Solution ERP approved pricing.
// List prices are SGD per month, excluding GST.
// To change a price, feature or add-on status, edit this file only.
// =====================================================

export const CURRENCY = "SGD";

// Free trial length (days) on any plan
export const TRIAL_DAYS = 15;

// Annual billing: pay for 10 months, get 12 ("2 months free")
export const ANNUAL_MONTHS_CHARGED = 10;

export const BILLING_LABELS = {
  monthly: "Monthly",
  annual: "Annual (2 months free)",
};

export const PRICING_NOTE = {
  base: "All prices in SGD per month, excluding GST.",
  annual: "Billed annually: 2 months free.",
  monthly: "Billed monthly. Choose annual billing to get 2 months free.",
};

export const TIERS = [
  { id: "basic", name: "Basic" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
];

// =====================================================
// MODULES
// pricing.model:
//   "per_unit"        price x max(quantity, min)
//   "flat_with_users" flat price, `included` users, extra user rate per tier
//   "flat"            flat price per organisation
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
          "Leave apply and approve",
          "Basic payroll processing and payslips",
          "Mobile app for employees",
        ],
      },
      intermediate: {
        price: 6,
        features: [
          "CPF and FWL contributions, CPF EZPay file",
          "Attendance correction, overtime",
          "Leave policies, cancellation, carry forward",
          "Expense claims",
          "Employee contracts, payroll adjustments",
          "Performance management",
          "Announcements, company policies, asset tracking",
        ],
      },
      advanced: {
        price: 9,
        features: [
          "IR8A / IRAS tax filing, IR21",
          "MOM work pass and quota tracking",
          "Bonus and ad-hoc payments",
          "Multi-level approvals",
          "Audit log and advanced reports",
        ],
      },
    },
    footnote:
      "CPF is in Intermediate because Singapore payroll is not usable without it. IRAS tax filing and MOM compliance are in Advanced.",
  },

  finance: {
    id: "finance",
    name: "Finance & Accounts",
    title: "Finance & Accounts",
    icon: "bi bi-wallet-fill",
    pricing: { model: "flat_with_users", unit: "user", unitPlural: "users", included: 3 },
    tiers: {
      basic: {
        price: 39,
        extraUser: 13,
        features: [
          "Chart of accounts, general ledger",
          "Journals and vouchers",
          "Customer invoices, vendor bills, payments",
          "Customer and vendor ledgers",
          "Trial balance, standard reports",
        ],
      },
      intermediate: {
        price: 69,
        extraUser: 23,
        features: [
          "Bank accounts and bank reconciliation",
          "Credit notes and debit notes",
          "Cost centres",
          "Multi-currency and exchange rates",
          "Fiscal years, posting periods, finance approvals",
        ],
      },
      advanced: {
        price: 99,
        extraUser: 33,
        features: [
          "Fixed assets and depreciation",
          "Tally sync and export",
          "Payroll-to-Finance integration",
          "Sub-ledger reconciliation, period re-open",
          "Online payment tracking, data migration",
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
        features: ["Sales quotations", "Sales orders", "Sales invoices", "Direct sales"],
      },
      intermediate: {
        price: 15,
        features: [
          "Quotation revisions",
          "Delivery challan and dispatch",
          "Credit notes and sales returns",
        ],
      },
      advanced: {
        price: 20,
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
    pricing: { model: "flat", note: "Unlimited users, flat price" },
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
          "Approval workflows",
          { text: "Automatic posting to Finance payables", comingSoon: true },
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
        features: ["Marketing campaigns", "Follow-up reminders"],
      },
      advanced: {
        price: 15,
        features: [
          "Campaign analytics",
          "Team-based data access",
          "CRM audit trail and automation",
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
    pricing: { model: "flat", note: "Unlimited users, flat price" },
    tiers: {
      basic: {
        price: 49,
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
        features: [
          "Advanced hiring analytics and funnel reports",
          "Custom pipeline stages and settings",
          "Hire-to-employee conversion into HRM",
          "Full audit trail",
        ],
      },
    },
    bundles: [
      {
        code: "HIRING-STARTER",
        planInterest: "RECRUITMENT-BUNDLE-STARTER",
        name: "Hiring Starter",
        tier: "intermediate",
        includes: "Recruitment Intermediate + Careers Site",
        addOnCodes: ["CAREERS-SITE"],
        price: 128,
        status: "available",
      },
      {
        code: "HIRING-PRO",
        planInterest: "RECRUITMENT-BUNDLE-PRO",
        name: "Hiring Pro",
        tier: "advanced",
        includes: "Recruitment Advanced + Careers Site + Multi-posting + AI Parsing",
        addOnCodes: ["CAREERS-SITE", "MULTI-POSTING", "AI-PARSING"],
        price: 266,
        status: "coming_soon",
      },
    ],
  },
};

// =====================================================
// COMPLETE ERP PACKAGE
// price = base + max(0, employees - includedEmployees) x extraEmployee
// =====================================================

export const completeErp = {
  name: "Complete ERP",
  moduleIds: ["hrm", "finance", "sales", "procurement", "crm"],
  // Also part of every ERP plan, not sold as a separate module
  alsoIncluded: ["Inventory (warehouses and stock)"],
  includedEmployees: 10,
  includedUsers: "Includes 3 Finance users, 5 Sales users and 5 CRM users. Additional users are charged at each module's extra-user rate.",
  plans: [
    { tier: "basic", icon: "leaf", base: 150, extraEmployee: 3, description: "Perfect for startups and small teams" },
    { tier: "intermediate", icon: "chart", base: 250, extraEmployee: 5, description: "Ideal for growing businesses" },
    { tier: "advanced", icon: "rocket", base: 350, extraEmployee: 7, description: "For established and expanding teams" },
  ],
  // "Cheaper than buying modules separately" table (Advanced tier)
  comparison: {
    tier: "advanced",
    employeeCounts: [10, 20, 50, 100],
    footnote:
      "Separately = HRM SGD 9/employee + Finance 99 + Sales 100 + Procurement 149 + CRM 75.",
  },
};

// =====================================================
// ADD-ONS
// status: "available" | "coming_soon"
// modules: module ids where the add-on is listed (omit = all modules)
// =====================================================

export const platformAddOns = [
  { code: "STORAGE", name: "Extra storage", price: "SGD 10 / month per 10 GB", description: "Documents, payslips, resumes", status: "available" },
  { code: "BIOMETRIC", name: "Biometric device integration", price: "SGD 49 / month per site", description: "Attendance devices synced automatically", status: "available", modules: ["hrm"] },
  { code: "API", name: "API access", price: "SGD 79 / month", description: "Integration with your other systems", status: "coming_soon" },
  { code: "SSO", name: "Single sign-on (SSO / SAML)", price: "SGD 99 / month", description: "Microsoft / Google login", status: "coming_soon" },
  { code: "SANDBOX", name: "Sandbox environment", price: "SGD 99 / month", description: "Test configuration safely before going live", status: "coming_soon" },
  { code: "AUDIT-RETENTION", name: "Extended audit log retention", price: "SGD 29 / month", description: "7-year retention", status: "coming_soon" },
  { code: "PREMIUM-SUPPORT", name: "Premium support", price: "15% of subscription", description: "Dedicated account manager, 4-hour response", status: "available" },
  { code: "IMPLEMENTATION", name: "Implementation and data migration", price: "SGD 500 to 3,000 one-time", description: "Based on modules and data volume", status: "available" },
  { code: "TRAINING", name: "Training", price: "SGD 300 per session", description: "Online or on-site", status: "available" },
];

export const recruitmentAddOns = [
  { code: "CAREERS-SITE", name: "Public Careers Site", price: "SGD 29 / month", description: "Branded careers page where candidates browse jobs and apply online", status: "available" },
  { code: "CUSTOM-DOMAIN", name: "Custom domain and branding", price: "SGD 15 / month", description: "Careers site on your own domain, our branding removed", status: "coming_soon" },
  { code: "MULTI-POSTING", name: "Job multi-posting", price: "SGD 49 / month", description: "Post once to MyCareersFuture, JobStreet, LinkedIn and Indeed", status: "coming_soon" },
  { code: "AI-PARSING", name: "AI resume parsing and scoring", price: "SGD 39 / month (500 resumes)", description: "Reads CVs, fills candidate details, ranks candidates", status: "coming_soon" },
  { code: "E-SIGNATURE", name: "E-signature offer letters", price: "SGD 19 / month", description: "Candidates review, accept and sign offers online", status: "coming_soon" },
  { code: "VIDEO-INTERVIEW", name: "Video interview integration", price: "SGD 25 / month", description: "Teams / Zoom / Google Meet links with calendar sync", status: "coming_soon" },
  { code: "ASSESSMENTS", name: "Online assessments", price: "SGD 29 / month", description: "Skill and aptitude tests before shortlisting", status: "coming_soon" },
  { code: "NOTIFICATIONS", name: "WhatsApp and SMS notifications", price: "SGD 15 / month + usage", description: "Interview reminders and status updates", status: "coming_soon" },
  { code: "REFERRALS", name: "Employee referral programme", price: "SGD 19 / month", description: "Referral portal with bonus tracking", status: "coming_soon" },
  { code: "AGENCY-PORTAL", name: "Agency / vendor portal", price: "SGD 39 / month", description: "Agencies submit CVs directly into the pipeline", status: "coming_soon" },
  { code: "BACKGROUND-CHECK", name: "Background verification", price: "Per check", description: "Partner integration", status: "coming_soon" },
  { code: "EXTRA-JOB-SLOTS", name: "Extra active job slots", price: "SGD 10 / month per 5 jobs", description: "Run more job openings at the same time", status: "coming_soon" },
].map((addOn) => ({ ...addOn, modules: ["recruitment"] }));

export const allAddOns = [...platformAddOns, ...recruitmentAddOns];

// =====================================================
// HERO TRUST POINTS (top of /Pricing)
// =====================================================

export const heroHighlights = [
  `${TRIAL_DAYS}-day free trial on any plan`,
  "No credit card required",
  "Upgrade any time: our team adjusts your invoice pro-rata",
  "Mobile app on every tier",
];

// =====================================================
// BILLING TERMS (bottom of /Pricing)
// =====================================================

export const billingTerms = [
  "Each higher tier includes everything in the tier below.",
  "Need different tiers for different modules? Ask us for a custom quote.",
  "Upgrade any time: our team adjusts your invoice pro-rata.",
  "Every tier includes the mobile app, data backup, SSL security and standard email support.",
  `Annual billing: 2 months free. Free trial: ${TRIAL_DAYS} days on any plan.`,
  "Prices in SGD, excluding GST.",
];
