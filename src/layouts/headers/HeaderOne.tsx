"use client";

import Link from "next/link";
import React, { useState } from "react";

import NavMenu from "./Menu/nav-menu";
import Search from "@/components/common/Search";
import Offcanvus from "@/components/common/Offcanvus";

const HeaderOne = () => {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="it-header-height sbros-header">

        {/* =====================================================
            STICKY NAVBAR
        ===================================================== */}

        <div
          id="header-sticky"
          className="it-header__area sbros-navbar"
        >

          <div className="container container-large">

            <div className="sbros-navbar-inner">

              {/* =================================================
                  LOGO
              ================================================= */}

              <div className="sbros-navbar-logo">

                <Link
                  href="/"
                  className="sbros-logo-link"
                >

                  <img
                    src="/assets/images/SBROS-logo.png"
                    alt="SBros Tech"
                    className="sbros-logo"
                  />

                </Link>

              </div>


              {/* =================================================
                  DESKTOP MENU
              ================================================= */}

              <div className="sbros-navbar-menu">

                <NavMenu />

              </div>


              {/* =================================================
                  GET SOLUTION BUTTON
              ================================================= */}

              <div className="sbros-navbar-action">

                <Link
                  href="/contact-us"
                  className="sbros-solution-btn"
                >

                  <span>GET SOLUTION</span>

                </Link>

              </div>


              {/* =================================================
                  MOBILE MENU
              ================================================= */}

              <div className="sbros-mobile-action">

                <button
                  type="button"
                  className="sbros-mobile-menu-btn"
                  onClick={() =>
                    setOpenSidebar(!openSidebar)
                  }
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
          SEARCH
      ===================================================== */}

      <Search
        open={open}
        setOpen={setOpen}
      />


      {/* =====================================================
          OFFCANVAS
      ===================================================== */}

      <Offcanvus
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

    </>
  );
};

export default HeaderOne;