import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import user1 from "../../../../assets/images/user1.jpeg";
import user2 from "../../../../assets/images/user2.jpeg";
import user3 from "../../../../assets/images/user3.jpeg";
import user4 from "../../../../assets/images/user4.jpeg";

import { RiStarFill, RiStarHalfLine, RiStarLine } from "react-icons/ri";

function Feedback() {
  return (
    <section className="section-feedback">
      <div className="container">
        <div className="feedback">
          <div className="section-title-box pb-30">
            <span className="section-sub-title pb-30">CLIENT REVIEWS</span>
            <h2 className="section-title pb-30">
              Some of Our Happy Customer About Our Products
            </h2>
          </div>
          <div className="feedback-slides">
            <OwlCarousel
              className="owl-theme"
              autoplay
              item="3"
              margin={30}
              dotsClass="owl-dots mt-30"
              dotClass="owl-dot"
            >
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user1} alt="user1" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Deanna Hodges</h3>
                      <span>Spotify Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30 pl-30">
                    <h5>Theme Customization</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user2} alt="user2" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Londy Vargas</h3>
                      <span>PHP Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Customer Support</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user3} alt="user3" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Jame Andy</h3>
                      <span>Moodle Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Reponsive Design</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user4} alt="user3" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">David Warner</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Design Quality</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarHalfLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user2} alt="user2" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Londy Vargas</h3>
                      <span>PHP Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between">
                    <h5>Customer Support</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user3} alt="user3" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Jame Andy</h3>
                      <span>Moodle Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Reponsive Design</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user4} alt="user3" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">David Warner</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Design Quality</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarHalfLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user1} alt="user1" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Deanna Hodges</h3>
                      <span>Spotify Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Theme Customization</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user2} alt="user2" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Londy Vargas</h3>
                      <span>PHP Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Customer Support</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user3} alt="user3" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Jame Andy</h3>
                      <span>Moodle Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Reponsive Design</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
          <div className="feedback-slides-medium">
            <OwlCarousel
              className="owl-theme"
              autoplay
              margin={30}
              items="1"
              dotsClass="owl-dots mt-30"
              dotClass="owl-dot"
            >
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user1} alt="user1" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Deanna Hodges</h3>
                      <span>Spotify Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30 pl-30">
                    <h5>Theme Customization</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user2} alt="user2" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Londy Vargas</h3>
                      <span>PHP Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Customer Support</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user3} alt="user3" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">Jame Andy</h3>
                      <span>Moodle Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Reponsive Design</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user4} alt="user3" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">David Warner</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Design Quality</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarHalfLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-feedback-box">
                  <div className="client-info flex p-30">
                    <div className="client-info-avt col-3">
                      <img src={user3} alt="user3" />
                    </div>
                    <div className="client-info-title pl-30 col-9">
                      <h3 className="username pb-15 pt-15">David Warner</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="rating p-30 flex flex-space-between p-30">
                    <h5>Design Quality</h5>
                    <ul className="star-list">
                      <li className="star-item">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarHalfLine />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
