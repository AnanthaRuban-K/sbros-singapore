import { Link } from "react-router-dom";

const ProjectDetailsCenter1 = () => {
  const benefits = [
    {
      icon: "bi bi-grid-1x2",
      title: "One Platform",
      text: "Manage essential business functions from one connected system.",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Connected Data",
      text: "Keep information connected across departments and operations.",
    },
    {
      icon: "bi bi-bar-chart-line",
      title: "Better Visibility",
      text: "Get clearer insights through dashboards and business reports.",
    },
    {
      icon: "bi bi-arrow-up-right-circle",
      title: "Scalable",
      text: "Expand your ERP capabilities as your business grows.",
    },
  ];

  const modules = [
    {
      icon: "bi bi-people",
      title: "Human Resource Management",
      text: "Manage employees and workforce information from one centralized platform.",
      features: [
        "Employee Profiles",
        "Employee Documents",
        "Departments & Roles",
        "Salary Structures",
      ],
    },
    {
      icon: "bi bi-calendar-check",
      title: "Attendance Management",
      text: "Track attendance, working hours, shifts and holidays with ease.",
      features: [
        "Biometric Integration",
        "Punch Logs",
        "Attendance Reports",
        "Shift Management",
      ],
    },
    {
      icon: "bi bi-calendar2-check",
      title: "Leave Management",
      text: "Manage leave requests, approvals and employee balances.",
      features: [
        "Leave Types",
        "Leave Applications",
        "Leave Approvals",
        "Leave Balances",
      ],
    },
    {
      icon: "bi bi-cash-stack",
      title: "Payroll",
      text: "Simplify payroll using connected employee and attendance data.",
      features: [
        "Payroll Processing",
        "Attendance Integration",
        "Payslip Generation",
        "Payroll Reports",
      ],
    },
    {
      icon: "bi bi-person-lines-fill",
      title: "CRM",
      text: "Manage leads, follow-ups and customer relationships.",
      features: [
        "Lead Management",
        "Lead Assignment",
        "Follow-ups",
        "Customer Conversion",
      ],
    },
    {
      icon: "bi bi-cart-check",
      title: "Procurement",
      text: "Manage purchasing from requests to purchase orders.",
      features: [
        "Material Master",
        "Purchase Requests",
        "Supplier Quotations",
        "Purchase Orders",
      ],
    },
    {
      icon: "bi bi-box-seam",
      title: "Inventory Management",
      text: "Track materials, stock levels and inventory movements.",
      features: [
        "Stock Management",
        "Goods Receipt",
        "Goods Inward",
        "Stock Tracking",
      ],
    },

    {
  icon: "bi bi-wallet2",
  title: "Finance Management",
  text: "Manage financial transactions, expenses, payments and business accounts from one centralized system.",
  features: [
    "Accounts Management",
    "Income & Expense Tracking",
    "Invoice & Payment Management",
    "Financial Reports",
  ],
},
  ];

 

  return (
    <div className="service-details-area-all sp erp-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 m-auto">

            <div className="service-details-post">

              {/* =====================================================
                  HERO
              ===================================================== */}
              <section className="erp-intro">

                <div className="erp-intro-content">

                  <span className="erp-tag">
                    ONE SOLUTION ERP
                  </span>

                  <h1>
                    One Platform.
                    <br />
                    <span>Complete Business Management.</span>
                  </h1>

                  <p>
                    Manage HR, attendance, leave, payroll, CRM,
                    procurement and inventory from one integrated
                    business platform.
                  </p>

                  <div className="erp-buttons">

                    <Link
                      to="/contact-us"
                      className="erp-btn erp-btn-primary"
                    >
                      Request a Demo
                      <i className="bi bi-arrow-right"></i>
                    </Link>

                   

                  </div>

                </div>

              </section>


              {/* =====================================================
                  ERP IMAGE
              ===================================================== */}
              <div className="erp-image">

                <img
                  src="/assets/img/others/erpimage2.jpg"
                  alt="One Solution ERP"
                />

              </div>


              {/* =====================================================
                  KEY BENEFITS
              ===================================================== */}
              <section className="erp-benefits">

                <div className="erp-section-heading">

                  <span>WHY ONE SOLUTION ERP</span>

                  <h2>
                    Run Your Business From One Place
                  </h2>

                  <p>
                    Bring your core business operations together
                    and reduce disconnected processes.
                  </p>

                </div>


                <div className="erp-benefit-grid">

                  {benefits.map((item, index) => (
                    <div
                      className="erp-benefit-card"
                      key={index}
                    >

                      <div className="erp-benefit-icon">
                        <i className={item.icon}></i>
                      </div>

                      <div>
                        <h3>{item.title}</h3>

                        <p>{item.text}</p>
                      </div>

                    </div>
                  ))}

                </div>

              </section>


              {/* =====================================================
                  CORE MODULES
              ===================================================== */}
              <section className="erp-business">

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


                <div className="erp-module-grid">

                  {modules.map((module, index) => (
                    <div
                      className="erp-module-card"
                      key={index}
                    >

                      <div className="erp-card-header">

                        <div className="erp-card-icon">
                          <i className={module.icon}></i>
                        </div>

                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      <h3>
                        {module.title}
                      </h3>

                      <p className="erp-card-text">
                        {module.text}
                      </p>

                      <ul>
                        {module.features.map(
                          (feature, featureIndex) => (
                            <li key={featureIndex}>
                              <i className="bi bi-check2"></i>
                              <span>{feature}</span>
                            </li>
                          )
                        )}
                      </ul>

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
                      HR & Workforce
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Attendance & Leave
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Payroll
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
                      Inventory
                    </div>

                  </div>

                </div>

              </section>


              {/* =====================================================
                  FINAL CTA
              ===================================================== */}
              <section className="erp-cta">

                <div className="erp-cta-content">

                  <span>
                    ONE SOLUTION ERP
                  </span>

                  <h2>
                    Ready to Simplify Your Business?
                  </h2>

                  <p>
                    Connect your teams, processes and business
                    information with one powerful ERP platform.
                  </p>

                  <div className="erp-buttons">

                   

                    <Link
                      to="/contact-us"
                      className="erp-btn erp-btn-transparent"
                    >
                      Get in Touch With Us
                    </Link>

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