"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubMenu = { title: string; link: string };

type MenuItem = {
  id: number;
  title: string;
  link: string;
  sub_menus?: SubMenu[];
};

const menu_data: MenuItem[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About Us", link: "/about-us" },
  {
    id: 3,
    title: "Services",
    link: "/service",
    sub_menus: [
      { title: "Digital Marketing", link: "/digital-marketing" },
      { title: "Website Development", link: "/website-development" },
      { title: "Software Development", link: "/software-development" },
      { title: "Graphic Design", link: "/graphic-design" },
      { title: "Network & Security System", link: "/network-security" },
    ],
  },
  { id: 4, title: "Training", link: "/training-services" },
  { id: 5, title: "Career", link: "/career" },
  { id: 6, title: "Blog", link: "/blog" },
  { id: 7, title: "Contact Us", link: "/contact-us" },
];

type Props = {
  openSidebar?: boolean;
  setOpenSidebar?: (value: boolean) => void;
};

const Offcanvus = ({ openSidebar = false, setOpenSidebar }: Props) => {
  const [openSub, setOpenSub] = useState<number | null>(null);
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  const closeMenu = () => {
    if (typeof setOpenSidebar === "function") setOpenSidebar(false);
  };

  // Page actual-aa maarina mattum menu close
  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setOpenSub(null);
      closeMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Menu close aana dropdown reset
  useEffect(() => {
    if (!openSidebar) setOpenSub(null);
  }, [openSidebar]);

  // ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!openSidebar) return null;

  return (
    <nav className="mnav__panel">
      <ul className="mnav__list">
        {menu_data.map((item) => {
          const hasSub = !!item.sub_menus?.length;
          const subOpen = openSub === item.id;

          return (
            <li key={item.id} className="mnav__item">
              <div className="mnav__row">
                {/* Heading click -> page ku pogum + menu close */}
                <Link href={item.link} onClick={closeMenu}>
                  {item.title}
                </Link>

                {/* + / - click -> dropdown mattum toggle */}
                {hasSub && (
                  <button
                    type="button"
                    className="mnav__toggle"
                    aria-label={`Toggle ${item.title} submenu`}
                    aria-expanded={subOpen}
                    onClick={() => setOpenSub(subOpen ? null : item.id)}
                  >
                    {subOpen ? "−" : "+"}
                  </button>
                )}
              </div>

              {hasSub && subOpen && (
                <ul className="mnav__sub">
                  {item.sub_menus!.map((sub, i) => (
                    <li key={i}>
                      <Link href={sub.link} onClick={closeMenu}>
                        {sub.title}
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

export default Offcanvus;