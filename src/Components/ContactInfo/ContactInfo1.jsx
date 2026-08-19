const ContactInfo1 = () => {
    return (
        <div className="sbros-contact-page">

            {/* CONTACT HERO */}
            <section className="sbros-contact-section">
                <div className="container">

                    <div className="sbros-contact-header">
                        <span className="sbros-contact-tag">GET IN TOUCH</span>

                        <h2>
                            Let's Start a <span>Conversation</span>
                        </h2>

                        <p>
                            Have a question, project idea, or simply want to connect?
                            <br />
                            Our team is ready to hear from you.
                        </p>
                    </div>

                    <div className="row align-items-stretch">

                        {/* LEFT SIDE */}
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
                                            <strong>enquiry@sbrostech.com.sg</strong>
                                        </div>

                                        <div className="sbros-arrow">↗</div>
                                    </a>

                                    {/* LOCATION */}
                                    <a
                                        href="https://www.google.com/maps"
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
                                            <span>Our Office</span>
                                            <strong>Singapore</strong>
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

                        {/* RIGHT SIDE FORM */}
                        <div className="col-lg-7">

                            <div className="sbros-form-card">

                                <div className="sbros-form-title">
                                    <div>
                                        <span>DROP US A MESSAGE</span>
                                        <h3>Tell us about your project</h3>
                                    </div>

                                    <div className="sbros-form-number">
                                        01
                                    </div>
                                </div>

                                <form action="#">

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="sbros-input">
                                                <label>First Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="sbros-input">
                                                <label>Last Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your last name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="sbros-input">
                                                <label>Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="sbros-input">
                                                <label>Phone Number</label>
                                                <input
                                                    type="tel"
                                                  
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="sbros-input">
                                                <label>Subject</label>
                                                <input
                                                    type="text"
                                                    placeholder="What can we help you with?"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="sbros-input">
                                                <label>Your Message</label>
                                                <textarea
                                                    rows="5"
                                                    placeholder="Tell us a little about your requirements..."
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                           <button type="submit" className="sbros-send-btn">
    <span className="sbros-send-text">Send Message</span>

    <span className="sbros-send-arrow">
        <i className="bi bi-arrow-up-right"></i>
    </span>
</button>
                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section className="sbros-map-section">

                <div className="container">

                    <div className="sbros-map-header">

                        <div>
                            <span>FIND US</span>
                            <h3>Our Location</h3>
                        </div>

                      

                    </div>

                    <div className="sbros-map-wrapper">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127793.0!2d103.8198!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1673751720794!5m2!1sen!2ssg"
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SBROS Tech Singapore Location"
                        ></iframe>

                        <div className="sbros-map-card">

                            <div className="sbros-map-pin">
                                📍
                            </div>

                            <div>
                                <small>SBROS TECH</small>
                                <strong>Singapore</strong>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default ContactInfo1;