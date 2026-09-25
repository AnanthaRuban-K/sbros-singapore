import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectDetailsCenter1 = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // =====================================================
  // ERP MODULES
  // =====================================================
  const modules = [
    // =====================================================
    // 01 - HRM
    // =====================================================
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
      video: "/assets/img/Video1.mp4",

      // HRM Thumbnail
      thumbnail: "/assets/img/thumb/image.png",

      tag: "PEOPLE",
    },

    // =====================================================
    // 02 - CRM
    // =====================================================
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
      video: "/assets/img/Video2.mp4",

      // CRM Thumbnail
      thumbnail: "/assets/img/thumb/crm.png",

      tag: "CUSTOMERS",
    },

    // =====================================================
    // 03 - FINANCE
    // =====================================================
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
      video: "/assets/img/Video3.mp4",

      // Finance Thumbnail
      thumbnail: "/assets/img/thumb/finance.png",

      tag: "FINANCE",
    },

    // =====================================================
    // 04 - PROCUREMENT
    // =====================================================
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

      // Procurement Thumbnail
      thumbnail: "/assets/img/thumb/procurement.png",

      tag: "PURCHASING",
    },

    // =====================================================
    // 05 - PRODUCT SALES
    // =====================================================
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

      // Product Sales Thumbnail
      thumbnail: "/assets/img/thumb/product-sales.png",

      tag: "SALES",
    },

    // =====================================================
    // 06 - SERVICES SALES
    // =====================================================
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

      // Services Sales Thumbnail
      thumbnail: "/assets/img/thumb/services-sales.png",

      tag: "SERVICES",
    },

    // =====================================================
    // 07 - RECRUITMENT
    // =====================================================
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

      // Recruitment Thumbnail
      thumbnail: "/assets/img/thumb/recruitment.png",

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

          {/* ================= LEFT CONTENT ================= */}
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

          </div>


          {/* ================= ORBIT ================= */}
          <div className="erp-neural-orbit">

            <div className="neural-ring neural-ring-outer"></div>
            <div className="neural-ring neural-ring-middle"></div>
            <div className="neural-ring neural-ring-inner"></div>


            {/* ================= NEURAL LINES ================= */}
            <div className="neural-lines">

              <span className="neural-line line-1"></span>
              <span className="neural-line line-2"></span>
              <span className="neural-line line-3"></span>
              <span className="neural-line line-4"></span>
              <span className="neural-line line-5"></span>
              <span className="neural-line line-6"></span>
              <span className="neural-line line-7"></span>

            </div>


            {/* ================= PARTICLES ================= */}
            <span className="neural-particle particle-1"></span>
            <span className="neural-particle particle-2"></span>
            <span className="neural-particle particle-3"></span>
            <span className="neural-particle particle-4"></span>
            <span className="neural-particle particle-5"></span>


            {/* =================================================
                ERP CORE
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
                MODULE 01 - HRM
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
                MODULE 02 - CRM
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
                MODULE 03 - FINANCE
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
                MODULE 04 - PROCUREMENT
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
                MODULE 05 - PRODUCT SALES
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
                MODULE 06 - SERVICES SALES
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
                MODULE 07 - RECRUITMENT
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


      {/* =====================================================
          ERP SHOWCASE
      ====================================================== */}
      <section className="erp-showcase">

        {/* ================= SHOWCASE HEADING ================= */}
        <div className="erp-showcase-heading">

          <div>

            <span>
              EXPLORE THE ECOSYSTEM
            </span>

            <h2>
              One Platform.
              <br />
              <em>Every Operation.</em>
            </h2>

          </div>

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

              {/* =================================================
                  CARD HEADER
              ================================================== */}
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


              {/* =================================================
                  VIDEO THUMBNAIL

                  IMPORTANT:
                  Video will NOT autoplay here.
                  Only thumbnail image is shown.
                  Click = open actual video.
              ================================================== */}
              <div
                className="erp-module-media"
                role="button"
                tabIndex={0}
                onClick={() => setActiveVideo(module.video)}
                onKeyDown={(e) => {

                  if (e.key === "Enter" || e.key === " ") {

                    e.preventDefault();

                    setActiveVideo(module.video);

                  }

                }}
              >

                {/* =================================================
                    INDIVIDUAL THUMBNAIL
                ================================================== */}
                <img
                  src={module.thumbnail}
                  alt={`${module.title} video thumbnail`}
                  className="erp-module-thumbnail"
                />


                {/* ================= GRADIENT ================= */}
                <div className="erp-media-gradient"></div>


                {/* ================= PLAY LABEL ================= */}
                <div className="erp-media-label">

                  <i className="bi bi-play-fill"></i>

                  <span>
                    {module.shortTitle}
                  </span>

                </div>


                {/* =================================================
                    CORNER OPEN BUTTON
                ================================================== */}
                <div
                  className="erp-video-corner"
                  onClick={(e) => {

                    e.stopPropagation();

                    setActiveVideo(module.video);

                  }}
                >

                  <i className="bi bi-arrow-up-right"></i>

                </div>

              </div>


              {/* =================================================
                  CARD CONTENT
              ================================================== */}
              <div className="erp-module-body">

                <h3>
                  {module.title}
                </h3>

                <p>
                  {module.text}
                </p>


                {/* =================================================
                    FEATURES
                ================================================== */}
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


                {/* =================================================
                    EXPLORE BUTTON
                ================================================== */}
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
          VIDEO MODAL
      ====================================================== */}
      {activeVideo && (

        <div
          className="erp-video-modal-overlay"
          onClick={() => setActiveVideo(null)}
        >

          <div
            className="erp-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* ================= CLOSE BUTTON ================= */}
            <button
              className="erp-video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >

              <i className="bi bi-x-lg"></i>

            </button>


            {/* =================================================
                ACTUAL VIDEO
                This video plays ONLY after thumbnail click.
            ================================================== */}
            <video
              src={activeVideo}
              autoPlay
              controls
              playsInline
              className="erp-video-modal-player"
            />

          </div>

        </div>

      )}

    </div>
  );
};

export default ProjectDetailsCenter1;