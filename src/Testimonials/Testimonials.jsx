import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
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
                  <img
                    src="src/assets/96x96_photo1.jpg"
                    alt="Rebecca Johnson"
                  />
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
                    “Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                    eu lacus. Vestibulum libero nisl, porta vel, scelerisque
                    eget, malesuada at, neque.”
                  </p>
                </blockquote>
              </div>
              <div className="mad-author">
                <div className="mad-author-img">
                  <img src="src/assets/96x96_photo2.jpg" alt="Alan Smith" />
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
                    “Integer rutrum ante eu lacus. Vestibulum libero nisl, porta
                    vel, scelerisque eget, malesuada at.”
                  </p>
                </blockquote>
              </div>
              <div className="mad-author">
                <div className="mad-author-img">
                  <img src="src/assets/96x96_photo3.jpg" alt="Bradley Grosh" />
                </div>
                <div className="mad-author-info">
                  <cite>Bradley Grosh, FL, USA</cite>
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
                    “Suspendisse sollicitudin velit sed leo. Ut pharetra augue
                    nec augue. Nam elit agna, endrerit sit amet, tincidunt ac,
                    viverra sed, nulla.”
                  </p>
                </blockquote>
              </div>
              <div className="mad-author">
                <div className="mad-author-img">
                  <img src="src/assets/96x96_photo4.jpg" alt="Ivana Wong" />
                </div>
                <div className="mad-author-info">
                  <cite>Ivana Wong, TX, USA</cite>
                </div>
              </div>
            </div>
          </div>
          {/* / Testimonial Item */}

          {/* Additional Testimonial Items as needed... */}
        </div>
      </div>
      {/* End of Testimonials Section */}
    </div>
  );
};

export default Testimonials;
