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


export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-white/5">
      <div className="mx-auto w-[90%] max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Logo & Info Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90 text-white">
              <Image
                src="/logo.png"
                alt="Codexon logo"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-full object-cover"
                priority
              />
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

