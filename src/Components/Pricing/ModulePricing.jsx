import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlanLeadForm from "./PlanLeadForm";
import ModuleTierGrid from "./ModuleTierGrid";
import { MODULE_ORDER, modules } from "./pricingData";
import { moduleUnitLabel } from "./pricingCalc";
import { addOnLead, addOnsForModule, customLead, moduleLead } from "./leadSelections";
import { AddOnCompactList, BillingToggle, PricingNote } from "./PricingParts";

// All prices, features and add-ons come from ./pricingData.js

const LOGO_SRC = "/assets/img/logo/sbros-logo1.png";

const ModulePricing = () => {
  const { moduleId } = useParams();
  const module = modules[moduleId];

  const [billing, setBilling] = useState("annual");
  const [logoFailed, setLogoFailed] = useState(false);

  // Plan shown in the lead form modal (null = closed)
  const [leadPlan, setLeadPlan] = useState(null);

  if (!module) {
    return (
      <section className="mp-section">
        <div className="mp-container mp-notfound">
          <h1>Module not found</h1>
          <Link to="/products" className="mp-back">← Back to Products</Link>
        </div>
      </section>
    );
  }

  const { pricing } = module;

  return (
    <section className="mp-section">
      <div className="mp-container">
        {/* <Link to="/products" className="mp-back">← Back to Products</Link> */}

        {/* MODULE NAVIGATION */}
        <nav className="pr-module-nav" aria-label="ERP modules">
          {MODULE_ORDER.map((id) => (
            <Link
              key={id}
              to={`/module-pricing/${id}`}
              className={id === moduleId ? "active" : ""}
              aria-current={id === moduleId ? "page" : undefined}
            >
              {modules[id].name}
            </Link>
          ))}
        </nav>

        <div className="mp-header">
          <div className="mp-header-icon"><i className={module.icon} aria-hidden="true"></i></div>
          <h1>{module.title}</h1>
          <p>
            SGD {moduleUnitLabel(module)}
            {pricing.model === "per_unit" && <> · Min. {pricing.min} {pricing.unitPlural}</>}
            {pricing.model === "flat" && <> · {pricing.note}</>}
          </p>
          {module.intro && <p className="pr-intro">{module.intro}</p>}

          <div className="pr-billing">
            <BillingToggle billing={billing} onChange={setBilling} />
            <PricingNote billing={billing} />
          </div>
        </div>

        <ModuleTierGrid
          key={moduleId}
          moduleId={moduleId}
          billing={billing}
          onSelectTier={(tierId, trial, quantity) =>
            setLeadPlan(moduleLead({ moduleId, tierId, billing, quantity, trial }))
          }
        >
          {/* Custom card: logo (or name) → Request a custom quote */}
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

            <p className="mp-custom-mission">Need something different?</p>

            <button
              type="button"
              className="mp-btn"
              onClick={() => setLeadPlan(customLead({ billing, moduleId }))}
            >
              Request a custom quote →
            </button>
          </div>
        </ModuleTierGrid>

        {module.footnote && <p className="mp-footnote">{module.footnote}</p>}

        {/* ADD-ONS */}
        <div className="pr-block">
          <h2>Add-ons</h2>
          <AddOnCompactList
            addOns={addOnsForModule(moduleId)}
            onSelect={(a) => setLeadPlan(addOnLead(a))}
          />
          <p className="pr-footnote">
            See every add-on on the <Link to="/Pricing#add-ons">pricing page</Link>.
          </p>
        </div>
      </div>

      {leadPlan && (
        <PlanLeadForm plan={leadPlan} onClose={() => setLeadPlan(null)} />
      )}
    </section>
  );
};

export default ModulePricing;
