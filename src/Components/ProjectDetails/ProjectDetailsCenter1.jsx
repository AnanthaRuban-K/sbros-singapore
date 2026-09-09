import { Link } from "react-router-dom";

const ProjectDetailsCenter1 = () => {
  // ============================================================
  // ERP MODULES
  // ============================================================

  const modules = [
    {
      icon: "bi bi-people",
      number: "01",
      title: "Human Resource Management",
      shortTitle: "HRM",
      text: "Manage employees, workforce information and HR activities from one centralized platform.",
      features: [
        "Employee Profiles",
        "Employee Documents",
        "Departments & Roles",
        "Salary Structures",
      ],
      video: "/assets/videos/hrm.mp4",
    },

    {
      icon: "bi bi-person-lines-fill",
      number: "02",
      title: "CRM",
      shortTitle: "CRM",
      text: "Manage leads, customer information, follow-ups and customer relationships efficiently.",
      features: [
        "Lead Management",
        "Lead Assignment",
        "Customer Management",
        "Follow-ups",
      ],
      video: "/assets/videos/crm.mp4",
    },

    {
      icon: "bi bi-cart-check",
      number: "03",
      title: "Procurement",
      shortTitle: "PROCUREMENT",
      text: "Manage purchasing activities from purchase requests to supplier quotations and purchase orders.",
      features: [
        "Material Master",
        "Purchase Requests",
        "Supplier Quotations",
        "Purchase Orders",
      ],
      video: "/assets/videos/procurement.mp4",
    },

    {
      icon: "bi bi-wallet2",
      number: "04",
      title: "Finance",
      shortTitle: "FINANCE",
      text: "Manage financial transactions, expenses, invoices, payments and business accounts from one system.",
      features: [
        "Accounts Management",
        "Income & Expense Tracking",
        "Invoice & Payment Management",
        "Financial Reports",
      ],
      video: "/assets/videos/finance.mp4",
    },

    {
      icon: "bi bi-person-plus",
      number: "05",
      title: "Recruitment",
      shortTitle: "RECRUITMENT",
      text: "Simplify the recruitment process by managing job openings, candidates and hiring activities.",
      features: [
        "Job Openings",
        "Candidate Management",
        "Interview Scheduling",
        "Recruitment Tracking",
      ],
      video: "/assets/videos/recruitment.mp4",
    },

    {
      icon: "bi bi-bag-check",
      number: "06",
      title: "Product Sales",
      shortTitle: "PRODUCT SALES",
      text: "Manage product sales, customers, orders and sales transactions through one connected platform.",
      features: [
        "Product Management",
        "Sales Orders",
        "Customer Management",
        "Sales Reports",
      ],
      video: "/assets/videos/product-sales.mp4",
    },

    {
      icon: "bi bi-briefcase",
      number: "07",
      title: "Services Sales",
      shortTitle: "SERVICES SALES",
      text: "Manage service-based sales, customer requirements, quotations and service orders efficiently.",
      features: [
        "Service Management",
        "Service Quotations",
        "Service Orders",
        "Sales Tracking",
      ],
      video: "/assets/videos/services-sales.mp4",
    },
  ];

  return (
    <div className="service-details-area-all sp erp-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 m-auto">

            <div className="service-details-post">

              {/* =====================================================
                  CORE ERP MODULES
              ===================================================== */}

              <section className="erp-business">

                {/* SECTION HEADING */}

                <div className="erp-section-heading">

                  <span>CORE ERP MODULES</span>

                  <h2>
                    Complete Business Management
                  </h2>

                  <p>
                    Powerful modules designed to simplify
                    everyday business operations.
                  </p>

                </div>


                {/* =====================================================
                    MODULE GRID
                ===================================================== */}

                <div className="erp-module-grid">

                  {modules.map((module, index) => (

                    <div
                      className="erp-module-card erp-creative-card"
                      key={index}
                    >

                      {/* =================================================
                          CARD TOP
                      ================================================= */}

                      <div className="erp-card-header">

                        <div className="erp-card-icon">
                          <i className={module.icon}></i>
                        </div>

                        <span>
                          {module.number}
                        </span>

                      </div>


                      {/* =================================================
                          VIDEO
                      ================================================= */}

                      <div className="erp-card-video">

                        <video
                          src={module.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />

                        {/* VIDEO OVERLAY */}

                        <div className="erp-video-overlay">

                          <div className="erp-video-play">
                            <i className="bi bi-play-fill"></i>
                          </div>

                          <span>
                            {module.shortTitle}
                          </span>

                        </div>

                      </div>


                      {/* =================================================
                          CARD CONTENT
                      ================================================= */}

                      <div className="erp-card-content">

                        <h3>
                          {module.title}
                        </h3>


                        <p className="erp-card-text">
                          {module.text}
                        </p>


                        {/* FEATURES */}

                        <ul>

                          {module.features.map(
                            (feature, featureIndex) => (

                              <li key={featureIndex}>

                                <i className="bi bi-check2-circle"></i>

                                <span>
                                  {feature}
                                </span>

                              </li>

                            )
                          )}

                        </ul>


                        {/* =================================================
                            PRICING BUTTON
                        ================================================= */}

                        <div className="erp-card-action">

                          <Link
                            to="/pricing"
                            className="erp-pricing-btn"
                          >

                            <span>
                              View Pricing
                            </span>

                            <i className="bi bi-arrow-up-right"></i>

                          </Link>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </section>


              {/* =====================================================
                  GROWTH SECTION
              ===================================================== */}

              <section className="erp-growth">

                <div className="erp-growth-content">

                  <div className="erp-growth-text">

                    <span>
                      BUILT FOR GROWING BUSINESSES
                    </span>

                    <h2>
                      A Platform That Grows With You
                    </h2>

                    <p>
                      Start with the modules your business needs
                      today and expand your platform as your
                      operational requirements grow.
                    </p>

                  </div>


                  <div className="erp-growth-list">

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      HRM
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      CRM
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Procurement
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Finance
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Recruitment
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Product Sales
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Services Sales
                    </div>

                  </div>

                </div>

              </section>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCenter1;