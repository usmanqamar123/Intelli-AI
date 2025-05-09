"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxRocket } from "react-icons/rx";

const IntelliHero = () => {

  const tokens =
  typeof window !== "undefined"
    ? localStorage.getItem("intellitokens")
    : null;

  return (
    <div className="relative w-full bg-transparent font-inter">
      <div className="opacity-60 hidden lg:flex">
        {/* Left Side */}
        <Image
          src={"/3dHeroShape1.webp"}
          width={100}
          height={100}
          alt="3DShape"
          className="absolute top-28 left-2"
        />
        <Image
          src={"/3dHeroShape2.webp"}
          width={100}
          height={100}
          alt="3DShape"
          className="absolute top-64 -left-16"
        />
        <Image
          src={"/3dHeroShape3.webp"}
          width={100}
          height={100}
          alt="3DShape"
          className="absolute top-full left-0"
        />
        {/* Rigt Side */}
        <Image
          src={"/3dHeroShape1.webp"}
          width={100}
          height={100}
          alt="3DShape"
          className="absolute top-28 right-2"
        />
        <Image
          src={"/3dHeroShape2.webp"}
          width={100}
          height={100}
          alt="3DShape"
          className="absolute top-60 -right-16"
        />
        <Image
          src={"/3dHeroShape3.webp"}
          width={100}
          height={100}
          alt="3DShape"
          className="absolute top-full right-0"
        />{" "}
      </div>
      <div className="relative w-full flex flex-col items-center gap-20 justify-center max-w-7xl 2xl:container mx-auto">
        {/* GRADIENT */}
        <div className="absolute top-0 h-20 lg:h-28 w-10/12 lg:w-2/3 bg-intelli-gradient blur-[120px]"></div>

        <div className="flex flex-col items-center justify-center max-w-7xl text-white z-10 gap-4 mt-20 md:mt-24 xl:mt-36 px-6 md:px-3">
          {/* TEXT */}
          <p className="font-bold text-center gradient-border p-3 px-16 font-inter uppercase text-xs md:text-sm max-w-2xl md:max-w-3xl">
          The #1 AI Tools Generator for Undetectable SEO-Optimized Writing
</p>

          {/* TITLE */}
          <h1
            className="text-2xl md:text-4xl xl:text-[2.5rem] font-bold text-center uppercase font-inter max-w-2xl md:max-w-5xl"
            style={{ lineHeight: 1.25 }}
          >
          AI will now  {""}
            <i className="bg-intelli-gradient text-transparent bg-clip-text not-italic">
            Research, Create, Optimize
            </i>{" "}
            and Publish Content Practically for Free
          </h1>

          {/* TEXT */}
          <p className="font-extralight text-center max-w-3xl text-sm xl:text-lg">
          IntelliWriter is the first tool that works as your partner to get the total job done! In just minutes you can be generated organic (i.e. free) traffic to your website.          </p>

          {/* BUTTON */}
          <Link href={ tokens? `${process.env.NEXT_PUBLIC_APP}user/dashboard` :`${process.env.NEXT_PUBLIC_APP}auth/login`}>
            <button className="flex gap-4 text-sm md:text-base px-4 md:px-8 xl:px-12 py-3 border-4 border-[#372C53] hover:scale-105 duration-500 font-semibold rounded-lg items-center justify-center bg-intelli-gradient shadow-[0px_14px_40px_0px_#EF2B7040]">
              <RxRocket className="size-5 xl:size-6" />
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntelliHero;
