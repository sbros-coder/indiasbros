
"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/917811009192"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SBros Tech on WhatsApp"
      tabIndex={isVisible ? 0 : -1}
      style={{
        position: "fixed",
        left: "25px",
        right: "auto",
        bottom: "80px",
        top: "auto",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        pointerEvents: isVisible ? "auto" : "none",
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.1.55 4.15 1.6 5.96L.1 24l6.31-1.65a11.9 11.9 0 0 0 5.67 1.44h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.45-8.43ZM12.09 21.77a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.75.98 1-3.65-.24-.38a9.85 9.85 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.9-9.9a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.51s1.09 2.91 1.24 3.11c.15.2 2.14 3.27 5.18 4.59.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.43.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
