
"use client";

import React, { useState, useEffect } from "react";

type style_type = {
  style?: boolean;
};

const ScrollToTop = ({ style }: style_type) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScrollTop, { passive: true });
    checkScrollTop();

    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      tabIndex={showScroll ? 0 : -1}
      className="scroll-top scroll-to-target"
      data-target="html"
      style={{
        position: "fixed",

        right: "25px",
        left: "auto",
        bottom: "25px",
        top: "auto",

        width: "50px",
        height: "50px",
        minWidth: "50px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#ff3030",
        border: "none",
        borderRadius: "0",
        color: "#ffffff",

        fontSize: "20px",

        opacity: showScroll ? 1 : 0,
        visibility: showScroll ? "visible" : "hidden",
        pointerEvents: showScroll ? "auto" : "none",

        transform: showScroll ? "translateY(0)" : "translateY(12px)",

        transition:
          "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",

        zIndex: 999999,
        cursor: "pointer",
        boxShadow: "none",
      }}
    >
      <i
        className="far fa-angle-double-up"
        style={{
          color: "#ffffff",
          fontSize: "20px",
        }}
      />
    </button>
  );
};

export default ScrollToTop;
