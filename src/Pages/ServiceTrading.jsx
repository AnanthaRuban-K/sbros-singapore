import BreadCumb from "../Components/Common/BreadCumb";

import ServiceTrading from "../Components/ServiceDetails/ServiceTrading";

const ServiceDetailsLeftDark = () => {
    return (
        <div>
           <BreadCumb
  Title="Trading"
  ParentTitle="Services"
  ParentLink="/service"
/>
         
            <ServiceTrading></ServiceTrading>
         
        </div>
    );
};

export default ServiceDetailsLeftDark;