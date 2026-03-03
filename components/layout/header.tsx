"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

function BrandLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 1500 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M 750.140625 5.390625 C 336.753906 5.390625 1.648438 338.777344 1.648438 749.933594 C 1.648438 1161.191406 336.75 1494.527344 750.140625 1494.527344 C 1163.460938 1494.527344 1498.582031 1161.191406 1498.582031 749.933594 C 1498.578125 338.777344 1163.457031 5.390625 750.140625 5.390625 Z M 750.140625 1376.414062 C 402.308594 1376.414062 120.375 1095.992188 120.375 749.933594 C 120.375 403.980469 402.308594 123.503906 750.140625 123.503906 C 1097.933594 123.503906 1379.867188 403.980469 1379.867188 749.933594 C 1379.867188 1095.988281 1097.929688 1376.414062 750.140625 1376.414062 Z M 750.140625 1376.414062 " fillRule="nonzero" />
      <path fill="currentColor" d="M 1219.132812 768.234375 L 1219.457031 767.910156 L 1219.457031 767.855469 C 1229.257812 757.730469 1229.316406 741.804688 1219.402344 732.054688 L 852.003906 366.554688 C 847.078125 361.628906 840.554688 359.082031 834.054688 359.082031 C 827.46875 359.082031 820.949219 361.628906 815.996094 366.554688 L 815.585938 367.042969 C 810.761719 371.808594 808.085938 378.199219 808.085938 384.96875 L 808.085938 486.082031 C 808.085938 492.796875 810.765625 499.242188 815.585938 503.953125 L 1062.730469 749.933594 L 815.585938 995.90625 C 810.761719 1000.675781 808.085938 1007.121094 808.085938 1013.835938 L 808.085938 1114.996094 C 808.085938 1121.605469 810.765625 1128.160156 815.585938 1132.871094 L 815.996094 1133.355469 C 820.761719 1138.070312 827.253906 1140.777344 834.054688 1140.777344 C 840.800781 1140.777344 847.238281 1138.070312 852.003906 1133.355469 Z M 1219.132812 768.234375 " fillRule="nonzero" />
      <path fill="currentColor" d="M 289.984375 768.234375 L 289.6875 767.910156 L 289.6875 767.855469 C 279.882812 757.730469 279.882812 741.804688 289.6875 732.054688 L 657.085938 366.554688 C 662.105469 361.628906 668.621094 359.082031 675.105469 359.082031 C 681.671875 359.082031 688.140625 361.628906 693.113281 366.554688 L 693.617188 367.042969 C 698.394531 371.808594 701.113281 378.199219 701.113281 384.96875 L 701.113281 486.082031 C 701.113281 492.796875 698.394531 499.242188 693.617188 503.953125 L 446.351562 749.933594 L 693.617188 995.90625 C 698.394531 1000.675781 701.113281 1007.121094 701.113281 1013.835938 L 701.113281 1114.996094 C 701.113281 1121.605469 698.394531 1128.160156 693.617188 1132.871094 L 693.113281 1133.355469 C 688.386719 1138.070312 681.921875 1140.777344 675.105469 1140.777344 C 668.375 1140.777344 661.902344 1138.070312 657.085938 1133.355469 Z M 289.984375 768.234375 " fillRule="nonzero" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const useScrolledHeader = isScrolled || pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${useScrolledHeader
        ? "top-6 w-[92%] md:w-auto"
        : "top-0 w-full"
        }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${useScrolledHeader
          ? "max-w-[800px] rounded-full bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-2 shadow-2xl shadow-black/50"
          : "max-w-7xl w-[80%] rounded-none bg-transparent border-transparent px-0 py-8 md:px-0 md:py-10"
          }`}
      >
        {/* logo icon */}
        {/* logo icon */}
        <Link
          href="/"
          className="inline-flex shrink-0 items-center h-9 gap-3 text-white/70 hover:text-white whitespace-nowrap mr-6"
        >
          <BrandLogo />
          <span className="font-display text-[13px] font-bold tracking-wider uppercase leading-none">CODEXON</span>
        </Link>

        {/* desktop nav */}
        <ul className={`hidden md:flex items-center transition-all duration-700 whitespace-nowrap ${useScrolledHeader ? "gap-2" : "gap-8"
          }`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`flex h-9 items-center px-4 text-[13px] font-display font-bold tracking-wider uppercase rounded-full transition-all duration-300 whitespace-nowrap ${useScrolledHeader
                  ? "text-white/70 hover:text-white hover:bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                  } leading-none`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile hamburger */}
        <button
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full md:hidden transition-all duration-500 ${useScrolledHeader ? "bg-white/5" : "bg-transparent"
            }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-5 rounded transition-all duration-500 bg-white"
            style={{
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-5 rounded transition-all duration-500 bg-white"
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-5 rounded transition-all duration-500 bg-white"
            style={{
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* mobile dropdown */}
      {menuOpen && (
        <ul
          className="absolute left-1/2 -translate-x-1/2 mt-4 flex flex-col gap-2 px-4 py-4 rounded-3xl w-[calc(100%-2rem)] md:hidden border border-white/10 bg-black/60 backdrop-blur-2xl shadow-2xl shadow-black"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-base font-bold tracking-wider uppercase rounded-2xl transition-all duration-150 text-white/70 hover:text-white hover:bg-white/5 active:scale-[0.98]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
