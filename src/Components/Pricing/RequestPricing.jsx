import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

// =====================================================
// PRICING PLANS
// =====================================================

const plans = {
  basic: {
    name: "Basic",
    description: "Essential features for startups and small businesses",
    features: [
      "HRM Core",
      "Employee Management",
      "Attendance Tracking",
      "Leave Management",
      "Employee Directory",
      "Basic Reports",
      "Email Support",
    ],
  },

  intermediate: {
    name: "Intermediate",
    description: "Advanced features for growing businesses",
    features: [
      "Everything in Basic",
      "Payroll",
      "Recruitment",
      "Advanced Reports",
      "Workflow Approvals",
      "Custom Roles & Permissions",
      "Priority Email Support",
    ],
  },

  advanced: {
    name: "Advanced",
    description: "Complete ERP solution for established businesses",
    features: [
      "Everything in Intermediate",
      "Sales / CRM",
      "Finance",
      "Procurement",
      "Project Management",
      "Custom Workflows",
      "API Access",
      "Phone Support",
    ],
  },

  custom: {
    name: "Custom",
    description: "A flexible solution tailored to your business requirements",
    features: [
      "Custom Modules",
      "Custom Features",
      "Custom Workflows",
      "Advanced Integrations",
      "Custom Roles & Permissions",
      "Dedicated Support",
      "Scalable Infrastructure",
      "API & Third-Party Integrations",
      "Personalized Implementation",
    ],
  },
};

// =====================================================
// LOCAL STORAGE KEY
// =====================================================

const STORAGE_KEY = "customPlanProposal";

// =====================================================
// MAIN COMPONENT
// =====================================================

