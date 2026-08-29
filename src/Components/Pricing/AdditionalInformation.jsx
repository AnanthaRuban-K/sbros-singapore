import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdditionalInformation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employees: "",
    budget: "",
    currentErp: "",
    goLiveDate: "",
    timeline: "",
    decisionMaker: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user fills the field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleContinue = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.employees.trim()) {
      newErrors.employees = "Please select number of employees";
    }

    if (!formData.budget.trim()) {
      newErrors.budget = "Please select your annual budget range";
    }

    // If errors exist, don't navigate
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      // Scroll to first error
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Save data temporarily
    localStorage.setItem(
      "additionalInformation",
      JSON.stringify(formData)
    );

    // Go to review page
    navigate("/review");
  };

  const handleBack = () => {
    navigate("/requirements");
  };

  return (
    <section className="additional-page">

      {/* ================= HEADER ================= */}

      <div className="additional-header">

        <h1>Request a Custom Plan Proposal</h1>

        <p>
          Tell us about your business and requirements. Our experts will
          create a tailored ERP solution and proposal for you.
        </p>

      </div>


      {/* ================= PROGRESS ================= */}

      <div className="additional-progress">

        <div className="additional-progress-item completed">
          <div className="additional-progress-icon">✓</div>
          <span>1. Business Details</span>
        </div>

        <div className="additional-progress-line active"></div>

        <div className="additional-progress-item completed">
          <div className="additional-progress-icon">✓</div>
          <span>2. Requirements</span>
        </div>

        <div className="additional-progress-line active"></div>

        <div className="additional-progress-item active">
          <div className="additional-progress-icon">▣</div>
          <span>3. Additional Information</span>
        </div>

        <div className="additional-progress-line"></div>

        <div className="additional-progress-item">
          <div className="additional-progress-icon">✓</div>
          <span>4. Review</span>
        </div>

        <div className="additional-progress-line"></div>

        <div className="additional-progress-item">
          <div className="additional-progress-icon">✓</div>
          <span>5. Submitted</span>
        </div>

      </div>


      {/* ================= MAIN LAYOUT ================= */}

      <div className="additional-layout">

        {/* ================= LEFT CARD ================= */}

        <div className="additional-left">

          <div className="additional-card">

            <h2>3. Additional Information</h2>

            <p className="additional-intro">
              Help us understand your business better.
            </p>


            {/* ================= FORM GRID ================= */}

            <div className="additional-form-grid">

              {/* Employees */}

              <div className="additional-field">

                <label>
                  Number of Employees (Approx.) <span>*</span>
                </label>

                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className={errors.employees ? "input-error" : ""}
                >
                  <option value="">Select range</option>

                  <option value="1-10">
                    1 - 10
                  </option>

                  <option value="11-50">
                    11 - 50
                  </option>

                  <option value="51-100">
                    51 - 100
                  </option>

                  <option value="101-500">
                    101 - 500
                  </option>

                  <option value="500+">
                    500+
                  </option>
                </select>

                {errors.employees && (
                  <small className="field-error">
                    {errors.employees}
                  </small>
                )}

              </div>


              {/* Budget */}

              <div className="additional-field">

                <label>
                  Annual Budget Range (USD) <span>*</span>
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={errors.budget ? "input-error" : ""}
                >
                  <option value="">
                    Select range
                  </option>

                  <option value="under-10000">
                    Under $10,000
                  </option>

                  <option value="10000-25000">
                    $10,000 - $25,000
                  </option>

                  <option value="25000-50000">
                    $25,000 - $50,000
                  </option>

                  <option value="50000-100000">
                    $50,000 - $100,000
                  </option>

                  <option value="100000+">
                    $100,000+
                  </option>
                </select>

                {errors.budget && (
                  <small className="field-error">
                    {errors.budget}
                  </small>
                )}

              </div>


              {/* Current ERP */}

              <div className="additional-field">

                <label>
                  Current ERP System (if any)
                </label>

                <select
                  name="currentErp"
                  value={formData.currentErp}
                  onChange={handleChange}
                >
                  <option value="">
                    Select your current system
                  </option>

                  <option value="sap">
                    SAP
                  </option>

                  <option value="oracle">
                    Oracle
                  </option>

                  <option value="odoo">
                    Odoo
                  </option>

                  <option value="tally">
                    Tally
                  </option>

                  <option value="zoho">
                    Zoho
                  </option>

                  <option value="other">
                    Other
                  </option>

                  <option value="none">
                    No ERP
                  </option>
                </select>

              </div>


              {/* Go Live Date */}

              <div className="additional-field">

                <label>
                  Preferred Go-Live Date
                </label>

                <input
                  type="date"
                  name="goLiveDate"
                  value={formData.goLiveDate}
                  onChange={handleChange}
                />

              </div>


              {/* Timeline */}

              <div className="additional-field">

                <label>
                  Implementation Timeline
                </label>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">
                    Select timeline
                  </option>

                  <option value="1-3-months">
                    1 - 3 Months
                  </option>

                  <option value="3-6-months">
                    3 - 6 Months
                  </option>

                  <option value="6-12-months">
                    6 - 12 Months
                  </option>

                  <option value="12-months-plus">
                    12+ Months
                  </option>

                </select>

              </div>


              {/* Decision Maker */}

              <div className="additional-field">

                <label>
                  Decision Maker / Approver
                </label>

                <input
                  type="text"
                  name="decisionMaker"
                  value={formData.decisionMaker}
                  onChange={handleChange}
                  placeholder="Enter name and designation"
                />

              </div>

            </div>


            {/* ================= ADDITIONAL NOTES ================= */}

            <div className="additional-notes">

              <label>
                Additional Notes
              </label>

              <div className="additional-textarea-wrapper">

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  maxLength={500}
                  placeholder="Any other information that will help us understand your requirements..."
                ></textarea>

                <span>
                  {formData.notes.length}/500
                </span>

              </div>

            </div>


            {/* ================= BUTTONS ================= */}

            <div className="additional-buttons">

              <button
                type="button"
                className="additional-back-btn"
                onClick={handleBack}
              >
                <span>←</span>
                Back
              </button>

              <button
                type="button"
                className="additional-continue-btn"
                onClick={handleContinue}
              >
                Save & Continue
                <span>→</span>
              </button>

            </div>

          </div>

        </div>


        {/* ================= RIGHT ================= */}

        <div className="additional-right">

          <div className="additional-side-card">

            <h3>What happens next?</h3>


            {/* Step 1 */}

            <div className="additional-step">

              <div className="additional-step-icon">
                ✓
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


            {/* Step 2 */}

            <div className="additional-step">

              <div className="additional-step-icon">
                ☎
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


            {/* Step 3 */}

            <div className="additional-step">

              <div className="additional-step-icon">
                ▣
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


            {/* Step 4 */}

            <div className="additional-step">

              <div className="additional-step-icon">
                ✓
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


            {/* Security */}

            <div className="additional-security">

              <span>♢</span>

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

export default AdditionalInformation;