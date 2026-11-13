"use client";

import React, { useState } from "react";

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
  {
    id: "06",
    title: "Recruitment",
    image: "/assets/img/bg/recruit.png",
  },
];

const Choose1 = () => {
  // Currently shown image (desktop)
  const [activeIndex, setActiveIndex] = useState(0);

  // Image that was shown before (stays underneath while new one slides in)
  const [prevIndex, setPrevIndex] = useState(0);

  // MOBILE ONLY: which item is opened (-1 = none)
  const [mobileOpen, setMobileOpen] = useState(-1);

  /*
    IMAGE STYLE (click based, no scroll)
    - active image  : on top, slides up from bottom
    - previous image: stays visible underneath
    - others        : hidden below
  */
  const getImageStyle = (index) => {
    const base = {
      transition: "transform 0.6s ease, opacity 0.3s ease",
    };

    if (index === activeIndex) {
      return {
        ...base,
        transform: "translate3d(0, 0, 0)",
        opacity: 1,
        zIndex: 10,
      };
    }

    if (index === prevIndex) {
      return {
        ...base,
        transform: "translate3d(0, 0, 0)",
        opacity: 1,
        zIndex: 5,
      };
    }

    return {
      ...base,
      transform: "translate3d(0, 100%, 0)",
      opacity: 0,
      zIndex: 1,
    };
  };

  /*
    CLICK HEADING

    Mobile  : open / close the image under that item
    Desktop : show that image
  */
  const handleItemClick = (index) => {
    if (window.innerWidth <= 767) {
      setMobileOpen((prev) => (prev === index ? -1 : index));
      return;
    }

    if (index === activeIndex) return;

    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  const activeSolution = solutions[activeIndex];

  return (
    <section className="choose-section">
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