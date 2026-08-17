 import About6 from "../Components/About/About6";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";

import Mission1 from "../Components/Mission/Mission1";
import Vission1 from "../Components/Mission/Vission1";
import Team2 from "../Components/Team/Team2";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const AboutLight = () => {
    return (
        <div>
          
             <BreadCumb Title="About us"></BreadCumb>
            <About6
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum="25"
                experienceTitle="Years Of <br> Experience"
                
                title="Empower Your Business With Our Comprehensive IT Solutio"
                content="SBROS TECH (S) PTE LTD is a premier Singapore-based IT solutions provider with roots in India, dedicated to driving digital transformation for businesses worldwide. We specialize in software development, web design, networking solutions, and business technology services that enhance operational efficiency and sustainable growth."
                
            ></About6>
            <Mission1></Mission1>
            <Vission1></Vission1>
            <Testimonial1></Testimonial1>
            <Team2></Team2>
            <Cta1></Cta1>
        </div>
    );
};

export default AboutLight;