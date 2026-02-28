import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#e9e9ec] py-16 md:py-24">
      <div className="mx-auto w-[80%]">
        <div className="max-w-[620px]">
          <div className="mb-6 h-5 w-16 rounded-full bg-white/70" />

          <h2
            className="font-display text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
            style={{ color: "#000000" }}
          >
            Connect with us
          </h2>

          <p className="mt-6 max-w-[34ch] text-[clamp(1.05rem,1.9vw,1.85rem)] leading-[1.35] text-[#1e2128]">
            Having helped many clients globally with MVP development, prototyping, and full-cycle application
            development to go to market quickly, efficiently and cost effectively, We would like to do the same for
            you.
          </p>

          <div className="mt-9">
            <Link
              href="#contact"
              className="inline-flex items-center gap-4 rounded-full bg-[#3f5bd8] py-2 pl-5 pr-2 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#3650c3]"
            >
              Let&apos;s Connect
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3f5bd8]">
                <svg width="17" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
