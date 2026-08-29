import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Requirements = () => {
  const navigate = useNavigate();

  const [selectedModules, setSelectedModules] = useState([
    "HRM",
    "Attendance",
    "Leave Management",
    "Payroll",
    "Recruitment",
    "Finance & Accounting",
  ]);

  const [requirements, setRequirements] = useState("");

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

  const toggleModule = (moduleName) => {
    setSelectedModules((prev) =>
      prev.includes(moduleName)
        ? prev.filter((item) => item !== moduleName)
        : [...prev, moduleName]
    );
  };

  const handleContinue = () => {
    navigate("/additional-information");
  };

  const handleBack = () => {
    navigate("/custom-plan");
  };

  return (
    <section className="requirements-page">

      {/* ================= HEADER ================= */}

      <div className="requirements-header">
        <h1>Request a Custom Plan Proposal</h1>

        <p>
          Tell us about your business and requirements. Our experts will
          create a tailored ERP solution and proposal for you.
        </p>
      </div>


      {/* ================= PROGRESS ================= */}

      <div className="requirements-progress">

        <div className="requirements-progress-item completed">
          <div className="requirements-progress-icon">✓</div>
          <span>1. Business Details</span>
        </div>

        <div className="requirements-progress-line active"></div>

        <div className="requirements-progress-item active">
          <div className="requirements-progress-icon">▦</div>
          <span>2. Requirements</span>
        </div>

        <div className="requirements-progress-line"></div>

        <div className="requirements-progress-item">
          <div className="requirements-progress-icon">♧</div>
          <span>3. Additional Information</span>
        </div>

        <div className="requirements-progress-line"></div>

        <div className="requirements-progress-item">
          <div className="requirements-progress-icon">✓</div>
          <span>4. Review</span>
        </div>

        <div className="requirements-progress-line"></div>

        <div className="requirements-progress-item">
          <div className="requirements-progress-icon">✓</div>
          <span>5. Submitted</span>
        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="requirements-layout">

        {/* ================= LEFT ================= */}

        <div className="requirements-left">

          <div className="requirements-card">

            <h2>2. Requirements</h2>

            <p className="requirements-intro">
              Tell us about the ERP modules and features you need.
            </p>


            {/* MODULE TITLE */}

            <div className="module-title">
              Select Required Modules
            </div>


            {/* MODULE GRID */}

            <div className="module-grid">

              {modules.map((module) => (
                <label
                  key={module.name}
                  className={`module-card ${
                    selectedModules.includes(module.name)
                      ? "selected"
                      : ""
                  }`}
                >

                  <input
                    type="checkbox"
                    checked={selectedModules.includes(module.name)}
                    onChange={() => toggleModule(module.name)}
                  />

                  <div className="module-content">

                    <strong>{module.name}</strong>

                    <span>{module.description}</span>

                  </div>

                </label>
              ))}

            </div>


            {/* SPECIFIC FEATURES */}

            <div className="specific-section">

              <label className="specific-label">
                Specific Features or Integrations
              </label>

              <p>
                List any specific features, third-party integrations,
                or custom workflows you require.
              </p>

              <div className="requirements-textarea-wrapper">

                <textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  maxLength={1000}
                  placeholder="Describe your specific requirements..."
                />

                <span>
                  {requirements.length}/1000
                </span>

              </div>

            </div>


            {/* BUTTONS */}

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


        {/* ================= RIGHT SIDEBAR ================= */}

        <div className="requirements-right">

          <div className="requirements-side-card">

            <h3>What happens next?</h3>


            <div className="requirements-step">

              <div className="requirements-step-icon">
                1
              </div>

              <div>
                <strong>We will review your requirements</strong>
                <p>
                  Our team will analyze your needs
                </p>
              </div>

            </div>


            <div className="requirements-step">

              <div className="requirements-step-icon">
                2
              </div>

              <div>
                <strong>We will contact you</strong>
                <p>
                  Our experts will reach out to discuss in detail
                </p>
              </div>

            </div>


            <div className="requirements-step">

              <div className="requirements-step-icon">
                3
              </div>

              <div>
                <strong>We will prepare your custom proposal</strong>
                <p>
                  Tailored solution with best pricing
                </p>
              </div>

            </div>


            <div className="requirements-step">

              <div className="requirements-step-icon">
                4
              </div>

              <div>
                <strong>You make the best decision</strong>
                <p>
                  Choose the plan that helps your business grow
                </p>
              </div>

            </div>


            {/* SECURITY */}

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