import React from "react";
import Link from "next/link";

const AboutHomeOne = ({ style_2 }: any) => {
  return (
    <>
      <section className="sbros-about-area">

        <div className="container">


          {/* =================================================
              TOP - SECTION HEADING (CENTERED)
          ================================================= */}

          <div className="row justify-content-center">

            <div className="col-xl-9 col-lg-10">

              <div className="sbros-about-heading text-center">


                {/* SECTION LABEL */}

                <div className="sbros-about-label">

                  <span></span>

                  <p>
                    OUR GOALS &amp; MISSION
                  </p>

                  <span></span>

                </div>


                {/* TITLE */}

                <h2 className="sbros-about-title">
                  Our Guiding
                  <br />
                  <span>Principles</span>
                </h2>


                {/* DESCRIPTION */}

                <p className="sbros-about-intro">
                  We believe technology should create meaningful
                  opportunities, simplify challenges and help
                  businesses achieve their full potential.
                </p>

              </div>

            </div>

          </div>


          <div className="row align-items-center">


            {/* =================================================
                LEFT - IMAGE
            ================================================= */}

            <div className="col-xl-6 col-lg-6">

              <div className="sbros-about-image-wrapper">

                <div className="sbros-about-image">

                  <img
                    src="/assets/images/family.png"
                    alt="SBros Tech Digital Solutions"
                  />

                </div>


                {/* IMAGE DECORATION */}

                <div className="sbros-about-image-shape"></div>


                {/* SMALL EXPERIENCE BADGE */}

                <div className="sbros-about-badge">

                  <span>
                    SBROS
                  </span>

                  <strong>
                    TECH
                  </strong>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT - CONTENT
            ================================================= */}

            <div className="col-xl-6 col-lg-6">

              <div className="sbros-about-content">


                {/* =================================================
                    VISION
                ================================================= */}

                <div className="sbros-about-info">

                  <div className="sbros-about-info-icon">
                    <i className="fa-regular fa-eye"></i>
                  </div>

                  <div className="sbros-about-info-content">

                    <span>
                      OUR VISION
                    </span>

                    <h4>
                      Empowering People &amp; Businesses
                    </h4>

                    <p>
                      To make people and businesses realize
                      and expand their potential.
                    </p>

                  </div>

                </div>


                {/* =================================================
                    MISSION
                ================================================= */}

                <div className="sbros-about-info">

                  <div className="sbros-about-info-icon">
                    <i className="fa-regular fa-bullseye"></i>
                  </div>

                  <div className="sbros-about-info-content">

                    <span>
                      OUR MISSION
                    </span>

                    <h4>
                      Developing Talent Through Technology
                    </h4>

                    <p>
                      Educate and develop people's talents to
                      empower them to achieve beyond their
                      imagination.
                    </p>

                  </div>

                </div>


                {/* =================================================
                    VALUES
                ================================================= */}

                <div className="sbros-about-info">

                  <div className="sbros-about-info-icon">
                    <i className="fa-regular fa-handshake"></i>
                  </div>

                  <div className="sbros-about-info-content">

                    <span>
                      OUR VALUES
                    </span>

                    <h4>
                      What We Stand For
                    </h4>

                    <p>
                      Respect individuals .
                    </p>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default AboutHomeOne;