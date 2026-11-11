import {Helmet} from "react-helmet-async";
import About1 from "../Components/About/About1";
import Choose1 from "../Components/Choose/Choose1";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import HeroVideo from "../Components/HeroVideo/HeroVideo";
import HomeHero from "../Components/Home/HomeHero";
import HomePricingTeaser from "../Components/Home/HomePricingTeaser";
import HomeCta from "../Components/Home/HomeCta";

const Home = () => {
    return (
        <>
      <Helmet>
        <title>Business Software Solutions in Singapore | SBros Tech
</title>
        <meta
          name="description"
          content="SBros Tech offers IT solutions, software development, 
          web development and digital marketing services in Singapore for business growth."
        />
      </Helmet>
      <link
          rel="canonical"
          href="https://sbrostech.com.sg/"
        />
        <div className="home-page1">

            {/* ================= HERO (brand banner) ================= */}
            <HomeHero />

            {/* ================= CINEMATIC VIDEO ================= */}
            <HeroVideo
                src="/assets/img/Background.mp4"
                // poster="/assets/img/bg/blueshine.png"
            />

            {/* ================= ABOUT ================= */}
            <About1
                image1="/assets/img/about/about5.jpg"
                image2="/assets/img/about/about1img1.jpeg"
                Title=" Smart IT Solutions to Drive Business Growth in Singapore "
                content="We help businesses in Singapore streamline operations and improve productivity through reliable IT solutions, custom software development and ERP systems. Our team delivers practical, scalable and business-focused technology solutions tailored to your requirements. 


"
                featurelist={[
                    "Solve business challenges with reliable IT solutions in Singapore.",
                    "Help your business grow using innovative digital and IT solutions.",
                    "Grow your business with reliable software development solutions ",
                ]}
            />

            {/* ================= SERVICES ================= */}
            <Services1 />

            {/* ================= WHY CHOOSE US ================= */}
            <Choose1 />

            {/* ================= PRICING TEASER ================= */}
            <HomePricingTeaser />

            {/* ================= PROJECTS ================= */}
            <Project1 />

            {/* ================= CALL TO ACTION ================= */}
            <HomeCta />

        </div>
     </>
    );
};

export default Home;
