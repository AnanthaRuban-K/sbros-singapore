import { Link } from "react-router-dom";

const ProjectDetailsCenter1 = () => {
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
        "Daily Attendance",
        "Attendance Reports",
      ],
    },
    {
      icon: "bi bi-calendar2-check",
      title: "Leave Management",
      text: "Manage leave requests, approvals and employee leave balances.",
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
      text: "Simplify salary processing by connecting employee and attendance data.",
      features: [
        "Payroll Processing",
        "Salary Structures",
        "Attendance Integration",
        "Payslip Generation",
      ],
    },
    {
      icon: "bi bi-person-lines-fill",
      title: "CRM & Customer Management",
      text: "Manage leads, follow-ups and customer relationships in one workspace.",
      features: [
        "Lead Management",
        "Lead Assignment",
        "Follow-ups",
        "Customer Conversion",
      ],
    },
    {
      icon: "bi bi-cart-check",
      title: "Procurement & Purchasing",
      text: "Manage purchasing from requests and quotations to purchase orders.",
      features: [
        "Material Master",
        "Purchase Requests",
        "Supplier Quotations",
        "Purchase Orders",
      ],
    },
    {
      icon: "bi bi-box-seam",
      title: "Inventory & Stock",
      text: "Maintain better visibility over materials and stock movements.",
      features: [
        "Stock Management",
        "Goods Receipt",
        "Goods Inward",
        "Stock Tracking",
      ],
    },
  ];

  return (
    <div className="service-details-area-all sp erp-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">

            <div className="service-details-post">

              {/* =========================================
                  ERP INTRO
              ========================================= */}
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
                    Bring HR, attendance, leave, payroll, CRM, procurement
                    and inventory together in one integrated platform.
                  </p>

                  <div className="erp-buttons">

                    <Link
                      to="/contact"
                      className="erp-btn erp-btn-primary"
                    >
                      Request a Demo
                      <i className="bi bi-arrow-right"></i>
                    </Link>

                    <Link
                      to="/contact"
                      className="erp-btn erp-btn-outline"
                    >
                      Talk to Our Team
                    </Link>

                  </div>

                </div>

              </section>


              {/* =========================================
                  ERP IMAGE
              ========================================= */}
              <div className="erp-image">

                <img
                  src="/assets/img/others/erpimage2.jpg"
                  alt="One Solution ERP"
                />

              </div>


              {/* =========================================
                  COMPLETE BUSINESS MANAGEMENT
              ========================================= */}
              <section className="erp-business">

                <div className="erp-business-title">

                  <span>ERP MODULES</span>

                  <h2>
                    Complete Business Management
                  </h2>

                  <p>
                    Manage your essential business operations from one
                    connected ERP platform.
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
                          0{index + 1}
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
                              {feature}
                            </li>
                          )
                        )}
                      </ul>

                    </div>
                  ))}

                </div>

              </section>


              {/* =========================================
                  BUSINESS WORKFLOW
              ========================================= */}
              <section className="erp-workflow-section">

                <div className="erp-workflow-title">

                  <span>CONNECTED WORKFLOW</span>

                  <h2>
                    From Lead to Operations
                  </h2>

                </div>


                <div className="erp-workflow">

                  <div className="workflow-item">

                    <div className="workflow-number">
                      01
                    </div>

                    <h4>Marketing</h4>

                    <p>
                      Generate and manage leads.
                    </p>

                  </div>


                  <div className="workflow-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>


                  <div className="workflow-item">

                    <div className="workflow-number">
                      02
                    </div>

                    <h4>Customer</h4>

                    <p>
                      Convert qualified leads.
                    </p>

                  </div>


                  <div className="workflow-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>


                  <div className="workflow-item">

                    <div className="workflow-number">
                      03
                    </div>

                    <h4>Procurement</h4>

                    <p>
                      Manage purchasing.
                    </p>

                  </div>


                  <div className="workflow-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>


                  <div className="workflow-item">

                    <div className="workflow-number">
                      04
                    </div>

                    <h4>Inventory</h4>

                    <p>
                      Track materials and stock.
                    </p>

                  </div>


                  <div className="workflow-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>


                  <div className="workflow-item">

                    <div className="workflow-number">
                      05
                    </div>

                    <h4>HR & Payroll</h4>

                    <p>
                      Manage workforce operations.
                    </p>

                  </div>

                </div>

              </section>


              {/* =========================================
                  FINAL CTA
              ========================================= */}
              <section className="erp-cta">

                <div>

                  <span>ONE SOLUTION ERP</span>

                  <h2>
                    Simplify Your Business Operations
                  </h2>

                  <p>
                    Connect your teams, processes and business information
                    with one integrated ERP platform.
                  </p>

                  <Link
                    to="/contact"
                    className="erp-cta-btn"
                  >
                    Request a Product Demo
                    <i className="bi bi-arrow-right"></i>
                  </Link>

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