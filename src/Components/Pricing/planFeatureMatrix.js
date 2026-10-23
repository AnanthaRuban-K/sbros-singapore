// =====================================================
// FEATURE MATRIX  (source: ERP Production Commercial Plan PDF)
// Plans: Basic / Intermediate / Advanced
// feature = [name, minTierIndex, levelsOptional]
// minTierIndex: 0 = Basic, 1 = Intermediate, 2 = Advanced
// levelsOptional: label per tier when the feature gets upgraded at higher tiers
// =====================================================

export const TIERS = ["basic", "intermediate", "advanced"];
export const TIER_LABELS = ["Basic", "Intermediate", "Advanced"];

const EMP = ["Included", "Included", "Advanced"];
const ATT = ["Included", "Intermediate", "Advanced"];

export const planMatrix = {
  // ---------------- HRM ----------------
  hrm: {
    groups: [
      {
        area: "Company & Organization",
        dependency: "Core HRM",
        features: [
          ["Company Profile", 0], ["Organization Structure", 0],
          ["Departments", 0], ["Designations", 0],
        ],
      },
      {
        area: "Employee Management",
        dependency: "Core HRM",
        features: [
          ["Employee Management", 0, EMP], ["Employee Documents", 0, EMP],
          ["Employee Onboarding", 0, EMP], ["Employee Exit", 0, EMP],
          ["Employee Self-Service", 0, EMP],
        ],
      },
      {
        area: "Attendance",
        dependency: "Core HRM",
        features: [
          ["Attendance", 0, ATT], ["Shift Management", 0, ATT], ["Holiday Management", 0, ATT],
        ],
      },
      {
        area: "Leave",
        dependency: "HRM + Attendance (Advanced leave also needs Leave)",
        features: [
          ["Basic Leave Management", 0, ATT], ["Leave Application", 0, ATT], ["Leave Approval", 0, ATT],
          ["Advanced Leave Policy", 2], ["Advanced Leave Cancellation", 2],
          ["Advanced Leave Allocation", 2], ["Advanced Leave Carry Forward", 2],
        ],
      },
      {
        area: "Payroll",
        dependency: "HRM + Attendance + Leave",
        features: [
          ["Basic Payroll Processing", 0], ["Attendance-to-Payroll Integration", 0],
          ["Basic Payslip", 0], ["Basic Payroll Reports", 0],
          ["Advanced Payroll Rules", 2], ["Advanced Payroll Adjustments", 2],
          ["Advanced Payroll Approval", 2], ["Advanced Payslip", 2], ["Advanced Payroll Dashboard", 2],
        ],
      },
      {
        area: "Other HR",
        dependency: "Core HRM",
        features: [
          ["Overtime Management", 1], ["Expense / Claims", 1], ["Employee Contracts", 1],
          ["Performance Management", 1], ["Announcements", 1], ["Policies", 1], ["Asset Management", 1],
        ],
      },
    ],
  },

  // ---------------- CRM ----------------
  crm: {
    groups: [
      {
        area: "Core CRM",
        dependency: "Core CRM",
        features: [
          ["Lead Management", 0], ["Contact Management", 0], ["Account Management", 0],
          ["Activities", 0], ["Lead Sources", 0], ["Lead Status", 0],
          ["Basic Pipeline", 0], ["Basic CRM Dashboard", 0],
        ],
      },
      {
        area: "Sales & Marketing",
        dependency: "CRM core",
        features: [
          ["Opportunities / Deals", 1], ["Sales Pipeline", 1],
          ["Campaign Management", 1], ["Marketing Activities", 1],
        ],
      },
      {
        area: "Customer Operations",
        dependency: "CRM core",
        features: [
          ["CRM Masters", 1], ["Customer Master", 1], ["Customer Ledger", 1],
          ["Tasks / Reminders", 1], ["Notifications", 1], ["CRM Reports", 1],
          ["Advanced Dashboard", 1], ["Sales Activity Reports", 1],
        ],
      },
    ],
  },

  // ---------------- PRODUCT SALES ----------------
  sales: {
    groups: [
      {
        area: "Basic Sales",
        dependency: "Product Sales",
        features: [
          ["Product / Item Catalogue", 0], ["Customer Selection", 0], ["Sales Quotation", 0],
          ["Quotation Revision", 0], ["Basic Sales Dashboard", 0],
        ],
      },
      {
        area: "Order & Fulfilment",
        dependency: "Product Sales + Inventory where applicable",
        features: [
          ["Sales Orders", 1], ["Order Revision", 1], ["Pick List", 1], ["Packing", 1],
          ["Dispatch", 1], ["Delivery Challan", 1], ["Direct Sales", 1], ["Sales Invoice", 1],
          ["Sales Reports", 1], ["Sales Workflow", 1], ["Sales Approval", 1],
        ],
      },
      {
        area: "Inventory / Stock",
        dependency: "Product Sales",
        features: [["Stock In / Out", 0], ["Single Warehouse", 0], ["Basic Stock Reports", 0]],
      },
      {
        area: "Advanced Inventory",
        dependency: "Product Sales + inventory controls",
        features: [
          ["Multi-Warehouse", 1], ["Batch Tracking", 1], ["Low Stock Alerts", 1],
          ["Serial Number Tracking", 1], ["Inventory Valuation (FIFO/Weighted)", 1],
          ["Demand Forecasting", 1], ["Stock Aging", 1],
        ],
      },
      {
        area: "Advanced Sales",
        dependency: "Product Sales + Finance where applicable",
        features: [
          ["Sales Returns", 2], ["Return Approval", 2], ["Credit Notes", 2],
          ["Advanced Sales Controls", 2], ["Advanced Audit Trail", 2],
          ["Advanced Sales Analytics", 2], ["Advanced Sales Reports", 2],
          ["External Sales Integrations", 2],
        ],
      },
    ],
  },

  // ---------------- SERVICE SALES ----------------
  service: {
    groups: [
      {
        area: "Basic Service",
        dependency: "Service Sales",
        features: [
          ["Service Catalogue", 0], ["Customer Selection", 0], ["Service Quotation", 0],
          ["Quotation Revision", 0], ["Basic Service Dashboard", 0],
        ],
      },
      {
        area: "Service Operations",
        dependency: "Service Sales",
        features: [
          ["Service Orders", 1], ["Service Execution", 1], ["Pick List", 1],
          ["Delivery / Execution Tracking", 1], ["Service Invoice", 1], ["Billing", 1],
          ["Service Reports", 1], ["Service Workflow", 1], ["Service Approval", 1],
        ],
      },
      {
        area: "Advanced Service",
        dependency: "Service Sales + Finance where applicable",
        features: [
          ["Service Returns", 2], ["Cancellation Approval", 2], ["Credit Notes", 2],
          ["Advanced Service Controls", 2], ["Advanced Audit Trail", 2],
          ["Advanced Service Analytics", 2], ["Advanced Service Reports", 2],
          ["External Service Integrations", 2],
        ],
      },
    ],
  },

  // ---------------- PROCUREMENT ----------------
  procurement: {
    groups: [
      {
        area: "Basic Procurement",
        dependency: "Procurement",
        features: [
          ["Vendor Master", 0], ["Material Master", 0], ["Brand Master", 0],
          ["Model Master", 0], ["Purchase Requisition", 0], ["Basic Procurement Dashboard", 0],
        ],
      },
      {
        area: "Purchasing",
        dependency: "Procurement + Inventory where applicable",
        features: [
          ["Purchase Quotation", 1], ["RFQ", 1], ["Purchase Orders", 1], ["PO Revision", 1],
          ["GRN / Inward Receipt", 1], ["Procurement Approval", 1],
          ["Procurement Reports", 1], ["Vendor Performance", 1],
        ],
      },
      {
        area: "Advanced Procurement",
        dependency: "Procurement + Finance where applicable",
        features: [
          ["Purchase Returns", 2], ["Advanced Procurement Approval", 2],
          ["Advanced Procurement Controls", 2], ["Maker-Checker Procurement", 2],
          ["Advanced Audit Trail", 2], ["Procurement Analytics", 2],
          ["Advanced Procurement Reports", 2], ["External Procurement Integrations", 2],
        ],
      },
    ],
  },

  // ---------------- FINANCE ----------------
  finance: {
    groups: [
      {
        area: "Core Accounting",
        dependency: "Finance",
        features: [
          ["Chart of Accounts", 0], ["Account Masters", 0], ["Fiscal Period", 0], ["Currency", 0],
          ["Exchange Rate", 0], ["General Journal", 0], ["Basic Vouchers", 0],
          ["Basic Financial Reports", 0], ["Basic P&L", 0], ["Basic Balance Sheet", 0],
        ],
      },
      {
        area: "Advanced Accounting",
        dependency: "Finance + source transaction integrations",
        features: [
          ["General Ledger", 1], ["Trial Balance", 1], ["Accounts Receivable", 1],
          ["Accounts Payable", 1], ["Banking", 1], ["Bank Reconciliation", 1],
          ["Payment / Receipt Management", 1], ["Finance Approval Workflow", 1],
          ["Finance Reports", 1], ["Finance Dashboard", 1],
        ],
      },
    ],
  },
};

// General commercial terms per tier (from the "Commercial Terms" sheet)
export const commercialExtras = [
  { label: "Target company size", values: ["1–10 employees", "10–50 employees", "50–200 employees"] },
  { label: "Billing model", values: ["Per user / selected modules", "Per user + module/usage", "Seat + usage"] },
  { label: "Onboarding fee", values: ["0 / configurable", "399 / configurable", "999 / configurable"] },
  { label: "API access", values: ["No / limited", "Basic API access", "API access"] },
  { label: "Support", values: ["Email", "WhatsApp / email / notifications", "Priority support"] },
  { label: "AI features", values: ["Not included", "Basic AI functions", "Advanced AI functions"] },
  { label: "Additional storage", values: ["Add-on", "Add-on", "Add-on"] },
  { label: "Mobile app", values: ["Optional add-on", "Optional add-on", "Optional add-on"] },
  { label: "Recruitment add-on", values: ["Optional", "Optional", "Optional"] },
  { label: "Advanced BI dashboard", values: ["Add-on", "Add-on", "Included / configurable"] },
  { label: "Custom report builder", values: ["Add-on", "Add-on", "Add-on"] },
];