import { BILLING_LABELS, PRICING_NOTE } from "./pricingData";
import { cyclePrice, formatSGD } from "./pricingCalc";

/* =========================================================
   SHARED PRICING UI
   Used by /Pricing, module pages and plan details.
========================================================= */

/* ---------- Monthly / Annual toggle ---------- */
export const BillingToggle = ({ billing, onChange }) => (
  <div className="pricing1-toggle-wrapper" role="group" aria-label="Billing cycle">
    <button
      type="button"
      className={`pricing1-toggle-option ${billing === "monthly" ? "active" : ""}`}
      aria-pressed={billing === "monthly"}
      onClick={() => onChange("monthly")}
    >
      {BILLING_LABELS.monthly}
    </button>

    <button
      type="button"
      className={`pricing1-toggle-option annual ${billing === "annual" ? "active" : ""}`}
      aria-pressed={billing === "annual"}
      onClick={() => onChange("annual")}
    >
      <span className="toggle-circle" aria-hidden="true"></span>
      {BILLING_LABELS.annual}
    </button>
  </div>
);

/* ---------- "SGD per month, excluding GST" note ---------- */
export const PricingNote = ({ billing }) => (
  <p className="pr-note">
    {PRICING_NOTE.base} {billing === "annual" ? PRICING_NOTE.annual : PRICING_NOTE.monthly}
  </p>
);

/* ---------- price for the chosen billing cycle ----------
   monthly: list price per month
   annual:  effective price per month, plus the yearly total   */
export const PriceDisplay = ({ monthly, billing, unit = "", yearlyUnit = "" }) => {
  const { perMonth, perYear } = cyclePrice(monthly, billing);

  return (
    <div className="pr-price" aria-live="polite">
      <div className="pr-price-main">
        <span className="pr-price-amount">{formatSGD(perMonth)}</span>
        <span className="pr-price-unit">{unit ? `/ ${unit} ` : ""}/ month</span>
      </div>

      {billing === "annual" ? (
        <div className="pr-price-sub">
          <s aria-label={`was ${formatSGD(monthly)} per month`}>{formatSGD(monthly)}</s>{" "}
          {formatSGD(perYear)} {yearlyUnit ? `per ${yearlyUnit} ` : ""}billed yearly, excl. GST
        </div>
      ) : (
        <div className="pr-price-sub">Billed monthly, excl. GST</div>
      )}
    </div>
  );
};

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

/* ---------- quantity input (employees / users) ---------- */
export const QuantityInput = ({ id, label, value, min = 1, onChange, hint }) => (
  <div className="pr-qty">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="number"
      inputMode="numeric"
      min={min}
      step={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => {
        const n = Math.floor(Number(e.target.value));
        onChange(String(Number.isFinite(n) && n >= min ? n : min));
      }}
      aria-describedby={hint ? `${id}-hint` : undefined}
    />
    {hint && <span id={`${id}-hint`} className="pr-qty-hint">{hint}</span>}
  </div>
);

/* ---------- add-on card (grid) ---------- */
export const AddOnCard = ({ addOn, onSelect }) => {
  const soon = addOn.status === "coming_soon";

  return (
    <div className={`pr-addon-card ${soon ? "is-soon" : ""}`}>
      <div className="pr-addon-head">
        <h4>{addOn.name}</h4>
        {soon && <ComingSoonBadge />}
      </div>
      <div className="pr-addon-price">{addOn.price}</div>
      <p>{addOn.description}</p>
      <button
        type="button"
        className={soon ? "pr-btn-outline" : "pr-btn"}
        onClick={() => onSelect(addOn)}
        aria-label={`${soon ? "Notify me about" : "Request"} ${addOn.name}`}
      >
        {soon ? "Notify me" : "Request"}
      </button>
    </div>
  );
};

/* ---------- add-on list (compact, module pages) ---------- */
export const AddOnCompactList = ({ addOns, onSelect }) => (
  <ul className="pr-addon-list">
    {addOns.map((addOn) => {
      const soon = addOn.status === "coming_soon";
      return (
        <li key={addOn.code}>
          <div className="pr-addon-list-text">
            <strong>{addOn.name}</strong>
            {soon && <> <ComingSoonBadge /></>}
            <span>{addOn.description}</span>
          </div>
          <span className="pr-addon-list-price">{addOn.price}</span>
          <button
            type="button"
            className={soon ? "pr-btn-outline" : "pr-btn"}
            onClick={() => onSelect(addOn)}
            aria-label={`${soon ? "Notify me about" : "Request"} ${addOn.name}`}
          >
            {soon ? "Notify me" : "Request"}
          </button>
        </li>
      );
    })}
  </ul>
);
