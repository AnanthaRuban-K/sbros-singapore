
import { useState } from "react";
import { Link } from "react-router-dom";

/* ==========================================
   SOFTWARE DEVELOPMENT SERVICES
========================================== */

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
    desc: "ERP and CRM integration for connected business operations.",
  },
  {
    title: "Software Maintenance & Support",
    desc: "Existing software bug fixes and performance improvements.",
  },
];

/* ==========================================
   TECHNOLOGY EXPERTISE
========================================== */

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

/* ==========================================
   RELATED SERVICES
========================================== */

const relatedServices = [
  {
    title: "Network Solutions",
    to: "/it-networking",
    icon: "/assets/img/icons/service-page-icon1.png",
    desc: "Strategic IT planning, network infrastructure design, and business process analysis to strengthen your technology foundation.",
  },
  {
    title: "Website Development",
    to: "/website-development",
    icon: "/assets/img/icons/service-page-icon2.png",
    desc: "Responsive and high-performance websites designed to provide an excellent digital experience across all devices.",
  },
];

/* ==========================================
   SOFTWARE DEVELOPMENT FAQ DATA
========================================== */

const softwareFaqs = [
  {
    category: "General Software Development",
    subtitle: "Understanding our software development services",
    questions: [
      {
        title:
          "How can I contact SBros Tech for software development services in Singapore?",
        desc:
          "You can contact SBros Tech through our Contact Us page to discuss your software development requirements. Our team will understand your business needs and recommend suitable software solutions.",
      },
      {
        title:
          "What software development services does SBros Tech offer?",
        desc:
          "SBros Tech provides custom ERP development, HRM and payroll solutions, CRM software, web and mobile applications, AI automation, API integration and software maintenance services.",
      },
      {
        title:
          "Why should businesses choose custom software development?",
        desc:
          "Custom software is designed around your business requirements. It helps streamline workflows, improve productivity, reduce manual tasks and support long-term business growth.",
      },
    ],
  },

  {
    category: "Custom Software & ERP Solutions",
    subtitle: "Business applications built around your needs",
    questions: [
      {
        title:
          "How can I contact SBros Tech to develop custom ERP or business management software?",
        desc:
          "You can contact SBros Tech through our Contact Us page to discuss your ERP or business management software requirements. Our team can help identify the right solution based on your business operations.",
      },
      {
        title:
          "What is the difference between custom ERP and ready-made ERP software?",
        desc:
          "Custom ERP software is developed according to specific business workflows, while ready-made ERP software offers standard features for general business requirements. Custom ERP provides greater flexibility to match your operations.",
      },
      {
        title:
          "Does SBros Tech provide HRM, payroll and CRM software development?",
        desc:
          "Yes. SBros Tech develops HRM, payroll and CRM solutions to manage employee records, attendance, leave, payroll, customer information, leads and sales activities.",
      },
    ],
  },

  {
    category: "Technology & Development Process",
    subtitle: "Our technologies and development capabilities",
    questions: [
      {
        title:
          "How can I contact SBros Tech to discuss my software project requirements?",
        desc:
          "You can reach our team through the Contact Us page on the SBros Tech website. Share your project requirements, and our team will help you explore suitable development solutions.",
      },
      {
        title:
          "Which technologies does SBros Tech use for software development?",
        desc:
          "SBros Tech works with modern technologies such as React, Next.js, JavaScript, Node.js, Python, PHP, MySQL, MongoDB and PostgreSQL to develop scalable software applications.",
      },
      {
        title:
          "Does SBros Tech develop web and mobile applications?",
        desc:
          "Yes. We develop custom web applications, business portals and Android and iOS mobile applications based on specific business and customer requirements.",
      },
    ],
  },

  {
    category: "Support & Business Solutions",
    subtitle: "Keeping your software reliable and connected",
    questions: [
      {
        title:
          "How can I contact SBros Tech for software maintenance and technical support in Singapore?",
        desc:
          "You can contact SBros Tech through our Contact Us page for software maintenance and technical support enquiries. Our team can understand your requirements and assist with suitable support solutions.",
      },
      {
        title:
          "Does SBros Tech provide ongoing software updates and bug fixes?",
        desc:
          "Yes. SBros Tech provides software maintenance services, including bug fixes, performance improvements, security updates and feature enhancements to keep applications running smoothly.",
      },
      {
        title:
          "Can SBros Tech integrate existing business systems with ERP and CRM software?",
        desc:
          "Yes. We provide API and system integration services to connect existing business applications with ERP, CRM and other platforms, enabling smoother data exchange and workflow management.",
      },
    ],
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */

const ServiceDetailsLeft1 = () => {
  const [openFaq, setOpenFaq] = useState("0-0");

  const handleFaqClick = (id) => {
    setOpenFaq((previous) => (previous === id ? null : id));
  };

  return (
    <div className="professional-service-page">
      <div className="container">
        <div className="service-content-wrapper">
          <div className="service-details-post">

            {/* ==================================
                MAIN INTRODUCTION
            ================================== */}

            <article className="service-section">
              <div className="service-main-image">
                <img
                  src="/assets/img/service/software.jpg"
                  alt="Custom Software Development Services"
                />
              </div>

              <div className="service-intro">
                <span className="service-label">
                  SOFTWARE SOLUTIONS
                </span>

                <h2>Software Development</h2>

                <p>
                  At SBros Tech we offer bespoke software development
                  services in Singapore to help streamline processes,
                  increase productivity and drive growth. We create
                  software solutions including ERP, HRM, CRM, Web &
                  Mobile Applications that can be scaled to fit your
                  business needs.
                </p>
              </div>
            </article>

            {/* ==================================
                OUR APPROACH
            ================================== */}

            <article className="service-section approach-section">
              <div className="section-heading">
                <span>01</span>

                <div>
                  <h3>Our Approach</h3>
                </div>
              </div>

              <div className="section-content">
                <p>
                  We take a structured and client-focused approach
                  to developing new software for you. We work with
                  you to understand what you need to achieve, and
                  create an efficient solution that meets your needs.
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

            {/* ==================================
                OUR EXPERTISE
            ================================== */}

            <article className="service-section expertise-section">
              <div className="section-heading">
                <span>02</span>

                <div>
                  <h3>Our Expertise</h3>

                  <p>
                    We use modern technologies and scalable
                    development practices to build secure,
                    responsive and high-performance software
                    applications. Our technical expertise covers
                    frontend, backend, database, mobile and cloud
                    technologies.
                  </p>
                </div>
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

            {/* ==================================
                RELATED SERVICES
            ================================== */}

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
                        <img
                          src={service.icon}
                          alt={service.title}
                        />
                      </div>

                      <Link
                        to={service.to}
                        className="service-arrow"
                        aria-label={`Explore ${service.title}`}
                      >
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>

                    <h4>
                      <Link to={service.to}>
                        {service.title}
                      </Link>
                    </h4>

                    <p>{service.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ==================================
                PROFESSIONAL FAQ SECTION
            ================================== */}

            <section className="sbros-faq-section">

              {/* FAQ HEADER */}

              <div className="sbros-faq-header">
                <div className="sbros-faq-heading">
                  <span className="sbros-faq-eyebrow">
                    HAVE QUESTIONS?
                  </span>

                  <h3>
                    Frequently Asked <span>Questions</span>
                  </h3>

                  <p>
                    Everything you need to know about our software
                    development services, technologies and business
                    solutions.
                  </p>
                </div>

                <div className="sbros-faq-count">
                  <strong>12</strong>
                  <span>Common Questions</span>
                </div>
              </div>

              {/* FAQ CATEGORIES */}

              <div className="sbros-faq-groups">
                {softwareFaqs.map((group, groupIndex) => (
                  <div
                    className="sbros-faq-group"
                    key={group.category}
                  >

                    {/* CATEGORY TITLE */}

                    <div className="sbros-faq-category">
                      <div className="sbros-faq-category-number">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </div>

                      <div className="sbros-faq-category-info">
                        <h4>{group.category}</h4>
                        <p>{group.subtitle}</p>
                      </div>

                      <span className="sbros-faq-category-count">
                        {String(group.questions.length).padStart(
                          2,
                          "0"
                        )}{" "}
                        FAQs
                      </span>
                    </div>

                    {/* QUESTIONS */}

                    <div className="sbros-faq-list">
                      {group.questions.map(
                        (item, questionIndex) => {
                          const faqId = `${groupIndex}-${questionIndex}`;
                          const isOpen = openFaq === faqId;

                          return (
                            <div
                              className={`sbros-faq-item ${
                                isOpen ? "active" : ""
                              }`}
                              key={faqId}
                            >

                              <button
                                type="button"
                                className="sbros-faq-question"
                                onClick={() =>
                                  handleFaqClick(faqId)
                                }
                                aria-expanded={isOpen}
                                aria-controls={`faq-answer-${faqId}`}
                                id={`faq-question-${faqId}`}
                              >

                                <span className="sbros-faq-question-number">
                                  {String(
                                    questionIndex + 1
                                  ).padStart(2, "0")}
                                </span>

                                <span className="sbros-faq-question-title">
                                  {item.title}
                                </span>

                                <span className="sbros-faq-toggle">
                                  <i
                                    className={
                                      isOpen
                                        ? "bi bi-dash"
                                        : "bi bi-plus"
                                    }
                                  ></i>
                                </span>

                              </button>

                              <div
                                id={`faq-answer-${faqId}`}
                                className={`sbros-faq-answer-wrapper ${
                                  isOpen ? "show" : ""
                                }`}
                                role="region"
                                aria-labelledby={`faq-question-${faqId}`}
                                aria-hidden={!isOpen}
                              >
                                <div className="sbros-faq-answer">
                                  <p>{item.desc}</p>
                                </div>
                              </div>

                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ CONTACT CTA */}

              <div className="sbros-faq-cta">
                <div className="sbros-faq-cta-content">
                  <span>
                    LET'S BUILD SOMETHING GREAT
                  </span>

                  <h3>
                    Ready to Build Your Custom Software Solution?
                  </h3>

                  <p>
                    Transform your business operations with custom
                    software development from SBros Tech. Contact
                    our team to discuss your requirements and
                    explore the right software solution for your
                    business.
                  </p>
                </div>

                <Link
                  to="/contact-us"
                  className="sbros-faq-cta-button"
                >
                  Talk to Our Experts
                  <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>

            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsLeft1;
