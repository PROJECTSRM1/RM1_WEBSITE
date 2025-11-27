import { Button } from 'antd';
import { ArrowUp, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // <-- ADDED
import logo from '@/assets/logo.png';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = useNavigate(); // <-- INITIALIZED

  return (
    <footer className="footer">
      <div className="container-custom">

        {/* ROW 1 - LOCATIONS */}
        <div className="footer-locations">
          <h4 className="footer-locations-title">Locations</h4>

          {/* INDIA ROW */}
          <div className="footer-locations-row">

            <div className="location-block">
              <span className="location-heading">India</span>
            </div>

            <div className="location-block">
              <span className="location-heading">Hyderabad</span>
              <p className="location-address">
                Vasavi Sky City, Office No:2 8th Floor,<br />
                Telecom Nagar, Gachibowli,<br />
                Hyderabad - Telangana 500032.
              </p>
            </div>

            <div className="location-block">
              <span className="location-heading">Bengaluru</span>
              <p className="location-address">
                22nd Floor, World Trade Center,<br />
                26/1, Dr Rajkumar Rd, Malleshwaram,<br />
                Bengaluru, Karnataka 560055.
              </p>
            </div>

          </div>

          <hr className="footer-divider" />

          {/* OTHER LOCATIONS ROW */}
          <div className="footer-locations-row">

            <div className="location-block">
              <span className="location-heading">Other Locations</span>
            </div>

            <div className="location-block">
              <span className="location-heading">Canada</span>
              <p className="location-address">
                RM1 Coders Hub Inc.,<br />
                2980 Don Mills Rd., North York,<br />
                ON M2J 3B9, Canada.
              </p>
            </div>

            <div className="location-block">
              <span className="location-heading">USA</span>
              <p className="location-address">
                RM1 Coders Hub Inc.,<br />
                21745 Green Hill Rd bldg 16, apt 167,<br />
                Farmington Hills, MI 48335, USA.
              </p>
            </div>

          </div>

          <hr className="footer-divider" />
        </div>

        {/* ROW 2 - THREE COLUMNS */}
        <div className="footer-content">

          {/* Column 1 - Logo + Description */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="RM1 Coders Hub Logo" className="footer-logo-image" />
            </div>

            <p className="footer-description">
              RMI Coders Hub is a pioneering force in the software development
              and technology services industry, committed to transforming ideas
              into impactful solutions across a broad spectrum of domains.
            </p>

            <Button
              type="primary"
              size="large"
              className="footer-btn"
              onClick={() => {
                navigate('/');            // go to home page
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top
                }, 100);                  // wait until route finishes
              }}
            >
              View More →
            </Button>

          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Email + Social Icons */}
          <div className="footer-column">
            <h4 className="footer-title">Email Id</h4>
            <p className="footer-email">support@rm1codershub.com</p>

            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p className="footer-copy">
            Copyright © 2025. Designed By RM1CodersHub.com
          </p>
        </div>

      </div>

      <button className="scroll-to-top" onClick={scrollToTop}>
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
