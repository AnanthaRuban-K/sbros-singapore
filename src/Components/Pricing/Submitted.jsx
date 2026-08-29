import React from "react";
import { Link } from "react-router-dom";

const Submitted = () => {
  return (
    <div className="submitted-page">

      {/* ================= HEADER ================= */}
      <div className="submitted-header">
        <h1>Request a Custom Plan Proposal</h1>
        <p>
          Tell us about your business and requirements. Our experts will
          create a tailored ERP solution and proposal for you.
        </p>
      </div>

      {/* ================= PROGRESS ================= */}
      <div className="submitted-progress">

        <div className="submitted-progress-item completed">
          <div className="submitted-progress-icon">✓</div>
          <span>1. Business Details</span>
        </div>

        <div className="submitted-progress-line active"></div>

        <div className="submitted-progress-item completed">
          <div className="submitted-progress-icon">✓</div>
          <span>2. Requirements</span>
        </div>

        <div className="submitted-progress-line active"></div>

        <div className="submitted-progress-item completed">
          <div className="submitted-progress-icon">✓</div>
          <span>3. Additional Information</span>
        </div>

        <div className="submitted-progress-line active"></div>

        <div className="submitted-progress-item completed">
          <div className="submitted-progress-icon">✓</div>
          <span>4. Review</span>
        </div>

        <div className="submitted-progress-line active"></div>

        <div className="submitted-progress-item active">
          <div className="submitted-progress-icon">✓</div>
          <span>5. Submitted</span>
        </div>

      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="submitted-layout">

        {/* ================= LEFT ================= */}
        <div className="submitted-main-card">

          {/* SUCCESS */}
          <div className="submitted-success">

            <div className="submitted-success-icon">
              ✓
            </div>

            <h2>Thank You!</h2>

            <h3>Your Proposal Request Has Been Submitted</h3>

            <p>
              We have received your information and our team will get back
              to you soon.
            </p>

            <small>
              A confirmation email has been sent to{" "}
              <strong>john.doe@abc.com</strong>
            </small>

          </div>

          {/* DIVIDER */}
          <div className="submitted-divider"></div>

          {/* WHAT HAPPENS NEXT */}
          <div className="submitted-next">

            <h3>What happens next?</h3>

            <div className="submitted-next-grid">

              <div className="submitted-next-item">
                <div className="submitted-next-icon">✓</div>
                <strong>1. Review</strong>
                <p>
                  Our team will review your requirements.
                </p>
              </div>

              <div className="submitted-next-item">
                <div className="submitted-next-icon">✉</div>
                <strong>2. Contact</strong>
                <p>
                  We will contact you within 1 business day.
                </p>
              </div>

              <div className="submitted-next-item">
                <div className="submitted-next-icon">▣</div>
                <strong>3. Proposal</strong>
                <p>
                  Custom proposal will be prepared for you.
                </p>
              </div>

              <div className="submitted-next-item">
                <div className="submitted-next-icon">◌</div>
                <strong>4. Discussion</strong>
                <p>
                  Let's discuss and find the best solution for you.
                </p>
              </div>

            </div>

          </div>

          {/* BUTTONS */}
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

        {/* ================= RIGHT CARD ================= */}
        <div className="submitted-side-card">

          <h3>What happens next?</h3>

          <div className="submitted-step">
            <div className="submitted-step-icon">♧</div>

            <div>
              <strong>We will review your requirements</strong>
              <p>Our team will analyze your needs.</p>
            </div>
          </div>

          <div className="submitted-step">
            <div className="submitted-step-icon">♧</div>

            <div>
              <strong>We will contact you</strong>
              <p>Our experts will reach out to discuss in detail.</p>
            </div>
          </div>

          <div className="submitted-step">
            <div className="submitted-step-icon">▣</div>

            <div>
              <strong>We will prepare your custom proposal</strong>
              <p>Tailored solution with best pricing.</p>
            </div>
          </div>

          <div className="submitted-step">
            <div className="submitted-step-icon">✓</div>

            <div>
              <strong>You make the best decision</strong>
              <p>Choose the plan that helps your business grow.</p>
            </div>
          </div>

          <div className="submitted-security">
            <span>♡</span>
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