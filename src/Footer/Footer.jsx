import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTripadvisor,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="mad-footer" className="mad-footer">
      {/* Footer Main Section */}
      <div className="mad-footer-main">
        <div className="container">
          <div className="row vr-size-1">
            {/* Company Info */}
            <div className="col-lg-6">
              <section className="mad-widget">
                <div className="content-element-5">
                  <a href="#" className="mad-logo">
                    <img src="images/logo2.png" alt="Logo" />
                  </a>
                </div>
                <div className="mad-our-info vr-type">
                  <div className="mad-info">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>
                      8901 Marmora Road, New York, NY 10013 <br />
                      <a href="#" className="mad-link mad-dir">
                        Get Directions
                      </a>
                    </span>
                  </div>
                  <div className="mad-info">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+1 800 559 6580</span>
                  </div>
                  <div className="mad-info">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:mail@companyname.com" className="mad-link">
                      mail@companyname.com
                    </a>
                  </div>
                  <div className="mad-info">
                    <FontAwesomeIcon icon={faClock} />
                    <span>Mon - Fri: 8am - 11pm, Sat - Sun: 8am - 12pm</span>
                  </div>
                </div>
              </section>
            </div>
            {/* Footer Menu Links */}
            {["Menu", "Company", "Support"].map((section, index) => (
              <div key={index} className="col-lg-2">
                <section className="mad-widget">
                  <h5 className="mad-widget-title">{section}</h5>
                  <div className="mad-vr-list">
                    <ul>
                      {getFooterLinks(section).map((link, i) => (
                        <li key={i}>
                          <a href="#" className="mad-link">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="mad-footer-bottom">
        <div className="container">
          <p className="copyrights">
            Copyright © 2021 Yummi. All Rights Reserved.
          </p>
          <div className="mad-social-icons">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTripadvisor} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faPinterestP} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper function to get footer links
const getFooterLinks = (section) => {
  const links = {
    Menu: ["Pizza", "Pasta", "Burgers", "Sides", "Desserts", "Drinks"],
    Company: [
      "About",
      "The Menu",
      "Testimonials",
      "Blog",
      "Shop",
      "Gift Cards",
    ],
    Support: [
      "How to Order",
      "Where We Deliver",
      "FAQs",
      "Contact",
      "Terms and Conditions",
      "Privacy Policy",
    ],
  };
  return links[section] || [];
};

export default Footer;
