import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BreadCumb from "../Common/BreadCumb";
import data from '../../Data/home3/faq1.json';

const ServiceERP = () => {

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
    <div>
      <BreadCumb Title="ERP Solutions"></BreadCumb>

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
                  <li><a href="#">ERP</a></li>
                  <li><a href="#">Inventory Management</a></li>
                  <li><a href="#">Process Automation</a></li>
                  <li><a href="#">Business Systems</a></li>
                  <li><a href="#">Financial Reporting</a></li>
                </ul>
              </div>

              {/* <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Download Brochure</h3>
                <p>With a focus on excellence and a commitment to exceeding expectations, our experienced team at SBROS Tech (S) Pte Ltd is here to power your business forward.</p>
                <div className="download-btns">
                  <a className="daownload1" href="#">PDF Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                  <a className="daownload2" href="#">DOC Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                </div>
              </div> */}

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
                      <img src="/assets/img/service/erp.jpg" alt="" />
                    </div>
                    <div className="space30"></div>
                    <div className="heading1">
                      <h2>ERP Solutions</h2>
                      <div className="space16"></div>
                      <p>We implement smart ERP systems that unify your business operations, giving you real-time visibility and control across departments. Our ERP solutions help you streamline workflows, reduce manual errors, and make faster, data-driven decisions.</p>
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
                          <p>We start by mapping your existing workflows, then configure and deploy an ERP system tailored to your processes — with training and ongoing support to ensure smooth adoption across your team.</p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="space30"></div>
                        <div className="heading1">
                          <h5>System Implementation</h5>
                          <div className="space20"></div>
                          <p>We handle end-to-end ERP implementation — from requirement analysis and module selection to configuration, data migration, and go-live support tailored to your business.</p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="space30"></div>
                        <div className="heading1">
                          <h5>Process Automation</h5>
                          <div className="space20"></div>
                          <p>We automate repetitive business processes — inventory tracking, order management, and financial workflows — so your team can focus on higher-value work.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="space50"></div>
                <article>
                  <div className="details-post-area">
                    <div className="heading1">
                      <h5>Our Expertise</h5>
                      <div className="space16"></div>
                      <div className="space20"></div>
                      <ul className="expart-list">
                        <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Implementation:</span> ERP setup, configuration, and module customization</li>
                        <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Inventory:</span> Stock control, supply chain, and warehouse management</li>
                        <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Finance:</span> Financial reporting, accounting, and budgeting modules</li>
                        <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Integration:</span> Connecting ERP with existing tools and third-party systems</li>
                        <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Support:</span> User training, system maintenance, and ongoing upgrades</li>
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
                      <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                      <div className="heading1">
                        <h4><Link to="/service/service-details">Software Development</Link></h4>
                        <div className="space16"></div>
                        <p>Custom software solutions tailored to your business needs, from web apps to enterprise systems.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="servcie2-box servcie2-box-2">
                      <div className="icon">
                        <img src="/assets/img/icons/service-page-icon2.png" alt="" />
                      </div>
                      <Link to="/service/service-trading" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                      <div className="heading1">
                        <h4><Link to="/service/service-trading">Trading</Link></h4>
                        <div className="space16"></div>
                        <p>Smart trading solutions that simplify operations and support better business decisions.</p>
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
    </div>
  );
};

export default ServiceERP;