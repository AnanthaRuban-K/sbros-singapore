import BreadCumb from "../Components/Common/BreadCumb";

import ServiceDetailsRight2 from "../Components/ServiceDetails/ServiceDetailsRight2";

const ServiceDetailsRight = () => {
    return (
        <div>
 <BreadCumb
  Title="ERP Solutions"
  ParentTitle="Services"
  ParentLink="/services"
/>
            <ServiceDetailsRight2></ServiceDetailsRight2>
          
        </div>
    );
};

export default ServiceDetailsRight;