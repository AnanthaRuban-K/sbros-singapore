import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactInfo1 = () => {
    const form = useRef();
    const captchaRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [captchaToken, setCaptchaToken] = useState(null);

    // Widget render only after the component is mounted in the browser
    const [captchaReady, setCaptchaReady] = useState(false);

    useEffect(() => {
        setCaptchaReady(true);
    }, []);

    // GOOGLE RECAPTCHA SITE KEY (VITE)
    const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim();

    // SBROS TECH SINGAPORE OFFICE
    const officeMapLink =
        "https://www.google.com/maps/place/SBros+Tech(S)+Pte+Ltd/@1.4550224,103.7980027,17z/data=!3m2!4b1!5s0x31da1314d218f747:0x5d1f9356279f250b!4m6!3m5!1s0x31da132461eced91:0xe00c5aebd32c11d8!8m2!3d1.4550224!4d103.7980027!16s%2Fg%2F11zz1jt2h7?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D";

    const latitude = 1.4553029;
    const longitude = 103.7983188;

    // HANDLE RECAPTCHA CHANGE
    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
        setStatus("");
    };

    // SEND EMAIL
    const sendEmail = async (e) => {
        e.preventDefault();

        if (loading) return;

        setStatus("");

        if (!recaptchaSiteKey) {
            setStatus("config");
            return;
        }

        const token = captchaRef.current?.getValue();

        if (!token) {
            setStatus("captcha");
            return;
        }

        setLoading(true);

        try {
            await emailjs.sendForm(
                "service_9cg099a",
                "template_qzmm58o",
                form.current,
                "dEim8gAkIEVm2Gvjb"
            );

            setStatus("success");
            form.current.reset();

            captchaRef.current?.reset();
            setCaptchaToken(null);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");

            captchaRef.current?.reset();
            setCaptchaToken(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sbros-contact-page">
            {/* ================= CONTACT SECTION ================= */}
            <section className="sbros-contact-section">
                <div className="container">
                    {/* ================= HEADER ================= */}
                    <div className="sbros-contact-header">
                        <span className="sbros-contact-tag">GET IN TOUCH</span>

                        <h2>
                            Let's Start a <span>Conversation</span>
                        </h2>

                        <p>
                            Have a question, project idea, or simply want to
                            connect?
                            <br />
                            Our team is ready to hear from you.
                        </p>
                    </div>

                    <div className="row align-items-stretch">
                        {/* ================= LEFT SIDE ================= */}
                        <div className="col-lg-5">
                            <div className="sbros-contact-info">
                                <div className="sbros-info-top">
                                    <div className="sbros-info-circle">
                                        <span>✦</span>
                                    </div>

                                    <div>
                                        <small>CONTACT US</small>
                                        <h3>We'd love to hear from you.</h3>
                                    </div>
                                </div>

                                <div className="sbros-contact-items">
                                    {/* PHONE */}
                                    <a
                                        href="tel:+6590214545"
                                        className="sbros-contact-item"
                                    >
                                        <div className="sbros-contact-icon">
                                            <img
                                                src="/assets/img/icons/contact-page-icon1.png"
                                                alt="Phone"
                                            />
                                        </div>

                                        <div>
                                            <span>Call Us</span>
                                            <strong>+65 9021 4545</strong>
                                        </div>

                                        <div className="sbros-arrow">↗</div>
                                    </a>

                                    {/* EMAIL */}
                                    <a
                                        href="mailto:enquiry@sbrostech.com.sg"
                                        className="sbros-contact-item"
                                    >
                                        <div className="sbros-contact-icon">
                                            <img
                                                src="/assets/img/icons/contact-page-icon2.png"
                                                alt="Email"
                                            />
                                        </div>

                                        <div>
                                            <span>Email Us</span>
                                            <strong>
                                                enquiry@sbrostech.com.sg
                                            </strong>
                                        </div>

                                        <div className="sbros-arrow">↗</div>
                                    </a>

                                    {/* OFFICE LOCATION */}
                                    <a
                                        href={officeMapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sbros-contact-item"
                                    >
                                        <div className="sbros-contact-icon">
                                            <img
                                                src="/assets/img/icons/contact-page-icon3.png"
                                                alt="Location"
                                            />
                                        </div>

                                        <div>
                                            <span>Singapore Office</span>
                                            <strong>
                                                27 Woodlands Industrial Park E1
                                            </strong>

                                            <small
                                                style={{
                                                    display: "block",
                                                    marginTop: "4px",
                                                    opacity: 0.75
                                                }}
                                            >
                                                #03-10, Singapore 757718
                                            </small>
                                        </div>

                                        <div className="sbros-arrow">↗</div>
                                    </a>
                                </div>

                                <div className="sbros-contact-bottom">
                                    <span>Have a project in mind?</span>
                                    <strong>Let's make it happen.</strong>
                                </div>
                            </div>
                        </div>

                        {/* ================= RIGHT SIDE FORM ================= */}
                        <div className="col-lg-7">
                            <div className="sbros-form-card">
                                <div className="sbros-form-title">
                                    <div>
                                        <span>DROP US A MESSAGE</span>
                                        <h3>Tell us about your project</h3>
                                    </div>

                                    <div className="sbros-form-number">01</div>
                                </div>

                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row">
                                        {/* FIRST NAME */}
                                        <div className="col-md-6">
                                            <div className="sbros-input">
                                                <label>First Name *</label>
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    placeholder="Enter your first name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* LAST NAME */}
                                        <div className="col-md-6">
                                            <div className="sbros-input">
                                                <label>Last Name *</label>
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    placeholder="Enter your last name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* EMAIL */}
                                        <div className="col-md-6">
                                            <div className="sbros-input">
                                                <label>Email Address</label>
                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        {/* PHONE */}
                                        <div className="col-md-6">
                                            <div className="sbros-input">
                                                <label>Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="+65 XXXX XXXX"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* SUBJECT */}
                                        <div className="col-12">
                                            <div className="sbros-input">
                                                <label>Subject *</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="What can we help you with?"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* MESSAGE */}
                                        <div className="col-12">
                                            <div className="sbros-input">
                                                <label>Your Message *</label>
                                                <textarea
                                                    name="message"
                                                    rows="5"
                                                    placeholder="Tell us a little about your requirements..."
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* ================= GOOGLE RECAPTCHA ================= */}
                                        <div className="col-12">
                                            <div
                                                style={{
                                                    marginTop: "10px",
                                                    marginBottom: "15px",
                                                    minHeight: "78px"
                                                }}
                                            >
                                                {recaptchaSiteKey ? (
                                                    captchaReady && (
                                                        <ReCAPTCHA
                                                            key={recaptchaSiteKey}
                                                            ref={captchaRef}
                                                            sitekey={recaptchaSiteKey}
                                                            onChange={handleCaptchaChange}
                                                            onExpired={() => {
                                                                setCaptchaToken(null);
                                                                setStatus("");
                                                            }}
                                                            onErrored={() => {
                                                                setCaptchaToken(null);
                                                                setStatus("error");
                                                            }}
                                                        />
                                                    )
                                                ) : (
                                                    <p style={{ color: "red" }}>
                                                        reCAPTCHA configuration is
                                                        missing. Please contact the
                                                        administrator.
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* ================= SEND BUTTON ================= */}
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="sbros-send-btn"
                                                disabled={loading || !recaptchaSiteKey}
                                            >
                                                <span className="sbros-send-text">
                                                    {loading
                                                        ? "Sending..."
                                                        : "Send Message"}
                                                </span>

                                                <span className="sbros-send-arrow">
                                                    <i className="bi bi-arrow-up-right"></i>
                                                </span>
                                            </button>

                                            {status === "success" && (
                                                <p
                                                    style={{
                                                        color: "green",
                                                        marginTop: "10px"
                                                    }}
                                                >
                                                    Message sent successfully!
                                                    We'll get back to you soon.
                                                </p>
                                            )}

                                            {status === "captcha" && (
                                                <p
                                                    style={{
                                                        color: "red",
                                                        marginTop: "10px"
                                                    }}
                                                >
                                                    Please verify that you are not a
                                                    robot.
                                                </p>
                                            )}

                                            {status === "config" && (
                                                <p
                                                    style={{
                                                        color: "red",
                                                        marginTop: "10px"
                                                    }}
                                                >
                                                    reCAPTCHA is not configured.
                                                    Please contact the administrator.
                                                </p>
                                            )}

                                            {status === "error" && (
                                                <p
                                                    style={{
                                                        color: "red",
                                                        marginTop: "10px"
                                                    }}
                                                >
                                                    Something went wrong. Please try
                                                    again.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MAP SECTION ================= */}
            <section className="sbros-map-section">
                <div className="container">
                    <div className="sbros-map-header">
                        <div>
                            <span>FIND US</span>
                            <h3>Our Singapore Office</h3>
                        </div>
                    </div>

                    <div className="sbros-map-wrapper">
                        
 <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5321902439787!2d103.7980744919986!3d1.454839849282296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da132461eced91%3A0xe00c5aebd32c11d8!2sSBros%20Tech(S)%20Pte%20Ltd!5e0!3m2!1sen!2sin!4v1793866530347!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="SBros Tech Singapore Location"
                />

                        {/* <div className="sbros-map-card">
                            <div className="sbros-map-pin">📍</div>

                            <div>
                                <small>SBROS TECH</small>
                                <strong>Singapore Office</strong>

                                <span
                                    style={{
                                        display: "block",
                                        marginTop: "5px",
                                        fontSize: "13px",
                                        lineHeight: "1.5"
                                    }}
                                >
                                    27 Woodlands Industrial Park E1
                                    <br />
                                    #03-10, Singapore 757718
                                </span>
                            </div>
                        </div> */}

                        <a
                            href={officeMapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sbros-map-direction-btn"
                        >
                            <span>Get Directions</span>
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactInfo1;