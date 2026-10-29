import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { LEAD_LIMITS, buildLeadPayload, submitLead } from "../../api/erpLeads";

/* =========================================================
   PLAN LEAD FORM (modal)
   Opened by every plan button. Sends the lead to the
   One Solution ERP (Provider Console › Leads).

   Usage:
     {leadPlan && (
       <PlanLeadForm plan={leadPlan} onClose={() => setLeadPlan(null)} />
     )}

   plan: see "selection" in src/api/erpLeads.js
========================================================= */

const MESSAGE_MAX = 3000; // leaves room for the plan details in `requirements`

const EMPLOYEE_OPTIONS = ["1-10", "11-50", "51-200", "201-500", "500+"];

const FIELDS = [
  { name: "company",     label: "Company Name",       type: "text",  required: true, max: LEAD_LIMITS.company,     autoComplete: "organization", placeholder: "Enter company name" },
  { name: "contactName", label: "Your Name",          type: "text",  required: true, max: LEAD_LIMITS.contactName, autoComplete: "name",         placeholder: "Enter your full name" },
  { name: "email",       label: "Work Email",         type: "email", required: true, max: LEAD_LIMITS.email,       autoComplete: "email",        placeholder: "name@company.com" },
  { name: "phone",       label: "Phone Number",       type: "tel",   required: true, max: LEAD_LIMITS.phone,       autoComplete: "tel",          placeholder: "+65 9123 4567" },
  { name: "employees",   label: "Number of Employees", type: "select", required: true, options: EMPLOYEE_OPTIONS },
  { name: "message",     label: "Message",            type: "textarea", required: false, max: MESSAGE_MAX, full: true, placeholder: "Optional – tell us about your requirements" },
];

// API field -> form field (for 422 responses)
const API_TO_FIELD = {
  company: "company",
  contactName: "contactName",
  email: "email",
  phone: "phone",
  companySize: "employees",
  requirements: "message",
};

const EMPTY_VALUES = FIELDS.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {});

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/* ---------- validation (matches the API limits) ---------- */
const validateField =(field, value) => {
  const v = String(value || "").trim();

  if (field.required && !v) return `${field.label} is required.`;

  if (field.max && v.length > field.max) {
    return `${field.label} must be ${field.max} characters or fewer.`;
  }

  if (v && field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    return "Enter a valid email address.";
  }

  if (v && field.type === "tel" && !/^\+?[\d\s()-]{6,}$/.test(v)) {
    return "Enter a valid phone number.";
  }

  return "";
};

const errorMessageFor = (error) => {
  switch (error?.kind) {
    case "validation":
      return "Some details weren't accepted. Please check the highlighted fields and try again.";
    case "rate_limit":
      return "You've sent several requests in a short time. Please wait about 10 minutes and try again, or call us on +65 9021 4545.";
    case "network":
      return "We couldn't reach our server. Please check your connection and try again, or email enquiry@sbrostech.com.sg.";
    default:
      return "Something went wrong on our side. Please try again shortly, or email enquiry@sbrostech.com.sg.";
  }
};

const titleFor = (plan) => {
  if (plan.kind === "addon") return `Ask about ${plan.label}`;
  if (plan.kind === "custom") return "Request a custom quote";
  return `Get pricing – ${plan.label}`;
};

// Never shows a price: the sales team replies with pricing
const successTextFor = (plan) => {
  if (plan.kind === "addon") return `Thank you - our team will contact you about ${plan.label} within one business day.`;
  if (plan.kind === "custom") return "Thank you - our team will contact you about your custom quote within one business day.";
  return "Thank you - our team will send you pricing for your selected plan within one business day.";
};

/* =========================================================
   COMPONENT
========================================================= */

