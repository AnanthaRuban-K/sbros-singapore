import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <div className="footer1 _relative">
      <div className="container">
        <div className="row">

          {/* Footer Logo & About */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">

              <div className="footer-logo">
                <Link to="/">
                  <img
                    src="/assets/img/logo/sbros-logo1.png"
                    alt="SBROS Tech Logo"
                  />
                </Link>
              </div>

              <div className="space20"></div>

              <p className="footer-about-text">
                Empowering businesses with reliable software, network, and
                digital solutions — your dreams, our mission.
              </p>

              <div className="space20"></div>

              {/* Social Icons */}
              <ul className="social-icon">
                <li>
                  <a
                    href="https://www.facebook.com/sbrostechsg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/sbrostechsg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@sbrostechsg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
              </ul>

            </div>
          </div>

          {/* Services */}
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Services We Offer</h3>

              <ul className="menu-list">
                <li>
                  <Link to="/service/service-details/erp-solutions">
                    ERP Solutions
                  </Link>
                </li>

                <li>
                  <Link to="/service/service-details/software-development">
                    Software Development
                  </Link>
                </li>

                <li>
                  <Link to="/service/service-details/website-development">
                    Website Development
                  </Link>
                </li>

                <li>
                  <Link to="/service/service-details/it-networking">
                    IT Networking
                  </Link>
                </li>

                <li>
                  <Link to="/service/service-details/trading">
                    Trading
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>

              <ul className="menu-list">
                <li>
                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <Link to="/service">Services</Link>
                </li>

                <li>
                  <Link to="/blog">Products</Link>
                </li>

                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              {/* Phone */}
              <div className="contact-box">
                <div className="icon">
                  <img
                    src="/assets/img/icons/footer1-icon2.png"
                    alt="Phone"
                  />
                </div>

                <div className="pera">
                  <a href="tel:+6590214545">
                    +65 90214545
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-box">
                <div className="icon">
                  <img
                    src="/assets/img/icons/footer1-icon3.png"
                    alt="Email"
                  />
                </div>

                <div className="pera">
                  <a href="mailto:enquiry@sbrostech.com.sg">
                    enquiry@sbrostech.com.sg
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-md-5">
                <div className="coppyright">
                  <p>
                    Copyright @2024 SBROS TECH(S) PTE LTD. All Rights Reserved
                  </p>
                </div>
              </div>

              <div className="col-md-7">
                <div className="coppyright right-area">
                  <Link to="/terms">
                    Terms & Conditions
                  </Link>

                  <Link to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="space40"></div>

      </div>
    </div>
  );
};

export default Footer1;