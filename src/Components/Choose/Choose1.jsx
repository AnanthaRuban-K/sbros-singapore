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

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      /*
        Total distance available for the sticky section
      */

      const totalScroll =
        section.offsetHeight - window.innerHeight;

      if (totalScroll <= 0) return;

      /*
        0 = section start
        1 = section end
      */

      let progress =
        -rect.top / totalScroll;

      progress = Math.max(
        0,
        Math.min(1, progress)
      );

      /*
        Convert:

        0 → 1 → 2 → 3 → 4 → 5 → 6

        Each number represents one image.
      */

      const imageProgress =
        progress * (solutions.length - 1);

      setScrollProgress(imageProgress);

      /*
        Active heading
      */

      const currentIndex =
        Math.round(imageProgress);

      setActiveIndex(
        Math.max(
          0,
          Math.min(
            solutions.length - 1,
            currentIndex
          )
        )
      );
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

    handleScroll();

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

  /*
  =====================================================
  IMAGE OVERLAP LOGIC
  =====================================================

  Example:

  scrollProgress = 0

  IMAGE 01
  100% visible


  scrollProgress = 0.5

  IMAGE 01
  50% visible

  IMAGE 02
  50% visible
  ↑ coming from bottom


  scrollProgress = 1

  IMAGE 02
  100% visible


  Then:

  02 → 03
  03 → 04
  04 → 05
  05 → 06
  06 → 07
  */

  const getImageStyle = (index) => {
    const difference =
      index - scrollProgress;

    /*
    =================================================
    CURRENT / PREVIOUS IMAGE
    =================================================
    */

    if (
      difference <= 0 &&
      difference > -1
    ) {
      return {
        transform: "translate3d(0, 0, 0)",
        opacity: 1,
        zIndex: 10,
      };
    }

    /*
    =================================================
    NEXT IMAGE

    Comes from bottom and covers
    the previous image.
    =================================================
    */

    if (
      difference > 0 &&
      difference <= 1
    ) {
      const translateY =
        difference * 100;

      return {
        transform: `translate3d(0, ${translateY}%, 0)`,
        opacity: 1,
        zIndex: 30,
      };
    }

    /*
    =================================================
    OLDER IMAGE
    =================================================
    */

    if (
      difference < -1 &&
      difference >= -2
    ) {
      return {
        transform:
          "translate3d(0, -12%, 0)",
        opacity: 0,
        zIndex: 1,
      };
    }

    /*
    =================================================
    FUTURE IMAGES
    =================================================
    */

    return {
      transform:
        "translate3d(0, 100%, 0)",
      opacity: 0,
      zIndex: 1,
    };
  };

  /*
  =====================================================
  CLICK HEADING
  =====================================================
  */

  const handleItemClick = (index) => {
    const section =
      sectionRef.current;

    if (!section) return;

    const sectionTop =
      window.scrollY +
      section.getBoundingClientRect().top;

    const scrollDistance =
      section.offsetHeight -
      window.innerHeight;

    const targetProgress =
      index / (solutions.length - 1);

    const targetScroll =
      sectionTop +
      targetProgress * scrollDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const activeSolution =
    solutions[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="choose-section"
    >
      <div className="choose-sticky">

        <div className="choose-wrapper">

          {/* TITLE */}

          <div className="choose-header">

            <h2 className="choose-heading">
Our Software Solutions            </h2>

            <span className="choose-heading-line"></span>

          </div>

          {/* MAIN CONTENT */}

          <div className="choose-main">

            {/* =====================================
                LEFT IMAGE
            ===================================== */}

            <div className="choose-image-side">

              <div className="choose-image-box">

                <div className="choose-image-stack">

                  {solutions.map(
                    (solution, index) => (
                      <img
                        key={solution.id}
                        src={solution.image}
                        alt={solution.title}
                        className="choose-stack-image"
                        style={getImageStyle(index)}
                      />
                    )
                  )}

                </div>

                {/* OVERLAY */}

                <div className="choose-image-overlay"></div>

                {/* NUMBER */}

                <div className="choose-image-number">
                  {activeSolution.id}
                </div>

                {/* TITLE */}

                <div className="choose-image-content">

                  <span>
                    TECHNOLOGY DOMAIN
                  </span>

                  <h3>
                    {activeSolution.title}
                  </h3>

                </div>

              </div>

            </div>

            {/* =====================================
                RIGHT HEADINGS
            ===================================== */}

            <div className="choose-content-side">

              <div className="choose-list">

                {solutions.map(
                  (solution, index) => (

                    <button
                      key={solution.id}
                      type="button"
                      className={`choose-item ${
                        activeIndex === index
                          ? "choose-item-active"
                          : ""
                      }`}
                      onClick={() =>
                        handleItemClick(index)
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

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Choose1;