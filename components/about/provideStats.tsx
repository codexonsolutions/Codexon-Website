"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Professionals Team", dot: "bg-primary/12", text: "text-primary" },
  { value: "3+", label: "Years of Experience", dot: "bg-primary/16", text: "text-primary-hover" },
  { value: "25", label: "Projects Delivered", dot: "bg-primary/10", text: "text-primary" },
  { value: "100%", label: "Happy Client", dot: "bg-primary/14", text: "text-primary-hover" },
];

export default function AboutProvideStats() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/team.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-primary/90" />

      <div className="relative z-10 mx-auto w-[88%] max-w-7xl">
        <h2 className="text-center font-display text-3xl font-extrabold !text-white sm:text-4xl md:text-6xl">
          We Provide with
        </h2>

        <motion.div
          className="mt-10 rounded-[24px] bg-[#f3f3f4] p-8 shadow-[0_16px_30px_rgba(15,30,90,0.22)] md:mt-12 md:p-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stats.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div
                  className={`inline-flex h-33 w-33 items-center justify-center rounded-full text-5xl font-extrabold ${item.dot} ${item.text}`}
                >
                  {item.value}
                </div>
                <p className="mt-6 text-2xl font-bold text-[#1d2631] md:text-3xl">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
