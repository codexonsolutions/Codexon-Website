"use client";

import Link from "next/link";

const primaryLinks = [
  { label: "Careers", href: "#" },
  { label: "Join Us", href: "#" },
  { label: "Internship Programs", href: "#" },
  { label: "Human Resources", href: "#" },
];

const supportLinks = [
  { label: "Support", href: "#" },
  { label: "Help", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#contact" },
];

const companyLinks = [
  { label: "Company", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About us", href: "#" },
  { label: "Life at Codexon", href: "#" },
];

const initiativesLinks = [
  { label: "Our Initiatives", href: "#" },
  { label: "NxtFruit", href: "#" },
  { label: "Toffeeride", href: "#" },
  { label: "EasyNxt", href: "#" },
  { label: "Headstartit", href: "#" },
];

function SocialFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3 21V12.8H16L16.4 10H13.3V8.2C13.3 7.4 13.5 6.8 14.8 6.8H16.5V4.2C16.2 4.1 15.2 4 14 4C11.4 4 9.8 5.4 9.8 8.1V10H7.5V12.8H9.8V21H13.3Z" fill="currentColor" />
    </svg>
  );
}

function SocialInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function SocialLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.3 8.8V19.2M6.3 4.8V4.9M11.3 19.2V12.7C11.3 10.9 12.2 9.8 13.9 9.8C15.5 9.8 16.3 10.9 16.3 12.7V19.2M4 19.2H8.6M10 19.2H17.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandMark() {
  return (
    <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="25" height="18" rx="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 14V6L13.5 12L18.5 6V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#111114]">
      <div className="mx-auto w-[80%] py-12 md:py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-9">
            <div className="flex items-center gap-7 text-white/70">
              <Link href="#" className="transition-colors hover:text-white"><SocialFacebook /></Link>
              <Link href="#" className="transition-colors hover:text-white"><SocialInstagram /></Link>
              <Link href="#" className="transition-colors hover:text-white"><SocialLinkedIn /></Link>
            </div>

            <div className="flex items-center gap-3 text-white/65">
              <BrandMark />
              <span className="font-display text-[30px] font-semibold tracking-[0.02em]">CODEXON</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-[19px] sm:grid-cols-4 md:gap-12">
            {[primaryLinks, supportLinks, companyLinks, initiativesLinks].map((group, i) => (
              <ul key={i} className="space-y-3">
                {group.map((item, idx) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`${idx === 0 ? "text-white/80" : "text-white"} text-[18px] leading-[1.25] transition-colors hover:text-[#9f8cff]`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="mx-auto flex w-[80%] flex-col gap-4 py-4 text-[15px] text-white/95 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Codexon. All rights reserved.</p>
          <div className="flex items-center gap-7">
            <Link href="#" className="transition-opacity hover:opacity-80">Terms of Service</Link>
            <Link href="#" className="transition-opacity hover:opacity-80">Privacy Policy</Link>
            <Link href="#" className="transition-opacity hover:opacity-80">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
