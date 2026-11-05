import {Helmet} from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";

import ServiceTrading from "../Components/ServiceDetails/ServiceTrading";

const ServiceDetailsLeftDark = () => {
    return (
        <>
      <Helmet>
        <title>Best Trading Solutions in Singapore | SBros Tech
</title>
        <meta
          name="description"
          content="Explore trading services from SBros Tech in Singapore. Contact our team to find solutions that meet your business requirements."
        />
      </Helmet>
      <link
          rel="canonical"
          href="https://sbrostech.com.sg/Trading"
        />
        <div>
           <BreadCumb
  Title="Trading"
  ParentTitle="Services"
  ParentLink="/services"
/>
         
            <ServiceTrading></ServiceTrading>
         
        </div>
    </>
    );
};

export default ServiceDetailsLeftDark;