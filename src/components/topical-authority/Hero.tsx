"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  return (
    <div className="relative w-full font-geist overflow-hidden pb-10">
      <div className="relative w-full flex flex-col items-center gap-20 justify-center max-w-[1024px] 2xl:container mx-auto">
        <div className="flex flex-col items-center justify-center max-w-7xl text-white z-10 gap-4 mt-20 md:mt-24 xl:mt-36 px-6 md:px-3">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center font-geist max-w-2xl md:max-w-5xl leading-tight">
          Be seen as the expert.
                      <br />
            <i className="gradient-text not-italic text-transparent bg-clip-text">
              Publish like an expert.
            </i>
          </h1>
          <p className="font-bold text-center font-geist text-base text-white md:text-lg max-w-xl md:max-w-3xl">
            Quickly publish 100 high-ranking articles to your website.{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto mt-16 max-w-6xl text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-[90%] md:w-full flex flex-col justify-center mx-auto items-center gap-12">
          <div className="flex flex-col gap-2 p-3 md:p-5 gradient-border-wrapper">
              <h4 className="font-semibold">Instant Topic Expansion</h4>
              <p>
                Instant Topic Expansion Effortlessly transform a single niche
                into 10 core pillars, each branching into 10 high-impact content
                ideas.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-3 md:p-5 gradient-border-wrapper">
              <h4 className="font-semibold">Expert-Level Article Generation</h4>
              <p>
              Generate 100 SEO-rich, authoritative articles in one click—crafted to position you as a thought leader.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-12">

          <Image
            src="/TopicalHero.svg"
            alt="Topical Authority"
            width={1100}
            height={800}
            priority
            className="w-[85%] md:w-full h-full"
          />
<div className="w-[90%] md:w-full flex flex-col gap-2 p-3 md:p-5 gradient-border-wrapper">
              <h4 className="font-semibold">E-E-A-T Optimized Content</h4>
              <p>
              Align your content with Google’s latest quality standards to boost visibility, credibility, and trust.
              </p>
          </div>

          </div>

<div className="w-[90%] md:w-full flex flex-col mx-auto justify-center items-center gap-8">

          <div className="flex flex-col gap-2 p-3 md:p-5 gradient-border-wrapper">
              <h4 className="font-semibold">Human-Like Writing Output</h4>
              <p>
                AI-generated, human-sounding content that passes detection and
                connects with real readers.
              </p>
          </div>
          <div className="flex flex-col gap-2 p-3 md:p-5 gradient-border-wrapper">
              <h4 className="font-semibold">Built to Captivate & Convert</h4>
              <p>
              Every article is designed not just to inform, but to engage your audience and drive meaningful action.
              </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
