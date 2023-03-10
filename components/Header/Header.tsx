import React from "react";
import HeaderNav from "../Navs/HeaderNav";
import BurgerMenu from "../ui/BurgerMenu/BurgerMenu";
import { Logo, PhoneIcon } from "../ui/icons";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <div>
          <HeaderNav />
        </div>
        <div>
          <a href="tel:+992911042544">
            <PhoneIcon />
            <span className="hidden md:block">+992 911 04 25 44</span>
          </a>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
