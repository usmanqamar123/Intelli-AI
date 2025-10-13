"use client";

import { motion } from "framer-motion";
import { Lightbulb, Link2, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Link2 className="w-8 h-8 text-[#FFC553]" />,
      title: "Step 1 — Paste URL",
      desc: "Enter any blog article link you want to audit. Our system accepts any live page for instant analysis.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#F64CFF]" />,
      title: "Step 2 — AI Analysis",
      desc: "Our AI engine scans your article’s structure, keywords, and performance to uncover strengths and ranking gaps.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#6B41FF]" />,
      title: "Step 3 — Get Insights",
      desc: "Receive a complete SEO report with your score, actionable fixes, and growth recommendations in seconds.",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#0E032D] text-white py-20 font-inter">
      {/* === Background Grid + Gradient === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B094E]/70 via-[#0E032D]/85 to-[#100429]/95" />
        <div className="absolute inset-0 " />
      </div>

      {/* === Decorative Blobs === */}
      <div
        className="absolute w-[280px] h-[280px] blur-[200px] opacity-70"
        style={{
          top: "20%",
          left: "-150px",
          background:
            "linear-gradient(90deg, #6B41FF 0%, #F64CFF 50%, #FFC553 100%)",
        }}
      />
      <div
        className="absolute w-[280px] h-[280px] blur-[200px] opacity-70"
        style={{
          bottom: "10%",
          right: "-150px",
          background:
            "linear-gradient(90deg, #FFC553 0%, #F64CFF 50%, #6B41FF 100%)",
        }}
      />

      {/* === Content === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-6"
        >
          Working of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]">
            Content Analyzer
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/85 max-w-2xl mx-auto text-base sm:text-lg mb-14"
        >
          Auditing an article is simple and lightning fast. Follow these three
          easy steps to uncover your content’s SEO potential.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
