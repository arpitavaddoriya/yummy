import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"; // Corrected import

const Navbar = () => {
  return (
    <header id="mad-header" className="mad-header mad-header--transparent">
      <div className="mad-pre-header">
        <div className="mad-our-info">
          <div className="mad-info">
            <i className="material-icons-outlined">location_on</i>
            <span>8901 Marmora Road, New York, NY 10013</span>
          </div>
          <div className="mad-info">
            <i className="material-icons">access_time</i>
            <span>Mon - Fri: 8am - 11pm, Sat - Sun: 8am - 12pm</span>
          </div>
        </div>
        <div className="mad-quick-links">
          <a href="#">Gift Cards</a>
          <span>|</span>
          <a href="#">Track Your Order</a>
          <span>|</span>
          <a href="#">Login/Register</a>
        </div>
      </div>
      <div class="mad-header-section--sticky-xl">
        <div class="">
          <div className="flex items-center justify-between">
            <div class="mad-header-item">
              <a href="index.html" className="mad-logo">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <nav className="mad-navigation-container">
              <ul className="mad-navigation mad-navigation--vertical-sm">
                <li className="menu-item menu-item-has-children current-menu-item">
                  <a href="#">HOME</a>
                  <ul className="sub-menu">
                    <li className="menu-item current-menu-item">
                      <a href="index.html">Main Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="home_2.html">Full Width Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="home_3.html">Center Menu Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="home_4.html">Lightweight Home</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">MENU</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="menu_v1.html">Menu v1</a>
                    </li>
                    <li>
                      <a href="menu_v2.html">Menu v2</a>
                    </li>
                    <li>
                      <a href="menu_v3.html">Menu v3</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">PAGES</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="pages_about_v1.html">About v1</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_about_v2.html">About v2</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_open_table.html">
                        Reservations Via Open Table
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_booking.html">
                        Reservations Via Booked - Appointment Booking Plugin
                      </a>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Gallery</a>
                      <ul className="s  ub-menu">
                        <li>
                          <a href="gallery_grid.html">Grid Gallery</a>
                        </li>
                        <li>
                          <a href="gallery_grid_full.html">
                            Full Width Grid Gallery
                          </a>
                        </li>
                        <li>
                          <a href="gallery_masonry.html">Masonry Gallery</a>
                        </li>
                        <li>
                          <a href="gallery_masonry_full.html">
                            Full Width Masonry Gallery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="pages_order.html">Track Order</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_contact_v1.html">Contact v1</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_contact_v2.html">Contact v2</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_coming_soon.html">Coming Soon Page</a>
                    </li>
                    <li className="menu-item">
                      <a href="pages_404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children mega-menu">
                  <a href="#">ELEMENTS</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-has-children">
                      <a href="#" className="sub-title">
                        Elements <span className="no-title">1</span>
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="elements_accordions_toggles.html">
                            Accordions &amp; Toggles
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_alert_boxes_buttons.html">
                            Alert Boxes &amp; Buttons
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_call_to_actions.html">
                            Call to Actions
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_counters.html">
                            Counters & Countdowns
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_icon_boxes.html">Icon With Text</a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_image_boxes.html">
                            Image With Text
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#" className="sub-title no-title">
                        Elements 2
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="elements_pricing.html">Pricing Tables</a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_tables.html">
                            Tables & Progress Bars
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_tabs.html">Tabs & Tour Sections</a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_team.html">Team Members & Awards</a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_testimonials.html">Testimonials</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#" className="sub-title">
                        Typography
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="elements_dropcaps_blockquotes.html">
                            Dropcaps &amp; Blockquotes
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_headings_and_paragraphs.html">
                            Headings & Paragraphs
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="elements_highlights_tooltips_listings.html">
                            Highlights, Tooltips and Listings
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="rtl/index.html">RTL Version</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#" className="sub-title">
                        Header Layouts
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="index.html">Header v1</a>
                        </li>
                        <li className="menu-item">
                          <a href="home_2.html">Header v2</a>
                        </li>
                        <li className="menu-item">
                          <a href="home_3.html">Header v3</a>
                        </li>
                        <li className="menu-item">
                          <a href="home_4.html">Header v4</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#" className="sub-title">
                        Footer Layouts
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="index.html">Footer v1</a>
                        </li>
                        <li className="menu-item">
                          <a href="home_2.html">Footer v2</a>
                        </li>
                        <li className="menu-item">
                          <a href="home_3.html">Footer v3</a>
                        </li>
                        <li className="menu-item">
                          <a href="home_4.html">Footer v4</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">SHOP</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="shop_front_sidebar.html">
                        Shop With Right Sidebar
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_front.html">Shop Without Sidebar</a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_create.html">Create Your Own Pizza</a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_single.html">Single Product Page</a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_checkout.html">Cart/Checkout</a>
                    </li>
                    <li className="menu-item">
                      <a href="shop_account.html">My Account</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">BLOG</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Classic Blog</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="blog_classic_sidebar.html">
                            With Right Sidebar
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="blog_classic.html">Without Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="blog_masonry.html">Masonry Blog</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="blog_masonry_sidebar.html">
                            With Right Sidebar
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="blog_masonry.html">Without Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Single Blog Post</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="blog_single_sidebar.html">
                            With Right Sidebar
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="blog_single.html">Without Sidebar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mad-header-item">
            <div className="mad-our-info type-2">
              <div className="mad-info">
                <i className="material-icons-outlined">call</i>
                <div className="mad-info-content">
                  <span>Call us for ordering</span>
                  <div className="mad-info-title">+1 800 559 6580</div>
                </div>
              </div>
            </div>

            <div class="mad-header-item">
              <div class="mad-actions">
                <div class="mad-item">
                  <a
                    href="#"
                    class="mad-item-link"
                    data-arctic-modal="#search-modal"
                  >
                    <i class="material-icons">search</i>
                  </a>
                  <a href="#" class="mad-item-link">
                    <i class="material-icons">person_outline</i>
                  </a>
                  <div class="mad-dropdown">
                    <a
                      href="#"
                      type="button"
                      class="mad-item-link mad-dropdown-title"
                    >
                      <i class="material-icons-outlined">shopping_cart</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mad-item">
              <a href="#" class="btn btn-small">
                <span>Order Online</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
