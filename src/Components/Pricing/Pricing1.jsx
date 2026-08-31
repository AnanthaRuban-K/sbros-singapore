import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// =====================================================
// PRICING PLANS
// =====================================================

const plans = [
  {
    id: "basic",
    icon: "leaf",
    name: "Basic",
    description: "Perfect for startups and small teams",
    buttonText: "Request Pricing",

    features: [
      "HRM",
      "Employee Management",
      "Attendance",
      "Leave Management",
      "Employee Directory",
      "Basic Reports",
      "Email Support",
    ],

    // Modules that should be automatically selected
    selectedModules: [
      "HRM",
      "Attendance",
      "Leave Management",
    ],
  },

  {
    id: "intermediate",
    icon: "chart",
    name: "Intermediate",
    description: "Ideal for growing businesses",
    buttonText: "Request Pricing",

    features: [
      "Everything in Basic",
      "Payroll",
      "Recruitment",
      "Advanced Reports",
      "Workflow Approvals",
      "Custom Roles & Permissions",
      "Priority Email Support",
    ],

    // Basic modules + Intermediate modules
    selectedModules: [
      "HRM",
      "Attendance",
      "Leave Management",
      "Payroll",
      "Recruitment",
    ],
  },

  {
    id: "advanced",
    icon: "rocket",
    name: "Advanced",
    description: "For established and expanding teams",
    buttonText: "Request Pricing",

    features: [
      "Everything in Intermediate",
      "Sales / CRM",
      "Finance",
      "Procurement",
      "Project Management",
      "Custom Workflows",
      "API Access",
      "Phone Support",
    ],

    // All Advanced ERP modules
    selectedModules: [
      "HRM",
      "Attendance",
      "Leave Management",
      "Payroll",
      "Recruitment",
      "CRM",
      "Finance & Accounting",
      "Procurement",
      "Project Management",
    ],
  },

  {
    id: "custom",
    icon: "settings",
    name: "Custom",
    description: "Tailored to your unique requirements",
    buttonText: "Request Proposal",

    features: [
      "All Modules",
      "Custom Modules",
      "Custom Integrations",
      "Advanced Permissions",
      "Dedicated Support",
      "SLA & Priority Support",
      "On-Premise Option (Optional)",
    ],

    // IMPORTANT:
    // Custom plan has NO automatic selections.
    // User will manually select modules.
    selectedModules: [],
  },
];

// =====================================================
// ICON COMPONENT
// =====================================================

const Icon = ({ type }) => {
  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4C11 4 5 8 5 14c0 3.3 2.7 6 6 6 6 0 9-6 9-16Z" />
        <path d="M4 20c3-5 7-8 13-10" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M3 19h18" />
        <path d="m4 7 5-3 4 3 7-5" />
        <path d="M17 2h3v3" />
      </svg>
    );
  }

  if (type === "rocket") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 4c2.8-2.8 6-2 6-2s.8 3.2-2 6l-7 7-4-4 7-7Z" />
        <path d="m8 11-4 1-2 4 5-1" />
        <path d="m13 16-1 5 4-2 1-4" />
        <path d="M7 18c-1.5.3-2.5 1-3 2 1.3.1 2.5-.2 3.3-1.1" />
        <circle cx="16.5" cy="7.5" r="1.2" />
      </svg>
    );
  }

  // SETTINGS ICON
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />

      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-2.6V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.6-1H6v-2.6h.2A1.7 1.7 0 0 0 8 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h2.6V5a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 .3 1.9 1.7 1.7 0 0 0 1.6 1h.2v2.6H21a1.7 1.7 0 0 0-1.6 1Z" />
    </svg>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

