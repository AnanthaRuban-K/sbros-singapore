import { Link } from "react-router-dom";

const Testimonial5 = () => {

  const projects = [
    {
      title: "SASAN SG",
      category: "Corporate Website",
      image: "/assets/img/projects/sasan.jpg",
      url: "https://www.sasansg.com/",
      size: "large",
    },

    {
      title: "GOLDSEA GROUP",
      category: "Business Website",
      image: "/assets/img/projects/goldsea.jpg",
      url: "https://goldseagroups.com/",
      size: "small",
    },

    {
      title: "TUCK LEE 1935",
      category: "Corporate Website",
      image: "/assets/img/projects/tucklee.jpg",
      url: "https://tucklee1935.sg/",
      size: "wide",
    },

    {
      title: "FIRST CHOICE HUB",
      category: "IT Solutions",
      image: "/assets/img/projects/firstchoice.jpg",
      url: "https://firstchoicehub.com.sg/",
      size: "small",
    },

    {
      title: "SKY MOON ENGINEERING",
      category: "Engineering Website",
      image: "/assets/img/projects/skymoon.jpg",
      url: "https://skymooneng.com.sg/",
      size: "large",
    },

    {
      title: "SBROS TECH",
      category: "IT Solutions",
      image: "/assets/img/projects/sbrostech.jpg",
      url: "https://sbrostech.com.sg/",
      size: "small",
    },

    {
      title: "ANS FRESH & FROZEN",
      category: "E-Commerce Website",
      image: "/assets/img/projects/ansfresh.jpg",
      url: "https://ansfreshmeat.com.sg/",
      size: "wide",
    },

    {
      title: "PINNACLE ACME",
      category: "Business Website",
      image: "/assets/img/projects/pinnacle.jpg",
      url: "https://pinnacleacme.com/",
      size: "small",
    },

    {
      title: "DTM",
      category: "Business Website",
      image: "/assets/img/projects/dtm.jpg",
      url: "https://dtm.sg/",
      size: "large",
    },

    {
      title: "VS BUILDERS SG",
      category: "Construction Website",
      image: "/assets/img/projects/vsbuilders.jpg",
      url: "https://vsbuilderssg.com/",
      size: "small",
    },
  ];

  return (
    <section className="project-page-all">

      <div className="container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="project-page-heading">

          <span>OUR WORK</span>

          <h2>Projects We've Built</h2>

          <p>
            Explore our latest websites and digital solutions
            created for businesses across different industries.
          </p>

        </div>


        {/* =========================
            PROJECT GRID
        ========================= */}

        <div className="project-grid">

          {projects.map((project, index) => (

            <div
              className={`project-box project-${project.size}`}
              key={index}
            >

              {/* IMAGE */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                {/* HOVER */}

                <div className="project-overlay">

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-view-btn"
                  >
                    Visit Website →
                  </a>

                </div>

              </div>


              {/* PROJECT NAME */}

              <div className="project-info">

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.category}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =========================
            CONTACT BOX
        ========================= */}

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