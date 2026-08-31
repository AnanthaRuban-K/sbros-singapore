import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Requirements = () => {
  const navigate = useNavigate();

  /* =========================================================
     STATE
  ========================================================= */

const [selectedModules, setSelectedModules] = useState([]);
  const [requirements, setRequirements] = useState("");
  const [error, setError] = useState("");

  /* =========================================================
     MODULE DATA
  ========================================================= */

  const modules = [
    {
      name: "HRM",
      description: "Employee management, payroll, attendance",
    },
    {
      name: "Attendance",
      description: "Time tracking, biometric, reports",
    },
    {
      name: "Leave Management",
      description: "Leave requests, approvals, balance",
    },
    {
      name: "Payroll",
      description: "Salary processing, payslip, taxes",
    },
    {
      name: "Recruitment",
      description: "Job posting, applicants, hiring",
    },
    {
      name: "Project Management",
      description: "Projects, tasks, tracking, reports",
    },
    {
      name: "CRM",
      description: "Leads, deals, customers",
    },
    {
      name: "Finance & Accounting",
      description: "GL, AR, AP, invoicing, reports",
    },
    {
      name: "Inventory",
      description: "Stock, warehouse, items",
    },
    {
      name: "Procurement",
      description: "Purchase, vendors, requests",
    },
    {
      name: "Reports & BI",
      description: "Analytics, dashboards, insights",
    },
    {
      name: "Custom Development",
      description: "Special features & workflows",
    },
  ];

  /* =========================================================
     LOAD PLAN DATA
  ========================================================= */

  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem("customPlanProposal") || "{}"
    );

    /*
      Get automatically selected modules
      from Pricing page.
    */

    if (
      Array.isArray(savedData.selectedModules) &&
      savedData.selectedModules.length > 0
    ) {
      setSelectedModules(savedData.selectedModules);
    } else {
      setSelectedModules([]);
    }

    /*
      Load previous specific requirements
      if available.
    */

    if (savedData.specificRequirements) {
      setRequirements(savedData.specificRequirements);
    }
  }, []);

  /* =========================================================
     TOGGLE MODULE
  ========================================================= */

  const toggleModule = (moduleName) => {
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
        "Please select at least one ERP module."
      );

      return;
    }

    if (!requirements.trim()) {
      setError(
        "Please enter your specific features, integrations, or custom workflows."
      );

      return;
    }

    const existingData = JSON.parse(
      localStorage.getItem("customPlanProposal") || "{}"
    );

    const updatedData = {
      ...existingData,

      selectedModules: selectedModules,

      specificRequirements:
        requirements.trim(),
    };

    localStorage.setItem(
      "customPlanProposal",
      JSON.stringify(updatedData)
    );

    navigate("/additional-information");
  };


  const handleBack = () => {
    navigate("/request-pricing/:planId");
  };

  

  return (
    <section className="requirements-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="requirements-header">

        <h1>
          Share Your Requirements
        </h1>

        <p>
          Tell us about your business and requirements. Our experts
          will create a tailored ERP solution and proposal for you.
        </p>

      </div>


      {/* =====================================================
          5 STEP PROGRESS
      ===================================================== */}

      <div className="steps">

        {/* STEP 1 */}

        <div className="step completed">

          <span>✓</span>

          <strong>
            Your Details
          </strong>

        </div>


        <div className="step-line active"></div>


        {/* STEP 2 */}

        <div className="step active">

          <span>2</span>

          <strong>
            Requirements
          </strong>

        </div>


        <div className="step-line"></div>


        {/* STEP 3 */}

        <div className="step">

          <span>3</span>

          <strong>
            Additional Information
          </strong>

        </div>


        <div className="step-line"></div>


        {/* STEP 4 */}

        <div className="step">

          <span>4</span>

          <strong>
            Review
          </strong>

        </div>


        <div className="step-line"></div>


        {/* STEP 5 */}

        <div className="step">

          <span>5</span>

          <strong>
            Submit
          </strong>

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

            <h2>
              2. Requirements
            </h2>

            <p className="requirements-intro">
              Tell us about the ERP modules and features you need.
            </p>


            {/* =================================================
                MODULE TITLE
            ================================================= */}

            <div className="module-title">

              <span>
                Select Required Modules *
              </span>

              <strong>
                {selectedModules.length} Selected
              </strong>

            </div>


            {/* =================================================
                MODULE GRID
            ================================================= */}

            <div className="module-grid">

              {modules.map((module) => {

                const isSelected =
                  selectedModules.includes(module.name);

                return (

                  <label
                    key={module.name}
                    className={`module-card ${
                      isSelected ? "selected" : ""
                    }`}
                  >

                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() =>
                        toggleModule(module.name)
                      }
                    />

                    <div className="module-content">

                      <strong>
                        {module.name}
                      </strong>

                      <span>
                        {module.description}
                      </span>

                    </div>

                  </label>

                );
              })}

            </div>


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

                <span>
                  {requirements.length}/1000
                </span>

              </div>

            </div>


            {/* =================================================
                ERROR MESSAGE
            ================================================= */}

            {error && (

              <div className="requirements-error">

                ⚠ {error}

              </div>

            )}


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="requirements-buttons">

              <button
                type="button"
                className="requirements-back-btn"
                onClick={handleBack}
              >

                <span>
                  ←
                </span>

                Back

              </button>


              <button
                type="button"
                className="requirements-continue-btn"
                onClick={handleContinue}
              >

                Save & Continue

                <span>
                  →
                </span>

              </button>

            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT SIDEBAR
        =================================================== */}

        <div className="requirements-right">

          <div className="requirements-side-card">

            <h3>
              What happens next?
            </h3>


            {/* STEP 1 */}

            <div className="requirements-step">

              <div className="requirements-step-icon">
                1
              </div>

              <div>

                <strong>
                  We will review your requirements
                </strong>

                <p>
                  Our team will analyze your needs
                </p>

              </div>

            </div>


            {/* STEP 2 */}

            <div className="requirements-step">

              <div className="requirements-step-icon">
                2
              </div>

              <div>

                <strong>
                  We will contact you
                </strong>

                <p>
                  Our experts will reach out to discuss in detail
                </p>

              </div>

            </div>


            {/* STEP 3 */}

            <div className="requirements-step">

              <div className="requirements-step-icon">
                3
              </div>

              <div>

                <strong>
                  We will prepare your custom proposal
                </strong>

                <p>
                  Tailored solution with best pricing
                </p>

              </div>

            </div>


            {/* STEP 4 */}

            <div className="requirements-step">

              <div className="requirements-step-icon">
                4
              </div>

              <div>

                <strong>
                  You make the best decision
                </strong>

                <p>
                  Choose the plan that helps your business grow
                </p>

              </div>

            </div>


            {/* =================================================
                SECURITY
            ================================================= */}

            <div className="requirements-security">

              <span>
                ♢
              </span>

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