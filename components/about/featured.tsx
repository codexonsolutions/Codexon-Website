"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutFeatured() {
  return (
    <section className="w-full h-screen bg-primary/10 pt-32 pb-10 md:pt-40 md:pb-14">
      <div className="mx-auto w-[85%] max-w-8xl">
        <div className="text-center">
          <h1 className="font-display text-4xl font-extrabold !text-black sm:text-6xl">
            About Us
          </h1>
          <motion.span
            className="mx-auto mt-3 block h-1 w-24 rounded-full bg-primary/50"
            initial={{ scaleX: 0.6, opacity: 0.6 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        </div>

        <div className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className="text-2xl font-semibold leading-[1.35] text-black sm:text-3xl md:text-[36px]">
              We are a multi-award-winning digital consulting and engineering
              firm that provides end-to-end software solutions to enterprises.
            </p>

            <motion.div
              initial={{ y: 6, opacity: 0.92 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="mt-9 inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-primary px-10 py-3 text-2xl font-bold !text-white shadow-[0_10px_20px_rgba(83,113,255,0.35)] transition-colors hover:bg-primary-hover md:text-3xl"
              >
                <span className="!text-white">Contact</span>
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/aboutHero1.png"
              alt="About us hero illustration"
              width={820}
              height={580}
              className="h-auto w-full max-w-none object-contain md:w-[110%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
