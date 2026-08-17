import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
 

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky('cs-gescout_show cs-gescout_sticky');
    } else {
      setIsSticky('');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className='header-area2 header_nav_03'>
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      
      <div className="cs_main_header cs_accent_bg">
        <div className="container">
          <div className="cs_main_header_in">

            <div className="cs_main_header_left">
              <Link className="cs_site_branding" to="/">
                <img src="/assets/img/logo/sbros-logo1.png" alt="Logo" />
              </Link>
              </div>

              <div className="cs_main_header_center1">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right header_right_one">

            <div className="header1-buttons">
                    
                    <div className="button">
                    <Link to="/contact" className="theme-btn1" >Contact us <span><i className="bi bi-arrow-right"></i>
                    </span></Link>
                    </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
    
  );
}
