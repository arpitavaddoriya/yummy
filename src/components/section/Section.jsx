import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <section className="mad-section">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="content-element-4">
            <h2>Real Delicious Food Straight To Your Door</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
              fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor,
              dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor
              wisi et urna. Aliquam erat volutpat.
            </p>
          </div>
          <div className="mad-icon-boxes item-col-2">
            <div className="mad-col">
              <article className="mad-icon-box">
                <i className="mad-icon-box-icon">
                  <img
                    className="svg"
                    src="/qualityicon.svg"
                    alt="Premium Quality"
                  />
                </i>
                <div className="mad-icon-box-content">
                  <h6 className="mad-icon-box-title">
                    <b>Premium Quality</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
              </article>
            </div>
            <div className="mad-col">
              <article className="mad-icon-box">
                <i className="mad-icon-box-icon">
                  <img
                    className="svg"
                    src="/freshicon.svg"
                    alt="Always Fresh"
                  />
                </i>
                <div className="mad-icon-box-content">
                  <h6 className="mad-icon-box-title">
                    <b>Always Fresh</b>
                  </h6>
                  <p>
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                    turpis.
                  </p>
                </div>
              </article>
            </div>
            <div className="mad-col">
              <article className="mad-icon-box">
                <i className="mad-icon-box-icon">
                  <img
                    className="svg"
                    src="/dishicon.svg"
                    alt="Variety of Dishes"
                  />
                </i>
                <div className="mad-icon-box-content">
                  <h6 className="mad-icon-box-title">
                    <b>Variety of Dishes</b>
                  </h6>
                  <p>
                    Suspendisse sollicitudin velit sed leo. Ut pharetra augue
                    nec augue.
                  </p>
                </div>
              </article>
            </div>
            <div className="mad-col">
              <article className="mad-icon-box">
                <i className="mad-icon-box-icon">
                  <img
                    className="svg"
                    src="/delievry1.svg"
                    alt="Fastest Delivery"
                  />
                </i>
                <div className="mad-icon-box-content">
                  <h6 className="mad-icon-box-title">
                    <b>Fastest Delivery</b>
                  </h6>
                  <p>
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                    turpis.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mad-img">
            <img src="/688x944_img1.jpg" alt="Delicious Food" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
