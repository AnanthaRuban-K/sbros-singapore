import { Link } from "react-router-dom";

const Vission1 = () => {
  return (
    <section className="solution about-solution sp">
      <div className="container">
        <div className="row align-items-center">

          {/* ================= LEFT - MISSION & VISION ================= */}
          <div className="col-lg-6">
            <div className="overview-left">

              {/* Mission */}
              <div className="overview-row mission-card">
                <div className="overview-number">01</div>

                <div className="overview-icon">
                  <img
                    src="/assets/img/icons/about-solution-iocn1.png"
                    alt="Our Mission"
                  />
                </div>

                <div className="overview-content">
                  <span>WHAT DRIVES US</span>
                  <h3>Our Mission</h3>

                  <p>
                    We use modern technology and innovative thinking to create
                    smart, scalable solutions that improve business efficiency,
                    strengthen digital capabilities, and support sustainable growth.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="overview-row vision-card">
                <div className="overview-number">02</div>

                <div className="overview-icon">
                  <img
                    src="/assets/img/icons/about-solution-iocn2.png"
                    alt="Our Vision"
                  />
                </div>

                <div className="overview-content">
                  <span>WHERE WE ARE HEADED</span>
                  <h3>Our Vision</h3>

                  <p>
                    To become a trusted technology partner by delivering
                    reliable, future-ready digital solutions that create
                    meaningful and lasting value for businesses.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT - COMPANY OVERVIEW ================= */}
          <div className="col-lg-6">
            <div className="company-overview">

              <div className="overview-label">
                <span></span>
                WHO WE ARE
              </div>

              <h2>
                Technology That
                <strong> Moves Business Forward.</strong>
              </h2>

              <div className="overview-line">
                <span></span>
                <i></i>
              </div>

              <p className="overview-description">
                SBROS TECH (S) PTE LTD is a Singapore-based technology company
                focused on delivering practical and innovative digital solutions
                for modern businesses.
              </p>

              <p className="overview-description">
                From custom software and websites to e-commerce, business
                portals, digital marketing, and network solutions, we combine
                technology with business understanding to build solutions that
                are reliable, scalable, and ready for the future.
              </p>

              {/* Highlights */}
              <div className="overview-highlights">

                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <div>
                    <h4>Smart Solutions</h4>
                    <p>Technology built around real business needs.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div>
                    <h4>Trusted Approach</h4>
                    <p>Reliable solutions focused on long-term value.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vission1;