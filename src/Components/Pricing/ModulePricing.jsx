import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { modulePricing } from "./modulePricingData";


// Put your logo in /public/logo.png (or change this path)
const LOGO_SRC = "/logo.png";

// Free trial length (days). Change this one number to change it everywhere.
const TRIAL_DAYS = 15;

const STORAGE_KEY = "customPlanProposal";

const readSaved = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

const ModulePricing = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const module = modulePricing[moduleId];
  const [logoFailed, setLogoFailed] = useState(false);

  if (!module) {
    return (
      <section className="mp-section">
        <div className="mp-container mp-notfound">
          <h2>Module not found</h2>
          <Link to="/products" className="mp-back">← Back to Products</Link>
        </div>
      </section>
    );
  }

  /* ---------- Request Pricing (Basic / Intermediate / Advanced) -> Enquiry ---------- */
  const handleRequest = (plan) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...readSaved(),
        selectedPlan: plan.id,
        planName: `${module.requirementName} – ${plan.name}`,
        selectedModules: [module.requirementName],
        specificRequirements: "",
        freeTrial: false,
      })
    );
    navigate("/enquiry");
  };

  /* ---------- Start Free Trial (Basic / Intermediate / Advanced) -> Enquiry ---------- */
  const handleTrial = (plan) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...readSaved(),
        selectedPlan: plan.id,
        planName: `${module.requirementName} – ${plan.name} (Free Trial)`,
        selectedModules: [module.requirementName],
        specificRequirements: "",
        freeTrial: true,
        trialDays: TRIAL_DAYS,
      })
    );
    navigate("/login");
  };

  const handleView = (plan) => {
    navigate(`/module-pricing/${moduleId}/${plan.id}/details`);
  };

  /* ---------- Custom -> Pricing page ---------- */
  const handleCustomRequest = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...readSaved(),
        selectedPlan: "custom",
        planName: `${module.requirementName} – Custom`,
        selectedModules: [module.requirementName],
        specificRequirements: "",
        freeTrial: false,
      })
    );
    navigate("/pricing/custom");
  };

  return (
    <section className="mp-section">
      <div className="mp-container">
        <Link to="/products" className="mp-back">← Back to Products</Link>

        <div className="mp-header">
          <div className="mp-header-icon"><i className={module.icon}></i></div>
          <h1>{module.title}</h1>
          <p>
            SGD {module.unitLabel} · {module.minLabel} · Billed annually, excl. GST
          </p>
        </div>

        <div className="mp-grid">
          {module.plans.map((plan) => (
            <div className={`mp-card mp-${plan.id}`} key={plan.id}>
              {/* plan name + free trial chip */}
              <div className="mp-card-head">
                <h2>{plan.name}</h2>
                <span className="mp-trial-chip">{TRIAL_DAYS}-day free trial</span>
              </div>

              <div className="mp-price">
                <span className="mp-currency">SGD</span>
                <span className="mp-amount">{plan.price}</span>
                <span className="mp-unit">/ {module.unitLabel.replace(" / month", "")} / mo</span>
              </div>

              <div className="mp-min">Min. payable: <strong>{plan.minPayable}</strong> / month</div>
              <p className="mp-note">{plan.note}</p>

              <ul className="mp-features">
                {plan.features.slice(0, 4).map((f, i) => (
                  <li key={i}>
                    <span className="mp-check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Start Free Trial + Request Pricing side by side */}
              <div className="mp-actions-row">
                <button
                  type="button"
                  className="mp-btn-trial"
                  onClick={() => handleTrial(plan)}
                >
                  Start Free Trial
                </button>

                <button
                  type="button"
                  className="mp-btn"
                  onClick={() => handleRequest(plan)}
                >
                  Request Pricing →
                </button>
              </div>

              <p className="mp-trial-note">
                {TRIAL_DAYS} days free · No credit card required
              </p>

              <button type="button" className="mp-btn-view" onClick={() => handleView(plan)}>
                View all details
              </button>
            </div>
          ))}

          {/* Custom card: logo (or name) → One Mission → Request Pricing (no trial) */}
          <div className="mp-card mp-custom">
            <div className="mp-custom-top">
              {logoFailed ? (
                <h2 className="mp-custom-name">Custom</h2>
              ) : (
                <img
                  className="mp-custom-logo"
                  src={LOGO_SRC}
                  alt="Custom"
                  onError={() => setLogoFailed(true)}
                />
              )}
            </div>

            <p className="mp-custom-mission">One Mission</p>

            <button type="button" className="mp-btn" onClick={handleCustomRequest}>
              Request Pricing →
            </button>
          </div>
        </div>

        {module.footnote && <p className="mp-footnote">{module.footnote}</p>}
      </div>
    </section>
  );
};

export default ModulePricing;