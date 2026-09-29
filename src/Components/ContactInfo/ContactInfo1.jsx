import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactInfo1 = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    // =====================================================
    // SBROS TECH SINGAPORE OFFICE
    // =====================================================
    const officeAddress =
        "27 Woodlands Industrial Park E1, #03-10, Singapore 757718";

    const officeMapLink =
        "https://www.google.com/maps/place/27+Woodlands+Industrial+Park+E1,+%2303+10+E1,+Singapore+757718/@1.4553029,103.7957439,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1314d2917679:0xcaef219f43ebed43!8m2!3d1.4553029!4d103.7983188";

    // Exact coordinates from your Google Maps location
    const latitude = 1.4553029;
    const longitude = 103.7983188;

    // =====================================================
    // SEND EMAIL
    // =====================================================
    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        emailjs
            .sendForm(
                "service_9cg099a",
                "template_qzmm58o",
                form.current,
                "dEim8gAkIEVm2Gvjb"
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus("success");

                    form.current.reset();
                },
                (error) => {
                    setLoading(false);
                    setStatus("error");

                    console.log(error.text);
                }
            );
    };

    return (
        <div className="sbros-contact-page">

            {/* =====================================================
                CONTACT SECTION
            ====================================================== */}

            <section className="sbros-contact-section">

                <div className="container">

                    {/* ================= HEADER ================= */}

                    <div className="sbros-contact-header">

                        <span className="sbros-contact-tag">
                            GET IN TOUCH
                        </span>

                        <h2>
                            Let's Start a{" "}
                            <span>Conversation</span>
                        </h2>

                        <p>
                            Have a question, project idea, or simply want to
                            connect?
                            <br />
                            Our team is ready to hear from you.
                        </p>

                    </div>


                    {/* =================================================
                        CONTACT CONTENT
                    ================================================== */}

                    <div className="row align-items-stretch">


                        {/* =================================================
                            LEFT SIDE
                        ================================================== */}

                        <div className="col-lg-5">

                            <div className="sbros-contact-info">


                                {/* ================= INFO TOP ================= */}

                                <div className="sbros-info-top">

                                    <div className="sbros-info-circle">
                                        <span>✦</span>
                                    </div>

                                    <div>

                                        <small>
                                            CONTACT US
                                        </small>

                                        <h3>
                                            We'd love to hear from you.
                                        </h3>

                                    </div>

                                </div>


                                {/* =================================================
                                    CONTACT ITEMS
                                ================================================== */}

                                <div className="sbros-contact-items">


                                    {/* ================= PHONE ================= */}

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

                                            <span>
                                                Call Us
                                            </span>

                                            <strong>
                                                +65 9021 4545
                                            </strong>

                                        </div>

                                        <div className="sbros-arrow">
                                            ↗
                                        </div>

                                    </a>


                                    {/* ================= EMAIL ================= */}

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

                                            <span>
                                                Email Us
                                            </span>

                                            <strong>
                                                enquiry@sbrostech.com.sg
                                            </strong>

                                        </div>

                                        <div className="sbros-arrow">
                                            ↗
                                        </div>

                                    </a>


                                    {/* =================================================
                                        OFFICE LOCATION
                                    ================================================== */}

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

                                            <span>
                                                Singapore Office
                                            </span>

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

                                        <div className="sbros-arrow">
                                            ↗
                                        </div>

                                    </a>

                                </div>


                                {/* ================= BOTTOM ================= */}

                                <div className="sbros-contact-bottom">

                                    <span>
                                        Have a project in mind?
                                    </span>

                                    <strong>
                                        Let's make it happen.
                                    </strong>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT SIDE FORM
                        ================================================== */}

                        <div className="col-lg-7">

                            <div className="sbros-form-card">


                                {/* ================= FORM TITLE ================= */}

                                <div className="sbros-form-title">

                                    <div>

                                        <span>
                                            DROP US A MESSAGE
                                        </span>

                                        <h3>
                                            Tell us about your project
                                        </h3>

                                    </div>

                                    <div className="sbros-form-number">
                                        01
                                    </div>

                                </div>


                                {/* =================================================
                                    FORM
                                ================================================== */}

                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                >

                                    <div className="row">


                                        {/* ================= FIRST NAME ================= */}

                                        <div className="col-md-6">

                                            <div className="sbros-input">

                                                <label>
                                                    First Name *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    placeholder="Enter your first name"
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* ================= LAST NAME ================= */}

                                        <div className="col-md-6">

                                            <div className="sbros-input">

                                                <label>
                                                    Last Name *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    placeholder="Enter your last name"
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* ================= EMAIL ================= */}

                                        <div className="col-md-6">

                                            <div className="sbros-input">

                                                <label>
                                                    Email Address
                                                </label>

                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    placeholder="your@email.com"
                                                />

                                            </div>

                                        </div>


                                        {/* ================= PHONE ================= */}

                                        <div className="col-md-6">

                                            <div className="sbros-input">

                                                <label>
                                                    Phone Number *
                                                </label>

                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="+65 XXXX XXXX"
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* ================= SUBJECT ================= */}

                                        <div className="col-12">

                                            <div className="sbros-input">

                                                <label>
                                                    Subject *
                                                </label>

                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="What can we help you with?"
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* ================= MESSAGE ================= */}

                                        <div className="col-12">

                                            <div className="sbros-input">

                                                <label>
                                                    Your Message *
                                                </label>

                                                <textarea
                                                    name="message"
                                                    rows="5"
                                                    placeholder="Tell us a little about your requirements..."
                                                    required
                                                ></textarea>

                                            </div>

                                        </div>


                                        {/* ================= SEND BUTTON ================= */}

                                        <div className="col-12">

                                            <button
                                                type="submit"
                                                className="sbros-send-btn"
                                                disabled={loading}
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


                                            {/* ================= SUCCESS ================= */}

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


                                            {/* ================= ERROR ================= */}

                                            {status === "error" && (

                                                <p
                                                    style={{
                                                        color: "red",
                                                        marginTop: "10px"
                                                    }}
                                                >
                                                    Something went wrong.
                                                    Please try again.
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


            {/* =====================================================
                MAP SECTION
            ====================================================== */}

            <section className="sbros-map-section">

                <div className="container">


                    {/* ================= MAP HEADER ================= */}

                    <div className="sbros-map-header">

                        <div>

                            <span>
                                FIND US
                            </span>

                            <h3>
                                Our Singapore Office
                            </h3>

                        </div>

                    </div>


                    {/* =================================================
                        MAP WRAPPER
                    ================================================== */}

                    <div className="sbros-map-wrapper">


                        {/* =================================================
                            GOOGLE MAP

                            Coordinates:
                            Latitude  : 1.4553029
                            Longitude : 103.7983188
                        ================================================== */}

                        <iframe
                            src={`https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`}
                            width="100%"
                            height="450"
                            style={{
                                border: 0
                            }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SBROS Tech Singapore Office Location"
                        ></iframe>


                        {/* =================================================
                            MAP CARD
                        ================================================== */}

                        <div className="sbros-map-card">

                            <div className="sbros-map-pin">
                                📍
                            </div>

                            <div>

                                <small>
                                    SBROS TECH
                                </small>

                                <strong>
                                    Singapore Office
                                </strong>

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

                        </div>


                        {/* =================================================
                            OPEN GOOGLE MAP BUTTON
                        ================================================== */}

                        <a
                            href={officeMapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sbros-map-direction-btn"
                        >

                            <span>
                                Get Directions
                            </span>

                            <i className="bi bi-arrow-up-right"></i>

                        </a>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default ContactInfo1;