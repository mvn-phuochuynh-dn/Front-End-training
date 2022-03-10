import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import partner1 from "../../../../assets/images/partner1.png";
import partner2 from "../../../../assets/images/partner2.png";
import partner3 from "../../../../assets/images/partner3.png";
import partner4 from "../../../../assets/images/partner4.png";
import partner5 from "../../../../assets/images/partner5.png";
import partner6 from "../../../../assets/images/partner6.png";
import partner7 from "../../../../assets/images/partner7.png";
import partner8 from "../../../../assets/images/partner8.png";

function Partner() {
  return (
    <section className="section-partner">
      <div className="container">
        <h3 className="partner-title pt-30 pb-30">
          Trusted by world famous companies:
        </h3>
        <div className="partner-slides pt-30 pb-30">
          <OwlCarousel
            className="owl-theme"
            items="6"
            autoplay
            loop
            dotsClass="hidden"
            margin={10}
          >
            <a href="#" className="item">
              <img src={partner1}></img>
            </a>
            <a href="#" className="item">
              <img src={partner2}></img>
            </a>
            <a href="#" className="item">
              <img src={partner3}></img>
            </a>
            <a href="#" className="item">
              <img src={partner4}></img>
            </a>
            <a href="#" className="item">
              <img src={partner5}></img>
            </a>
            <a href="#" className="item">
              <img src={partner6}></img>
            </a>
            <a href="#" className="item">
              <img src={partner7}></img>
            </a>
            <a href="#" className="item">
              <img src={partner8}></img>
            </a>
          </OwlCarousel>
        </div>
        <div className="partner-slides-medium pt-30 pb-30">
          <OwlCarousel
            className="owl-theme"
            items="2"
            autoplay
            loop
            dotsClass="hidden"
            margin={10}
          >
            <a href="#" className="item">
              <img src={partner1}></img>
            </a>
            <a href="#" className="item">
              <img src={partner2}></img>
            </a>
            <a href="#" className="item">
              <img src={partner3}></img>
            </a>
            <a href="#" className="item">
              <img src={partner4}></img>
            </a>
            <a href="#" className="item">
              <img src={partner5}></img>
            </a>
            <a href="#" className="item">
              <img src={partner6}></img>
            </a>
            <a href="#" className="item">
              <img src={partner7}></img>
            </a>
            <a href="#" className="item">
              <img src={partner8}></img>
            </a>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Partner;
