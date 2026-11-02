"use client";

import React, { useState } from "react";
import Link from "next/link";

import menu_data from "./menu-data";


const MobileMenus = () => {

  const [navTitle, setNavTitle] = useState("");


  // =====================================================
  // OPEN / CLOSE MOBILE SUBMENU
  // =====================================================

  const openMobileMenu = (menu: string) => {

    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }

  };


  return (
    <nav className="it-menu-content sbros-mobile-nav">

      <ul>

        {menu_data.map((menu) => (

          <li
            key={menu.id}
            className={
              menu.has_dropdown
                ? "has-dropdown"
                : ""
            }
          >

            {/* =================================================
                MAIN MENU
            ================================================= */}

            {menu.has_dropdown ? (

              <>

                <div
                  className={`sbros-mobile-menu-item ${
                    navTitle === menu.title
                      ? "dropdown-opened"
                      : ""
                  }`}
                >

                  <Link
                    href={menu.link}
                    className={
                      navTitle === menu.title
                        ? "expanded"
                        : ""
                    }
                  >
                    {menu.title}
                  </Link>


                  {/* Dropdown Button */}

                  <button
                    type="button"
                    onClick={() =>
                      openMobileMenu(menu.title)
                    }
                    className={`dropdown-toggle-btn ${
                      navTitle === menu.title
                        ? "dropdown-opened"
                        : ""
                    }`}
                    aria-label={`Open ${menu.title} submenu`}
                  >
                    <i className="fal fa-angle-right"></i>
                  </button>

                </div>


                {/* =================================================
                    SERVICES SUBMENU
                ================================================= */}

                <ul
                  className="submenu it-submenu sbros-mobile-submenu"
                  style={{
                    display:
                      navTitle === menu.title
                        ? "block"
                        : "none",
                  }}
                >

                  {menu.sub_menus?.map((subItem) => (

                    <li key={subItem.id}>

                      <Link href={subItem.link}>
                        {subItem.title}
                      </Link>

                    </li>

                  ))}

                </ul>

              </>

            ) : (

              /* =================================================
                 NORMAL MENU ITEM
              ================================================= */

              <Link href={menu.link}>
                {menu.title}
              </Link>

            )}

          </li>

        ))}

      </ul>

    </nav>
  );
};


export default MobileMenus;