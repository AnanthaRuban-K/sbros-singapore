import {Helmet} from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";

import ServiceDetailsRight2 from "../Components/ServiceDetails/ServiceDetailsRight2";

const ServiceDetailsRight = () => {
    return (
        <>
      <Helmet>
        <title>Best ERP Software Solutions in Singapore | SBros Tech

</title>
        <meta
          name="description"
          content="Discover ERP software solutions in Singapore with SBros Tech to streamline business processes, improve efficiency and manage daily operations."
        />
      </Helmet>
      <link
          rel="canonical"
          href="https://sbrostech.com.sg/ERP-Solutions"
        />
        <div>
 <BreadCumb
  Title="ERP Solutions"
  ParentTitle="Services"
  ParentLink="/services"
/>
            <ServiceDetailsRight2></ServiceDetailsRight2>
          
        </div>
    </>
    );
};

export default ServiceDetailsRight;