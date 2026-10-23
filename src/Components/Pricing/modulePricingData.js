// =====================================================
// MODULE PRICING DATA  (source: One Solution ERP – Recommended Pricing Strategy v4.0)
// All prices: SGD per month, billed annually, excl. GST
// =====================================================

export const modulePricing = {
  // ---------------- HRM ----------------
  hrm: {
    id: "hrm",
    requirementName: "HRM",
    title: "HRM – Core HR, Attendance, Leave & Payroll",
    icon: "bi bi-people-fill",
    unitLabel: "per employee / month",
    minLabel: "Min. 10 employees",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: 4,
        minPayable: "SGD 40",
        note: "More than 10 employees: add SGD 4 per employee per month.",
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
      {
        id: "intermediate",
        name: "Intermediate",
        price: 6,
        minPayable: "SGD 60",
        note: "More than 10 employees: add SGD 6 per employee per month.",
        features: [
          "Everything in Basic, plus:",
          "CPF and FWL contributions, CPF EZPay file",
          "Attendance correction, overtime",
          "Leave policies, cancellation, carry forward",
          "Expense claims",
          "Employee contracts, payroll adjustments",
          "Performance management",
          "Announcements, company policies, asset tracking",
        ],
      },
      {
        id: "advanced",
        name: "Advanced",
        price: 9,
        minPayable: "SGD 90",
        note: "More than 10 employees: add SGD 9 per employee per month.",
        features: [
          "Everything in Intermediate, plus:",
          "IR8A / IRAS tax filing, IR21",
          "MOM work pass and quota tracking",
          "Bonus and ad-hoc payments",
          "Multi-level approvals",
          "Audit log and advanced reports",
        ],
      },
    ],
    footnote:
      "CPF is in Intermediate because Singapore payroll is not usable without it. Tax filing (IRAS) and MOM compliance stay in Advanced.",
  },

  // ---------------- CRM ----------------
  crm: {
    id: "crm",
    requirementName: "CRM",
    title: "CRM – Customer Relationship Management",
    icon: "bi bi-person-lines-fill",
    unitLabel: "per user / month",
    minLabel: "Min. 5 users",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: 8,
        minPayable: "SGD 40",
        note: "More than 5 users: add SGD 8 per user per month.",
        features: ["Customer master", "Leads and contacts"],
      },
      {
        id: "intermediate",
        name: "Intermediate",
        price: 12,
        minPayable: "SGD 60",
        note: "More than 5 users: add SGD 12 per user per month.",
        features: [
          "Everything in Basic, plus:",
          "Marketing campaigns",
          "Follow-up reminders",
        ],
      },
      {
        id: "advanced",
        name: "Advanced",
        price: 15,
        minPayable: "SGD 75",
        note: "More than 5 users: add SGD 15 per user per month.",
        features: [
          "Everything in Intermediate, plus:",
          "Campaign analytics",
          "Team-based data access",
          "CRM audit trail and automation",
        ],
      },
    ],
  },

  // ---------------- FINANCE ----------------
  finance: {
    id: "finance",
    requirementName: "Finance & Accounting",
    title: "Finance & Accounts",
    icon: "bi bi-wallet-fill",
    unitLabel: "per organisation / month",
    minLabel: "3 users included",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: 39,
        minPayable: "SGD 39",
        note: "For one organisation; 3 users included. More than 3 users: add SGD 13 per user per month.",
        features: [
          "Chart of accounts, general ledger",
          "Journals and vouchers",
          "Customer invoices, vendor bills, payments",
          "Customer and vendor ledgers",
          "Trial balance, standard reports",
        ],
      },
      {
        id: "intermediate",
        name: "Intermediate",
        price: 69,
        minPayable: "SGD 69",
        note: "For one organisation; 3 users included. More than 3 users: add SGD 23 per user per month.",
        features: [
          "Everything in Basic, plus:",
          "Bank accounts and bank reconciliation",
          "Credit notes and debit notes",
          "Cost centres",
          "Multi-currency and exchange rates",
          "Fiscal years, posting periods, finance approvals",
        ],
      },
      {
        id: "advanced",
        name: "Advanced",
        price: 99,
        minPayable: "SGD 99",
        note: "For one organisation; 3 users included. More than 3 users: add SGD 33 per user per month.",
        features: [
          "Everything in Intermediate, plus:",
          "Fixed assets and depreciation",
          "Tally sync and export",
          "Payroll-to-Finance integration",
          "Sub-ledger reconciliation, period re-open",
          "Online payment tracking, data migration",
        ],
      },
    ],
  },

  // ---------------- PROCUREMENT ----------------
  procurement: {
    id: "procurement",
    requirementName: "Procurement",
    title: "Procurement",
    icon: "bi bi-cart-check-fill",
    unitLabel: "per organisation / month",
    minLabel: "Unlimited users",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: 49,
        minPayable: "SGD 49",
        note: "For one organisation. Flat price, no per-user charge.",
        features: ["Material and product requests", "Purchase orders"],
      },
      {
        id: "intermediate",
        name: "Intermediate",
        price: 99,
        minPayable: "SGD 99",
        note: "For one organisation. Flat price, no per-user charge.",
        features: [
          "Everything in Basic, plus:",
          "Vendor quotation upload",
          "Quotation comparison and selection",
        ],
      },
      {
        id: "advanced",
        name: "Advanced",
        price: 149,
        minPayable: "SGD 149",
        note: "For one organisation. Flat price, no per-user charge.",
        features: [
          "Everything in Intermediate, plus:",
          "Goods receipt (GRN) flow",
          "Automatic posting to Finance payables",
          "Approval workflows",
        ],
      },
    ],
  },

  // ---------------- SALES ----------------
  sales: {
    id: "sales",
    requirementName: "Sales",
    title: "Sales (Product / Service)",
    icon: "bi bi-bag-check-fill",
    unitLabel: "per user / month",
    minLabel: "Min. 5 users",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: 10,
        minPayable: "SGD 50",
        note: "More than 5 users: add SGD 10 per user per month.",
        features: ["Sales quotations", "Sales orders", "Sales invoices", "Direct sales"],
      },
      {
        id: "intermediate",
        name: "Intermediate",
        price: 15,
        minPayable: "SGD 75",
        note: "More than 5 users: add SGD 15 per user per month.",
        features: [
          "Everything in Basic, plus:",
          "Quotation revisions",
          "Delivery challan and dispatch",
          "Credit notes and sales returns",
        ],
      },
      {
        id: "advanced",
        name: "Advanced",
        price: 20,
        minPayable: "SGD 100",
        note: "More than 5 users: add SGD 20 per user per month.",
        features: [
          "Everything in Intermediate, plus:",
          "Pick lists and packing lists",
          "Return request and approval workflow",
          "Customer purchase orders",
          "Service and maintenance tracking",
        ],
      },
    ],
  },
};