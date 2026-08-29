import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomPlanProposal = () => {
  const navigate = useNavigate();

  const [contactMethod, setContactMethod] = useState("email");

  return (
    <section className="cpp-page">

      {/* ================= HEADER ================= */}
      <div className="cpp-header">

       
        <h1>Request a Custom Plan Proposal</h1>

        <p>
          Tell us about your business and requirements. Our experts will
          create a tailored ERP solution and proposal for you.
        </p>

      </div>


      {/* ================= PROGRESS ================= */}
      <div className="cpp-progress">

        <div className="cpp-progress-item active">
          <div className="cpp-progress-icon">▦</div>
          <span>1. Business Details</span>
        </div>

        <div className="cpp-progress-line"></div>

        <div className="cpp-progress-item">
          <div className="cpp-progress-icon">▣</div>
          <span>2. Requirements</span>
        </div>

        <div className="cpp-progress-line"></div>

        <div className="cpp-progress-item">
          <div className="cpp-progress-icon">♧</div>
          <span>3. Additional Information</span>
        </div>

        <div className="cpp-progress-line"></div>

        <div className="cpp-progress-item">
          <div className="cpp-progress-icon">✓</div>
          <span>4. Review</span>
        </div>

        <div className="cpp-progress-line"></div>

        <div className="cpp-progress-item">
          <div className="cpp-progress-icon">✓</div>
          <span>5. Submitted</span>
        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="cpp-layout">

        {/* ================= LEFT ================= */}
        <div className="cpp-left">

          {/* BUSINESS DETAILS */}
          <div className="cpp-card">

            <h2>1. Business Details</h2>

            <div className="cpp-form-grid">

              <div className="cpp-field">
                <label>
                  Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="cpp-field">
                <label>
                  Work Email <span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your work email"
                />
              </div>


              <div className="cpp-field">
                <label>
                  Phone Number <span>*</span>
                </label>

                <div className="cpp-phone">
                  <select>
                    <option>+65</option>
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>


              <div className="cpp-field">
                <label>
                  Company Name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                />
              </div>


              <div className="cpp-field">
                <label>
                  Industry <span>*</span>
                </label>

                <select>
                  <option>Select your industry</option>
                  <option>Manufacturing</option>
                  <option>Retail</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Hospitality</option>
                  <option>Construction</option>
                  <option>Technology</option>
                  <option>Other</option>
                </select>
              </div>


              <div className="cpp-field">
                <label>
                  Country <span>*</span>
                </label>

                <select>
                  <option>Select your country</option>
                  <option>Singapore</option>
                  <option>India</option>
                  <option>Malaysia</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </div>


              <div className="cpp-field">
                <label>
                  Number of Employees <span>*</span>
                </label>

                <select>
                  <option>Select range</option>
                  <option>1 - 10</option>
                  <option>11 - 50</option>
                  <option>51 - 100</option>
                  <option>101 - 500</option>
                  <option>500+</option>
                </select>
              </div>


              <div className="cpp-field cpp-contact-field">

                <label>
                  Preferred Contact Method
                </label>

                <div className="cpp-contact-options">

                  <button
                    type="button"
                    className={
                      contactMethod === "phone" ? "selected" : ""
                    }
                    onClick={() => setContactMethod("phone")}
                  >
                    ☎
                    <span>Phone</span>
                  </button>

                  <button
                    type="button"
                    className={
                      contactMethod === "email" ? "selected" : ""
                    }
                    onClick={() => setContactMethod("email")}
                  >
                    ◉
                    <span>Email</span>
                  </button>

                  <button
                    type="button"
                    className={
                      contactMethod === "whatsapp" ? "selected" : ""
                    }
                    onClick={() => setContactMethod("whatsapp")}
                  >
                    ○
                    <span>WhatsApp</span>
                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* BUSINESS OVERVIEW */}
          <div className="cpp-card cpp-overview">

            <h2>2. Business Overview</h2>

            <p className="cpp-label">
              Briefly describe your business and what you do.
            </p>

            <div className="cpp-textarea-wrapper">

              <textarea
                maxLength="500"
                placeholder="Write about your business..."
              ></textarea>

              <span>0/500</span>

            </div>

           <button
  type="button"
  className="cpp-continue-btn"
  onClick={() => navigate("/requirements")}
>
  Save & Continue
  <span>→</span>
</button>

          </div>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="cpp-right">

          {/* CUSTOM PLAN */}
          <div className="cpp-side-card">

            <h3>Custom Plan Includes</h3>

            <ul>

              <li>
                <span>✓</span>
                All core ERP modules
              </li>

              <li>
                <span>✓</span>
                Customized modules as per your needs
              </li>

              <li>
                <span>✓</span>
                Custom integrations
              </li>

              <li>
                <span>✓</span>
                Advanced permissions & workflows
              </li>

              <li>
                <span>✓</span>
                Dedicated support
              </li>

              <li>
                <span>✓</span>
                SLA & priority support
              </li>

              <li>
                <span>✓</span>
                On-premise deployment option
              </li>

            </ul>

          </div>


          {/* WHAT HAPPENS NEXT */}
          <div className="cpp-side-card cpp-next-card">

            <h3>What happens next?</h3>

            <div className="cpp-step">

              <div className="cpp-step-icon">♙</div>

              <div>
                <strong>We will review your requirements</strong>
                <p>Our team will analyze your needs</p>
              </div>

            </div>


            <div className="cpp-step">

              <div className="cpp-step-icon">♧</div>

              <div>
                <strong>We will contact you</strong>
                <p>Our experts will reach out to discuss in detail</p>
              </div>

            </div>


            <div className="cpp-step">

              <div className="cpp-step-icon">▣</div>

              <div>
                <strong>We will prepare your custom proposal</strong>
                <p>Tailored solution with best pricing</p>
              </div>

            </div>


            <div className="cpp-step">

              <div className="cpp-step-icon">♧</div>

              <div>
                <strong>You make the best decision</strong>
                <p>Choose the plan that helps your business grow</p>
              </div>

            </div>


            <div className="cpp-security">

              <span>♢</span>

              <p>
                Your information is 100% secure and will
                never be shared.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM HELP ================= */}
      <div className="cpp-help">

        Need help? Talk to our sales team at{" "}
        <strong>+65 9123 4567</strong>{" "}
        or email us at{" "}
        <strong>sales@sbros.com</strong>

      </div>

    </section>
  );
};

export default CustomPlanProposal;