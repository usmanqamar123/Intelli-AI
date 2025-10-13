"use client";

import { motion } from "framer-motion";
import { BarChart3, KeyRound, BookOpenText, Wrench } from "lucide-react";

export default function WhatYouGet() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-[#FFC553]" />,
      title: "SEO Health Score",
      desc: "Instantly see your article’s overall SEO strength. Get a complete score that highlights content quality, optimization, and performance in one view.",
    },
    {
      icon: <KeyRound className="w-8 h-8 text-[#F64CFF]" />,
      title: "Keyword & Topic Insights",
      desc: "Uncover hidden ranking opportunities. Our AI finds missing semantic keywords and related phrases to boost your topical authority.",
    },
    {
      icon: <BookOpenText className="w-8 h-8 text-[#6B41FF]" />,
      title: "Readability & Structure",
      desc: "Get feedback on your headings, paragraph depth, and engagement level — making your content easier to read and rank higher.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#FFC553]" />,
      title: "Fixes & Recommendations",
      desc: "Actionable steps designed to improve SEO instantly. From meta tags to keyword placement, get AI-backed recommendations that drive growth.",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#0E032D] text-white py-20 font-inter">
      {/* === Background Grid + Gradient === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B094E]/60 via-[#0E032D]/85 to-[#100429]/95" />
        <div className="absolute inset-0 " />
      </div>

      {/* === Decorative Blobs === */}
      <div
        className="absolute w-[260px] h-[260px] blur-[180px] opacity-70"
        style={{
          top: "25%",
          left: "-130px",
          background:
            "linear-gradient(90deg,#6B41FF 0%,#F64CFF 50%,#FFC553 100%)",
        }}
      />
      <div
        className="absolute w-[260px] h-[260px] blur-[180px] opacity-70"
        style={{
          bottom: "15%",
          right: "-130px",
          background:
            "linear-gradient(90deg,#FFC553 0%,#F64CFF 50%,#6B41FF 100%)",
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
          What You’ll{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]">
            Get in Your Report
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/85 max-w-2xl mx-auto text-base sm:text-lg mb-14"
        >
          Your SEO audit goes beyond surface checks. It provides in-depth insights into content structure, keyword strategy, and actionable improvements, helping you outrank your competitors faster.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-[1.2px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(246,76,255,0.4)] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center h-full rounded-2xl bg-[#160A3D]/70 backdrop-blur-md p-8 transition-all duration-300 group-hover:bg-[#1C0F4F]/80">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
