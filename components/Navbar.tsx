"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Historia", href: "#historia" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Horarios", href: "#horarios" },
  { label: "Pide Ahora", href: "#pide" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLink = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="Los Weyes de la Asada — Home"
          >
            <span className="flame-wiggle text-xl" aria-hidden="true">
              🔥
            </span>
            <span
              className="font-display text-2xl tracking-widest text-fire"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              LOS WEYES
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    link.label === "Pide Ahora"
                      ? "btn-fire px-4 py-2 rounded-full text-sm"
                      : "text-cream/80 hover:text-fire"
                  }`}
                  style={
                    link.label === "Pide Ahora"
                      ? { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }
                      : { fontFamily: "'DM Sans', sans-serif" }
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg/98 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mb-10 text-center">
          <span className="flame-wiggle text-5xl block mb-2">🔥</span>
          <span
            className="text-fire text-4xl tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            LOS WEYES
          </span>
        </div>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLink}
                className={`text-3xl tracking-widest transition-colors duration-200 ${
                  link.label === "Pide Ahora"
                    ? "text-fire"
                    : "text-cream hover:text-fire"
                }`}
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
