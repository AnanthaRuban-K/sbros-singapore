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
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
            Website Development
              </Link>
            </li>            
            <li>
              <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
              Network Solutions
              </Link>
            </li>  
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Trading
              </Link>
            </li>         
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Digital Marketing
              </Link>
            </li>                        
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
                SEO & SEM
              </Link>
            </li>           
                                 
          </ul>
        </DropDown>
      </li>      
    <li>
  <Link to="/blog" onClick={() => setMobileToggle(false)}>
    Product
  </Link>
</li>

           
      
    </ul>
  );
}
