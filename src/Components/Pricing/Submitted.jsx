import React from "react";
import { Link } from "react-router-dom";

const Submitted = () => {
  return (
    <div className="submitted-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="submitted-header">

        <h1>
          Submit Request
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


        {/* STEP 4 - COMPLETED */}

        <div className="step completed">

          <span>✓</span>

          <strong>
            Review
          </strong>

        </div>


        <div className="step-line active"></div>


        {/* STEP 5 - ACTIVE / COMPLETED */}

        <div className="step active completed">

          <span>✓</span>

          <strong>
            Submit
          </strong>

        </div>

      </div>


      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="submitted-layout">


        {/* ===================================================
            LEFT MAIN CARD
        =================================================== */}

        <div className="submitted-main-card">


          {/* ================= SUCCESS ================= */}

          <div className="submitted-success">

            <div className="submitted-success-icon">
              ✓
            </div>

            <h2>
              Thank You!
            </h2>

            <h3>
              Your Proposal Request Has Been Submitted
            </h3>

            <p>
              We have received your information and our team will get back
              to you soon.
            </p>

            <small>
              A confirmation email has been sent to{" "}
              <strong>
                john.doe@abc.com
              </strong>
            </small>

          </div>


          {/* ================= DIVIDER ================= */}

          <div className="submitted-divider"></div>


          {/* ================= WHAT HAPPENS NEXT ================= */}

          <div className="submitted-next">

            <h3>
              What happens next?
            </h3>


            <div className="submitted-next-grid">


              {/* STEP 1 */}
{/* ================= STEP 1 - REVIEW ================= */}

<div className="submitted-next-item">

  <div className="submitted-next-icon">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 11l3 3L20 6" />
      <path d="M20 12v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9" />
    </svg>
  </div>

  <strong>
    1. Review
  </strong>

  <p>
    Our team will review your requirements.
  </p>

</div>


{/* ================= STEP 2 - CONTACT ================= */}

<div className="submitted-next-item">

  <div className="submitted-next-icon">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2
        19.79 19.79 0 0 1-8.63-3.07
        19.5 19.5 0 0 1-6-6
        A19.79 19.79 0 0 1 2.12 4.18
        2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
        12.84 12.84 0 0 0 .7 2.81
        2 2 0 0 1-.45 2.11L8.09 9.91
        a16 16 0 0 0 6 6l1.27-1.27
        a2 2 0 0 1 2.11-.45
        12.84 12.84 0 0 0 2.81.7
        A2 2 0 0 1 22 16.92z" />
    </svg>
  </div>

  <strong>
    2. Contact
  </strong>

  <p>
    We will contact you within 1 business day.
  </p>

</div>


{/* ================= STEP 3 - PROPOSAL ================= */}

<div className="submitted-next-item">

  <div className="submitted-next-icon">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16
        a2 2 0 0 0 2 2h12
        a2 2 0 0 0 2-2V8z" />

      <path d="M14 2v6h6" />

      <path d="M8 13h8" />
      <path d="M8 17h6" />
      <path d="M8 9h2" />
    </svg>
  </div>

  <strong>
    3. Proposal
  </strong>

  <p>
    Custom proposal will be prepared for you.
  </p>

</div>


{/* ================= STEP 4 - DISCUSSION ================= */}

<div className="submitted-next-item">

  <div className="submitted-next-icon">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5
        9.6 9.6 0 0 1-4-.8L3 21l1.8-4.2
        A8.38 8.38 0 0 1 3 11.5
        8.5 8.5 0 0 1 12 3
        a8.38 8.38 0 0 1 9 8.5z" />

      <path d="M8 11h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
    </svg>
  </div>

  <strong>
    4. Discussion
  </strong>

  <p>
    Let's discuss and find the best solution for you.
  </p>

</div>

              

            </div>

          </div>


          {/* ================= BUTTONS ================= */}

          <div className="submitted-buttons">


            <Link
              to="/Pricing"
              className="submitted-back-btn"
            >
              ← &nbsp; Back to Plans
            </Link>


            <Link
              to="/"
              className="submitted-home-btn"
            >
              Go to Home
            </Link>

          </div>

        </div>

{/* ===================================================
    RIGHT CARD
=================================================== */}

<div className="submitted-side-card">

  <h3>
    What happens next?
  </h3>


  {/* ================= SIDE STEP 1 ================= */}

  <div className="submitted-step">

    <div className="submitted-step-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 11l3 3L20 6" />
        <path d="M20 12v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9" />
      </svg>
    </div>

    <div>
      <strong>
        We will review your requirements
      </strong>

      <p>
        Our team will analyze your needs.
      </p>
    </div>

  </div>


  {/* ================= SIDE STEP 2 ================= */}

  <div className="submitted-step">

    <div className="submitted-step-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2
          19.79 19.79 0 0 1-8.63-3.07
          19.5 19.5 0 0 1-6-6
          A19.79 19.79 0 0 1 2.12 4.18
          2 2 0 0 1 4.11 2h3
          a2 2 0 0 1 2 1.72
          12.84 12.84 0 0 0 .7 2.81
          2 2 0 0 1-.45 2.11L8.09 9.91
          a16 16 0 0 0 6 6l1.27-1.27
          a2 2 0 0 1 2.11-.45
          12.84 12.84 0 0 0 2.81.7
          A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>

    <div>
      <strong>
        We will contact you
      </strong>

      <p>
        Our experts will reach out to discuss in detail.
      </p>
    </div>

  </div>


  {/* ================= SIDE STEP 3 ================= */}

  <div className="submitted-step">

    <div className="submitted-step-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16
          a2 2 0 0 0 2 2h12
          a2 2 0 0 0 2-2V8z" />

        <path d="M14 2v6h6" />

        <path d="M8 13h8" />
        <path d="M8 17h6" />
        <path d="M8 9h2" />
      </svg>
    </div>

    <div>
      <strong>
        We will prepare your custom proposal
      </strong>

      <p>
        Tailored solution with best pricing.
      </p>
    </div>

  </div>


  {/* ================= SIDE STEP 4 ================= */}

  <div className="submitted-step">

    <div className="submitted-step-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12 2.3 2.3 4.8-5" />
      </svg>
    </div>

    <div>
      <strong>
        You make the best decision
      </strong>

      <p>
        Choose the plan that helps your business grow.
      </p>
    </div>

  </div>


  {/* ================= SECURITY ================= */}

  <div className="submitted-security">

    <span className="submitted-security-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 19 6v5
          c0 5-3 8.5-7 10
          -4-1.5-7-5-7-10V6l7-3Z" />

        <path d="m9 12 2 2 4-4" />
      </svg>
    </span>

    <p>
      Your information is 100% secure and will never be shared.
    </p>

  </div>

</div>
      </div>

    </div>
  );
};

export default Submitted;