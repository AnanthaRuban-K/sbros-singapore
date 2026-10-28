import LandingMain from "../Components/Landing/LandingPage";

// No header or footer on this page: the landing hero is the page's h1

const LandingPage = () => {
    return (
        <div>
            <LandingMain headingTag="h1"></LandingMain>
        </div>
    );
};

export default LandingPage;