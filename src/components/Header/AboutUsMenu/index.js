import React from "react";

import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

function AboutUsMenu() {
  return (
    <li className="menu-item flex flex-center-y position-parent">
      <NavLink className="menu-item-text" to="/about">
        About Us
        <AiOutlineDown className="menu-item-text-icon ml-10" />
      </NavLink>
      <ul className="dropdown-menu position-absolute hidden">
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo1">
            About Simple
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo2">
            About Modern
          </NavLink>
        </li>
        <li className="dropdown-menu-item flex flex-center-y position-parent ">
          <div className="flex" style={{width: "100%"}}>
            <NavLink className="dropdown-menu-text col-10" to="home/demo3">
              Features
            </NavLink>
            <AiOutlineDown className="menu-item-text-icon col-2" />
          </div>
          <ul className="dropdown-menu-right position-absolute hidden">
            <li className="dropdown-menu-right-item">
              <NavLink className="dropdown-menu-right-text" to="home/demo1">
                About Simple
              </NavLink>
            </li>
            <li className="dropdown-menu-right-item">
              <NavLink className="dropdown-menu-right-text" to="home/demo2">
                About Modern
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
}

export default AboutUsMenu;
