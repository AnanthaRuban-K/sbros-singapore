import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <div className="footer1 _relative">

      <div className="container">

        <div className="row">

          {/* =================================================
              COMPANY / LOGO
          ================================================== */}
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
                Empowering businesses with reliable software, network,
                and digital solutions — your dreams, our mission.
              </p>

              <div className="space20"></div>

              {/* Social Media */}
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


          {/* =================================================
              SERVICES
          ================================================== */}
          <div className="col-lg col-md-6 col-12">

            <div className="single-footer-items">

              <h3>Services We Offer</h3>

              <ul className="menu-list">

                <li>
                  <Link to="/service/service-details-right">
                    ERP Solutions
                  </Link>
                </li>

                <li>
                  <Link to="/service/service-details">
                    Software Development
                  </Link>
                </li>

                <li>
                  <Link to="/service/service-details-center">
                    Website Development
                  </Link>
                </li>

                <li>
                  <Link to="/service/service-it-networking">
                    IT Networking
                  </Link>
                </li>

                <li>
                  <Link to="/service/service-trading">
                    Trading
                  </Link>
                </li>

              </ul>

            </div>

          </div>


          {/* =================================================
              USEFUL LINKS
          ================================================== */}
          <div className="col-lg col-md-6 col-12">

            <div className="single-footer-items">

              <h3>Useful Links</h3>

              <ul className="menu-list">

                <li>
                  <Link to="/about">
                    About us
                  </Link>
                </li>

                <li>
                  <Link to="/service">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/project/project-details-center">
                    Products
                  </Link>
                </li>

                <li>
                  <Link to="/contact">
                    Contact us
                  </Link>
                </li>

              </ul>

            </div>

          </div>


          {/* =================================================
              CONTACT US
          ================================================== */}
          <div className="col-lg-3 col-md-6 col-12">

            <div className="single-footer-items">

              <h3>Contact Us</h3>


              {/* =========================
                  PHONE
              ========================== */}
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


              {/* =========================
                  EMAIL
              ========================== */}
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


              {/* =========================
                  SINGAPORE OFFICE
              ========================== */}
              <div className="contact-box address-box">

                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div className="pera">

                  <p>
                    <strong>Singapore Office</strong>
                    <br />

                    27 Woodlands Industrial Park E1
                    <br />

                    #03-10, Singapore
                    <br />

                    757718
                  </p>

                </div>

              </div>


              {/* =========================
                  INDIA BRANCH - CLICKABLE
              ========================== */}
              <div className="contact-box address-box india-address">

                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div className="pera">

                  <a
                    href="https://sbrostech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="india-address-link"
                    aria-label="SBROS India Branch"
                  >

                    <strong>India Branch</strong>

                    <br />

                    No. 15/25, Madavilagam,

                    <br />

                    Kandanvilai Post,

                    <br />

                    Kanniya Kumari District

                    <br />

                    Pincode: 629810

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>


        <div className="space40"></div>

      </div>


      {/* =================================================
          COPYRIGHT
      ================================================== */}

      <div className="copyright-area">

        <div className="container">

          <div className="row align-items-center">

            {/* Copyright */}
            <div className="col-md-5">

              <div className="coppyright">

                <p>
                  Copyright @2024 SBROS TECH(S) PTE LTD.
                  All Rights Reserved
                </p>

              </div>

            </div>


            {/* Terms / Privacy */}
            <div className="col-md-7">

              <div className="coppyright right-area">

                <Link to="/terms">
                  Terms &amp; Conditions
                </Link>

                <Link to="/privacy-policy">
                  Privacy Policy
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Footer1;