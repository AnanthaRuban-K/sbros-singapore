import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

/* =========================================================
   CONTENT
========================================================= */

const approachItems = [
  {
    title: "Business Understanding",
    description: "Identifying project requirements and business objectives.",
    icon: "fa-lightbulb",
  },
  {
    title: "User-Focused Design",
    description: "Creating clear and easy-to-use digital experiences.",
    icon: "fa-pen-ruler",
  },
  {
    title: "Responsive Development",
    description: "Building websites that adapt to different screen sizes.",
    icon: "fa-mobile-screen-button",
  },
  {
    title: "Performance Optimization",
    description: "Focusing on smooth website functionality and performance.",
    icon: "fa-gauge-high",
  },
  {
    title: "Search-Friendly Structure",
    description: "Applying SEO-friendly website development practices.",
    icon: "fa-magnifying-glass",
  },
];

const benefits = [
  "Different website categories and business requirements.",
  "Responsive and user-friendly website experiences.",
  "Business-focused website structures.",
  "Digital platforms designed around client requirements.",
  "Practical website solutions for different industries.",
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    id: "01",
    title: "First Choice Hub",
    category: "Corporate Website Development",
    image: "/assets/img/about/firstchoice.jpg",
    description:
      "A professional business website presenting software development, ERP systems, digital marketing, networking, security and IT consulting services.",
    link: "https://firstchoicehub.com.sg/",
  },
  {
    id: "02",
    title: "ANS Fresh & Frozen",
    category: "E-Commerce Website Development",
    image: "/assets/img/about/ansfresh.jpg",
    description:
      "An e-commerce platform for fresh food and seafood, designed to support product browsing, online shopping and convenient customer ordering.",
    link: "https://ansfreshmeat.com.sg/",
  },
  {
    id: "03",
    title: "Tuck Lee Ice Pte Ltd",
    category: "Corporate Website Development",
    image: "/assets/img/about/t2.jpeg",
    description:
      "A professional corporate website showcasing Tuck Lee's food-grade ice products, ice solutions, ice sculptures, ice bath services, equipment rental and cold-chain delivery solutions across Singapore.",
    link: "https://tucklee1935.sg/",
  },
  {
    id: "04",
    title: "Gold Sea Group",
    category: "Business Website Development",
    image: "/assets/img/about/goldsea.jpg",
    description:
      "A professional group website presenting engineering, maritime, mechanical, project management and quality assurance services.",
    link: "https://goldseagroups.com/",
  },
];

/* =========================================================
   FAQ CONTENT
========================================================= */

