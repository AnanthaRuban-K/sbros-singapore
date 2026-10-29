import { useState } from "react";
import { Link } from "react-router-dom";
import PlanLeadForm from "./PlanLeadForm";
import ModuleTierGrid from "./ModuleTierGrid";
import {
  MODULE_ORDER,
  addOns,
  completeErp,
  modules,
  planTerms,
  tierName,
} from "./pricingData";
import { addOnLead, completeErpLead, customLead, moduleLead } from "./leadSelections";
import { AddOnCard, FeatureList } from "./PricingParts";

// Plans, features and add-ons come from ./pricingData.js.
// No prices on this page: every plan has a "Get pricing" enquiry.

// =====================================================
// ICON COMPONENT
// =====================================================

const Icon = ({ type }) => {
  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4C11 4 5 8 5 14c0 3.3 2.7 6 6 6 6 0 9-6 9-16Z" />
        <path d="M4 20c3-5 7-8 13-10" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M3 19h18" />
        <path d="m4 7 5-3 4 3 7-5" />
        <path d="M17 2h3v3" />
      </svg>
    );
  }

  // ROCKET ICON
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4c2.8-2.8 6-2 6-2s.8 3.2-2 6l-7 7-4-4 7-7Z" />
      <path d="m8 11-4 1-2 4 5-1" />
      <path d="m13 16-1 5 4-2 1-4" />
      <path d="M7 18c-1.5.3-2.5 1-3 2 1.3.1 2.5-.2 3.3-1.1" />
      <circle cx="16.5" cy="7.5" r="1.2" />
    </svg>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

