"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

// =====================================================
// SBROS TECH - BRAND / CLIENT IMAGES
// =====================================================

import brand_img_1 from "@/assets/images/brand1.jpeg";
import brand_img_2 from "@/assets/images/brand2.jpeg";
import brand_img_3 from "@/assets/images/brand3.jpeg";
import brand_img_4 from "@/assets/images/brand4.jpeg";
import brand_img_5 from "@/assets/images/brand5.jpeg";
import brand_img_6 from "@/assets/images/brand6.jpeg";
import brand_img_7 from "@/assets/images/brand7.jpeg";
import brand_img_8 from "@/assets/images/brand8.jpeg";
import brand_img_9 from "@/assets/images/brand9.jpeg";
import brand_img_10 from "@/assets/images/brand10.jpeg";
import brand_img_11 from "@/assets/images/brand11.jpeg";
import brand_img_12 from "@/assets/images/brand12.jpeg";
import brand_img_13 from "@/assets/images/brand13.jpeg";
import brand_img_14 from "@/assets/images/brand14.jpeg";
import brand_img_15 from "@/assets/images/brand15.jpeg";
import brand_img_16 from "@/assets/images/brand16.jpeg";
import brand_img_17 from "@/assets/images/brand17.jpeg";
import brand_img_18 from "@/assets/images/brand18.jpeg";
import brand_img_19 from "@/assets/images/brand19.jpeg";
import brand_img_20 from "@/assets/images/brand20.jpeg";
import brand_img_21 from "@/assets/images/brand21.jpeg";
import brand_img_22 from "@/assets/images/brand22.jpeg";
import brand_img_23 from "@/assets/images/brand23.jpeg";
import brand_img_24 from "@/assets/images/brand24.jpeg";
import brand_img_25 from "@/assets/images/brand25.jpeg";
import brand_img_26 from "@/assets/images/brand26.jpeg";
import brand_img_27 from "@/assets/images/brand27.jpeg";
import brand_img_28 from "@/assets/images/brand28.jpeg";
import brand_img_29 from "@/assets/images/brand29.jpeg";
import brand_img_30 from "@/assets/images/brand30.jpeg";
import brand_img_31 from "@/assets/images/brand31.jpeg";
import brand_img_32 from "@/assets/images/brand32.jpeg";
import brand_img_33 from "@/assets/images/brand33.jpeg";
import brand_img_34 from "@/assets/images/brand34.jpeg";
import brand_img_35 from "@/assets/images/brand35.jpeg";
import brand_img_36 from "@/assets/images/brand36.jpeg";
import brand_img_37 from "@/assets/images/brand37.jpeg";
import brand_img_38 from "@/assets/images/brand38.jpeg";
import brand_img_39 from "@/assets/images/brand39.jpeg";
import brand_img_40 from "@/assets/images/brand40.jpeg";
import brand_img_41 from "@/assets/images/brand41.jpeg";
import brand_img_42 from "@/assets/images/brand42.jpeg";
import brand_img_43 from "@/assets/images/brand43.jpeg";
import brand_img_44 from "@/assets/images/brand44.jpeg";
import brand_img_45 from "@/assets/images/brand45.jpeg";
import brand_img_46 from "@/assets/images/brand46.jpeg";
import brand_img_47 from "@/assets/images/brand47.jpeg";
import brand_img_48 from "@/assets/images/brand48.jpeg";
import brand_img_49 from "@/assets/images/brand49.jpeg";

// =====================================================
// BRAND DATA
// =====================================================

const brand_data = [
  brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5,
  brand_img_6, brand_img_7, brand_img_8, brand_img_9, brand_img_10,
  brand_img_11, brand_img_12, brand_img_13, brand_img_14, brand_img_15,
  brand_img_16, brand_img_17, brand_img_18, brand_img_19, brand_img_20,
  brand_img_21, brand_img_22, brand_img_23, brand_img_24, brand_img_25,
  brand_img_26, brand_img_27, brand_img_28, brand_img_29, brand_img_30,
  brand_img_31, brand_img_32, brand_img_33, brand_img_34, brand_img_35,
  brand_img_36, brand_img_37, brand_img_38, brand_img_39, brand_img_40,
  brand_img_41, brand_img_42, brand_img_43, brand_img_44, brand_img_45,
  brand_img_46, brand_img_47, brand_img_48, brand_img_49,
];

