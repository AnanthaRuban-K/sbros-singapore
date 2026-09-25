import React from "react";

const projects = [
  {
    id: 1,
    title: "Tucklee",
    image: "public/assets/img/about/t2.jpeg",
    description:
      "Corporate Website for Food-Grade Ice Manufacturing & Cold Chain Solutions.",
  },
  {
    id: 2,
    title: "Firstchoice",
    image: "public/assets/img/about/firstchoice.jpg",
    description:
      "Custom Corporate Website for IT Solutions, Software Development & Digital Services Company.",
  },
  {
    id: 3,
    title: "Ansfreshmeat",
    image: "public/assets/img/about/ansfresh.jpg",
    description:
      "Custom Business Website for Meat Processing, Wholesale Distribution, and Online Sales.",
  },
  {
    id: 4,
    title: "Goldseagroups",
    image: "public/assets/img/about/goldsea.jpg",
    description:
      "Custom Corporate Website for Engineering, Maritime, Offshore & Process Plant Solutions Group.",
  },
  {
    id: 5,
    title: "Skymoon",
    image: "public/assets/img/about/skymoon.jpg",
    description:
      "Custom Corporate Website for Industrial Engineering, Mechanical, Electrical & Structural Services.",
  },
];

function Testimonial5() {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Websites We Built</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="overlay">
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial5;