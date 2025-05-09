"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

interface CardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, description }) => (
  <div className="max-w-[1400px] flex flex-col lg:max-w-[360px] h-[300px] rounded-lg p-4 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] hover:scale-105 hover:bg-[#67508471] hover:transition hover:ease-in-out hover:duration-500">
    <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
    <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
    <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>

    <span>
      <Image
        className="w-8 h-8"
        alt={alt}
        loading="lazy"
        width="48"
        height="48"
        decoding="async"
        data-nimg="1"
        // priority={true}
        style={{ color: "transparent" }}
        src={src}
      />
    </span>
    <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold">
      {title}
    </h2>
    <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
      {description}
    </p>
  </div>
);

const Offer = () => {
  const cardData = [
    {
      src: "/ai-bypass/unrivaled.svg",
      alt: "Bypass AI With a 99% Success Rate",
      title: "Unrivaled Bypass AI Technology",
      description:
        "Powered by advanced natural language processing, our AI model analyzes millions of human-written datasets to identify linguistic patterns and styles. It then replicates these patterns, converting AI text into human-like writing.",
    },
    {
      src: "/ai-bypass/ai-detection.svg",
      alt: "Bypass AI With a 99% Success Rate",
      title: "Built-in AI Detection Capabilities",
      description:
        "After humanizing AI-generated content, Intelli Bypass can automatically help you scan the text to determine the likelihood of it getting flagged by the mainstream AI detectors on the market.",
    },
    {
      src: "/ai-bypass/spam-folder.svg",
      alt: "Bypass AI With a 99% Success Rate",
      title: "Avoid Spam Folders",
      description:
        "Intelli Bypass can help prevent your AI-generated emails from getting lost in spam folders, unseen and unread by rewriting it to appear human-written and authentic.",
    },
    {
      src: "/ai-bypass/google-penalties.svg",
      alt: "Bypass AI With a 99% Success Rate",
      title: "Avoid Google Penalties",
      description:
        "With Intelli Bypass, you can get undetectable AI content that sounds authentically human. This prevents the risk of facing Google penalties that could contribute to a drastic decline in website traffic.",
    },
    {
      src: "/ai-bypass/paraphrasing.svg",
      alt: "Bypass AI With a 99% Success Rate",
      title: "Expert-level Paraphrasing",
      description:
        "Instead of simply spinning content, Intelliwriter AI Humanizer is an anti AI detector that can produce material that appears human-written through sophisticated content restructuring and rewriting techniques.",
    },
  ];

  return (
    <div className="max-w-[1400px] py-10 md:py-14 lg:py-16 w-[90%] px-4 mx-auto flex flex-col items-center gap-[64px] lg:flex-row md:gap-5 lg:gap-8">
      <div className="flex flex-col w-full lg:w-1/3 items-center shrink-0 gap-6 ">
        <span className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] lg:text-start text-center font-normal lg:w-full">
          Bypass{" "}
          <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
            AI
          </span>{" "}
          With a 99% Success Rate
        </span>
        <p className="text-center md:text-start md:text-[21px] text-[16px] font-[500] w-[80%] mx-auto md:w-full  !text-white leading-[22px] md:leading-[36px]">
          Our AI humanizer help you handle AI text in one seamless workflow.
          Here are some of their outstanding features:
        </p>
        <Link href={`${process.env.NEXT_PUBLIC_APP}auth/register`}>
          <Button
            title="Make AI Text Undetectable for Free"
            btnType="button"
            className="!w-fit"
          />
        </Link>
      </div>
      {/* Right section start */}
      <div className="w-full md:w-2/3  flex flex-col md:flex-row flex-wrap gap-6 justify-center">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
