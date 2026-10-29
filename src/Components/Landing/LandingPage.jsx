
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import TrialRequestForm from "./TrialRequestForm";
import { TRIAL_NOTE } from "./trialRequest";

// =====================================================
// SBROS TECH CONTACT DETAILS
// =====================================================

const WHATSAPP = "6590214545";
const PHONE = "+65 9021 4545";
const EMAIL = "enquiry@sbrostech.com.sg";

const SINGAPORE_ADDRESS =
  "27 Woodlands Industrial Park E1, #03-10, Singapore 757718";

const INDIA_ADDRESS =
  "No. 15/25, Madavilagam, Kandanvilai Post, Kanniyakumari District, Tamil Nadu - 629810";

const SINGAPORE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=27+Woodlands+Industrial+Park+E1+Singapore+757718";

const INDIA_MAP_URL =
  "https://www.google.com/maps/place/SBros+Tech+Pvt+Ltd/@8.2056778,77.3243475,17z/";

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_9cg099a";
const EMAILJS_TEMPLATE_ID = "template_qzmm58o";
const EMAILJS_PUBLIC_KEY = "dEim8gAkIEVm2Gvjb";

// =====================================================
// SERVICES
// =====================================================

const services = [
  [
    "bi-diagram-3",
    "ERP Solutions",
    "Setup, customisation and staff training for your ERP.",
  ],
  [
    "bi-window-desktop",
    "Website Development",
    "Fast, mobile-friendly websites and landing pages.",
  ],
  [
    "bi-hdd-network",
    "IT Networking",
    "Office networks, Wi-Fi, servers and devices.",
  ],
  [
    "bi-code-slash",
    "Software Development",
    "Apps built around how your business works.",
  ],
  [
    "bi-graph-up-arrow",
    "Trading",
    "Reliable supply of products for your business needs.",
  ],
];

// =====================================================
// ERP MODULES
// =====================================================

const modules = [
  "HRM & Payroll",
  "Finance & Accounting",
  "Sales Management",
  "Procurement",
  "CRM",
  "Recruitment",
  "Inventory & Warehouse",
  "Reports & Analytics",
];

// =====================================================
// LANDING PAGE
// =====================================================

