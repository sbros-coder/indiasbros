"use client";

import React, { useState } from "react";
import Link from "next/link";

import NavMenu from "./Menu/nav-menu";
import Offcanvus from "@/components/common/Offcanvus";

const HeaderFour = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {/* =====================================================
          SBROS HEADER
      ===================================================== */}
      <header className="it-header-height sbros-header-four">

        {/* =================================================
            FIXED NAVBAR
        ================================================= */}
        <div
          id="header-sticky"
          className="it-header__area sbros-navbar-four"
        >
          <div className="container container-large">

            <div className="sbros-navbar-four-inner">

              {/* =================================================
                  LOGO
              ================================================= */}
              <div className="sbros-navbar-four-logo">
                <Link
                  href="/"
                  className="sbros-navbar-four-logo-link"
                >
                  <img
                    src="/assets/images/SBROS-logo.png"
                    alt="SBros Tech"
                    className="sbros-navbar-four-logo-img"
                  />
                </Link>
              </div>


              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================= */}
              <div className="sbros-navbar-four-menu">
                <nav className="sbros-navbar-four-nav">
                  <NavMenu />
                </nav>
              </div>


              {/* =================================================
                  RIGHT SIDE
                  GET SOLUTION
              ================================================= */}
              <div className="sbros-navbar-four-action">

                <Link
                  href="/contact-us"
                  className="sbros-navbar-four-solution"
                >
                  <span>GET SOLUTION</span>
                </Link>

              </div>


              {/* =================================================
                  MOBILE MENU
              ================================================= */}
              <div className="sbros-navbar-four-mobile">

                <button
                  type="button"
                  className="sbros-navbar-four-mobile-btn"
                  onClick={() => setOpenSidebar(!openSidebar)}
                  aria-label="Open menu"
                  aria-expanded={openSidebar}
                >
                  <i className="fa-regular fa-bars"></i>
                </button>

              </div>

            </div>

          </div>
        </div>

      </header>


      {/* =====================================================
          OFFCANVAS MOBILE MENU
      ===================================================== */}
      <Offcanvus
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

    </>
  );
};

export default HeaderFour;