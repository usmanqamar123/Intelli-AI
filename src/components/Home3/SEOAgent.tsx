import React from "react";
import {
  FaRobot,
  FaCheckCircle,
  FaArrowRight,
  FaWordpress,
  FaChartLine,
  FaPenNib,
  FaMagic,
} from "react-icons/fa";
import {
  FaUsers,
  FaFileAlt,
  FaPenFancy,
  FaChartPie,
  FaStar,
} from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";
import Image from "next/image";

const SEOAgent = () => {
  const agents = [
    {
      id: 1,
      title: "AI Content Creation",
      desc: "Generate high-converting SEO content instantly.",
      color: "#9810FA",
      icon: <FaPenNib />,
      points: [
        "AI Blog Writer",
        "SEO Optimized Articles",
        "One Click Generation",
        "Keyword Optimization",
        "Human-Like Content",
        "Bulk Content Creation",
      ],
    },
    {
      id: 2,
      title: "SEO Tools Suite",
      desc: "Powerful SEO tools to boost rankings faster.",
      color: "#155DFC",
      icon: <FaChartLine />,
      points: [
        "Keyword Research",
        "SEO Score Checker",
        "Meta Generator",
        "Competitor Analysis",
        "Internal Linking",
        "SEO Audit Reports",
      ],
    },
    {
      id: 3,
      title: "WordPress SEO Super Agents",
      desc: "Complete SEO automation inside WordPress.",
      color: "#009966",
      icon: <FaWordpress />,
      points: [
        "Meta Data Agent",
        "Indexation Agent",
        "Robots.txt Agent",
        "Content Optimizer",
        "SEO Tracking",
        "Auto Content Updates",
      ],
    },
    {
      id: 4,
      title: "Blog Automation",
      desc: "Automate publishing and scale your blogs.",
      color: "#E60076",
      icon: <MdAutoAwesome />,
      points: [
        "Auto Blog Publishing",
        "AI Scheduling",
        "Topic Clustering",
        "Bulk Post Creation",
        "Auto Internal Linking",
        "SEO Automation",
      ],
    },
  ];

  return (
    <div className="relative w-full max-w-[1400px] mx-auto py-16 px-4 xl:px-0 z-10">
       <Image src="/purple-spot.webp" alt="" width={180} height={180} className="absolute top-4 left-2 md:left-6 opacity-70 pointer-events-none -z-[1]" aria-hidden />
       <Image src="/blue-spot.webp" alt="" width={180} height={180} className="absolute top-4 right-2 md:right-6 opacity-70 pointer-events-none -z-[1] scale-x-[-1]" aria-hidden />
      
      {/* Heading */}
<div className="text-center mb-8 flex flex-col items-center">
       <p className="gradient-border-wrapper gradient-text-new rounded-full px-5 py-2 mb-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/90 uppercase flex items-center justify-center gap-2">
    <FaMagic className="text-[#A855F7] text-base shrink-0" />
    All-in-one AI SEO Platform
  </p>

        <h2 className="text-3xl md:text-5xl font-bold font-jakarta text-white leading-tight">
          Everything You Need to
          <br />
          <span className="gradient-text">
            Create, Optimize & Rank Content
          </span>
        </h2>
          <p className="text-sm md:text-base text-white/80 text-center max-w-lg mx-auto mt-3">
          Powerful AI tools, advance SEO tools, WordPress SEO Super Agent, and Blog Automation - All in one place
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {agents.map((agent) => (
          <div
            key={agent.id}
            className="rounded-3xl bg-[#010415] border-[0.001px] p-6 flex flex-col justify-between hover:-translate-y-2 duration-500"
            style={{ borderColor: agent.color }}
         >

            {/* Top */}
            <div>

              {/* Icon + Content */}
              <div className="flex items-start gap-4 mb-6">

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    backgroundColor: `${agent.color}20`,
                    color: agent.color,
                  }}
                >
                  {agent.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {agent.title}
                  </h3>

                  <p className="text-sm text-white/60 mt-1 leading-relaxed">
                    {agent.desc}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-4 mt-8">

                {agent.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle
                      className="text-sm shrink-0"
                      style={{ color: agent.color }}
                    />

                    <p className="text-sm text-white/80">
                      {point}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* Button */}
            <button
              className="mt-10 w-full rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition hover:scale-105"
              style={{
                backgroundColor: `${agent.color}20`,
                color: "white",
                border: `1px solid ${agent.color}40`,
              }}
            >
              Explore SEO Agent
              <FaArrowRight className="text-xs" />
            </button>

          </div>
        ))}

      </div>

   {/* Stats Section */}
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

  {/* Active Users */}
  <div className="border border-white/10 rounded-2xl bg-[#0D0D0D] p-5 flex items-center gap-4">
    <div className="w-14 h-14 rounded-2xl bg-[#9810FA]/20 flex items-center justify-center text-[#9810FA] text-2xl">
      <FaUsers />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">25,000+</h3>
      <p className="text-sm text-white/60">Active Users</p>
    </div>
  </div>

  {/* Words Generated */}
  <div className="border border-white/10 rounded-2xl bg-[#0D0D0D] p-5 flex items-center gap-4">
    <div className="w-14 h-14 rounded-2xl bg-[#155DFC]/20 flex items-center justify-center text-[#155DFC] text-2xl">
      <FaPenFancy />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">3M+</h3>
      <p className="text-sm text-white/60">Words Generated</p>
    </div>
  </div>

  {/* Content Pieces */}
  <div className="border border-white/10 rounded-2xl bg-[#0D0D0D] p-5 flex items-center gap-4">
    <div className="w-14 h-14 rounded-2xl bg-[#009966]/20 flex items-center justify-center text-[#009966] text-2xl">
      <FaFileAlt />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">1M+</h3>
      <p className="text-sm text-white/60">Content Pieces</p>
    </div>
  </div>

  {/* SEO Reports */}
  <div className="border border-white/10 rounded-2xl bg-[#0D0D0D] p-5 flex items-center gap-4">
    <div className="w-14 h-14 rounded-2xl bg-[#E60076]/20 flex items-center justify-center text-[#E60076] text-2xl">
      <FaChartPie />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">200K</h3>
      <p className="text-sm text-white/60">SEO Reports</p>
    </div>
  </div>

  {/* Rating */}
  <div className="border border-white/10 rounded-2xl bg-[#0D0D0D] p-5 flex items-center gap-4">
    <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-2xl">
      <FaStar />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">4.9/5</h3>
      <p className="text-sm text-white/60">User Rating</p>
    </div>
  </div>

</div>
    </div>
  );
};

export default SEOAgent;