import { Link } from "react-router-dom";
import { useState } from "react";

// =====================================================
// FAQ DATA  (3 groups x 3 questions)
// =====================================================
const faqGroups = [
  {
    title: "ERP Software & Business Management",
    icon: "bi bi-diagram-3-fill",
    items: [
      {
        q: "How can I contact SBros Tech to find the right ERP software in Singapore?",
        a: (
          <>
            You can{" "}
            <Link to="/contact-us" className="erp-faq-link">
              contact us
            </Link>{" "}
            to discuss your business needs and find the right ERP solution for
            your company.
          </>
        ),
      },
      {
        q: "What is ERP software, and how does it help businesses?",
        a: "ERP software connects different business operations in one platform, helping businesses improve efficiency and manage daily activities.",
      },
      {
        q: "What makes SBros ERP suitable for businesses in Singapore?",
        a: "SBros ERP brings HRM, CRM, Finance, Procurement, Sales and Recruitment together in one integrated platform.",
      },
    ],
  },
  {
    title: "ERP Modules & Features",
    icon: "bi bi-grid-1x2-fill",
    items: [
      {
        q: "How can I contact SBros Tech to learn more about ERP modules?",
        a: (
          <>
            <Link to="/contact-us" className="erp-faq-link">
              Contact our team
            </Link>{" "}
            to understand the available ERP modules and choose the features
            that match your business requirements.
          </>
        ),
      },
      {
        q: "What modules are included in SBros ERP software?",
        a: "SBros ERP includes HRM, CRM, Finance, Procurement, Sales and Recruitment modules.",
      },
      {
        q: "Can I manage HR, finance and sales in one ERP system?",
        a: "Yes. You can manage employee records, financial activities, customer details and sales operations through one connected platform.",
      },
    ],
  },
  {
    title: "ERP Pricing, Plans & Free Trial",
    icon: "bi bi-tags-fill",
    items: [
      {
        q: "How can I contact SBros Tech for ERP pricing in Singapore?",
        a: (
          <>
            <Link to="/contact-us" className="erp-faq-link">
              Contact our team
            </Link>{" "}
            to discuss ERP pricing, available plans and the best package for
            your business.
          </>
        ),
      },
      {
        q: "What ERP pricing plans does SBros Tech offer?",
        a: "We offer Basic, Intermediate and Advanced plans with full ERP packages and individual module options.",
      },
      {
        q: "Does SBros Tech offer a free ERP trial?",
        a: "Yes. You can try SBros ERP with a 15-day free trial, which can be extended to 30 days on request.",
      },
    ],
  },
];

