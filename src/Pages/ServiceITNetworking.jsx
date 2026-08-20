import BreadCumb from "../Components/Common/BreadCumb";

import ServiceITNetworking from "../Components/ServiceDetails/ServiceITNetworking";

const ServiceDetailsLeftDark = () => {
    return (
        <div>
            <BreadCumb
  Title="IT Networking"
  ParentTitle="Services"
  ParentLink="/services"
/>
         
            <ServiceITNetworking></ServiceITNetworking>
         
        </div>
    );
};

export default ServiceDetailsLeftDark;