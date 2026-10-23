import { useState } from "react";
import { useNavigate } from "react-router-dom";


/* =========================================================
   PLAN TYPES
   basic / intermediate / advanced -> the module the user chose
   is auto-ticked and LOCKED. All other modules are disabled.
   custom                          -> user can tick any module.
========================================================= */

const FIXED_PLANS = ["basic", "intermediate", "advanced"];

const PLAN_LABEL = {
  basic: "Basic",
  intermediate: "Intermediate",
  advanced: "Advanced",
  custom: "Custom",
};

/* true  = hide the other modules on Basic/Intermediate/Advanced
   false = show them greyed out (disabled) */
const HIDE_OTHERS_ON_FIXED = false;

/* =========================================================
   MODULE DATA
========================================================= */

const MODULES = [
  { name: "HRM", description: "Employee management, payroll, attendance" },
  { name: "Attendance", description: "Time tracking, biometric, reports" },
  { name: "Leave Management", description: "Leave requests, approvals, balance" },
  { name: "Payroll", description: "Salary processing, payslip, taxes" },
  { name: "Recruitment", description: "Job posting, applicants, hiring" },
  { name: "Project Management", description: "Projects, tasks, tracking, reports" },
  { name: "CRM", description: "Leads, deals, customers" },
  { name: "Finance & Accounting", description: "GL, AR, AP, invoicing, reports" },
  { name: "Sales", description: "Quotations, orders, invoices, direct sales" },
  { name: "Inventory", description: "Stock, warehouse, items" },
  { name: "Procurement", description: "Purchase, vendors, requests" },
  { name: "Reports & BI", description: "Analytics, dashboards, insights" },
  { name: "Custom Development", description: "Special features & workflows" },
];

/* =========================================================
   HELPERS
========================================================= */

const readSaved = () => {
  try {
    return JSON.parse(localStorage.getItem("customPlanProposal") || "{}");
  } catch {
    return {};
  }
};

/*
  Finds the plan type (basic / intermediate / advanced / custom)
  from whatever the earlier pages saved. It checks several fields,
  so it still works even if the "Your Details" page changes
  selectedPlan or only keeps the planName ("HRM – Basic").
*/
const detectPlan = (saved) => {
  const sources = [
    saved.selectedPlan,
    saved.planId,
    saved.plan,
    saved.planType,
    saved.planName,
  ];

  for (const s of sources) {
    if (typeof s !== "string") continue;

    const v = s.toLowerCase();

    if (v.includes("custom")) return "custom";
    if (v.includes("intermediate")) return "intermediate";
    if (v.includes("advanced")) return "advanced";
    if (v.includes("basic")) return "basic";
  }

  return "";
};

