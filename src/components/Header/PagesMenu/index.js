import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import navbar from "../../../assets/images/navbar.jpeg";

function PagesMenu() {
  return (
    <li className="menu-item  flex flex-center-y ">
      <NavLink className="menu-item-text " to="/pages">
        Pages
        <AiOutlineDown className="menu-item-text-icon ml-10" />
      </NavLink>
      <ul
        className="dropdown-menu position-absolute hidden"
        style={{ width: "100%", left: "0", top: "80px "}}
      >
        <li className="dropdown-menu-item">
          <div className="container">
            <ul className="dropdown-menu-block-list flex">
              <li className="menu-block-item col-3">
                <h6 className="menu-sub-title pb-15 mr-20">Page I</h6>
                <ul className="sub-menu-list">
                  <li className="sub-menu-item">Team 1</li>
                  <li className="sub-menu-item">Team 2</li>
                  <li className="sub-menu-item">How It Works</li>
                  <li className="sub-menu-item">Gallery</li>
                  <li className="sub-menu-item">Services</li>
                  <li className="sub-menu-item">Pricing Plan</li>
                </ul>
              </li>
              <li className="menu-block-item col-3">
                <h6 className="menu-sub-title pb-15 mr-20">Page II</h6>
                <ul className="sub-menu-list">
                  <li className="sub-menu-item">Reviews</li>
                  <li className="sub-menu-item">Sign In</li>
                  <li className="sub-menu-item">Sign Up</li>
                  <li className="sub-menu-item">Forget Password</li>
                  <li className="sub-menu-item">Privacy Policy</li>
                  <li className="sub-menu-item">Terms & Conditions</li>
                </ul>
              </li>
              <li className="menu-block-item col-3">
                <h6 className="menu-sub-title pb-15 mr-20">Page III</h6>
                <ul className="sub-menu-list">
                  <li className="sub-menu-item">Screenshots</li>
                  <li className="sub-menu-item">FAQ</li>
                  <li className="sub-menu-item">Comming Soon</li>
                  <li className="sub-menu-item">404 Error Page</li>
                  <li className="sub-menu-item">App Download</li>
                  <li className="sub-menu-item">Contact Us</li>
                </ul>
              </li>
              <li className="menu-block-item col-3">
                <NavLink to="#">
                  <img src={navbar} alt="navbar-img"></img>
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default PagesMenu;
