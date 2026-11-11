import {Helmet} from "react-helmet-async";
import About6 from "../Components/About/About6";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";

import Mission1 from "../Components/Mission/Mission1";
import Vission1 from "../Components/Mission/Vission1";
import Team2 from "../Components/Team/Team2";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const AboutLight = () => {
    return (
         <>
      <Helmet>
        <title>Best IT Solutions in Singapore | About SBros Tech </title>
        <meta
          name="description"
          content="Learn about SBros Tech, an IT company in Singapore offering software development,
           networking and digital solutions for businesses.
"
        />
      </Helmet>
      <link
          rel="canonical"
          href="https://sbrostech.com.sg/About-us"
        />
        <div>
          
             <BreadCumb Title="About us"></BreadCumb>
            <About6
                // image1="/assets/img/about/about1.jpg"
                image2="/assets/img/about/about11.jpg"
               
                experienceNum="4"
                experienceTitle="Years Of <br> Experience"
                
                title=" Leading IT Solutions Partner for Businesses in Singapore"
                content="SBros Tech provides trustworthy IT solutions to help businesses become efficient and grow using technology. We provide solutions such as ERP, software development, web development and IT networking to help meet your business needs.
We aim to make your business more efficient by providing practical, trustworthy and innovative technology solutions.
"
                
            ></About6>
         
            <Vission1></Vission1>
           
        </div>
    </>
    );
};

export default AboutLight;