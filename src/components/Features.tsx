"use client";
import React from "react";
import { features } from "../constants";
import Image from "next/image";

const Features = () => {
  const truncateDescription = (desc: string): string => {
    const words = desc.split(" ");
    if (words.length > 8) {
      return words.slice(0, 8).join(" ") + "...";
    }
    return desc;
  };

  return (
    <div className="xl:px-16 md:px-6 px-4 pt-3 pb-2 w-full container">
      <div className="">
        <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] tracking-wider text-center !text-white lg:px-10 md:p-6 p-4">
          Your artistic creations will impress the world. How suite it is!
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5 ">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] hover:transition hover:ease-in-out hover:duration-500"
          >
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="h-[50%] flex items-center justify-center relative">
              <Image
                src={item.icon}
                alt="Features"
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, 2000px" 
                className="w-[100px] h-auto "
              />
            </div>
            <div className="h-[50%] pt-2 md:pt-3 relative">
              <h2 className="text-[22px] md:text-[20px] mb-2 xl:text-[22px] font-semibold">
                {item.title}
              </h2>
              <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
                {truncateDescription(item.desc)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
