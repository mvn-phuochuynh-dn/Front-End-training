import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { RiCloudLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import overview1 from "../../../../assets/images/overview1.jpeg";

function Overview() {
  return (
    <section className="section-overview"> 
      <div className="container">
        <div className="overview-container flex wrap">
          <div className="overview-container-left col-large-12 col-largest-6">
            <div className="overview-container-left-content">
              <h2 className="section-title mb-30">
                Most probably You Are Getting Best App Ever
              </h2>
              <p>
                Cloud based storage for your data backup just log in with your
                mail account from play store and using whatever you want for
                your business purpose orem ipsum dummy text. Never missyour
                chance its just began.
              </p>
              <ul className="feature-list mt-30 mb-30 flex flex-center-x wrap">
                <li className="feature-item mb-30 col-small-6 col-medium-6 col-large-12 flex wrap flex-center-x">
                  <span className="feature-icon col-medium-12 col-large-1 col-largest-2">
                    <BsCloudDownload />
                  </span>
                  <div className="feature-item-content col-medium-12 col-large-11 col-largest-10">
                    <h3 className="mb-20">Free Download App</h3>
                    <p>
                      Just log in with your mail account from play store and
                      using whatever you want for your business purpose.
                    </p>
                  </div>
                </li>
                <li className="feature-item mb-30 col-small-6 col-medium-6 col-large-12 flex wrap flex-center-x">
                  <span className="feature-icon col-medium-12 col-large-1 col-largest-2">
                    <FiAward />
                  </span>
                  <div className="feature-item-content col-medium-12 col-large-11 col-largest-10">
                    <h3 className="mb-20">Trusted and Reliable</h3>
                    <p>
                      Most provabily best you can trust on it, just log in with
                      your mail account from play store and using whatever you
                      want for your business.
                    </p>
                  </div>
                </li>
                <li className="feature-item mb-30 col-small-6 col-medium-6 col-large-12 flex wrap flex-center-x">
                  <span className="feature-icon col-medium-12 col-large-1 col-largest-2">
                    <RiCloudLine />
                  </span>
                  <div className="feature-item-content col-medium-12 col-large-11 col-largest-10">
                    <h3 className="mb-20">Cloud Storage</h3>
                    <p>
                      Cloud based storage for your data backup just log in with
                      your mail account from play store and using whatever you
                      want for your business purpose orem ipsum dummy.
                    </p>
                  </div>
                </li>
                <li className="feature-item feature-item-wide col-small-12 col-medium-12 col-large-12 flex wrap flex-center-y">
                  <div className="btn-box mt-30 mr-30">
                    <NavLink to="/contact" className="btn btn-primary">
                      Start Free Trial
                    </NavLink>
                  </div>
                  <div className="box-link mt-30">
                    <NavLink to="/features" className="link pb-5">
                      See All Features
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="overview-container-right col-medium-12 col-wide-12 col-large-12 col-largest-6">
            <div className="overview-img">
              <img src={overview1} alt="img-overview-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
