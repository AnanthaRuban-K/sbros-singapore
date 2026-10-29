import { Link } from "react-router-dom";
import { MODULE_ORDER, completeErp, modules, planTerms } from "../Pricing/pricingData";

/* =========================================================
   HOME: PLANS TEASER
   No prices: visitors choose a plan and ask for pricing.
========================================================= */

const HomePricingTeaser = () => {
  const moduleNames = completeErp.moduleIds.map((id) => modules[id].name).join(", ");

  return (
    <section className="hm-section hm-pricing">
      <div className="container">

        <div className="hm-head">
          <span className="hm-tag">Plans</span>
          <h2>Plans that grow with your business</h2>
          <p>
            Choose the Complete ERP Package or only the modules you need, each in
            Basic, Intermediate or Advanced. Ask us for pricing on any plan.
          </p>
        </div>

        <div className="hm-price-grid">
          <div className="hm-price-card">
            <span className="hm-price-label">Option 1</span>
            <h3>{completeErp.title}</h3>
            <p>All six modules on the plan you choose: {moduleNames}.</p>
            <Link to="/Pricing#erp-plans" className="hm-btn hm-btn-solid">
              See ERP plans <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hm-price-card">
            <span className="hm-price-label">Option 2</span>
            <h3>Individual modules</h3>
            <p>Choose only the modules you need, on the plan you need.</p>
            <div className="hm-price-chips">
              {MODULE_ORDER.map((id) => (
                <span key={id}>{modules[id].name}</span>
              ))}
            </div>
            <Link to="/Pricing#modules" className="hm-btn hm-btn-outline">
              See module plans <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <p className="hm-note">{planTerms.join(" · ")}</p>

      </div>
    </section>
  );
};

export default HomePricingTeaser;
