import React from "react";
import HeaderNav from "../Navs/HeaderNav";
import BurgerMenu from "../ui/BurgerMenu/BurgerMenu";
import { Logo, PhoneIcon } from "../ui/icons";

const Header = () => {
  return (
    <header className="header">
      <div className="container py-11 flex flex-row justify-between">
        <Logo />
        <div>
          <HeaderNav />
        </div>
        <div className="flex flex-row">
          <a className="flex flex-row items-center" href="tel:+992911042544">
            <PhoneIcon />
            <span className="ml-3 hidden md:inline">+992 911 04 25 44</span>
          </a>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
