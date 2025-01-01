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
    <div className="h-60 relative">
      <div className="absolute left-1/2 -translate-x-1/2 -top-20 grid grid-cols-6 w-11/12 mx-auto h-56 items-center rounded-3xl overflow-hidden bg-gray-100">
        {menu?.map((item) => {
          return (
            <div className="group h-full flex flex-col items-center justify-center hover:bg-yellow-400 duration-300">
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <div
                className="text-center text-black font-semibold text-lg
             "
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
