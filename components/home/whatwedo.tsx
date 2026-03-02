"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    title: "Talent\nAugmentation",
    description:
      "Add vetted engineers, designers, and QA specialists to your team in days so delivery stays on schedule without long hiring cycles.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2.8L6.2 10.2H9.6L8.8 17.2L13.8 9.8H10.4L11.2 2.8H10Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Product\nEngineering",
    description:
      "From architecture to launch, we build reliable web and mobile products with clean code, measurable quality, and room to scale.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6.5 6.8H13.5M6.5 10H10.8M6.5 13.2H12.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Startup\nServices",
    description:
      "Validate faster with MVP strategy, rapid prototyping, and iterative releases that turn early feedback into product traction.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.2 12.8L9 8L12 11L15.8 7.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.8 7.2H15.8V10.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Technology\nConsulting",
    description:
      "Get clear technical direction on architecture, cloud, security, and modernization so every engineering decision supports business goals.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2.8V5.2M10 14.8V17.2M2.8 10H5.2M14.8 10H17.2M4.8 4.8L6.5 6.5M13.5 13.5L15.2 15.2M15.2 4.8L13.5 6.5M6.5 13.5L4.8 15.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="w-full bg-[#e9e9ec] pb-20 pt-10 md:pb-24 md:pt-14 font-sans">
      <div className="mx-auto w-[80%]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto flex w-fit items-center gap-2 rounded-full bg-[#f3f3f4] px-5 py-2 text-[14px] font-medium text-[#1b1b1b]"
        >
          <span>What We Do</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ece6ff] text-[#6b4df2]">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2.7L11.8 7L16.3 7.4L12.9 10.4L14 14.8L10 12.4L6 14.8L7.1 10.4L3.7 7.4L8.2 7L10 2.7Z" fill="currentColor" />
            </svg>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 max-w-[28ch] text-center font-display text-[clamp(1.9rem,4.1vw,4rem)] font-semibold leading-[1.15] tracking-[-0.03em] !text-black"
        >
          With Codexon, You perform better.
          <br className="hidden md:block" />
          <span className="md:inline"> Always! It is our guarantee!</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, backgroundColor: "#ffffff", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="rounded-2xl bg-[#f1f1f2] p-6 group cursor-pointer"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ece9f8] text-[#6b4df2] transition-colors group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </span>
              <h3 className="mt-6 text-[26px] font-semibold leading-[1.2] !text-black whitespace-pre-line">
                {service.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.6] text-[#676d78] font-sans">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
