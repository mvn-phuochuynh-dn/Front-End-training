import React from "react";

import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

function ShopMenu() {
  return (
    <li className="menu-item  flex flex-center-y position-parent">
      <NavLink className="menu-item-text " to="/shop">
        Shop
        <AiOutlineDown className="menu-item-text-icon ml-10" />
      </NavLink>
      <ul className="dropdown-menu position-absolute hidden">
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo1">
            Product List
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo2">
            Cart
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo3">
            Checkout
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo4">
            Products Details
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default ShopMenu;
