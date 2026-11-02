import React from 'react';

const BusinessHomeOne = () => {
  return (
    <>
      <div className="it-business__area it-business__space">

        <div
          className="it-business__bg"
          style={{
            backgroundImage: 'url(/assets/images/image6.png)',
          }}
        >

          <div className="container">

            <div className="row align-items-center">

              {/* =========================================
                  LEFT CONTENT
              ========================================= */}

              <div className="col-xl-6 col-lg-5">

                <div className="it-business__section-title">

                  <span className="it-section-yellow-subtitle text-white">
  OUR BUSINESS PATH
</span>

<h4 className="it-section-title text-white">
  Technology That
  <br />
  Drives Your Business
</h4>

                </div>

              </div>


              {/* =========================================
                  RIGHT CARDS
              ========================================= */}

              <div className="col-xl-6 col-lg-7">

                <div className="it-business__item-box d-flex align-items-center justify-content-between">

                  {/* =====================================
                      CARD 01
                  ===================================== */}

                  <div className="it-business__item">

                    <div className="it-business__icon">
                      <span>
                        <i className="flaticon-badge"></i>
                      </span>
                    </div>

                    <div className="it-business__text">

                      <h5 className="it-business__title">
                        Expertise
                      </h5>

                      <span>
                        Skilled solutions built around your business needs.
                      </span>

                    </div>

                  </div>


                  {/* =====================================
                      CARD 02
                  ===================================== */}

                  <div className="it-business__item">

                    <div className="it-business__icon">
                      <span>
                        <i className="flaticon-bar-chart"></i>
                      </span>
                    </div>

                    <div className="it-business__text">

                      <h5 className="it-business__title">
                        Reliability
                      </h5>

                      <span>
                        Secure, scalable and dependable technology solutions.
                      </span>

                    </div>

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

export default BusinessHomeOne;