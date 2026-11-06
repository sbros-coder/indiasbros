"use client";

import { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import ScrollToTop from "@/components/common/scroll-to-top";
import WhatsAppButton from "@/components/common/WhatsAppButton";

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