const About1 = ({
  image1,
  image2,
  Title,
  content,
  featurelist,
}) => {
  return (
    <section className="sbros-about">
      <div className="container">
        <div className="row align-items-center">

          {/* ================= IMAGE ================= */}
          <div className="col-lg-6 sbros-about-image-col">

            <div className="sbros-about-images">

              {/* Main Image */}
              <div className="sbros-about-main-image">
                <img
                  src={image2}
                  alt="SBros Technology"
                />
              </div>

              {/* Second Image - Laptop only */}
              <div className="sbros-about-small-image">
                <img
                  src={image1}
                  alt="SBros Technology"
                />
              </div>

            </div>

          </div>


          {/* ================= CONTENT ================= */}
          <div className="col-lg-6 sbros-about-content-col">

            <div className="sbros-about-content">

              <h2>
                {Title}
              </h2>

              <p>
                {content}
              </p>

              {featurelist && (
                <ul>
                  {featurelist.map((item, index) => (
                    <li key={index}>
                      <span>
                        <i className="bi bi-check-lg"></i>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About1;