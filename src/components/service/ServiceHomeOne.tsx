"use client";

import Link from "next/link";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

const ServiceHomeOne = ({ style_2 }: any) => {

  // =========================================
  // NAVIGATION BUTTON REFS
  // =========================================
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const services = [
    {
      title: "Website Development",
      image: "/assets/images/solution1.png",
      link: "/website-development",
    },
    {
      title: "CCTV Installation & Security System",
      image: "/assets/images/security.png",
      link: "/cctv-security",
    },
    {
      title: "Graphic Design",
      image: "/assets/images/studio.png",
      link: "/graphic-design",
    },
    {
      title: "Software Development",
      image: "/assets/images/dev1.jpg",
      link: "/software-development",
    },
    {
      title: "Digital Marketing",
      image: "/assets/images/smartphone.jpg",
      link: "/digital",
    },
    {
      title: "Training Program",
      image: "/assets/images/Sbros.png",
      link: "/training-services",
    },
   
    
  ];

  return (
    <section className="it-service__area it-service__space fix theme-bg sbros-service-area">

      {/* =========================================
          BACKGROUND SHAPES
      ========================================= */}

      <div className="it-service__shape">
        <img
          src="/assets/img/service/service-shape-1-1.png"
          alt="service shape"
        />
      </div>

      <div className="it-service__shape-2">
        <img
          src="/assets/img/service/service-shape-1-3.png"
          alt="service shape"
        />
      </div>


      <div className="container">

        {/* =========================================
            SERVICE HEADER
        ========================================= */}

        <div className="sbros-service-header">

          {/* CENTER TITLE */}
          <div className="sbros-service-title-center">
            
            <span className="it-section-subtitle sbros-blog-subtitle">
              What We Have
            </span>

            <h4 className="it-section-title text-white">
              Our Services
            </h4>

          </div>


         {/* =====================================
    NAVIGATION BUTTONS
===================================== */}

<div className="sbros-service-navigation">

  <button
    ref={prevRef}
    type="button"
    className="sbros-service-prev"
    aria-label="Previous service"
  >
    <span className="sbros-arrow sbros-arrow-left"></span>
  </button>

  <button
    ref={nextRef}
    type="button"
    className="sbros-service-next"
    aria-label="Next service"
  >
    <span className="sbros-arrow sbros-arrow-right"></span>
  </button>

</div>

        </div>


        {/* =========================================
            SERVICE SLIDER
        ========================================= */}

        <div className="sbros-service-slider">

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}

            spaceBetween={25}

            slidesPerView={4}

            loop={true}

            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}

            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}

            onBeforeInit={(swiper: SwiperType) => {

              if (
                typeof swiper.params.navigation !== "boolean" &&
                swiper.params.navigation
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}

            pagination={{
              el: ".sbros-service-pagination",
              clickable: true,
            }}

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },

              992: {
                slidesPerView: 3,
                spaceBetween: 25,
              },

              1200: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
          >

            {services.map((service, index) => (

              <SwiperSlide key={index}>

                <div className="sbros-service-card">

                  {/* =================================
                      SERVICE IMAGE
                  ================================= */}

                  <div className="sbros-service-image">

                    <img
                      src={service.image}
                      alt={service.title}
                    />


                    {/* =================================
                        ARROW
                    ================================= */}

                    <div className="sbros-service-icon">

                      <Link href={service.link}>

                        <i className="flaticon-up-right-arrow"></i>

                      </Link>

                    </div>

                  </div>


                  {/* =================================
                      SERVICE TITLE
                  ================================= */}

                  <Link href={service.link}>

                    <h4 className="sbros-service-title">
                      {service.title}
                    </h4>

                  </Link>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>


          {/* =========================================
              PAGINATION
          ========================================= */}

          <div className="sbros-service-pagination"></div>

        </div>

      </div>

    </section>
  );
};

export default ServiceHomeOne;