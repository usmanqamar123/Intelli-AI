import { ArticlesInMinutesData } from "../../constants/SeoArticleData";
import Image from "next/image";
import React from "react";

const ArticlesInMinutes = () => {
  return (
    <main className="relative w-full max-w-[1240px] px-4 md:px-6 xl:px-0  pt-20 py-10 md:pt-36 md:py-16 lg:py-20 lg:pt-40 h-full flex flex-col gap-10 lg:gap-20 justify-start items-center z-10 mx-auto ">
      <div className="absolute top-56 -right-[600px] w-[600px] h-[600px] bg-[#0009FF] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />
      <div className="absolute top-72 -right-[400px] w-[370px] h-[370px] bg-[#208EFB] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />
      <div className="absolute -bottom-80 -left-[600px] w-[700px] h-[700px] bg-[#7500FF] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />

      <div className="flex flex-col place-items-center gap-2">
        <div className="text-white max-w-2xl leading-none text-3xl md:text-4xl lg:text-5xl font-bold tracking-normaltext-white text-center">
          Publish
          <span className="bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8] text-center bg-clip-text text-transparent">
            100+ Articles in a minute {""}
          </span>
        </div>
        <p className="text-white text-lg text-center">
          Generate high-ranking content, analyze SEO performance, and publish
          directly to your website effortlessly.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ArticlesInMinutesData.map((items, index) => (
          <div
            key={index}
            className="w-full bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8] rounded-2xl p-[1.25px]"
          >
            <div className="w-full p-6 bg-black bg-blend-exclusion h-[200px] rounded-2xl">
              <div className="flex flex-col items-start justify-center gap-1">
                <Image
                  src={items.icon}
                  width={48}
                  height={48}
                  alt={items.title}
                />
                <h4 className="text-white text-lg font-bold mt-3">
                  {items.title}
                </h4>
                <p className="text-[#FAE4FF]">{items.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ArticlesInMinutes;
