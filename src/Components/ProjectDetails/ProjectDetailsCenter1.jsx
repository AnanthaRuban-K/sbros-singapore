
import { Link } from "react-router-dom";

const ProjectDetailsCenter1 = () => {
   const modules = [
  // 01 - HRM
  {
    number: "01",
    icon: "bi bi-people-fill",
    title: "Human Resource Management",
    shortTitle: "HRM",
    text: "Build a smarter workforce with centralized employee management and streamlined HR operations.",
    features: [
      "Employee Profiles",
      "Employee Documents",
      "Departments & Roles",
      "Salary Structures",
    ],
    video: "/assets/videos/hrm.mp4",
    tag: "PEOPLE",
  },

  // 02 - CRM
  {
    number: "02",
    icon: "bi bi-person-lines-fill",
    title: "Customer Relationship Management",
    shortTitle: "CRM",
    text: "Turn every lead into an opportunity with powerful customer tracking and follow-up management.",
    features: [
      "Lead Management",
      "Lead Assignment",
      "Customer Management",
      "Follow-ups",
    ],
    video: "/assets/videos/crm.mp4",
    tag: "CUSTOMERS",
  },

  // 03 - Finance
  {
    number: "03",
    icon: "bi bi-wallet-fill",
    title: "Finance",
    shortTitle: "FINANCE",
    text: "Keep your business financially organized with powerful transaction, invoice and reporting tools.",
    features: [
      "Accounts Management",
      "Income & Expense Tracking",
      "Invoice & Payments",
      "Financial Reports",
    ],
    video: "/assets/videos/finance.mp4",
    tag: "FINANCE",
  },

  // 04 - Procurement
  {
    number: "04",
    icon: "bi bi-cart-check-fill",
    title: "Procurement",
    shortTitle: "PROCUREMENT",
    text: "Simplify purchasing from material requests to supplier quotations and purchase orders.",
    features: [
      "Material Master",
      "Purchase Requests",
      "Supplier Quotations",
      "Purchase Orders",
    ],
    video: "/assets/videos/procurement.mp4",
    tag: "PURCHASING",
  },

  // 05 - Product Sales
  {
    number: "05",
    icon: "bi bi-bag-check-fill",
    title: "Product Sales",
    shortTitle: "PRODUCT SALES",
    text: "Manage your complete product sales journey from products and customers to orders and reports.",
    features: [
      "Product Management",
      "Sales Orders",
      "Customer Management",
      "Sales Reports",
    ],
    video: "/assets/videos/product-sales.mp4",
    tag: "SALES",
  },

  // 06 - Service Sales
  {
    number: "06",
    icon: "bi bi-briefcase-fill",
    title: "Services Sales",
    shortTitle: "SERVICES SALES",
    text: "Manage service-based businesses with streamlined quotations, orders and customer operations.",
    features: [
      "Service Management",
      "Service Quotations",
      "Service Orders",
      "Sales Tracking",
    ],
    video: "/assets/videos/services-sales.mp4",
    tag: "SERVICES",
  },

  // 07 - Recruitment
  {
    number: "07",
    icon: "bi bi-person-plus-fill",
    title: "Recruitment",
    shortTitle: "RECRUITMENT",
    text: "Find the right talent faster by managing jobs, candidates and interviews from one place.",
    features: [
      "Job Openings",
      "Candidate Management",
      "Interview Scheduling",
      "Recruitment Tracking",
    ],
    video: "/assets/videos/recruitment.mp4",
    tag: "TALENT",
  },
];

  return (
    <div className="erp-modern-page">

      {/* =====================================================
          MODULE SHOWCASE
      ====================================================== */}
 <section className="erp-connected">

        <div className="erp-connected-glow"></div>

        <div className="erp-connected-inner">

          <div className="erp-connected-copy">

            <span className="erp-connected-label">
              THE POWER OF ONE
            </span>

            <h2>
              Different Modules.
              <br />
              <span>
                One Connected Business.
              </span>
            </h2>

            <p>
              Stop switching between disconnected systems.
              Bring your entire business into one intelligent
              platform where every operation works together.
            </p>

            {/* <Link
              to="/pricing"
              className="erp-main-cta"
            >

              <span>
                View ERP Plans
              </span>

              <i className="bi bi-arrow-right"></i>

            </Link> */}

          </div>


          {/* ORBIT */}
          {/* =====================================================
    CREATIVE ERP NEURAL ORBIT
===================================================== */}

          <div className="erp-neural-orbit">

            {/* Animated background rings */}
            <div className="neural-ring neural-ring-outer"></div>
            <div className="neural-ring neural-ring-middle"></div>
            <div className="neural-ring neural-ring-inner"></div>

            {/* Connection lines */}
            <div className="neural-lines">
              <span className="neural-line line-1"></span>
              <span className="neural-line line-2"></span>
              <span className="neural-line line-3"></span>
              <span className="neural-line line-4"></span>
              <span className="neural-line line-5"></span>
              <span className="neural-line line-6"></span>
              <span className="neural-line line-7"></span>
            </div>

            {/* Moving light particles */}
            <span className="neural-particle particle-1"></span>
            <span className="neural-particle particle-2"></span>
            <span className="neural-particle particle-3"></span>
            <span className="neural-particle particle-4"></span>
            <span className="neural-particle particle-5"></span>

            {/* =================================================
      CENTER ERP CORE
  ================================================== */}

            <div className="erp-neural-core">

              <div className="core-wave wave-one"></div>
              <div className="core-wave wave-two"></div>

              <div className="core-content">

                <span className="core-small">
                  POWERED BY
                </span>

                <strong>ERP</strong>

                <span className="core-bottom">
                  ONE PLATFORM
                </span>

              </div>

            </div>


            {/* =================================================
      MODULE 01
  ================================================== */}

            <div className="neural-module neural-1">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-people-fill"></i>
                </div>

                <div>
                  <small>01</small>
                  <span>HRM</span>
                </div>

              </div>

            </div>


            {/* =================================================
      MODULE 02
  ================================================== */}

            <div className="neural-module neural-2">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-person-lines-fill"></i>
                </div>

                <div>
                  <small>02</small>
                  <span>CRM</span>
                </div>

              </div>

            </div>


            {/* =================================================
      MODULE 03
  ================================================== */}

            <div className="neural-module neural-3">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-cart-check-fill"></i>
                </div>

                <div>
                  <small>03</small>
                  <span>Finance</span>
                </div>

              </div>

            </div>


            {/* =================================================
      MODULE 04
  ================================================== */}

            <div className="neural-module neural-4">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-wallet-fill"></i>
                </div>

                <div>
                  <small>04</small>
                  <span>Procurement</span>
                </div>

              </div>

            </div>


            {/* =================================================
      MODULE 05
  ================================================== */}

            <div className="neural-module neural-5">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-person-plus-fill"></i>
                </div>

                <div>
                  <small>05</small>
                  <span>Product</span>
                </div>

              </div>

            </div>


            {/* =================================================
      MODULE 06
  ================================================== */}

            <div className="neural-module neural-6">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-bag-check-fill"></i>
                </div>

                <div>
                  <small>06</small>
                  <span>Services</span>
                </div>

              </div>

            </div>


            {/* =================================================
      MODULE 07
  ================================================== */}

            <div className="neural-module neural-7">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-briefcase-fill"></i>
                </div>

                <div>
                  <small>07</small>
                  <span>Recruitment</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="erp-showcase">

        <div className="erp-showcase-heading">

          <div>
            <span>EXPLORE THE ECOSYSTEM</span>

            <h2>
              One Platform.
              <br />
              <em>Every Operation.</em>
            </h2>
          </div>

          {/* <p>
            Powerful business modules that work independently
            or together as one connected ERP ecosystem.
          </p> */}

        </div>


        {/* =====================================================
            MODULE GRID
        ====================================================== */}

        <div className="erp-creative-grid">

          {modules.map((module, index) => (

            <article
              className="erp-creative-module"
              key={index}
            >

              {/* CARD HEADER */}

              <div className="erp-module-top">

                <div className="erp-module-number">
                  {module.number}
                </div>

                <div className="erp-module-icon">
                  <i className={module.icon}></i>
                </div>

                <span className="erp-module-tag">
                  {module.tag}
                </span>

              </div>


              {/* VIDEO */}

              <div className="erp-module-media">

                <video
                  src={module.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="erp-media-gradient"></div>

                <div className="erp-media-label">

                  <i className="bi bi-play-fill"></i>

                  <span>
                    {module.shortTitle}
                  </span>

                </div>

                <div className="erp-video-corner">

                  <i className="bi bi-arrow-up-right"></i>

                </div>

              </div>


              {/* CARD CONTENT */}

              <div className="erp-module-body">

                <h3>
                  {module.title}
                </h3>

                <p>
                  {module.text}
                </p>


                {/* FEATURES */}

                <div className="erp-feature-list">

                  {module.features.map(
                    (feature, featureIndex) => (

                      <div
                        className="erp-feature-pill"
                        key={featureIndex}
                      >

                        <i className="bi bi-check-lg"></i>

                        <span>
                          {feature}
                        </span>

                      </div>

                    )
                  )}

                </div>


                {/* BUTTON */}

                <Link
                  to="/pricing"
                  className="erp-explore-btn"
                >

                  <span>
                    Explore Module
                  </span>

                  <div className="erp-btn-icon">

                    <i className="bi bi-arrow-up-right"></i>

                  </div>

                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          CONNECTED ERP
      ====================================================== */}

     




    </div>
  );
};

export default ProjectDetailsCenter1;
