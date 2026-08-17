const ContactInfo1 = () => {
    return (
        <div>
            <div className="space100"></div>
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-boxs">
                            <div className="heading1">
                                <h2>Contact Information</h2>
                                <div className="space16"></div>
                                <p>We have grown up with the digital revolution, and we <br/> know how to deliver on its promise.</p>
                            </div>
                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon1.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Contact Us</h5>
                                    <a href="tel:+6590214545" className="text">+65 9021 4545</a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon2.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Send Us a Mail</h5>
                                    <a href="mailto:enquiry@sbrostech.com.sg" className="text">enquiry@sbrostech.com.sg</a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon3.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Office Location</h5>
                                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text">
                                        Singapore
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form-details">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder="Last Name" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="email" placeholder="Email" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="number" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button type="submit" className="theme-btn1">Submit <span><i className="bi bi-arrow-right"></i></span></button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space100"></div>

        <div className="contact-map-page">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127793.0!2d103.8198!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1673751720794!5m2!1sen!2ssg"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SBROS Tech Location Map"
            ></iframe>
          </div>

    </div>

    );
};

export default ContactInfo1;