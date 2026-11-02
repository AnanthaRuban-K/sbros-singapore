import {Helmet} from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";



const ContactPage = () => {
    return (
         <>
              <Helmet>
                <title>IT Solutions & Software Development Singapore | SBROS Tech

        
        </title>
                <meta
                  name="description"
                  content="Contact SBros Tech for ERP, software development, web development and IT networking services in Singapore. Discuss your business needs with us.
                  "
                />
              </Helmet>
              <link
                  rel="canonical"
                  href="https://sbrostech.com.sg/contact-us"
                />
        <div>
            <BreadCumb Title="Contact Us"></BreadCumb>
           
            <ContactInfo1></ContactInfo1>
           
        </div>
    </>
    );
};

export default ContactPage;