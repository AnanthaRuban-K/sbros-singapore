import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/home3/faq1.json";

const ServiceDetailsCenter3 = () => {
    const [openItemIndex, setOpenItemIndex] = useState(0);

    const handleItemClick = (index) => {
        setOpenItemIndex(
            openItemIndex === index ? -1 : index
        );
    };

    /* =====================================================
       PROJECTS
    ===================================================== */

    const projects = [
        {
            number: "01",
            title: "First Choice Hub",
            category: "Business & IT Solutions",
            description:
                "A professional business website presenting software development, ERP systems, digital marketing, networking, security and IT consulting services.",
            image: "/assets/img/service/image.png",
            url: "https://firstchoicehub.com.sg/",
            tag: "Corporate Website",
        },

        {
            number: "02",
            title: "ANS Fresh & Frozen",
            category: "E-Commerce Website",
            description:
                "A fresh food and seafood e-commerce platform designed for product browsing, online shopping and convenient customer ordering.",
            image: "/assets/img/service/image2.png",
            url: "https://ansfreshmeat.com.sg/",
            tag: "E-Commerce",
        },

        {
            number: "03",
            title: "SASAN Construction",
            category: "Construction Website",
            description:
                "A modern corporate website showcasing construction, earthwork, demolition, commercial projects and engineering services.",
            image: "/assets/img/service/image3.png",
            url: "https://www.sasansg.com/",
            tag: "Corporate Website",
        },

        {
            number: "04",
            title: "Gold Sea Group",
            category: "Engineering Website",
            description:
                "A professional group website presenting engineering, maritime, mechanical, project management and quality assurance services.",
            image: "/assets/img/service/image4.png",
            url: "https://goldseagroups.com/",
            tag: "Business Website",
        },
    ];

    return (
        <div className="website-service-page">

            {/* =====================================================
                MAIN SERVICE AREA
            ===================================================== */}

            <div className="service-details-area-all sp">

                <div className="container">

                    <div className="website-service-content">

                        {/* =================================================
                            HERO / INTRO
                        ================================================= */}

                        <section className="website-intro-section">

                            <div className="website-intro-content">

                                <span className="website-label">
                                    WEB DEVELOPMENT
                                </span>

                                <h1>
                                    Websites That Turn
                                    <span> Visitors Into Customers</span>
                                </h1>

                                <p>
                                    A website is more than a digital brochure —
                                    it is your strongest sales tool, working
                                    around the clock. We design and build fast,
                                    responsive and SEO-ready websites that don't
                                    just look good, but convert visitors into
                                    leads and customers.
                                </p>

                                <div className="website-intro-points">

                                    <div>
                                        <i className="bi bi-check-circle-fill"></i>
                                        <span>Responsive Design</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-check-circle-fill"></i>
                                        <span>SEO Ready</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-check-circle-fill"></i>
                                        <span>Fast Performance</span>
                                    </div>

                                </div>

                            </div>

                            <div className="website-intro-image">

                                <img
                                    src="/assets/img/service/website.jpg"
                                    alt="Website Development"
                                />

                                <div className="intro-floating-card">

                                    <i className="bi bi-globe2"></i>

                                    <div>
                                        <strong>Digital Presence</strong>
                                        <span>Built for Growth</span>
                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =================================================
                            FEATURES
                        ================================================= */}

                        <section className="website-feature-section">

                            <div className="website-section-title">

                                <span>OUR APPROACH</span>

                                <h2>
                                    Built For Performance.
                                    <br />
                                    Designed For Growth.
                                </h2>

                                <p>
                                    Every website we create combines modern
                                    design, performance and business-focused
                                    functionality.
                                </p>

                            </div>


                            <div className="website-feature-grid">

                                <div className="website-feature-card">

                                    <div className="feature-icon">
                                        <i className="bi bi-phone"></i>
                                    </div>

                                    <span className="feature-number">
                                        01
                                    </span>

                                    <h3>
                                        Responsive & Fast
                                    </h3>

                                    <p>
                                        Every website adapts seamlessly across
                                        desktop, tablet and mobile devices with
                                        performance optimized for fast loading.
                                    </p>

                                </div>


                                <div className="website-feature-card">

                                    <div className="feature-icon">
                                        <i className="bi bi-bullseye"></i>
                                    </div>

                                    <span className="feature-number">
                                        02
                                    </span>

                                    <h3>
                                        Built To Convert
                                    </h3>

                                    <p>
                                        We design around the customer journey
                                        with clear calls-to-action and simple
                                        navigation.
                                    </p>

                                </div>


                                <div className="website-feature-card">

                                    <div className="feature-icon">
                                        <i className="bi bi-search"></i>
                                    </div>

                                    <span className="feature-number">
                                        03
                                    </span>

                                    <h3>
                                        SEO Ready
                                    </h3>

                                    <p>
                                        Clean structure and search-friendly
                                        development help your website become
                                        easier to discover online.
                                    </p>

                                </div>

                            </div>

                        </section>


                        {/* =================================================
                            WEBSITE SERVICES
                        ================================================= */}

                        <section className="website-services-section">

                            <div className="website-section-title">

                                <span>WHAT WE BUILD</span>

                                <h2>
                                    Complete Website Solutions
                                </h2>

                                <p>
                                    From business websites to e-commerce
                                    platforms, we build digital experiences
                                    around your business goals.
                                </p>

                            </div>


                            <div className="website-services-list">

                                <div className="website-service-item">
                                    <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>
                                        <strong>Corporate Websites</strong>
                                        <p>
                                            Professional websites that build
                                            trust and strengthen your brand.
                                        </p>
                                    </div>
                                </div>


                                <div className="website-service-item">
                                     <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>
                                        <strong>Business Websites</strong>
                                        <p>
                                            Modern websites designed to present
                                            your products and services clearly.
                                        </p>
                                    </div>
                                </div>


                                <div className="website-service-item">
                                     <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>
                                        <strong>E-Commerce</strong>
                                        <p>
                                            User-friendly online stores built
                                            for products, orders and growth.
                                        </p>
                                    </div>
                                </div>


                                <div className="website-service-item">
                                     <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>
                                    <div>
                                        <strong>CMS Websites</strong>
                                        <p>
                                            Easy-to-manage content systems for
                                            growing businesses.
                                        </p>
                                    </div>
                                </div>


                                <div className="website-service-item">
                                     <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>
                                        <strong>Landing Pages</strong>
                                        <p>
                                            Conversion-focused pages designed
                                            for campaigns and lead generation.
                                        </p>
                                    </div>
                                </div>


                                <div className="website-service-item">
                                     <span className="erp-check">
    <i className="bi bi-star-fill"></i>
</span>

                                    <div>
                                        <strong>Website Maintenance</strong>
                                        <p>
                                            Continuous updates, improvements
                                            and technical support.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </section>


                        {/* =================================================
                            PROJECT SHOWCASE
                        ================================================= */}

                        <section className="website-project-section">

                            <div className="project-heading">

                                <div>

                                    <span>
                                        OUR WORK
                                    </span>

                                    <h2>
                                        Websites We've Built
                                    </h2>

                                </div>

                               

                            </div>


                            <div className="project-showcase-grid">

                                {projects.map((project, index) => (

                                    <div
                                        className="website-project-card"
                                        key={index}
                                    >

                                        {/* IMAGE */}

                                        <div className="project-image">

                                            <img
                                                src={project.image}
                                                alt={project.title}
                                            />

                                            <div className="project-overlay">

                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-view-btn"
                                                >
                                                    <i className="bi bi-arrow-up-right"></i>
                                                </a>

                                            </div>

                                            <span className="project-tag">
                                                {project.tag}
                                            </span>

                                        </div>


                                        {/* CONTENT */}

                                        <div className="project-content">

                                            <div className="project-number">
                                                {project.number}
                                            </div>

                                            <span className="project-category">
                                                {project.category}
                                            </span>

                                            <h3>
                                                {project.title}
                                            </h3>

                                            <p>
                                                {project.description}
                                            </p>

                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                Visit Website
                                                <i className="bi bi-arrow-up-right"></i>
                                            </a>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* =================================================
                            PROJECT STATS
                        ================================================= */}

                        <section className="project-stats-section">

                            <div className="project-stat">

                                <strong>25+</strong>

                                <span>
                                    Featured Websites
                                </span>

                            </div>


                            <div className="project-stat">

                                <strong>100%</strong>

                                <span>
                                    Responsive Design
                                </span>

                            </div>


                            <div className="project-stat">

                                <strong>SEO</strong>

                                <span>
                                    Ready Structure
                                </span>

                            </div>


                            <div className="project-stat">

                                <strong>24/7</strong>

                                <span>
                                    Digital Presence
                                </span>

                            </div>

                        </section>


                        {/* =================================================
                            RELATED SERVICES
                        ================================================= */}

                        <section className="related-services-section">

                            <div className="website-section-title">

                                <span>EXPLORE MORE</span>

                                <h2>
                                    Related Services
                                </h2>

                            </div>


                            <div className="related-service-grid">

                                <div className="related-service-card">

                                    <div className="related-service-icon">
                                        <img
                                            src="/assets/img/icons/service-page-icon1.png"
                                            alt="Software Development"
                                        />
                                    </div>

                                    <div>

                                        <h3>
                                            <Link to="/Software-Development">
                                                Software Development
                                            </Link>
                                        </h3>

                                        <p>
                                            Custom software solutions tailored
                                            to your business needs.
                                        </p>

                                        <Link
                                            to="/Software-Development"
                                            className="related-service-link"
                                        >
                                            Explore Service
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>

                                    </div>

                                </div>


                                <div className="related-service-card">

                                    <div className="related-service-icon">
                                        <img
                                            src="/assets/img/icons/service-page-icon2.png"
                                            alt="IT Networking"
                                        />
                                    </div>

                                    <div>

                                        <h3>
                                            <Link to="/IT-Networking">
                                                IT Networking
                                            </Link>
                                        </h3>

                                        <p>
                                            Secure and reliable networking
                                            infrastructure for modern business.
                                        </p>

                                        <Link
                                            to="/IT-Networking"
                                            className="related-service-link"
                                        >
                                            Explore Service
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =================================================
                            FAQ
                        ================================================= */}

                        <section className="website-faq-section">

                            <div className="website-section-title">

                                <span>
                                    FAQ
                                </span>

                                <h2>
                                    Frequently Asked Questions
                                </h2>

                                <p>
                                    Find answers to common questions about
                                    our website development services.
                                </p>

                            </div>


                            <div className="website-faq-list">

                                {data.slice(0, 4).map((item, index) => (

                                    <div
                                        key={index}
                                        className={`website-faq-item ${
                                            openItemIndex === index
                                                ? "active"
                                                : ""
                                        }`}
                                    >

                                        <button
                                            type="button"
                                            className="website-faq-question"
                                            onClick={() =>
                                                handleItemClick(index)
                                            }
                                        >

                                            <span>
                                                {item.title}
                                            </span>

                                            <i
                                                className={`bi ${
                                                    openItemIndex === index
                                                        ? "bi-dash"
                                                        : "bi-plus"
                                                }`}
                                            ></i>

                                        </button>


                                        {openItemIndex === index && (

                                            <div className="website-faq-answer">
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

export default ServiceDetailsCenter3;