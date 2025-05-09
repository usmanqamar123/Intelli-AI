"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaMagic } from "react-icons/fa";

const SeoHero = () => {
  const [topic, setTopic] = useState(""); // State to manage the input value

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value); // Update the input value
  };

  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  return (
    <div className="relative w-full bg-transparent">
      <div className="relative w-full flex flex-col items-center gap-20 justify-center max-w-7xl 2xl:container mx-auto">
        {/* GRADIENT */}
        <div className="absolute top-0 h-20 lg:h-[5.5rem] w-10/12 lg:w-2/3 bg-seo-gradient blur-[120px]"></div>

        <div className="flex flex-col items-center justify-center max-w-6xl text-white z-10 gap-4 mt-10 md:mt-20 xl:mt-[5.5rem] px-6 md:px-3">
          {/* TEXT */}
          <p className="font-bold text-center text-xs md:text-sm max-w-3xl">
            The #1 AI Article Writer for Undetectable SEO-Optimized Writing
          </p>

          {/* TITLE */}
          <h1
            className="text-2xl md:text-4xl xl:text-[2.5rem] !font-extrabold text-center uppercase md:max-w-5xl"
            style={{ lineHeight: 1.25 }}
          >
            AI SEO {""}
            <i
              className="text-transparent !font-extrabold bg-clip-text not-italic"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #6B41FF 27%, #F64CFF 68%)",
              }}
            >
              ARTICLE WRITER
            </i>{" "}
          </h1>

          {/* TEXT */}
          <p className="font-extralight text-center max-w-4xl text-sm xl:text-base">
            Boost your content game with our AI SEO Article Writer, effortlessly
            generate high-quality, SEO-optimized articles complete with
            real-time SEO scoring, in-depth content analysis, and stunning
            AI-generated images. Publish directly to WordPress with one click
            and watch your traffic grow.
          </p>

          {/* BUTTON */}
          <div className="mt-10 md:mt-14 w-full max-w-4xl shadow-[0px_14px_40px_0px_#EF2B7040] bg-dark-purple-gradient rounded-md p-[2px]">
            <div className="w-full bg-[#0F062C] rounded-md flex flex-col md:flex-row items-center justify-between">
              {/* Input field */}
              <input
                type="text"
                value={topic}
                onChange={handleInputChange}
                className="w-full md:w-[calc(100%-200px)] bg-transparent rounded-md px-4 py-3 text-base font-normal text-gray-100 placeholder-gray-300 focus:outline-none"
                placeholder="Write an article for 'Famous Literary Figures and Their Impact on Literature'"
              />
              <Link
                href={
                  tokens
                    ? `${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`
                    : `${process.env.NEXT_PUBLIC_APP}auth/login`
                }
              >
                <button className="w-full rounded-b-md md:rounded-md md:w-fit flex gap-4 text-sm md:text-base px-4 py-1 md:px-4 md:py-3 font-semibold items-center justify-center bg-intelli-gradient">
                  <FaMagic className="size-4 xl:size-5" />
                  Generate Article
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoHero;
