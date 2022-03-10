import React from "react";

import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

function BlogMenu() {
  return (
    <li className="menu-item  flex flex-center-y position-parent">
      <NavLink className="menu-item-text " to="/blog">
        Blog
        <AiOutlineDown className="menu-item-text-icon ml-10" />
      </NavLink>
      <ul className="dropdown-menu position-absolute hidden">
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo1">
            Blog Grid
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo2">
            Blog Right Sidebar
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo3">
            Blog Left Sidebar
          </NavLink>
        </li>
        <li className="dropdown-menu-item">
          <NavLink className="dropdown-menu-text" to="home/demo4">
            Blog Details
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default BlogMenu;
