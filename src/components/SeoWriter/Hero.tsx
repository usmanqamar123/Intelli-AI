import React from "react";
import GradientText from "../GradientText";
import Button from "../SEOButton";
import { BsStars } from "react-icons/bs";
import { marqueeText } from "../../constants/SeoArticleData";

const Hero = () => {
  return (
    <main className="w-full max-w-[1240px] mx-auto px-4 md:px-6 xl:px-0 mt-6 sm:mt-16 lg:mt-28  flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-start items-center z-10">
      <section className="flex flex-col items-center gap-2 text-center">
        <GradientText
          whiteText="Create"
          gradientText="#1 Ranking Pages"
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal leading-tight"
        />
        <p className="text-white text-base sm:text-lg max-w-2xl">
          Your SEO-Optimized Content will rank in minutes.
        </p>
      </section>

      <section className="w-full max-w-3xl rounded-2xl p-[1.25px] bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8]">
        <div className="bg-[#12172C] h-[200px] sm:h-[250px] lg:h-[300px] flex flex-col justify-between rounded-2xl p-4 sm:p-6 text-white">
          What topic you want to rank for?
          <Button
            text="Generate Article"
            icon={<BsStars />}
            className="flex self-end"
          />
        </div>
      </section>

      <section className="relative w-full h-80 md:h-96 -mt-6 sm:-mt-8 lg:-mt-10 flex flex-col items-center overflow-hidden">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl">
          <div
            className="animate-marquee-up flex flex-col items-center gap-3"
            style={{ willChange: "transform" }}
            aria-hidden="true"
          >
            {[...marqueeText, ...marqueeText].map((item, index) => (
              <div
                key={index}
                className="rounded-full p-[1.25px] bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8]"
              >
                <div className="bg-[#12172C] rounded-full font-thin px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-white text-center">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee-up {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          .animate-marquee-up {
            animation: marquee-up 10s linear infinite;
          }
        `}</style>
      </section>
    </main>
  );
};

export default Hero;
