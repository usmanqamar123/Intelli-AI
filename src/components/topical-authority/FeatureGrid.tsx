"use client";
import Image from "next/image";
import React from "react";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "/ai-article/real-time data.svg",
    title: "instant Topic Expansion",
    description:
      "Effortlessly transform a single niche into 10 core pillars, each branching into 10 high-impact content ideas.",
  },
  {
    icon: "/ai-article/fast-checked.svg",
    title: "Expert-Level Article Generation",
    description:
      "Generate 100 SEO-rich, authoritative articles in one click—crafted to position you as a thought leader.",
  },
  {
    icon: "/ai-article/competitor-semantic.svg",
    title: "E-E-A-T Optimized Content",
    description:
      "Align your content with Google’s latest quality standards to boost visibility, credibility, and trust.",
  },
  {
    icon: "/ai-article/in-depth web.svg",
    title: "Human-Like Writing Output",
    description:
      "AI-generated, human-sounding content that passes detection and connects with real readers.",
  },
  {
    icon: "/ai-article/generate-images.svg",
    title: "Built to Captivate & Convert",
    description:
      "Every article is designed not just to inform, but to engage your audience and drive meaningful action.",
  },
];

const FeaturesFlex = () => {
  return (
    <div className="bg-[#0F062C] w-full px-4 md:px-6">
      <div className="flex flex-col gap-4 items-center justify-center max-w-7xl mx-auto">
        {/* First Row: 3 Cards */}
        <div className="hidden xl:flex gap-4 flex-wrap justify-center">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        {/* Second Row: 4 Cards */}
        <div className="hidden xl:flex gap-4 flex-wrap justify-center">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* MOBILE AND TABLET */}
        <div className="flex xl:hidden gap-4 flex-wrap justify-center">
          {features.slice(0, 8).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <div
    className="flex flex-col gap-3 text-white p-4 rounded-lg w-[30%] min-h-[60px] shadow-md"
    style={{
      backgroundImage: "linear-gradient(225deg, #471C7C 0%, #7628D6 100%)",
    }}
  >
    <div className="flex items-center gap-3">
      <div className="rounded-md">
        <Image
          src={feature.icon}
          width={40}
          height={40}
          alt={feature.title}
          className="text-[#0F062C]"
        />
      </div>
      <span className="text-sm xl:text-base font-semibold">
        {feature.title}
      </span>
    </div>
    <p className="text-sm text-gray-200 mt-1">{feature.description}</p>
  </div>
);

export default FeaturesFlex;
