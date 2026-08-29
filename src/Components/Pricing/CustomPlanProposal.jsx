import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomPlanProposal = () => {
  const navigate = useNavigate();

  const [contactMethod, setContactMethod] = useState("email");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Browser required validation already checks all required fields
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Save data if needed
    const formData = new FormData(form);

    const proposalData = {
      fullName: formData.get("fullName"),
      workEmail: formData.get("workEmail"),
      phone: formData.get("phone"),
      countryCode: formData.get("countryCode"),
      companyName: formData.get("companyName"),
      industry: formData.get("industry"),
      country: formData.get("country"),
      employees: formData.get("employees"),
      contactMethod: contactMethod,
      businessOverview: formData.get("businessOverview"),
    };

    // Save for next pages
    localStorage.setItem(
      "customPlanProposal",
      JSON.stringify(proposalData)
    );

    // Go to next page
    navigate("/requirements");
  };

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


      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit}>

        <div className="cpp-layout">

          {/* ================= LEFT ================= */}
          <div className="cpp-left">

            {/* BUSINESS DETAILS */}
            <div className="cpp-card">

              <h2>1. Business Details</h2>

              <div className="cpp-form-grid">

                {/* FULL NAME */}
                <div className="cpp-field">
                  <label>
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>


                {/* EMAIL */}
                <div className="cpp-field">
                  <label>
                    Work Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    name="workEmail"
                    placeholder="Enter your work email"
                    required
                  />
                </div>


                {/* PHONE */}
                <div className="cpp-field">

                  <label>
                    Phone Number <span>*</span>
                  </label>

                  <div className="cpp-phone">

                    <select
                      name="countryCode"
                      required
                    >
                      {/* <option value="">Code</option> */}
                      <option value="+65">+65</option>
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                    />

                  </div>

                </div>


                {/* COMPANY */}
                <div className="cpp-field">

                  <label>
                    Company Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="companyName"
                    placeholder="Enter your company name"
                    required
                  />

                </div>


                {/* INDUSTRY */}
                <div className="cpp-field">

                  <label>
                    Industry <span>*</span>
                  </label>

                  <select
                    name="industry"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>

                    <option value="Manufacturing">
                      Manufacturing
                    </option>

                    <option value="Retail">
                      Retail
                    </option>

                    <option value="Healthcare">
                      Healthcare
                    </option>

                    <option value="Education">
                      Education
                    </option>

                    <option value="Hospitality">
                      Hospitality
                    </option>

                    <option value="Construction">
                      Construction
                    </option>

                    <option value="Technology">
                      Technology
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* COUNTRY */}
                <div className="cpp-field">

                  <label>
                    Country <span>*</span>
                  </label>

                  <select
                    name="country"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select your country
                    </option>

                    <option value="Singapore">
                      Singapore
                    </option>

                    <option value="India">
                      India
                    </option>

                    <option value="Malaysia">
                      Malaysia
                    </option>

                    <option value="United States">
                      United States
                    </option>

                    <option value="United Kingdom">
                      United Kingdom
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* EMPLOYEES */}
                <div className="cpp-field">

                  <label>
                    Number of Employees <span>*</span>
                  </label>

                  <select
                    name="employees"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select range
                    </option>

                    <option value="1 - 10">
                      1 - 10
                    </option>

                    <option value="11 - 50">
                      11 - 50
                    </option>

                    <option value="51 - 100">
                      51 - 100
                    </option>

                    <option value="101 - 500">
                      101 - 500
                    </option>

                    <option value="500+">
                      500+
                    </option>

                  </select>

                </div>


                {/* CONTACT METHOD */}
                <div className="cpp-field cpp-contact-field">

                  <label>
                    Preferred Contact Method
                  </label>

                  <div className="cpp-contact-options">

                    <button
                      type="button"
                      className={
                        contactMethod === "phone"
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setContactMethod("phone")
                      }
                    >
                      ☎
                      <span>Phone</span>
                    </button>


                    <button
                      type="button"
                      className={
                        contactMethod === "email"
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setContactMethod("email")
                      }
                    >
                      ◉
                      <span>Email</span>
                    </button>


                    <button
                      type="button"
                      className={
                        contactMethod === "whatsapp"
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setContactMethod("whatsapp")
                      }
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
                  name="businessOverview"
                  maxLength="500"
                  placeholder="Write about your business..."
                  required
                ></textarea>

                <span>0/500</span>

              </div>


              {/* CONTINUE BUTTON */}
              <button
                type="submit"
                className="cpp-continue-btn"
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
                  <strong>
                    We will review your requirements
                  </strong>

                  <p>
                    Our team will analyze your needs
                  </p>
                </div>

              </div>


              <div className="cpp-step">

                <div className="cpp-step-icon">♧</div>

                <div>
                  <strong>
                    We will contact you
                  </strong>

                  <p>
                    Our experts will reach out to discuss in detail
                  </p>
                </div>

              </div>


              <div className="cpp-step">

                <div className="cpp-step-icon">▣</div>

                <div>
                  <strong>
                    We will prepare your custom proposal
                  </strong>

                  <p>
                    Tailored solution with best pricing
                  </p>
                </div>

              </div>


              <div className="cpp-step">

                <div className="cpp-step-icon">♧</div>

                <div>
                  <strong>
                    You make the best decision
                  </strong>

                  <p>
                    Choose the plan that helps your business grow
                  </p>
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

      </form>


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