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
              <Link to="/service/service-details-right" onClick={() => setMobileToggle(false)}>
                ERP Solutions
              </Link>
            </li>
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-center" onClick={() => setMobileToggle(false)}>
                Website Development
              </Link>
            </li>
            <li>
              <Link to="/service/service-it-networking" onClick={() => setMobileToggle(false)}>
                IT Networking
              </Link>
            </li>
            <li>
              <Link to="/service/service-trading" onClick={() => setMobileToggle(false)}>
                Trading
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link to="/projects" onClick={() => setMobileToggle(false)}>
          Projects 
        </Link>
      </li>

    </ul>
  );
}