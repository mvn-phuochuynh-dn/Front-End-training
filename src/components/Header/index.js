import React from "react";
import { NavLink } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";

import headerLogo from "../../assets/images/header-logo.png";
import HomeMenu from "./HomeMenu";
import AboutUsMenu from "./AboutUsMenu";
import PagesMenu from "./PagesMenu";
import ShopMenu from "./ShopMenu";
import BlogMenu from "./BlogMenu";
import ContactMenu from "./ContactMenu";

function Header({ navbar }) {
  return (
    <header className={navbar ? "page-header page-header-active" : "page-header"}>
      <div className="container">
        <div className="page-header-flex flex flex-center-y" style={{ height: 100 }}>
          <NavLink
            to="/"
            className="header-logo col-medium-6 col-large-3 col-largest-3"
          >
            <img src={headerLogo} alt="header-logo" />
          </NavLink>
          <nav className="header-nav col-large-6 col-largest-6">
            <ul className="header-menu flex flex-space-around">
              <HomeMenu />
              <AboutUsMenu />
              <PagesMenu />
              <ShopMenu />
              <BlogMenu />
              <ContactMenu />
            </ul>
          </nav>
          <div className="header-socials col-medium-6 col-large-3 col-largest-3 flex flex-end-x">
            <NavLink to="/started" className="btn btn-primary  ">
              Get Started
            </NavLink>
            <NavLink to="#" className="menu-icon mt-5 ml-30">
              <RiMenuLine />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
