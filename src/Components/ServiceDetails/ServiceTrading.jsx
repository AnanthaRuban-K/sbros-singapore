import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/home3/faq1.json";

const ServiceTrading = () => {
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? -1 : index);
  };

  return (
    <div className="trading-service-page">

      {/* ================= BREADCRUMB ================= */}
      {/* If your project already has BreadCumb, uncomment below */}
      {/* <BreadCumb Title="IT Trading & Technology Supply" /> */}


      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="trading-hero-section">
        <div className="container">

          <div className="trading-hero">

            <div className="trading-hero-content">

              <span className="trading-label">
                IT TRADING & TECHNOLOGY SUPPLY
              </span>

              <h1>
                Smart Technology
                <span> For Better Business</span>
              </h1>

              <p>
                Reliable technology products are the foundation of every
                successful business. We provide trusted IT hardware,
                networking equipment, software licensing and enterprise
                technology solutions tailored to your business needs.
              </p>

            </div>


            <div className="trading-hero-image">

              <div className="trading-image-shape"></div>

              <img
                src="/assets/img/service/trading.jpg"
                alt="IT Trading and Technology Supply"
              />

              <div className="trading-floating-card">
                <div className="floating-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <div>
                  <strong>Trusted Technology</strong>
                  <span>Business Ready Solutions</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <section className="trading-main-content">

        <div className="container">

          <div className="trading-content-wrapper">


            {/* =====================================================
                INTRO
            ===================================================== */}
            <section className="trading-intro-section">

              <div className="trading-section-heading">

                <span className="trading-small-label">
                  ABOUT OUR SERVICE
                </span>

                <h2>
                  Professional IT Trading & Technology
                  <span> Supply Solutions</span>
                </h2>

                <p>
                  At SBROS Tech, we offer comprehensive IT trading services
                  in Singapore, supplying genuine computer hardware,
                  networking equipment, software licenses and enterprise
                  technology solutions tailored to businesses of all sizes.
                </p>

              </div>

            </section>


            {/* =====================================================
                STATS
            ===================================================== */}
            <section className="trading-stats">

              <div className="trading-stat-card">
                <div className="trading-stat-icon">
                  <i className="bi bi-pc-display"></i>
                </div>
                <h3>IT Hardware</h3>
                <p>Reliable business technology products</p>
              </div>

              <div className="trading-stat-card">
                <div className="trading-stat-icon">
                  <i className="bi bi-diagram-3"></i>
                </div>
                <h3>Networking</h3>
                <p>Secure and scalable infrastructure</p>
              </div>

              <div className="trading-stat-card">
                <div className="trading-stat-icon">
                  <i className="bi bi-key"></i>
                </div>
                <h3>Licensing</h3>
                <p>Genuine software licensing solutions</p>
              </div>

              <div className="trading-stat-card">
                <div className="trading-stat-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <h3>Support</h3>
                <p>Reliable technology consultation</p>
              </div>

            </section>


            {/* =====================================================
                OUR APPROACH
            ===================================================== */}
            <section className="trading-approach-section">

              <div className="trading-section-heading">

                <span className="trading-small-label">
                  OUR APPROACH
                </span>

                <h2>
                  Technology Procurement Made
                  <span> Simple & Reliable</span>
                </h2>

                <p>
                  From product selection to delivery and after-sales support,
                  our team helps businesses procure the right technology
                  based on operational requirements, business objectives
                  and budget.
                </p>

              </div>


              <div className="trading-process-grid">

                <div className="trading-process-card">

                  <span className="process-number">01</span>

                  <div className="process-icon">
                    <i className="bi bi-search"></i>
                  </div>

                  <h3>Understand</h3>

                  <p>
                    We understand your business requirements, technical
                    needs and budget before recommending solutions.
                  </p>

                </div>


                <div className="trading-process-card">

                  <span className="process-number">02</span>

                  <div className="process-icon">
                    <i className="bi bi-box-seam"></i>
                  </div>

                  <h3>Source</h3>

                  <p>
                    We source genuine technology products from trusted
                    manufacturers and global brands.
                  </p>

                </div>


                <div className="trading-process-card">

                  <span className="process-number">03</span>

                  <div className="process-icon">
                    <i className="bi bi-truck"></i>
                  </div>

                  <h3>Deliver</h3>

                  <p>
                    We coordinate product delivery while ensuring quality,
                    reliability and timely procurement.
                  </p>

                </div>


                <div className="trading-process-card">

                  <span className="process-number">04</span>

                  <div className="process-icon">
                    <i className="bi bi-person-check"></i>
                  </div>

                  <h3>Support</h3>

                  <p>
                    Our team provides ongoing consultation and after-sales
                    support for your technology environment.
                  </p>

                </div>

              </div>

            </section>


            {/* =====================================================
                SERVICES
            ===================================================== */}
            <section
              className="trading-services-section"
              id="trading-services"
            >

              <div className="trading-section-heading">

                <span className="trading-small-label">
                  WHAT WE PROVIDE
                </span>

                <h2>
                  Complete Technology
                  <span> Supply Solutions</span>
                </h2>

                <p>
                  Choose from a complete range of technology products and
                  solutions designed to support modern businesses.
                </p>

              </div>


              <div className="trading-service-grid">

                <div className="trading-service-card">

                  <div className="service-card-icon">
                    <i className="bi bi-laptop"></i>
                  </div>

                  <span className="service-card-number">
                    01
                  </span>

                  <h3>IT Hardware Supply</h3>

                  <p>
                    Business laptops, desktop computers, servers and
                    technology devices sourced from trusted manufacturers.
                  </p>


                </div>


                <div className="trading-service-card">

                  <div className="service-card-icon">
                    <i className="bi bi-router"></i>
                  </div>

                  <span className="service-card-number">
                    02
                  </span>

                  <h3>Networking Equipment</h3>

                  <p>
                    Enterprise networking products designed to build
                    secure, stable and scalable business infrastructure.
                  </p>

                 

                </div>


                <div className="trading-service-card">

                  <div className="service-card-icon">
                    <i className="bi bi-file-earmark-lock"></i>
                  </div>

                  <span className="service-card-number">
                    03
                  </span>

                  <h3>Software Licensing</h3>

                  <p>
                    Genuine software licenses that improve productivity,
                    security and compliance across your organization.
                  </p>

                 

                </div>


                <div className="trading-service-card">

                  <div className="service-card-icon">
                    <i className="bi bi-camera-video"></i>
                  </div>

                  <span className="service-card-number">
                    04
                  </span>

                  <h3>Security & Surveillance</h3>

                  <p>
                    Advanced security and surveillance solutions for
                    business safety, monitoring and control.
                  </p>

                 

                </div>

              </div>

            </section>


            {/* =====================================================
                EXPERTISE
            ===================================================== */}
            <section className="trading-expertise-section">

              <div className="trading-expertise-wrapper">

                <div className="trading-expertise-left">

                  <span className="trading-small-label">
                    OUR EXPERTISE
                  </span>

                  <h2>
                    The Right Technology
                    <span> For Your Business</span>
                  </h2>

                  <p>
                    We help businesses select and procure technology
                    solutions that deliver long-term value, performance
                    and reliability.
                  </p>

                  <Link
                    to="/contact"
                    className="trading-primary-btn"
                  >
                    Talk To Our Experts
                    <i className="bi bi-arrow-right"></i>
                  </Link>

                </div>


                <div className="trading-expertise-list">

                  <div className="expertise-item">
                    <span>
                      <i className="bi bi-check-lg"></i>
                    </span>
                    <div>
                      <strong>Software Licensing</strong>
                      <p>
                        Genuine licenses for productivity and compliance.
                      </p>
                    </div>
                  </div>


                  <div className="expertise-item">
                    <span>
                      <i className="bi bi-check-lg"></i>
                    </span>
                    <div>
                      <strong>Cybersecurity</strong>
                      <p>
                        Trusted security solutions from global brands.
                      </p>
                    </div>
                  </div>


                  <div className="expertise-item">
                    <span>
                      <i className="bi bi-check-lg"></i>
                    </span>
                    <div>
                      <strong>Hardware</strong>
                      <p>
                        Business computers, servers and networking devices.
                      </p>
                    </div>
                  </div>


                  <div className="expertise-item">
                    <span>
                      <i className="bi bi-check-lg"></i>
                    </span>
                    <div>
                      <strong>Technology Consulting</strong>
                      <p>
                        Practical procurement and technology guidance.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </section>


            {/* =====================================================
                RELATED SERVICES
            ===================================================== */}
            <section className="trading-related-section">

              <div className="trading-section-heading">

                <span className="trading-small-label">
                  EXPLORE MORE
                </span>

                <h2>
                  Related Technology
                  <span> Services</span>
                </h2>

              </div>


              <div className="trading-related-grid">

                <div className="trading-related-card">

                  <div className="related-icon">
                    <img
                      src="/assets/img/icons/service-page-icon1.png"
                      alt="IT Networking"
                    />
                  </div>

                  <div>
                    <h3>
                      <Link to="/service/service-it-networking">
                        IT Networking
                      </Link>
                    </h3>

                    <p>
                      Enterprise networking solutions for secure and
                      reliable business infrastructure.
                    </p>

                    <Link
                      to="/service/service-it-networking"
                      className="related-link"
                    >
                      Explore Service
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>

                </div>


                <div className="trading-related-card">

                  <div className="related-icon">
                    <img
                      src="/assets/img/icons/service-page-icon2.png"
                      alt="Software Development"
                    />
                  </div>

                  <div>
                    <h3>
                      <Link to="/service/service-details">
                        Software Development
                      </Link>
                    </h3>

                    <p>
                      Custom software solutions designed around your
                      business requirements.
                    </p>

                    <Link
                      to="/service/service-details"
                      className="related-link"
                    >
                      Explore Service
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>

                </div>

              </div>

            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}
            <section className="trading-faq-section">

              <div className="trading-section-heading">

                <span className="trading-small-label">
                  FAQ
                </span>

                <h2>
                  Frequently Asked
                  <span> Questions</span>
                </h2>

                <p>
                  Find answers to common questions about our IT trading
                  and technology supply services.
                </p>

              </div>


              <div className="trading-faq-list">

                {data.slice(0, 4).map((item, index) => (

                  <div
                    key={index}
                    className={`trading-faq-item ${
                      openItemIndex === index ? "active" : ""
                    }`}
                  >

                    <button
                      type="button"
                      className="trading-faq-question"
                      onClick={() => handleItemClick(index)}
                    >

                      <span className="faq-count">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-question-text">
                        {item.title}
                      </span>

                      <span className="faq-toggle">
                        <i
                          className={`bi ${
                            openItemIndex === index
                              ? "bi-dash"
                              : "bi-plus"
                          }`}
                        ></i>
                      </span>

                    </button>


                    {openItemIndex === index && (

                      <div className="trading-faq-answer">
                        <p>{item.desc}</p>
                      </div>

                    )}

                  </div>

                ))}

              </div>

            </section>


            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="trading-cta-section">

              <div className="trading-cta-content">

                <span className="trading-small-label">
                  READY TO UPGRADE?
                </span>

                <h2>
                  Let's Build Your
                  <span> Technology Foundation</span>
                </h2>

                <p>
                  Get the right technology products, reliable support and
                  expert guidance for your business.
                </p>

                <Link
                  to="/contact-us"
                  className="trading-cta-btn"
                >
                  Contact Our Team
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>

              <div className="cta-decoration">
                <i className="bi bi-cpu"></i>
              </div>

            </section>


          </div>

        </div>

      </section>

    </div>
  );
};

export default ServiceTrading;