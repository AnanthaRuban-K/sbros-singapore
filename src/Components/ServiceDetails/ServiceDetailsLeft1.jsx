import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/home3/faq1.json";


const ServiceDetailsLeft1 = () => {
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const handleItemClick = (index) => {
  setOpenItemIndex(openItemIndex === index ? -1 : index);
};

  return (
    <div className="professional-service-page">
      <div className="container">
        <div className="service-content-wrapper">
          <div className="service-details-post">

            {/* ================= MAIN INTRO ================= */}
            <article className="service-section">
              <div className="service-main-image">
                <img
                  src="/assets/img/service/software.jpg"
                  alt="Software Development"
                />
              </div>

              <div className="service-intro">
                <span className="service-label">SOFTWARE SOLUTIONS</span>

                <h2>Software Development</h2>

                <p>
                  Welcome to SBROS Tech (S) Pte Ltd, your trusted partner for
                  comprehensive software development services tailored to meet
                  your business needs. Our team of experienced developers is
                  dedicated to delivering high-quality, scalable, and innovative
                  software solutions that drive real business growth — because
                  at SBROS Tech, your dreams are our mission.
                </p>
              </div>
            </article>

            {/* ================= OUR APPROACH ================= */}
            <article className="service-section approach-section">
              <div className="section-heading">
                <span>01</span>
                <div>
                  <h3>Our Approach</h3>
                  <p>
                    A structured and client-focused approach to building
                    reliable digital solutions.
                  </p>
                </div>
              </div>

              <div className="section-content">
                <p>
                  At SBROS Tech (S) Pte Ltd, we take a client-centric approach
                  to software development, prioritizing your unique
                  requirements and objectives. Our process begins with a
                  thorough understanding of your business goals, target
                  audience, and technical specifications.
                </p>

                <p>
                  We then collaborate closely with you at every stage of the
                  development cycle to ensure that the final product meets
                  your expectations and delivers measurable business value.
                </p>
              </div>

              <div className="two-column-content">

                <div className="content-card">
                  <div className="card-number">01</div>

                  <h4>Custom Development</h4>

                  <p>
                    Our team specializes in developing custom software
                    solutions tailored to address your specific business
                    challenges. Whether you need a web application, mobile
                    app, or enterprise system, SBROS Tech builds it around
                    your needs.
                  </p>
                </div>

                <div className="content-card">
                  <div className="card-number">02</div>

                  <h4>Full-Cycle Development</h4>

                  <p>
                    From initial concept and design to development, testing,
                    and deployment, we offer comprehensive full-cycle
                    development services to ensure a seamless and efficient
                    process from start to finish.
                  </p>
                </div>

              </div>
            </article>

            {/* ================= OUR EXPERTISE ================= */}
            <article className="service-section expertise-section">

              <div className="section-heading">
                <span>02</span>

                <div>
                  <h3>Our Expertise</h3>

                  <p>
                    Modern technologies and scalable development practices for
                    growing businesses.
                  </p>
                </div>
              </div>

              <div className="section-content">
                <p>
                  Our technical expertise enables us to create secure,
                  scalable, responsive, and high-performance applications
                  across multiple platforms. We combine modern technologies
                  with practical business requirements to deliver solutions
                  that are reliable and future-ready.
                </p>
              </div>

              <ul className="expertise-list">

                <li>
                  <span className="expertise-check">
                    <i className="bi bi-check-lg"></i>
                  </span>

                  <div>
                    <strong>Frontend Development</strong>
                    <p>
                      HTML, CSS, JavaScript, React, Angular, Vue.js
                    </p>
                  </div>
                </li>

                <li>
                  <span className="expertise-check">
                    <i className="bi bi-check-lg"></i>
                  </span>

                  <div>
                    <strong>Backend Development</strong>
                    <p>
                      Node.js, Python, Ruby on Rails, PHP, .NET
                    </p>
                  </div>
                </li>

                <li>
                  <span className="expertise-check">
                    <i className="bi bi-check-lg"></i>
                  </span>

                  <div>
                    <strong>Database Technologies</strong>
                    <p>
                      MySQL, MongoDB, PostgreSQL, Oracle
                    </p>
                  </div>
                </li>

                <li>
                  <span className="expertise-check">
                    <i className="bi bi-check-lg"></i>
                  </span>

                  <div>
                    <strong>Mobile Development</strong>
                    <p>
                      iOS, Android, Swift, Java, Kotlin, React Native
                    </p>
                  </div>
                </li>

                <li>
                  <span className="expertise-check">
                    <i className="bi bi-check-lg"></i>
                  </span>

                  <div>
                    <strong>Cloud Platforms</strong>
                    <p>
                      AWS, Microsoft Azure, Google Cloud Platform
                    </p>
                  </div>
                </li>

              </ul>
            </article>

            {/* ================= RELATED SERVICES ================= */}
            <section className="related-services">

              <div className="section-heading">
                <span>03</span>

                <div>
                  <h3>Related Services</h3>

                  <p>
                    Explore our other technology solutions.
                  </p>
                </div>
              </div>

              <div className="related-services-grid">

                <div className="service-card">
                  <div className="service-card-top">
                    <div className="service-icon">
                      <img
                        src="/assets/img/icons/service-page-icon1.png"
                        alt="Network Solutions"
                      />
                    </div>

                    <Link
                      to="/IT-Networking"
                      className="service-arrow"
                    >
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>

                  <h4>
                    <Link to="/IT-Networking">
                      Network Solutions
                    </Link>
                  </h4>

                  <p>
                    Strategic IT planning, network infrastructure design, and
                    business process analysis to strengthen your technology
                    foundation.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-card-top">
                    <div className="service-icon">
                      <img
                        src="/assets/img/icons/service-page-icon2.png"
                        alt="Website Development"
                      />
                    </div>

                    <Link
                      to="/Website-Development"
                      className="service-arrow"
                    >
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>

                  <h4>
                    <Link to="/Website-Development">
                      Website Development
                    </Link>
                  </h4>

                  <p>
                    Responsive and high-performance websites designed to
                    provide an excellent digital experience across all
                    devices.
                  </p>
                </div>

              </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="faq-section">

              <div className="section-heading faq-heading">
                <span>04</span>

                <div>
                  <h3>Frequently Asked Questions</h3>

                  <p>
                    Find answers to common questions about our software
                    development services.
                  </p>
                </div>
              </div>

              <div className="professional-faq">

                {data.slice(0, 4).map((item, index) => (

                  <div
                    key={index}
                    className={`faq-item ${
                      index === openItemIndex ? "faq-active" : ""
                    }`}
                  >

                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => handleItemClick(index)}
                    >

                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-title">
                        {item.title}
                      </span>

                      <span className="faq-icon">
                        <i
                          className={
                            index === openItemIndex
                              ? "bi bi-dash"
                              : "bi bi-plus"
                          }
                        ></i>
                      </span>

                    </button>

                    {index === openItemIndex && (
                      <div className="faq-answer">
                        <p>{item.desc}</p>
                      </div>
                    )}

                  </div>

                ))}

              </div>

            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsLeft1;