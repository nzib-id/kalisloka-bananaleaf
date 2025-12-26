"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Specification", href: "#specifications" },
  { label: "Grades", href: "#grades" },
  { label: "Gallery", href: "#gallery" },
  { label: "Send Inquiry", href: "#contact", cta: true },
];


const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [green, setGreen] = useState(false);
  const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const product = document.getElementById("overview");
      const contact = document.getElementById("contact");

      if (!hero || !product || !contact) return;

      const scrollY = window.scrollY;

      const productTop = product.offsetTop - 120;
      const contactTop = contact.offsetTop - 150;

      if (scrollY >= contactTop) {
        setGreen(false);
        return;
      }

      if (scrollY >= productTop && scrollY < contactTop) {
        setGreen(true);
        return;
      }

      setGreen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* NAV WRAPPER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto">
          <div
            className={`
              pointer-events-auto
              w-full flex flex-col
              transition-all duration-500
              ${green
                ? "bg-[#d0e9bd]/80 px-6 border border-[#A3D6A1]/30 rounded-full backdrop-blur-md mt-3 shadow-sm"
                : "bg-transparent border-transparent mt-5"
              }
            `}
          >
            {/* NAV CONTENT */}
            <div className="flex items-center justify-between w-full py-4 md:py-5">

              {/* LOGO */}
              <a href="#hero" className="transition-opacity duration-300">
                <img
                  src={green ? "/logo-green.svg" : "/logo-white.svg"}
                  alt="Kalisloka Logo"
                  className="h-5 md:h-6 w-auto transition-all duration-300"
                />
              </a>

              {/* DESKTOP MENU */}
              <div
                className={`
                  hidden md:flex items-center space-x-20
                  text-sm font-semibold transition-colors duration-300
                  ${green ? "text-[#004035]" : "text-white"}
                `}
              >
                {NAV_ITEMS.map((item) =>
                  item.cta ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`${
                        green
                          ? "bg-[#004035] text-[#E6FFCF]"
                          : "bg-[#E6FFCF] text-[#004035]"
                      } rounded-full text-sm font-semibold px-3 lg:px-5 py-2 hover:opacity-90 transition-all`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="hover:opacity-70 transition"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>

              {/* MOBILE BURGER ICON */}
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                className={`
                  md:hidden text-3xl transition-colors duration-300
                  ${green ? "text-[#004035]" : "text-white"}
                `}
                onClick={() => setOpen(!open)}
              >
                {open ? "✕" : "☰"}
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {open && (
        <div
          className={`
            fixed inset-0 z-50 md:hidden
            flex items-center justify-center
            ${green ? "bg-[#d0e9bd] text-[#004035]" : "bg-black/80 text-white backdrop-blur-md"}
          `}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full h-full flex flex-col items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={`
                absolute top-6 right-6 text-3xl
                ${green ? "text-[#004035]" : "text-white"}
              `}
              aria-label="Close menu"
            >
              ✕
            </button>

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  item.cta
                    ? `${
                        green
                          ? "bg-[#004035] text-[#E6FFCF]"
                          : "bg-[#E6FFCF] text-[#004035]"
                      } mt-4 rounded-full px-6 py-3 text-xl font-semibold hover:opacity-90 transition`
                    : "text-2xl font-medium mb-6 hover:opacity-80 transition"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
