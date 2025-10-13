"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, EyeOff, ShieldCheck } from "lucide-react";

export default function ProblemsSolutions() {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-[#F64CFF]" />,
      title: "Generic Reports",
      desc: "Most tools give you the same checklist, not insights tailored to your article or niche.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#FFC553]" />,
      title: "Slow & Manual",
      desc: "Traditional audits take hours and still miss hidden technical and topical gaps.",
    },
    {
      icon: <EyeOff className="w-6 h-6 text-[#6B41FF]" />,
      title: "No Real Visibility",
      desc: "You never see how your article truly performs against competitors in SERPs.",
    },
  ];

  return (
    <section className="w-full relative bg-[#0E032D] text-white py-24 font-inter overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B094E]/60 via-[#0E032D]/85 to-[#100429]/95" />
        <div className="absolute inset-0 " />
      </div>

      {/* Blobs */}
      <div
        className="absolute w-[300px] h-[300px] blur-[220px] opacity-60"
        style={{
          top: "50%",
          left: "-150px",
          background:
            "linear-gradient(90deg, #6B41FF 0%, #F64CFF 50%, #FFC553 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-[28px] sm:text-[36px] md:text-[42px] font-bold"
        >
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]">
            Intelli SEO Analyzer
          </span>{" "}
         
        </motion.h2>

        <p className="text-center text-white/85 max-w-3xl mx-auto mt-4 text-base sm:text-lg leading-relaxed">
          Most SEO audits only scratch the surface. We go beyond, detecting hidden ranking blockers, content gaps, and optimization opportunities so you can dominate search results effortlessly.
        </p>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Problems */}
          <div className="space-y-6">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-start gap-4 bg-[#160A3D]/80 backdrop-blur-md p-5 rounded-xl">
                  <div className="shrink-0">{p.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-[2px] bg-gradient-to-tr from-[#6B41FF] via-[#F64CFF] to-[#FFC553] hover:shadow-[0_0_25px_rgba(246,76,255,0.4)] transition-all duration-300"
          >
            <div className="bg-[#160A3D]/90 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center">
              <ShieldCheck className="w-12 h-12 text-[#FFC553] mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                AI-Powered Deep Monitoring
              </h3>
              <p className="text-white/80 text-base mb-6 max-w-md">
                Our AI continuously scans your article structure, topical depth,
                keyword use, and competitor benchmarks, giving you real-time
                updates and actionable insights to stay ahead.
              </p>
              <button className="relative h-[48px] w-[180px] rounded-md font-semibold text-white text-[15px] overflow-hidden transition-transform hover:scale-[1.03]">
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]" />
                <span className="relative z-10">Monitor My Blog</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
