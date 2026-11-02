"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import menu_data from "./menu-data";

const NavMenu = () => {
  const pathname = usePathname();

  // Current page link match aagudha nu check pannum
  const isActive = (link: string) => {
    if (!pathname) return false;
    if (link === "/") return pathname === "/";
    return pathname === link || pathname.startsWith(link + "/");
  };

  return (
    <nav className="sbros-nav">

      <ul className="sbros-nav-list">

        {menu_data.map((menu) => {

          // Services sub page la irundhaalum Services blue la irukkanum
          const parentActive =
            isActive(menu.link) ||
            (menu.has_dropdown &&
              menu.sub_menus?.some((subMenu) => isActive(subMenu.link)));

          return (
            <li
              key={menu.id}
              className={`sbros-nav-item ${
                menu.has_dropdown ? "has-dropdown" : ""
              } ${parentActive ? "active" : ""}`}
            >

              {/* MAIN MENU */}

              <Link
                href={menu.link}
                className={`sbros-nav-link ${parentActive ? "active" : ""}`}
              >
                <span>{menu.title}</span>

                {menu.has_dropdown && (
                  <span className="sbros-dropdown-arrow">
                    <i className="fal fa-angle-down"></i>
                  </span>
                )}
              </Link>


              {/* SERVICES DROPDOWN */}

              {menu.has_dropdown &&
                menu.sub_menus &&
                menu.sub_menus.length > 0 && (

                  <ul className="sbros-submenu">

                    {menu.sub_menus.map((subMenu) => (
                      <li
                        key={subMenu.id}
                        className="sbros-submenu-item"
                      >

                        <Link
                          href={subMenu.link}
                          className={`sbros-submenu-link ${
                            isActive(subMenu.link) ? "active" : ""
                          }`}
                        >
                          {subMenu.title}
                        </Link>

                      </li>
                    ))}

                  </ul>

                )}

            </li>
          );
        })}

      </ul>

    </nav>
  );
};

export default NavMenu;