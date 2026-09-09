"use client";

import { useEffect, useRef } from "react";


const solutions = [
  {
    number: "01",
    title: "Human Resource Management",
    description:
      "Manage employees, attendance, payroll, performance, and HR processes in one simple and efficient platform.",
    image: "/assets/img/bg/hrm1.png",
  },
  {
    number: "02",
    title: "CRM",
    description:
      "Build stronger customer relationships, manage leads, track opportunities, and improve your complete sales process.",
    image: "/assets/img/bg/crm.png",
  },
  {
    number: "03",
    title: "Finance",
    description:
      "Simplify accounting, financial management, reporting, and business transactions with complete financial visibility.",
    image: "/assets/img/bg/finance.png",
  },
  {
    number: "04",
    title: "Procurement",
    description:
      "Streamline purchasing, supplier management, purchase orders, and procurement workflows from one centralized system.",
    image: "/assets/img/bg/procurement.png",
  },
  {
    number: "05",
    title: "Product Sales",
    description:
      "Manage products, quotations, orders, customers, and sales activities from one centralized and easy-to-use system.",
    image: "/assets/img/bg/product.png",
  },
  {
    number: "06",
    title: "Service Sales",
    description:
      "Manage service-based sales, customer requests, quotations, contracts, and recurring services efficiently.",
    image: "/assets/img/bg/service.png",
  },
  {
    number: "07",
    title: "Recruitment",
    description:
      "Simplify hiring with candidate management, job postings, interviews, evaluations, and complete recruitment workflows.",
    image: "/assets/img/bg/recruit.png",
  },
];

const Choose1 = () => {
  const sectionRef = useRef(null);

  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    let ticking = false;

    const updateAnimation = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      /*
        The whole scroll section contains 7 steps.

        Step 0 = 01
        Step 1 = 02
        Step 2 = 03
        Step 3 = 04
        Step 4 = 05
        Step 5 = 06
        Step 6 = 07
      */

      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      let progress = -rect.top / scrollDistance;

      progress = Math.max(0, Math.min(1, progress));

      /*
        Convert section progress into
        0 → 6.

        Example:

        0.0 = 01
        0.5 = halfway 01 → 02
        1.0 = 02
        1.5 = halfway 02 → 03
        2.0 = 03
        ...
        6.0 = 07
      */

      const position = progress * (solutions.length - 1);

      /*
        Every card gets an individual position.

        For card 02 while moving 01 → 02:

        position = 0
        card index = 1

        difference = -1

        So card 02 starts at:
        translateY(100%)

        and ends at:
        translateY(0)
      */

      const updateCards = (refs) => {
        refs.current.forEach((card, index) => {
          if (!card) return;

          const difference = position - index;

          let translateY;

          if (index === 0) {
            /*
              01 is the base card.
            */
            translateY = 0;
          } else if (difference >= 0) {
            /*
              This card has already moved into place.
              It stays on top.
            */
            translateY = 0;
          } else if (difference > -1) {
            /*
              THIS creates the real overlap.

              -1 = 100% below
               0 = completely on top
            */
            translateY = Math.abs(difference) * 100;
          } else {
            /*
              Future cards stay below.
            */
            translateY = 100;
          }

          card.style.transform =
            `translate3d(0, ${translateY}%, 0)`;
        });
      };

      /*
        EXACT SAME calculation for:

        LEFT  = IMAGE
        RIGHT = HEADING
      */

      updateCards(imageRefs);
      updateCards(contentRefs);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateAnimation);
        ticking = true;
      }
    };

    updateAnimation();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateAnimation);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="solutions-section"
      style={{
        height: `${solutions.length * 100}vh`,
      }}
    >
      {/* =====================================
          SECTION HEADING
      ====================================== */}

      <div className="solutions-title">
        <span className="title-line"></span>

        <div>
         

          <h2>
            Solutions Designed Around
            <br />
            <span>Your Business</span>
          </h2>
        </div>

        <span className="title-line"></span>
      </div>

      {/* =====================================
          STICKY SCROLL AREA
      ====================================== */}

      <div className="solutions-sticky">

        <div className="solutions-layout">

          {/* =================================
              LEFT SIDE — IMAGES
          ================================= */}

          <div className="solutions-images">

            <div className="image-stack">

              {solutions.map((solution, index) => (
                <div
                  key={solution.number}
                  ref={(element) => {
                    imageRefs.current[index] = element;
                  }}
                  className="solution-image-card"
                  style={{
                    zIndex: index + 1,
                  }}
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    draggable="false"
                  />

                  <div className="image-dark"></div>

                  <div className="image-bottom">
                    <span>
                      {solution.number}
                    </span>

                    <p>
                      {solution.title}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>


          {/* =================================
              RIGHT SIDE — HEADINGS
          ================================= */}

          <div className="solutions-content">

            <div className="content-stack">

              {solutions.map((solution, index) => (
                <div
                  key={solution.number}
                  ref={(element) => {
                    contentRefs.current[index] = element;
                  }}
                  className="solution-content-card"
                  style={{
                    zIndex: index + 1,
                  }}
                >

                  <div className="content-number">
                    {solution.number}
                  </div>

                  <div className="content-details">

                    <span className="content-label">
                      BUSINESS SOLUTION
                    </span>

                    <h3>
                      {solution.title}
                    </h3>

                    <p>
                      {solution.description}
                    </p>

                    <div className="content-line"></div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Choose1;