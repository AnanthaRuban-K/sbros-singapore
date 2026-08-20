import BreadCumb from "../Components/Common/BreadCumb";

import ServiceITNetworking from "../Components/ServiceDetails/ServiceITNetworking";

const ServiceDetailsLeftDark = () => {
    return (
        <div>
            <BreadCumb
  Title="IT Networking"
  ParentTitle="services"
  ParentLink="/service"
/>
         
            <ServiceITNetworking></ServiceITNetworking>
         
        </div>
    );
};

export default ServiceDetailsLeftDark;