"use client";
import Image from "next/image";
import React from "react";

type Feature = {
  icon: string;
  title: string;
};

const features: Feature[] = [
  {
    icon: "ai-article/real-time data.svg",
    title: "Real-Time Data On Latest Topics",
  },
  {
    icon: "/ai-article/fast-checked.svg",
    title: "Fact-Checked Cited Content",
  },
  {
    icon: "/ai-article/competitor-semantic.svg",
    title: "Competitor Semantic Analysis",
  },
  {
    icon: "/ai-article/in-depth web.svg",
    title: "In-Depth Web Research",
  },
  {
    icon: "/ai-article/generate-images.svg",
    title: "Generate Images",
  },
  {
    icon: "/ai-article/one-click wordpress.svg",
    title: "One-Click Wordpres Publish",
  },
  {
    icon: "/ai-article/word-length-control.svg",
    title: "Word Length Control ( 5K Words )",
  },
  {
    icon: "ai-article/real-time data.svg",
    title: "Brand Voice Style Customization",
  },
  {
    icon: "ai-article/real-time data.svg",
    title: "Built in SEO Optimization",
  },
  {
    icon: "ai-article/real-time data.svg",
    title: "Advance Content Analysis",
  },
];

const FeaturesFlex = () => {
  return (
    <div className="bg-[#0F062C] w-full p-4 md:p-6">
      <div className="flex flex-col gap-4 items-center justify-center max-w-6xl mx-auto">
        {/* First Row: 3 Cards */}
        <div className="hidden xl:flex gap-4 flex-wrap justify-center">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        {/* Second Row: 4 Cards */}
        <div className="hidden xl:flex gap-4 flex-wrap justify-center">
          {features.slice(3, 7).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        {/* Third Row: 3 Cards */}
        <div className="hidden xl:flex gap-4 flex-wrap justify-center">
          {features.slice(7, 10).map((feature, index) => (
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
    className="flex items-center gap-3 text-white px-4 py-3 rounded-lg w-[260px] min-h-[60px] shadow-md"
    style={{
      backgroundImage: "linear-gradient(225deg, #471C7C 0%, #7628D6 100%)",
    }}
  >
    <div className="rounded-md">
      <Image
        src={feature.icon}
        width={40}
        height={40}
        alt={feature.title}
        className="text-[#0F062C]"
      />
    </div>
    <span className="text-sm xl:text-base font-medium">{feature.title}</span>
  </div>
);

export default FeaturesFlex;
