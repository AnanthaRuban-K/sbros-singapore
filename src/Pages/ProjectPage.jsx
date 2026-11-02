//import {Helmet} from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Project4 from "../Components/Project/Project4";

const ProjectPage = () => {
    return (
       // <>
     // <Helmet>
       // <title>IT Projects & Business Solutions in Singapore | SBros Tech

//</title>
   //     <meta
     //     name="description"
       //   content="Explore SBros Tech projects in Singapore and discover how our technology solutions support business needs across software, networking and digital services.
//"/>
      //</Helmet>
      //<link
        // rel="canonical"
          // href="https://sbrostech.com.sg/Projects"
      //  />
        <div>
            <BreadCumb Title="Our Project"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Project4></Project4>
            <Cta1></Cta1>
        </div>
   // </>
    );
};

export default ProjectPage;