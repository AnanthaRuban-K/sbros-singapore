/* =========================================================
   SHARED PLANS UI (no prices)
   Used by the Plans page (/Pricing).
========================================================= */

/* ---------- badges ---------- */
export const ComingSoonBadge = () => <span className="pr-badge-soon">Coming soon</span>;

/* ---------- tick list ---------- */
export const FeatureList = ({ features, className = "pricing1-features", checkClass = "pricing1-check" }) => (
  <ul className={className}>
    {features.map((feature) => {
      const item = typeof feature === "string" ? { text: feature } : feature;
      return (
        <li key={item.text}>
          <span className={checkClass} aria-hidden="true">✓</span>
          <span>
            {item.text}
            {item.comingSoon && <> <ComingSoonBadge /></>}
          </span>
        </li>
      );
    })}
  </ul>
);

/* ---------- add-on card: available ones can be enquired about, coming soon cannot ---------- */
export const AddOnCard = ({ addOn, onSelect }) => {
  const soon = addOn.status === "coming_soon";

  return (
    <div className={`pr-addon-card ${soon ? "is-soon" : ""}`}>
      <div className="pr-addon-head">
        <h4>{addOn.name}</h4>
        {soon && <ComingSoonBadge />}
      </div>
      {!soon && (
        <button
          type="button"
          className="pr-btn-outline"
          onClick={() => onSelect(addOn)}
          aria-label={`Ask about ${addOn.name}`}
        >
          Ask about this
        </button>
      )}
    </div>
  );
};