// =====================================================
// SETTINGS
// =====================================================

// Slider speed (pixels per second). Adhigam = fast, kuraincha = slow
const SPEED_PX_PER_SEC = 120;

// Double tap gap (ms)
const DOUBLE_PRESS_GAP = 350;

// =====================================================
// BRAND HOME ONE
// =====================================================

const BrandHomeOne = ({ style_2 }: any) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const offsetRef = useRef<number>(0);      // current scroll position (px)
  const halfWidthRef = useRef<number>(0);   // one full set width (px)
  const draggingRef = useRef<boolean>(false);
  const lastXRef = useRef<number>(0);
  const lastPressRef = useRef<number>(0);

  // -----------------------------------------------------
  // WIDTH MEASURE
  // -----------------------------------------------------
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  // -----------------------------------------------------
  // AUTO MOVE LOOP (constant speed, pause while dragging)
  // -----------------------------------------------------
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const half = halfWidthRef.current;

      if (half > 0) {
        if (!draggingRef.current && !reduceMotion) {
          offsetRef.current += SPEED_PX_PER_SEC * dt;
        }

        // seamless wrap
        offsetRef.current = ((offsetRef.current % half) + half) % half;

        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // -----------------------------------------------------
  // DRAG START / MOVE / END
  // -----------------------------------------------------
  const endDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    draggingRef.current = false;
    wrapperRef.current?.classList.remove("is-dragging");

    if (e && wrapperRef.current?.hasPointerCapture(e.pointerId)) {
      wrapperRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const now = Date.now();

    if (now - lastPressRef.current < DOUBLE_PRESS_GAP) {
      // 2nd fast press -> STOP auto move + allow drag
      draggingRef.current = true;
      lastXRef.current = e.clientX;
      lastPressRef.current = 0;

      wrapperRef.current?.classList.add("is-dragging");
      e.currentTarget.setPointerCapture(e.pointerId);
    } else {
      lastPressRef.current = now;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    // drag right -> content right (offset kuraiyum)
    offsetRef.current -= dx;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    endDrag(e);
  };

  useEffect(() => {
    const stop = () => {
      draggingRef.current = false;
      wrapperRef.current?.classList.remove("is-dragging");
    };

    window.addEventListener("blur", stop);
    return () => window.removeEventListener("blur", stop);
  }, []);

  // -----------------------------------------------------
  // RENDER ITEM
  // -----------------------------------------------------
  const renderItem = (item: any, index: number, copy: number) => (
    <div className="sbros-brand-item" key={`${copy}-${index}`}>
      <div className="sbros-brand-card">
        <div className="sbros-brand-logo-wrapper">
          <Image
            src={item}
            alt={copy === 0 ? `SBros Tech client ${index + 1}` : ""}
            width={210}
            height={100}
            className="sbros-brand-logo"
            sizes="(max-width: 575px) 140px, (max-width: 991px) 170px, 210px"
            priority={copy === 0 && index < 5}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section
        className={`sbros-brand-section ${
          style_2 ? "sbros-brand-section-style-2" : ""
        }`}
      >
        <div className="container">
          {/* SECTION HEADER */}
          <div className="sbros-brand-header">
            <div className="sbros-brand-subtitle-wrap">
              <span className="sbros-brand-line"></span>
              <span className="sbros-brand-subtitle">TRUSTED BY</span>
              <span className="sbros-brand-line"></span>
            </div>

            <h2 className="sbros-brand-title">OUR CLIENTS</h2>
          </div>

          {/* BRAND SLIDER */}
          <div
            className="sbros-brand-slider-wrapper"
            ref={wrapperRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="sbros-brand-track" ref={trackRef}>
              {/* Copy 1 */}
              {brand_data.map((item, index) => renderItem(item, index, 0))}

              {/* Copy 2 (seamless loop-ku) */}
              {brand_data.map((item, index) => renderItem(item, index, 1))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandHomeOne;