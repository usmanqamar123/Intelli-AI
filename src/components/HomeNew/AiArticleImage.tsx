import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightFill } from "react-icons/ri";

const AiArticleImage = () => {
  return (
    <div className="relative w-full bg-transparent font-inter py-10 px-4">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold max-w-3xl">
          SEO Article Writer for{" "}
          <i
            className="not-italic text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(88.14deg, #BFAAFF 0%, #6B41FF 31%, #F64CFF 76%, #FFC553 100%)",
            }}
          >
            Smarter Blogging
          </i>
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-xl mt-4">
          Generate high-ranking content, analyze SEO performance, and publish
          directly to your WordPress site effortlessly.
        </p>
      </div>

      <div className="relative w-full py-8">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 items-center justify-center">
          <div className="w-full flex flex-col gap-8 md:gap-10 lg:gap-12">
            <div className="group relative gradient-border rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C0F3A] to-[#2A1A5E] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300 p-5 sm:p-6 md:p-8 lg:p-10 border border-[#a87fdb]/20 hover:border-[#a87fdb]/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(97,0,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-10 lg:gap-12 relative z-10">
                
                {/* Image */}
                <div className="w-full lg:w-[65%] transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/SEO Article.png"
                    width={950}
                    height={900}
                    alt="Ai Article Writer"
                    className="w-full h-auto rounded-xl"
                  />
                </div>

                <div className="w-full lg:w-[35%] text-white flex flex-col items-center lg:items-start">
                  <Image
                    src="/SEOArticle.svg"
                    width={600}
                    height={600}
                    alt="Ai Article Writer"
                    className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md hidden sm:block"
                  />
                  <Link href={`${process.env.NEXT_PUBLIC_APP}auth/login`}>
                    <button className="mt-2 sm:mt-6 px-4 py-2 bg-[#6B41FF] text-white rounded-xl font-semibold hover:bg-[#6B41FF]/50 transition duration-300 flex items-center gap-2 text-sm md:text-base">
                      Generate Article Now
                      <RiArrowRightFill className="text-white" size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiArticleImage;
