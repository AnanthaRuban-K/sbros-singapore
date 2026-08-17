import { Link } from "react-router-dom";

const Vission1 = () => {
  return (
    <div className="solution about-solution sp">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE - TWO ROWS */}
          <div className="col-lg-6">
            <div className="overview-left">

              {/* Row 1 */}
              <div className="overview-row">
                <div className="overview-icon">
                  <img
                    src="/assets/img/icons/about-solution-iocn1.png"
                    alt="Innovation"
                  />
                </div>

                <div className="overview-content">
                  <h3>Our Mission</h3>

                  <div className="space10"></div>

                  <p>
                    We leverage modern technologies and innovative approaches
                    to deliver smart, scalable, and high-performance solutions
                    that help businesses grow and stay competitive.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="overview-row">
                <div className="overview-icon">
                  <img
                    src="/assets/img/icons/about-solution-iocn2.png"
                    alt="Customer Solutions"
                  />
                </div>

                <div className="overview-content">
                  <h3>Our vision</h3>

                  <div className="space10"></div>

                  <p>
                    We understand each client's unique requirements and provide
                    reliable, customized solutions focused on quality,
                    efficiency, and long-term business success.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - COMPANY OVERVIEW */}
          <div className="col-lg-6">
            <div className="heading1">

              <h2>Company Overview</h2>

              <div className="space16"></div>

              <p style={{ marginBottom: "30px" }}>
               SBROS TECH (S) PTE LTD is a forward-thinking technology company based in Singapore, delivering innovative digital solutions designed to help businesses thrive in a rapidly evolving digital landscape. We provide end-to-end IT services, including customized software development, website and e-commerce development, business web portals, digital marketing, and network solutions.
              </p>

              
              

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vission1;