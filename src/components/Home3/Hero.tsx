"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxRocket } from "react-icons/rx";
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  return (
<div className="relative w-full font-inter overflow-hidden pt-8 ">
{/* Background Checkbox - Top Center */}
      {/* <div className="absolute top-6 left-1/2 -translate-x-1/2 z-0 opacity-10 pointer-events-none ">
        <Image
            src="/Checkbox.svg"
            alt="Checkbox Background"
            width={800}
            height={800}
            priority
          />
      </div> */}

      {/* <div className="absolute top-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px] animate-to-center"></div>

<div className="absolute bottom-0 left-10 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] animate-to-center animation-reverse"></div>

<div className="absolute bottom-0 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px] animate-to-center"></div>

<div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] animate-to-center animation-reverse"></div>

<div className="absolute top-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px] animate-to-center"></div> */}


      <div className="relative w-full flex flex-col items-center gap-20 justify-center max-w-7xl 2xl:container mx-auto">
        <div className="flex flex-col items-center justify-center max-w-7xl text-white z-10 gap-4 mt-20 md:mt-24 xl:mt-36 px-6 md:px-3">
          {/* TEXT */}
          <p className="font-bold text-center gradient-border-wrapper rounded-full px-12 py-1 font-inter uppercase text-xs text-white md:text-sm max-w-2xl md:max-w-3xl">
          Write Better • Rank Higher • Scale Faster
          </p>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl xl:text-[2.5rem] font-bold text-center font-inter max-w-2xl md:max-w-5xl leading-tight">
            Complete AI Domination
            <br />
            <i className="gradient-text not-italic text-transparent bg-clip-text">
              <Typewriter
                words={['Research', 'Write', 'Publish']}
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
            <button className="flex gap-4 mt-3 text-sm md:text-base px-4 md:px-8 xl:px-12 py-3 hover:scale-105 duration-500 font-semibold rounded-full items-center justify-center gradient-bg">
              Start Automation Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
