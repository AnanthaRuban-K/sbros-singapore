import { Link } from "react-router-dom";
import { MODULE_ORDER, TRIAL_DAYS, modules } from "../Pricing/pricingData";

/* =========================================================
   HOME HERO  –  brand banner (logo colours: blue, red, gold)
   Runs behind the floating navbar, like the /Pricing banner.
========================================================= */

const HIGHLIGHTS = [
  `${TRIAL_DAYS}-day free trial on ERP plans`,
  "CPF, SDL and IR8A preparation on every plan; FWL and MOM work pass from Intermediate; IR21 on Advanced",
  "Cross-module integration: Payroll to Finance, Procurement to Payables",
];

const HomeHero = () => (
  <section className="hm-hero">
    <div className="container hm-hero-inner">

      <div className="hm-hero-text">
        <span className="hm-hero-tag">SBros Tech (S) Pte Ltd · Singapore</span>

        <h1>
      <span>Software and ERP Solutions</span> for Businesses in Singapore
 
        </h1>

        <p>
          SBros Tech provides professional IT solutions in Singapore, including software development, ERP solutions, website development and IT networking, to help businesses improve their operations and grow efficiently. 
        </p>

        <div className="hm-hero-actions">
          <Link to="/products" className="hm-btn hm-btn-primary">
            Explore our ERP <span aria-hidden="true">→</span>
          </Link>
          <Link to="/pricing" className="hm-btn hm-btn-ghost">
            See plans
          </Link>
        </div>

        <ul className="hm-hero-points">
          {HIGHLIGHTS.map((point) => (
            <li key={point}>
              <span aria-hidden="true">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="hm-hero-visual">
        <div className="hm-hero-image">
          <img
            src="/assets/img/hero/headimg5.png"
            alt="One Solution ERP dashboards for HR, finance and sales"
            width="1536"
            height="1024"
          />
        </div>

        <nav className="hm-hero-modules" aria-label="ERP modules">
          {MODULE_ORDER.map((id) => (
            <Link key={id} to={`/pricing#plans-${id}`}>
              {modules[id].name}
            </Link>
          ))}
        </nav>
      </div>

    </div>
  </section>
);

export default HomeHero;
