
import React from 'react';

const FeatureHomeThree = () => {
  return (
    <>
      <div className="it-feature-3__area it-feature-3__style">
        <div className="it-feature-3__bg-2 it-feature-3__plr pt-100 pb-90"
           style={{backgroundImage: `url(/assets/img/feature/feature-3-1.jpg)`}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="it-feature__item d-flex align-items-center fix">
                  <div className="it-feature__icon">
                    <span><i className="fa-regular fa-chart-mixed"></i></span>
                  </div>
                  <div className="it-feature__text">
                    <h4 className="it-feature__title-sm">Best Business Solution</h4>
                    <p>Our goal is to make it is possible <br />for you magna aliqua lonm </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="it-feature__item d-flex align-items-center fix">
                  <div className="it-feature__icon">
                    <span><i className="fa-regular fa-chart-mixed"></i></span>
                  </div>
                  <div className="it-feature__text">
                    <h4 className="it-feature__title-sm">Business Growth</h4>
                    <p>Our goal is to make it is possible <br />for you magna aliqua lonm </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                <div className="it-feature__item d-flex align-items-center fix">
                  <div className="it-feature__icon">
                    <span><i className="fa-regular fa-chart-mixed"></i></span>
                  </div>
                  <div className="it-feature__text">
                    <h4 className="it-feature__title-sm">Search Optimization</h4>
                    <p>Our goal is to make it is possible <br />for you magna aliqua lonm </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureHomeThree;