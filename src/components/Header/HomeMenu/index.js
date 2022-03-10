import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

function HomeMenu({navbar}) {
  return (
    <li className="menu-item flex flex-center-y position-parent">
      <NavLink className="menu-item-text pb-20 pt-20" to="/">
        Home
        <AiOutlineDown className="menu-item-text-icon ml-10" />
      </NavLink>
      <ul className={`position-absolute hidden ${navbar ? "dropdown-menu dropdown-menu-active" : "dropdown-menu"}`}>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo1">
            Home Demo - 1
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo2">
            Home Demo - 2
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo3">
            Home Demo - 3
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo4">
            Home Demo - 4
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo5">
            Home Demo - 5
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo6">
            Home Demo - 6
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default HomeMenu;
