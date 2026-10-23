import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { modulePricing } from "./modulePricingData";
import { planMatrix, commercialExtras, TIERS, TIER_LABELS } from "./planFeatureMatrix";
import PlanLeadForm from "./PlanLeadForm";


const PlanDetails = () => {
  const { moduleId, planId } = useParams();
  const navigate = useNavigate();

  const moduleInfo = modulePricing[moduleId];
  const matrix = planMatrix[moduleId];
  const startIdx = TIERS.indexOf(planId);

  const [activeTier, setActiveTier] = useState(startIdx < 0 ? 0 : startIdx);
  const [showLocked, setShowLocked] = useState(true);
  const [leadPlan, setLeadPlan] = useState(null);

  const groups = useMemo(
    () =>
      (matrix?.groups || []).map((g) => ({
        ...g,
        included: g.features.filter((f) => f[1] <= activeTier),
        locked: g.features.filter((f) => f[1] > activeTier),
      })),
    [matrix, activeTier]
  );

  if (!moduleInfo || !matrix || startIdx < 0) {
    return (
      <section className="pd-section">
        <div className="pd-container pd-center">
          <h2>Details not found</h2>
          <button className="pd-back" onClick={() => navigate(-1)}>← Go back</button>
        </div>
      </section>
    );
  }

  const tierId = TIERS[activeTier];
  const plan = moduleInfo.plans.find((p) => p.id === tierId); // undefined for Enterprise
  const totalIncluded = groups.reduce((n, g) => n + g.included.length, 0);
  const totalLocked = groups.reduce((n, g) => n + g.locked.length, 0);

  const handleRequest = () => {
    setLeadPlan({
      kind: "module",
      planInterest: `${moduleId}-${tierId}`.toUpperCase(),
      label: `${moduleInfo.requirementName} – ${TIER_LABELS[activeTier]}`,
      modules: [moduleInfo.requirementName],
    });
  };

  const levelBadge = (f) => {
    const lvl = f[2]?.[activeTier];
    return lvl && lvl !== "Included" ? <span className="pd-level">{lvl}</span> : null;
  };

  return (
    <section className="pd-section">
      <div className="pd-container">
        <button type="button" className="pd-back" onClick={() => navigate(-1)}>
          ← Back to {moduleInfo.requirementName} plans
        </button>

        {/* HEADER */}
        <div className="pd-header">
          <div className="pd-header-icon"><i className={moduleInfo.icon}></i></div>
          <div>
            <h1>{moduleInfo.requirementName} – {TIER_LABELS[activeTier]}</h1>
            <p className="pd-sub">{moduleInfo.title}</p>
          </div>
        </div>

        {/* TIER SWITCHER */}
        <div className="pd-tabs">
          {TIER_LABELS.map((label, i) => (
            <button
              key={label}
              type="button"
              className={`pd-tab ${i === activeTier ? "active" : ""}`}
              onClick={() => setActiveTier(i)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="pd-summary">
          <div className="pd-price-box">
            {plan ? (
              <>
                <span className="pd-cur">SGD</span>
                <span className="pd-amt">{plan.price}</span>
                <span className="pd-unit">/ {moduleInfo.unitLabel.replace(" / month", "")} / mo</span>
                <div className="pd-minpay">
                  {moduleInfo.minLabel} · Min. payable <strong>{plan.minPayable}</strong> / month
                </div>
                <div className="pd-minpay">Billed annually, excl. GST</div>
              </>
            ) : (
              <>
                <span className="pd-amt">Custom</span>
                <div className="pd-minpay">Enterprise pricing is quoted per requirement.</div>
              </>
            )}
          </div>
          <div className="pd-stat"><strong>{totalIncluded}</strong><span>Features included</span></div>
          <div className="pd-stat"><strong>{totalLocked}</strong><span>In higher plans</span></div>
          <button type="button" className="pd-cta" onClick={handleRequest}>Request Pricing →</button>
        </div>

        <label className="pd-toggle">
          <input type="checkbox" checked={showLocked} onChange={(e) => setShowLocked(e.target.checked)} />
          Show features not in this plan
        </label>

        {/* FEATURE GROUPS */}
        <div className="pd-groups">
          {groups.map((g) => {
            if (g.included.length === 0 && !showLocked) return null;
            return (
              <div className="pd-group" key={g.area}>
                <div className="pd-group-head">
                  <h3>{g.area}</h3>
                  <span className="pd-dep">Depends on: {g.dependency}</span>
                </div>
                <ul className="pd-list">
                  {g.included.map((f) => (
                    <li key={f[0]} className="pd-item yes">
                      <span className="pd-mark">✓</span>
                      <span className="pd-name">{f[0]}</span>
                      {levelBadge(f)}
                    </li>
                  ))}
                  {showLocked &&
                    g.locked.map((f) => (
                      <li key={f[0]} className="pd-item no">
                        <span className="pd-mark">🔒</span>
                        <span className="pd-name">{f[0]}</span>
                        <span className="pd-avail">{TIER_LABELS[f[1]]}+</span>
                      </li>
                    ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* COMMERCIAL TERMS */}
        <div className="pd-group">
          <div className="pd-group-head"><h3>Plan terms &amp; services</h3></div>
          <div className="pd-table-wrap">
            <table className="pd-table">
              <thead>
                <tr>
                  <th></th>
                  {TIER_LABELS.map((t, i) => (
                    <th key={t} className={i === activeTier ? "hl" : ""}>{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {commercialExtras.map((row) => (
                  <tr key={row.label}>
                    <td className="pd-rowlabel">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className={i === activeTier ? "hl" : ""}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {moduleInfo.footnote && <p className="pd-footnote">{moduleInfo.footnote}</p>}
        <p className="pd-footnote">
          Enterprise includes Advanced capabilities plus enterprise controls, compliance, integrations and analytics.
        </p>
      </div>

      {leadPlan && (
        <PlanLeadForm plan={leadPlan} onClose={() => setLeadPlan(null)} />
      )}
    </section>
  );
};

export default PlanDetails;