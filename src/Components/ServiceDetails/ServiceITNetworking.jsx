import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/home3/faq1.json';

const ServiceITNetworking = () => {

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
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
    <div className="service-details-area-all sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sidebar-box-area mb-40">
              <h3>Search by Keyword</h3>
              <div className="search">
                <input type="text" placeholder="Type keyword here" />
                <div className="button">
                  <button><i className="bi bi-search"></i></button>
                </div>
              </div>
            </div>

            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Our Services</h3>
              <ul className="features-list">
                <li><Link to="/service/erp-solutions">ERP Solutions <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/software-development">Software Development <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/website-development">Website Development <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/it-networking">IT Networking <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/trading">Trading <span><i className="bi bi-chevron-right"></i></span></Link></li>
              </ul>
            </div>

            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Tags</h3>
              <ul className="tags">
                <li><a href="#">Network Setup</a></li>
                <li><a href="#">LAN / WAN</a></li>
                <li><a href="#">Wi-Fi Infrastructure</a></li>
                <li><a href="#">Firewall Setup</a></li>
                <li><a href="#">Structured Cabling</a></li>
              </ul>
            </div>

          

            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Get A Free Quote</h3>
              <div className="contact-form">
                <form action="#">
                  <div className="single-input">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="single-input">
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="single-input">
                    <input type="number" placeholder="Phone Number" />
                  </div>
                  <div className="single-input">
                    <textarea placeholder="Your Message" cols="30" rows="3"></textarea>
                  </div>
                  <div className="button">
                    <button className="theme-btn1">Learn More <span><i className="bi bi-arrow-right"></i></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-8 details-left-space">
            <div className="service-details-post">
              <article>
                <div className="details-post-area">
                  <div className="image">
                    <img src="/assets/img/service/networking.jpg" alt="" />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>Reliable IT Infrastructure for Your Business</h2>
                    <div className="space16"></div>
                    <p>A stable, secure network is the backbone of every modern business. We design, install, and maintain IT infrastructure that keeps your team connected, your data protected, and your operations running without interruption.</p>
                  </div>
                </div>
              </article>

              <div className="space50"></div>

              <article>
                <div className="details-post-area">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading1">
                        <h5>Our Approach</h5>
                        <div className="space16"></div>
                        <p>We assess your infrastructure needs, design a network architecture built for security and uptime, and implement it with minimal disruption to your daily operations.</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="space30"></div>
                      <div className="heading1">
                        <h5>Secure by Design</h5>
                        <div className="space20"></div>
                        <p>Every network we build includes proper firewall configuration and access controls, protecting your business from unauthorized access and threats.</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="space30"></div>
                      <div className="heading1">
                        <h5>Built to Scale</h5>
                        <div className="space20"></div>
                        <p>Whether you're a small office or a multi-branch operation, we design networks that grow with your business without needing a full rebuild.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <div className="space50"></div>
              <article>
                <div className="details-post-area">
                  <div className="heading1">
                    <h5>Our Networking Services</h5>
                    <div className="space16"></div>
                    <div className="space20"></div>
                    <ul className="expart-list">
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Network Setup</span></li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">LAN / WAN</span></li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Wi-Fi Infrastructure</span></li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Router & Switch Configuration</span></li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Firewall Setup</span></li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Server Networking</span></li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Structured Cabling</span></li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Network Maintenance</span></li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">IT Infrastructure Consulting</span></li>
                    </ul>
                  </div>
                </div>
              </article>

              <div className="space20"></div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="servcie2-box servcie2-box-2">
                    <div className="icon">
                      <img src="/assets/img/icons/service-page-icon1.png" alt="" />
                    </div>
                    <Link to="/service/service-details-right" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                    <div className="heading1">
                      <h4><Link to="/service/service-details-right">ERP Solutions</Link></h4>
                      <div className="space16"></div>
                      <p>Smart ERP systems that unify your business operations and give you real-time visibility.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="servcie2-box servcie2-box-2">
                    <div className="icon">
                      <img src="/assets/img/icons/service-page-icon2.png" alt="" />
                    </div>
                    <Link to="/service/service-details-center" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                    <div className="heading1">
                      <h4><Link to="/service/service-details-center">Website Development</Link></h4>
                      <div className="space16"></div>
                      <p>Responsive, high-performance websites that turn visitors into customers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space50"></div>

              <div className="faq-area-all">
                <div className="heading1">
                  <h5>Frequently Asked Question</h5>
                </div>
                <div className="space20"></div>

                <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                  {data.slice(0, 4).map((item, index) => (
                    <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : ""}`}>
                      <h2 onClick={() => handleItemClick(index)} className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          {item.title}
                        </button>
                      </h2>
                      <div ref={accordionContentRef} id="flush-collapseOne" className="accordion-collapse collapse accordion-content" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceITNetworking;