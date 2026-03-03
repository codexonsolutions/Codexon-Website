"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="w-full bg-[#e9e9ec] pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="mx-auto w-[88%] max-w-6xl text-center">
        <motion.h1
          className="font-display text-5xl font-extrabold !text-black sm:text-6xl md:text-8xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-4xl text-2xl leading-[1.4] text-[#1d2631] sm:text-3xl md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.42, ease: "easeOut", delay: 0.1 }}
        >
          Connecting Dreams, Resolving Queries -
          <br />
          Reach out to Us Today!
        </motion.p>
      </div>
    </section>
  );
}
