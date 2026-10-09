"use client";

import React, { useEffect, useRef, useState } from "react";

const solutions = [
  {
    id: "01",
    title: "Human Resource Management",
    image: "/assets/img/bg/hrm1.png",
  },
  {
    id: "02",
    title: "CRM",
    image: "/assets/img/bg/crm.png",
  },
  {
    id: "03",
    title: "Finance",
    image: "/assets/img/bg/finance.png",
  },
  {
    id: "04",
    title: "Procurement",
    image: "/assets/img/bg/procurement.png",
  },
  {
    id: "05",
    title: "Sales",
    image: "/assets/img/bg/product.png",
  },
];

const Choose1 = () => {
  const sectionRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // MOBILE ONLY: which item is opened (-1 = none)
  const [mobileOpen, setMobileOpen] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      // Total distance available for the sticky section
      const totalScroll = section.offsetHeight - window.innerHeight;

      if (totalScroll <= 0) return;

      // 0 = section start, 1 = section end
      let progress = -rect.top / totalScroll;
      progress = Math.max(0, Math.min(1, progress));

      // Each whole number = one image
      const imageProgress = progress * (solutions.length - 1);

      setScrollProgress(imageProgress);

      // Active heading
      const currentIndex = Math.round(imageProgress);

      setActiveIndex(
        Math.max(0, Math.min(solutions.length - 1, currentIndex))
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /*
    IMAGE OVERLAP LOGIC (desktop, unchanged)
  */
  const getImageStyle = (index) => {
    const difference = index - scrollProgress;

    // CURRENT / PREVIOUS IMAGE
    if (difference <= 0 && difference > -1) {
      return {
        transform: "translate3d(0, 0, 0)",
        opacity: 1,
        zIndex: 10,
      };
    }

    // NEXT IMAGE: comes from bottom and covers the previous one
    if (difference > 0 && difference <= 1) {
      const translateY = difference * 100;

      return {
        transform: `translate3d(0, ${translateY}%, 0)`,
        opacity: 1,
        zIndex: 30,
      };
    }

    // OLDER IMAGE
    if (difference < -1 && difference >= -2) {
      return {
        transform: "translate3d(0, -12%, 0)",
        opacity: 0,
        zIndex: 1,
      };
    }

    // FUTURE IMAGES
    return {
      transform: "translate3d(0, 100%, 0)",
      opacity: 0,
      zIndex: 1,
    };
  };

  /*
    CLICK HEADING

    Mobile  : open / close the image under that item
    Desktop : smooth scroll to that image (unchanged)
  */
  const handleItemClick = (index) => {
    if (window.innerWidth <= 767) {
      setMobileOpen((prev) => (prev === index ? -1 : index));
      return;
    }

    const section = sectionRef.current;

    if (!section) return;

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;

    const scrollDistance = section.offsetHeight - window.innerHeight;

    const targetProgress = index / (solutions.length - 1);

    const targetScroll = sectionTop + targetProgress * scrollDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const activeSolution = solutions[activeIndex];

  return (
    <section ref={sectionRef} className="choose-section">
      <div className="choose-sticky">
        <div className="choose-wrapper">
          {/* TITLE */}
          <div className="choose-header">
            <h2 className="choose-heading">Our Software Solutions</h2>
            <span className="choose-heading-line"></span>
          </div>

          {/* MAIN CONTENT */}
          <div className="choose-main">
            {/* LEFT IMAGE */}
            <div className="choose-image-side">
              <div className="choose-image-box">
                <div className="choose-image-stack">
                  {solutions.map((solution, index) => (
                    <img
                      key={solution.id}
                      src={solution.image}
                      alt={solution.title}
                      className="choose-stack-image"
                      style={getImageStyle(index)}
                    />
                  ))}
                </div>

                {/* OVERLAY */}
                <div className="choose-image-overlay"></div>

                {/* NUMBER */}
                <div className="choose-image-number">
                  {activeSolution.id}
                </div>

                {/* TITLE */}
                <div className="choose-image-content">
                  <span>TECHNOLOGY DOMAIN</span>
                  <h3>{activeSolution.title}</h3>
                </div>
              </div>
            </div>

            {/* RIGHT HEADINGS */}
            <div className="choose-content-side">
              <div className="choose-list">
                {solutions.map((solution, index) => (
                  <React.Fragment key={solution.id}>
                    <button
                      type="button"
                      className={`choose-item ${
                        activeIndex === index ? "choose-item-active" : ""
                      } ${mobileOpen === index ? "choose-item-open" : ""}`}
                      onClick={() => handleItemClick(index)}
                    >
                      <span className="choose-number">{solution.id}</span>

                      <span className="choose-name">{solution.title}</span>

                      <span className="choose-arrow">→</span>
                    </button>

                    {/* MOBILE ONLY (hidden on desktop by CSS) */}
                    <div
                      className={`choose-mobile-panel ${
                        mobileOpen === index ? "choose-mobile-panel-open" : ""
                      }`}
                    >
                      <div className="choose-mobile-inner">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="choose-mobile-image"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose1;