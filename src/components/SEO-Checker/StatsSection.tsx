"use client";

import { motion } from "framer-motion";
import { TrendingUp, Search, Zap, BarChart3 } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#6B41FF]" />,
      value: "97%",
      label: "Content Accuracy",
      desc: "AI ensures data-backed SEO suggestions that align with top ranking factors.",
      gradient: "from-[#6B41FF] via-[#8F4BFF] to-[#FFC553]",
    },
    {
      icon: <Search className="w-8 h-8 text-[#F64CFF]" />,
      value: "1M+",
      label: "Articles Audited",
      desc: "Trusted by creators and marketers worldwide for fast SEO diagnostics.",
      gradient: "from-[#F64CFF] via-[#FF7BF2] to-[#FFC553]",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#FFC553]" />,
      value: "3s",
      label: "Avg. Audit Time",
      desc: "Get a complete breakdown of your blog’s article seo score in under 3 seconds.",
      gradient: "from-[#FFC553] via-[#F64CFF] to-[#6B41FF]",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#7B41FF]" />,
      value: "89%",
      label: "Ranking Improvement",
      desc: "Users saw significant ranking gains after consistently following our proven insights.",
      gradient: "from-[#7B41FF] via-[#9747FF] to-[#FF9B60]",
    },
  ];

  return (
    <section className="w-full relative bg-[#0E032D] text-white py-14 font-inter overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B094E]/60 via-[#0E032D]/85 to-[#100429]/95" />
        <div className="absolute inset-0 " />
      </div>

      {/* Blobs */}
      <div
        className="absolute w-[240px] h-[240px] blur-[180px] opacity-60"
        style={{
          top: "20%",
          left: "-120px",
          background:
            "linear-gradient(90deg,#6B41FF 0%,#F64CFF 50%,#FFC553 100%)",
        }}
      />
      <div
        className="absolute w-[220px] h-[220px] blur-[180px] opacity-60"
        style={{
          bottom: "20%",
          right: "-110px",
          background:
            "linear-gradient(90deg,#FFC553 0%,#F64CFF 50%,#6B41FF 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-6"
        >
          SEO Insights{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]">
            at a Glance
          </span>
        </motion.h2>

        {/* Subtext */}
        <p className="text-white/85 max-w-2xl mx-auto text-base sm:text-lg mb-14">
          Numbers speak louder than words. Here’s how our article SEO checker has helped creators and marketers transform their SEO performance faster, smarter, and with precision.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Gradient Circle */}
              <div
                className={`relative w-40 h-40 flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr ${stat.gradient} group-hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex flex-col items-center justify-center w-full h-full rounded-full bg-[#160A3D]/80 backdrop-blur-sm">
                  {stat.icon}
                  <h3 className="text-3xl font-bold mt-3">{stat.value}</h3>
                </div>
              </div>

              {/* Label */}
              <h4 className="mt-5 text-lg font-semibold uppercase tracking-wide">
                {stat.label}
              </h4>
              <p className="text-sm text-white/75 max-w-[220px] mt-2">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
