import {Helmet} from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";

import ServiceDetailsCenter3 from "../Components/ServiceDetails/ServiceDetailsCenter3";
import Service7 from "../Components/Services/Service7";

const ServiceDetailsCenter = () => {
    return (
        <>
      <Helmet>
        <title>Website Development Solutions in Singapore | SBros Tech
</title>
        <meta
          name="description"
          content="SBros Tech provides web development services in Singapore, creating professional websites to strengthen your online presence and support business goals.
"
        />
      </Helmet>
      <link
          rel="canonical"
          href="https://sbrostech.com.sg/Website-Development"
        />
        <div>
            <BreadCumb
  Title="Website Development"
  ParentTitle="Services"
  ParentLink="/services"
/>
          
            <ServiceDetailsCenter3></ServiceDetailsCenter3>
          
           
                     
        </div>
    </>
    );
};

export default ServiceDetailsCenter;