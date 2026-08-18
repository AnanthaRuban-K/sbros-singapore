import { useEffect, useRef, useState } from "react";
import data from '../../Data/home3/faq1.json';
import { Link } from "react-router-dom";

const ServiceDetailsCenter3 = () => {

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

    // Featured projects — replace image/title/category with your real work
    const projects = [
      { title: "Corporate Website Revamp", category: "Corporate Website", image: "/assets/img/service/service-details-img.png" },
      { title: "Online Retail Store", category: "E-commerce", image: "/assets/img/service/service-details-img.png" },
      { title: "Product Landing Page", category: "Landing Page", image: "/assets/img/service/service-details-img.png" },
      { title: "Business Blog & CMS", category: "CMS Website", image: "/assets/img/service/service-details-img.png" },
    ];

    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-8 m-auto">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">

                                  <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Websites That Turn Visitors Into Customers</h2>
                                       
                                        <div className="space16"></div>
                                        <p>A website is more than a digital brochure — it's your strongest sales tool, working around the clock. We design and build fast, responsive, SEO-ready websites that don't just look good, but convert visitors into leads and customers.</p>
                                    </div>
                                    <div className="image">
                                        <img src="/assets/img/service/website.jpg" alt="" />
                                    </div>
                                    
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                       

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Responsive & Fast</h5>
                                                <div className="space20"></div>
                                                <p>Every website we build adapts seamlessly across desktop, tablet, and mobile — with performance optimized for fast load times and better conversions.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Built to Convert</h5>
                                                <div className="space20"></div>
                                                <p>We design with your customer's journey in mind — clear calls-to-action, easy navigation, and SEO-ready structure that helps you get found and get chosen.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Our Website Services</h5>
                                        <div className="space16"></div>
                                        <p>We build a wide range of websites tailored to your business goals — from simple business sites to full-scale e-commerce platforms, all optimized for search engines and easy to maintain.</p>

                                        <div className="space20"></div>
                                        <ul className="expart-list">
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Corporate Websites</span></li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Business Websites</span></li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">E-commerce</span></li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">CMS Websites</span></li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Landing Pages</span></li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">SEO-Ready Websites</span></li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Responsive Websites</span></li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Website Maintenance</span></li>
                                        </ul>
                                </div>
                            </div>
                            </article>

                            <div className="space50"></div>

                            {/* Recent Projects Showcase */}
                            {/* <article>
                              <div className="details-post-area">
                                <div className="heading1">
                                  <h5>Recent Projects</h5>
                                  <div className="space16"></div>
                                </div>
                                <div className="row">
                                  {projects.map((project, i) => (
                                    <div className="col-lg-6 col-md-6" key={i}>
                                      <div className="space20"></div>
                                      <div className="project-thumb">
                                        <img src={project.image} alt={project.title} style={{ width: "100%", borderRadius: "8px" }} />
                                        <div className="space16"></div>
                                        <h6>{project.title}</h6>
                                        <p style={{ margin: 0, fontSize: "14px" }}>{project.category}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </article> */}

                            <div className="space20"></div>

                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="">
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
                              </div>
                
                              <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon2.png" alt="" />
                                    </div>
                                    <Link to="/service/service-it-networking" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-it-networking">IT Networking</Link></h4>
                                      <div className="space16"></div>
                                      <p>Strategic IT planning and network infrastructure design to strengthen your technology foundation.</p>
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

export default ServiceDetailsCenter3;