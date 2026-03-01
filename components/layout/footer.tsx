"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Web development", href: "/services" },
      { label: "Mobile app development", href: "/services" },
      { label: "UIUX research and design", href: "/services" },
      { label: "Quality Assurance", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookies", href: "/privacy" },
      { label: "FAQ", href: "#" },
    ],
  },
];


function BrandLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 1500 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fill="currentColor" d="M 750.140625 5.390625 C 336.753906 5.390625 1.648438 338.777344 1.648438 749.933594 C 1.648438 1161.191406 336.75 1494.527344 750.140625 1494.527344 C 1163.460938 1494.527344 1498.582031 1161.191406 1498.582031 749.933594 C 1498.578125 338.777344 1163.457031 5.390625 750.140625 5.390625 Z M 750.140625 1376.414062 C 402.308594 1376.414062 120.375 1095.992188 120.375 749.933594 C 120.375 403.980469 402.308594 123.503906 750.140625 123.503906 C 1097.933594 123.503906 1379.867188 403.980469 1379.867188 749.933594 C 1379.867188 1095.988281 1097.929688 1376.414062 750.140625 1376.414062 Z M 750.140625 1376.414062 " fillRule="nonzero" />
        <path fill="currentColor" d="M 1219.132812 768.234375 L 1219.457031 767.910156 L 1219.457031 767.855469 C 1229.257812 757.730469 1229.316406 741.804688 1219.402344 732.054688 L 852.003906 366.554688 C 847.078125 361.628906 840.554688 359.082031 834.054688 359.082031 C 827.46875 359.082031 820.949219 361.628906 815.996094 366.554688 L 815.585938 367.042969 C 810.761719 371.808594 808.085938 378.199219 808.085938 384.96875 L 808.085938 486.082031 C 808.085938 492.796875 810.765625 499.242188 815.585938 503.953125 L 1062.730469 749.933594 L 815.585938 995.90625 C 810.761719 1000.675781 808.085938 1007.121094 808.085938 1013.835938 L 808.085938 1114.996094 C 808.085938 1121.605469 810.765625 1128.160156 815.585938 1132.871094 L 815.996094 1133.355469 C 820.761719 1138.070312 827.253906 1140.777344 834.054688 1140.777344 C 840.800781 1140.777344 847.238281 1138.070312 852.003906 1133.355469 Z M 1219.132812 768.234375 " fillRule="nonzero" />
        <path fill="currentColor" d="M 289.984375 768.234375 L 289.6875 767.910156 L 289.6875 767.855469 C 279.882812 757.730469 279.882812 741.804688 289.6875 732.054688 L 657.085938 366.554688 C 662.105469 361.628906 668.621094 359.082031 675.105469 359.082031 C 681.671875 359.082031 688.140625 361.628906 693.113281 366.554688 L 693.617188 367.042969 C 698.394531 371.808594 701.113281 378.199219 701.113281 384.96875 L 701.113281 486.082031 C 701.113281 492.796875 698.394531 499.242188 693.617188 503.953125 L 446.351562 749.933594 L 693.617188 995.90625 C 698.394531 1000.675781 701.113281 1007.121094 701.113281 1013.835938 L 701.113281 1114.996094 C 701.113281 1121.605469 698.394531 1128.160156 693.617188 1132.871094 L 693.113281 1133.355469 C 688.386719 1138.070312 681.921875 1140.777344 675.105469 1140.777344 C 668.375 1140.777344 661.902344 1138.070312 657.085938 1133.355469 Z M 289.984375 768.234375 " fillRule="nonzero" />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-white/5">
      <div className="mx-auto w-[90%] max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Logo & Info Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90 text-white">
              <BrandLogo />
              <span className="font-display text-[26px] font-bold tracking-tight">CODEXON</span>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              Empowering businesses with cutting-edge software solutions and premium digital experiences.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:bg-[#5371ff] hover:text-white hover:border-[#5371ff] hover:-translate-y-1"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:bg-[#5371ff] hover:text-white hover:border-[#5371ff] hover:-translate-y-1"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:bg-[#5371ff] hover:text-white hover:border-[#5371ff] hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Links Grid Section */}
          <div className="lg:col-span-1" /> {/* Spacer */}

          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-6">
                <h3 className="text-white font-semibold text-[17px]">{group.title}</h3>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/50 text-[16px] transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-semibold text-[17px]">Subscribe to our Newsletter</h3>
            <p className="text-white/50 text-[16px] leading-relaxed">
              Stay updated with the latest news, projects, and exclusive insights.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/[0.03] border border-white/10 rounded-full px-5 py-3.5 text-white text-[15px] outline-none focus:border-[#5371ff]/50 transition-all placeholder:text-white/30"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#5371ff] text-white rounded-full px-6 text-[14px] font-medium transition-all hover:bg-[#4660e6] active:scale-95"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#08080a]">
        <div className="mx-auto max-w-7xl w-[90%] flex flex-col gap-4 py-8 text-[14px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Codexon Solutions. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/privacy" className="transition-colors hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

