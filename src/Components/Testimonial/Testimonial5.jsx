import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Testimonial5 = () => {
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll(".portfolio-card")
    );

    let ticking = false;

    const clamp = (value, min, max) => {
      return Math.min(Math.max(value, min), max);
    };

    const calculateProgress = (top, viewportHeight) => {
      /*
        Animation starts when the pair is slightly
        before entering the screen.

        1 = animation completed
        0 = animation starting
      */

      const start = viewportHeight * 0.92;
      const finish = viewportHeight * 0.42;

      const progress = (start - top) / (start - finish);

      return clamp(progress, 0, 1);
    };

    const updateAnimation = () => {
      const viewportHeight = window.innerHeight;

      /*
        PAIR 1
        Card 1 = Left
        Card 2 = Right

        PAIR 2
        Card 3 = Left
        Card 4 = Right

        PAIR 3
        Card 5 = Left
        Card 6 = Right
      */

      for (let pairStart = 0; pairStart <= 4; pairStart += 2) {
        const leftCard = cards[pairStart];
        const rightCard = cards[pairStart + 1];

        if (!leftCard || !rightCard) continue;

        const leftRect = leftCard.getBoundingClientRect();
        const rightRect = rightCard.getBoundingClientRect();

        /*
          Use the upper position of the pair.

          This makes every pair start its own
          animation when that pair reaches viewport.
        */
        const pairTop = Math.min(
          leftRect.top,
          rightRect.top
        );

        const progress = calculateProgress(
          pairTop,
          viewportHeight
        );

        /*
          Side distance

          At progress 0:
          Left  = -170px
          Right = +170px

          At progress 1:
          Both = 0
        */
        const distance = 170;

        const leftX =
          -distance * (1 - progress);

        const rightX =
          distance * (1 - progress);

        /*
          Small vertical movement
          for a smoother effect.
        */
        const moveY =
          25 * (1 - progress);

        /*
          Slight rotation
          makes the entrance more natural.
        */
        const leftRotate =
          -3 * (1 - progress);

        const rightRotate =
          3 * (1 - progress);

        /*
          Scale starts slightly smaller
          and becomes normal size.
        */
        const scale =
          0.94 + progress * 0.06;

        /*
          IMPORTANT:
          Never make the cards invisible.
          Minimum opacity = 1.
        */
        const opacity = 1;

        leftCard.style.setProperty(
          "--scroll-x",
          `${leftX}px`
        );

        leftCard.style.setProperty(
          "--scroll-y",
          `${moveY}px`
        );

        leftCard.style.setProperty(
          "--scroll-rotate",
          `${leftRotate}deg`
        );

        leftCard.style.setProperty(
          "--scroll-scale",
          scale
        );

        leftCard.style.setProperty(
          "--scroll-opacity",
          opacity
        );

        rightCard.style.setProperty(
          "--scroll-x",
          `${rightX}px`
        );

        rightCard.style.setProperty(
          "--scroll-y",
          `${moveY}px`
        );

        rightCard.style.setProperty(
          "--scroll-rotate",
          `${rightRotate}deg`
        );

        rightCard.style.setProperty(
          "--scroll-scale",
          scale
        );

        rightCard.style.setProperty(
          "--scroll-opacity",
          opacity
        );
      }

      /*
        CARD 7

        Card 7 comes from bottom
        and moves to center.
      */
      const lastCard = cards[6];

      if (lastCard) {
        const lastRect =
          lastCard.getBoundingClientRect();

        const lastProgress =
          calculateProgress(
            lastRect.top,
            viewportHeight
          );

        const bottomY =
          55 * (1 - lastProgress);

        const lastScale =
          0.94 + lastProgress * 0.06;

        lastCard.style.setProperty(
          "--scroll-x",
          "0px"
        );

        lastCard.style.setProperty(
          "--scroll-y",
          `${bottomY}px`
        );

        lastCard.style.setProperty(
          "--scroll-rotate",
          "0deg"
        );

        lastCard.style.setProperty(
          "--scroll-scale",
          lastScale
        );

        lastCard.style.setProperty(
          "--scroll-opacity",
          "1"
        );
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateAnimation
        );

        ticking = true;
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    /*
      Initial animation position
    */
    updateAnimation();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  return (
    <section
      className="portfolio-section"
      ref={sectionRef}
    >
      <div className="container">

        {/* HEADING */}
        <div className="portfolio-heading">
          <span className="portfolio-label">
            OUR PORTFOLIO
          </span>

          <h2>
            Websites We've Built
          </h2>
        </div>

        {/* PORTFOLIO GRID */}
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
                      <span>
                        View Project
                      </span>

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

        {/* CTA */}
        <div className="portfolio-cta">

          <div className="portfolio-cta-content">

            <span>
              NEED A PROFESSIONAL WEBSITE?
            </span>

            <h3>
              Let's Create Your Digital Presence
            </h3>

            <p>
              Whether you need a corporate website,
              e-commerce platform, or custom web
              solution, our team can turn your ideas
              into a modern and effective website.
            </p>

          </div>

          <Link
            to="/contact-us"
            className="portfolio-cta-btn"
          >
            Start a Project

            <span>
              ↗
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Testimonial5;