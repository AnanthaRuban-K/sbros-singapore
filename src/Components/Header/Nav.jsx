import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">

      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="/service">Services</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service/services1" onClick={() => setMobileToggle(false)}>
                ERP Solutions
              </Link>
            </li>
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/service/website-development" onClick={() => setMobileToggle(false)}>
                Website Development
              </Link>
            </li>
            <li>
              <Link to="/service/it-networking" onClick={() => setMobileToggle(false)}>
                IT Networking
              </Link>
            </li>
            <li>
              <Link to="/service/trading" onClick={() => setMobileToggle(false)}>
                Trading
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

       <li className="menu-item-has-children">
        <Link>Products</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/project/project-details-center" onClick={() => setMobileToggle(false)}>
                One Solution ERP
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      {/*<li className="menu-item-has-children">
        <Link to="/industries">Industries</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/industries/construction" onClick={() => setMobileToggle(false)}>
                Construction
              </Link>
            </li>
            <li>
              <Link to="/industries/smes" onClick={() => setMobileToggle(false)}>
                SMEs
              </Link>
            </li>
            <li>
              <Link to="/industries/trading" onClick={() => setMobileToggle(false)}>
                Trading
              </Link>
            </li>
            <li>
              <Link to="/industries/other-businesses" onClick={() => setMobileToggle(false)}>
                Other Businesses
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}

      {/* <li>
        <Link to="/technology" onClick={() => setMobileToggle(false)}>
          Technology
        </Link>
      </li> */}

      <li>
        <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
          Projects 
        </Link>
      </li>

      {/* <li>
        <Link to="/insights" onClick={() => setMobileToggle(false)}>
          Insights
        </Link>
      </li> */}

     
    </ul>
  );
}