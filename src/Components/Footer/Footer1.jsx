
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <div className="footer1 _relative">
      <div className="container">
        <div className="row">

          {/* COMPANY / LOGO */}
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

              {/* SOCIAL MEDIA */}
              <ul className="social-icon">
                <li>
  <a
    href="https://www.linkedin.com/company/sbros-tech-singapore"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <i className="bi bi-linkedin"></i>
  </a>
</li>
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

          {/* SERVICES */}
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Services We Offer</h3>

              <ul className="menu-list">
                <li><Link to="/erp-solutions">ERP Solutions</Link></li>
                <li><Link to="/software-development">Software Development</Link></li>
                <li><Link to="/website-development">Website Development</Link></li>
                <li><Link to="/it-networking">IT Networking</Link></li>
                <li><Link to="/trading">Trading</Link></li>
              </ul>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>

              <ul className="menu-list">
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
              </ul>
            </div>
          </div>

          {/* CONTACT US */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              {/* PHONE */}
              <div className="contact-box">
                <div className="icon">
                  <img
                    src="/assets/img/icons/footer1-icon2.png"
                    alt="Phone"
                  />
                </div>
                <div className="pera">
                  <a href="tel:+6590214545">+65 90214545</a>
                </div>
              </div>

              {/* EMAIL */}
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

              {/* SINGAPORE OFFICE */}
              <div className="contact-box address-box">
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div className="pera">
                  <a
                    href="https://www.google.com/maps/place/SBros+Tech(S)+Pte+Ltd/@1.4550278,103.7954278,17z/data=!3m2!4b1!5s0x31da1314d218f747:0x5d1f9356279f250b!4m6!3m5!1s0x31da132461eced91:0xe00c5aebd32c11d8!8m2!3d1.4550224!4d103.7980027!16s%2Fg%2F11zz1jt2h7?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="address-link"
                  >
                    <p>
                      <strong>Singapore Office</strong>
                      <br />
                      27 Woodlands Industrial Park E1
                      <br />
                      #03-10, Singapore
                      <br />
                      757718
                    </p>
                  </a>
                </div>
              </div>

              {/* INDIA BRANCH */}
              <div className="contact-box address-box india-address">
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div className="pera">
                  <a
                    href="https://www.google.com/maps/place/SBros+Tech+Pvt+Ltd/@8.2056831,77.3217726,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04fbaac0db9d55:0xdef8ffd0b62a1f73!8m2!3d8.2056778!4d77.3243475!16s%2Fg%2F11sdxg3g_2?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="address-link"
                  >
                    <p>
                      <strong>India Branch</strong>
                      <br />
                      No. 15/25, Madavilagam,
                      <br />
                      Kandanvilai Post,
                      <br />
                      Kanniyakumari District
                      <br />
                      Pincode: 629810
                    </p>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="space40"></div>
      </div>

      {/* COPYRIGHT */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-5">
              <div className="coppyright">
                <p>
                  Copyright @2026{" "}
                  <a
  href="https://sbrostech.com.sg/"
  target="_blank"
  rel="noopener noreferrer"
  className="copyright-company"
>
  SBROS TECH (S) PTE LTD
</a>
                  . All Rights Reserved
                </p>
              </div>
            </div>

            {/* TERMS / PRIVACY */}
            <div className="col-md-7">
              <div className="coppyright right-area">
                <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer1;
