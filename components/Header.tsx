"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Blog",        href: "#blog" },
  { label: "Pages",       href: "#pages" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed z-50 left-1/2 -translate-x-1/2"
      style={{ top: "60px", width: "40%" }}
    >
      {/* pill container */}
      <nav
        className="flex items-center justify-between w-full rounded-full"
        style={{
          padding: "16px 28px",
          background: "rgba(20, 20, 28, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(70, 90, 190, 0.18)",
          boxShadow:
            "0 4px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.04) inset",
        }}
      >
        {/* logo text */}
        <Link
          href="/"
          className="flex items-center shrink-0 text-white text-3xl font-semibold tracking-wide"
        >
          Codexon
        </Link>

        {/* desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="px-4 py-1.5 text-base font-semibold tracking-wide rounded-full transition-colors duration-200 whitespace-nowrap text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#e6e6e6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 rounded transition-all duration-200"
            style={{
              background: "var(--color-text-muted)",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 rounded transition-all duration-200"
            style={{
              background: "var(--color-text-muted)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 rounded transition-all duration-200"
            style={{
              background: "var(--color-text-muted)",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* mobile dropdown */}
      {menuOpen && (
        <ul
          className="absolute left-1/2 -translate-x-1/2 mt-2 flex flex-col gap-1 px-4 py-3 rounded-2xl w-56 md:hidden"
          style={{
            background: "rgba(20, 20, 28, 0.95)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(70, 90, 190, 0.18)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-base font-semibold rounded-xl transition-colors duration-150 text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#e6e6e6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
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
