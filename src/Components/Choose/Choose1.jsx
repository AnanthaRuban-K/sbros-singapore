import { useEffect, useState } from "react";

const solutions = [
  {
    title: "Human Resource Management",
    description:
      "Manage employees, attendance, payroll, performance, and HR processes in one simple and efficient platform.",
    image: "/assets/img/bg/hrm.jpeg",
  },
  {
    title: "CRM",
    description:
      "Build stronger customer relationships, manage leads, track opportunities, and improve your complete sales process.",
    image: "/assets/img/solutions/crm.jpg",
  },
  {
    title: "Finance",
    description:
      "Simplify accounting, financial management, reporting, and business transactions with complete financial visibility.",
    image: "/assets/img/solutions/finance.jpg",
  },
  {
    title: "Procurement",
    description:
      "Streamline purchasing, supplier management, purchase orders, and procurement workflows from one centralized system.",
    image: "/assets/img/solutions/procurement.jpg",
  },
  {
    title: "Product Sales",
    description:
      "Manage products, quotations, orders, customers, and sales activities from one centralized and easy-to-use system.",
    image: "/assets/img/solutions/product-sales.jpg",
  },
  {
    title: "Service Sales",
    description:
      "Manage service-based sales, customer requests, quotations, contracts, and recurring services efficiently.",
    image: "/assets/img/solutions/service-sales.jpg",
  },
  {
    title: "Recruitment",
    description:
      "Simplify hiring with candidate management, job postings, interviews, evaluations, and complete recruitment workflows.",
    image: "/assets/img/solutions/recruitment.jpg",
  },
];

const Choose1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 991) {
        return;
      }

      const section = document.querySelector(".solutions-section");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      /*
       * Each solution gets 600px of scroll space.
       */
      const stepHeight = 600;

      /*
       * Active solution changes when the scroll
       * reaches 35% of the viewport.
       */
      const triggerPoint = window.innerHeight * 0.35;

      const scrollInsideSection =
        triggerPoint - rect.top;

      let index = Math.floor(
        scrollInsideSection / stepHeight
      );

      index = Math.max(
        0,
        Math.min(index, solutions.length - 1)
      );

      setActiveIndex(index);
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

  const activeSolution = solutions[activeIndex];

  return (
    <section className="solutions-section">

      <div className="container">

        {/* =========================================
            MAIN HEADING
        ========================================= */}

        <div className="solutions-heading">
          <h2>
            Solutions designed around
            <br />
            your business
          </h2>
        </div>


        {/* =========================================
            MAIN SCROLL AREA
        ========================================= */}

        <div className="solutions-scroll-area">


          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <div className="solutions-left">

            <div className="solutions-left-sticky">

              {solutions.map((solution, index) => (

                <div
                  key={solution.title}
                  className={`solution-item ${
                    activeIndex === index
                      ? "solution-item-active"
                      : ""
                  }`}
                >

                  <h3>
                    {solution.title}
                  </h3>

                  {/* Description only for active item */}

                  {activeIndex === index && (
                    <p className="solution-description">
                      {solution.description}
                    </p>
                  )}

                </div>

              ))}

            </div>

          </div>


          {/* =========================================
              RIGHT SIDE
          ========================================= */}

          <div className="solutions-right">

            <div className="solutions-right-sticky">

              <div className="solution-image-card">

                <img
                  key={activeSolution.image}
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  className="solution-image"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Choose1;
