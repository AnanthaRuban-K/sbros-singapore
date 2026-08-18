import { Link } from "react-router-dom";

const ProjectDetailsCenter1 = () => {
  return (
    <div className="service-details-area-all sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">

            <div className="service-details-post">

              {/* =========================================
                  ERP INTRODUCTION
              ========================================= */}
              <article>
                <div className="details-post-area">

                  <div className="image">
                    <img
                      src="/assets/img/others/project-details-img1.png"
                      alt="ERP System"
                    />
                  </div>

                  <div className="space30"></div>

                  <div className="heading1">

                    <h2>
                      Streamline Your Business Operations with (ERP) Systems
                    </h2>

                    <div className="space16"></div>

                    <p>
                      One Solution ERP brings your business operations together
                      in one integrated platform - helping you manage people,
                      attendance, leave, payroll, customers, procurement,
                      inventory and business processes from a single system.
                      Designed for growing businesses, One Solution ERP helps
                      reduce manual work, improve visibility and give your teams
                      the information they need to make better decisions.
                    </p>

                  </div>
                </div>
              </article>


              {/* =========================================
                  GET STARTED
              ========================================= */}
              <div className="get-started-box">

                <h3>Get Started with ERP Implementation Today</h3>

                <div className="space16"></div>

                <p>
                  Ready to transform your business with ERP? Contact us today
                  to optimize your operations and drive business success.
                </p>

                <div className="space30"></div>

                <Link
                  to="/contact"
                  className="get-started-btn"
                >
                  Request a Demo
                </Link>

                <Link
                  to="/contact"
                  className="get-started-btn"
                >
                  Talk to Our Team
                </Link>

              </div>


              <div className="space50"></div>



              <div className="space50"></div>


              {/* =========================================
                  COMPLETE BUSINESS MANAGEMENT
              ========================================= */}
              <article className="erp-business-section">

                <div className="details-post-area">

                  <div className="heading1">

                    <h5>
                      Complete Business Management
                    </h5>

                    <div className="space16"></div>

                    <p className="erp-section-intro">
                      One Solution ERP is built around the way businesses
                      actually operate, bringing essential business functions
                      together in one integrated platform.
                    </p>

                  </div>


                  <div className="space30"></div>


                  <div className="row">


                    {/* =====================================
                        BOX 1 - HR
                    ===================================== */}
                    <div className="col-lg-4 col-md-6 erp-card-column">

                      <div className="erp-card">

                        <div className="erp-icon">
                          <i className="bi bi-people"></i>
                        </div>

                        <h4>
                          Human Resource Management
                        </h4>


                        <div className="erp-features">

                          <ul>

                            <li>Employee Profiles</li>
                            <li>Employee Documents</li>
                            <li>Departments & Roles</li>
                            <li>Salary Structures</li>
                            <li>Salary Assignments</li>

                          </ul>

                        </div>


                        <p>
                          Manage your workforce and employee information from
                          a centralized HR platform.
                        </p>

                      </div>

                    </div>


                    {/* =====================================
                        BOX 2 - ATTENDANCE
                    ===================================== */}
                    <div className="col-lg-4 col-md-6 erp-card-column">

                      <div className="erp-card">

                        <div className="erp-icon">
                          <i className="bi bi-calendar-check"></i>
                        </div>

                        <h4>
                          Attendance & Leave Management
                        </h4>


                        <div className="erp-features">

                          <ul>

                            <li>Biometric Integration</li>
                            <li>Punch Logs</li>
                            <li>Daily Attendance</li>
                            <li>Attendance Validation</li>
                            <li>Attendance Calendar</li>
                            

                          </ul>

                        </div>


                        <p>
Track employee attendance and working hours with an integrated HR system.

                        </p>

                      </div>

                    </div>


                    {/* =====================================
                        BOX 3 - PAYROLL
                    ===================================== */}
                    <div className="col-lg-4 col-md-6 erp-card-column">

                      <div className="erp-card">

                        <div className="erp-icon">
                          <i className="bi bi-cash-stack"></i>
                        </div>

                        <h4>
                          Payroll
                        </h4>


                        <div className="erp-features">

                          <ul>

                            <li>Payroll Processing</li>
                            <li>Salary Structures</li>
                            <li>Attendance Integration</li>
                            <li>Payslip Generation</li>
                            <li>Payroll Reports</li>

                          </ul>

                        </div>


                        <p>
                          Integrate attendance and employee data with payroll for easy salary management.

                        </p>

                      </div>

                    </div>


                    {/* =====================================
                        BOX 4 - CRM
                    ===================================== */}
                    <div className="col-lg-4 col-md-6 erp-card-column">

                      <div className="erp-card">

                        <div className="erp-icon">
                          <i className="bi bi-person-lines-fill"></i>
                        </div>

                        <h4>
                          CRM & Customer Management
                        </h4>


                        <div className="erp-features">

                          <ul>

                            <li>Lead Management</li>
                            <li>Lead Assignment</li>
                            <li>Lead Activities</li>
                            <li>Customer Conversion</li>
                            <li>Marketing Campaigns</li>
                            
                            
                            

                          </ul>

                        </div>


                        <p>
                          Build stronger customer relationships with an integrated CRM platform.
                        </p>

                      </div>

                    </div>


                    {/* =====================================
                        BOX 5 - PROCUREMENT
                    ===================================== */}
                    <div className="col-lg-4 col-md-6 erp-card-column">

                      <div className="erp-card">

                        <div className="erp-icon">
                          <i className="bi bi-cart-check"></i>
                        </div>

                        <h4>
                          Procurement & Purchasing
                        </h4>


                        <div className="erp-features">

                          <ul>

                            <li>Material Master</li>
                            <li>Purchase Requests</li>
                            <li>Supplier Quotations</li>
                            <li>Approval Workflows</li>
                            <li>Purchase Orders</li>
                           

                          </ul>

                        </div>


                        <p>
                          Manage your purchasing process with a structured
                          procurement workflow.
                        </p>

                      </div>

                    </div>


                    {/* =====================================
                        BOX 6 - INVENTORY
                    ===================================== */}
                    <div className="col-lg-4 col-md-6 erp-card-column">

                      <div className="erp-card">

                        <div className="erp-icon">
                          <i className="bi bi-box-seam"></i>
                        </div>

                        <h4>
                          Inventory & Stock Management
                        </h4>


                        <div className="erp-features">

                          <ul>

                            <li>Material Master</li>
                            <li>Stock Management</li>
                            <li>Goods Receipt</li>
                            <li>Goods Inward</li>
                            <li>Purchase Returns</li>
                    

                          </ul>

                        </div>


                        <p>
                          Maintain better visibility over materials and stock
                          movements.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </article>



                            {/* =========================================
                  ERP IMPLEMENTATION PROCESS
              ========================================= */}
              <article>

                <div className="details-post-area">

                  <div className="row">

                    <div className="col-lg-12">

                      <div className="heading1">

                        <h5>From Lead to Operations</h5>

                        <div className="space16"></div>

                        <div className="boxs-area">

                          <ul>

                            <li>
                              <span className="check">
                                <i className="bi bi-check-lg"></i>
                              </span>
                              Needs Assessment
                            </li>

                            <li>
                              <span className="check">
                                <i className="bi bi-check-lg"></i>
                              </span>
                              Solution Design
                            </li>

                            <li>
                              <span className="check">
                                <i className="bi bi-check-lg"></i>
                              </span>
                              Data Migration
                            </li>

                          </ul>


                          <ul>

                            <li>
                              <span className="check">
                                <i className="bi bi-check-lg"></i>
                              </span>
                              Change Management
                            </li>

                            <li>
                              <span className="check">
                                <i className="bi bi-check-lg"></i>
                              </span>
                              Testing & Quality
                            </li>

                            <li>
                              <span className="check">
                                <i className="bi bi-check-lg"></i>
                              </span>
                              Go Live & Support
                            </li>

                          </ul>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </article>




              <div className="space50"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCenter1;