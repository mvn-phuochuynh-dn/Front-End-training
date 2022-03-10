import React from "react";
import { RiPlayLine } from "react-icons/ri";
import videoImg2 from "../../../../assets/images/video-img2.jpeg";
import videoShape1 from "../../../../assets/images/videoshape1.png";
import videoShape2 from "../../../../assets/images/videoshape2.png";

function Video() {
  return (
    <section className="section-video">
      <div className="container">
        <div className="video-box">
          <div className="video-img">
            <img src={videoImg2} alt="video-img2" className="img-bg" />
          </div>
          <a
            href="https://www.youtube.com/watch?v=PWvPbGWVRrU"
            className="video-btn bg-2 position-absolute pos-center"
          >
            <RiPlayLine className="position-absolute pos-center" />
          </a>
          <div className="video-shape">
            <img
              className="video-shape1"
              src={videoShape1}
              alt="video-shape1"
            />
            <img
              className="video-shape2"
              src={videoShape2}
              alt="video-shape1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
