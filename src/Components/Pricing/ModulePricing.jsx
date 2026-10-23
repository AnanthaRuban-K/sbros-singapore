import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { modulePricing } from "./modulePricingData";
import PlanLeadForm from "./PlanLeadForm";


const LOGO_SRC = "/assets/img/logo/sbros-logo1.png";

// Free trial length (days). Change this one number to change it everywhere.
const TRIAL_DAYS = 15;

const ModulePricing = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const module = modulePricing[moduleId];
  const [logoFailed, setLogoFailed] = useState(false);

  // Plan shown in the lead form modal (null = closed)
  const [leadPlan, setLeadPlan] = useState(null);

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

  /* ---------- Request Pricing (Basic / Intermediate / Advanced) -> lead form ---------- */
  const handleRequest = (plan) => {
    setLeadPlan({
      kind: "module",
      planInterest: `${module.id}-${plan.id}`.toUpperCase(),
      label: `${module.requirementName} – ${plan.name}`,
      modules: [module.requirementName],
    });
  };

  /* ---------- Start Free Trial (Basic / Intermediate / Advanced) -> lead form ---------- */
  const handleTrial = (plan) => {
    setLeadPlan({
      kind: "module",
      planInterest: `${module.id}-${plan.id}`.toUpperCase(),
      label: `${module.requirementName} – ${plan.name}`,
      modules: [module.requirementName],
      freeTrial: true,
      trialDays: TRIAL_DAYS,
    });
  };

  const handleView = (plan) => {
    navigate(`/module-pricing/${moduleId}/${plan.id}/details`);
  };

  /* ---------- Custom -> lead form ---------- */
  const handleCustomRequest = () => {
    setLeadPlan({
      kind: "custom",
      planInterest: "CUSTOM",
      label: `${module.requirementName} – Custom`,
      modules: [module.requirementName],
    });
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

      {leadPlan && (
        <PlanLeadForm plan={leadPlan} onClose={() => setLeadPlan(null)} />
      )}
    </section>
  );
};

export default ModulePricing;