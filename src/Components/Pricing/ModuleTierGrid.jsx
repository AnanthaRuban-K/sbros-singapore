
import { TIERS, modules } from "./pricingData";
import { FeatureList } from "./PricingParts";

/* =========================================================
   MODULE TIER GRID
   Basic / Intermediate / Advanced feature cards for one module.
   No prices: each card has a "Get pricing" button.

   onGetPricing(tierId) opens the enquiry form for that plan.
========================================================= */

const ModuleTierGrid = ({
  moduleId,
  onGetPricing,
  tierHeading: TierHeading = "h4",
}) => {
  const module = modules[moduleId];

  return (
    <div className="mp-grid">
      {TIERS.map((t, index) => {
        const tier = module.tiers[t.id];

        // Get the previous plan
        const previousTier = TIERS[index - 1];

        return (
          <div className={`mp-card mp-${t.id}`} key={t.id}>
            <div className="mp-card-head">
              <TierHeading>{t.name}</TierHeading>
            </div>

            {tier.limit && (
              <div className="pr-limit">
                {tier.limit}
              </div>
            )}

            {/* Display the previous plan name */}
            {index > 0 && (
              <p className="pr-includes">
               Includes everything in the {previousTier.name} plan, plus:
              </p>
            )}

            <FeatureList
              features={tier.features}
              className="mp-features"
              checkClass="mp-check"
            />

            <button
              type="button"
              className="mp-btn pr-get-pricing"
              onClick={() => onGetPricing(t.id)}
              aria-label={`Get pricing for ${module.name} ${t.name}`}
            >
              Get pricing →
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ModuleTierGrid;
