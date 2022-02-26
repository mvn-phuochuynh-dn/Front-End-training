import React from "react";
import { NavLink } from "react-router-dom";

import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import shape6 from '../../../../assets/images/shape6.png'
import shape7 from '../../../../assets/images/shape7.png'

function PricingTable() {
  return (
    <section className="section-pricing-table">
      <div className="container">
        <div className="pricing-table">
          <div className="section-title-box">
            <span className="section-sub-title pb-30">PRICING TABLE</span>
            <h2 className="section-title pb-30">
              No Hidden, Charge Applied, Choose Your Plan
            </h2>
          </div>
          <ul className="pricing-table-list flex flex-center-x pt-30">
            <li className="pricing-table-item col-4">
              <div className="pricing-table-item-content pl-30">
                <div className="item-title-box">
                  <h3>Basic</h3>
                  <p>Powerful & awesome elements</p>
                </div>
                <div className="item-price">
                  $39
                  <span> /Month</span>
                </div>
                <NavLink to="#" className="btn btn-primary">
                  Purchase Plan
                </NavLink>
                <ul className="item-features-list">
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    Up to 10 Website
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    Lifetime free Support
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    10 GB Dedicated Hosting free
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    24/7 Support
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-red">
                      <RiCloseLine />
                    </span>
                    SEO Optimited
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-red">
                      <RiCloseLine />
                    </span>
                    Live Support
                  </li>
                </ul>
              </div>
            </li>
            <li className="pricing-table-item col-4 ml-30 mr-30">
              <div className="pricing-table-item-content pl-30">
                <div className="item-title-box">
                  <h3>Basic</h3>
                  <p>Powerful & awesome elements</p>
                </div>
                <span className="popular">Most Popular</span>
                <div className="item-price">
                  $49
                  <span> /Month</span>
                </div>
                <NavLink to="#" className="btn btn-primary">
                  Purchase Plan
                </NavLink>
                <ul className="item-features-list">
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    Up to 200 Website
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    Lifetime free Support
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    25 GB Dedicated Hosting free
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    24/7 Support
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    Business Contact
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    SEO Optimited
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-red">
                      <RiCloseLine />
                    </span>
                    Live Support
                  </li>
                </ul>
              </div>
            </li>
            <li className="pricing-table-item col-4">
              <div className="pricing-table-item-content pl-30">
                <div className="item-title-box">
                  <h3>Basic</h3>
                  <p>Powerful & awesome elements</p>
                </div>
                <div className="item-price">
                  $59
                  <span> /Month</span>
                </div>
                <NavLink to="#" className="btn btn-primary">
                  Purchase Plan
                </NavLink>
                <ul className="item-features-list">
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    Up to 500 Website
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    Lifetime free Support
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    50 GB Dedicated Hosting free
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-green">
                      <RiCheckLine />
                    </span>
                    24/7 Support
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-red">
                      <RiCheckLine />
                    </span>
                    SEO Optimited
                  </li>
                  <li className="item-features-item pb-20">
                    <span className="item-features-item-icon color-red">
                      <RiCheckLine />
                    </span>
                    Live Support
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="link-btn-box">
            <NavLink to="/pricing" className="link-btn pb-5">
              See All Pricing Plan
            </NavLink>
          </div>
          <div className="shape-6">
              <img src={shape6} alt="shape 6"/>
          </div>
          <div className="shape-7">
              <img src={shape7} alt="shape 7"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