export default function LandingPage() {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    text: "",
    error: false,
  });

  const [scrolled, setScrolled] = useState(false);

  // 15-day free trial request modal
  const [trialOpen, setTrialOpen] = useState(false);
  const openTrial = () => setTrialOpen(true);

  // =====================================================
  // NAVBAR SCROLL EFFECT
  // =====================================================

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // =====================================================
  // EMAILJS FORM SUBMISSION
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading || !form.current) {
      return;
    }

    setLoading(true);

    setStatus({
      text: "Sending your message...",
      error: false,
    });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      form.current.reset();

      setStatus({
        text: "Message sent successfully! We will get back to you soon.",
        error: false,
      });
    } catch (error) {
      console.error("EmailJS submission error:", error);

      setStatus({
        text: "Unable to send your message. Please try again or contact us by email.",
        error: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // JSX
  // =====================================================

  return (
    <div className="sb">
      {/* ================= NAVBAR ================= */}

      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a
            href="#top"
            className="nav-logo"
            aria-label="SBros Tech home"
          >
            <img
              src="/assets/img/logo/sbros-logo1.png"
              alt="SBros Tech (S) Pte Ltd"
            />
          </a>

          <button type="button" className="btn btn-red nav-cta" onClick={openTrial}>
            Start 15-Day Free Trial
          </button>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>
              Streamline Your Business with{" "}
              <span className="red">Smart ERP Solutions</span>
            </h1>

            <p className="lead">
              ERP software built for Singapore SMEs. Connect
              accounts, inventory, sales and HR in one system
              and see real-time numbers.
            </p>

            <div className="btn-row">
              <button type="button" className="btn btn-red" onClick={openTrial}>
                Start 15-Day Free Trial
              </button>

              <a href="#contact" className="btn btn-outline">
                Book a Demo
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>

            <p className="trial-note">{TRIAL_NOTE}</p>
          </div>

          <div className="hero-visual">
            <img
              src="/assets/img/hero/headimg5.png"
              alt="ERP software dashboard for business"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}

      <section className="section grey" id="services">
        <div className="container">
          <h2>Our Services</h2>

          <p className="sub">
            One technology partner for software, security and IT.
          </p>

          <div className="grid g3">
            {services.map(([icon, title, description]) => (
              <article className="card" key={title}>
                <div className="ico">
                  <i className={`bi ${icon}`}></i>
                </div>

                <h3>{title}</h3>

                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ERP MODULES ================= */}

      <section className="section dark" id="erp">
        <div className="container">
          <h2>ERP That Runs Your Whole Business</h2>

          <p className="sub">
            ERP puts your daily work in one system, so everyone
            sees the same up-to-date numbers.
          </p>

          <div className="grid g4">
            {modules.map((module) => (
              <div className="mod" key={module}>
                {module}
              </div>
            ))}
          </div>

          <button type="button" className="btn btn-red" onClick={openTrial}>
            Start 15-Day Free Trial
          </button>

          <p className="trial-note trial-note-center">{TRIAL_NOTE}</p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="section dark" id="contact">
        <div className="container contact-grid">
          {/* ================= LEFT CONTACT INFO ================= */}

          <div className="contact-details">
            <img
              src="/assets/img/logo/sbros-logo1.png"
              alt="SBros Tech"
              className="logo logo-white-card"
            />

            <span className="contact-tag">GET IN TOUCH</span>

            <h2>
              Let&apos;s Start a{" "}
              <span className="red">Conversation</span>
            </h2>

            <p className="sub">
              Have a question, project idea, or simply want to
              connect? Our team is ready to hear from you.
            </p>

            <div className="contact-info-list">
              {/* PHONE */}

              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <i className="bi bi-telephone"></i>
                </span>

                <span className="contact-info-text">
                  <small>Call Us</small>
                  <strong>{PHONE}</strong>
                </span>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${EMAIL}`}
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <i className="bi bi-envelope"></i>
                </span>

                <span className="contact-info-text">
                  <small>Email Us</small>
                  <strong>{EMAIL}</strong>
                </span>
              </a>

              {/* SINGAPORE OFFICE */}

              <a
                href={SINGAPORE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <i className="bi bi-geo-alt"></i>
                </span>

                <span className="contact-info-text">
                  <small>Singapore Office</small>
                  <strong>{SINGAPORE_ADDRESS}</strong>
                  {/* <small className="office-map-link">
                    View on Google Maps ↗
                  </small> */}
                </span>
              </a>

              {/* INDIA BRANCH - NEW */}

              <a
                href={INDIA_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <i className="bi bi-geo-alt"></i>
                </span>

                <span className="contact-info-text">
                  <small>India Branch</small>
                  <strong>{INDIA_ADDRESS}</strong>
                  {/* <small className="office-map-link">
                    View on Google Maps ↗
                  </small> */}
                </span>
              </a>
            </div>

            <p className="contact-bottom-text">
              Have a project in mind?
              <strong> Let&apos;s make it happen.</strong>
            </p>
          </div>

          {/* ================= EMAILJS FORM ================= */}

          <div className="form form-card">
            <div className="form-heading">
              <div>
                <span className="form-eyebrow">
                  DROP US A MESSAGE
                </span>

                <h3>Tell us about your project</h3>
              </div>

              <div className="form-number">01</div>
            </div>

            <form
              ref={form}
              onSubmit={handleSubmit}
              className="emailjs-contact-form"
            >
              <div className="contact-form-grid">
                {/* FIRST NAME */}

                <label className="contact-field">
                  <span>First Name *</span>

                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter your first name"
                    autoComplete="given-name"
                    required
                  />
                </label>

                {/* LAST NAME */}

                <label className="contact-field">
                  <span>Last Name *</span>

                  <input
                    type="text"
                    name="last_name"
                    placeholder="Enter your last name"
                    autoComplete="family-name"
                    required
                  />
                </label>

                {/* EMAIL */}

                <label className="contact-field">
                  <span>Email Address *</span>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                  />
                </label>

                {/* PHONE */}

                <label className="contact-field">
                  <span>Phone Number *</span>

                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                  />
                </label>

                {/* SUBJECT */}

                <label className="contact-field full-width">
                  <span>Subject *</span>

                  <input
                    type="text"
                    name="subject"
                    placeholder="What can we help you with?"
                    required
                  />
                </label>

                {/* MESSAGE */}

                <label className="contact-field full-width">
                  <span>Your Message *</span>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about your requirements..."
                    required
                  />
                </label>
              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="btn btn-red emailjs-submit"
                disabled={loading}
              >
                <span>
                  {loading ? "Sending..." : "Send Message"}
                </span>

                <i
                  className={
                    loading
                      ? "bi bi-arrow-repeat"
                      : "bi bi-arrow-up-right"
                  }
                ></i>
              </button>

              {/* SUCCESS / ERROR MESSAGE */}

              {status.text && (
                <p
                  className={`emailjs-status ${
                    status.error ? "error" : "success"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.text}
                </p>
              )}

              <p className="form-note">
                Your information will be used to respond to your
                enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="landing-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} SBROS TECH (S) PTE LTD.
            All rights reserved.
          </p>

          <a href="#top">Back to Top ↑</a>
        </div>
      </footer>

      {trialOpen && (
        <TrialRequestForm onClose={() => setTrialOpen(false)} contactEmail={EMAIL} />
      )}
    </div>
  );
}
