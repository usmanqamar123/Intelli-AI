"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SiCodemagic } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import {
  FaPenNib,
  FaWordpress,
  FaTools,
  FaRobot,
  FaMagic,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

interface HeroProps {
  onAnalyze: (url: string) => void;
}

const Hero = ({ onAnalyze }: HeroProps) => {
  const [url, setUrl] = useState<string>("");

  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  const handleClick = () => {
    if (!url.trim()) return alert("Please enter a valid article URL.");
    onAnalyze(url);
  };


  const features = [
  {
    title: "AI Blog Writer",
    icon: <FaPenNib className="text-xs xl:text-sm" />,
  },
  {
    title: "Wordpress SEO Plugin",
    icon: <FaWordpress className="text-xs xl:text-sm" />,
  },
  {
    title: "SEO Tools",
    icon: <FaTools className="text-xs xl:text-sm" />,
  },
  {
    title: "Blog Automation",
    icon: <FaRobot className="text-xs xl:text-sm" />,
  },
  {
    title: "AI Humanizer",
    icon: <FaMagic className="text-xs xl:text-sm" />,
  },
  {
    title: "Ranking Tracker",
    icon: <FaChartLine className="text-xs xl:text-sm" />,
  },
];

  return (
    <div className="relative w-full font-geist overflow-hidden py-10 md:py-16 xl:py-0 xl:pb-28">

       {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/Hero-Background.svg"
        alt="Background"
      width={1920}
      height={1080}
        priority
        className="object-cover w-full h-full"
      />
    </div>

      <div className=" relative w-full flex flex-col lg:flex-row items-center gap-14 lg:gap-5 max-w-[1240px] 2xl:max-w-[1420px] mx-auto mt-20 md:mt-24 xl:mt-36">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center lg:items-start justify-center text-white z-10 gap-4 w-full lg:w-1/2 md:ml-10">
               <p className="gradient-border-wrapper gradient-text-new rounded-full px-5 py-2 mb-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/90 uppercase flex items-center justify-center gap-2">
             <SiCodemagic className="text-[#A855F7] text-base shrink-0" />
             All-in-one AI SEO Platform
           </p>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-center lg:text-left font-jakarta !leading-tight">
            AI SEO Platform That <br />
            <i className="gradient-text not-italic text-transparent bg-clip-text">
              Write, Optimize, and Ranks 
              {/* <Typewriter
                words={["Blog Automation", "Blog Writer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={170}
                deleteSpeed={250}
                delaySpeed={3000}
              /> */}
            </i> <br />
            Your Content
          </h1>

          <p className="w-11/12 md:w-[85%] lg:w-[90%] pt-3 text-center lg:text-left text-white text-sm md:text-base lg:text-lg">
            Create SEO-friendly blogs, articles, and website content in minutes
            with IntelliWriter, <strong>No.1 AI Content Writer for SEO.</strong>{" "}
            Automate research, writing, and publishing while keeping your
            content human-like and optimized for Google rankings.
          </p>

<div className="flex flex-row gap-10">
          <Link
            href={
              tokens
                ? `${process.env.NEXT_PUBLIC_APP}user/dashboard`
                : `${process.env.NEXT_PUBLIC_APP}auth/login`
            }
            className="flex gap-4 mt-5 text-sm md:text-base px-6 md:px-8 py-4 hover:scale-105 duration-500 font-semibold rounded-lg items-center justify-center gradient-bg"
            style={{ minWidth: "48px", minHeight: "48px" }}
            role="button"
          >
            Start Automation Now
                          <FaArrowRight className="text-xs" />
          </Link>

          <Link
            href={
              tokens
                ? `${process.env.NEXT_PUBLIC_APP}user/dashboard`
                : `${process.env.NEXT_PUBLIC_APP}auth/login`
            }
            className="flex gap-4 mt-5 text-sm md:text-base border border-white/20 px-6 md:px-8 py-4 hover:scale-105 duration-500 font-semibold rounded-lg items-center justify-center"
            style={{ minWidth: "48px", minHeight: "48px" }}
            role="button"
          >
            Explore SEO Agents Now
                          <FaArrowRight className="text-xs" />
          </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
  {features.map((item, index) => (
    <div
      key={index}
      className="flex justify-center items-center gap-2 px-1 py-2 rounded-xl bg-[#0B0111] border-[1.15px] border-[#FFFFFF4D]"
    >
      <div className="flex items-center justify-center text-[#D1D5DC]">
        {item.icon}
      </div>

      <span className="text-sm xl:text-base font-medium text-[#D1D5DC]">
        {item.title}
      </span>
    </div>
  ))}
</div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[90%] lg:w-1/2 flex justify-center lg:justify-center">
          <Image
            src="/HeroSection.webp"
            alt="AI Super SEO Agents"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
