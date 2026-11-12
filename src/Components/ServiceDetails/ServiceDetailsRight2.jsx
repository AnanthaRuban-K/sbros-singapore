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
                "Manage employees, attendance, leave and payroll easily with our HRM software in Singapore.",
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
        {
            number: "06",
            icon: "bi bi-person-plus",
            title: "Recruitment",
            description:
                "Manage job openings, candidate applications, interviews, selection and onboarding with a streamlined hiring process.",
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
                "Manage multiple business operations through one centralized ERP platform. Connect departments and simplify daily business activities.",
        },
        {
            number: "02",
            icon: "bi bi-bar-chart-line",
            title: "Real-Time Insights",
            description:
                "Access dashboards, reports and real-time operational information to understand business performance and make informed decisions.",
        },
        {
            number: "03",
            icon: "bi bi-shield-check",
            title: "Secure & Scalable",
            description:
                "Use a flexible ERP platform with secure architecture and modules that can support your changing business requirements.",
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
                "We analyse your business needs and ERP requirements in Singapore. ",
        },
        {
            number: "02",
            title: "ERP Planning",
            description:
                "We plan ERP modules and workflows to meet your business needs in Singapore.",
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
                "We test and optimize ERP software for smooth business operations in Singapore.",
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
                                      <span> ERP Software</span> in Singapore for Complete 

                                  Business Management
                                </h1>

                                <p>
                                    Simplify your business operations with SBros Tech ERP solutions. Manage HR, CRM, Finance, Procurement, Sales and Recruitment in one integrated platform to improve efficiency, streamline workflows and support business growth.
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
                                     One Platform
                                    <br />
                                   One Complete Business Solution.
                                </h2>

                                <p>
                                    SBros Tech provides integrated ERP software to help businesses manage multiple departments through one centralized system. Connect business data, simplify processes and improve coordination between teams with a complete ERP solution.
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
                                    ERP Modules For Complete Business Management
                                </h2>

                                <p>
                                   SBros Tech ERP software brings essential business functions together through integrated modules. Choose the modules that support your business operations and manage important activities through one platform.
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
                                    BENEFITS OF
                                </span>

                                <h2>
                                    ERP Software for Businesses 
                                    <br />
                                   
                                </h2>

                                <p>
                                    Improve productivity and simplify daily operations with SBros Tech ERP software in Singapore for better business management. 

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
                                            <Link to="/software-development">
                                                Software Development
                                            </Link>
                                        </h3>

                                        <p>
                                            Custom software solutions
                                            designed around your business.
                                        </p>

                                        <Link
                                            to="/software-development"
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
                                            <Link to="/it-networking">
                                                IT Networking
                                            </Link>
                                        </h3>

                                        <p>
                                            Secure networking infrastructure
                                            for connected businesses.
                                        </p>

                                        <Link
                                            to="/it-networking"
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
 <section className="erp-cta-section">

                            <div>

                                <span>
                                    READY TO GO DIGITAL?
                                </span>

                                <h2>
                                    Ready to Improve Your Business with ERP Software?
                                    <br />
                                    
                                </h2>

                                <p>
                                    Bring your teams, processes and business data together with SBros Tech ERP solutions. Simplify business operations, improve productivity and manage multiple departments through one integrated ERP platform.
Looking for the right ERP solution for your business? Talk to our team about your requirements.
 data with one powerful ERP
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

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ServiceDetailsCenterERP;