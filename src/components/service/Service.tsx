import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <>
      <div className="it-service-2__area pt-120 pb-90 sbros-service-page">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-12">
              <div className="sbros-services-heading text-center mb-50">
                <span className="sbros-services-subtitle">
                  OUR SERVICES
                </span>

                <h2 className="sbros-services-title">
                  Innovative Technology Solutions for{" "}
                  <span>Your Business Growth</span>
                </h2>

                <p className="sbros-services-description">
                  From professional training and software development to
                  digital marketing, website development, CCTV security,
                  and graphic design, we deliver smart solutions to help
                  your business grow.
                </p>
              </div>
            </div>
          </div>

          <div className="row">

            {/* TRAINING */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img
                    className="w-100"
                    src="/assets/images/speaker.jpg"
                    alt="Training Program"
                  />
                </div>

                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span>
                          <i className="flaticon-ux-design"></i>
                        </span>
                      </div>

                      <Link href="/training-services">
                        <h5 className="it-service-2__title-sm">
                          Training <br /> Program
                        </h5>
                      </Link>
                    </div>

                    <Link href="/training-services">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* SOFTWARE */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img
                    className="w-100"
                    src="/assets/images/user.jpg"
                    alt="Software Development"
                  />
                </div>

                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span>
                          <i className="flaticon-management"></i>
                        </span>
                      </div>

                      <Link href="/software-development">
                        <h5 className="it-service-2__title-sm">
                          Software <br /> Development
                        </h5>
                      </Link>
                    </div>

                    <Link href="/software-development">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* DIGITAL MARKETING */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img
                    className="w-100"
                    src="/assets/images/man.jpg"
                    alt="Digital Marketing"
                  />
                </div>

                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span>
                          <i className="flaticon-digital-marketing"></i>
                        </span>
                      </div>

                      <Link href="/digital">
                        <h5 className="it-service-2__title-sm">
                          Digital <br /> Marketing
                        </h5>
                      </Link>
                    </div>

                    <Link href="/digital">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* WEBSITE DEVELOPMENT */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img
                    className="w-100"
                    src="/assets/images/seo.jpg"
                    alt="Website Development"
                  />
                </div>

                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span>
                          <i className="flaticon-software-application"></i>
                        </span>
                      </div>

                      <Link href="/website-development">
                        <h5 className="it-service-2__title-sm">
                          Website <br /> Development
                        </h5>
                      </Link>
                    </div>

                    <Link href="/website-development">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* NETWORK */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay="1s"
            >
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img
                    className="w-100"
                    src="/assets/images/electrician.jpg"
                    alt="Network & Security System"
                  />
                </div>

                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span>
                          <i className="flaticon-graph"></i>
                        </span>
                      </div>

                      <Link href="/network-security">
                        <h5 className="it-service-2__title-sm">
                          Network &<br /> Security System
                        </h5>
                      </Link>
                    </div>

                    <Link href="/network-security">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* GRAPHIC DESIGN */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay="1.3s"
            >
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img
                    className="w-100"
                    src="/assets/images/design.jpg"
                    alt="Graphic Design"
                  />
                </div>

                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span>
                          <i className="flaticon-internet"></i>
                        </span>
                      </div>

                      <Link href="/graphic-design">
                        <h5 className="it-service-2__title-sm">
                          Graphic <br /> Design
                        </h5>
                      </Link>
                    </div>

                    <Link href="/graphic-design">
                      Read More
                    </Link>
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

export default Service;