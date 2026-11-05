"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

const VIDEO_SRC = "/assets/images/sbvideo.mp4";

const slides = [
  {
    bg: "/assets/images/digital.jpg",
    subtitle: "Innovative Software Solutions",
    title:
      "Delivering cutting-edge software development services to streamline operations and drive business innovation",
  },
  {
    bg: "/assets/images/touch.jpeg",
    subtitle: "Creative Web Design",
    title:
      "Crafting visually stunning and responsive websites that enhance user experience and boost online presence",
  },
  {
    bg: "/assets/images/city.jpeg",
    subtitle: "Comprehensive Digital Marketing",
    title:
      "Implementing effective digital marketing strategies to increase brand visibility, engage audiences, and drive growth",
  },
  {
    bg: "/assets/images/futuristic.jpg",
    subtitle: "Advanced Security Systems",
    title:
      "Providing top-notch CCTV and networking solutions for comprehensive security and real-time monitoring of your premises",
  },
];

const HeroHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closeVideo = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setIsVideoOpen(false);
  };

  // ESC key + page scroll lock + auto play
  useEffect(() => {
    if (!isVideoOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    videoRef.current?.play().catch(() => {});

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isVideoOpen]);

  return (
    <>
      <div className="it-slider__wrapper z-index fix">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          navigation={{ nextEl: ".it-slider-next", prevEl: ".it-slider-prev" }}
          pagination={{ el: ".it-slider-dots", clickable: true }}
          className="swiper-container it-slider__active p-relative"
        >
          {slides.map((slide, i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <div className="it-slider__area it-slider__height it-slider__overlay p-relative">
                <div className="it-slider__shape-1">
                  <img src="/assets/img/slider/slider-shape-3-2.png" alt="rk-theme" />
                </div>
                <div className="it-slider__shape-2">
                  <img src="/assets/img/slider/shape-4-2.png" alt="rk-theme" />
                </div>
                <div
                  className="it-slider__bg"
                  style={{ backgroundImage: `url(${slide.bg})` }}
                ></div>

                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="it-slider__content-wrap">
                        <div className="it-slider__content">
                          <span className="it-slider-subtitle">{slide.subtitle}</span>
                          <h2 className="it-slider-title pb-30">{slide.title}</h2>
                        </div>

                        <div className="it-slider__button d-flex align-items-center">
                          <Link className="it-btn" href="/contact-us">
                            <span>Enquiries</span>
                          </Link>

                          <div className="it-slider__icon-box d-flex align-items-center">
                            <a
                              className="popup-video"
                              role="button"
                              onClick={() => setIsVideoOpen(true)}
                              style={{ cursor: "pointer" }}
                            >
                              <i className="fa-sharp fa-light fa-play"></i>
                            </a>
                            <div className="it-slider__icon-text">
                              <span>
                                Watch our <br /> videos
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="it-slider-navigation">
          <button type="button" className="it-slider-prev" aria-label="Previous slide">
            ←
          </button>
          <button type="button" className="it-slider-next" aria-label="Next slide">
            →
          </button>
        </div>
      </div>

      {/* ===== VIDEO MODAL (body la render aagum, so theme CSS block pannadhu) ===== */}
      {isVideoOpen &&
        createPortal(
          <div
            className="sb-vmodal"
            role="dialog"
            aria-modal="true"
            onClick={closeVideo}
          >
            <div className="sb-vmodal__box" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="sb-vmodal__close"
                aria-label="Close video"
                onClick={closeVideo}
              >
                ✕
              </button>
              <video
                ref={videoRef}
                className="sb-vmodal__video"
                src={VIDEO_SRC}
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default HeroHomeOne;