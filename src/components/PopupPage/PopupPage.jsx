import React, { useState } from "react";
import "./PopupPage.css";

const PopupPage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const toggleSearchModal = () => {
    setIsSearchModalVisible(!isSearchModalVisible);
  };

  return (
    <div>
      <div className="mad-preloader"></div>
      <div id="mad-page-wrapper" className="mad-page-wrapper">
        {/*================ Popup ================*/}
        {isPopupVisible && (
          <div id="page-popup" className="mad-page-popup">
            <div className="mad-popup-inner">
              <button
                id="mad-popup-close"
                className="arcticmodal-close"
                onClick={closePopup}
              >
                <i className="material-icons">close</i>
              </button>
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-md-6">
                    <h3 className="mad-page-title">We Are Open!</h3>
                    <p>
                      We offer our full menu for Pick Up and Delivery during our
                      hours of opration.
                    </p>
                    <p className="content-element-4">
                      Click on the link below or Call our restaurant at <br />
                      +1 800 559 6580 to place your order.
                    </p>
                    <a href="#" className="btn btn-big btn-style-3">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/*================ /Popup ================*/}

        {/*================ Search Modal ================*/}
        {isSearchModalVisible && (
          <div className="mad-modal-overlay">
            <div id="search-modal" className="mad-modal mad-modal--search">
              <button
                type="button"
                className="arcticmodal-close"
                onClick={toggleSearchModal}
              >
                <i className="material-icons">close</i>
              </button>
              <h4 className="mad-title">Search</h4>
              {/*================ Search Form ================*/}
              <form role="search" method="get" className="mad-searchform">
                <input
                  type="text"
                  name="s"
                  placeholder="Type your keyword here"
                />
                <button type="submit" className="btn btn-style-3">
                  <i className="material-icons">search</i>
                </button>
              </form>
              {/*================ End of Search Form ================*/}
            </div>
          </div>
        )}
        {/*================ /Search Modal ================*/}
      </div>
    </div>
  );
};

export default PopupPage;