const Pricing1 = () => {
  const [billing, setBilling] = useState("annual");

  const navigate = useNavigate();

  // =====================================================
  // PLAN NAVIGATION
  // =====================================================

  const handlePlanClick = (plan) => {
    /*
      Save selected plan information.

      This will be used by Requirements page
      to automatically tick the required modules.
    */

    const existingData = JSON.parse(
      localStorage.getItem("customPlanProposal") || "{}"
    );

    const updatedData = {
      ...existingData,

      selectedPlan: plan.id,
      planName: plan.name,

      // Automatic module selection
      selectedModules: plan.selectedModules,

      // Clear previous requirements when selecting
      // a different pricing plan
      specificRequirements: "",
    };

    localStorage.setItem(
      "customPlanProposal",
      JSON.stringify(updatedData)
    );

    // Go to pricing request page
    navigate(`/request-pricing/${plan.id}`);
  };

  return (
    <section className="pricing1-section">
      <div className="pricing1-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="pricing1-header">

          <span className="pricing1-badge">
            Flexible Plans for Every Business
          </span>

          <h1>
            Choose the Right <span>Plan</span>
          </h1>

          <p>
            SBROS ERP offers flexible plans designed to scale
            with your business.
            <br />
            All plans include core features. Select a plan that
            matches your current needs.
          </p>

          {/* =================================================
              BILLING TOGGLE
          ================================================= */}

          <div className="pricing1-toggle-wrapper">

            <button
              type="button"
              className={`pricing1-toggle-option ${
                billing === "monthly" ? "active" : ""
              }`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>

            <button
              type="button"
              className={`pricing1-toggle-option annual ${
                billing === "annual" ? "active" : ""
              }`}
              onClick={() => setBilling("annual")}
            >
              <span className="toggle-circle"></span>

              Annual (Save 15%)
            </button>

          </div>

        </div>

        {/* =================================================
            PRICING CARDS
        ================================================= */}

        <div className="pricing1-grid">

          {plans.map((plan) => (

            <div
              className={`pricing1-card pricing1-${plan.id}`}
              key={plan.id}
            >

              {/* =================================================
                  CARD HEADER
              ================================================= */}

              <div className="pricing1-card-top">

                <div className="pricing1-icon">
                  <Icon type={plan.icon} />
                </div>

                <div className="pricing1-card-heading">

                  <h2>
                    {plan.name}
                  </h2>

                  <p>
                    {plan.description}
                  </p>

                </div>

              </div>

              {/* =================================================
                  FEATURES
              ================================================= */}

              <ul className="pricing1-features">

                {plan.features.map((feature, index) => (

                  <li key={`${plan.id}-${index}`}>

                    <span className="pricing1-check">
                      ✓
                    </span>

                    <span>
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

              {/* =================================================
                  BUTTON
              ================================================= */}

              <button
                type="button"
                className="pricing1-card-button"
                onClick={() => handlePlanClick(plan)}
              >

                {plan.buttonText}

                <span className="pricing1-button-arrow">
                  →
                </span>

              </button>

            </div>

          ))}

        </div>

        {/* =================================================
            CUSTOM QUOTE SECTION
        ================================================= */}

        <div className="pricing1-custom-box">

          <div className="pricing1-custom-icon">

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >

              <circle
                cx="12"
                cy="8"
                r="3.5"
              />

              <path
                d="M5 20c.5-3.2 3.2-5.5 7-5.5s6.5 2.3 7 5.5"
              />

            </svg>

          </div>

          <div className="pricing1-custom-content">

            <h3>
              Need something specific?
            </h3>

            <p>
              We understand that every business is unique.
              <br />

              Tell us what you need and we'll create a custom
              plan that fits your requirements and budget.
            </p>

          </div>

          <div className="pricing1-custom-action">

            <button
              type="button"
              onClick={() => {

                // Custom plan = no automatic modules
                const existingData = JSON.parse(
                  localStorage.getItem("customPlanProposal") || "{}"
                );

                const updatedData = {
                  ...existingData,

                  selectedPlan: "custom",
                  planName: "Custom",

                  // User must manually select modules
                  selectedModules: [],

                  specificRequirements: "",
                };

                localStorage.setItem(
                  "customPlanProposal",
                  JSON.stringify(updatedData)
                );

                navigate("/request-pricing/custom");
              }}
            >
              Request a Custom Quote
            </button>

            <span>
              Or contact our{" "}

              <a href="#sales">
                sales team
              </a>{" "}

              directly
            </span>

          </div>

        </div>

        {/* =================================================
            SECURITY
        ================================================= */}

        <div className="pricing1-security">

          <span className="pricing1-security-icon">

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >

              <path
                d="M12 3 19 6v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z"
              />

              <path
                d="m9.5 12 1.7 1.7 3.5-3.8"
              />

            </svg>

          </span>

          <p>
            All plans include secure, enterprise-grade security
            and 24/7 data protection.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Pricing1;