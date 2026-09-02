import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import Layout4 from "../Layout/Layout4";
import Home4 from "../Pages/Home4";
import Layout5 from "../Layout/Layout5";
import Home5 from "../Pages/Home5";
import AboutLight from "../Pages/AboutLight";
import ServicePage from "../Pages/ServicePage";
import ProjectPage from "../Pages/ProjectPage";
import ContactPage from "../Pages/ContactPage";
import Pricing from "../Pages/Pricing";
import PricingCard1 from "../Pages/PricingCard1";
import CustomPlanProposal from "../Pages/CustomPlanProposal";
import Requirements from "../Pages/Requirements";
import AdditionalInformation from "../Pages/AdditionalInformation";
import Review from "../Pages/Review";
import Submitted from "../Pages/Submitted";
import RequestPricing from "../Pages/RequestPricing";
import Payment from "../Pages/Payment";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import TeamPage from "../Pages/TeamPage";
import TestimonialPage from "../Pages/TestimonialPage";
import ServiceDetailsLeft from "../Pages/ServiceDetailsLeft";
import ServiceITNetworking from "../Pages/ServiceITNetworking";
import ServiceTrading from "../Pages/ServiceTrading";
import ServiceDetailsRight from "../Pages/ServiceDetailsRight";
import ServiceDetailsCenter from "../Pages/ServiceDetailsCenter";
import ProjectDetailsLeft from "../Pages/ProjectDetailsLeft";
import ProjectDetailsRight from "../Pages/ProjectDetailsRight";
import ProejctDetailsCenter from "../Pages/ProejctDetailsCenter";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsLeft from "../Pages/BlogDetailsLeft";
import BlogDetailsRight from "../Pages/BlogDetailsRight";
import BlogDetailsCenter from "../Pages/BlogDetailsCenter";
import Layout6 from "../Layout/Layout6";
import AboutDark from "../Pages/AboutDark";
import ProjectDetailsLeftDark from "../Pages/ProjectDetailsLeftDark";
import ProjectDetailsRightDark from "../Pages/ProjectDetailsRightDark";
import ProjectDetailsCenterDark from "../Pages/ProjectDetailsCenterDark";
import ProjectPageDark from "../Pages/ProjectPageDark";
import ServicePageDark from "../Pages/ServicePageDark";
import ServiceDetailsLeftDark from "../Pages/ServiceDetailsLeftDark";
import ServiceDetailsRightDark from "../Pages/ServiceDetailsRightDark";
import ServiceDetailsCenterDark from "../Pages/ServiceDetailsCenterDark";
import BlogPageDark from "../Pages/BlogPageDark";
import BlogDetailsLeftDark from "../Pages/BlogDetailsLeftDark";
import BlogDetailsRightDark from "../Pages/BlogDetailsRightDark";
import BlogDetailsCenterDark from "../Pages/BlogDetailsCenterDark";
import TermsAndConditions from "../Components/Common/Terms";
import PrivacyPolicy from "../Components/Common/PrivacyPolicy";
import ScrollToTop from "../Components/Common/ScrollToTop";
import FloatingButtons from "../Components/Common/FloatingButtons";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Main />
         <FloatingButtons />
      </>
    ),
    children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/About-us",
            element:<AboutLight></AboutLight> ,
        }, 
        {
          path: "/services",
          element:<ServicePage></ServicePage> ,
        }, 
        {
          path: "/Software-Development",
          element:<ServiceDetailsLeft></ServiceDetailsLeft> ,
        }, 
        {
          path: "/IT-Networking",
          element:<ServiceITNetworking></ServiceITNetworking>,
        },
        {
          path: "/Trading",
          element:<ServiceTrading></ServiceTrading>,
        }, 
        {
          path: "/ERP-Solutions",
          element:<ServiceDetailsRight></ServiceDetailsRight> ,
        },
        {
          path: "/Website-Development",
          element:<ServiceDetailsCenter></ServiceDetailsCenter>,
        },                                  
        {
          path: "/project",
          element:<ProjectPage></ProjectPage> ,
        },
        {
          path: "/project/project-details",
          element:<ProjectDetailsLeft></ProjectDetailsLeft>,
        }, 
        {
          path: "/project/project-details-right",
          element:<ProjectDetailsRight></ProjectDetailsRight>,
        }, 
        {
          path: "/Products",
          element:<ProejctDetailsCenter></ProejctDetailsCenter>,
        },                       
        {
          path: "/team",
          element:<TeamPage></TeamPage> ,
        }, 
        {
          path: "/Projects",
          element:<TestimonialPage></TestimonialPage>,
        }, 
        {
          path: "/blog",
          element:<BlogPage></BlogPage> ,
        }, 
        {
          path: "/blog/blog-details",
          element:<BlogDetailsLeft></BlogDetailsLeft>,
        },
        {
          path: "/blog/blog-details-right",
          element:<BlogDetailsRight></BlogDetailsRight>,
        }, 
        {
          path: "/blog/blog-details-center",
          element:<BlogDetailsCenter></BlogDetailsCenter>,
        },    
        {
          path: "/Pricing",
          element:<Pricing></Pricing> ,
        },  
        {
  path: "/PricingCard1",
  element: <PricingCard1 />,
},  
{
  path: "/custom-plan-proposal",
  element: <CustomPlanProposal />,
},      
 {
  path: "/payment",
  element: <Payment />,
},   
{
  path: "/requirements",
  element: <Requirements />,
},
{
  path: "/additional-information",
  element: <AdditionalInformation />,
},
{
  path: "/review",
  element: <Review />,
},
{
  path: "/submitted",
  element: <Submitted />,
},
{
  path: "/pricing/:planId",
  element: <RequestPricing />,
},
{
  path: "/login",
  element: <Login />,
},
{
  path: "/signup",
  element: <Signup />,
},                                      
        {
          path: "/contact-us",
          element:<ContactPage></ContactPage> ,
        }, 
        {
  path: "/terms",
  element: <TermsAndConditions />,
},         
{
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
},                                                                       
      ],
    },
    {
      path: 'home2',
      element: <Layout2></Layout2>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        },                           
      ],
    },  
    {
      path: 'home3',
      element: <Layout3></Layout3>,
      children: [
        {
          index: true,
          element: <Home3></Home3>,
        },                           
      ],
    },
    {
      path: 'home4',
      element:<Layout4></Layout4>,
      children: [
        {
          index: true,
          element: <Home4></Home4>,
        },                           
      ],
    },  
    {
      path: 'home5',
      element:<Layout5></Layout5>,
      children: [
        {
          index: true,
          element: <Home5></Home5>,
        },                           
      ],
    }, 
    {
      element:<Layout6></Layout6>,
      children: [
        {
          path: '/aboutdark',
          element: <AboutDark></AboutDark>,
        }, 
        {
          path: '/projectDark',
          element: <ProjectPageDark></ProjectPageDark>,
        },        
        {
          path: "/project/project-details-dark",
          element:<ProjectDetailsLeftDark></ProjectDetailsLeftDark> ,
        },   
        {
          path: "/project/project-details-right-dark",
          element:<ProjectDetailsRightDark></ProjectDetailsRightDark>,
        },  
        {
          path: "/project/project-details-center-dark",
          element:<ProjectDetailsCenterDark></ProjectDetailsCenterDark>,
        }, 
        {
          path: '/serviceDark',
          element: <ServicePageDark></ServicePageDark>,
        }, 
        {
          path: '/service/service-details-dark',
          element: <ServiceDetailsLeftDark></ServiceDetailsLeftDark>,
        },
        
        {
          path: '/service/service-details-right-dark',
          element: <ServiceDetailsRightDark></ServiceDetailsRightDark>,
        },  
        {
          path: '/service/service-details-center-dark',
          element: <ServiceDetailsCenterDark></ServiceDetailsCenterDark>,
        }, 
        {
          path: '/blogdark',
          element: <BlogPageDark></BlogPageDark>,
        }, 
        {
          path: "/blog/blog-details-dark",
          element:<BlogDetailsLeftDark></BlogDetailsLeftDark>,
        },
        {
          path: "/blog/blog-details-right-dark",
          element:<BlogDetailsRightDark></BlogDetailsRightDark>,
        }, 
        {
          path: "/blog/blog-details-center-dark",
          element:<BlogDetailsCenterDark></BlogDetailsCenterDark>,
        },                                                                                            
      ],
    },                   
  ]);