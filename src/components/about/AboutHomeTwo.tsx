

import Link from 'next/link';
import React from 'react';

const AboutHomeTwo = () => {
  return (
    <>
      <div className="it-about-4__area fix pt-120 pb-120">
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="it-about-4__thumb-box">
                <img src="assets/img/about/about-4-1.png" alt="rk-theme" />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 wow itfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-about-3__right-wrap it-about-4__right-wrap">
                <div className="it-about-3__section-box">
                  <span className="it-section-subtitle-4">
                    {/* <em>//</em>  */}
                    KNOW ABOUT Tecch</span>
                  <h4 className="it-section-title">Always Try to Deliver More
                    Than You</h4>
                  <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, <br />
                    lorem is simply free text quis bibendum. There are many variations of <br /> passages
                    of available</p>
                </div>
                <div className="it-choose-2__item-box mb-25 d-flex align-items-center">
                  <div className="it-choose-2__item color d-flex align-items-center">
                    <span>
                      <i className="flaticon-management"></i>
                    </span>
                    <h6>Best Business <br />Solution</h6>
                  </div>
                  <div className="it-choose-2__item color d-flex align-items-center">
                    <span>
                      <i className="flaticon-rocket"></i>
                    </span>
                    <h6>Marketing <br />Management</h6>
                  </div>
                </div>
                <div className="it-about-progress mb-30">
                  <div className="it-about-progress-item fix">
                    <h4>Development</h4>
                    <span className="progress-count">82%</span>
                    <div className="progress">
                      <div className="progress-bar wow slideInLeft" data-wow-duration="1s"
                        data-wow-delay=".3s" role="progressbar" data-width="82%" aria-valuenow={25}
                        aria-valuemin={0} aria-valuemax={100}
                        style={{ width: "58%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}>

                      </div>
                    </div>
                  </div>
                  <div className="it-about-progress-item fix">
                    <h4>Web Design</h4>
                    <span className="progress-count">37%</span>
                    <div className="progress">
                      <div className="progress-bar wow slideInLeft" data-wow-duration="1s"
                        data-wow-delay=".3s" role="progressbar" data-width="37%" aria-valuenow={25}
                        aria-valuemin={0} aria-valuemax={100}
                        style={{ width: "37%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}>

                      </div>
                    </div>
                  </div>
                </div>
                <Link className="it-red-btn hover-2" href="/about-us"><span>discover more</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeTwo;