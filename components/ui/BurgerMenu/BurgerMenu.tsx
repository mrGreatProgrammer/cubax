import React from "react";
// import "./BurgerMenu.scss";

const BurgerMenu = () => {
  return (
    <div className="md:hidden">
      <button className="burger_menu">
        <div className="burger_menu__line"></div>
        <div className="burger_menu__line"></div>
      </button>
    </div>
  );
};

export default BurgerMenu;
