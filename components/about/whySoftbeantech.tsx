"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Assured Services",
    description:
      "We prioritize risk-aware execution, robust engineering practices, and dependable delivery so your product stays stable as your business grows.",
    icon: "/images/assurance.png",
    cardTone: "bg-primary/10 border-primary/20",
  },
  {
    title: "Cost-Effective Solution",
    description:
      "Our team focuses on practical architecture and lean delivery to maximize outcomes while keeping development efficient and budget-friendly.",
    icon: "/images/costAffective.png",
    cardTone: "bg-primary/14 border-primary/25",
  },
  {
    title: "On-Time Delivery",
    description:
      "We run clear milestones and disciplined execution cycles to ship on schedule and maintain high quality across every release.",
    icon: "/images/time.png",
    cardTone: "bg-primary/12 border-primary/20",
  },
];

export default function AboutWhySoftbeantech() {
  return (
    <section className="w-full bg-[#e9e9ec] py-20 md:py-24">
      <div className="mx-auto w-[88%] max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold !text-black sm:text-4xl md:text-6xl">
            Why <span className="text-primary">Codexon Solutions?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-base leading-[1.65] text-[#5f6672] sm:text-lg md:text-2xl">
            Here are some reasons why customers choose
            <span className="font-semibold text-primary"> Codexon Solutions </span>
            over a competitor.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {reasons.map((reason) => (
            <motion.article
              key={reason.title}
              className={`min-h-[380px] rounded-[22px] border p-8 shadow-[0_10px_22px_rgba(10,18,40,0.08)] ${reason.cardTone}`}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <Image
                src={reason.icon}
                alt={reason.title}
                width={140}
                height={140}
                className="mx-auto h-[140px] w-[140px] object-contain"
              />

              <h3 className="mt-8 text-center font-display text-2xl font-extrabold !text-black md:text-4xl">
                {reason.title}
              </h3>

              <p className="mt-5 text-center text-base leading-[1.6] text-[#5f6672] md:text-lg">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
