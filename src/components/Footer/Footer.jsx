import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
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
      <div className="mad-footer-main">
        <div className="container">
          <div className="row vr-size-1">
            <div className="col-lg-6 ">
              <section className="mad-widget">
                <div className="content-element-5">
                  <a href="#" className="mad-logo">
                    <img src="/logo2.png" alt="Logo" />
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
            <div className="col-lg-2">
              <section className="mad-widget">
                <h5 className="mad-widget-title">Menu</h5>
                <div className="mad-vr-list">
                  <ul>
                    <li>
                      <a href="#" className="mad-link">
                        Pizza
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Pasta
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Burgers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Sides
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Desserts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Drinks
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="col-lg-2 w-55">
              <section className="mad-widget">
                <h5 className="mad-widget-title">Company</h5>
                <div className="mad-vr-list">
                  <ul>
                    <li>
                      <a href="#" className="mad-link">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        The Menu
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Gift Cards
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="col-lg-2 ">
              <section className="mad-widget">
                <h5 className="mad-widget-title">Support</h5>
                <div className="mad-vr-list">
                  <ul>
                    <li>
                      <a href="#" className="mad-link">
                        How to Order
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Where We Deliver
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mad-link">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

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

export default Footer;
