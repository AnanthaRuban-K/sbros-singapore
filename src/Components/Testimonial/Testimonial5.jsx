import { Link } from "react-router-dom";

const Testimonial5 = () => {
  const projects = [
    {
      title: "SASAN Construction PTE. LTD",
      category: "Corporate Website",
      description:
        "A professional corporate website designed to showcase services, projects and company information.",
      image: "/assets/img/work/sasanimg1.png",
      url: "https://www.sasansg.com/",
    },
    {
      title: "GOLDSEA GROUP",
      category: "Business Website",
      description:
        "A modern business website presenting company services, solutions and business capabilities.",
      image: "/assets/img/work/goldseaimg1.png",
      url: "https://goldseagroups.com/",
    },
    {
      title: "Tuck Lee",
      category: "Corporate Website",
      description:
        "A professional digital presence highlighting company services and business capabilities.",
      image: "/assets/img/work/tuckleeimg1.png",
      url: "https://tucklee1935.sg/",
    },
    {
      title: "First Choice Hub",
      category: "IT Solutions",
      description:
        "A technology-focused website presenting IT services and digital business solutions.",
      image: "/assets/img/work/firstchoiceimg1.png",
      url: "https://firstchoicehub.com.sg/",
    },
    {
      title: "Sky Moon Engineering",
      category: "Engineering Website",
      description:
        "A professional engineering website highlighting technical services and expertise.",
      image: "/assets/img/work/skymoonimg1.png",
      url: "https://skymooneng.com.sg/",
    },
    {
      title: "ANS Fresh & Frozen",
      category: "E-Commerce Website",
      description:
        "An attractive e-commerce platform showcasing fresh and frozen food products.",
      image: "/assets/img/work/ansimg1.png",
      url: "https://ansfreshmeat.com.sg/",
    },
    {
      title: "PINNACLE ACME",
      category: "Business Website",
      description:
        "A professional website presenting business services and company information.",
      image: "/assets/img/work/pinnacleimg1.png",
      url: "https://pinnacleacme.com/",
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">

        {/* ================================
            HEADER
        ================================= */}

        <div className="portfolio-heading">

          <span className="portfolio-label">
            OUR PORTFOLIO
          </span>

          <h2>
            Websites We've Built
          </h2>

          <p>
            Explore our collection of professional websites and
            digital solutions created for businesses across
            different industries.
          </p>

        </div>


        {/* ================================
            PROJECT GRID
        ================================= */}

        <div className="portfolio-grid">

          {projects.map((project, index) => (
            <article
              className={`portfolio-card ${
                index === projects.length - 1
                  ? "portfolio-last"
                  : ""
              }`}
              key={index}
            >

              <div className="portfolio-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />


                {/* ================================
                    HOVER OVERLAY
                ================================= */}

                <div className="portfolio-overlay">

                  <div className="portfolio-content">

                    <span className="portfolio-category">
                      {project.category}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-view-btn"
                    >
                      <span>View Project</span>

                      <span className="portfolio-btn-icon">
                        ↗
                      </span>
                    </a>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* ================================
            CTA
        ================================= */}

        <div className="portfolio-cta">

          <div className="portfolio-cta-content">

            <span>
               NEED A PROFESSIONAL WEBSITE?
            </span>

            <h3>
              
               Let's Create Your Digital Presence
            </h3>

            <p>
              Whether you need a corporate website, e-commerce platform,
      or custom web solution, our team can turn your ideas into
      a modern and effective website.
            </p>

          </div>

          <Link
            to="/contact-us"
            className="portfolio-cta-btn"
          >
            Start a Project
            <span>↗</span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Testimonial5;