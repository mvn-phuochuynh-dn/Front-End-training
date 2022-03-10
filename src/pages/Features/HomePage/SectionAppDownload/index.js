import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import playStore from "../../../../assets/images/play-store.png";
import appleStore from "../../../../assets/images/apple-store.png";
import appDownload from "../../../../assets/images/app-img4.png";

function AppDownload() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="section-app-download">
      <div className="container">
        <div className="app-download flex wrap">
          <div className="app-download-content pr-30 col-small-12 col-large-7">
            <span className="section-sub-title text-align-center">DOWNLOAD APP</span>
            <h2 className="section-title pt-30 pb-30">
              Let's Get Your Free Copy From Apple and Play Store
            </h2>
            <p className="text-align-center">
              Instant free download from store Cloud based storage for your data
              backup just log in with your mail account from play store and
              using whatever you want for your business purpose orem ipsum dummy
              text.
            </p>
            <div className="btn-box flex flex-center-x">
              <NavLink to="#" className="playstore-btn col-small-5 col-large-5 ">
                <img className="p-20 position-absolute pos-center-y pos-left-5" src={playStore} alt="play store" />
                <div className="btn-box-content position-absolute pos-center-y flex-column">
                  <span>Get It On</span>
                  <span>Google Play</span>
                </div>
              </NavLink>
              <NavLink to="#" className="applestore-btn ml-30 col-small-5 col-large-5">
                <img className="p-20 position-absolute pos-center-y pos-left-5" src={appleStore} alt="apple store" />
                <div className="btn-box-content position-absolute pos-center-y flex-column">
                  <span>Download on the</span>
                  <span>Apple Store</span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="app-download-img col-small-12 col-large-5">
            <div data-aos="fade-up" className="img-app aos-init aos-animate text-align-center">
              <img src={appDownload} alt="app-dowload" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
