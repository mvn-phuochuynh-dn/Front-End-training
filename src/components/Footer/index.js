import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../../assets/images/footer-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import { BsMessenger, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer className="page-footer pb-30">
      <div className="container">
        <div className="footer-top flex-column flex-center-y">
          <NavLink to="#" className="footer-logo p-20">
            <img src={footerLogo} alt="footer-logo" />
          </NavLink>
          <ul className="logo-contact-list flex ">
            <li className="logo-contact-item position-parent mr-10 mb-30">
              <NavLink className="white-text position-absolute pos-center" to="#">
                <FaFacebookF />
              </NavLink>
            </li>
            <li className="logo-contact-item position-parent mr-10 mb-30">
              <NavLink className="white-text position-absolute pos-center" to="#">
                <IoLogoTwitter />
              </NavLink>
            </li>
            <li className="logo-contact-item position-parent mr-10 mb-30">
              <NavLink className="white-text position-absolute pos-center" to="#">
                <RiLinkedinFill />
              </NavLink>
            </li>
            <li className="logo-contact-item position-parent mr-10 mb-30">
              <NavLink className="white-text position-absolute pos-center" to="#">
                <BsMessenger />
              </NavLink>
            </li>
            <li className="logo-contact-item position-parent mr-10 mb-30">
              <NavLink className=" white-text position-absolute pos-center" to="#">
                <BsGithub />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-bottom flex-column flex-center-y pb-30">
          <nav className="footer-nav p-20">
            <ul className="footer-menu flex">
              <li className="footer-menu-item p-20">
                <NavLink className="white-text" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="footer-menu-item p-20">
                <NavLink className="white-text" to="/support">
                  Support
                </NavLink>
              </li>
              <li className="footer-menu-item p-20">
                <NavLink className="white-text" to="/privacyPolicy">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="footer-menu-item p-20">
                <NavLink className="white-text" to="/FAQ">
                  FAQ's
                </NavLink>
              </li>
              <li className="footer-menu-item p-20">
                <NavLink className="white-text" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <p className="coppyright p-20">
            Coppyright @2021 <span>Pakap</span>. AllRights Reserved by 
            <a className="white-text" href="https://envytheme.com/"> EnvyTheme</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
