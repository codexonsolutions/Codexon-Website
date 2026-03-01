"use client";

import Image from "next/image";
import Link from "next/link";

const dots = [
  { color: "#e8704a" },
  { color: "#f0c040" },
  { color: "#50c878" },
  { color: "#5b8dee" },
];

export default function Featured() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[var(--color-bg-base)]">

      {/* ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(70,90,190,0.12) 0%, transparent 70%)",
        }}
      />

      {/* centering shell — fills full height, centers child */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-[80%] flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-[140px] pb-[80px]">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6 flex-1 max-w-[520px]">

            {/* decorative dots */}
            <div className="flex items-center gap-2.5">
              {dots.map((dot, i) => (
                <span
                  key={i}
                  className="block w-[11px] h-[11px] rounded-full"
                  style={{
                    background: dot.color,
                    boxShadow: `0 0 8px ${dot.color}99`,
                  }}
                />
              ))}
            </div>

            {/* heading */}
            <h1 className="font-display font-extrabold leading-[1.08] tracking-[-0.03em] text-[clamp(2.8rem,5vw,4.5rem)] text-white">
              Crafting Future
              <br />
              Software Today!
            </h1>

            {/* subtitle */}
            <p className="font-sans text-base lg:text-lg leading-relaxed text-white">
              Transforming Ideas Into Software Success Stories.
            </p>

            {/* CTA */}
            <div className="mt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-[#d9d9d9] bg-white py-2 pl-5 pr-2 text-[15px] font-medium leading-none tracking-[-0.01em] text-black"
              >
                <span className="text-[#000000]">Let&apos;s Connect</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3f5bd8]">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="relative flex-1 flex items-center justify-center md:justify-end">
            {/* soft glow — complex radial gradient, must stay inline */}
            <div
              className="absolute inset-0 pointer-events-none blur-[30px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(70,90,190,0.15) 0%, transparent 65%)",
              }}
            />
            <Image
              src="/images/hero.png"
              alt="3D abstract torus"
              width={620}
              height={620}
              priority
              className="relative z-10 object-contain select-none w-full max-w-[min(500px,48vw)]"
            />
          </div>

        </div>{/* end w-[90%] */}
      </div>{/* end centering shell */}
    </section>
  );
}
