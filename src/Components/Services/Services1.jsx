import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/Home1/services1.json";
import { Link } from "react-router-dom";

const Services1 = () => {
  return (
    <div className="service sp">
      <div className="container">

        <div className="row align-items-end">
          <div className="col-lg-7">
            <div className="heading1">
              <SectionTitle
                SubTitle="Our Services"
                Title="Technology Solutions Designed To Move Your Business Forward"
              />
            </div>
          </div>
        </div>

        <div className="space40"></div>

        <div className="services-list">

          {data.map((item, i) => (
            <div className="service-row" key={i}>

              <div className="service-left">

                {/* IMAGE */}
                <div
                  style={{
                    width: "160px",
                    height: "100px",
                    minWidth: "120px",
                    overflow: "hidden",
                    borderRadius: "8px",
                    flexShrink: 0
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div className="service-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </div>

              {/* ARROW ONLY */}
              <Link
                to={item.btnLink}
                className="service-arrow"
              >
                <span>↗</span>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Services1;