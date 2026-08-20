import { useState } from "react";
import { Link } from "react-router-dom";
import BreadCumb from "../Common/BreadCumb";

const ServiceERP = () => {
    // -1 means all FAQ items are closed initially
    const [openItemIndex, setOpenItemIndex] = useState(-1);

    const handleItemClick = (index) => {
        setOpenItemIndex(
            openItemIndex === index ? -1 : index
        );
    };

    // ================= FAQ DATA =================
    const faqData = [
        {
            title: "What does SBROS Tech (S) Pte Ltd do?",
            desc:
                "SBROS Tech (S) Pte Ltd provides technology solutions that help businesses improve their operations, productivity, and digital processes through reliable and scalable software solutions."
        },
        {
            title: "How can SBROS Tech help my business?",
            desc:
                "We help businesses streamline their operations through software development, ERP solutions, process automation, system integration, and technology consulting tailored to their specific business requirements."
        },
        {
            title: "What industries does SBROS Tech serve?",
            desc:
                "We work across a wide range of industries including retail, healthcare, finance, education, logistics, and manufacturing, adapting our solutions to fit each industry's specific needs and compliance requirements."
        },
        {
            title: "How experienced is the team at SBROS Tech?",
            desc:
                "Our team brings experience across software development, ERP implementation, system integration, process automation, and business technology solutions. We focus on delivering practical and scalable solutions based on each client's requirements."
        }
    ];

    return (
        <div className="erp-service-page">

            {/* ================= BREADCRUMB ================= */}
            {/* <BreadCumb Title="ERP Solutions" /> */}


            {/* ================= SERVICE AREA ================= */}
            <div className="service-details-area-all sp">

                <div className="container">

                    <div className="erp-content">


                        {/* =====================================================
                            INTRO
                        ===================================================== */}

                        <section className="erp-intro">

                            <div className="erp-main-image">

                                <img
                                    src="/assets/img/service/websites.jpg"
                                    alt="ERP Solutions"
                                />

                            </div>


                            <div className="erp-intro-content">

                                <span className="erp-label">
                                    ERP SOLUTIONS
                                </span>

                                <h1>
                                    Smart ERP Solutions For
                                    <span> Better Business</span>
                                </h1>

                                <p>
                                    We implement smart ERP systems that unify
                                    your business operations, giving you
                                    real-time visibility and control across
                                    departments.
                                </p>

                                <p>
                                    Our ERP solutions help you streamline
                                    workflows, reduce manual errors, improve
                                    productivity, and make faster,
                                    data-driven decisions.
                                </p>

                            </div>

                        </section>


                        {/* =====================================================
                            HOW WE WORK
                        ===================================================== */}

                        <section className="erp-how-work">

                            <div className="erp-section-heading">

                                <span className="erp-label">
                                    OUR PROCESS
                                </span>

                                <h2>
                                    How We Work
                                </h2>

                                <p>
                                    A simple and structured process to deliver
                                    reliable ERP solutions for your business.
                                </p>

                            </div>


                            <div className="erp-work-flow">

                                {/* DESIGN */}
                                <div className="erp-work-card">

                                    <div className="erp-work-number">
                                        01
                                    </div>

                                    <div className="erp-work-icon">
                                        <i className="bi bi-pencil-square"></i>
                                    </div>

                                    <h3>Design</h3>

                                    <p>
                                        We understand your business
                                        requirements and design an ERP
                                        workflow that fits your processes.
                                    </p>

                                </div>


                                {/* DEVELOP */}
                                <div className="erp-work-card">

                                    <div className="erp-work-number">
                                        02
                                    </div>

                                    <div className="erp-work-icon">
                                        <i className="bi bi-code-slash"></i>
                                    </div>

                                    <h3>Develop</h3>

                                    <p>
                                        We configure and customize ERP
                                        modules to create efficient and
                                        scalable business solutions.
                                    </p>

                                </div>


                                {/* DEPLOY */}
                                <div className="erp-work-card">

                                    <div className="erp-work-number">
                                        03
                                    </div>

                                    <div className="erp-work-icon">
                                        <i className="bi bi-cloud-arrow-up-fill"></i>
                                    </div>

                                    <h3>Deploy</h3>

                                    <p>
                                        We migrate data, integrate systems
                                        and deploy your ERP solution with
                                        minimum business disruption.
                                    </p>

                                </div>


                                {/* SUPPORT */}
                                <div className="erp-work-card">

                                    <div className="erp-work-number">
                                        04
                                    </div>

                                    <div className="erp-work-icon">
                                        <i className="bi bi-headset"></i>
                                    </div>

                                    <h3>Support</h3>

                                    <p>
                                        We provide training, monitoring,
                                        maintenance and continuous support
                                        after implementation.
                                    </p>

                                </div>

                            </div>

                        </section>


                        {/* =====================================================
                            OUR APPROACH
                        ===================================================== */}

                        <section className="erp-approach">

                            <div className="erp-section-heading">

                                <span className="erp-label">
                                    OUR APPROACH
                                </span>

                                <h2>
                                    Built Around Your Business
                                </h2>

                                <p>
                                    We start by mapping your existing
                                    workflows, then configure and deploy
                                    an ERP system tailored to your processes
                                    — with training and ongoing support to
                                    ensure smooth adoption across your team.
                                </p>

                            </div>


                            <div className="erp-approach-grid">

                                {/* SYSTEM IMPLEMENTATION */}
                                <div className="erp-approach-card">

                                    <div className="erp-approach-icon">
                                        <i className="bi bi-gear-wide-connected"></i>
                                    </div>

                                    <div>

                                        <h3>
                                            System Implementation
                                        </h3>

                                        <p>
                                            We handle end-to-end ERP
                                            implementation — from requirement
                                            analysis and module selection to
                                            configuration, data migration,
                                            and go-live support tailored to
                                            your business.
                                        </p>

                                    </div>

                                </div>


                                {/* PROCESS AUTOMATION */}
                                <div className="erp-approach-card">

                                    <div className="erp-approach-icon">
                                        <i className="bi bi-arrow-repeat"></i>
                                    </div>

                                    <div>

                                        <h3>
                                            Process Automation
                                        </h3>

                                        <p>
                                            We automate repetitive business
                                            processes — inventory tracking,
                                            order management, and financial
                                            workflows — so your team can
                                            focus on higher-value work.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =====================================================
                            OUR EXPERTISE
                        ===================================================== */}

                        <section className="erp-expertise">

                            <div className="erp-section-heading">

                                <span className="erp-label">
                                    OUR EXPERTISE
                                </span>

                                <h2>
                                    Complete ERP Expertise
                                </h2>

                                <p>
                                    Our team helps businesses manage
                                    operations efficiently through
                                    integrated ERP solutions and continuous
                                    support.
                                </p>

                            </div>


                            <div className="erp-expertise-list">

                                {/* IMPLEMENTATION */}
                                <div className="erp-expertise-item">

                                     <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>

                                        <strong>
                                            Implementation
                                        </strong>

                                        <p>
                                            ERP setup, configuration, and
                                            module customization
                                        </p>

                                    </div>

                                </div>


                                {/* INVENTORY */}
                                <div className="erp-expertise-item">
 <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>

                                        <strong>
                                            Inventory
                                        </strong>

                                        <p>
                                            Stock control, supply chain,
                                            and warehouse management
                                        </p>

                                    </div>

                                </div>


                                {/* FINANCE */}
                                <div className="erp-expertise-item">

                                   <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>
                                    <div>

                                        <strong>
                                            Finance
                                        </strong>

                                        <p>
                                            Financial reporting, accounting,
                                            and budgeting modules
                                        </p>

                                    </div>

                                </div>


                                {/* INTEGRATION */}
                                <div className="erp-expertise-item">

                                     <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>

                                        <strong>
                                            Integration
                                        </strong>

                                        <p>
                                            Connecting ERP with existing
                                            tools and third-party systems
                                        </p>

                                    </div>

                                </div>


                                {/* SUPPORT */}
                                <div className="erp-expertise-item">

                                     <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>

                                        <strong>
                                            Support
                                        </strong>

                                        <p>
                                            User training, system maintenance,
                                            and ongoing upgrades
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =====================================================
                            RELATED SERVICES
                        ===================================================== */}

                        <section className="erp-related-services">

                            <div className="erp-section-heading">

                                <span className="erp-label">
                                    EXPLORE MORE
                                </span>

                                <h2>
                                    Related Services
                                </h2>

                            </div>


                            <div className="erp-related-grid">

                                {/* SOFTWARE DEVELOPMENT */}
                                <div className="erp-related-card">

                                    <div className="erp-related-icon">

                                        <img
                                            src="/assets/img/icons/service-page-icon1.png"
                                            alt="Software Development"
                                        />

                                    </div>


                                    <div className="erp-related-content">

                                        <h3>
                                            <Link to="/service/service-details">
                                                Software Development
                                            </Link>
                                        </h3>

                                        <p>
                                            Custom software solutions
                                            tailored to your business needs,
                                            from web apps to enterprise
                                            systems.
                                        </p>

                                        <Link
                                            to="/service/service-details"
                                            className="erp-related-link"
                                        >
                                            Explore Service
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>

                                    </div>

                                </div>


                                {/* TRADING */}
                                <div className="erp-related-card">

                                    <div className="erp-related-icon">

                                        <img
                                            src="/assets/img/icons/service-page-icon2.png"
                                            alt="Trading"
                                        />

                                    </div>


                                    <div className="erp-related-content">

                                        <h3>
                                            <Link to="/service/service-trading">
                                                Trading
                                            </Link>
                                        </h3>

                                        <p>
                                            Smart trading solutions that
                                            simplify operations and support
                                            better business decisions.
                                        </p>

                                        <Link
                                            to="/service/service-trading"
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

                        <section className="service-common-faq">

                            {/* FAQ TITLE */}

                            <div className="faq-title-area">

                                <h2>
                                    Frequently Asked Question
                                </h2>

                            </div>


                            {/* FAQ LIST */}

                            <div className="service-faq-list">

                                {faqData.map((item, index) => (

                                    <div
                                        key={index}
                                        className={`service-faq-item ${
                                            openItemIndex === index
                                                ? "active"
                                                : ""
                                        }`}
                                    >

                                        <button
                                            type="button"
                                            className="service-faq-question"
                                            onClick={() =>
                                                handleItemClick(index)
                                            }
                                        >

                                            <span>
                                                {item.title}
                                            </span>

                                            <span className="service-faq-icon">

                                                <i
                                                    className={`bi ${
                                                        openItemIndex === index
                                                            ? "bi-chevron-up"
                                                            : "bi-chevron-up"
                                                    }`}
                                                ></i>

                                            </span>

                                        </button>


                                        {/* ANSWER */}

                                        {openItemIndex === index && (

                                            <div className="service-faq-answer">

                                                <p>
                                                    {item.desc}
                                                </p>

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

export default ServiceERP;