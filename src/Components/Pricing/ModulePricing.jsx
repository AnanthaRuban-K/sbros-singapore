import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlanLeadForm from "./PlanLeadForm";
import ModuleTierGrid from "./ModuleTierGrid";
import { MODULE_ORDER, modules } from "./pricingData";
import { moduleUnitLabel } from "./pricingCalc";
import { addOnGroupsForModule, addOnLead, customLead, moduleLead } from "./leadSelections";
import {
  AddOnCompactList,
  BillingToggle,
  ComingSoonBadge,
  PriceDisplay,
  PricingNote,
} from "./PricingParts";

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
        <Link to="/products" className="mp-back">← Back to Products</Link>

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
            {pricing.model === "flat_with_users" && <> · {pricing.included} {pricing.unitPlural} included</>}
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

        {/* BUNDLES (Recruitment) */}
        {module.bundles?.length > 0 && (
          <div className="pr-block">
            <h2>{module.name} bundles</h2>
            <div className="pr-bundle-grid">
              {module.bundles.map((bundle) => {
                const soon = bundle.status === "coming_soon";
                return (
                  <div className={`pr-bundle ${soon ? "is-soon" : ""}`} key={bundle.code}>
                    <div className="pr-addon-head">
                      <h3>{bundle.name}</h3>
                      {soon && <ComingSoonBadge />}
                    </div>
                    <p>{bundle.includes}</p>
                    <PriceDisplay monthly={bundle.price} billing={billing} />
                    <button
                      type="button"
                      className={soon ? "pr-btn-outline" : "pr-btn"}
                      aria-label={`${soon ? "Notify me about" : "Request"} ${bundle.name}`}
                      onClick={() => {
                        const lead = moduleLead({ moduleId, tierId: bundle.tier, billing, quantity: null, bundle });
                        setLeadPlan(soon ? { ...lead, notify: true } : lead);
                      }}
                    >
                      {soon ? "Notify me" : "Request"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ADD-ONS */}
        <div className="pr-block">
          <h2>Add-ons</h2>
          {addOnGroupsForModule(moduleId).map((group) => (
            <div key={group.title}>
              <h3 className="pr-subheading">{group.title}</h3>
              <AddOnCompactList
                addOns={group.addOns}
                onSelect={(a) => setLeadPlan(addOnLead(a))}
              />
            </div>
          ))}
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
