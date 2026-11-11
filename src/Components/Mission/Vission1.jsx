import { useState } from "react";
import { Link } from "react-router-dom";

// =====================================================
// FAQ DATA  (3 categories x 4 questions)
// =====================================================

const faqGroups = [
  {
    title: "General Questions",
    icon: "bi-chat-dots",
    items: [
      {
        q: "What do SBros Tech do?",
        a: (
          <>
            SBros Tech (S) PTE LTD is an IT solutions provider based in
            Singapore, with a branch in India. We provide ERP solutions,
            software development, web development, digital marketing and IT
            networking. For more information on how we can help your business
            using our technology solutions, please visit our{" "}
            <Link to="/contact-us" className="sbfaq-link">
              Contact Us
            </Link>{" "}
            page.
          </>
        ),
      },
      {
        q: "Where is SBros Tech based?",
        a: "We are based in Singapore and have a branch in India.",
      },
      {
        q: "Why is SBros Tech a trustworthy technology partner?",
        a: "We provide practical, scalable and trustworthy IT solutions using our technical knowledge and business knowledge.",
      },
      {
        q: "Which businesses can benefit from SBros Tech?",
        a: "Start-ups, small businesses and larger businesses can benefit from our software, ERP, web and digital solutions.",
      },
    ],
  },
  {
    title: "IT Services & Solutions",
    icon: "bi-cpu",
    items: [
      {
        q: "What IT services does SBros Tech provide?",
        a: (
          <>
            We provide bespoke software, web development, e-commerce, business
            portals, digital marketing and IT networking in Singapore. Please{" "}
            <Link to="/contact-us" className="sbfaq-link">
              Contact Us
            </Link>{" "}
            to discuss your business needs.
          </>
        ),
      },
      {
        q: "Do you provide bespoke software development?",
        a: "Yes! We provide bespoke software solutions to help your business manage its workflow, automate processes and be more efficient.",
      },
      {
        q: "Do you provide web & e-commerce development?",
        a: "Yes! We can provide professional web development and e-commerce solutions to help your business.",
      },
      {
        q: "How can IT solutions help my business be more efficient?",
        a: "IT solutions can help reduce manual tasks, keep information organised, improve communication and make your daily operations run more efficiently.",
      },
    ],
  },
  {
    title: "ERP Software & Business Solutions",
    icon: "bi-diagram-3",
    items: [
      {
        q: "What ERP solutions do you provide?",
        a: (
          <>
            We provide ERP software. This includes modules for HRM, Finance &
            Accounts, Sales, Procurement, CRM & Recruitment. Businesses can
            choose to purchase the full ERP or individual modules. Please{" "}
            <Link to="/contact-us" className="sbfaq-link">
              Contact Us
            </Link>{" "}
            to find the right solution for you.
          </>
        ),
      },
      {
        q: "How can ERP software help my business?",
        a: "ERP software can help link different parts of your business. This can help companies manage their information, track operations and improve communication between departments.",
      },
      {
        q: "Can I purchase individual modules?",
        a: "Yes! You can purchase individual modules.",
      },
      {
        q: "How do I choose the right ERP software?",
        a: "Think about the size of your business, what your daily operations involve, what features you need, your budget and future growth. Choosing the right modules can help make managing your business easier.",
      },
    ],
  },
];

