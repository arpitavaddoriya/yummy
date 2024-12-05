import React from "react";
import "./Worksection.css";
const WorkSection = () => {
  return (
    <>
      <div className="py-20 bg-yellow-400 flexvflex-col items-center justify-center">
        <div class="">
          <h2 className="text-center">How It Works</h2>
          <p className="w-1/3 text-center mx-auto ">
            Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at,
            neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla
            facilisi.
          </p>
        </div>
        <div class="flex relative">
          <div class="mad-col">
            <article class="mad-icon-box">
              <i class="mad-icon-box-icon ">
                <img class="svg" src="/cartIcon.svg" alt="" />
              </i>
              <div class="mad-icon-box-content">
                <h5 class="mad-icon-box-title">1. Select Your Food</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </article>
          </div>
          <div class="mad-col">
            <article class="mad-icon-box">
              <i class="mad-icon-box-icon">
                <img class="svg" src="/walletIcon.svg" alt="" />
              </i>
              <div class="mad-icon-box-content">
                <h5 class="mad-icon-box-title">2. Pay With Card or Cash</h5>
                <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo.</p>
              </div>
            </article>
          </div>
          <div class="mad-col">
            <article class="mad-icon-box">
              <i class="mad-icon-box-icon">
                <img class="svg" src="/delievryIcon.svg" alt="" />
              </i>
              <div class="mad-icon-box-content">
                <h5 class="mad-icon-box-title">3. Pickup or Delivery</h5>
                <p>
                  Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                  elit.
                </p>
              </div>
            </article>
          </div>
          <div className="absolute left-1/6 top-1/2">
            <img class="svg" src="src/assets/nextstep.svg" alt="" />
          </div>
          <div className="absolute left-2/3 top-1/2">===</div>
        </div>
        <div class="align-center">
          <a href="#" class="btn btn-style-3 btn-big">
            Order Now
          </a>
        </div>
      </div>

      <div class="mad-section">
        <h2 class="text-center">Discover Our Menu</h2>

        <div class="mad-tabs">
          <div
            role="tablist"
            aria-label="Tabs v1"
            class="mad-tabs-nav justify-content-center"
          >
            <span class="mad-active">
              <a
                id="tab-1-link"
                href="#tab-1"
                role="tab"
                aria-selected="false"
                aria-controls="tab-1"
                class="mad-tab-link"
              >
                Pizza
              </a>
            </span>
            <span>
              <a
                id="tab-2-link"
                href="#tab-2"
                role="tab"
                aria-selected="true"
                aria-controls="tab-2"
                class="mad-tab-link"
              >
                Pasta
              </a>
            </span>
            <span>
              <a
                id="tab-3-link"
                href="#tab-3"
                role="tab"
                aria-selected="false"
                aria-controls="tab-3"
                class="mad-tab-link"
              >
                Burgers
              </a>
            </span>
            <span>
              <a
                id="tab-4-link"
                href="#tab-4"
                role="tab"
                aria-selected="false"
                aria-controls="tab-4"
                class="mad-tab-link"
              >
                Sides
              </a>
            </span>
            <span>
              <a
                id="tab-5-link"
                href="#tab-5"
                role="tab"
                aria-selected="false"
                aria-controls="tab-5"
                class="mad-tab-link"
              >
                Desserts
              </a>
            </span>
            <span>
              <a
                id="tab-6-link"
                href="#tab-6"
                role="tab"
                aria-selected="false"
                aria-controls="tab-6"
                class="mad-tab-link"
              >
                Drinks
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
