import { Link } from "react-router-dom";
import { MODULE_ORDER, TRIAL_DAYS, modules } from "../Pricing/pricingData";

/* =========================================================
   HOME HERO  –  brand banner (logo colours: blue, red, gold)
   Runs behind the floating navbar, like the /Pricing banner.
========================================================= */

const HIGHLIGHTS = [
  `${TRIAL_DAYS}-day free trial on ERP plans`,
  "CPF, SDL and IR8A preparation on every plan; FWL and MOM work pass from Intermediate; IR21 on Advanced",
  "Mobile app on every plan",
];

const HomeHero = () => (
  <section className="hm-hero">
    <div className="container hm-hero-inner">

      <div className="hm-hero-text">
        <span className="hm-hero-tag">SBros Tech (S) Pte Ltd · Singapore</span>

        <h1>
          Powering Businesses With <span>Software Built for Growth</span>
        </h1>

        <p>
          We deliver innovative, secure, and scalable IT solutions that simplify
          operations, enhance efficiency, and empower businesses to achieve
          sustainable growth.
        </p>

        <div className="hm-hero-actions">
          <Link to="/products" className="hm-btn hm-btn-primary">
            Explore our ERP <span aria-hidden="true">→</span>
          </Link>
          <Link to="/Pricing" className="hm-btn hm-btn-ghost">
            See pricing
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
            <Link key={id} to={`/module-pricing/${id}`}>
              {modules[id].name}
            </Link>
          ))}
        </nav>
      </div>

    </div>
  </section>
);

export default HomeHero;
