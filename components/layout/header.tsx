"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  // { label: "Our Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const useScrolledHeader =
    isScrolled || pathname === "/about" || pathname === "/contact";

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
          <Image
            src="/logo.png"
            alt="Codexon logo"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-full object-cover"
            priority
          />
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
