import React from "react";
import "./Worksection.css";
const WorkSection = () => {
  return (
    <div className="py-20 bg-yellow-400 flexvflex-col items-center justify-center">
      <div class="">
        <h2 className="text-center">How It Works</h2>
        <p className="w-1/3 text-center mx-auto ">
          Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at,
          neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
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
  );
};

export default WorkSection;
