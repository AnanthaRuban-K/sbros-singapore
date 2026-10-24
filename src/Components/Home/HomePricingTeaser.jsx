import { Link } from "react-router-dom";
import { MODULE_ORDER, TRIAL_DAYS, completeErp, modules } from "../Pricing/pricingData";
import { completeErpFrom, completeErpPlan, formatSGD, moduleFrom } from "../Pricing/pricingCalc";

/* =========================================================
   HOME: PRICING TEASER
   "From" prices come from Pricing/pricingData.js (monthly list prices).
========================================================= */

const HomePricingTeaser = () => {
  const erpFrom = completeErpFrom();
  const cheapestPlan = completeErp.plans.find((p) => p.base === erpFrom) || completeErpPlan("basic");
  const modFrom = moduleFrom();
  const coreModuleNames = completeErp.moduleIds.map((id) => modules[id].name).join(", ");

  return (
    <section className="hm-section hm-pricing">
      <div className="container">

        <div className="hm-head">
          <span className="hm-tag">Pricing</span>
          <h2>Simple, transparent ERP pricing</h2>
          <p>
            Choose the complete ERP package or only the modules you need.
            Prices in SGD, excluding GST.
          </p>
        </div>

        <div className="hm-price-grid">
          <div className="hm-price-card">
            <span className="hm-price-label">Option 1</span>
            <h3>Complete ERP package</h3>
            <p>
              All {completeErp.moduleIds.length} core modules in one price: {coreModuleNames},
              plus {completeErp.alsoIncluded.join(", ")}.
            </p>
            <div className="hm-price-from">
              From <strong>{formatSGD(erpFrom)}</strong> / month
            </div>
            <p className="hm-price-rule">
              For {completeErp.includedEmployees} employees, then {formatSGD(cheapestPlan.extraEmployee)} per extra employee.
            </p>
            <Link to="/Pricing#erp-plans" className="hm-btn hm-btn-solid">
              See ERP plans <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hm-price-card">
            <span className="hm-price-label">Option 2</span>
            <h3>Individual modules</h3>
            <p>Pay only for the modules you use, on the tier you need.</p>
            <div className="hm-price-chips">
              {MODULE_ORDER.map((id) => (
                <span key={id}>{modules[id].name}</span>
              ))}
            </div>
            <div className="hm-price-from">
              From <strong>{formatSGD(modFrom.price)}</strong> per {modFrom.unit} / month
            </div>
            <Link to="/Pricing#modules" className="hm-btn hm-btn-outline">
              See module plans <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <p className="hm-note">
          {TRIAL_DAYS}-day free trial on any plan · Annual prepay: save 15%
        </p>

      </div>
    </section>
  );
};

export default HomePricingTeaser;
