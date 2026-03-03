"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Client Centric Approach",
    description:
      "For every business, customers are always at the center. Being a leading web and mobile app development company.",
    image: "/images/client.png",
  },
  {
    title: "Effective Collaboration",
    description:
      "For every business, customers are always at the center. Being a leading web and mobile app development company.",
    image: "/images/collaboration.png",
    featured: true,
  },
  {
    title: "On-Time Delivery",
    description:
      "For every business, customers are always at the center. Being a leading web and mobile app development company.",
    image: "/images/time.png",
  },
];

export default function AboutHowWeAid() {
  return (
    <section className="w-full bg-[#e9e9ec] py-20 md:py-24">
      <div className="mx-auto w-[88%] max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-extrabold !text-black sm:text-4xl md:text-6xl">
            How We Aid in Brand Development
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-[#5f6672] sm:text-lg md:text-2xl">
            Softbeantech has impressive capabilities to build your website
            creatively and fast. The template has been created with such care that
            it is ready to suit all of your requirements.
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
          {cards.map((card) => (
            <motion.article
              key={card.title}
              className={`grid min-h-[430px] grid-rows-[1.1fr_0.9fr] rounded-[24px] bg-[#f3f3f4] p-6 shadow-[0_8px_18px_rgba(10,18,40,0.08)] transition-all duration-300 ${card.featured ? "border border-primary/50" : "border border-transparent"
                }`}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={250}
                  height={150}
                  className="h-auto w-full max-w-[230px] object-contain"
                />
              </div>

              <div className="flex flex-col items-center justify-start pt-2">
                <h3 className="text-center font-display text-2xl font-extrabold !text-primary md:text-4xl">
                  {card.title}
                </h3>

                <p className="mt-4 text-center text-base leading-[1.55] text-[#5f6672] md:text-lg">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