const Requirements = () => {
  const navigate = useNavigate();

  /* =========================================================
     STATE  (read from localStorage on first render)
  ========================================================= */

  const [saved] = useState(readSaved);

  const selectedPlan = detectPlan(saved);
  const isFixed = FIXED_PLANS.includes(selectedPlan);

  /* modules the user brought from the pricing page (locked on fixed plans) */
  const lockedModules = Array.isArray(saved.selectedModules)
    ? saved.selectedModules
    : [];

  const [selectedModules, setSelectedModules] = useState(lockedModules);

  const [requirements, setRequirements] = useState(
    saved.specificRequirements || ""
  );

  const [error, setError] = useState("");

  /* =========================================================
     TOGGLE MODULE  (works only on the Custom plan)
  ========================================================= */

  const toggleModule = (moduleName) => {
    if (isFixed) return;

    setError("");

    setSelectedModules((prev) => {
      if (prev.includes(moduleName)) {
        return prev.filter((item) => item !== moduleName);
      }

      return [...prev, moduleName];
    });
  };

  /* =========================================================
     REQUIREMENTS CHANGE
  ========================================================= */

  const handleRequirementsChange = (e) => {
    setError("");
    setRequirements(e.target.value);
  };

  /* =========================================================
     CONTINUE
  ========================================================= */

  const handleContinue = () => {
    if (selectedModules.length === 0) {
      setError(
        isFixed
          ? "No module found for this plan. Please go back and choose a plan again."
          : "Please select at least one ERP module."
      );

      return;
    }

    if (!requirements.trim()) {
      setError(
        "Please enter your specific features, integrations, or custom workflows."
      );

      return;
    }

    const existingData = readSaved();

    localStorage.setItem(
      "customPlanProposal",
      JSON.stringify({
        ...existingData,
        selectedModules: selectedModules,
        specificRequirements: requirements.trim(),
      })
    );

    navigate("/additional-information");
  };

  const handleBack = () => {
    if (selectedPlan === "custom") {
      navigate("/pricing/custom"); // custom came from the pricing page
    } else if (isFixed) {
      navigate("/enquiry"); // basic / intermediate / advanced came from the enquiry page
    } else {
      navigate(-1);
    }
  };

  /* modules to render in the grid */
  const visibleModules =
    isFixed && HIDE_OTHERS_ON_FIXED
      ? MODULES.filter((m) => lockedModules.includes(m.name))
      : MODULES;

  return (
    <section className="requirements-page">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="requirements-header">
        <h1>Share Your Requirements</h1>

        <p>
          Tell us about your business and requirements. Our experts
          will create a tailored ERP solution and proposal for you.
        </p>
      </div>

      {/* =====================================================
          5 STEP PROGRESS
      ===================================================== */}

      <div className="steps">
        <div className="step completed">
          <span>✓</span>
          <strong>Your Details</strong>
        </div>

        <div className="step-line active"></div>

        <div className="step active">
          <span>2</span>
          <strong>Requirements</strong>
        </div>

        <div className="step-line"></div>

        <div className="step">
          <span>3</span>
          <strong>Additional Information</strong>
        </div>

        <div className="step-line"></div>

        <div className="step">
          <span>4</span>
          <strong>Review</strong>
        </div>

        <div className="step-line"></div>

        <div className="step">
          <span>5</span>
          <strong>Submit</strong>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="requirements-layout">
        {/* ===================================================
            LEFT
        =================================================== */}

        <div className="requirements-left">
          <div className="requirements-card">
            <h2>2. Requirements</h2>

            <p className="requirements-intro">
              {isFixed
                ? `Your ${PLAN_LABEL[selectedPlan]} plan includes the module selected below.`
                : "Tell us about the ERP modules and features you need."}
            </p>

            {/* =================================================
                MODULE TITLE
            ================================================= */}

            <div className="module-title">
              <span>
                {isFixed ? "Your Selected Module" : "Select Required Modules *"}
              </span>

              <strong>
                {isFixed
                  ? `${PLAN_LABEL[selectedPlan]} Plan`
                  : `${selectedModules.length} Selected`}
              </strong>
            </div>

            {/* =================================================
                MODULE GRID
            ================================================= */}

            <div className="module-grid">
              {visibleModules.map((module) => {
                const isSelected = selectedModules.includes(module.name);

                /* fixed plan: chosen module = locked, others = disabled */
                const isLocked = isFixed && lockedModules.includes(module.name);
                const isDisabled = isFixed && !isLocked;

                return (
                  <label
                    key={module.name}
                    className={`module-card ${isSelected ? "selected" : ""} ${
                      isLocked ? "locked" : ""
                    } ${isDisabled ? "disabled" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      disabled={isFixed}
                      onChange={() => toggleModule(module.name)}
                    />

                    <div className="module-content">
                      <strong>
                        {module.name}
                        {isLocked && (
                          <span className="locked-badge">Included</span>
                        )}
                      </strong>

                      <span>{module.description}</span>
                    </div>
                  </label>
                );
              })}
            </div>

            {isFixed && (
              <p className="fixed-note">
                Other modules are locked for the {PLAN_LABEL[selectedPlan]} plan.
                To choose your own modules, select the Custom plan.
              </p>
            )}

            {/* =================================================
                SPECIFIC FEATURES
            ================================================= */}

            <div className="specific-section">
              <label className="specific-label">
                Specific Features or Integrations *
              </label>

              <p>
                List any specific features, third-party integrations,
                or custom workflows you require.
              </p>

              <div className="requirements-textarea-wrapper">
                <textarea
                  value={requirements}
                  onChange={handleRequirementsChange}
                  maxLength={1000}
                  placeholder="Describe your specific requirements..."
                />

                <span>{requirements.length}/1000</span>
              </div>
            </div>

            {/* =================================================
                ERROR MESSAGE
            ================================================= */}

            {error && <div className="requirements-error">⚠ {error}</div>}

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="requirements-buttons">
              <button
                type="button"
                className="requirements-back-btn"
                onClick={handleBack}
              >
                <span>←</span>
                Back
              </button>

              <button
                type="button"
                className="requirements-continue-btn"
                onClick={handleContinue}
              >
                Save & Continue
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT SIDEBAR
        =================================================== */}

        <div className="requirements-right">
          <div className="requirements-side-card">
            <h3>What happens next?</h3>

            <div className="requirements-step">
              <div className="requirements-step-icon">1</div>
              <div>
                <strong>We will review your requirements</strong>
                <p>Our team will analyze your needs</p>
              </div>
            </div>

            <div className="requirements-step">
              <div className="requirements-step-icon">2</div>
              <div>
                <strong>We will contact you</strong>
                <p>Our experts will reach out to discuss in detail</p>
              </div>
            </div>

            <div className="requirements-step">
              <div className="requirements-step-icon">3</div>
              <div>
                <strong>We will prepare your custom proposal</strong>
                <p>Tailored solution with best pricing</p>
              </div>
            </div>

            <div className="requirements-step">
              <div className="requirements-step-icon">4</div>
              <div>
                <strong>You make the best decision</strong>
                <p>Choose the plan that helps your business grow</p>
              </div>
            </div>

            <div className="requirements-security">
              <span>♢</span>
              <p>
                Your information is 100% secure and will
                never be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;