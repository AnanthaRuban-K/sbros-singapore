import About1 from "../Components/About/About1";
// import Award1 from "../Components/Award/Award1";
import Choose1 from "../Components/Choose/Choose1";

import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";

import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";


const Home = () => {
    return (
        <div className="home-page1">
            <HeroBanner1
                bgImg="/assets/img/bg/blueshine.png"
                subTitle="SBros"
                title="Driving Digital Excellence   <span class='after'> for Modern Businesses </span>"
                content=" We deliver innovative, secure, and scalable IT solutions that simplify operations, enhance efficiency, and empower businesses to achieve sustainable growth."
                btnName="Explore"
                btnUrl="/service"

                image2="/assets/img/hero/headimg5.png"
            ></HeroBanner1>
            {/* <Award1></Award1> */}
            <About1
  image1="/assets/img/about/about5.jpg"
  image2="/assets/img/about/about1img1.jpeg"

  Title="From Vision to Innovation - Technology Solutions That Move Your Business Forward."

  content="SBros transforms business challenges into smarter digital opportunities through innovative, secure, and scalable technology solutions. From software and web development to IT infrastructure and cybersecurity, we help businesses streamline operations, strengthen performance, and build a future-ready digital presence."

  featurelist={[
    "Turning challenges into smarter digital solutions.",
    "Innovating technology to accelerate business growth.",
    "Technology that moves your business forward.F",
  ]}
/>
            <Services1></Services1>
            <Choose1></Choose1>
            <Project1></Project1>
            
           
          
        </div>
    );
};

export default Home;