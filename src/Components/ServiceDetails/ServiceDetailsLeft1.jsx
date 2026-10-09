import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Data/home3/faq1.json";

const approachServices = [
  {
    title: "Custom ERP Development",
    desc: "Large business projects and long-term clients.",
  },
  {
    title: "HRM & Payroll Solutions",
    desc: "Employee, attendance, leave and payroll systems.",
  },
  {
    title: "CRM & Workflow Automation",
    desc: "Lead management, sales and operational automation.",
  },
  {
    title: "Custom Web Application Development",
    desc: "Business portals and tailored applications.",
  },
  {
    title: "AI & Business Automation",
    desc: "AI integration and repetitive task automation.",
  },
  {
    title: "Cloud, Integration & Support",
    desc: "Cloud setup, system integration and ongoing technical support.",
  },
  {
    title: "Mobile App Development",
    desc: "Android and iOS apps built for your business needs.",
  },
  {
    title: "API & System Integration",
    
      desc:"ERP and CRM integration",
     
  },
  {
    title: "Software Maintenance & Support",
   
     desc: "Existing software bug fixes",
     
  },
];

const expertiseList = [
  {
    title: "Frontend Development",
    desc: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Angular, Vue.js",
  },
  {
    title: "Backend Development",
    desc: "Node.js, Python, Ruby on Rails, PHP, .NET",
  },
  {
    title: "Database Technologies",
    desc: "MySQL, MongoDB, PostgreSQL, Oracle",
  },
  {
    title: "Mobile Development",
    desc: "iOS, Android, Swift, Java, Kotlin, React Native",
  },
  {
    title: "Cloud Platforms",
    desc: "AWS, Microsoft Azure, Google Cloud Platform",
  },
];

const relatedServices = [
  {
    title: "Network Solutions",
    to: "/IT-Networking",
    icon: "/assets/img/icons/service-page-icon1.png",
    desc: "Strategic IT planning, network infrastructure design, and business process analysis to strengthen your technology foundation.",
  },
  {
    title: "Website Development",
    to: "/Website-Development",
    icon: "/assets/img/icons/service-page-icon2.png",
    desc: "Responsive and high-performance websites designed to provide an excellent digital experience across all devices.",
  },
];

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
                  dedicated to delivering high-quality, scalable, and
                  innovative software solutions that drive real business
                  growth — because at SBROS Tech, your dreams are our mission.
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

              <div className="two-column-content approach-grid">
                {approachServices.map((service, index) => (
                  <div className="content-card" key={service.title}>
                    <div className="card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4>{service.title}</h4>

                    {service.desc && <p>{service.desc}</p>}

                    {service.points && (
                      <ul className="card-points">
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
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
                {expertiseList.map((item) => (
                  <li key={item.title}>
                    <span className="expertise-check">
                      <i className="bi bi-check-lg"></i>
                    </span>

                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            {/* ================= RELATED SERVICES ================= */}
            <section className="related-services">
              <div className="section-heading">
                <span>03</span>
                <div>
                  <h3>Related Services</h3>
                  <p>Explore our other technology solutions.</p>
                </div>
              </div>

              <div className="related-services-grid">
                {relatedServices.map((service) => (
                  <div className="service-card" key={service.title}>
                    <div className="service-card-top">
                      <div className="service-icon">
                        <img src={service.icon} alt={service.title} />
                      </div>

                      <Link to={service.to} className="service-arrow">
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>

                    <h4>
                      <Link to={service.to}>{service.title}</Link>
                    </h4>

                    <p>{service.desc}</p>
                  </div>
                ))}
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

                      <span className="faq-title">{item.title}</span>

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