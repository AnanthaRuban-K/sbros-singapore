import { Link } from "react-router-dom";
import { TRIAL_DAYS } from "../Pricing/pricingData";

/* =========================================================
   HOME: CLOSING CALL TO ACTION (brand banner)
========================================================= */

const HomeCta = () => (
  <section className="hm-cta">
    <div className="container hm-cta-inner">
      <div className="hm-cta-text">
        <h2>Ready to simplify your business operations?</h2>
        <p>
          Request a {TRIAL_DAYS}-day free trial, or talk to our team about the right
          plan for your business.
        </p>
      </div>

      <div className="hm-cta-actions">
        <Link to="/Pricing" className="hm-btn hm-btn-primary">
          Request a free trial <span aria-hidden="true">→</span>
        </Link>
        <Link to="/contact-us" className="hm-btn hm-btn-ghost">
          Contact us
        </Link>
        <a href="tel:+6590214545" className="hm-cta-phone">
          <i className="bi bi-telephone" aria-hidden="true"></i> +65 9021 4545
        </a>
      </div>
    </div>
  </section>
);

export default HomeCta;
