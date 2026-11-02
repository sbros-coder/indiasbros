
"use client"

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: true,
  speed: 1000,
  breakpoints: {
    '1200': {
      slidesPerView: 2,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".testimonial-slider-dots",
    clickable: true,
  },
}

const TestimonialHomeOne = () => {
  return (
    <>
      <div className="it-testimonial__area it-testimonial__space">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-testimonial__section-box text-center">
                <span className="it-section-subtitle">OUR REVIEWS</span>
                <h4 className="it-section-title">Our Client Testimonials</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="it-testimonial__wrapper">
                <Swiper
                  loop={true}
                  slidesPerView={2}
                  spaceBetween={30}
                  autoplay={true}
                  modules={[Autoplay, Pagination]}
                  pagination={{
                    el: ".testimonial-slider-dots",
                    clickable: true,
                  }}
                  breakpoints={
                    {
                      '1200': {
                        slidesPerView: 2,
                      },
                      '992': {
                        slidesPerView: 2,
                      },
                      '768': {
                        slidesPerView: 1,
                      },
                      '576': {
                        slidesPerView: 1,
                      },
                      '0': {
                        slidesPerView: 1,
                      },
                    }
                  }
                  className="swiper-container it-testimonial__active">

                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial__item text-center p-relative">
                      <div className="it-testimonial__avatar">
                        <img src="assets/img/testimonial/author-1-1.png" alt="rk-theme" />
                      </div>
                      <div className="it-testimonial__author-info">
                        <h5 className="it-testimonial__author-name">Hazzle Hood</h5>
                        <div className="it-testimonial__star">
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc <br /> elit,sed do
                          eiusmod tempor incididunt labmagna <br />aliqua. Quis ipsum
                          suspendigravida.Risus</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial__item p-relative text-center">
                      <div className="it-testimonial__avatar">
                        <img src="assets/img/testimonial/author-1-2.png" alt="rk-theme" />
                      </div>
                      <div className="it-testimonial__author-info">
                        <h5 className="it-testimonial__author-name">Devid Roko</h5>
                        <div className="it-testimonial__star">
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc <br /> elit,sed do
                          eiusmod tempor incididunt labmagna <br />aliqua. Quis ipsum
                          suspendigravida.Risus</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial__item p-relative text-center">
                      <div className="it-testimonial__avatar">
                        <img src="assets/img/testimonial/author-1-3.png" alt="rk-theme" />
                      </div>
                      <div className="it-testimonial__author-info">
                        <h5 className="it-testimonial__author-name">Lunna Baily</h5>
                        <div className="it-testimonial__star">
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc <br /> elit,sed do
                          eiusmod tempor incididunt labmagna <br />aliqua. Quis ipsum
                          suspendigravida.Risus</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <div className="testimonial-slider-dots pt-50 text-center"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomeOne;