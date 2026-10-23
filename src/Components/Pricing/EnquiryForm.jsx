import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


/* =========================================================
   FORM FIELDS
   To add / remove a field, just edit this list.
   type: "text" | "email" | "tel" | "number" | "select" | "textarea"
========================================================= */

const FIELDS = [
  { name: "companyName",   label: "Company Name",       type: "text",   required: true,  placeholder: "Enter company name" },
  { name: "contactPerson", label: "Contact Person",     type: "text",   required: true,  placeholder: "Enter your name" },
  { name: "email",         label: "Business Email",     type: "email",  required: true,  placeholder: "name@company.com" },
  { name: "phone",         label: "Phone Number",       type: "tel",    required: true,  placeholder: "+65 9123 4567" },
  { name: "designation",   label: "Designation",        type: "text",   required: false, placeholder: "e.g. HR Manager" },
  {
    name: "employees",
    label: "Number of Employees",
    type: "select",
    required: true,
    options: ["1 - 10", "11 - 50", "51 - 200", "201 - 500", "500+"],
  },
  { name: "notes",         label: "Anything we should know?", type: "textarea", required: false, placeholder: "Optional", full: true },
];

const STORAGE_KEY = "customPlanProposal";

/* =========================================================
   HELPERS
========================================================= */

const readSaved = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

const validateField = (field, value) => {
  const v = String(value || "").trim();

  if (field.required && !v) return `${field.label} is required.`;

  if (v && field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    return "Enter a valid email address.";
  }

  if (v && field.type === "tel" && !/^[+\d][\d\s-]{7,16}$/.test(v)) {
    return "Enter a valid phone number.";
  }

  return "";
};

/* =========================================================
   PAGE
========================================================= */

const EnquiryForm = () => {
  const navigate = useNavigate();
  const { planId } = useParams(); // from route  /pricing/:planId

  /* start with previously saved values so the form is pre-filled */
  const [values, setValues] = useState(() => {
    const saved = readSaved();
    const initial = {};
    FIELDS.forEach((f) => {
      initial[f.name] = saved[f.name] || "";
    });
    return initial;
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const planName = readSaved().planName || "Selected Plan";

  /* ---------- change ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /* ---------- leave a field -> validate that field ---------- */
  const handleBlur = (field) => {
    const msg = validateField(field, values[field.name]);
    setErrors((prev) => ({ ...prev, [field.name]: msg }));
  };

  /* ---------- submit ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    FIELDS.forEach((f) => {
      const msg = validateField(f, values[f.name]);
      if (msg) newErrors[f.name] = msg;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);

    /*
      MERGE with existing data so selectedPlan / selectedModules
      saved by the pricing page are NOT lost.
    */
    const existing = readSaved();

    const trimmed = {};
    FIELDS.forEach((f) => {
      trimmed[f.name] = String(values[f.name]).trim();
    });

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...existing,
        ...trimmed,
        selectedPlan: existing.selectedPlan || planId, // keep the plan
      })
    );

    navigate("/submitted");
  };

  /* ---------- render one field ---------- */
  const renderInput = (f) => {
    const common = {
      id: f.name,
      name: f.name,
      value: values[f.name],
      onChange: handleChange,
      onBlur: () => handleBlur(f),
      className: errors[f.name] ? "enq-input has-error" : "enq-input",
    };

    if (f.type === "select") {
      return (
        <select {...common}>
          <option value="">Select...</option>
          {f.options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      );
    }

    if (f.type === "textarea") {
      return <textarea {...common} rows={4} placeholder={f.placeholder} />;
    }

    return <input {...common} type={f.type} placeholder={f.placeholder} />;
  };

  return (
    <section className="enq-page">
      <div className="enq-container">
        {/* HEADER */}
        <div className="enq-header">
          <h1>Request Pricing – {planName}</h1>
          <p>
            Please provide your details and we'll get back to you with the
            best pricing for your business.
          </p>
        </div>

        {/* FORM CARD */}
        <form className="enq-card" onSubmit={handleSubmit} noValidate>
          <h2>Your Details</h2>
          <p className="enq-sub">Tell us about yourself and your organization.</p>

          <div className="enq-grid">
            {FIELDS.map((f) => (
              <div
                key={f.name}
                className={`enq-field ${f.full ? "enq-full" : ""}`}
              >
                <label htmlFor={f.name}>
                  {f.label}
                  {f.required && <span className="enq-star"> *</span>}
                </label>

                {renderInput(f)}

                {errors[f.name] && (
                  <span className="enq-error">{errors[f.name]}</span>
                )}
              </div>
            ))}
          </div>

          <div className="enq-actions">
            <button
              type="button"
              className="enq-btn-back"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>

            <button type="submit" className="enq-btn-next" disabled={submitting}>
              Save & Continue →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;