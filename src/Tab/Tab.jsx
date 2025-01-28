import React from "react";
import "./Tab.css";
const Tab = () => {
  return (
    <div class="mad-section no-pd mad-section--stretched-content-no-px">
      <div class="mad-half-section">
        <div class="mad-col">
          <div
            class="mad-half-section-item"
            data-bg-image-src="/944x648_bg1.jpg"
            style={{ backgroundImage: `url('/944x648_bg1.jpg')` }}
          >
            <div class="mad-half-content">
              <div class="content-element-6">
                <h2 class="mad-page-title">Create Your Own Pizza</h2>
                <p>
                  Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
                </p>
              </div>
              <a href="#" class="btn btn-style-3 btn-big">
                Add Toppings
              </a>
            </div>
          </div>
        </div>

        <div class="mad-col">
          <div
            class="mad-half-section-item"
            data-bg-image-src="
            /944x648_bg2.jpg"
            style={{ backgroundImage: `url('/944x648_bg2.jpg')` }}
          >
            <div class="mad-half-content text-center">
              <div class="content-element-6">
                <h2 class="mad-page-title">Create Your Own Burger</h2>
                <p>
                  Aenean nec eros. Vestibulum ante ipsum primis in faucibus.
                </p>
              </div>
              <a href="#" class="btn btn-style-3 btn-big">
                Add Toppings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
