import { useState } from "react";
import { Link } from "react-router-dom";
import PlanLeadForm from "./PlanLeadForm";
import ModuleTierGrid from "./ModuleTierGrid";
import {
  MODULE_ORDER,
  billingTerms,
  completeErp,
  heroHighlights,
  modules,
  platformAddOns,
  recruitmentAddOns,
} from "./pricingData";
import {
  comparisonRows,
  completeErpFrom,
  completeErpMonthly,
  cyclePrice,
  formatSGD,
  moduleFrom,
  moduleUnitLabel,
  tierName,
  toQuantity,
} from "./pricingCalc";
import { addOnLead, completeErpLead, customLead, moduleLead } from "./leadSelections";
import {
  AddOnCard,
  BillingToggle,
  PriceDisplay,
  PricingNote,
} from "./PricingParts";

// All prices, features and add-ons come from ./pricingData.js

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
  const [billing, setBilling] = useState("annual");

  // Employee calculator (raw input text, parsed when used)
  const [employeesInput, setEmployeesInput] = useState(String(completeErp.includedEmployees));
  const employees = toQuantity(employeesInput, completeErp.includedEmployees);

  // Plan shown in the lead form modal (null = closed)
  const [leadPlan, setLeadPlan] = useState(null);

  // "Pricing by module" tab
  const [activeModule, setActiveModule] = useState(MODULE_ORDER[0]);

  const openPlan = (tierId, trial) =>
    setLeadPlan(completeErpLead({ tierId, billing, employees, trial }));

  const comparison = comparisonRows();
  const comparisonTier = tierName(completeErp.comparison.tier);

  // On /Pricing the header is a full-width banner in the brand colours
  const isPage = Heading === "h1";

  const coreModuleNames = completeErp.moduleIds.map((id) => modules[id].name).join(", ");
  const erpFrom = cyclePrice(completeErpFrom(), billing).perMonth;
  const modFrom = moduleFrom();
  const modFromPrice = cyclePrice(modFrom.price, billing).perMonth;

  // /Pricing banner: both ways to buy, side by side
  const hero = (
    <div className="pricing1-header pr-hero-content">

      {/* Page title for search engines and screen readers only (not shown) */}
      <Heading className="visually-hidden">SBros ERP Pricing</Heading>

      <BillingToggle billing={billing} onChange={setBilling} />

      <PricingNote billing={billing} />

      <div className="pr-options">
        <a href="#erp-plans" className="pr-option">
          <span className="pr-option-tag">Option 1</span>
          <span className="pr-option-title">Complete ERP package</span>
          <span className="pr-option-text">
            All {completeErp.moduleIds.length} core modules in one price: {coreModuleNames},
            plus {completeErp.alsoIncluded.join(", ")}.
          </span>
          <span className="pr-option-price">
            From <strong>{formatSGD(erpFrom)}</strong> / month for {completeErp.includedEmployees} employees
          </span>
          <span className="pr-option-cta">View ERP plans ↓</span>
        </a>

        <a href="#modules" className="pr-option">
          <span className="pr-option-tag">Option 2</span>
          <span className="pr-option-title">Individual modules</span>
          <span className="pr-option-text">
            Pay only for the modules you use. Need different tiers for different
            modules? Ask us for a custom quote.
          </span>
          <span className="pr-option-chips" aria-hidden="true">
            {MODULE_ORDER.map((id) => (
              <span key={id}>{modules[id].name}</span>
            ))}
          </span>
          <span className="pr-option-price">
            From <strong>{formatSGD(modFromPrice)}</strong> per {modFrom.unit} / month
          </span>
          <span className="pr-option-cta">View module plans ↓</span>
        </a>
      </div>

      <ul className="pr-hero-points">
        {heroHighlights.map((point) => (
          <li key={point}>
            <span aria-hidden="true">✓</span>
            {point}
          </li>
        ))}
      </ul>

    </div>
  );

  // Embedded (home4): compact header, Complete ERP first
  const header = (
    <div className="pricing1-header">

      <span className="pricing1-badge">
        Complete ERP package
      </span>

      <Heading>
        Choose the Right <span>Plan</span>
      </Heading>

      <p>
        All core modules ({coreModuleNames}) in one price, on the tier of your choice.
      </p>

      <BillingToggle billing={billing} onChange={setBilling} />

      <PricingNote billing={billing} />

      <a href="#modules" className="pr-jump">Need only some modules? See pricing by module ↓</a>

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
            OPTION 1: COMPLETE ERP
        ================================================= */}

        {isPage && (
          <div className="pr-section-head" id="erp-plans">
            <span className="pr-section-tag">Option 1</span>
            <h2>Complete ERP package</h2>
            <p>
              All core modules ({coreModuleNames}) in one price, on the tier of your choice.
            </p>
          </div>
        )}

        {/* =================================================
            EMPLOYEE CALCULATOR
        ================================================= */}

        <div className="pr-calculator">
          <label htmlFor="erp-employees">Number of employees</label>
          <input
            id="erp-employees"
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            value={employeesInput}
            onChange={(e) => setEmployeesInput(e.target.value)}
            onBlur={() => setEmployeesInput(String(employees))}
            aria-describedby="erp-employees-hint"
          />
          <span id="erp-employees-hint" className="pr-qty-hint">
            Prices below update for {employees} employees.
            {" "}{completeErp.includedEmployees} employees are included in every plan.
          </span>
        </div>

        {/* =================================================
            PRICING CARDS
        ================================================= */}

        <div className="pricing1-grid pricing1-grid--3">

          {completeErp.plans.map((plan) => {
            const name = tierName(plan.tier);
            const monthly = completeErpMonthly(plan.tier, employees);

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

                <PriceDisplay monthly={monthly} billing={billing} />

                <p className="pr-card-rule">
                  For {employees} employees. Includes {completeErp.includedEmployees} employees,
                  then {formatSGD(plan.extraEmployee)} per extra employee / month.
                </p>

                <ul className="pricing1-features">
                  <li>
                    <span className="pricing1-check" aria-hidden="true">✓</span>
                    <span>
                      All core modules on the {name} tier: features as listed under each
                      module&apos;s {name} plan
                    </span>
                  </li>
                  {completeErp.alsoIncluded.map((item) => (
                    <li key={item}>
                      <span className="pricing1-check" aria-hidden="true">✓</span>
                      <span>Also included: {item}</span>
                    </li>
                  ))}
                  <li>
                    <span className="pricing1-check" aria-hidden="true">✓</span>
                    <span>{completeErp.includedUsers}</span>
                  </li>
                </ul>

                <nav className="pr-module-links" aria-label={`${name} tier features by module`}>
                  {completeErp.moduleIds.map((id) => (
                    <Link key={id} to={`/module-pricing/${id}/${plan.tier}/details`}>
                      {modules[id].name}
                    </Link>
                  ))}
                </nav>

                <div className="pr-card-actions">
                  <button
                    type="button"
                    className="pricing1-card-button pr-btn-trial"
                    onClick={() => openPlan(plan.tier, true)}
                  >
                    Request a free trial
                  </button>

                  <button
                    type="button"
                    className="pricing1-card-button"
                    onClick={() => openPlan(plan.tier, false)}
                  >
                    Request Pricing
                    <span className="pricing1-button-arrow" aria-hidden="true"> →</span>
                  </button>
                </div>

              </div>
            );
          })}

        </div>

        {/* =================================================
            CUSTOM QUOTE SECTION
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
              Tell us what you need and we&apos;ll put together a custom quote that
              fits your requirements and budget.
            </p>
          </div>

          <div className="pricing1-custom-action">
            <button
              type="button"
              onClick={() => setLeadPlan(customLead({ billing }))}
            >
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
            PRICING BY MODULE
        ================================================= */}

        <div className="pr-block pr-modules" id="modules">
          {isPage && <span className="pr-section-tag">Option 2</span>}
          <h2>Individual modules</h2>
          <p className="pr-block-sub">
            Need only some modules? Buy any module on its own, on the tier you need.
            Need different tiers for different modules? Ask us for a custom quote.
          </p>

          <div className="pr-module-nav pr-module-tabs" role="group" aria-label="Choose a module">
            {MODULE_ORDER.map((id) => (
              <button
                key={id}
                type="button"
                className={id === activeModule ? "active" : ""}
                aria-pressed={id === activeModule}
                onClick={() => setActiveModule(id)}
              >
                {modules[id].name}
              </button>
            ))}
          </div>

          <div className="pr-module-head">
            <h3>{modules[activeModule].title}</h3>
            <p>
              SGD {moduleUnitLabel(modules[activeModule])}
              {modules[activeModule].pricing.model === "per_unit" &&
                <> · Min. {modules[activeModule].pricing.min} {modules[activeModule].pricing.unitPlural}</>}
              {modules[activeModule].pricing.model === "flat_with_users" &&
                <> · {modules[activeModule].pricing.included} {modules[activeModule].pricing.unitPlural} included</>}
              {modules[activeModule].pricing.model === "flat" && <> · {modules[activeModule].pricing.note}</>}
            </p>
            {modules[activeModule].intro && <p>{modules[activeModule].intro}</p>}

            <div className="pr-billing">
              <BillingToggle billing={billing} onChange={setBilling} />
              <PricingNote billing={billing} />
            </div>
          </div>

          <ModuleTierGrid
            key={activeModule}
            moduleId={activeModule}
            billing={billing}
            tierHeading="h4"
            onSelectTier={(tierId, trial, quantity) =>
              setLeadPlan(moduleLead({ moduleId: activeModule, tierId, billing, quantity, trial }))
            }
          />

          {modules[activeModule].footnote && (
            <p className="mp-footnote">{modules[activeModule].footnote}</p>
          )}

          <p className="pr-footnote pr-module-more">
            <Link to={`/module-pricing/${activeModule}`}>
              See the full {modules[activeModule].name} page
              {modules[activeModule].bundles?.length ? ", bundles" : ""} and add-ons →
            </Link>
          </p>
        </div>

        {/* =================================================
            CHEAPER THAN SEPARATELY
        ================================================= */}

        <div className="pr-block">
          <h2>Cheaper than buying modules separately</h2>
          <p className="pr-block-sub">
            {comparisonTier} tier, per month, list prices.
          </p>

          <div className="pr-table-wrap" tabIndex={0} role="region" aria-label="Price comparison table">
            <table className="pr-table">
              <thead>
                <tr>
                  <th scope="col">Employees</th>
                  <th scope="col">Separately</th>
                  <th scope="col">Complete ERP {comparisonTier}</th>
                  <th scope="col">Saving</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.employees}>
                    <th scope="row">{row.employees}</th>
                    <td>{formatSGD(row.separately)}</td>
                    <td>{formatSGD(row.complete)}</td>
                    <td className="pr-saving">{row.savingPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="pr-footnote">{completeErp.comparison.footnote}</p>
        </div>

        {/* =================================================
            ADD-ONS
        ================================================= */}

        <div className="pr-block" id="add-ons">
          <h2>Add-ons</h2>
          <p className="pr-block-sub">
            Extend any plan. Items marked &quot;Coming soon&quot; are not available yet: choose
            &quot;Notify me&quot; and we will tell you when they launch.
          </p>

          <h3 className="pr-subheading">Platform add-ons (all modules)</h3>
          <div className="pr-addon-grid">
            {platformAddOns.map((addOn) => (
              <AddOnCard
                key={addOn.code}
                addOn={addOn}
                onSelect={(a) => setLeadPlan(addOnLead(a))}
              />
            ))}
          </div>

          <h3 className="pr-subheading">Recruitment add-ons</h3>
          <div className="pr-addon-grid">
            {recruitmentAddOns.map((addOn) => (
              <AddOnCard
                key={addOn.code}
                addOn={addOn}
                onSelect={(a) => setLeadPlan(addOnLead(a))}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            BILLING TERMS
        ================================================= */}

        <div className="pr-block pr-terms">
          <h2>Billing terms</h2>
          <ul>
            {billingTerms.map((term) => (
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
