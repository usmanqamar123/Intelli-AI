"use client";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  return (
    <div className="relative w-full font-geist overflow-hidden py-10 md:py-16 lg:py-20 ">
      <div className="relative w-full flex flex-col items-center gap-20 justify-center max-w-[1024px] 2xl:container mx-auto">
        <div className="flex flex-col items-center justify-center max-w-7xl text-white z-10 gap-4 mt-20 md:mt-24 xl:mt-36 px-6 md:px-3">
          {/* TEXT */}
          <p className="font-bold text-center gradient-border-wrapper rounded-full px-6 py-1 font-geisttext-xs !text-white md:text-sm max-w-2xl md:max-w-3xl">
            Write Better • Rank Higher • Scale Faster
          </p>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl xl:text-[3.5rem] font-bold text-center font-geist max-w-2xl md:max-w-5xl leading-tight">
            Complete AI Domination
            <br />
            <i className="gradient-text not-italic text-transparent bg-clip-text">
              <Typewriter
                words={["Research", "Write", "Publish"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={170}
                deleteSpeed={250}
                delaySpeed={3000}
              />
            </i>
          </h1>

          {/* BUTTON */}
          <Link
            href={
              tokens
                ? `${process.env.NEXT_PUBLIC_APP}user/dashboard`
                : `${process.env.NEXT_PUBLIC_APP}auth/login`
            }
          >
            <button className="flex gap-4 mt-3 text-sm md:text-base px-4 md:px-6 py-3 hover:scale-105 duration-500 font-semibold rounded-full items-center justify-center gradient-bg">
              Start Automation Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