const Vission1 = () => {
  // one open question per category card (first one open by default)
  const [openItems, setOpenItems] = useState({ 0: 0, 1: 0, 2: 0 });

  const toggleItem = (groupIndex, itemIndex) => {
    setOpenItems((prev) => ({
      ...prev,
      [groupIndex]: prev[groupIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <>
      {/* =========================================================
          EXISTING ABOUT / VISION SECTION
      ========================================================= */}

      <section className="solution about-solution sp">
        <div className="container">
          <div className="row align-items-center">

            {/* ================= LEFT - MISSION & VISION ================= */}
            <div className="col-lg-6">
              <div className="overview-left">

                {/* Vision */}
                <div className="overview-row vision-card">
                  <div className="overview-number">01</div>

                  <div className="overview-content">
                    <span>WHERE WE ARE HEADED</span>

                    <h3>Our Vision</h3>

                    <p>
                      To make people and businesses realize and expand their
                      potential
                    </p>
                  </div>
                </div>


                {/* Mission */}
                <div className="overview-row mission-card">
                  <div className="overview-number">02</div>

                  <div className="overview-content">
                    <span>WHAT DRIVES US</span>

                    <h3>Our Mission</h3>

                    <p>
                      Educate and Develop Peoples Talents to Empower & Achieve
                      beyond their imagination.
                    </p>
                  </div>
                </div>


                {/* Values */}
                <div className="overview-row vision-card">
                  <div className="overview-number">03</div>

                  <div className="overview-content">
                    <span>WHAT WE STAND FOR</span>

                    <h3>Our Values</h3>

                    <p>
                      Respect individuals
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
                  Technology Solutions to
                  <strong> Help your Business Grow</strong>
                </h2>


                <div className="overview-line">
                  <span></span>
                  <i></i>
                </div>


                <p className="overview-description">
                  SBROS TECH (S) PTE LTD is an IT solutions company based in Singapore, with a branch presence in India. We provide reliable and innovative IT solutions in Singapore, helping businesses improve efficiency and achieve their goals through practical, scalable technology.
                </p>


                <p className="overview-description">
                  From custom software development and ERP solutions to website development, digital marketing, e-commerce and IT networking, we deliver business-focused solutions tailored to your requirements. Our team combines expertise from Singapore and India to support businesses with reliable technology and long-term growth.
                </p>


                {/* Highlights */}
                <div className="overview-highlights">

                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="bi bi-lightning-charge-fill"></i>
                    </div>

                    <div>
                      <h4>Smart Solutions</h4>

                      <p>
                        Technology built around real business needs.
                      </p>
                    </div>
                  </div>


                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="bi bi-shield-check"></i>
                    </div>

                    <div>
                      <h4>Trusted Approach</h4>

                      <p>
                        Reliable solutions focused on long-term value.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          WHY CHOOSE SBROS TECH
      ========================================================= */}

      <section className="why-sbros-section">

        <div className="container">

          {/* ================= SECTION HEADING ================= */}
          <div className="why-sbros-heading">

            <div className="why-sbros-label">
              <span></span>
              WHY CHOOSE US
            </div>

            <h2>
              Why Choose <strong>SBROS TECH?</strong>
            </h2>

            <p>
              We combine technology, creativity, and business understanding
              to deliver solutions that create real value.
            </p>

          </div>


          {/* ================= FEATURE CARDS ================= */}
          <div className="row g-4 why-sbros-cards">


            {/* ================= CARD 01 ================= */}
            <div className="col-lg-3 col-md-6">

              <div className="why-sbros-card">

                <div className="why-card-top">

                  <span className="why-card-number">
                    01
                  </span>

                  <div className="why-card-icon">
                    <i className="bi bi-lightbulb"></i>
                  </div>

                </div>


                <div className="why-card-content">

                  <h3>
                    Business Focused
                  </h3>

                  <p>
                    We provide reliable IT solutions in Singapore to meet your business needs and support growth.

                  </p>

                </div>

              </div>

            </div>


            {/* ================= CARD 02 ================= */}
            <div className="col-lg-3 col-md-6">

              <div className="why-sbros-card">

                <div className="why-card-top">

                  <span className="why-card-number">
                    02
                  </span>

                  <div className="why-card-icon">
                    <i className="bi bi-cpu"></i>
                  </div>

                </div>


                <div className="why-card-content">

                  <h3>
                    Modern Technology
                  </h3>

                  <p>
                    We use modern technology to deliver quality software development and digital solutions.

                  </p>

                </div>

              </div>

            </div>


            {/* ================= CARD 03 ================= */}
            <div className="col-lg-3 col-md-6">

              <div className="why-sbros-card">

                <div className="why-card-top">

                  <span className="why-card-number">
                    03
                  </span>

                  <div className="why-card-icon">
                    <i className="bi bi-bar-chart-line"></i>
                  </div>

                </div>


                <div className="why-card-content">

                  <h3>
                    Scalable Solutions
                  </h3>

                  <p>
                    Our ERP and custom software solutions grow with your business and changing needs.

                  </p>

                </div>

              </div>

            </div>


            {/* ================= CARD 04 ================= */}
            <div className="col-lg-3 col-md-6">

              <div className="why-sbros-card">

                <div className="why-card-top">

                  <span className="why-card-number">
                    04
                  </span>

                  <div className="why-card-icon">
                    <i className="bi bi-headset"></i>
                  </div>

                </div>


                <div className="why-card-content">

                  <h3>
                    Reliable Support
                  </h3>

                  <p>
                   We provide dependable IT support in Singapore to keep your business systems running smoothly.

                  </p>

                </div>

              </div>

            </div>


          </div>

        </div>

      </section>


      {/* =========================================================
          FREQUENTLY ASKED QUESTIONS  (3 category cards)
      ========================================================= */}

      <section className="sbfaq">
        <div className="container">

          <div className="sbfaq-head">
            <div className="sbfaq-label">
              <span></span>
              FAQ
            </div>

            <h2>
              Frequently Asked <strong>Questions</strong>
            </h2>

            <p>
              Quick answers about SBros Tech, our IT services and ERP
              solutions.
            </p>
          </div>

          <div className="row g-4 sbfaq-grid">
            {faqGroups.map((group, gi) => (
              <div className="col-lg-4" key={group.title}>
                <div className={`sbfaq-card sbfaq-card--${gi + 1}`}>

                  {/* Card header */}
                  <div className="sbfaq-card-head">
                    <span className="sbfaq-card-bgnum" aria-hidden="true">
                      {String(gi + 1).padStart(2, "0")}
                    </span>

                    <div className="sbfaq-card-icon">
                      <i className={`bi ${group.icon}`}></i>
                    </div>

                    <div className="sbfaq-card-title">
                      <h3>{group.title}</h3>
                      <small>{group.items.length} Questions</small>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="sbfaq-card-body">
                    {group.items.map((item, ii) => {
                      const isOpen = openItems[gi] === ii;
                      const panelId = `sbfaq-a-${gi}-${ii}`;

                      return (
                        <div
                          className={`sbfaq-item ${isOpen ? "is-open" : ""}`}
                          key={item.q}
                        >
                          <button
                            type="button"
                            className="sbfaq-q"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggleItem(gi, ii)}
                          >
                            <span>{item.q}</span>
                            <span className="sbfaq-icon" aria-hidden="true"></span>
                          </button>

                          <div className="sbfaq-a" id={panelId} role="region">
                            <div>
                              <p>{item.a}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          CALL TO ACTION
      ========================================================= */}

      <section className="sbcta">
        <div className="container">
          <div className="sbcta-box">

            <div className="sbcta-text">
              <span className="sbcta-label">
                <i className="bi bi-rocket-takeoff"></i>
                Let&apos;s Work Together
              </span>

              <h2>Ready to Take Your Business Forward?</h2>

              <p>
                Discover how SBros Tech can support your business with reliable
                IT solutions, custom software and ERP systems. Connect with our
                team to explore the right solutions for your business.
              </p>

              <div className="sbcta-actions">
                <Link to="/services" className="sbcta-btn sbcta-btn--solid">
                  Explore Our Services
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/contact-us" className="sbcta-btn sbcta-btn--ghost">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="sbcta-stack" aria-hidden="true">
              <div className="sbcta-chip sbcta-chip--1">
                <i className="bi bi-code-slash"></i>
                <span>Custom Software</span>
              </div>

              <div className="sbcta-chip sbcta-chip--2">
                <i className="bi bi-diagram-3"></i>
                <span>ERP Systems</span>
              </div>

              <div className="sbcta-chip sbcta-chip--3">
                <i className="bi bi-shield-check"></i>
                <span>Reliable IT Solutions</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Vission1;