import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LEAD_LIMITS, submitLead } from "../../api/erpLeads";
import { TRIAL_NOTE, TRIAL_PLAN_INTEREST, buildTrialRequirements } from "./trialRequest";

// =====================================================
// 15-DAY FREE TRIAL REQUEST (landing page modal)
// Sends a lead to the One Solution ERP:
// POST {VITE_ERP_API_URL}/api/v1/public/leads  (see src/api/erpLeads.js)
// The trial is set up by our team; nothing is created automatically.
// =====================================================

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "200+"];

const TRIAL_MODULES = [
  "HRM",
  "Payroll",
  "Attendance & Leave",
  "Finance",
  "Procurement",
  "Sales",
  "CRM",
  "Recruitment",
];

// leaves room in `requirements` for the modules line
const MESSAGE_MAX = 3500;

const EMPTY_VALUES = {
  company: "",
  contactName: "",
  email: "",
  phone: "",
  companySize: "",
  country: "Singapore",
  message: "",
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled])';

/* ---------- validation (same limits as the ERP API) ---------- */
const validate = (values, consent) => {
  const errors = {};
  const v = (name) => String(values[name] || "").trim();

  if (!v("company")) errors.company = "Company name is required.";
  else if (v("company").length > LEAD_LIMITS.company) errors.company = `Company name must be ${LEAD_LIMITS.company} characters or fewer.`;

  if (!v("contactName")) errors.contactName = "Your name is required.";
  else if (v("contactName").length > LEAD_LIMITS.contactName) errors.contactName = `Your name must be ${LEAD_LIMITS.contactName} characters or fewer.`;

  if (!v("email")) errors.email = "Work email is required.";
  else if (v("email").length > LEAD_LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) errors.email = "Enter a valid email address.";

  if (v("phone").length > LEAD_LIMITS.phone) errors.phone = `Phone must be ${LEAD_LIMITS.phone} characters or fewer.`;
  if (v("country").length > LEAD_LIMITS.country) errors.country = `Country must be ${LEAD_LIMITS.country} characters or fewer.`;
  if (v("message").length > MESSAGE_MAX) errors.message = `Message must be ${MESSAGE_MAX} characters or fewer.`;

  if (!consent) errors.consent = "Please agree so we can contact you about your trial.";

  return errors;
};

const errorMessageFor = (error, contactEmail) => {
  if (error?.kind === "validation") return "Some details weren't accepted. Please check the highlighted fields.";
  if (error?.kind === "rate_limit") return "Too many attempts, please try again in a few minutes.";
  return `Something went wrong, please email us at ${contactEmail}.`;
};

