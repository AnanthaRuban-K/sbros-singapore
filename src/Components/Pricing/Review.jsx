import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ClipboardCheck,
  PhoneCall,
  FileText,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const Review = () => {
  const navigate = useNavigate();

  return (
    <section className="review-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="review-header">

        <h1>
          Final Your Review
        </h1>

        <p>
          Tell us about your business and requirements. Our experts will
          create a tailored ERP solution and proposal for you.
        </p>

      </div>


      {/* =====================================================
          5 STEP PROGRESS
      ===================================================== */}

      <div className="steps">

        {/* STEP 1 - COMPLETED */}

        <div className="step completed">

          <span>✓</span>

          <strong>
            Your Details
          </strong>

        </div>


        <div className="step-line active"></div>


        {/* STEP 2 - COMPLETED */}

        <div className="step completed">

          <span>✓</span>

          <strong>
            Requirements
          </strong>

        </div>


        <div className="step-line active"></div>


        {/* STEP 3 - COMPLETED */}

        <div className="step completed">

          <span>✓</span>

          <strong>
            Additional Information
          </strong>

        </div>


        <div className="step-line active"></div>


        {/* STEP 4 - ACTIVE */}

        <div className="step active">

          <span>4</span>

          <strong>
            Review
          </strong>

        </div>


        <div className="step-line"></div>


        {/* STEP 5 */}

        <div className="step">

          <span>5</span>

          <strong>
            Submit
          </strong>

        </div>

      </div>


      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="review-layout">


        {/* ===================================================
            LEFT
        =================================================== */}

        <div className="review-left">

          <div className="review-main-card">


            {/* =================================================
                TITLE
            ================================================= */}

            <h2>
              4. Review Your Information
            </h2>

            <p className="review-intro">
              Please review your information before submitting.
            </p>


            {/* =================================================
                TOP GRID
            ================================================= */}

            <div className="review-top-grid">


              {/* ================= BUSINESS DETAILS ================= */}

              <div className="review-info-box">

                <h3>
                  Business Details
                </h3>

                <div className="review-details">


                  <div className="review-detail-row">

                    <span>
                      Company Name
                    </span>

                    <strong>
                      ABC Manufacturing Pte Ltd
                    </strong>

                  </div>


                  <div className="review-detail-row">

                    <span>
                      Contact Person
                    </span>

                    <strong>
                      John Doe
                    </strong>

                  </div>


                  <div className="review-detail-row">

                    <span>
                      Work Email
                    </span>

                    <strong>
                      john.doe@abc.com
                    </strong>

                  </div>


                  <div className="review-detail-row">

                    <span>
                      Phone Number
                    </span>

                    <strong>
                      +65 9123 4567
                    </strong>

                  </div>


                  <div className="review-detail-row">

                    <span>
                      Industry
                    </span>

                    <strong>
                      Manufacturing
                    </strong>

                  </div>


                  <div className="review-detail-row">

                    <span>
                      Country
                    </span>

                    <strong>
                      Singapore
                    </strong>

                  </div>


                  <div className="review-detail-row">

                    <span>
                      Number of Employees
                    </span>

                    <strong>
                      101 - 250
                    </strong>

                  </div>


                  <div className="review-detail-row">

                    <span>
                      Preferred Contact
                    </span>

                    <strong>
                      Email
                    </strong>

                  </div>

                </div>

              </div>


              {/* ================= REQUIREMENTS SUMMARY ================= */}

              <div className="review-info-box">

                <h3>
                  Requirements Summary
                </h3>


                <div className="review-summary">

                  <div className="review-summary-title">
                    Selected Modules (6)
                  </div>


                  <ul className="review-module-list">

                    <li>
                      HRM
                    </li>

                    <li>
                      Attendance
                    </li>

                    <li>
                      Leave Management
                    </li>

                    <li>
                      Payroll
                    </li>

                    <li>
                      Recruitment
                    </li>

                    <li>
                      Finance & Accounting
                    </li>

                  </ul>


                  <div className="review-summary-section">

                    <strong>
                      Specific Requirements
                    </strong>

                    <p>
                      Custom approval workflow and integration with
                      existing system.
                    </p>

                  </div>


                  <div className="review-summary-section">

                    <strong>
                      Additional Notes
                    </strong>

                    <p>
                      Need mobile app access for field employees.
                      Integration with biometric devices required.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                ADDITIONAL INFORMATION
            ================================================= */}

            <div className="review-additional-box">

              <h3>
                Additional Information
              </h3>


              <div className="review-additional-grid">


                <div>

                  <span>
                    Employees (Approx.)
                  </span>

                  <strong>
                    101 - 250
                  </strong>

                </div>


                <div>

                  <span>
                    Current ERP System
                  </span>

                  <strong>
                    SAP Business One
                  </strong>

                </div>


                <div>

                  <span>
                    Annual Budget Range
                  </span>

                  <strong>
                    $50,000 - $100,000
                  </strong>

                </div>


                <div>

                  <span>
                    Preferred Go-Live Date
                  </span>

                  <strong>
                    01 Mar 2026
                  </strong>

                </div>


                <div>

                  <span>
                    Implementation Timeline
                  </span>

                  <strong>
                    3 - 6 months
                  </strong>

                </div>


                <div>

                  <span>
                    Decision Maker
                  </span>

                  <strong>
                    John Doe, Finance Manager
                  </strong>

                </div>

              </div>

            </div>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="review-buttons">


              {/* BACK */}

              <button
                type="button"
                className="review-back-btn"
                onClick={() =>
                  navigate("/additional-information")
                }
              >

                <span>
                  ←
                </span>

                Back

              </button>


              {/* SUBMIT */}

              <button
                type="button"
                className="review-submit-btn"
                onClick={() =>
                  navigate("/submitted")
                }
              >

                Submit Proposal Request

                <span>
                  →
                </span>

              </button>

            </div>

          </div>

        </div>


{/* ===================================================
    RIGHT SIDEBAR
=================================================== */}

<div className="review-right">

  <div className="review-side-card">

    <h3>
      What happens next?
    </h3>


    {/* ================= STEP 1 ================= */}

    <div className="review-step">

      <div className="review-step-icon">
        <ClipboardCheck size={20} strokeWidth={2} />
      </div>

      <div>
        <strong>
          We will review your requirements
        </strong>

        <p>
          Our team will analyze your needs
        </p>
      </div>

    </div>


    {/* ================= STEP 2 ================= */}

    <div className="review-step">

      <div className="review-step-icon">
        <PhoneCall size={20} strokeWidth={2} />
      </div>

      <div>
        <strong>
          We will contact you
        </strong>

        <p>
          Our experts will reach out to discuss in detail
        </p>
      </div>

    </div>


    {/* ================= STEP 3 ================= */}

    <div className="review-step">

      <div className="review-step-icon">
        <FileText size={20} strokeWidth={2} />
      </div>

      <div>
        <strong>
          We will prepare your custom proposal
        </strong>

        <p>
          Tailored solution with best pricing
        </p>
      </div>

    </div>


    {/* ================= STEP 4 ================= */}

    <div className="review-step">

      <div className="review-step-icon">
        <CheckCircle2 size={20} strokeWidth={2} />
      </div>

      <div>
        <strong>
          You make the best decision
        </strong>

        <p>
          Choose the plan that helps your business grow
        </p>
      </div>

    </div>


    {/* =================================================
        SECURITY
    ================================================= */}

    <div className="review-security">

      <span>
        <ShieldCheck size={21} strokeWidth={2} />
      </span>

      <p>
        Your information is 100% secure and will
        never be shared.
      </p>

    </div>

  </div>

</div>


      </div>

    </section>
  );
};

export default Review;