const faqGroups = [
  {
    title: "General",
    questions: [
      {
        question: "What types of projects does SBros Tech handle?",
        answer:
          (
          <>
            SBros Tech works on corporate websites, business websites, e-commerce platforms and other digital solutions based on business requirements. To discuss your project ideas, visit our{" "}
            <a href="/contact-us" className="sb-faq-link">
              Contact Us
            </a>{" "}
            page and connect with our team.
          </>
        ),
      },
      {
        question: "Where can I view SBros Tech's completed projects?",
        answer:
          "You can explore the Projects page on the SBros Tech website to view selected projects, including First Choice Hub, ANS Fresh & Frozen, Tuck Lee Ice and Gold Sea Group.",
      },
      {
        question: "Does SBros Tech work with businesses from different industries?",
        answer:
          "Yes. Our project portfolio includes businesses from IT, food and e-commerce, ice manufacturing, engineering and industrial sectors.",
      },
      {
        question: "What makes the SBros Tech project portfolio different?",
        answer:
          "Our portfolio showcases different website categories and business requirements, highlighting our focus on responsive design, user-friendly experiences and practical digital solutions.",
      },
    ],
  },
  {
    title: "Website Development Projects",
    questions: [
      {
        question: "Does SBros Tech develop corporate and business websites?",
        answer:
          (
          <>
            Yes. SBros Tech develops professional corporate and business websites to help companies present their services, showcase business information and strengthen their online presence. To discuss your website requirements,{" "}
            <a href="/contact-us" className="sb-faq-link">
              Contact Us
            </a>
            .
          </>
        ),
      },
      {
        question: "What is included in a corporate website project?",
        answer:
          "A corporate website project may include company information, service pages, business details, contact information and responsive website layouts based on the company's requirements.",
      },
      {
        question: "Does SBros Tech develop e-commerce websites?",
        answer:
          "Yes. SBros Tech develops e-commerce websites that support product browsing, online shopping and customer ordering based on business requirements.",
      },
      {
        question: "Are SBros Tech websites responsive?",
        answer:
          "SBros Tech focuses on responsive website development to ensure websites adapt to desktop, tablet and mobile screen sizes.",
      },
    ],
  },
  {
    title: "Project Requirements and Development",
    questions: [
      {
        question: "Can I request a website or software project based on my business needs?",
        answer:
          (
          <>
            Yes. SBros Tech provides digital solutions based on individual business requirements and project objectives. Share your ideas and requirements with our team through the{" "}
            <a href="/contact-us" className="sb-faq-link">
              Contact Us
            </a>{" "}
            page.
          </>
        ),
      },
      {
        question: "How does SBros Tech understand project requirements?",
        answer:
          "The project begins by understanding the business goals, target audience, required features and technical requirements before planning the development approach.",
      },
      {
        question: "Can an existing website be redesigned or improved?",
        answer:
          "Yes. Website redesign and improvement requirements can be discussed with the SBros Tech team based on the existing website and the changes needed.",
      },
      {
        question: "Does SBros Tech provide website maintenance and support?",
        answer:
          "Yes. SBros Tech offers website maintenance services, including updates, improvements and technical support based on project requirements.",
      },
    ],
  },
  {
    title: "Project Enquiries and Business Support",
    questions: [
      {
        question: "How can I start a new project with SBros Tech?",
        answer:
          (
          <>
            You can start by sharing your project requirements, business goals and preferred solution with our team. Visit our{" "}
            <a href="/contact-us" className="sb-faq-link">
              Contact Us
            </a>{" "}
            page to make a project enquiry.
          </>
        ),
      },
      {
        question: "How can I enquire about a project featured on the website?",
        answer:
          "You can contact SBros Tech and mention the project name you are interested in. Our team can help you with relevant project enquiries.",
      },
      {
        question: "Does SBros Tech provide customized digital solutions?",
        answer:
          "Yes. SBros Tech offers customized website and software development solutions based on business needs, project requirements and functional expectations.",
      },
      {
        question: "Where can I find more information about SBros Tech services?",
        answer:
          "Visit the Services page to explore ERP solutions, software development, website development, IT networking and other services offered by SBros Tech.",
      },
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function Testimonial5() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const selectGroup = (index) => {
    setActiveGroup(index);
    setActiveQuestion(0);
  };

  const currentGroup = faqGroups[activeGroup];
  const currentFaq = currentGroup.questions[activeQuestion];

  return (
    <>
      <Helmet>
        <title>
          Our Projects – Delivering Digital Solutions for Businesses | SBros Tech
        </title>

        <meta
          name="description"
          content="Explore the projects developed by SBros Tech for businesses across different industries. Our portfolio showcases corporate websites, business websites and e-commerce platforms."
        />

        <link rel="canonical" href="https://sbrostech.com.sg/Projects" />
      </Helmet>

      <main className="sb-projects-page">

        {/* 1. HERO SECTION (compact redesign) */}

        <section className="sb-hx">
          <div className="sb-hx-glow sb-hx-glow-one" aria-hidden="true"></div>
          <div className="sb-hx-glow sb-hx-glow-two" aria-hidden="true"></div>

          <div className="container">
            <div className="sb-hx-grid">

              {/* LEFT: TEXT */}

              <div className="sb-hx-copy">
                <span className="sb-hx-chip">
                  <i className="fa-solid fa-layer-group"></i>
                  Our Projects
                </span>

                <h1>
                  Delivering Digital Solutions
                  <span>for Businesses</span>
                </h1>

                <p>
                  Explore the projects developed by SBros Tech for businesses
                  across different industries. Our portfolio showcases
                  corporate websites, business websites and e-commerce
                  platforms designed to meet different business requirements.
                  Each project reflects our focus on user-friendly design,
                  responsive layouts and practical digital solutions that
                  support business growth.
                </p>

                <div className="sb-hx-actions">
                  <a href="#our-projects" className="sb-hx-btn sb-hx-btn-primary">
                    View Projects
                    <i className="fa-solid fa-arrow-down"></i>
                  </a>
                  <a href="/contact-us" className="sb-hx-btn sb-hx-btn-ghost">
                    Start Your Project
                  </a>
                </div>
              </div>

              {/* RIGHT: FLOATING PROJECT SCREENS */}

              <div className="sb-hx-stage" aria-hidden="true">
                <div className="sb-hx-ring"></div>

                <div className="sb-hx-shot sb-hx-shot-main">
                  <div className="sb-hx-bar">
                    <i></i><i></i><i></i>
                    <em>firstchoicehub.com.sg</em>
                  </div>
                  <img src={projects[0].image} alt="" loading="eager" />
                </div>

                <div className="sb-hx-shot sb-hx-shot-top">
                  <div className="sb-hx-bar">
                    <i></i><i></i><i></i>
                  </div>
                  <img src={projects[1].image} alt="" loading="eager" />
                </div>

                <div className="sb-hx-shot sb-hx-shot-bottom">
                  <div className="sb-hx-bar">
                    <i></i><i></i><i></i>
                  </div>
                  <img src={projects[2].image} alt="" loading="eager" />
                </div>

                <span className="sb-hx-pill sb-hx-pill-one">
                  <i className="fa-solid fa-building"></i> Corporate
                </span>
                <span className="sb-hx-pill sb-hx-pill-two">
                  <i className="fa-solid fa-cart-shopping"></i> E-Commerce
                </span>
                <span className="sb-hx-pill sb-hx-pill-three">
                  <i className="fa-solid fa-mobile-screen-button"></i> Responsive
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* 2. OUR APPROACH */}

        <section className="sb-approach-section">
          <div className="container">

            <div className="sb-approach-header">
              <h2>
                Our <span>Approach</span>
              </h2>

              <p>
                We focus on understanding business requirements and creating
                digital solutions that align with project goals. Our approach
                emphasizes:
              </p>
            </div>

            <div className="sb-approach-grid">
              {approachItems.map((item) => (
                <div className="sb-approach-card" key={item.title}>

                  <div className="sb-approach-card-top">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="sb-approach-card-line"></div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. WHY EXPLORE SBROS TECH PROJECTS? */}

        <section className="sb-why-section">
          <div className="container">

            <div className="sb-why-layout">

              <div className="sb-why-heading">
                <h2>
                  Why Explore <span>SBros Tech Projects?</span>
                </h2>

                <p>
                  Our project portfolio helps businesses understand the types
                  of digital solutions we deliver.
                </p>
              </div>

              <div className="sb-benefit-list">
                {benefits.map((benefit, index) => (
                  <div className="sb-benefit-item" key={benefit}>

                    <span className="sb-benefit-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="sb-benefit-content">
                      <h3>{benefit}</h3>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 4. WEBSITE DEVELOPMENT PROJECTS */}

        <section className="sb-project-showcase" id="our-projects">
          <div className="container">

            <div className="sb-section-heading">
              <h2>
                Our Website <span>Development Projects</span>
              </h2>

              <p>
                Discover how SBros Tech helps businesses build their online
                presence through professional website development and
                customized digital solutions.
              </p>
            </div>

            <div className="sb-project-grid">

              {projects.map((project) => (
                <article className="sb-project-card" key={project.id}>

                  <a
                    className="sb-project-image-wrap"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} website project`}
                      loading="lazy"
                    />

                    <div className="sb-project-image-shade"></div>

                    <span className="sb-project-number">{project.id}</span>

                    <span className="sb-project-open">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                  </a>

                  <div className="sb-project-card-info">

                    <div>
                      <span className="sb-project-category">
                        {project.category}
                      </span>

                      <h3>{project.title}</h3>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sb-project-arrow"
                      aria-label={`View ${project.title}`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>

                    <p>{project.description}</p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sb-project-link"
                    >
                      Visit Website
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* 5. FREQUENTLY ASKED QUESTIONS */}

        <section className="sb-faq-section">
          <div className="container">

            <div className="sb-faq-header">
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>
            </div>

            <div className="sb-faq-topics" role="tablist" aria-label="FAQ topics">
              {faqGroups.map((group, groupIndex) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={groupIndex === activeGroup}
                  className={`sb-faq-topic ${
                    groupIndex === activeGroup ? "sb-faq-topic-active" : ""
                  }`}
                  key={group.title}
                  onClick={() => selectGroup(groupIndex)}
                >
                  {group.title}
                </button>
              ))}
            </div>

            <div className="sb-faq-window">

              <div className="sb-faq-window-bar" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                className="sb-faq-conversation"
                key={`${activeGroup}-${activeQuestion}`}
                aria-live="polite"
              >

                <div className="sb-faq-msg sb-faq-msg-user">
                  <div className="sb-faq-bubble">{currentFaq.question}</div>

                  <span className="sb-faq-avatar" aria-hidden="true">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </div>

                <div className="sb-faq-typing" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="sb-faq-msg sb-faq-msg-bot">

                  <span className="sb-faq-avatar sb-faq-avatar-bot" aria-hidden="true">
                    <i className="fa-solid fa-headset"></i>
                  </span>

                  <div className="sb-faq-bubble">{currentFaq.answer}</div>

                </div>
              </div>

              <div className="sb-faq-chips">
                {currentGroup.questions.map((faq, questionIndex) => (
                  <button
                    type="button"
                    className={`sb-faq-chip ${
                      questionIndex === activeQuestion ? "sb-faq-chip-active" : ""
                    }`}
                    key={faq.question}
                    onClick={() => setActiveQuestion(questionIndex)}
                    aria-pressed={questionIndex === activeQuestion}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION */}

        <section className="sb-project-cta">

          <div className="sb-cta-pattern"></div>

          <div className="container">
            <div className="sb-cta-inner">

              <div className="sb-cta-content">

                <h2>
                  Looking for a Digital Solution
                  <span>for Your Business?</span>
                </h2>

                <p>
                  Have a website or software project in mind? SBros Tech helps
                  businesses explore digital solutions based on their
                  requirements. Contact our team to discuss your project and
                  take the next step towards your business goals.
                </p>

                <div className="sb-cta-buttons">

                  {/* <a href="/contact-us" className="sb-cta-primary">
                    Start Your Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </a> */}

                  <a href="/contact-us" className="sb-cta-secondary">
                    Contact Us
                  </a>

                </div>
              </div>

              <div className="sb-cta-graphic" aria-hidden="true">

                <div className="sb-cta-circle sb-cta-circle-one"></div>
                <div className="sb-cta-circle sb-cta-circle-two"></div>
                <div className="sb-cta-center"></div>

                <div className="sb-cta-orbit-icon sb-cta-icon-one">
                  <i className="fa-solid fa-code"></i>
                </div>

                <div className="sb-cta-orbit-icon sb-cta-icon-two">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>

                <div className="sb-cta-orbit-icon sb-cta-icon-three">
                  <i className="fa-solid fa-globe"></i>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Testimonial5;