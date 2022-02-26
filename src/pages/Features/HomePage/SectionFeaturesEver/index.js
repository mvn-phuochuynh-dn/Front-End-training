import React from "react";
import {
  RiEyeLine,
  RiStackLine,
  RiLeafLine,
  RiSecurePaymentLine,
  RiCloudLine,
  RiPieChart2Line,
} from "react-icons/ri";

function FeaturesEver() {
  return (
    <section className="section-features-ever">
      <div className="container">
        <div className="section-title-box">
          <span className="section-sub-title mb-30">KEY FEATURES</span>
          <h2 className="section-title mb-30">
            Most Probably Included Best Features Ever
          </h2>
        </div>
        <div className="feature-list-box">
          <ul className="feature-list flex flex-center-x wrap">
            <li className="feature-item col-medium-6 col-large-4 col-largest-4 flex-column flex-center-y pl-10 pr-10">
              <div className="feature-item-icon mb-30 bg-1">
                <span className="position-absolute pos-center">
                  <RiEyeLine />
                </span>
              </div>
              <h3 className="mb-30">High Resolution</h3>
              <p>
                Just log in with your mail account from play store and using
                whatever you want for your able business purpose.
              </p>
            </li>
            <li className="feature-item col-medium-6 col-large-4 col-largest-4 flex-column flex-center-y pl-10 pr-10">
              <div className="feature-item-icon mb-30 bg-2">
                <span className="position-absolute pos-center">
                  <RiStackLine />
                </span>
              </div>
              <h3 className="mb-30">Retina Ready Screen</h3>
              <p>
                Just log in with your mail account from play store and using
                whatever you want for your able business purpose.
              </p>
            </li>
            <li className="feature-item col-medium-6 col-large-4 col-largest-4 flex-column flex-center-y pl-10 pr-10">
              <div className="feature-item-icon mb-30 bg-3">
                <span className="position-absolute pos-center">
                  <RiLeafLine />
                </span>
              </div>
              <h3 className="mb-30">Easy Editable Data</h3>
              <p>
                Just log in with your mail account from play store and using
                whatever you want for your able business purpose.
              </p>
            </li>
            <li className="feature-item col-medium-6 col-large-4 col-largest-4 flex-column flex-center-y pl-10 pr-10 mt-30">
              <div className="feature-item-icon mb-30 bg-4">
                <span className="position-absolute pos-center">
                  <RiSecurePaymentLine />
                </span>
              </div>
              <h3 className="mb-30">Fully Secured</h3>
              <p>
                Just log in with your mail account from play store and using
                whatever you want for your able business purpose.
              </p>
            </li>
            <li className="feature-item col-medium-6 col-large-4 col-largest-4 flex-column flex-center-y pl-10 pr-10 mt-30">
              <div className="feature-item-icon mb-30 bg-1">
                <span className="position-absolute pos-center">
                  <RiCloudLine />
                </span>
              </div>
              <h3 className="mb-30">Clound Storage</h3>
              <p>
                Just log in with your mail account from play store and using
                whatever you want for your able business purpose.
              </p>
            </li>
            <li className="feature-item col-medium-6 col-large-4 col-largest-4 flex-column flex-center-y pl-10 pr-10 mt-30">
              <div className="feature-item-icon mb-30 bg-1">
                <span className="position-absolute pos-center">
                  <RiPieChart2Line />
                </span>
              </div>
              <h3 className="mb-30">Responsive Ready</h3>
              <p>
                Just log in with your mail account from play store and using
                whatever you want for your able business purpose.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeaturesEver;