const PlanLeadForm = ({ plan, onClose }) => {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [addOnCodes, setAddOnCodes] = useState([]);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const [formError, setFormError] = useState("");

  const dialogRef = useRef(null);
  const inFlightRef = useRef(false);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  /* ---------- focus trap, Esc, scroll lock, focus restore ---------- */
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("input, select, textarea")?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const nodes = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
      if (!nodes.length) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!dialogRef.current.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  /* ---------- move focus to the success message ---------- */
  useEffect(() => {
    if (status === "success") {
      dialogRef.current?.querySelector(".plf-success-close")?.focus();
    }
  }, [status]);

  /* ---------- change / blur ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (field) => {
    const msg = validateField(field, values[field.name]);
    setErrors((prev) => ({ ...prev, [field.name]: msg }));
  };

  const focusField = (name) => {
    dialogRef.current?.querySelector(`[name="${name}"]`)?.focus();
  };

  /* ---------- submit ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inFlightRef.current || status !== "idle") return;

    // Bot filled the hidden field: pretend it worked, send nothing
    if (honeypot.trim()) {
      setStatus("success");
      return;
    }

    const newErrors = {};
    FIELDS.forEach((f) => {
      const msg = validateField(f, values[f.name]);
      if (msg) newErrors[f.name] = msg;
    });

    setErrors(newErrors);

    const firstInvalid = FIELDS.find((f) => newErrors[f.name]);
    if (firstInvalid) {
      focusField(firstInvalid.name);
      return;
    }

    inFlightRef.current = true;
    setStatus("sending");
    setFormError("");

    try {
      const addOns = (plan.addOnOptions || [])
        .filter((o) => addOnCodes.includes(o.code))
        .map((o) => o.label);

      await submitLead(buildLeadPayload(plan, { ...values, addOns }, window.location.href));
      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setFormError(errorMessageFor(error));

      if (error?.kind === "validation") {
        const mapped = {};
        Object.entries(error.fieldErrors || {}).forEach(([apiField, msg]) => {
          const name = API_TO_FIELD[apiField];
          if (name) mapped[name] = msg;
        });
        setErrors((prev) => ({ ...prev, ...mapped }));
      }
    } finally {
      inFlightRef.current = false;
    }
  };

  /* ---------- render one field ---------- */
  const renderInput = (f) => {
    const errorId = `plf-${f.name}-error`;
    const common = {
      id: `plf-${f.name}`,
      name: f.name,
      value: values[f.name],
      onChange: handleChange,
      onBlur: () => handleBlur(f),
      className: errors[f.name] ? "enq-input has-error" : "enq-input",
      "aria-invalid": errors[f.name] ? "true" : undefined,
      "aria-describedby": errors[f.name] ? errorId : undefined,
      "aria-required": f.required ? "true" : undefined,
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
      return <textarea {...common} rows={4} maxLength={f.max} placeholder={f.placeholder} />;
    }

    return (
      <input
        {...common}
        type={f.type}
        maxLength={f.max}
        autoComplete={f.autoComplete}
        placeholder={f.placeholder}
      />
    );
  };

  const sending = status === "sending";

  return createPortal(
    <div
      className="plf-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="plf-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="plf-title"
      >
        <button
          type="button"
          className="plf-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        {status === "success" ? (
          <div className="plf-success" role="status">
            <div className="plf-success-icon" aria-hidden="true">✓</div>
            <h2 id="plf-title">Enquiry received</h2>
            <p>{successTextFor(plan)}</p>
            <button
              type="button"
              className="enq-btn-next plf-success-close"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 id="plf-title" className="plf-title">{titleFor(plan)}</h2>

            {/* SELECTED PLAN */}
            <div className="plf-plan">
              <span className="plf-plan-label">
                {plan.kind === "addon" ? "Selected add-on" : "Selected plan"}
              </span>
              <strong className="plf-plan-name">{plan.label}</strong>
              <div className="plf-chips">
                {plan.modules?.length > 0 && (
                  <span className="plf-chip">{plan.modules.join(", ")}</span>
                )}
              </div>
            </div>

            <div className="enq-grid">
              {FIELDS.map((f) => (
                <div
                  key={f.name}
                  className={`enq-field ${f.full ? "enq-full" : ""}`}
                >
                  <label htmlFor={`plf-${f.name}`}>
                    {f.label}
                    {f.required ? (
                      <span className="enq-star" aria-hidden="true"> *</span>
                    ) : (
                      <span className="plf-optional"> (optional)</span>
                    )}
                  </label>

                  {renderInput(f)}

                  {f.type === "textarea" && (
                    <span className="plf-count">
                      {values[f.name].length} / {f.max}
                    </span>
                  )}

                  {errors[f.name] && (
                    <span className="enq-error" id={`plf-${f.name}-error`}>
                      {errors[f.name]}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* OPTIONAL ADD-ONS */}
            {plan.addOnOptions?.length > 0 && (
              <fieldset className="plf-addons">
                <legend>Interested in add-ons? (optional)</legend>
                {plan.addOnOptions.map((o) => (
                  <label key={o.code} className="plf-addon-option">
                    <input
                      type="checkbox"
                      name="addOns"
                      value={o.code}
                      checked={addOnCodes.includes(o.code)}
                      onChange={(e) =>
                        setAddOnCodes((prev) =>
                          e.target.checked
                            ? [...prev, o.code]
                            : prev.filter((c) => c !== o.code)
                        )
                      }
                    />
                    <span>{o.label}</span>
                  </label>
                ))}
              </fieldset>
            )}

            {/* HONEYPOT – hidden from people, bots fill it */}
            <div className="plf-hp" aria-hidden="true">
              <label htmlFor="plf-website">Leave this field empty</label>
              <input
                id="plf-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {formError && (
              <div className="plf-alert" role="alert">
                {formError}
              </div>
            )}

            <p className="plf-legal">
              By submitting, you agree to our{" "}
              <Link to="/privacy-policy" onClick={onClose}>Privacy Policy</Link>.
            </p>

            <div className="enq-actions">
              <button type="button" className="enq-btn-back" onClick={onClose}>
                Cancel
              </button>

              <button type="submit" className="enq-btn-next" disabled={sending}>
                {sending ? "Sending..." : "Submit Request →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
};

export default PlanLeadForm;
