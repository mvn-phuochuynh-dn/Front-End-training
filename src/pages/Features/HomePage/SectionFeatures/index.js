import React from "react";
import { FiSmartphone, FiAward } from "react-icons/fi";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { RiVipDiamondFill, RiCustomerService2Line } from "react-icons/ri";

function Features() {
  return (
    <div className="section-features">
      <div className="container">
        <ul className="feature-list flex flex-center">
          <li className="feature-item flex-column flex-center-y col-small-4 col-medium-4">
            <div className="feature-item-icon mb-30 bg-1 ">
              <span className="position-absolute pos-center">
                <FiSmartphone />
              </span>
            </div>
            <h3>User Friendly</h3>
          </li>
          <li className="feature-item flex-column flex-center-y col-small-4 col-medium-4">
            <div className="feature-item-icon mb-30 bg-2">
              <span className="position-absolute pos-center">
                <FiAward />
              </span>
            </div>
            <h3>Award Winning App</h3>
          </li>
          <li className="feature-item flex-column flex-center-y col-small-4 col-medium-4">
            <div className="feature-item-icon mb-30 bg-3">
              <span className="position-absolute pos-center">
                <HiOutlineFingerPrint />
              </span>
            </div>
            <h3>Privacy Protected</h3>
          </li>
          <li className="feature-item flex-column flex-center-y col-small-4 col-medium-4">
            <div className="feature-item-icon mb-30 bg-1">
              <span className="position-absolute pos-center">
                <RiVipDiamondFill />
              </span>
            </div>
            <h3>Lifetime Update</h3>
          </li>
          <li className="feature-item flex-column flex-center-y col-small-4 col-medium-4">
            <div className="feature-item-icon mb-30 bg-4">
              <span className="position-absolute pos-center">
                <RiCustomerService2Line />
              </span>
            </div>
            <h3>24/7 Support</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
