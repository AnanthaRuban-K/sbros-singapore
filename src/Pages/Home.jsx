import About1 from "../Components/About/About1";
import Choose1 from "../Components/Choose/Choose1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import HeroVideo from "../Components/HeroVideo/HeroVideo";

const Home = () => {
    return (
        <div className="home-page1">

            {/* ================= HERO ================= */}
            <HeroBanner1
                bgImg="/assets/img/bg/blueshine.png"
                subTitle="SBros"
                title="Powering Businesses With <span class='after'>Software Built for Growth</span>"
                content="We deliver innovative, secure, and scalable IT solutions that simplify operations, enhance efficiency, and empower businesses to achieve sustainable growth."
                btnName="Explore"
                btnUrl="/contact-us"
                image2="/assets/img/hero/headimg5.png"
            />

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

            {/* ================= PROJECTS ================= */}
            <Project1 />

        </div>
    );
};

export default Home;