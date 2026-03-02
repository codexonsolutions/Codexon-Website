"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
  {
    id: "01",
    title: "Planning",
    description: "Mapping out project scope, timelines, and resource allocation for a solid foundation.",
  },
  {
    id: "02",
    title: "User Experience",
    description: "Designing intuitive interfaces and seamless user journeys tailored to your users.",
  },
  {
    id: "03",
    title: "The Technical Foundations",
    description: "Setting up robust architecture and scalable tech stacks for long-term reliability.",
  },
  {
    id: "04",
    title: "Build",
    description: "Turning designs into high-performance code with precision and agile execution.",
  },
  {
    id: "05",
    title: "Repeat the cycle",
    description: "Iteratve testing and feedback loops to refine features and ensure top quality.",
  },
  {
    id: "06",
    title: "The Launch",
    description: "Deploying your product to the world with a smooth and scalable rollout strategy.",
  },
];

function SparkIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.8L11.7 7L16 8.7L11.7 10.4L10 14.6L8.3 10.4L4 8.7L8.3 7L10 2.8Z" fill="currentColor" />
    </svg>
  );
}

function ConnectorArrow({ className }: { className?: string }) {
  return (
    <div className={`hidden lg:flex items-center justify-center ${className}`}>
      <motion.svg
        width="100"
        height="40"
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base dotted path - Perfectly centered curve */}
        <motion.path
          d="M10 20C30 5 70 5 90 20"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 6"
          animate={{ strokeDashoffset: [0, -22] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* traveling light pulse - no arrowhead */}
        <motion.path
          d="M10 20C30 5 70 5 90 20"
          stroke="url(#arrowGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="30 120"
          animate={{ strokeDashoffset: [150, -150] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>
    </div>
  );
}

export default function AgileProcess() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section className="relative z-10 -mt-8 w-full overflow-hidden rounded-t-[28px] rounded-b-none bg-gradient-to-br from-[#0d2f8c] via-[#1266c6] to-[#18ace7] px-0 py-10 sm:-mt-10 sm:py-12 lg:-mt-14 lg:py-16">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2.2fr] lg:gap-12">
          <div className="flex flex-col justify-center pt-2">
            <span className="inline-flex w-fit items-center rounded-full border border-white/55 px-5 py-2 text-[14px] font-medium text-white transition-all hover:bg-white/10 cursor-default">
              How We Work
            </span>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.1rem,4.8vw,4.3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              Our Agile Process
            </h2>
            <p className="mt-4 max-w-[30ch] text-[clamp(1rem,1.8vw,1.65rem)] leading-[1.3] text-white/95 transition-opacity">
              We have our unique ways of building your ideas <span className="text-white font-medium">efficiently</span> and quickly.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative group/step transition-all duration-300"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`relative flex min-h-[170px] flex-col justify-between rounded-2xl border transition-all duration-200 cursor-pointer p-5 text-white backdrop-blur-[2px] sm:min-h-[190px] lg:min-h-[220px] ${activeStep === step.id
                    ? "z-[100] border-white/40 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] ring-1 ring-white/20"
                    : "z-10 hover:z-20 border-white/12 bg-[#2f5e9b]/35 hover:border-white/30 hover:bg-[#2f5e9b]/45"
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[14px] font-bold text-white/60 group-hover:text-white/90 transition-colors">
                      {step.id}
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${activeStep === step.id ? "bg-white text-[#1266c6] scale-110" : "bg-white/12 text-white/85"
                        }`}
                    >
                      <SparkIcon />
                    </span>
                  </div>
                  <h3 className="max-w-[14ch] text-[clamp(1.4rem,2vw,1.9rem)] font-bold leading-[1.1] text-white transition-all">
                    {step.id === "04" ? "Build" : step.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {activeStep === step.id && (
                      <motion.div
                        initial={{ opacity: 0, y: index < 3 ? -10 : 10, scale: 0.95, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: index < 3 ? -5 : 5, scale: 0.98, filter: "blur(2px)" }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`absolute left-0 w-full min-w-[240px] pointer-events-none z-[120] ${index < 3 ? "top-[calc(100%+12px)]" : "bottom-[calc(100%+12px)]"
                          }`}
                      >
                        <div className="relative rounded-2xl border border-white/30 bg-white p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                          <div className="flex items-center gap-3 mb-2.5">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1266c6] text-white shadow-sm">
                              <SparkIcon />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1266c6]/80">
                              Phase {step.id}
                            </span>
                          </div>
                          <p className="text-[15px] font-semibold leading-[1.3] tracking-tight text-[#0d2f8c]">
                            {step.description}
                          </p>
                          {/* Arrow tail */}
                          <div
                            className={`absolute left-8 h-4 w-4 rotate-45 bg-white ${index < 3
                              ? "-top-2 border-t border-l border-white/30"
                              : "-bottom-2 border-b border-r border-white/30"
                              }`}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>

                {/* Dotted Arrows - Elevated to z-110 to be on top of cards */}
                {index !== processSteps.length - 1 && (
                  <>
                    {/* Horizontal Arrows - Elevated to z-110 to be on top of cards */}
                    {(index + 1) % 3 !== 0 && (
                      <div className="absolute top-1/2 -right-[62px] hidden xl:block z-[110] pointer-events-none -translate-y-1/2">
                        <ConnectorArrow />
                      </div>
                    )}
                    {/* Horizontal Arrows for 2-col (Tablet) */}
                    {(index + 1) % 2 !== 0 && (
                      <div className="absolute top-1/2 -right-[52px] hidden sm:block xl:hidden z-[110] pointer-events-none -translate-y-1/2">
                        <ConnectorArrow className="scale-[0.8] origin-center" />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
