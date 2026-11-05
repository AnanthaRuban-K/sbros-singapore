import {Helmet} from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";

import ServiceDetailsLeft1 from "../Components/ServiceDetails/ServiceDetailsLeft1";

const ServiceDetailsLeft = () => {
    return (
        <>
      <Helmet>
        <title>Software Development Solutions in Singapore | SBros Tech
</title>
        <meta
          name="description"
          content="SBros Tech provides software development in Singapore,
           helping businesses meet operational needs with practical software solutions."
        />
      </Helmet>
      <link
          rel="canonical"
          href="https://sbrostech.com.sg/Software-Development"
        />
        <div>
            <BreadCumb
  Title="Software Development"
  ParentTitle="Services"
  ParentLink="/services"
/>
        
            <ServiceDetailsLeft1></ServiceDetailsLeft1>
            
        </div>
        </>
    );
};

export default ServiceDetailsLeft;