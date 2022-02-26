import React from "react";

import { RiTimeLine, RiMessage2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import blog1 from "../../../../assets/images/blog1.jpeg";
import blog2 from "../../../../assets/images/blog2.jpeg";
import blog3 from "../../../../assets/images/blog3.jpeg";

function Blog() {
  return (
    <section className="section-blog">
      <div className="container">
        <div className="blog">
          <div className="section-title-box mb-30">
            <span className="section-sub-title mb-30">BLOG POST</span>
            <h2 className="section-title mb-30">
              Latest Article From Our Blog
            </h2>
          </div>
          <ul className="blog-list flex">
            <li className="blog-item col-4 ">
              <div className="blog-item-img">
                <NavLink to="/blog-detail" className="blog-item-img-link">
                  <img src={blog1} alt="blog1" />
                </NavLink>
                <NavLink to="/blog-grid" className="blog-tag">Branding</NavLink>
              </div>
              <div className="blog-item-content mt-30 ">
                <ul className="meta-list flex">
                  <li className="meta-item">
                    <span className="meta-icon mr-15">
                      <RiTimeLine />
                    </span>
                    April 14, 2021
                  </li>
                  <li className="meta-item ml-30">
                    <span className="meta-icon mr-15">
                      <RiMessage2Line />
                    </span>
                    <span>(0) Comment</span>
                  </li>
                </ul>
                <h3 className="blog-title mt-30">
                  <NavLink to="/blog-detail" className="blog-title-link">
                    Branding involves developing strategy to create a point of
                    differentiation
                  </NavLink>
                </h3>
              </div>
            </li>
            <li className="blog-item col-4 ml-30 mr-30">
              <div className="blog-item-img">
                <NavLink to="/blog-detail" className="blog-item-img-link">
                  <img src={blog2} alt="blog2" />
                </NavLink>
                <NavLink to="/blog-grid" className="blog-tag">Agency</NavLink>
              </div>
              <div className="blog-item-content mt-30">
                <ul className="meta-list flex">
                  <li className="meta-item">
                    <span className="meta-icon mr-15">
                      <RiTimeLine />
                    </span>
                    April 13, 2021
                  </li>
                  <li className="meta-item ml-30">
                    <span className="meta-icon mr-15">
                      <RiMessage2Line />
                    </span>
                    <span>(4) Comment</span>
                  </li>
                </ul>
                <h3 className="blog-title mt-30">
                  <NavLink to="/blog-detail" className="blog-title-link">
                    Design is a plan or specification for the construction of an
                    object
                  </NavLink>
                </h3>
              </div>
            </li>
            <li className="blog-item col-4 ">
              <div className="blog-item-img">
                <NavLink to="/blog-detail" className="blog-item-img-link">
                  <img src={blog3} alt="blog3" />
                  <NavLink to="/blog-grid" className="blog-tag">Marketing</NavLink>
                </NavLink>
              </div>
              <div className="blog-item-content mt-30">
                <ul className="meta-list flex">
                  <li className="meta-item">
                    <span className="meta-icon mr-15">
                      <RiTimeLine />
                    </span>
                    April 12, 2021
                  </li>
                  <li className="meta-item ml-30">
                    <span className="meta-icon mr-15">
                      <RiMessage2Line />
                    </span>
                    <span>(2) Comment</span>
                  </li>
                </ul>
                <h3 className="blog-title mt-30">
                  <NavLink to="/blog-detail" className="blog-title-link">
                    Branding involves developing strategy to create a point
                  </NavLink>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Blog;
