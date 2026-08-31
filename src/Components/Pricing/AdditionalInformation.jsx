
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  PhoneCall,
  FileText,
  CircleCheck,
  ShieldCheck,
} from "lucide-react";

const AdditionalInformation = () => {
  const navigate = useNavigate();

  /* =========================================================
     STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    budget: "",
    currentErp: "",
    goLiveDate: "",
    timeline: "",
    decisionMaker: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});


  /* =========================================================
     LOAD SAVED DATA
  ========================================================= */

  useEffect(() => {
    try {
      const savedData = JSON.parse(
        localStorage.getItem("additionalInformation") || "{}"
      );

      if (savedData && typeof savedData === "object") {
        setFormData((prev) => ({
          ...prev,
          ...savedData,
        }));
      }
    } catch (error) {
      console.error(
        "Unable to load additional information:",
        error
      );
    }
  }, []);


  /* =========================================================
     HANDLE CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };


  /* =========================================================
     CONTINUE
  ========================================================= */

  const handleContinue = () => {
    const newErrors = {};

    /* =========================================
       BUDGET REQUIRED
    ========================================= */

    if (!formData.budget.trim()) {
      newErrors.budget =
        "Please select your annual budget range";
    }


    /* =========================================
       VALIDATION ERROR
    ========================================= */

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }


    /* =========================================
       SAVE ADDITIONAL INFORMATION
    ========================================= */

    localStorage.setItem(
      "additionalInformation",
      JSON.stringify(formData)
    );


    /* =========================================
       GO TO REVIEW
    ========================================= */

    navigate("/review");
  };


  /* =========================================================
     BACK
  ========================================================= */

  const handleBack = () => {
    /*
      Data is already saved in localStorage.

      When the user comes back to this page,
      useEffect() will automatically load the
      previously entered values.
    */

    navigate("/requirements");
  };


  /* =========================================================
     JSX
  ========================================================= */

  return (
    <section className="additional-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="additional-header">

        <h1>
          Additional Business Information
        </h1>

        <p>
          Tell us about your business and requirements.
          Our experts will create a tailored ERP solution
          and proposal for you.
        </p>

      </div>


      {/* =====================================================
          5 STEP PROGRESS
      ===================================================== */}

      <div className="steps">

        {/* STEP 1 */}

        <div className="step completed">

          <span>✓</span>

          <strong>
            Your Details
          </strong>

        </div>


        <div className="step-line active"></div>


        {/* STEP 2 */}

        <div className="step completed">

          <span>✓</span>

          <strong>
            Requirements
          </strong>

        </div>


        <div className="step-line active"></div>


        {/* STEP 3 */}

        <div className="step active">

          <span>3</span>

          <strong>
            Additional Information
          </strong>

        </div>


        <div className="step-line"></div>


        {/* STEP 4 */}

        <div className="step">

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

      <div className="additional-layout">


        {/* ===================================================
            LEFT CARD
        =================================================== */}

        <div className="additional-left">

          <div className="additional-card">


            {/* TITLE */}

            <h2>
              3. Additional Information
            </h2>

            <p className="additional-intro">
              Help us understand your business better.
            </p>


            {/* =================================================
                FORM GRID
            ================================================= */}

            <div className="additional-form-grid">


              {/* ================= BUDGET ================= */}

              <div className="additional-field">

                <label>
                  Annual Budget Range (USD){" "}
                  <span>*</span>
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={
                    errors.budget
                      ? "input-error"
                      : ""
                  }
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


              {/* ================= CURRENT ERP ================= */}

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


              {/* ================= GO LIVE DATE ================= */}

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


              {/* ================= TIMELINE ================= */}

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


              {/* ================= DECISION MAKER ================= */}

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


            {/* =================================================
                ADDITIONAL NOTES
            ================================================= */}

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
                />

                <span>
                  {formData.notes.length}/500
                </span>

              </div>

            </div>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="additional-buttons">


              {/* BACK */}

              <button
                type="button"
                className="additional-back-btn"
                onClick={handleBack}
              >

                <span>
                  ←
                </span>

                Back

              </button>


              {/* CONTINUE */}

              <button
                type="button"
                className="additional-continue-btn"
                onClick={handleContinue}
              >

                Save & Continue

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

        <div className="additional-right">

          <div className="additional-side-card">

            <h3>
              What happens next?
            </h3>


            {/* STEP 1 */}

            <div className="additional-step">

              <div className="additional-step-icon">

                <CheckCircle2
                  size={22}
                  strokeWidth={2.2}
                />

              </div>

              <div className="additional-step-content">

                <strong>
                  We will review your requirements
                </strong>

                <p>
                  Our team will analyze your needs
                </p>

              </div>

            </div>


            {/* STEP 2 */}

            <div className="additional-step">

              <div className="additional-step-icon">

                <PhoneCall
                  size={21}
                  strokeWidth={2.2}
                />

              </div>

              <div className="additional-step-content">

                <strong>
                  We will contact you
                </strong>

                <p>
                  Our experts will reach out to discuss
                  in detail
                </p>

              </div>

            </div>


            {/* STEP 3 */}

            <div className="additional-step">

              <div className="additional-step-icon">

                <FileText
                  size={21}
                  strokeWidth={2.2}
                />

              </div>

              <div className="additional-step-content">

                <strong>
                  We will prepare your custom proposal
                </strong>

                <p>
                  Tailored solution with best pricing
                </p>

              </div>

            </div>


            {/* STEP 4 */}

            <div className="additional-step">

              <div className="additional-step-icon">

                <CircleCheck
                  size={22}
                  strokeWidth={2.2}
                />

              </div>

              <div className="additional-step-content">

                <strong>
                  You make the best decision
                </strong>

                <p>
                  Choose the plan that helps your
                  business grow
                </p>

              </div>

            </div>


            {/* =================================================
                SECURITY
            ================================================= */}

            <div className="additional-security">

              <span className="security-icon">

                <ShieldCheck
                  size={21}
                  strokeWidth={2.2}
                />

              </span>

              <p>
                Your information is 100% secure and
                will never be shared.
              </p>

            </div>

          </div>

        </div>


      </div>

    </section>
  );
};

export default AdditionalInformation;
