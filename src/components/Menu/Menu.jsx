import React from "react";
import "./Menu.css";
import Icon from "./icon";
import Pasta from "./pasta";
import Burger from "./burger";
import French_fries from "./french_fries";
import Desserts from "./desserts";
import Drinks from "./drinks";

const menu = [
  {
    name: "Pizza",
    icon: <Icon />,
  },
  {
    name: "Pasta",
    icon: <Pasta />,
  },
  {
    name: "Burgers",
    icon: <Burger />,
  },
  {
    name: "Sides",
    icon: <French_fries />,
  },
  {
    name: "Desserts",
    icon: <Desserts />,
  },
  {
    name: "Drinks",
    icon: <Drinks />,
  },
];

const Menu = () => {
  return (
    // <div className="mad-content no-pd">
    //   <div className="mad-menu-box with-slide-top">
    //     <div className="mad-col group">
    //       <a href="#" className="mad-menu-item">
    //         <i className="mad-menu-icon">
    //           {/* <img src="/pizzaIcon.svg" alt="Pizza" /> */}
    //           <Icon />
    //         </i>
    //         <h6 className="mad-menu-title">Pizza</h6>
    //       </a>
    //     </div>
    //     <div className="mad-col">
    //       <a href="#" className="mad-menu-item">
    //         <i className="mad-menu-icon">
    //           <img className="svg" src="/pasta.svg" alt="Pasta" />
    //         </i>
    //         <h6 className="mad-menu-title">Pasta</h6>
    //       </a>
    //     </div>
    //     <div className="mad-col">
    //       <a href="#" className="mad-menu-item">
    //         <i className="mad-menu-icon">
    //           <img className="svg" src="/burger.svg" alt="Burgers" />
    //         </i>
    //         <h6 className="mad-menu-title">Burgers</h6>
    //       </a>
    //     </div>
    //     <div className="mad-col">
    //       <a href="#" className="mad-menu-item">
    //         <i className="mad-menu-icon">
    //           <img className="svg" src="/french_fries.svg" alt="Sides" />
    //         </i>
    //         <h6 className="mad-menu-title">Sides</h6>
    //       </a>
    //     </div>
    //     <div className="mad-col">
    //       <a href="#" className="mad-menu-item">
    //         <i className="mad-menu-icon">
    //           <img className="svg" src="/dessert.svg" alt="Desserts" />
    //         </i>
    //         <h6 className="mad-menu-title">Desserts</h6>
    //       </a>
    //     </div>
    //     <div className="mad-col">
    //       <a href="#" className="mad-menu-item">
    //         <i className="mad-menu-icon">
    //           <img className="svg" src="/drink.svg" alt="Drinks" />
    //         </i>
    //         <h6 className="mad-menu-title">Drinks</h6>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-6">
      {menu?.map((item) => {
        return (
          <div className="  group">
            <div className="flex items-center justify-center">{item.icon}</div>
            <div className="text-center text-black">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