const TrialRequestForm = ({ onClose, contactEmail }) => {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [modules, setModules] = useState([]);
  const [consent, setConsent] = useState(false);
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
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    if (status === "success") dialogRef.current?.querySelector(".trial-done-close")?.focus();
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const toggleModule = (name) =>
    setModules((prev) => (prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inFlightRef.current || status !== "idle") return;

    // Bot filled the hidden field: show success, send nothing
    if (honeypot.trim()) {
      setStatus("success");
      return;
    }

    const newErrors = validate(values, consent);
    setErrors(newErrors);
    const firstInvalid = Object.keys(newErrors)[0];
    if (firstInvalid) {
      dialogRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    inFlightRef.current = true;
    setStatus("sending");
    setFormError("");

    const trim = (name) => values[name].trim();
    const payload = {
      company: trim("company"),
      contactName: trim("contactName"),
      email: trim("email"),
      country: trim("country") || "Singapore",
      requirements: buildTrialRequirements(modules, values.message),
      planInterest: TRIAL_PLAN_INTEREST,
    };
    if (trim("phone")) payload.phone = trim("phone");
    if (values.companySize) payload.companySize = values.companySize;

    try {
      await submitLead(payload);
      setStatus("success");
      if (typeof window.gtag === "function") {
        window.gtag("event", "trial_request", { plan_interest: TRIAL_PLAN_INTEREST });
      }
    } catch (error) {
      setStatus("idle");
      setFormError(errorMessageFor(error, contactEmail));
      if (error?.kind === "validation") {
        const mapped = { ...(error.fieldErrors || {}) };
        if (mapped.requirements) mapped.message = mapped.requirements;
        setErrors((prev) => ({ ...prev, ...mapped }));
      }
    } finally {
      inFlightRef.current = false;
    }
  };

  const field = (name, label, props = {}) => (
    <label className={`contact-field ${props.full ? "full-width" : ""}`} htmlFor={`trial-${name}`}>
      <span>{label}</span>
      <input
        id={`trial-${name}`}
        name={name}
        value={values[name]}
        onChange={handleChange}
        aria-invalid={errors[name] ? "true" : undefined}
        aria-describedby={errors[name] ? `trial-${name}-error` : undefined}
        type={props.type || "text"}
        maxLength={props.maxLength}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
      />
      {errors[name] && <small className="trial-error" id={`trial-${name}-error`}>{errors[name]}</small>}
    </label>
  );

  const sending = status === "sending";

  return (
    <div
      className="trial-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="form form-card trial-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="trial-title"
      >
        <button type="button" className="trial-close" aria-label="Close" onClick={onClose}>
          ×
        </button>

        {status === "success" ? (
          <div className="trial-done" role="status">
            <div className="trial-done-icon" aria-hidden="true">✓</div>
            <h3 id="trial-title">Thank you!</h3>
            <p>
              Our team will set up your 15-day trial and email your login details
              within 1 business day.
            </p>
            <button type="button" className="btn btn-red trial-done-close" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-heading">
              <div>
                <span className="form-eyebrow">ONE SOLUTION ERP</span>
                <h3 id="trial-title">Start your 15-day free trial</h3>
              </div>
            </div>

            <div className="contact-form-grid">
              {field("company", "Company name *", { maxLength: LEAD_LIMITS.company, autoComplete: "organization" })}
              {field("contactName", "Your name *", { maxLength: LEAD_LIMITS.contactName, autoComplete: "name" })}
              {field("email", "Work email *", { type: "email", maxLength: LEAD_LIMITS.email, autoComplete: "email", placeholder: "name@company.com" })}
              {field("phone", "Phone", { type: "tel", maxLength: LEAD_LIMITS.phone, autoComplete: "tel" })}

              <label className="contact-field" htmlFor="trial-companySize">
                <span>Company size</span>
                <select id="trial-companySize" name="companySize" value={values.companySize} onChange={handleChange}>
                  <option value="">Select...</option>
                  {COMPANY_SIZES.map((s) => (
                    <option key={s} value={s}>{s} employees</option>
                  ))}
                </select>
              </label>

              {field("country", "Country", { maxLength: LEAD_LIMITS.country, autoComplete: "country-name" })}

              <fieldset className="contact-field full-width trial-modules">
                <legend>Which modules do you need?</legend>
                <div className="trial-module-grid">
                  {TRIAL_MODULES.map((m) => (
                    <label key={m} className="trial-check">
                      <input type="checkbox" checked={modules.includes(m)} onChange={() => toggleModule(m)} />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="contact-field full-width" htmlFor="trial-message">
                <span>Message (optional)</span>
                <textarea
                  id="trial-message"
                  name="message"
                  rows={3}
                  maxLength={MESSAGE_MAX}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Anything we should know before setting up your trial?"
                  aria-invalid={errors.message ? "true" : undefined}
                />
                {errors.message && <small className="trial-error">{errors.message}</small>}
              </label>
            </div>

            {/* HONEYPOT: hidden from people, bots fill it */}
            <div className="trial-hp" aria-hidden="true">
              <label htmlFor="trial-website">Leave this field empty</label>
              <input
                id="trial-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <label className="trial-check trial-consent">
              <input
                type="checkbox"
                name="consent"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (errors.consent) setErrors((prev) => ({ ...prev, consent: "" }));
                }}
                aria-invalid={errors.consent ? "true" : undefined}
              />
              <span>
                I agree to be contacted about my trial and to the{" "}
                <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. *
              </span>
            </label>
            {errors.consent && <small className="trial-error">{errors.consent}</small>}

            {formError && (
              <p className="emailjs-status error" role="alert">{formError}</p>
            )}

            <button type="submit" className="btn btn-red emailjs-submit" disabled={sending}>
              <span>{sending ? "Sending..." : "Start 15-Day Free Trial"}</span>
              <i className={sending ? "bi bi-arrow-repeat" : "bi bi-arrow-up-right"}></i>
            </button>

            <p className="form-note">{TRIAL_NOTE}</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default TrialRequestForm;