const RequestPricing = () => {
  const { planId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  // =====================================================
  // PLAN
  // =====================================================

  const planKey = planId?.toLowerCase() || "basic";

  const selectedPlan = plans[planKey] || plans.basic;

  // =====================================================
  // GET SAVED DATA
  // =====================================================

  const getSavedData = () => {
    try {
      const savedData = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
      );

      return savedData;
    } catch (error) {
      console.error("Unable to read saved pricing data:", error);

      return {};
    }
  };

  const savedData = getSavedData();

  // =====================================================
  // FORM STATE
  // =====================================================

  const [formData, setFormData] = useState(() => {
    // ---------------------------------------------------
    // FIRST PRIORITY:
    // Data passed from Requirements page
    // ---------------------------------------------------

    if (location.state?.formData) {
      return {
        companyName: location.state.formData.companyName || "",
        contactPerson: location.state.formData.contactPerson || "",
        email: location.state.formData.email || "",
        phone: location.state.formData.phone || "",
        employees: location.state.formData.employees || "",
        country: location.state.formData.country || "",
        requirements: location.state.formData.requirements || "",
        agree: location.state.formData.agree || false,
      };
    }

    // ---------------------------------------------------
    // SECOND PRIORITY:
    // Data saved in localStorage
    // ---------------------------------------------------

    return {
      companyName: savedData.companyName || "",
      contactPerson: savedData.contactPerson || "",
      email: savedData.email || "",
      phone: savedData.phone || "",
      employees: savedData.employees || "",
      country: savedData.country || "",
      requirements: savedData.requirements || "",
      agree: savedData.agree || false,
    };
  });

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(updatedData);

    // ---------------------------------------------------
    // SAVE EVERY CHANGE
    // ---------------------------------------------------

    const existingData = getSavedData();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...existingData,

        planId: planKey,

        selectedPlan: selectedPlan.name,

        planDescription: selectedPlan.description,

        ...updatedData,
      })
    );
  };

  // =====================================================
  // HANDLE SUBMIT
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // ---------------------------------------------------
    // CHECK AGREEMENT
    // ---------------------------------------------------

    if (!formData.agree) {
      alert(
        "Please agree to the Privacy Policy and Terms of Service."
      );

      return;
    }

    // ---------------------------------------------------
    // CHECK REQUIRED FIELDS
    // ---------------------------------------------------

    if (
      !formData.companyName.trim() ||
      !formData.contactPerson.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.employees ||
      !formData.country ||
      !formData.requirements.trim()
    ) {
      alert("Please fill in all required fields.");

      return;
    }

    // ===================================================
    // SAVE COMPLETE DATA
    // ===================================================

    const existingData = getSavedData();

    const updatedData = {
      ...existingData,

      planId: planKey,

      selectedPlan: selectedPlan.name,

      planDescription: selectedPlan.description,

      companyName: formData.companyName.trim(),

      contactPerson: formData.contactPerson.trim(),

      email: formData.email.trim(),

      phone: formData.phone.trim(),

      employees: formData.employees,

      country: formData.country,

      requirements: formData.requirements.trim(),

      agree: formData.agree,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedData)
    );

    // ===================================================
    // GO TO REQUIREMENTS PAGE
    // ===================================================

    navigate("/requirements", {
      state: {
        selectedPlan: selectedPlan.name,

        planId: planKey,

        planDescription: selectedPlan.description,

        formData: formData,
      },
    });
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section className="request-pricing-page">

      <div className="request-container">

        {/* =================================================
            TOP HEADER
        ================================================= */}

        <div className="request-top">

          <div className="request-heading">

            <div>

              <h1>
                Request Pricing – {selectedPlan.name} Plan
              </h1>

              <p>
                Please provide your details and we'll get back
                to you with the best pricing for your business.
              </p>

            </div>

          </div>


          {/* CONFIDENTIAL BOX */}

          <div className="confidential-box">

            <div className="confidential-icon">
              ✓
            </div>

            <div>

              <h3>
                100% Confidential
              </h3>

              <p>
                Your information is secure with us and will
                never be shared with third parties.
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            STEPS
        ================================================= */}

        <div className="steps">

          <div className="step active">

            <span>
              1
            </span>

            <strong>
              Your Details
            </strong>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <span>
              2
            </span>

            <strong>
              Requirements
            </strong>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <span>
              3
            </span>

            <strong>
              Additional Information
            </strong>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <span>
              4
            </span>

            <strong>
              Review
            </strong>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <span>
              5
            </span>

            <strong>
              Submit
            </strong>

          </div>

        </div>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="request-layout">


          {/* =================================================
              FORM
          ================================================= */}

          <form
            className="request-form"
            onSubmit={handleSubmit}
          >


            {/* FORM TITLE */}

            <div className="form-title">

              <div className="form-title-icon">
                ♙
              </div>

              <div>

                <h2>
                  Your Details
                </h2>

                <p>
                  Tell us about yourself and your organization.
                </p>

              </div>

            </div>


            {/* =================================================
                COMPANY + CONTACT PERSON
            ================================================= */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Company Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Contact Person <span>*</span>
                </label>

                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Enter full name"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* =================================================
                EMAIL + PHONE
            ================================================= */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Business Email <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter business email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Phone Number <span>*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* =================================================
                EMPLOYEES + COUNTRY
            ================================================= */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Number of Employees <span>*</span>
                </label>

                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select number of employees
                  </option>

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

              </div>


              <div className="form-group">

                <label>
                  Country <span>*</span>
                </label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >

                  <option value="">
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

                  <option value="UAE">
                    UAE
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* =================================================
                SELECTED PLAN
            ================================================= */}

            <div className="selected-plan-section">

              <label>
                Interested Plan <span>*</span>
              </label>


              <div className="selected-plan">

                <div className="selected-plan-icon">
                  ✓
                </div>


                <div className="selected-plan-content">

                  <h3>
                    {selectedPlan.name} Plan
                  </h3>

                  <p>
                    {selectedPlan.description}
                  </p>

                </div>


                <div className="selected-label">
                  ✓ Selected
                </div>

              </div>


              <p className="selected-message">

                You selected{" "}

                <strong>
                  {selectedPlan.name} Plan
                </strong>

                . We'll customize the pricing based on
                your requirements.

              </p>

            </div>


            {/* =================================================
                REQUIREMENTS
            ================================================= */}

            <div className="form-group requirements">

              <label>
                Requirements / Message <span>*</span>
              </label>

              <p className="field-description">
                Tell us about your business needs and any
                specific requirements.
              </p>


              <textarea
                name="requirements"
                placeholder="Describe your requirements, current challenges, expected outcomes, or any specific features you're looking for..."
                value={formData.requirements}
                onChange={handleChange}
                maxLength={1000}
                required
              />


              <div className="textarea-count">
                {formData.requirements.length} / 1000
              </div>

            </div>


            {/* =================================================
                AGREEMENT
            ================================================= */}

            <div className="agreement">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />

              <p>

                I agree to the{" "}

                <a href="/privacy-policy">
                  Privacy Policy
                </a>

                {" "}and{" "}

                <a href="/terms">
                  Terms of Service
                </a>

                .

              </p>

            </div>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <div className="form-submit">

              <button type="submit">
                Save & Continue
                <span>→</span>
              </button>

            </div>

          </form>


          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="request-sidebar">

            <div className="sidebar-card">

              <h2>
                What happens next?
              </h2>


              <div className="timeline">

                <div className="timeline-item">

                  <span>
                    1
                  </span>

                  <div>

                    <h4>
                      We Receive Your Request
                    </h4>

                    <p>
                      We'll review your information
                    </p>

                  </div>

                </div>


                <div className="timeline-item">

                  <span>
                    2
                  </span>

                  <div>

                    <h4>
                      Requirement Discussion
                    </h4>

                    <p>
                      Our solution expert will contact you
                    </p>

                  </div>

                </div>


                <div className="timeline-item">

                  <span>
                    3
                  </span>

                  <div>

                    <h4>
                      Custom Pricing
                    </h4>

                    <p>
                      We'll prepare the best pricing for you
                    </p>

                  </div>

                </div>


                <div className="timeline-item">

                  <span>
                    4
                  </span>

                  <div>

                    <h4>
                      Demo & Presentation
                    </h4>

                    <p>
                      See the solution in action
                    </p>

                  </div>

                </div>


                <div className="timeline-item">

                  <span>
                    5
                  </span>

                  <div>

                    <h4>
                      Get Started
                    </h4>

                    <p>
                      Begin your digital transformation
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  PLAN FEATURES
              ================================================= */}

              <div className="plan-includes">

                <h3>
                  {selectedPlan.name} Plan Includes
                </h3>


                <ul>

                  {selectedPlan.features.map(
                    (feature, index) => (

                      <li key={index}>

                        <span>
                          ✓
                        </span>

                        {feature}

                      </li>

                    )
                  )}

                </ul>

              </div>


              {/* =================================================
                  HELP BOX
              ================================================= */}

              <div className="help-box">

                <div className="help-icon">
                  ☎
                </div>


                <div>

                  <h3>
                    Need Help?
                  </h3>

                  <p>
                    Talk to our sales team
                  </p>

                  <strong>
                    +65 90214545
                  </strong>

                  <strong>
                    enquiry@sbrostech.com.sg
                  </strong>

                </div>

              </div>

            </div>

          </aside>

        </div>


        {/* =================================================
            BOTTOM SALES BOX
        ================================================= */}

        <div className="sales-box">

          <div className="sales-icon">
            ☎
          </div>


          <div className="sales-content">

            <h3>
              Prefer to talk to our team?
            </h3>

            <p>
              Our solution experts are ready to understand
              your needs and guide you to the right plan.
            </p>

          </div>


          <div className="sales-action">

            <button
              type="button"
              onClick={() => {
                window.location.href = "tel:+6590214545";
              }}
            >
              ☎ &nbsp; Talk to Sales
            </button>

            <span>
              +65 90214545 &nbsp;
              (Mon – Fri, 9AM – 6PM SGT)
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default RequestPricing;