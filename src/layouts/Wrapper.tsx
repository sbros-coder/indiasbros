"use client";

import { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import ScrollToTop from "@/components/common/scroll-to-top";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const fabCss = `
  body .fab-left,
  body .fab-right {
    position: fixed !important;
    bottom: calc(clamp(90px, 12vh, 130px) + env(safe-area-inset-bottom, 0px)) !important;
    top: auto !important;
    z-index: 99999 !important;
    width: auto !important;
    height: auto !important;
  }
  body .fab-left {
    left: clamp(12px, 2vw, 28px) !important;
    right: auto !important;
  }
  body .fab-right {
    right: clamp(12px, 2vw, 28px) !important;
    left: auto !important;
  }
  /* components kulla irukkura own fixed/bottom values-ah reset */
  body .fab-left *,
  body .fab-right * {
    position: static !important;
    inset: auto !important;
    margin: 0 !important;
    transform: none !important;
  }
`;

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fabCss }} />

      {children}

      <div className="fab-right">
        <ScrollToTop />
      </div>

      <div className="fab-left">
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Wrapper;