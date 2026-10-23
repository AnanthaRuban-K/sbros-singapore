import { Link } from "react-router-dom";
import BreadCumb from "../Components/Common/BreadCumb";

const NotFound = () => {
    return (
        <div>
            <BreadCumb Title="Page Not Found"></BreadCumb>

            <section className="not-found-section">
                <div className="container text-center">
                    <h2>We couldn&apos;t find that page</h2>
                    <p>The page may have moved, or the link may be out of date.</p>

                    <div className="not-found-actions">
                        <Link to="/" className="theme-btn1">Back to Home</Link>
                        <Link to="/contact-us" className="theme-btn1">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
