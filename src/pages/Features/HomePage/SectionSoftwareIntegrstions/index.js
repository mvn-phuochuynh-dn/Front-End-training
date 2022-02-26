import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import imgSoftware from "../../../../assets/images/bg-shape2.png";
import atlassian from "../../../../assets/images/atlassian.png";
import skype from "../../../../assets/images/skype.png";
import gdrive from "../../../../assets/images/gdrive.png";
import slack from "../../../../assets/images/slack.png";
import jira from "../../../../assets/images/jira.png";
import frame from "../../../../assets/images/frame.png";
import shape5 from "../../../../assets/images/shape5.png";

function SoftwareIntergrations() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="section-software-intergrations">
      <div className="container">
        <div className="software-intergrations flex">
          <div className="software-intergrations-content col-medium-12 col-large-6 col-largest-6">
            <span className="section-sub-title pb-30 pt-30">
              SOFTWARE INTERGRATIONS
            </span>
            <h2 className="section-title pb-30">
              Easy & Perfect Solution with Latest Software Intergration
            </h2>
            <p>
              Cloud based storage for your data backup just log in with your
              mail account from play store and using whatever you want for your
              business purpose orem ipsum dummy text. never missyour chance its
              just began. backup just log in with your mail account from.
            </p>
            <p className="pt-30 pb-30 mb-30 ">
              Most provabily best for your data backup just log in with your
              mail account from play store and using whatever you want for your
              business purpose orem ipsum dummy.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Get Started
            </NavLink>
          </div>
          <div className="software-intergrations-img ml-30 col-medium-12 col-large-6 col-largest-6">
            <img src={imgSoftware} alt="img-software" className="software-img"/>
            <ul className="software-intergrations-list">
              <li
                data-aos="fade-down"
                className="aos-init aos-animate software-intergrations-item item-1"
              >
                <img src={atlassian} alt="atlassian" />
              </li>
              <li
                data-aos="fade-down"
                className="aos-init aos-animate software-intergrations-item"
              >
                <img src={skype} alt="skype" />
              </li>
              <li
                data-aos="fade-down"
                className="aos-init aos-animate software-intergrations-item"
              >
                <img src={gdrive} alt="atlassian" />
              </li>
              <li
                data-aos="fade-down"
                className="aos-init aos-animate software-intergrations-item"
              >
                <img src={slack} alt="atlassian" />
              </li>
              <li
                data-aos="fade-down"
                className="aos-init aos-animate software-intergrations-item"
              >
                <img src={jira} alt="atlassian" />
              </li>
              <li
                data-aos="fade-down"
                className="aos-init aos-animate software-intergrations-item"
              >
                <img src={frame} alt="atlassian" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shape-5">
        <img src={shape5} alt="shape-5" />
      </div>
    </section>
  );
}

export default SoftwareIntergrations;
