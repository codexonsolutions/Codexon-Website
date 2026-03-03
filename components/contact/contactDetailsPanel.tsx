"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M7 10V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <path d="M11 17V13.3C11 11.8 12 10.8 13.4 10.8C14.8 10.8 15.5 11.7 15.5 13.2V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M9 7.8V16.2L16.2 12L9 7.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactDetailsPanel() {
  return (
    <section className="w-full bg-[#e9e9ec] pb-20 md:pb-24">
      <div className="mx-auto w-[88%] max-w-7xl">
        <motion.div
          className="rounded-[34px] border border-primary/20 bg-[#f3f3f4] p-6 shadow-[0_16px_30px_rgba(15,30,90,0.08)] md:p-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div>
                <h2 className="font-display text-3xl font-extrabold !text-black md:text-5xl">
                  Contact Details
                </h2>
                <p className="mt-3 text-base text-[#5f6672] md:text-lg">
                  Reach out through any channel below. We usually respond within one business day.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/75">Email</p>
                <Link
                  href="mailto:contact@codexon.pk"
                  className="mt-2 block text-lg font-bold !text-black visited:!text-black hover:!text-primary md:text-2xl"
                >
                  contact@codexon.pk
                </Link>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/75">Phone Number</p>
                <p className="mt-2 text-lg font-bold text-[#1d2631] md:text-2xl">0300-5397347</p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/75">Address</p>
                <p className="mt-2 text-base leading-[1.65] text-[#5f6672] md:text-lg">
                  Workzone, G11 Islamabad
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/75">Social Media</p>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 text-primary transition-colors hover:bg-primary hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 text-primary transition-colors hover:bg-primary hover:text-white"
                    aria-label="YouTube"
                  >
                    <PlayIcon />
                  </Link>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 text-primary transition-colors hover:bg-primary hover:text-white"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-3xl border border-primary/20"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5559048691002!2d72.99411627557149!3d33.668667137886956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df954b7ef4164d%3A0xe02571583117c203!2sWorkZone%20G-11%20-%20Coworking%20Space!5e0!3m2!1sen!2s!4v1772479099404!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="min-h-[340px] md:min-h-[520px]"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
