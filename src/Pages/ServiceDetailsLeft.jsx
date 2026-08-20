import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";

import ServiceDetailsLeft1 from "../Components/ServiceDetails/ServiceDetailsLeft1";

const ServiceDetailsLeft = () => {
    return (
        <div>
            <BreadCumb
  Title="Software Development"
  ParentTitle="Services"
  ParentLink="/services"
/>
        
            <ServiceDetailsLeft1></ServiceDetailsLeft1>
            
        </div>
    );
};

export default ServiceDetailsLeft;