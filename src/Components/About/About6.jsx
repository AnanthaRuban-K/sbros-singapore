import parse from "html-react-parser";

const About6 = ({
  image1,
  image2,
  experienceNum,
  experienceTitle,
  subTitle,
  title,
  content,
  counName1,
  CounNum1,
  counName2,
  CounNum2,
}) => {
  return (
    <section className="about6 about-page-sec">
      <div className="container">
        <div className="row align-items-center">

          {/* ================= LEFT IMAGE ================= */}
          <div className="col-lg-6">
            <div className="about6-images">

              {/* Decorative background shape */}
              <div className="about6-bg-shape"></div>

              {/* Main SBROS Image */}
              <div className="about6-image-main">
                <img
                  src="/assets/img/about/sbros.jpg"
                  alt="SBROS Tech"
                />
              </div>

              {/* Small floating image */}
              {image2 && (
                <div className="about6-image-small">
                  <img
                    src={image2}
                    alt="SBROS Technology"
                  />
                </div>
              )}

              {/* Experience Card */}
              <div className="about6-experience">

                <div className="experience-icon">
                  <i className="bi bi-award"></i>
                </div>

                <div className="experience-content">
                  <h3>{experienceNum}</h3>

                  <p>
                    {parse(experienceTitle)}
                  </p>
                </div>

              </div>

              {/* Decorative circle */}
              <div className="about6-circle"></div>

            </div>
          </div>


          {/* ================= RIGHT CONTENT ================= */}
          <div className="col-lg-6">
            <div className="about6-content">

              {/* Label */}
              <span className="about6-label">
                <span className="label-dot"></span>
                {subTitle}
              </span>


              {/* Title */}
              <h2 className="about6-title">
                {title}
              </h2>


              {/* Title line */}
              <div className="about6-title-line">
                <span></span>
              </div>


              {/* Description */}
              <p className="about6-description">
                {content}
              </p>


              {/* Quote */}
              <div className="about6-quote">

                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>

                <p>
                  "By combining deep technology expertise with strategic
                  thinking, SBROS enables businesses to enhance operational
                  efficiency, strengthen their digital presence, and achieve
                  long-term success."
                </p>

              </div>


              {/* Stats */}
              <div className="about6-stats">

               


              

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About6;