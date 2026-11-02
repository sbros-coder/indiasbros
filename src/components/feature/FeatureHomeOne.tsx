
import React from "react";

const FeatureHomeOne = () => {
  return (
    <section className="sbros-feature-area">
      <div className="container container-large">
        
        {/* ================================
            SECTION HEADER
        ================================= */}
        <div className="sbros-feature-heading text-center">
          <span className="sbros-feature-subtitle">
            WHY CHOOSE SBROS TECH
          </span>

          <h2 className="sbros-feature-title">
            Technology Solutions Built
            <br />
            For Your Business Growth
          </h2>

          <p className="sbros-feature-description">
            We provide reliable, innovative and scalable IT solutions
            that help businesses simplify operations and achieve
            sustainable digital growth.
          </p>
        </div>


        {/* ================================
            FEATURE CARDS
        ================================= */}
        <div className="row g-4">

          {/* FEATURE 01 */}
          <div
            className="col-xl-4 col-lg-4 col-md-6"
            data-wow-duration=".9s"
            data-wow-delay=".2s"
          >
            <div className="sbros-feature-card">

              <div className="sbros-feature-top">
                <div className="sbros-feature-icon">
                  <i className="fa-regular fa-chart-mixed"></i>
                </div>

                <span className="sbros-feature-number">
                  01
                </span>
              </div>

              <div className="sbros-feature-content">

                <h4>
                  Innovative IT Solutions
                </h4>

                <p>
                  Smart and scalable technology solutions designed
                  to simplify your business, improve productivity
                  and strengthen your digital presence.
                </p>

              </div>

              {/* <div className="sbros-feature-arrow">
                <i className="fa-regular fa-arrow-up-right"></i>
              </div> */}

            </div>
          </div>


          {/* FEATURE 02 */}
          <div
            className="col-xl-4 col-lg-4 col-md-6"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="sbros-feature-card">

              <div className="sbros-feature-top">
                <div className="sbros-feature-icon">
                  <i className="fa-regular fa-code"></i>
                </div>

                <span className="sbros-feature-number">
                  02
                </span>
              </div>

              <div className="sbros-feature-content">

                <h4>
                  Digital Transformation
                </h4>

                <p>
                  Modern web, software and digital solutions that
                  help businesses connect with customers, optimize
                  processes and grow with confidence.
                </p>

              </div>

              {/* <div className="sbros-feature-arrow">
                <i className="fa-regular fa-arrow-up-right"></i>
              </div> */}

            </div>
          </div>


          {/* FEATURE 03 */}
          <div
            className="col-xl-4 col-lg-4 col-md-6"
            data-wow-duration=".9s"
            data-wow-delay=".4s"
          >
            <div className="sbros-feature-card">

              <div className="sbros-feature-top">
                <div className="sbros-feature-icon">
                  <i className="fa-regular fa-shield-check"></i>
                </div>

                <span className="sbros-feature-number">
                  03
                </span>
              </div>

              <div className="sbros-feature-content">

                <h4>
                  Reliable Technology Support
                </h4>

                <p>
                  Dependable technology and security services
                  focused on protecting your business and keeping
                  your digital operations running smoothly.
                </p>

              </div>

              {/* <div className="sbros-feature-arrow">
                <i className="fa-regular fa-arrow-up-right"></i>
              </div> */}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeatureHomeOne;