// headingTag: "h1" when this is the page title (/Pricing), "h2" when embedded (home4)
const Pricing1 = ({ headingTag: Heading = "h2" }) => {
  // Plan shown in the enquiry form modal (null = closed)
  const [leadPlan, setLeadPlan] = useState(null);

  // On /Pricing the header is a full-width banner in the brand colours
  const isPage = Heading === "h1";

  const moduleNames = completeErp.moduleIds.map((id) => modules[id].name).join(", ");

  const terms = (
    <ul className="pr-hero-points">
      {planTerms.map((term) => (
        <li key={term}>
          <span aria-hidden="true">✓</span>
          {term}
        </li>
      ))}
    </ul>
  );

  // /Pricing banner: both ways to buy, side by side
  const hero = (
    <div className="pricing1-header pr-hero-content">

      {/* Page title for search engines and screen readers only (not shown) */}
      <Heading className="visually-hidden">One Solution ERP Plans</Heading>

      <div className="pr-options">
        <a href="#erp-plans" className="pr-option">
          <span className="pr-option-tag">Option 1</span>
          <span className="pr-option-title">{completeErp.title}</span>
          <span className="pr-option-text">
            All six modules on the plan you choose: {moduleNames}.
          </span>
          <span className="pr-option-cta">View ERP plans ↓</span>
        </a>

        <a href="#modules" className="pr-option">
          <span className="pr-option-tag">Option 2</span>
          <span className="pr-option-title">Individual modules</span>
          <span className="pr-option-text">
            Choose only the modules you need, each in Basic, Intermediate or Advanced.
          </span>
          <span className="pr-option-chips" aria-hidden="true">
            {MODULE_ORDER.map((id) => (
              <span key={id}>{modules[id].name}</span>
            ))}
          </span>
          <span className="pr-option-cta">View module plans ↓</span>
        </a>
      </div>

      {terms}

    </div>
  );

  // Embedded (home4): compact header
  const header = (
    <div className="pricing1-header">
      <span className="pricing1-badge">One Solution ERP</span>
      <Heading>
        Choose the Right <span>Plan</span>
      </Heading>
      <p>
        The Complete ERP Package or individual modules, each in Basic, Intermediate and Advanced.
      </p>
    </div>
  );

  return (
    <section className={`pricing1-section ${isPage ? "pricing1-section--page" : ""}`}>

      {/* =================================================
          HEADER (banner on /Pricing)
      ================================================= */}

      {isPage && <div className="pr-hero">{hero}</div>}

      <div className="pricing1-container">

        {!isPage && header}

        {/* =================================================
            OPTION 1: COMPLETE ERP PACKAGE
        ================================================= */}

        <div className="pr-section-head" id="erp-plans">
          {isPage && <span className="pr-section-tag">Option 1</span>}
          <h2>{completeErp.title}</h2>
          <p>{completeErp.intro}</p>
        </div>

        <div className="pricing1-grid pricing1-grid--3">

          {completeErp.plans.map((plan, index) => {
            const name = tierName(plan.tier);

            return (
              <div
                className={`pricing1-card pricing1-${plan.tier}`}
                key={plan.tier}
              >

                <div className="pricing1-card-top">
                  <div className="pricing1-icon">
                    <Icon type={plan.icon} />
                  </div>

                  <div className="pricing1-card-heading">
                    <h3>{name}</h3>
                    <p>{plan.description}</p>
                  </div>
                </div>

                {index > 0 && (
                  <p className="pr-includes pr-includes--card">Everything in the plan below, plus:</p>
                )}

                <FeatureList features={plan.features} />

                <div className="pr-card-actions">
                  <button
                    type="button"
                    className="pricing1-card-button"
                    onClick={() => setLeadPlan(completeErpLead(plan.tier))}
                    aria-label={`Get pricing for ${completeErp.name} ${name}`}
                  >
                    Get pricing
                    <span className="pricing1-button-arrow" aria-hidden="true"> →</span>
                  </button>
                </div>

              </div>
            );
          })}

        </div>

        {/* =================================================
            CUSTOM QUOTE
        ================================================= */}

        <div className="pricing1-custom-box">

          <div className="pricing1-custom-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c.5-3.2 3.2-5.5 7-5.5s6.5 2.3 7 5.5" />
            </svg>
          </div>

          <div className="pricing1-custom-content">
            <h3>Need something different?</h3>
            <p>
              Need different plans for different modules? Tell us what you need and
              we&apos;ll put together a custom quote.
            </p>
          </div>

          <div className="pricing1-custom-action">
            <button type="button" onClick={() => setLeadPlan(customLead())}>
              Request a custom quote
            </button>

            <span>
              Or contact our{" "}
              <Link to="/contact-us">sales team</Link>{" "}
              directly
            </span>
          </div>

        </div>

        {/* =================================================
            OPTION 2: INDIVIDUAL MODULES (one section per module)
        ================================================= */}

        <div className="pr-block pr-modules" id="modules">
          {isPage && <span className="pr-section-tag">Option 2</span>}
          <h2>Individual modules</h2>
          <p className="pr-block-sub">
            Need only some modules? Choose any module on its own, on the plan you need.
          </p>

          <nav className="pr-module-nav pr-module-tabs" aria-label="Jump to a module">
            {MODULE_ORDER.map((id) => (
              <a key={id} href={`#plans-${id}`}>
                {modules[id].name}
              </a>
            ))}
          </nav>

          {MODULE_ORDER.map((id) => (
            <div className="pr-module-section" id={`plans-${id}`} key={id}>
              <div className="pr-module-head">
                <h3>
                  <i className={modules[id].icon} aria-hidden="true"></i> {modules[id].title}
                </h3>
                {modules[id].note && <p>{modules[id].note}</p>}
              </div>

              <ModuleTierGrid
                moduleId={id}
                onGetPricing={(tierId) => setLeadPlan(moduleLead(id, tierId))}
              />
            </div>
          ))}
        </div>

        {/* =================================================
            ADD-ONS (names only)
        ================================================= */}

        <div className="pr-block" id="add-ons">
          <h2>Add-ons</h2>
          <p className="pr-block-sub">
            Extend any plan. Items marked &quot;Coming soon&quot; are on our roadmap and not
            available yet.
          </p>

          <div className="pr-addon-grid">
            {addOns.map((addOn) => (
              <AddOnCard
                key={addOn.code}
                addOn={addOn}
                onSelect={(a) => setLeadPlan(addOnLead(a))}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            PLAN TERMS
        ================================================= */}

        <div className="pr-block pr-terms">
          <h2>Plan terms</h2>
          <ul>
            {[...planTerms, "Each higher plan includes everything in the plan below."].map((term) => (
              <li key={term}>
                <span className="pricing1-check" aria-hidden="true">✓</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* =================================================
            SECURITY
        ================================================= */}

        <div className="pricing1-security">

          <span className="pricing1-security-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3 19 6v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z" />
              <path d="m9.5 12 1.7 1.7 3.5-3.8" />
            </svg>
          </span>

          <p>
            Secure cloud hosting with SSL encryption and daily backups.
          </p>

        </div>

      </div>

      {leadPlan && (
        <PlanLeadForm
          plan={leadPlan}
          onClose={() => setLeadPlan(null)}
        />
      )}
    </section>
  );
};

export default Pricing1;
