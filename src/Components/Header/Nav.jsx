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
        <Link to="/About-us" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <li className="menu-item-has-children">
        <a href="#" onClick={(e) => e.preventDefault()}>Services</a>
        <DropDown>
          <ul>
            <li>
              <Link to="/ERP-Solutions" onClick={() => setMobileToggle(false)}>
                ERP Solutions
              </Link>
            </li>
            <li>
              <Link to="/Software-Development" onClick={() => setMobileToggle(false)}>
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/Website-Development" onClick={() => setMobileToggle(false)}>
                Website Development
              </Link>
            </li>
            <li>
              <Link to="/IT-Networking" onClick={() => setMobileToggle(false)}>
                IT Networking
              </Link>
            </li>
            <li>
              <Link to="/Trading" onClick={() => setMobileToggle(false)}>
                Trading
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>



 <li>
        <Link to="/products" onClick={() => setMobileToggle(false)}>
          Products
        </Link>
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
        <Link to="/Projects" onClick={() => setMobileToggle(false)}>
          Projects
        </Link>
      </li>
<li className="mobile-contact-menu">
  <Link
    to="/contact-us"
    onClick={() => {
      setMobileToggle(false);
    }}
  >
    Contact Us
  </Link>
</li>
    </ul>
  );
}