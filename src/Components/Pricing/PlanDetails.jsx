import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlanLeadForm from "./PlanLeadForm";
import { TIERS, billingTerms, modules } from "./pricingData";
import { moduleDefaultQuantity, moduleRuleText, moduleUnitLabel } from "./pricingCalc";
import { moduleLead } from "./leadSelections";
import {
  BillingToggle,
  ComingSoonBadge,
  FeatureList,
  PriceDisplay,
  PricingNote,
} from "./PricingParts";

// All prices and features come from ./pricingData.js

const PlanDetails = () => {
  const { moduleId, planId } = useParams();
  const navigate = useNavigate();

  const module = modules[moduleId];
  const startIdx = TIERS.findIndex((t) => t.id === planId);

  const [activeTier, setActiveTier] = useState(startIdx < 0 ? 0 : startIdx);
  const [showLocked, setShowLocked] = useState(true);
  const [billing, setBilling] = useState("annual");
  const [leadPlan, setLeadPlan] = useState(null);

  if (!module || startIdx < 0) {
    return (
      <section className="pd-section">
        <div className="pd-container pd-center">
          <h2>Details not found</h2>
          <button className="pd-back" onClick={() => navigate(-1)}>← Go back</button>
        </div>
      </section>
    );
  }

  const tier = TIERS[activeTier];
  const tierData = module.tiers[tier.id];
  const { pricing } = module;

  const included = TIERS.slice(0, activeTier + 1);
  const locked = TIERS.slice(activeTier + 1);
  const count = (list) => list.reduce((n, t) => n + module.tiers[t.id].features.length, 0);

  const openLead = (trial) =>
    setLeadPlan(
      moduleLead({
        moduleId,
        tierId: tier.id,
        billing,
        quantity: moduleDefaultQuantity(module),
        trial,
      })
    );

  return (
    <section className="pd-section">
      <div className="pd-container">
        <button type="button" className="pd-back" onClick={() => navigate(`/module-pricing/${moduleId}`)}>
          ← Back to {module.name} plans
        </button>

        {/* HEADER */}
        <div className="pd-header">
          <div className="pd-header-icon"><i className={module.icon} aria-hidden="true"></i></div>
          <div>
            <h2>{module.name} – {tier.name}</h2>
            <p className="pd-sub">{module.title}</p>
          </div>
        </div>

        {/* TIER SWITCHER */}
        <div className="pd-tabs" role="group" aria-label="Plan tier">
          {TIERS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              className={`pd-tab ${i === activeTier ? "active" : ""}`}
              aria-pressed={i === activeTier}
              onClick={() => setActiveTier(i)}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="pr-billing pr-billing--left">
          <BillingToggle billing={billing} onChange={setBilling} />
          <PricingNote billing={billing} />
        </div>

        {/* SUMMARY */}
        <div className="pd-summary">
          <div className="pd-price-box">
            {pricing.model === "per_unit" ? (
              <PriceDisplay monthly={tierData.price} billing={billing} unit={pricing.unit} yearlyUnit={pricing.unit} />
            ) : (
              <PriceDisplay monthly={tierData.price} billing={billing} />
            )}
            {pricing.model !== "per_unit" && (
              <div className="pd-minpay">SGD {moduleUnitLabel(module)}</div>
            )}
            <div className="pd-minpay">{moduleRuleText(module, tier.id)}</div>
          </div>
          <div className="pd-stat"><strong>{count(included)}</strong><span>Features included</span></div>
          <div className="pd-stat"><strong>{count(locked)}</strong><span>In higher plans</span></div>
          <div className="pr-card-actions pr-card-actions--stack">
            <button type="button" className="pd-cta" onClick={() => openLead(false)}>Request Pricing →</button>
            <button type="button" className="pr-btn-outline" onClick={() => openLead(true)}>
              Request a free trial
            </button>
          </div>
        </div>

        <label className="pd-toggle">
          <input type="checkbox" checked={showLocked} onChange={(e) => setShowLocked(e.target.checked)} />
          Show features in higher plans
        </label>

        {/* FEATURES BY TIER */}
        <div className="pd-groups">
          {included.map((t, i) => (
            <div className="pd-group" key={t.id}>
              <div className="pd-group-head">
                <h3>{i === 0 ? `${t.name} features` : `Added in ${t.name}`}</h3>
                <span className="pd-dep">Included</span>
              </div>
              <FeatureList
                features={module.tiers[t.id].features}
                className="pd-list pr-pd-list"
                checkClass="pd-mark"
              />
            </div>
          ))}

          {showLocked &&
            locked.map((t) => (
              <div className="pd-group pr-pd-locked" key={t.id}>
                <div className="pd-group-head">
                  <h3>Available in {t.name}</h3>
                  <span className="pd-dep">Upgrade to {t.name}</span>
                </div>
                <ul className="pd-list pr-pd-list">
                  {module.tiers[t.id].features.map((f) => {
                    const item = typeof f === "string" ? { text: f } : f;
                    return (
                      <li key={item.text} className="pd-item no">
                        <span className="pd-mark" aria-hidden="true">🔒</span>
                        <span className="pd-name">
                          {item.text}
                          {item.comingSoon && <> <ComingSoonBadge /></>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>

        {/* PLAN TERMS */}
        <div className="pd-group">
          <div className="pd-group-head"><h3>Plan terms</h3></div>
          <ul className="pd-list pr-pd-list">
            {billingTerms.map((term) => (
              <li key={term}>
                <span className="pd-mark" aria-hidden="true">✓</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>

        {module.footnote && <p className="pd-footnote">{module.footnote}</p>}
      </div>

      {leadPlan && (
        <PlanLeadForm plan={leadPlan} onClose={() => setLeadPlan(null)} />
      )}
    </section>
  );
};

export default PlanDetails;
