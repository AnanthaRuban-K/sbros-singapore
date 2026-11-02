import {Helmet} from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";
import ProjectDetailsCenter1 from "../Components/ProjectDetails/ProjectDetailsCenter1";



const ProejctDetailsCenter = () => {
    return (
        <>
      <Helmet>
        <title>IT Products & Solutions in Singapore | SBros Tech

</title>
        <meta
          name="description"
          content="Explore IT products from SBros Tech in Singapore. Discover technology solutions for your business needs and contact our team for more information."
        />
      </Helmet>
      <link
          rel="canonical"
          href="https://sbrostech.com.sg/products"
        />
        <div>
           <BreadCumb
  Title="Products"
  
/>
            <ProjectDetailsCenter1></ProjectDetailsCenter1>
           
            
        </div>
        </>
    );
};

export default ProejctDetailsCenter;