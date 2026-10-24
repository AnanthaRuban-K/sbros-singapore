import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TIERS, TRIAL_DAYS, modules } from "./pricingData";
import {
  cyclePrice,
  formatSGD,
  moduleDefaultQuantity,
  moduleMinQuantity,
  moduleMonthly,
  moduleRuleText,
  toQuantity,
} from "./pricingCalc";
import { FeatureList, PriceDisplay, QuantityInput } from "./PricingParts";

/* =========================================================
   MODULE TIER GRID
   Calculator + Basic / Intermediate / Advanced cards for one module.
   Used on the module pages and in "Pricing by module" on /Pricing.
   Remount with key={moduleId} to reset the calculator.

   onSelectTier(tierId, trial, quantity) opens the lead form.
   children: extra card(s) appended to the grid (e.g. Custom).
========================================================= */

/* ---------- "For 25 employees: SGD 150 / month" ---------- */
const TotalLine = ({ monthly, billing, quantity, unitPlural }) => {
  const { perMonth, perYear } = cyclePrice(monthly, billing);
  return (
    <div className="mp-min">
      For {quantity} {unitPlural}: <strong>{formatSGD(perMonth)}</strong> / month
      {perYear !== null && <> ({formatSGD(perYear)} billed yearly)</>}
    </div>
  );
};

const ModuleTierGrid = ({ moduleId, billing, onSelectTier, tierHeading: TierHeading = "h2", children }) => {
  const navigate = useNavigate();
  const module = modules[moduleId];
  const { pricing } = module;

  const [quantityInput, setQuantityInput] = useState(null);

  const defaultQuantity = moduleDefaultQuantity(module);
  const hasQuantity = defaultQuantity !== null;
  const minQuantity = moduleMinQuantity(module);
  const quantity = hasQuantity
    ? Math.max(toQuantity(quantityInput ?? defaultQuantity, defaultQuantity), minQuantity)
    : null;

  const quantityHint = `Minimum ${pricing.min} ${pricing.unitPlural} applies.`;

  return (
    <>
      {/* PRICE CALCULATOR */}
      {hasQuantity && (
        <div className="pr-calculator">
          <QuantityInput
            id={`${moduleId}-quantity`}
            label={`Number of ${pricing.unitPlural}`}
            value={quantityInput ?? String(defaultQuantity)}
            min={minQuantity}
            onChange={setQuantityInput}
            hint={quantityHint}
          />
        </div>
      )}

      <div className="mp-grid">
        {TIERS.map((t, index) => {
          const tier = module.tiers[t.id];
          const monthly = moduleMonthly(module, t.id, quantity);

          return (
            <div className={`mp-card mp-${t.id}`} key={t.id}>
              {/* plan name + free trial chip */}
              <div className="mp-card-head">
                <TierHeading>{t.name}</TierHeading>
                <span className="mp-trial-chip">{TRIAL_DAYS}-day free trial</span>
              </div>

              {tier.limit && <div className="pr-limit">{tier.limit}</div>}

              {pricing.model === "per_unit" ? (
                <PriceDisplay
                  monthly={tier.price}
                  billing={billing}
                  unit={pricing.unit}
                  yearlyUnit={pricing.unit}
                />
              ) : (
                <PriceDisplay monthly={tier.price} billing={billing} />
              )}

              {hasQuantity && (
                <TotalLine
                  monthly={monthly}
                  billing={billing}
                  quantity={quantity}
                  unitPlural={pricing.unitPlural}
                />
              )}

              <p className="mp-note">{moduleRuleText(module, t.id)}</p>

              {index > 0 && (
                <p className="pr-includes">Everything in {TIERS[index - 1].name}, plus:</p>
              )}

              <FeatureList
                features={tier.features}
                className="mp-features"
                checkClass="mp-check"
              />

              {/* Request a free trial + Request Pricing side by side */}
              <div className="mp-actions-row">
                <button
                  type="button"
                  className="mp-btn-trial"
                  onClick={() => onSelectTier(t.id, true, quantity)}
                >
                  Request a free trial
                </button>

                <button
                  type="button"
                  className="mp-btn"
                  onClick={() => onSelectTier(t.id, false, quantity)}
                >
                  Request Pricing →
                </button>
              </div>

              <p className="mp-trial-note">
                {TRIAL_DAYS} days free · No credit card required
              </p>

              <button
                type="button"
                className="mp-btn-view"
                onClick={() => navigate(`/module-pricing/${moduleId}/${t.id}/details`)}
              >
                View all details
              </button>
            </div>
          );
        })}

        {children}
      </div>
    </>
  );
};

export default ModuleTierGrid;
