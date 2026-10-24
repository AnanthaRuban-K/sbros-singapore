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
                Title="Empowering Businesses with Smarter Software Solutions"
                content="SBros empowers businesses with innovative, secure, and scalable software solutions designed to simplify operations and accelerate growth. From customized software and web development to business applications and digital solutions, we help organizations improve efficiency, make smarter decisions, and unlock their full potential."
                featurelist={[
                    "Turning business challenges into smarter software solutions.",
                    "Driving business growth through innovative digital solutions.",
                    "Empowering businesses with technology built for the future.",
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
    );
};

export default Home;
