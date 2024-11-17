import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div className="py-20 flexvflex-col items-center justify-center">
        <h2 className="text-center">Customer Testimonials</h2>

        {/* Testimonials Section */}
        <div className="mad-testimonials">
          <div className="mad-grid mad-grid--cols-2 owl-carousel">
            {/* Testimonial Item */}
            <div className="mad-grid-item">
              <div className="mad-testimonial">
                <div data-estimate="5" className="mad-rating"></div>
                <div className="mad-testimonial-info">
                  <blockquote>
                    <p>
                      “Mauris fermentum dictum magna. Sed laoreet ali&shy;quam
                      leo. Ut tellus dolor, dapibus eget, elementum vel, cursus
                      eleifend, elit.”
                    </p>
                  </blockquote>
                </div>
                <div className="mad-author">
                  <div className="mad-author-img">
                    <img src="/96x96_photo1.jpg" alt="Rebecca Johnson" />
                  </div>
                  <div className="mad-author-info">
                    <cite>Rebecca Johnson, CA, USA</cite>
                  </div>
                </div>
              </div>
            </div>
            {/* / Testimonial Item */}

            {/* Testimonial Item */}
            <div className="mad-grid-item">
              <div className="mad-testimonial">
                <div data-estimate="5" className="mad-rating"></div>
                <div className="mad-testimonial-info">
                  <blockquote>
                    <p>
                      “Aliquam erat volutpat. Duis ac turpis. Integer rutrum
                      ante eu lacus. Vestibulum libero nisl, porta vel,
                      scelerisque eget, malesuada at, neque.”
                    </p>
                  </blockquote>
                </div>
                <div className="mad-author">
                  <div className="mad-author-img">
                    <img src="/96x96_photo2.jpg" alt="Alan Smith" />
                  </div>
                  <div className="mad-author-info">
                    <cite>Alan Smith, NY, USA</cite>
                  </div>
                </div>
              </div>
            </div>
            {/* / Testimonial Item */}

            {/* Testimonial Item */}
            <div className="mad-grid-item">
              <div className="mad-testimonial">
                <div data-estimate="5" className="mad-rating"></div>
                <div className="mad-testimonial-info">
                  <blockquote>
                    <p>
                      “Integer rutrum ante eu lacus. Vestibulum libero nisl,
                      porta vel, scelerisque eget, malesuada at.”
                    </p>
                  </blockquote>
                </div>
                <div className="mad-author">
                  <div className="mad-author-img">
                    <img src="/96x96_photo3.jpg" alt="Bradley Grosh" />
                  </div>
                  <div className="mad-author-info">
                    <cite>Bradley Grosh, FL, USA</cite>
                  </div>
                </div>
              </div>
            </div>

            <div className="mad-grid-item">
              <div className="mad-testimonial">
                <div data-estimate="5" className="mad-rating">
                  <div className="mad-testimonial-info">
                    <blockquote>
                      <p>
                        “Suspendisse sollicitudin velit sed leo. Ut pharetra
                        augue nec augue. Nam elit agna, endrerit sit amet,
                        tincidunt ac, viverra sed, nulla.”
                      </p>
                    </blockquote>
                  </div>
                  <div className="mad-author">
                    <div className="mad-author-img">
                      <img src="/96x96_photo4.jpg" alt="Ivana Wong" />
                    </div>
                    <div className="mad-author-info">
                      <cite>Ivana Wong, TX, USA</cite>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Section */}
      <div
        style={{
          backgroundImage: "url('/1920x672_bg1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        class="mad-section mad-col-img mad-section--stretched mad-colorizer--scheme-"
      >
        <div class="row">
          <div class="col-lg-5 col-sm-10">
            <h2>
              Order and Pay <br />
              in a Few Minutes
            </h2>
            <p class="content-element-6">
              Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at,
              neque. Vivamus eget nibh. Etiam cursus leo vel metus. Aenean nec
              eros. Vestibu&shy;lum ante ipsum primis in faucibus orci luctus et
              ultrices.
            </p>
            <div class="btn-set big-btns">
              <a href="#">
                <img src="/app_store.png" alt="" />
              </a>
              <a href="#">
                <img src="/google_pay.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mad-section mad-section--stretched mad-colorizer--scheme-color-5">
        <div className="flexvflex-col items-center justify-center">
          <h2 className="text-center">Latest News</h2>
          <div className="mad-entities item-col-3 type-3">
            <div className="mad-col">
              <article className="mad-entity">
                <div className="mad-entity-media">
                  <img src="/448x288_img1.jpg" alt="News 1" />
                </div>
                <div className="mad-entity-body">
                  <div className="mad-entity-tags">
                    <span>September 28, 2021</span>
                    <span className="mad-in">News</span>
                  </div>
                  <h5 className="mad-entity-title">
                    <a href="#" className="mad-link">
                      Sed in Lacus ut Enim
                    </a>
                  </h5>
                  <p>
                    Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut
                    tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                    elit.
                  </p>
                  <a href="#" className="mad-read-more small-size">
                    Read More
                  </a>
                </div>
              </article>
            </div>

            <div className="mad-col">
              <article className="mad-entity">
                <div className="mad-entity-media">
                  <img src="/448x288_img2.jpg" alt="News 2" />
                </div>
                <div className="mad-entity-body">
                  <div className="mad-entity-tags">
                    <span>September 21, 2021</span>
                    <a href="#">Events</a>
                  </div>
                  <h5 className="mad-entity-title">
                    <a href="#" className="mad-link">
                      Aliquam Erat Volutpat
                    </a>
                  </h5>
                  <p>
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                    turpis. Integer rutrum ante eu lacus. Vestibulum libero
                    nisl, porta vel, scelerisque.
                  </p>
                  <a href="#" className="mad-read-more small-size">
                    Read More
                  </a>
                </div>
              </article>
            </div>

            <div className="mad-col">
              <article className="mad-entity">
                <div className="mad-entity-media">
                  <img src="/448x288_img3.jpg" alt="News 3" />
                </div>
                <div className="mad-entity-body">
                  <div className="mad-entity-tags">
                    <span>September 15, 2021</span>
                    <a href="#">Offers</a>
                  </div>
                  <h5 className="mad-entity-title">
                    <a href="#" className="mad-link">
                      Donec in Velit Vel Ipsum
                    </a>
                  </h5>
                  <p>
                    Vivamus eget nibh. Etiam cursus leo vel metus. Nulla
                    facilisi. Aenean nec eros. Vestibulum ante ipsum primis in
                    faucibus orci luctus.
                  </p>
                  <a href="#" className="mad-read-more small-size">
                    Read More
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mad-section no-pd mad-section--stretched-content-no-px"
        style={{ marginLeft: "-16px", marginRight: "-16px" }}
      >
        <div className="mad-instafeed">
          <div className="mad-grid item-col-5 no-gutters">
            <div className="mad-col">
              <a href="#">
                <img src="/384x384_img1.jpg" alt="Insta Image 1" />
              </a>
            </div>
            <div className="mad-col">
              <a href="#">
                <img src="/384x384_img2.jpg" alt="Insta Image 2" />
              </a>
            </div>
            <div className="mad-col">
              <a href="#">
                <img src="/384x384_img3.jpg" alt="Insta Image 3" />
              </a>
            </div>
            <div className="mad-col">
              <a href="#">
                <img src="/384x384_img4.jpg" alt="Insta Image 4" />
              </a>
            </div>
            <div className="mad-col">
              <a href="#">
                <img src="/384x384_img5.jpg" alt="Insta Image 5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
