"use client";
import React from "react";
import Image from "next/image";
import {
  contentAtScale,
  copyLeaks,
  crossPlag,
  gptZero,
  sapling,
  writer,
  zeroGpt,
  bypassHero,
} from "../../../public/index";
import Features from "./Features";
import Offer from "./offer";
import Humanizer from "./humanizer";
import Match from "./match";
import { AIBypassFAQs } from "@/constants/FaqsData";
import { FAQs } from "@/components";
import Link from "next/link";
import Button from "@/components/Button";

const BypassPage = () => {
  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;
  const toolData = [
    { src: gptZero, alt: "GPTZero" },
    { src: copyLeaks, alt: "Copyleaks" },
    { src: zeroGpt, alt: "ZeroGPT" },
    { src: crossPlag, alt: "Crossplag" },
    { src: sapling, alt: "Sapling" },
    { src: writer, alt: "Writer" },
    { src: contentAtScale, alt: "Content at Scale" },
  ];
  const features = [
    {
      icon: "🌐",
      title: "Humanize all AI text",
      description: "ChatGPT, GPT-4, Bard, …",
    },
    {
      icon: "👍",
      title: "AI detection bypasser",
      description: "Bypass all popular AI detectors",
    },
    {
      icon: "💯",
      title: "Original meaning kept",
      description: "100% accuracy ensured",
    },
    {
      icon: "⚡",
      title: "Streamlined process",
      description: "Fast and easy steps",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center my-16">
      {/* section 1 code */}
      {/* bg-gradient-to-b from-[#471c7c]/40 to-[#030616]/20 backdrop-blur-sm
       */}
      <div className="w-full h-full hero-section ">
        <div className="max-w-[1400px] md:w-[90%] w-full mx-auto px-2 md:px-0 py-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-white flex flex-col justify-center gap-9">
            <h1 className="flex justify-center items-center">
              <span className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] lg:text-start  text-center font-normal lg:w-full">
                AI{" "}
                <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
                  Humanizer
                </span>{" "}
              </span>
            </h1>

            <p className=" lg:text-start md:text-[21px] text-[16px] font-[500] w-[80%] mx-auto md:w-full  !text-white text-justify leading-[22px] md:leading-[36px]">
              Generate human-like, undetectable writing with Intelli AI
              Humanizer. Plagiarism-free guaranteed! Trained on millions of
              datasets of human-written content, our AI bypasser uses
              sophisticated algorithmic technology that analyzes and replicates
              the known patterns of human writing to perfectly convert AI text
              to human.
            </p>
            <div className="w-fit mx-auto lg:mx-0 justufy-center lg:justify-start text-center lg:text-left  leading-[52px]">
              <Link
                href={
                  tokens
                    ? `${process.env.NEXT_PUBLIC_APP}user/ai-humanizer`
                    : `${process.env.NEXT_PUBLIC_APP}auth/register`
                }
              >
                <Button title="Try Now !" btnType="button" />
              </Link>
            </div>
          </div>
          <div className=" relative rounded-[24px] mt-4 md:mt-0 ">
            <div className="relative overflow-hidden rounded-[24px]">
              <Image
                src={bypassHero}
                alt="AI Humanizer"
                width={0}
                height={0}
                priority={true}
                sizes="(max-width: 640px) 100vw, 2000px"
                className="h-auto md:w-[30rem] md:h-[25rem] z-10 "
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* features  code*/}
      <Features />

      {/* section 4 code */}
      <div className="max-w-[1400px] text-center w-full mx-auto h-auto flex flex-col py-10 md:py-14 lg:py-16 gap-12">
        <div className="mx-auto w-full px-4">
          <span className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] text-center font-normal lg:w-full">
            Humanize{" "}
            <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
              AI Text And Bypass
            </span>{" "}
            Detectors
          </span>
        </div>
        <div className="mx-auto max-w-[1150px]">
          <p className="text-center  md:text-[21px] text-[16px] font-[500] w-[100%] md:max-w-[73%] mx-auto md:w-full  !text-white leading-[22px] md:leading-[36px]">
            Our undetectable AI humanizer can help you Bypass AI detectors
            effectively, including the most stringent ones in the market.
          </p>
        </div>
        {/* working with images  */}
        <div className="w-[80%] mx-auto  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-4 place-items-center">
          {toolData.map((tool, index) => (
            <span
              key={index}
              className="flex flex-col gap-2 
               !text-white text-base md:text-[15px] font-[300] items-center"
            >
              <Image src={tool.src} width={80} height={60} alt={tool.alt} />
              {tool.alt}
            </span>
          ))}
        </div>
      </div>

      {/* offer code */}
      <Offer />

      {/* humanize code */}
      <Humanizer />
      {/* match code*/}
      <Match />
      {/* undetectable */}
      <div className="max-w-[1400px] w-[90%] px-4 mx-auto py-10 md:py-14 lg:py-16 flex flex-col gap-12">
        <div className="mx-auto w-full px-4 ">
          <h2 className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] text-center font-normal lg:w-full">
            Undetectable{" "}
            <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
              AI Writer
            </span>{" "}
            You Can Trust
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1f1738] to-[#3b2d5c] p-4 rounded-lg"
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <h2 className="!text-white text-[22px] md:text-[20px] xl:text-[22px] font-semibold">
                  {feature.icon} {feature.title}
                </h2>
                <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* faqs */}
      <div className="max-w-[1400px]">
        <FAQs faqs={AIBypassFAQs} />
      </div>
    </div>
  );
};

export default BypassPage;
