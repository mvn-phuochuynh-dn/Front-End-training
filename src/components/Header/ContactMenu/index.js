import React from 'react'

import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

function ContactMenu() {
  return (
    <li className="menu-item  flex flex-center-y">
            <NavLink className="menu-item-text" to="/contact">
              Contact
            </NavLink>
          </li>
  )
}

export default ContactMenu