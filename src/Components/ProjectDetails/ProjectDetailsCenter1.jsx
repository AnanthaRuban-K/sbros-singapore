import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectDetailsCenter1 = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // =====================================================
  // ERP MODULES - 5 MODULES
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
      thumbnail: "/assets/img/thumb/procurement.png",
      tag: "PURCHASING",
    },

    // =====================================================
    // 05 - SALES
    // =====================================================
    {
      number: "05",
      icon: "bi bi-bag-check-fill",
      title: "Sales",
      shortTitle: "SALES",
      text: "Manage products, services, quotations, sales orders and customers through one connected sales platform.",
      features: [
        "Product & Service Management",
        "Quotation Management",
        "Sales Orders",
        "Customer Management",
      ],
      video: "/assets/videos/sales.mp4",
      thumbnail: "/assets/img/thumb/sales.png",
      tag: "SALES",
    },
  ];

  return (
    <div className="erp-modern-page">

      {/* =====================================================
          CONNECTED ERP
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
              <span>One Connected Business.</span>
            </h2>

            <p>
              Stop switching between disconnected systems.
              Bring your entire business into one intelligent
              platform where every operation works together.
            </p>

          </div>


          {/* ================= NEURAL ORBIT ================= */}
          <div className="erp-neural-orbit">

            {/* RINGS */}
            <div className="neural-ring neural-ring-outer"></div>
            <div className="neural-ring neural-ring-middle"></div>
            <div className="neural-ring neural-ring-inner"></div>


            {/* ================= CONNECTION LINES ================= */}
            <div className="neural-lines">

              <span className="neural-line line-1"></span>
              <span className="neural-line line-2"></span>
              <span className="neural-line line-3"></span>
              <span className="neural-line line-4"></span>
              <span className="neural-line line-5"></span>

            </div>


            {/* ================= PARTICLES ================= */}
            <span className="neural-particle particle-1"></span>
            <span className="neural-particle particle-2"></span>
            <span className="neural-particle particle-3"></span>
            <span className="neural-particle particle-4"></span>
            <span className="neural-particle particle-5"></span>


            {/* ================= ERP CORE ================= */}
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
                01 - HRM
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
                02 - CRM
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
                03 - FINANCE
            ================================================== */}
            <div className="neural-module neural-3">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-wallet-fill"></i>
                </div>

                <div>
                  <small>03</small>
                  <span>Finance</span>
                </div>

              </div>

            </div>


            {/* =================================================
                04 - PROCUREMENT
            ================================================== */}
            <div className="neural-module neural-4">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-cart-check-fill"></i>
                </div>

                <div>
                  <small>04</small>
                  <span>Procurement</span>
                </div>

              </div>

            </div>


            {/* =================================================
                05 - SALES
            ================================================== */}
            <div className="neural-module neural-5">

              <div className="neural-module-card">

                <div className="neural-icon">
                  <i className="bi bi-bag-check-fill"></i>
                </div>

                <div>
                  <small>05</small>
                  <span>Sales</span>
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


        {/* ================= MODULE GRID ================= */}
        <div className="erp-creative-grid">

          {modules.map((module, index) => (

            <article
              className="erp-creative-module"
              key={index}
            >

              {/* ================= CARD HEADER ================= */}
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


              {/* ================= VIDEO ================= */}
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

                <img
                  src={module.thumbnail}
                  alt={`${module.title} video thumbnail`}
                  className="erp-module-thumbnail"
                />

                <div className="erp-media-gradient"></div>

                <div className="erp-media-label">

                  <i className="bi bi-play-fill"></i>

                  <span>
                    {module.shortTitle}
                  </span>

                </div>

                <div
                  className="erp-video-corner"
                  onClick={(e) => {

                    e.stopPropagation();

                    setActiveVideo(module.video);

                  }}
                >

                  {/* <i className="bi bi-arrow-up-right"></i> */}

                </div>

              </div>


              {/* ================= CARD BODY ================= */}
              <div className="erp-module-body">

                <h3>
                  {module.title}
                </h3>

                <p>
                  {module.text}
                </p>


                {/* ================= FEATURES ================= */}
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


                {/* ================= BUTTON ================= */}
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

            <button
              className="erp-video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >

              <i className="bi bi-x-lg"></i>

            </button>

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