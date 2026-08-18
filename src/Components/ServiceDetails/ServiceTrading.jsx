import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/home3/faq1.json';

const ServiceTrading = () => {

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
                                <li><Link to="/service/service-details">IT Hardware Supply <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">Networking Equipment Supply <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">Software Licensing Solutions <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">Security & Surveillance Products <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">IT Procurement & Technology Consulting <span><i className="bi bi-chevron-right"></i></span></Link></li>
                            </ul>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Tags</h3>
                            <ul className="tags">
                                <li><a href="#">IT Hardware</a></li>
                                <li><a href="#">Networking</a></li>
                                <li><a href="#">Software Licensing</a></li>
                                <li><a href="#">Cybersecurity</a></li>
                                <li><a href="#">Surveillance Systems</a></li>
                                <li><a href="#">IT Procurement</a></li>
                                <li><a href="#">Technology Consulting</a></li>
                                <li><a href="#">Enterprise Solutions</a></li>
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
                                        <img src="/assets/img/service/trading.jpg" alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Professional IT Trading & Technology Supply Solutions in Singapore</h2>
                                        <div className="space16"></div>
                                        <p>Reliable technology products are the foundation of every successful business, enabling organizations to work efficiently, securely, and competitively. At SBros Tech, we offer comprehensive IT trading services in Singapore, supplying genuine computer hardware, networking equipment, software licenses, and enterprise technology solutions tailored to businesses of all sizes.</p>
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
                                                <p>From business laptops and desktop computers to servers, networking devices, cybersecurity solutions, software licenses, and complete IT infrastructure procurement, we deliver trusted products from leading global brands. Backed by competitive pricing, expert consultation, and reliable after-sales support, our team ensures your business has the right technology to achieve long-term growth and operational excellence.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>IT Hardware Supply</h5>
                                                <div className="space20"></div>
                                                <p>We supply genuine IT hardware that helps businesses build reliable, high-performance technology environments. Our products are sourced from trusted manufacturers to ensure quality, durability, and long-term performance.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Networking Equipment Supply</h5>
                                                <div className="space20"></div>
                                                <p>Build a secure and reliable network infrastructure with our enterprise networking solutions designed for businesses of all sizes.</p>
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
                                        <p>We help businesses procure the right technology solutions based on operational requirements, business objectives, and budget. Our team ensures every product we supply meets industry standards and delivers long-term value.</p>

                                        <div className="space20"></div>
                                        <ul className="expart-list">
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Software Licensing:</span> Genuine software licences that improve productivity, security, and compliance</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Security & Surveillance:</span> Advanced security and surveillance systems for business safety and control</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Hardware:</span> Business laptops, desktop computers, servers, and networking devices</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Cybersecurity:</span> Trusted cybersecurity solutions from leading global brands</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Consulting:</span> Expert IT procurement and technology consulting services</li>
                                        </ul>
                                </div>
                            </div>
                            </article>

                            <div className="space20"></div>

                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon1.png" alt="" />
                                    </div>
                                    <Link to="/service/service-it-networking" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-it-networking">IT Networking</Link></h4>
                                      <div className="space16"></div>
                                      <p>Enterprise networking solutions built for reliable, secure infrastructure across businesses of all sizes.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                            <div className="col-lg-6 col-md-6">
  <div className="">
    <div className="servcie2-box servcie2-box-2">
      <div className="icon">
        <img src="/assets/img/icons/service-page-icon2.png" alt="" />
      </div>
      <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
      <div className="heading1">
        <h4><Link to="/service/service-details">Software Development</Link></h4>
        <div className="space16"></div>
        <p>Custom software solutions tailored to your business needs, from web apps to enterprise systems.</p>
      </div>
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

                                {data.slice(0,4).map((item, index)=>(
                                    <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : "" }`}>
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

export default ServiceTrading;