const ProjectDetailsCenter1 = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // FAQ state: which category tab + which question is open
  const [faqGroup, setFaqGroup] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);

  const selectFaqGroup = (index) => {
    setFaqGroup(index);
    setFaqOpen(0);
  };

  const toggleFaq = (index) => {
    setFaqOpen((current) => (current === index ? null : index));
  };

  // =====================================================
  // ERP MODULES - 6 MODULES
  // `id` must match the keys of `modules` in Pricing/pricingData.js
  // (hrm, crm, finance, procurement, sales, recruitment)
  // =====================================================
  const modules = [
    {
      id: "hrm",
      number: "01",
      icon: "bi bi-people-fill",
      title: "Human Resource Management",
      shortTitle: "HRM",
      text: "Manage employee records, documents, departments and salary details with our HRM software in Singapore.",
      features: [
        "Employee Profiles",
        "Employee Documents",
        "Departments & Roles",
        "Salary Structures",
      ],
      video: "/assets/img/Video1.mp4",
      thumbnail: "/assets/img/thumb/image.png",
      alt: "HRM software employee management module by SBROS Tech",
      tag: "PEOPLE",
    },
    {
      id: "crm",
      number: "02",
      icon: "bi bi-person-lines-fill",
      title: "Customer Relationship Management",
      shortTitle: "CRM",
      text: "Track leads, manage customer details and follow-ups with our CRM software.",
      features: [
        "Lead Management",
        "Lead Assignment",
        "Customer Management",
        "Follow-ups",
      ],
      video: "/assets/img/Video2.mp4",
      thumbnail: "/assets/img/thumb/image2.jpeg",
      alt:"CRM customer relationship management software by SBROS Tech",
      tag: "CUSTOMERS",
    },
    {
      id: "finance",
      number: "03",
      icon: "bi bi-wallet-fill",
      title: "Financial Management",
      shortTitle: "FINANCE",
      text: "Manage accounts, invoices, income, expenses and financial reports with our ERP finance module.",
      features: [
        "Accounts Management",
        "Income & Expense Tracking",
        "Invoice & Payments",
        "Financial Reports",
      ],
      video: "/assets/img/Video3.mp4",
      thumbnail: "/assets/img/thumb/image3.jpeg",
      alt:"Finance and accounting management software by SBROS Tech",
      tag: "FINANCE",
    },
    {
      id: "procurement",
      number: "04",
      icon: "bi bi-cart-check-fill",
      title: "Purchase Management",
      shortTitle: "PROCUREMENT",
      text: "Simplify purchasing, supplier quotations and purchase orders with our procurement management software.",
      features: [
        "Material Master",
        "Purchase Requests",
        "Supplier Quotations",
        "Purchase Orders",
      ],
      video: "/assets/videos/procurement.mp4",
      thumbnail: "/assets/img/thumb/image4.jpeg",
      alt:"Procurement and purchase management software by SBROS Tech",
      tag: "PURCHASING",
    },
    {
      id: "sales",
      number: "05",
      icon: "bi bi-bag-check-fill",
      title: "Sales Management",
      shortTitle: "SALES",
      text: "Manage products, quotations, sales orders and customer information with our sales management software.",
      features: [
        "Product & Service Management",
        "Quotation Management",
        "Sales Orders",
        "Customer Management",
      ],
      video: "/assets/videos/sales.mp4",
      thumbnail: "/assets/img/thumb/image5.jpeg",
      alt:"Sales and order management software by SBROS Tech",
      tag: "SALES",
    },
    {
      id: "recruitment",
      number: "06",
      icon: "bi bi-person-badge-fill",
      title: "Recruitment Management",
      shortTitle: "RECRUITMENT",
      text: "Manage job openings, candidates, interviews and hiring processes with our recruitment management software.",
      features: [
        "Job Openings",
        "Candidate Pipeline",
        "Interview Scheduling",
        "Offer Management",
      ],
      // No product video yet: the card shows the image without a play button
      video: "/assets/videos/sales.mp4",
      thumbnail: "/assets/img/thumb/image6.jpeg",
      alt:"Recruitment and candidate management software by SBROS Tech",
      tag: "HIRING",
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
              One ERP System.
              <br />
              <span>Complete Business Management.</span>
            </h2>

            <p>

              
              Manage your entire business with all-in-one ERP software in
              Singapore. Connect HR, CRM, Finance, Sales, Procurement and
              Recruitment in one integrated platform to simplify operations
              and improve productivity.
            </p>

            <div className="erp-hero-actions">
              <a href="#erp-modules" className="erp-hero-btn erp-hero-btn--primary">
                Explore Our Products
                <i className="bi bi-arrow-down"></i>
              </a>

              <Link to="/contact-us" className="erp-hero-btn erp-hero-btn--ghost">
                Contact Us
              </Link>
            </div>

          </div>


          {/* ================= NEURAL ORBIT ================= */}
          <div className="erp-neural-orbit">

            <div className="neural-ring neural-ring-outer"></div>
            <div className="neural-ring neural-ring-middle"></div>
            <div className="neural-ring neural-ring-inner"></div>

            <div className="neural-lines">
              <span className="neural-line line-1"></span>
              <span className="neural-line line-2"></span>
              <span className="neural-line line-3"></span>
              <span className="neural-line line-4"></span>
              <span className="neural-line line-5"></span>
            </div>

            <span className="neural-particle particle-1"></span>
            <span className="neural-particle particle-2"></span>
            <span className="neural-particle particle-3"></span>
            <span className="neural-particle particle-4"></span>
            <span className="neural-particle particle-5"></span>

            <div className="erp-neural-core">
              <div className="core-wave wave-one"></div>
              <div className="core-wave wave-two"></div>

              <div className="core-content">
                <span className="core-small">POWERED BY</span>
                <strong>ERP</strong>
                <span className="core-bottom">ONE PLATFORM</span>
              </div>
            </div>

            {/* 01 - HRM */}
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

            {/* 02 - CRM */}
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

            {/* 03 - FINANCE */}
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

            {/* 04 - PROCUREMENT */}
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

            {/* 05 - SALES */}
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
            {/* 06 - RECRUITMENT */}
<div className="neural-module neural-6">
  <div className="neural-module-card">
    <div className="neural-icon">
      <i className="bi bi-person-plus-fill"></i>
    </div>
    <div>
      <small>06</small>
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
      <section className="erp-showcase" id="erp-modules">

        <div className="erp-showcase-heading">
          <div>
            <span>EXPLORE THE ERP MODULES</span>
            <h2>
              One Integrated ERP System
              <br />
              <em>for Every Business Operation</em>
            </h2>
            <p>
              Manage your business efficiently with integrated ERP software in
              Singapore, connecting essential business operations through six
              powerful modules.
            </p>
          </div>
        </div>


        {/* ================= MODULE GRID ================= */}
        <div className="erp-creative-grid">

          {modules.map((module) => (

            <article
              className="erp-creative-module"
              key={module.id}
            >

              {/* ================= CARD HEADER ================= */}
              <div className="erp-module-top">
                <div className="erp-module-number">{module.number}</div>

                <div className="erp-module-icon">
                  <i className={module.icon}></i>
                </div>

                <span className="erp-module-tag">{module.tag}</span>
              </div>


              {/* ================= VIDEO ================= */}
              {module.video ? (
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
                  <span>{module.shortTitle}</span>
                </div>

                <div
                  className="erp-video-corner"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(module.video);
                  }}
                ></div>
              </div>
              ) : (
              <div className="erp-module-media">
                <img
                  src={module.thumbnail}
                  alt={module.title}
                  className="erp-module-thumbnail"
                />

                <div className="erp-media-gradient"></div>

                <div className="erp-media-label">
                  <span>{module.shortTitle}</span>
                </div>
              </div>
              )}


              {/* ================= CARD BODY ================= */}
              <div className="erp-module-body">

                <h3>{module.title}</h3>

                <p>{module.text}</p>

                {/* ================= FEATURES ================= */}
                <div className="erp-feature-list">
                  {module.features.map((feature, featureIndex) => (
                    <div className="erp-feature-pill" key={featureIndex}>
                      <i className="bi bi-check-lg"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* ================= BUTTON =================
                    Goes to that module's plans on the Plans page.
                    HRM -> /Pricing#plans-hrm
                    CRM -> /Pricing#plans-crm  ... etc.
                ============================================ */}
                <Link
                  to={`/pricing#plans-${module.id}`}
                  className="erp-explore-btn"
                >
                  <span>Explore Module</span>

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
          FAQ  (dark section, category tabs + numbered accordion)
      ====================================================== */}
      <section className="erp-faq">

        <div className="erp-faq-glow erp-faq-glow--one"></div>
        <div className="erp-faq-glow erp-faq-glow--two"></div>

        <div className="erp-faq-inner">

          <div className="erp-faq-head">
            <span className="erp-faq-label">FAQ</span>

            <h2>
              Frequently Asked <em>Questions</em>
            </h2>
          </div>

          {/* ---------- Category tabs ---------- */}
          <div className="erp-faq-tabs" role="tablist" aria-label="FAQ categories">
            {faqGroups.map((group, gi) => (
              <button
                key={group.title}
                type="button"
                role="tab"
                aria-selected={faqGroup === gi}
                className={`erp-faq-tab ${faqGroup === gi ? "is-active" : ""}`}
                onClick={() => selectFaqGroup(gi)}
              >
                <i className={group.icon}></i>
                <span>{group.title}</span>
              </button>
            ))}
          </div>

          {/* ---------- Questions ---------- */}
          <div className="erp-faq-list" key={faqGroup} role="tabpanel">
            {faqGroups[faqGroup].items.map((item, ii) => {
              const isOpen = faqOpen === ii;
              const panelId = `erp-faq-a-${faqGroup}-${ii}`;

              return (
                <div
                  className={`erp-faq-item ${isOpen ? "is-open" : ""}`}
                  key={item.q}
                >
                  <button
                    type="button"
                    className="erp-faq-q"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(ii)}
                  >
                    <span className="erp-faq-num">
                      {String(ii + 1).padStart(2, "0")}
                    </span>

                    <span className="erp-faq-text">{item.q}</span>

                    <span className="erp-faq-icon" aria-hidden="true"></span>
                  </button>

                  <div className="erp-faq-a" id={panelId} role="region">
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="erp-cta">
        <div className="erp-cta-box">

          <div className="erp-cta-copy">
            <span className="erp-cta-label">
              <i className="bi bi-stars"></i>
              SBROS ERP
            </span>

            <h2>Ready to Simplify Your Business with ERP Software?</h2>

            <p>
              Manage your business operations with SBros ERP Software in
              Singapore. Explore our six integrated modules and find the right
              ERP solution for your business.
            </p>

            <div className="erp-cta-actions">
              <Link to="/pricing" className="erp-cta-btn erp-cta-btn--solid">
                Start Free Trial
                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link to="/contact-us" className="erp-cta-btn erp-cta-btn--ghost">
                Contact Us
              </Link>
            </div>
          </div>

          {/* mini orbit: the six modules around the ERP core */}
          <div className="erp-cta-orbit" aria-hidden="true">
            <div className="erp-cta-ring"></div>

            <div className="erp-cta-core">ERP</div>

            {modules.map((module, index) => (
              <span
                className="erp-cta-node"
                key={module.id}
                style={{ "--i": index }}
              >
                <i className={module.icon}></i>
              </span>
            ))}
          </div>

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