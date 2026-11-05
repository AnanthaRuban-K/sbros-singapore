import {Helmet} from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";


// import Vission1 from "../Components/Mission/Vission1";
import Service6 from "../Components/Services/Service6";

const ServicePage = () => {
    return (
         <>
      <Helmet>
        <title>Best IT  Solutions & Services in Singapore | SBros Tech

</title>
        <meta
          name="description"
          content="Explore SBros Tech services in Singapore, including ERP, software development,
           web development, digital marketing and IT networking.
"
        />
      </Helmet>
      <link
          rel="canonical"
          href="https://sbrostech.com.sg/Services/"
        />
        <div className="service-page">
            <BreadCumb Title="Our Services"></BreadCumb>
            
            <Service6></Service6>
            {/* <Vission1></Vission1> */}
            
            
        </div>
    </>
    );
};

export default ServicePage;