import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import bannerImg1 from "../../../../assets/images/banner-img1.png";
import bannerImg2 from "../../../../assets/images/banner-img2.png";
import shape1 from "../../../../assets/images/shape-1.png";
import shape2 from "../../../../assets/images/shape-2.png";

function BannerWrapper({ onLoad }) {
  return (
    <section className="section-banner-wrapper">
      <div className="container">
        <div className="flex flex-center wrap ">
        <div className="section-banner-wrapper-left col-medium-5 col-large-5 col-largest-5">
          <div className="section-banner-wrapper-left-content">
            <span className="sub-title pl-20 pt-5 pb-5">
              Secure Application
            </span>
            <h1 className="banner-title mt-30 mb-30">
              Manage All of Your Stuff Using a Pakap
            </h1>
            <p className="mt-30 mb-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              tincidunt eifend odio viverra diam aliquet donec again.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Start Free Trial
            </NavLink>
          </div>
        </div>
        <div className="section-banner-wrapper-right col-medium-7 col-large-7 col-largest-7">
          <div className="section-banner-wrapper-right-image-1">
            <img src={bannerImg1} alt="banner-img1" />
          </div>
          <div
            className={
              onLoad 
                ? "section-banner-wrapper-right-image-2 section-banner-wrapper-right-image-2-active"
                : "section-banner-wrapper-right-image-2"
            }
          >
            <img src={bannerImg2} alt="banner-img2" />
          </div>
        </div>
      </div>
      <div className="shape-1">
        <img src={shape1} alt="shape-1"></img>
      </div>
      <div className="shape-2">
        <img src={shape2} alt="shape-2"></img>
      </div>
      </div>
    </section>
  );
}

export default BannerWrapper;
