import { Link } from "react-router-dom";

const ProjectDetailsCenter1 = () => {
  return (
    <div className="erp-page">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="erp-hero-section">

        <div className="container">

          <div className="erp-hero-content">

            <div className="erp-hero-badge">
              <span></span>
              ONE SOLUTION ERP
            </div>

            <h1>
              One Platform.
              <br />
              <strong>Complete Business Management.</strong>
            </h1>

            <p>
              One Solution ERP brings your business operations together
              in one integrated platform — helping you manage people,
              attendance, leave, payroll, customers, procurement,
              inventory and business processes from a single system.
            </p>

            <p>
              Designed for growing businesses, One Solution ERP helps
              reduce manual work, improve visibility and give your teams
              the information they need to make better decisions.
            </p>

            <div className="erp-hero-buttons">

              <Link
                to="/contact"
                className="erp-primary-btn"
              >
                Request a Demo
                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link
                to="/contact"
                className="erp-secondary-btn"
              >
                Talk to Our Team
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RUN YOUR BUSINESS FROM ONE PLACE
      ========================================================= */}
      <section className="erp-one-place-section">

        <div className="container">

          <div className="erp-section-heading">

            <div className="erp-section-label">
              <span></span>
              ONE CONNECTED PLATFORM
            </div>

            <h2>
              Run Your Business
              <strong> From One Place</strong>
            </h2>

            <p>
              Managing different business functions across spreadsheets,
              disconnected applications and manual processes can make
              everyday operations difficult.
            </p>

            <p>
              One Solution ERP brings your core business operations
              together so your teams can work from one connected platform.
            </p>

          </div>


          <div className="erp-benefit-grid">

            {/* One Platform */}
            <div className="erp-benefit-card">

              <div className="erp-benefit-icon">
                <i className="bi bi-grid-1x2"></i>
              </div>

              <h3>One Platform</h3>

              <p>
                Manage multiple business functions from one system.
              </p>

            </div>


            {/* Connected Data */}
            <div className="erp-benefit-card">

              <div className="erp-benefit-icon">
                <i className="bi bi-diagram-3"></i>
              </div>

              <h3>Connected Data</h3>

              <p>
                Keep important business information connected across
                departments.
              </p>

            </div>


            {/* Better Visibility */}
            <div className="erp-benefit-card">

              <div className="erp-benefit-icon">
                <i className="bi bi-bar-chart"></i>
              </div>

              <h3>Better Visibility</h3>

              <p>
                Get real-time operational insights through dashboards
                and reports.
              </p>

            </div>


            {/* Scalable Architecture */}
            <div className="erp-benefit-card">

              <div className="erp-benefit-icon">
                <i className="bi bi-arrow-up-right-circle"></i>
              </div>

              <h3>Scalable Architecture</h3>

              <p>
                Build your business on a platform that can grow with
                your organisation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          COMPLETE BUSINESS MANAGEMENT
      ========================================================= */}
      <section className="erp-business-section">

        <div className="container">

          <div className="erp-section-heading center">

            <div className="erp-section-label">
              <span></span>
              COMPLETE BUSINESS MANAGEMENT
            </div>

            <h2>
              Everything Your Business Needs.
              <br />
              <strong>All in One Platform.</strong>
            </h2>

            <p>
              One Solution ERP is built around the way businesses
              actually operate, bringing essential business functions
              together in one integrated platform.
            </p>

          </div>


          <div className="erp-module-grid">


            {/* =====================================================
                HR
            ===================================================== */}
            <div className="erp-module-card">

              <div className="erp-module-top">

                <div className="erp-module-number">
                  01
                </div>

                <div className="erp-module-icon">
                  <i className="bi bi-people"></i>
                </div>

              </div>

              <h3>
                Human Resource Management
              </h3>

              <p>
                Manage your workforce and employee information from
                a centralized HR platform.
              </p>

              <div className="erp-feature-list">

                <span>Employee Management</span>
                <span>Employee Profiles</span>
                <span>Employee Documents</span>
                <span>Departments & Roles</span>
                <span>Salary Structures</span>
                <span>Salary Assignments</span>

              </div>

            </div>


            {/* =====================================================
                ATTENDANCE
            ===================================================== */}
            <div className="erp-module-card">

              <div className="erp-module-top">

                <div className="erp-module-number">
                  02
                </div>

                <div className="erp-module-icon">
                  <i className="bi bi-calendar-check"></i>
                </div>

              </div>

              <h3>
                Attendance Management
              </h3>

              <p>
                Track employee attendance and working hours with an
                integrated attendance system.
              </p>

              <div className="erp-feature-list">

                <span>Biometric Punch Integration</span>
                <span>Punch Logs</span>
                <span>Daily Attendance</span>
                <span>Attendance Validation</span>
                <span>Attendance Calendar</span>
                <span>Attendance Reports</span>
                <span>Shift Management</span>
                <span>Holiday Management</span>
                <span>Attendance Recalculation</span>

              </div>

            </div>


            {/* =====================================================
                LEAVE
            ===================================================== */}
            <div className="erp-module-card">

              <div className="erp-module-top">

                <div className="erp-module-number">
                  03
                </div>

                <div className="erp-module-icon">
                  <i className="bi bi-calendar2-week"></i>
                </div>

              </div>

              <h3>
                Leave Management
              </h3>

              <p>
                Manage employee leave requests, approvals and
                entitlements through a structured workflow.
              </p>

              <div className="erp-feature-list">

                <span>Leave Types</span>
                <span>Leave Applications</span>
                <span>Leave Approvals</span>
                <span>Leave Balances</span>
                <span>Leave Entitlements</span>
                <span>Leave Policies</span>
                <span>Leave History</span>
                <span>Leave Reports</span>

              </div>

            </div>


            {/* =====================================================
                PAYROLL
            ===================================================== */}
            <div className="erp-module-card">

              <div className="erp-module-top">

                <div className="erp-module-number">
                  04
                </div>

                <div className="erp-module-icon">
                  <i className="bi bi-cash-stack"></i>
                </div>

              </div>

              <h3>
                Payroll
              </h3>

              <p>
                Connect attendance and employee information with
                payroll processing to simplify salary administration.
              </p>

              <div className="erp-feature-list">

                <span>Payroll Processing</span>
                <span>Salary Structures</span>
                <span>Attendance Integration</span>
                <span>Payslip Generation</span>
                <span>Payroll Reports</span>

              </div>

            </div>


            {/* =====================================================
                CRM
            ===================================================== */}
            <div className="erp-module-card">

              <div className="erp-module-top">

                <div className="erp-module-number">
                  05
                </div>

                <div className="erp-module-icon">
                  <i className="bi bi-person-lines-fill"></i>
                </div>

              </div>

              <h3>
                CRM & Customer Management
              </h3>

              <p>
                Build stronger customer relationships with an
                integrated CRM platform.
              </p>

              <div className="erp-crm-label">
                MARKETING CRM
              </div>

              <p className="erp-small-description">
                Manage the complete lead lifecycle from acquisition
                to customer conversion.
              </p>

              <div className="erp-feature-list">

                <span>Lead Management</span>
                <span>Lead Assignment</span>
                <span>Lead Activities</span>
                <span>Follow-ups</span>
                <span>Lead Qualification</span>
                <span>Marketing Campaigns</span>
                <span>Lead Reports</span>
                <span>Customer Conversion</span>
                <span>Shared Customer Master</span>

              </div>

              <div className="erp-module-note">
                From the first interaction to customer creation,
                your team can manage the entire marketing journey
                from one workspace.
              </div>

            </div>


            {/* =====================================================
                PROCUREMENT
            ===================================================== */}
            <div className="erp-module-card">

              <div className="erp-module-top">

                <div className="erp-module-number">
                  06
                </div>

                <div className="erp-module-icon">
                  <i className="bi bi-cart-check"></i>
                </div>

              </div>

              <h3>
                Procurement & Purchasing
              </h3>

              <p>
                Manage your purchasing process with a structured
                procurement workflow.
              </p>

              <div className="erp-feature-list">

                <span>Material Master</span>
                <span>Purchase Requests</span>
                <span>Supplier Quotations</span>
                <span>Approval Workflows</span>
                <span>Purchase Orders</span>
                <span>Goods Inward</span>
                <span>Goods Receipt</span>
                <span>Purchase Returns</span>
                <span>Stock Integration</span>

              </div>

              <div className="erp-module-note">
                Create a clear process from purchase request to
                receiving materials and managing returns.
              </div>

            </div>


            {/* =====================================================
                INVENTORY
            ===================================================== */}
            <div className="erp-module-card">

              <div className="erp-module-top">

                <div className="erp-module-number">
                  07
                </div>

                <div className="erp-module-icon">
                  <i className="bi bi-box-seam"></i>
                </div>

              </div>

              <h3>
                Inventory & Stock Management
              </h3>

              <p>
                Maintain better visibility over materials and
                stock movements.
              </p>

              <div className="erp-feature-list">

                <span>Material Master</span>
                <span>Stock Management</span>
                <span>Goods Receipt</span>
                <span>Goods Inward</span>
                <span>Purchase Returns</span>
                <span>Stock Movement Tracking</span>

              </div>

              <div className="erp-module-note">
                Connect procurement activities with inventory
                operations to maintain a more consistent view
                of your materials.
              </div>

            </div>


          </div>

        </div>

      </section>


      {/* =========================================================
          BUILT FOR GROWING BUSINESSES
      ========================================================= */}
      <section className="erp-growth-section">

        <div className="container">

          <div className="erp-two-column">

            <div className="erp-growth-content">

              <div className="erp-section-label">
                <span></span>
                BUILT FOR GROWING BUSINESSES
              </div>

              <h2>
                A Strong Foundation
                <strong> for Business Growth</strong>
              </h2>

              <p>
                One Solution ERP is designed to support businesses
                as they grow.
              </p>

              <p>
                Whether you are managing a growing workforce,
                increasing customer relationships, purchasing
                materials or expanding your operations, the platform
                provides a centralized foundation for your business
                processes.
              </p>

            </div>


            <div className="erp-growth-points">

              <div className="erp-growth-point">
                <div className="erp-check">
                  <i className="bi bi-check2"></i>
                </div>

                <div>
                  <h4>Centralized Operations</h4>
                  <p>
                    Bring business functions together in one system.
                  </p>
                </div>
              </div>


              <div className="erp-growth-point">
                <div className="erp-check">
                  <i className="bi bi-check2"></i>
                </div>

                <div>
                  <h4>Flexible Workflows</h4>
                  <p>
                    Adapt workflows according to your business needs.
                  </p>
                </div>
              </div>


              <div className="erp-growth-point">
                <div className="erp-check">
                  <i className="bi bi-check2"></i>
                </div>

                <div>
                  <h4>Future Ready</h4>
                  <p>
                    Expand your platform as your organization grows.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SINGAPORE BUSINESSES
      ========================================================= */}
      <section className="erp-singapore-section">

        <div className="container">

          <div className="erp-singapore-box">

            <div className="erp-singapore-content">

              <div className="erp-section-label light">
                <span></span>
                DESIGNED FOR SINGAPORE BUSINESSES
              </div>

              <h2>
                Built With Singapore
                <br />
                <strong>Business Operations in Mind</strong>
              </h2>

              <p>
                Built with Singapore business operations in mind,
                One Solution ERP provides a structured platform for
                organisations operating in Singapore.
              </p>

              <p>
                The platform can support business workflows across
                areas such as employee management, attendance, leave,
                payroll, customer management, procurement, inventory
                and business reporting.
              </p>

              <div className="erp-compliance-note">
                <i className="bi bi-info-circle"></i>

                <span>
                  Where statutory or regulatory compliance features
                  are applicable, the exact supported requirements
                  should be confirmed with our team before implementation.
                </span>
              </div>

            </div>


            <div className="erp-singapore-modules">

              <span>Employee Management</span>
              <span>Attendance</span>
              <span>Leave</span>
              <span>Payroll</span>
              <span>Customer Management</span>
              <span>Procurement</span>
              <span>Inventory</span>
              <span>Business Reporting</span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONSTRUCTION BUSINESSES
      ========================================================= */}
      <section className="erp-construction-section">

        <div className="container">

          <div className="erp-section-heading center">

            <div className="erp-section-label">
              <span></span>
              PROJECT-BASED BUSINESS
            </div>

            <h2>
              Especially Relevant for
              <strong> Construction & Project-Based Businesses</strong>
            </h2>

            <p>
              Construction businesses often manage employees, attendance,
              shifts, leave, payroll, materials, procurement and suppliers
              across multiple operational processes.
            </p>

            <p>
              One Solution ERP brings these workflows together into a
              connected business platform.
            </p>

          </div>


          <div className="erp-construction-grid">

            <div className="erp-construction-card">

              <div className="erp-construction-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>Workforce</h3>

              <p>
                Employees, attendance, shifts, leave and payroll.
              </p>

            </div>


            <div className="erp-construction-card">

              <div className="erp-construction-icon">
                <i className="bi bi-cart-check"></i>
              </div>

              <h3>Procurement</h3>

              <p>
                Purchase requests, quotations, approvals and
                purchase orders.
              </p>

            </div>


            <div className="erp-construction-card">

              <div className="erp-construction-icon">
                <i className="bi bi-box-seam"></i>
              </div>

              <h3>Materials</h3>

              <p>
                Goods receipt, inward processes, returns and stock.
              </p>

            </div>


            <div className="erp-construction-card">

              <div className="erp-construction-icon">
                <i className="bi bi-person-lines-fill"></i>
              </div>

              <h3>Customers</h3>

              <p>
                Leads, activities, follow-ups and customer management.
              </p>

            </div>

          </div>


          <div className="erp-management-message">
            <i className="bi bi-eye"></i>

            <p>
              This gives management a clearer view across operational
              functions.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          FROM LEAD TO OPERATIONS
      ========================================================= */}
      <section className="erp-flow-section">

        <div className="container">

          <div className="erp-section-heading center">

            <div className="erp-section-label">
              <span></span>
              CONNECTED BUSINESS PROCESS
            </div>

            <h2>
              From Lead
              <strong> to Operations</strong>
            </h2>

            <p>
              One Solution ERP connects business processes instead
              of keeping them isolated.
            </p>

          </div>


          <div className="erp-process-flow">


            {/* Marketing */}
            <div className="erp-process-item">

              <div className="erp-process-number">
                01
              </div>

              <div className="erp-process-icon">
                <i className="bi bi-megaphone"></i>
              </div>

              <h3>Marketing</h3>

              <p>
                Generate and manage leads.
              </p>

            </div>


            <div className="erp-process-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>


            {/* Customer */}
            <div className="erp-process-item">

              <div className="erp-process-number">
                02
              </div>

              <div className="erp-process-icon">
                <i className="bi bi-person-check"></i>
              </div>

              <h3>Customer</h3>

              <p>
                Convert qualified leads into customers.
              </p>

            </div>


            <div className="erp-process-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>


            {/* Procurement */}
            <div className="erp-process-item">

              <div className="erp-process-number">
                03
              </div>

              <div className="erp-process-icon">
                <i className="bi bi-cart-check"></i>
              </div>

              <h3>Procurement</h3>

              <p>
                Manage purchasing and material requirements.
              </p>

            </div>


            <div className="erp-process-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>


            {/* Inventory */}
            <div className="erp-process-item">

              <div className="erp-process-number">
                04
              </div>

              <div className="erp-process-icon">
                <i className="bi bi-box-seam"></i>
              </div>

              <h3>Inventory</h3>

              <p>
                Track materials and stock movements.
              </p>

            </div>


            <div className="erp-process-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>


            {/* HR */}
            <div className="erp-process-item">

              <div className="erp-process-number">
                05
              </div>

              <div className="erp-process-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>HR & Workforce</h3>

              <p>
                Manage employees, attendance and leave.
              </p>

            </div>


            <div className="erp-process-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>


            {/* Payroll */}
            <div className="erp-process-item">

              <div className="erp-process-number">
                06
              </div>

              <div className="erp-process-icon">
                <i className="bi bi-cash-stack"></i>
              </div>

              <h3>Payroll</h3>

              <p>
                Process employee payroll using connected
                workforce information.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ONE SOURCE OF INFORMATION
      ========================================================= */}
      <section className="erp-information-section">

        <div className="container">

          <div className="erp-two-column reverse-mobile">

            <div className="erp-information-content">

              <div className="erp-section-label">
                <span></span>
                CENTRALIZED INFORMATION
              </div>

              <h2>
                One Source of
                <strong> Business Information</strong>
              </h2>

              <p>
                Instead of maintaining separate spreadsheets and
                disconnected systems, One Solution ERP provides a
                centralized platform for your business data.
              </p>

            </div>


            <div className="erp-information-grid">

              <div className="erp-info-item">

                <div className="erp-info-icon">
                  <i className="bi bi-lightning"></i>
                </div>

                <h3>Less Manual Work</h3>

                <p>
                  Reduce repetitive data entry and disconnected processes.
                </p>

              </div>


              <div className="erp-info-item">

                <div className="erp-info-icon">
                  <i className="bi bi-eye"></i>
                </div>

                <h3>Better Visibility</h3>

                <p>
                  Give managers a clearer view of business operations.
                </p>

              </div>


              <div className="erp-info-item">

                <div className="erp-info-icon">
                  <i className="bi bi-link-45deg"></i>
                </div>

                <h3>Connected Workflows</h3>

                <p>
                  Connect information between departments and
                  business processes.
                </p>

              </div>


              <div className="erp-info-item">

                <div className="erp-info-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>

                <h3>Faster Decisions</h3>

                <p>
                  Use centralized information and reports to make
                  better decisions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BUILT FOR MODERN TEAMS
      ========================================================= */}
      <section className="erp-modern-section">

        <div className="container">

          <div className="erp-section-heading center">

            <div className="erp-section-label">
              <span></span>
              MODERN BUSINESS PLATFORM
            </div>

            <h2>
              Built for
              <strong> Modern Teams</strong>
            </h2>

          </div>


          <div className="erp-modern-grid">

            <div className="erp-modern-card">

              <div className="erp-modern-icon">
                <i className="bi bi-shield-check"></i>
              </div>

              <h3>Role-Based Access</h3>

              <p>
                Give users access based on their responsibilities
                and permissions.
              </p>

            </div>


            <div className="erp-modern-card">

              <div className="erp-modern-icon">
                <i className="bi bi-check2-square"></i>
              </div>

              <h3>Approval Workflows</h3>

              <p>
                Control important business processes through
                structured approvals.
              </p>

            </div>


            <div className="erp-modern-card">

              <div className="erp-modern-icon">
                <i className="bi bi-database"></i>
              </div>

              <h3>Centralized Data</h3>

              <p>
                Keep business information organized in one platform.
              </p>

            </div>


            <div className="erp-modern-card">

              <div className="erp-modern-icon">
                <i className="bi bi-bar-chart-line"></i>
              </div>

              <h3>Dashboards & Reports</h3>

              <p>
                Turn operational data into useful business insights.
              </p>

            </div>


            <div className="erp-modern-card">

              <div className="erp-modern-icon">
                <i className="bi bi-diagram-3"></i>
              </div>

              <h3>Scalable Architecture</h3>

              <p>
                Build on a technology foundation designed to support
                future business growth.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PLATFORM GROWS WITH BUSINESS
      ========================================================= */}
      <section className="erp-scale-section">

        <div className="container">

          <div className="erp-section-heading center">

            <div className="erp-section-label">
              <span></span>
              SCALE WITH YOUR BUSINESS
            </div>

            <h2>
              A Platform That Grows
              <strong> With Your Business</strong>
            </h2>

            <p>
              Your business does not stay the same as it grows.
            </p>

            <p>
              <strong>Your ERP shouldn't either.</strong>
            </p>

            <p>
              Start with the modules your business needs today and
              expand as your operational requirements grow.
            </p>

          </div>


          <div className="erp-timeline">

            {/* TODAY */}
            <div className="erp-scale-column">

              <div className="erp-scale-title">
                <span>01</span>
                TODAY
              </div>

              <div className="erp-scale-list">

                <span>HRM</span>
                <span>Attendance</span>
                <span>Leave</span>
                <span>Payroll</span>
                <span>Marketing CRM</span>
                <span>Procurement</span>
                <span>Inventory</span>

              </div>

            </div>


            <div className="erp-scale-middle">

              <div className="erp-scale-line"></div>

              <div className="erp-scale-arrow">
                <i className="bi bi-arrow-right"></i>
              </div>

              <div className="erp-scale-line"></div>

            </div>


            {/* TOMORROW */}
            <div className="erp-scale-column">

              <div className="erp-scale-title">
                <span>02</span>
                TOMORROW
              </div>

              <div className="erp-scale-list">

                <span>Sales</span>
                <span>Finance</span>
                <span>Advanced Reporting</span>
                <span>Additional Business Workflows</span>

              </div>

            </div>

          </div>


          <div className="erp-scale-note">
            <i className="bi bi-plus-circle"></i>

            <p>
              New capabilities can be introduced as your business
              requirements evolve.
            </p>
          </div>

        </div>

      </section>


      {/* =========================================================
          WHY ONE SOLUTION ERP
      ========================================================= */}
      <section className="erp-why-section">

        <div className="container">

          <div className="erp-section-heading center">

            <div className="erp-section-label">
              <span></span>
              WHY ONE SOLUTION ERP?
            </div>

            <h2>
              One ERP.
              <strong> Multiple Business Advantages.</strong>
            </h2>

          </div>


          <div className="erp-why-grid">

            <div className="erp-why-card">

              <div className="erp-why-number">
                01
              </div>

              <h3>
                One Platform
              </h3>

              <p>
                Bring multiple business functions together.
              </p>

            </div>


            <div className="erp-why-card">

              <div className="erp-why-number">
                02
              </div>

              <h3>
                One Connected Ecosystem
              </h3>

              <p>
                Connect employees, customers, procurement and operations.
              </p>

            </div>


            <div className="erp-why-card">

              <div className="erp-why-number">
                03
              </div>

              <h3>
                One Source of Truth
              </h3>

              <p>
                Reduce fragmented business information.
              </p>

            </div>


            <div className="erp-why-card">

              <div className="erp-why-number">
                04
              </div>

              <h3>
                One Technology Partner
              </h3>

              <p>
                Get ERP, software development, website development
                and IT solutions from one technology partner.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="erp-final-cta">

        <div className="container">

          <div className="erp-final-box">

            <div className="erp-final-content">

              <div className="erp-final-label">
                ONE SOLUTION ERP
              </div>

              <h2>
                Ready to Simplify
                <br />
                Your Business Operations?
              </h2>

              <p>
                Discover how One Solution ERP can fit into your business.
                Whether you are looking to modernize HR operations,
                improve procurement processes, manage customer relationships
                or connect your business workflows, our team can help you
                identify the right solution.
              </p>

              <div className="erp-final-buttons">

                <Link
                  to="/contact"
                  className="erp-final-primary"
                >
                  Request a Product Demo
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link
                  to="/contact"
                  className="erp-final-secondary"
                >
                  Talk to Our ERP Team
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ERP FOOTER STRIP
      ========================================================= */}
      <section className="erp-bottom-strip">

        <div className="container">

          <div className="erp-bottom-content">

            <div>

              <h3>
                One Solution ERP
              </h3>

              <p>
                One Platform. Complete Business Management.
              </p>

            </div>


            <div className="erp-bottom-modules">

              <span>HRM</span>
              <span>Attendance</span>
              <span>Leave</span>
              <span>Payroll</span>
              <span>CRM</span>
              <span>Procurement</span>
              <span>Inventory</span>

            </div>


            <Link
              to="/contact"
              className="erp-bottom-button"
            >
              Request a Demo
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ProjectDetailsCenter1;