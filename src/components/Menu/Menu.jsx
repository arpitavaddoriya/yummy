import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="mad-content no-pd">
      <div className="mad-menu-box with-slide-top">
        <div className="mad-col">
          <a href="#" className="mad-menu-item">
            <i className="mad-menu-icon">
              <img src="/pizzaIcon.svg" alt="Pizza" />
            </i>
            <h6 className="mad-menu-title">Pizza</h6>
          </a>
        </div>
        <div className="mad-col">
          <a href="#" className="mad-menu-item">
            <i className="mad-menu-icon">
              <img className="svg" src="/pasta.svg" alt="Pasta" />
            </i>
            <h6 className="mad-menu-title">Pasta</h6>
          </a>
        </div>
        <div className="mad-col">
          <a href="#" className="mad-menu-item">
            <i className="mad-menu-icon">
              <img className="svg" src="/burger.svg" alt="Burgers" />
            </i>
            <h6 className="mad-menu-title">Burgers</h6>
          </a>
        </div>
        <div className="mad-col">
          <a href="#" className="mad-menu-item">
            <i className="mad-menu-icon">
              <img className="svg" src="/french_fries.svg" alt="Sides" />
            </i>
            <h6 className="mad-menu-title">Sides</h6>
          </a>
        </div>
        <div className="mad-col">
          <a href="#" className="mad-menu-item">
            <i className="mad-menu-icon">
              <img className="svg" src="/dessert.svg" alt="Desserts" />
            </i>
            <h6 className="mad-menu-title">Desserts</h6>
          </a>
        </div>
        <div className="mad-col">
          <a href="#" className="mad-menu-item">
            <i className="mad-menu-icon">
              <img className="svg" src="/drink.svg" alt="Drinks" />
            </i>
            <h6 className="mad-menu-title">Drinks</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
