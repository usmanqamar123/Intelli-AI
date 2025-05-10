import { SeoCntentCreationData } from "../../constants/SeoArticleData";
import Image from "next/image";
import React from "react";

const SeoContentCreation = () => {
  return (
    <main className="relative w-full max-w-[1240px] px-4 md:px-6 xl:px-0 py-10 md:py-12 h-full flex flex-col gap-10 lg:gap-20 justify-start items-center z-10 ">
      <div className="absolute top-56 -right-[600px] w-[600px] h-[600px] bg-[#0009FF] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />
      <div className="absolute top-72 -right-[400px] w-[370px] h-[370px] bg-[#208EFB] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />
      <div className="absolute -bottom-80 -left-[600px] w-[700px] h-[700px] bg-[#7500FF] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />

      <div className="flex flex-col place-items-center gap-2">
        <span className="max-w-2xl leading-none text-3xl md:text-4xl lg:text-5xl font-bold tracking-normal bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8] text-center bg-clip-text text-transparent">
          Stop Struggling {""}
          <span className="text-white text-center !leading-snug">
            With SEO Content Creation
          </span>
        </span>
        <span className="!text-white text-lg text-center">
          Write, optimize, and publish high-converting content in one powerful
          platform.
        </span>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SeoCntentCreationData.map((items, index) => (
          <div
            key={index}
            className="w-full p-6 bg-transparent h-[200px] rounded-2xl gradient-border-wrapper"
          >
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
        ))}
      </div>
    </main>
  );
};

export default SeoContentCreation;
