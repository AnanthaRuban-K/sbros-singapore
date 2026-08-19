import { Link } from "react-router-dom";

const Testimonial5 = () => {
  const projects = [
    {
      title: "SASAN SG",
      category: "Corporate Website",
      description:
        "Professional corporate website showcasing services and company information.",
      image: "/assets/img/work/sasan.jpg",
      url: "https://www.sasansg.com/",
      size: "large",
    },

    {
      title: "GOLDSEA GROUP",
      category: "Business Website",
      description:
        "Modern business website presenting services, solutions, and company profile.",
      image: "/assets/img/work/goldsea.jpg",
      url: "https://goldseagroups.com/",
      size: "small",
    },

    {
      title: "TUCK LEE 1935",
      category: "Corporate Website",
      description:
        "Professional website showcasing company services and business capabilities.",
      image: "/assets/img/work/tucklee.jpg",
      url: "https://tucklee1935.sg/",
      size: "wide",
    },

    {
      title: "FIRST CHOICE HUB",
      category: "IT Solutions",
      description:
        "Technology website presenting IT services and digital business solutions.",
      image: "/assets/img/work/firstchoice.jpg",
      url: "https://firstchoicehub.com.sg/",
      size: "small",
    },

    {
      title: "SKY MOON ENGINEERING",
      category: "Engineering Website",
      description:
        "Engineering website highlighting technical services and company capabilities.",
      image: "/assets/img/work/skymoon.jpg",
      url: "https://skymooneng.com.sg/",
      size: "large",
    },

    {
      title: "ANS FRESH & FROZEN",
      category: "E-Commerce Website",
      description:
        "Online platform showcasing fresh and frozen food products.",
      image: "/assets/img/work/ansfresh.jpg",
      url: "https://ansfreshmeat.com.sg/",
      size: "wide",
    },

    {
      title: "PINNACLE ACME",
      category: "Business Website",
      description:
        "Professional website presenting business services and company information.",
      image: "/assets/img/work/pinnacle.jpg",
      url: "https://pinnacleacme.com/",
      size: "small",
    },
  ];

  return (
    <section className="project-page-all">
      <div className="container">

        {/* =================================================
            PROJECT PAGE HEADING
        ================================================= */}

        <div className="project-page-heading">
          <span>OUR WORK</span>

          <h2>Projects We've Built</h2>

          <p>
            Explore our latest websites and digital solutions
            created for businesses across different industries.
          </p>
        </div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="project-grid">

          {projects.map((project, index) => (
            <div
              className={`project-box project-${project.size}`}
              key={index}
            >

              {/* =================================================
                  PROJECT IMAGE
              ================================================= */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />


                {/* =================================================
                    IMAGE OVERLAY
                ================================================= */}

                <div className="project-overlay">

                  <div className="project-overlay-content">

                    {/* Category */}

                    <span className="project-category">
                      {project.category}
                    </span>


                    {/* Company Name */}

                    <h3>
                      {project.title}
                    </h3>


                    {/* Description */}

                    <p className="project-description">
                      {project.description}
                    </p>


                    {/* View Project Button */}

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modern-btn"
                    >
                      <span>
                        View Project
                      </span>

                      <span className="project-arrow">
                        ↗
                      </span>
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =================================================
            CONTACT SECTION
        ================================================= */}

        <div className="project-contact-box">

          <h3>
            Have a Project in Mind?
          </h3>

          <p>
            Let's build something great together.
          </p>

          <Link
            to="/contact"
            className="project-contact-btn"
          >
            Start a Project →
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Testimonial5;