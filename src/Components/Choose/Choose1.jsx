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
    title: "Product Sales",
    image: "/assets/img/bg/product.png",
  },
  {
    id: "06",
    title: "Service Sales",
    image: "/assets/img/bg/service.png",
  },
  {
    id: "07",
    title: "Recruitment",
    image: "/assets/img/bg/recruit.png",
  },
];

const Choose1 = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateActiveItem = () => {
      const section = sectionRef.current;

      if (!section) {
        ticking = false;
        return;
      }

      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollDistance = sectionHeight - viewportHeight;

      if (scrollDistance <= 0) {
        ticking = false;
        return;
      }

      let progress = -rect.top / scrollDistance;

      progress = Math.max(0, Math.min(1, progress));

      const index = Math.min(
        solutions.length - 1,
        Math.floor(progress * solutions.length)
      );

      setActiveIndex(index);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveItem);
        ticking = true;
      }
    };

    const handleResize = () => {
      updateActiveItem();
    };

    updateActiveItem();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHeadingClick = (index) => {
    const section = sectionRef.current;

    if (!section) return;

    const sectionTop =
      window.scrollY + section.getBoundingClientRect().top;

    const scrollDistance =
      section.offsetHeight - window.innerHeight;

    const progress =
      index / (solutions.length - 1);

    const targetPosition =
      sectionTop + progress * scrollDistance;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const activeSolution = solutions[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="choose-section"
    >
      <div className="choose-sticky">

        <div className="choose-container">

          {/* LEFT IMAGE */}
          <div className="choose-image-side">

            <div className="choose-image-box">

              <div className="choose-image-glow"></div>

              <img
                key={activeSolution.id}
                src={activeSolution.image}
                alt={activeSolution.title}
                className="choose-main-image"
              />

              <div className="choose-image-number">
                {activeSolution.id}
              </div>

              <div className="choose-image-title">
                {activeSolution.title}
              </div>

            </div>

          </div>

          {/* RIGHT HEADINGS */}
          <div className="choose-content-side">

            <div className="choose-top-label">
              OUR SOLUTIONS
            </div>

            <h2 className="choose-heading">
              Empower Your Business with Intelligent ERP
            </h2>

            <div className="choose-list">

              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  type="button"
                  className={`choose-item ${
                    activeIndex === index
                      ? "choose-item-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleHeadingClick(index)
                  }
                >

                  <span className="choose-number">
                    {solution.id}
                  </span>

                  <span className="choose-name">
                    {solution.title}
                  </span>

                  <span className="choose-arrow">
                    →
                  </span>

                </button>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Choose1;