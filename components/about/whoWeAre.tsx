"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bulletPoints = [
  "Custom web and mobile products tailored to business goals.",
  "Scalable architecture with clean, maintainable code standards.",
  "Transparent collaboration through agile delivery cycles.",
  "Continuous support, optimization, and long-term product growth.",
];

export default function AboutWhoWeAre() {
  return (
    <section className="w-full bg-[#e9e9ec] py-18 md:py-24">
      <div className="mx-auto grid w-[88%] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-30">
        <motion.div
          className="order-2 flex items-center justify-center md:order-1 md:justify-start"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/who.png"
            alt="Team building software illustration"
            width={1100}
            height={820}
            className="h-auto w-full max-w-none object-contain md:w-[110%]"
          />
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-extrabold leading-none !text-black sm:text-4xl md:text-6xl">
            Who Are We?
          </h2>

          <p className="mt-7 font-display text-xl font-bold leading-[1.35] text-black sm:text-2xl md:text-3xl">
            We are a product-focused software team building reliable Web and
            Mobile solutions for growing businesses.
          </p>

          <p className="mt-7 max-w-[860px] text-base leading-[1.7] text-[#5f6672] sm:text-lg md:text-xl md:leading-[1.6]">
            From discovery and UI/UX to development and deployment, we help
            companies launch digital products that are secure, scalable, and easy
            to maintain. Our team combines technical depth with practical delivery
            so every release creates measurable business value.
          </p>

          <motion.ul
            className="mt-8 space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {bulletPoints.map((item, index) => (
              <motion.li
                key={`${item}-${index}`}
                className="flex items-center gap-4 text-base font-semibold text-black sm:text-lg md:text-xl"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3-3a1 1 0 011.42-1.42L8.75 11.84l6.54-6.55a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="leading-[1.35]">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
