import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#f4f4f7] py-20 md:py-32">
      <div className="mx-auto w-[85%] max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2
              className="font-display text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
              style={{ color: "#000000" }}
            >
              Connect with us
            </h2>

            <p className="mt-8 max-w-[45ch] text-[1.125rem] leading-[1.6] text-[#4a4a4a]">
              Having helped many clients globally with MVP development, prototyping, and full-cycle application
              development to go to market quickly, efficiently and cost effectively, We would like to do the same for
              you.
            </p>

            <div className="mt-10">
              <Link
                href="mailto:contact@codexon.pk"
                className="inline-flex min-w-[240px] items-center justify-between gap-6 rounded-full bg-primary py-2.5 pl-10 pr-2.5 text-[16px] font-bold !text-white transition-all duration-500 hover:bg-primaryHover hover:scale-[1.03] group"
              >
                Contact Sales
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary transition-transform duration-700 group-hover:rotate-[360deg]">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side: Contact Details & Map */}
          <div className="space-y-12 border-l border-black/5 pl-0 md:pl-16 lg:pl-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary/70">Contact Numbers</p>
                <p className="text-[1.25rem] font-bold tracking-tight text-[#000000]">
                  0300-5397347
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary/70">Email</p>
                <p className="text-[1.25rem] font-bold tracking-tight text-[#000000]">
                  contact@codexon.pk
                </p>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary/70">Office</p>
                <p className="text-[1.25rem] font-bold tracking-tight text-[#000000]">
                  Workzone, G11 Islamabad
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[300px] rounded-3xl overflow-hidden shadow-lg border border-white/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5559048691002!2d72.99411627557149!3d33.668667137886956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df954b7ef4164d%3A0xe02571583117c203!2sWorkZone%20G-11%20-%20Coworking%20Space!5e0!3m2!1sen!2s!4v1772479099404!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
