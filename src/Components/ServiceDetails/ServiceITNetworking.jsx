import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/home3/faq1.json";

const ServiceITNetworking = () => {

  const accordionContentRef = useRef(null);

  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <div className="service-details-area-all sp it-networking-page">

      <div className="container">

        <div className="row">

          {/* =====================================================
              RIGHT CONTENT ONLY
          ====================================================== */}

          <div className="col-lg-12 details-right-only">

            <div className="service-details-post">

              {/* ===============================
                  INTRODUCTION
              ================================ */}

              <article>

                <div className="details-post-area">

                  <div className="image">
                    <img
                      src="/assets/img/service/Engineer.jpeg"
                      alt="IT Networking"
                    />
                  </div>

                  <div className="space30"></div>

                  <div className="heading1">

                    <h2>
                      Reliable IT Networking Solutions for Your Business
                    </h2>

                    <div className="space16"></div>

                    <p>
                      We deliver reliable IT infrastructure and network solutions, including secure network installation, 
                      maintenance, and data protection. Our solutions ensure seamless connectivity, improved network performance, 
                      and uninterrupted business operations.
                    </p>

                  </div>

                </div>

              </article>


              <div className="space50"></div>


              {/* ===============================
                  OUR APPROACH
              ================================ */}

              <article>

                <div className="details-post-area">

                  <div className="row">

                    <div className="col-lg-12">

                      <div className="heading1">

                        <h5>Our Approach</h5>

                        <div className="space16"></div>

                        <p>
                         We provide customized IT infrastructure and network solutions, 
                         from network planning and design to secure installation, ensuring reliable connectivity and 
                         minimal business disruption.

                        </p>

                      </div>

                    </div>


                    {/* Secure By Design */}

                    <div className="col-lg-6">

                      <div className="space30"></div>

                      <div className="heading1 approach-card">

                        <h5>Secure by Design</h5>

                        <div className="space20"></div>

                        <p>
                          Our secure network solutions include firewall configuration, access control, 
                          and data protection to safeguard your business IT infrastructure from cyber threats.
                        </p>

                      </div>

                    </div>


                    {/* Built To Scale */}

                    <div className="col-lg-6">

                      <div className="space30"></div>

                      <div className="heading1 approach-card">

                        <h5>Built to Scale</h5>

                        <div className="space20"></div>

                        <p>
                       We design scalable business network solutions for small offices and multi-branch organizations,
                        supporting future growth with reliable and flexible IT infrastructure.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </article>


              <div className="space50"></div>


              {/* ===============================
                  NETWORKING SERVICES
              ================================ */}

              <article>

                <div className="details-post-area">

                  <div className="heading1">

                    <h5>Our Networking Services</h5>

                    <div className="space16"></div>

                    <div className="space20"></div>

                    <ul className="expart-list">

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>

                        <span className="text">
                          Network Setup
                        </span>
                      </li>

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>

                        <span className="text">
                          LAN / WAN
                        </span>
                      </li>

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>
                        <span className="text">
                          Wi-Fi Infrastructure
                        </span>
                      </li>

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>

                        <span className="text">
                          Router & Switch Configuration
                        </span>
                      </li>

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>

                        <span className="text">
                          Firewall Setup
                        </span>
                      </li>

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>

                        <span className="text">
                          Server Networking
                        </span>
                      </li>

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>

                        <span className="text">
                          Structured Cabling
                        </span>
                      </li>

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>

                        <span className="text">
                          Network Maintenance
                        </span>
                      </li>

                      <li>
                        <span className="erp-check">
                          <i className="bi bi-star-fill"></i>
                        </span>
                        <span className="text">
                          IT Infrastructure Consulting
                        </span>
                      </li>

                    </ul>

                  </div>

                </div>

              </article>


              <div className="space20"></div>


              {/* ===============================
                  RELATED SERVICES
              ================================ */}

              <div className="row related-services-row">

                {/* ERP */}

                <div className="col-lg-6 col-md-6">

                  <div className="servcie2-box servcie2-box-2">

                    <div className="icon">
                      <img
                        src="/assets/img/icons/service-page-icon1.png"
                        alt="ERP Solutions"
                      />
                    </div>

                    <Link
                      to="/erp-solutions"
                      className="arrow"
                    >
                      <i className="bi bi-arrow-right"></i>
                    </Link>

                    <div className="heading1">

                      <h4>
                        <Link to="/erp-solutions">
                          ERP Solutions
                        </Link>
                      </h4>

                      <div className="space16"></div>

                      <p>
                        Smart ERP systems that unify your business
                        operations and give you real-time visibility.
                      </p>

                    </div>

                  </div>

                </div>


                {/* Website Development */}

                <div className="col-lg-6 col-md-6">

                  <div className="servcie2-box servcie2-box-2">

                    <div className="icon">
                      <img
                        src="/assets/img/icons/service-page-icon2.png"
                        alt="Website Development"
                      />
                    </div>

                    <Link
                      to="/website-development"
                      className="arrow"
                    >
                      <i className="bi bi-arrow-right"></i>
                    </Link>

                    <div className="heading1">

                      <h4>
                        <Link to="/website-development">
                          Website Development
                        </Link>
                      </h4>

                      <div className="space16"></div>

                      <p>
                       SEO-friendly websites that attract customers and improve online visibility.
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              <div className="space50"></div>


              {/* ===============================
                  FAQ
              ================================ */}

              <div className="faq-area-all">

                <div className="heading1">

                  <h5>
                    Frequently Asked Question
                  </h5>

                </div>

                <div className="space20"></div>


                <div
                  className="accordion accordion1 accordion-flush"
                  id="accordionFlushExample"
                >

                  {data.slice(0, 4).map((item, index) => (

                    <div
                      key={index}
                      className={`accordion-item ${index === openItemIndex ? "active" : ""
                        }`}
                    >

                      <h2
                        onClick={() => handleItemClick(index)}
                        className="accordion-header"
                        id={`flush-heading-${index}`}
                      >

                        <button
                          className="accordion-button"
                          type="button"
                        >
                          {item.title}
                        </button>

                      </h2>


                      {index === openItemIndex && (

                        <div
                          ref={accordionContentRef}
                          className="accordion-collapse accordion-content show"
                        >

                          <div className="accordion-body">
                            {item.desc}
                          </div>

                        </div>

                      )}

                    </div>

                  ))}

                </div>

              </div>
{/* IT NETWORKING CTA SECTION */}

<section className="it-networking-cta">
  <div className="it-networking-cta-content">

    <h3>Need Reliable IT Networking Solutions?</h3>

    <p>
      Connect with SBros Tech for secure and reliable IT networking
      services in Singapore.
    </p>

    <Link to="/contact-us" className="it-networking-cta-btn">
      Contact Us
      <i className="bi bi-arrow-right"></i>
    </Link>

  </div>
</section>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ServiceITNetworking;