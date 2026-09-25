import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/home3/faq1.json";

const ServiceDetailsCenterERP = () => {
    const [openItemIndex, setOpenItemIndex] = useState(0);

    const handleItemClick = (index) => {
        setOpenItemIndex(
            openItemIndex === index ? -1 : index
        );
    };

    /* =====================================================
       ERP MODULES
    ===================================================== */

    const erpModules = [
        {
            number: "01",
            icon: "bi bi-people",
            title: "Human Resource Management",
            description:
                "Manage employees, attendance, leave, payroll and workforce operations from one centralized system.",
        },
        {
            number: "02",
            icon: "bi bi-person-lines-fill",
            title: "Customer Relationship Management",
            description:
                "Track leads, customers, follow-ups and sales activities while building stronger customer relationships.",
        },
        {
            number: "03",
            icon: "bi bi-wallet2",
            title: "Finance & Accounting",
            description:
                "Manage financial transactions, invoices, expenses, payments and accounting activities efficiently.",
        },
        {
            number: "04",
            icon: "bi bi-box-seam",
            title: "Procurement Management",
            description:
                "Streamline purchasing, supplier management, purchase orders and procurement workflows.",
        },
        {
    number: "05",
    icon: "bi bi-cart-check",
    title: "Sales",
    description:
        "Manage products, services, quotations, sales orders, customers, contracts and complete sales operations in one platform.",
},
        
    ];

    /* =====================================================
       ERP FEATURES
    ===================================================== */

    const features = [
        {
            number: "01",
            icon: "bi bi-grid-1x2",
            title: "All-in-One Platform",
            description:
                "Connect multiple business operations through one centralized ERP platform.",
        },
        {
            number: "02",
            icon: "bi bi-bar-chart-line",
            title: "Real-Time Insights",
            description:
                "Get clear business visibility with dashboards, reports and real-time operational data.",
        },
        {
            number: "03",
            icon: "bi bi-shield-check",
            title: "Secure & Scalable",
            description:
                "Built with secure architecture and flexible modules that can grow with your business.",
        },
    ];

    /* =====================================================
       ERP BENEFITS
    ===================================================== */

    const benefits = [
        "Centralized Business Management",
        "Improved Operational Efficiency",
        "Real-Time Business Reports",
        "Reduced Manual Work",
        "Better Customer Management",
        "Improved Team Collaboration",
    ];

    /* =====================================================
       IMPLEMENTATION PROCESS
    ===================================================== */

    const process = [
        {
            number: "01",
            title: "Business Analysis",
            description:
                "We understand your business processes, challenges and operational requirements.",
        },
        {
            number: "02",
            title: "ERP Planning",
            description:
                "Our team plans the required ERP modules, workflows and system structure.",
        },
        {
            number: "03",
            title: "Development",
            description:
                "We configure and develop ERP features based on your business requirements.",
        },
        {
            number: "04",
            title: "Testing & Launch",
            description:
                "The system is tested, optimized and prepared for a smooth business launch.",
        },
    ];

    return (
        <div className="erp-service-page">

            <div className="service-details-area-all sp">

                <div className="container">

                    <div className="erp-service-content">

                        {/* =================================================
                            HERO / INTRO
                        ================================================= */}

                        <section className="erp-intro-section">

                            <div className="erp-intro-content">

                                <span className="erp-label">
                                    ERP SOLUTIONS
                                </span>

                                <h1>
                                    Everything Your Business Needs.
                                    <span> In One ERP.</span>
                                </h1>

                                <p>
                                    Manage your entire business from one
                                    powerful platform. Our ERP solutions
                                    connect HR, CRM, Finance, Procurement,
                                    Sales and Recruitment to help businesses
                                    work smarter and grow faster.
                                </p>

                                {/* <div className="erp-intro-points">

                                    <div>
                                        <i className="bi bi-check-circle-fill"></i>
                                        <span>Centralized Management</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-check-circle-fill"></i>
                                        <span>Real-Time Reports</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-check-circle-fill"></i>
                                        <span>Scalable Platform</span>
                                    </div>

                                </div> */}

                            </div>

                            <div className="erp-intro-image">

                                <img
                                    src="/assets/img/service/erp.jpg"
                                    alt="ERP Solutions"
                                />

                                <div className="erp-floating-card">

                                    <i className="bi bi-grid-1x2-fill"></i>

                                    <div>
                                        <strong>Complete ERP</strong>
                                        <span>One Platform. One Solution.</span>
                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =================================================
                            FEATURES
                        ================================================= */}

                        <section className="erp-feature-section">

                            <div className="erp-section-title">

                                <span>WHY ERP</span>

                                <h2>
                                    One Platform.
                                    <br />
                                    Complete Business Control.
                                </h2>

                                <p>
                                    Bring your departments, data and
                                    business processes together with a
                                    centralized ERP platform.
                                </p>

                            </div>


                            <div className="erp-feature-grid">

                                {features.map((feature, index) => (

                                    <div
                                        className="erp-feature-card"
                                        key={index}
                                    >

                                        <div className="erp-feature-icon">
                                            <i className={feature.icon}></i>
                                        </div>

                                        <span className="erp-feature-number">
                                            {feature.number}
                                        </span>

                                        <h3>
                                            {feature.title}
                                        </h3>

                                        <p>
                                            {feature.description}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* =================================================
                            ERP MODULES
                        ================================================= */}

                        <section className="erp-modules-section">

                            <div className="erp-section-title">

                                <span>ERP MODULES</span>

                                <h2>
                                    Everything Your Business Needs
                                </h2>

                                <p>
                                    Our ERP platform connects essential
                                    business functions into one integrated
                                    system.
                                </p>

                            </div>


                            <div className="erp-module-grid">

                                {erpModules.map((module, index) => (

                                    <div
                                        className="erp-module-card"
                                        key={index}
                                    >

                                        <div className="erp-module-top">

                                            <div className="erp-module-icon">
                                                <i className={module.icon}></i>
                                            </div>

                                            <span>
                                                {module.number}
                                            </span>

                                        </div>

                                        <h3>
                                            {module.title}
                                        </h3>

                                        <p>
                                            {module.description}
                                        </p>

                                        {/* <div className="erp-module-arrow">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </div> */}

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* =================================================
                            ERP BENEFITS
                        ================================================= */}

                        <section className="erp-benefits-section">

                            <div className="erp-benefits-content">

                                <span>
                                    BUSINESS BENEFITS
                                </span>

                                <h2>
                                    Transform The Way
                                    <br />
                                    Your Business Works.
                                </h2>

                                <p>
                                    An integrated ERP system reduces
                                    complexity, improves productivity and
                                    gives your team better visibility into
                                    daily business operations.
                                </p>

                            </div>


                            <div className="erp-benefits-list">

                                {benefits.map((benefit, index) => (

                                    <div
                                        className="erp-benefit-item"
                                        key={index}
                                    >

                                        <span className="erp-check">
                                            <i className="bi bi-check-lg"></i>
                                        </span>

                                        <span>
                                            {benefit}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* =================================================
                            IMPLEMENTATION
                        ================================================= */}

                        <section className="erp-process-section">

                            <div className="erp-section-title">

                                <span>OUR PROCESS</span>

                                <h2>
                                    From Planning To Implementation
                                </h2>

                                <p>
                                    We follow a structured approach to
                                    deliver ERP solutions that fit your
                                    business workflow.
                                </p>

                            </div>


                            <div className="erp-process-grid">

                                {process.map((item, index) => (

                                    <div
                                        className="erp-process-card"
                                        key={index}
                                    >

                                        <span className="erp-process-number">
                                            {item.number}
                                        </span>

                                        <div className="erp-process-line"></div>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* =================================================
                            CTA
                        ================================================= */}

                        <section className="erp-cta-section">

                            <div>

                                <span>
                                    READY TO GO DIGITAL?
                                </span>

                                <h2>
                                    Bring Your Business
                                    <br />
                                    Together With ERP.
                                </h2>

                                <p>
                                    Connect your teams, processes and
                                    business data with one powerful ERP
                                    platform.
                                </p>

                            </div>

                            <Link
                                to="/contact-us"
                                className="erp-cta-button"
                            >
                                Talk To Our Experts
                                <i className="bi bi-arrow-right"></i>
                            </Link>

                        </section>


                        {/* =================================================
                            RELATED SERVICES
                        ================================================= */}

                        <section className="erp-related-section">

                            <div className="erp-section-title">

                                <span>EXPLORE MORE</span>

                                <h2>
                                    Related Services
                                </h2>

                            </div>


                            <div className="erp-related-grid">

                                <div className="erp-related-card">

                                    <div className="erp-related-icon">
                                        <i className="bi bi-code-slash"></i>
                                    </div>

                                    <div>

                                        <h3>
                                            <Link to="/Software-Development">
                                                Software Development
                                            </Link>
                                        </h3>

                                        <p>
                                            Custom software solutions
                                            designed around your business.
                                        </p>

                                        <Link
                                            to="/Software-Development"
                                            className="erp-related-link"
                                        >
                                            Explore Service
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>

                                    </div>

                                </div>


                                <div className="erp-related-card">

                                    <div className="erp-related-icon">
                                        <i className="bi bi-diagram-3"></i>
                                    </div>

                                    <div>

                                        <h3>
                                            <Link to="/IT-Networking">
                                                IT Networking
                                            </Link>
                                        </h3>

                                        <p>
                                            Secure networking infrastructure
                                            for connected businesses.
                                        </p>

                                        <Link
                                            to="/IT-Networking"
                                            className="erp-related-link"
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

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ServiceDetailsCenterERP;