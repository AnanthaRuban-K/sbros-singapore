import Choose2 from "../Components/Choose/Choose2";
import BreadCumb2 from "../Components/Common/BreadCumb2";
import Cta2 from "../Components/Cta/Cta2";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import ServiceITNetworking from "../Components/ServiceDetails/ServiceITNetworking"

const ServicePageDark = () => {
    return (
        <div className="service-page-dark">
            <BreadCumb2 Title="Our Service"></BreadCumb2>
            <MarqueeText></MarqueeText>
           <ServiceITNetworking></ServiceITNetworking>
         
            <Cta2></Cta2>
        </div>
    );
};

export default ServicePageDark;