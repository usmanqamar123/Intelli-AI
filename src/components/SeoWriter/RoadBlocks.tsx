import { RoadBlocksData } from "../../constants/SeoArticleData";
import React from "react";
import GradientText from "../GradientText";
import { FaCheck, FaSquareFull } from "react-icons/fa6";

const RoadBlocks = () => {
  return (
    <main className="relative w-full max-w-[1240px] px-4 md:px-6 xl:px-0 h-full py-10 lg:py-20 flex flex-col gap-10 lg:gap-20 justify-start items-center z-10 ">
      <div className="absolute top-72 -right-[500px] w-[500px] h-[500px] bg-[#DF1DF7] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />
      <div className="absolute top-56 -left-[200px] w-[350px] h-[350px] bg-[#DF1DF7] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />

      <div className="flex flex-col place-items-center gap-0">
        <GradientText
          whiteText="Content Creation RoadBlocks,"
          gradientText="Solved"
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-normal text-center"
        />
        <p className="text-white text-lg text-center">
          Your SEO-Optimized Content will rank in minutes.
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-5">
        {RoadBlocksData.map((items, index) => (
          <div
            key={index}
            className="relative overflow-hidden  w-full bg-[#16002942] backdrop-blur-md rounded-2xl p-8 flex flex-col gap-3 text-white"
          >
            <div className="absolute -top-40 -left-24 w-64 h-64 bg-[#DF1DF7] rotate-[24deg] opacity-40 blur-xl rounded-full -z-10" />
            <div className="absolute -top-40 -left-24 w-96 h-96 bg-[#7500FF] rotate-[30deg] opacity-60 blur-xl rounded-full -z-10" />
            <div className="absolute -bottom-24 -right-14 w-56 h-56 bg-[#0009FF] rotate-[40deg] opacity-40 blur-xl rounded-full -z-10" />
            <div className="absolute -bottom-28 right-10 w-36 h-36 bg-[#208EFB] rotate-[40deg] opacity-60 blur-xl rounded-full -z-10" />

            <h4 className="text-[32px] font-bold">{items.title}</h4>
            <ul className="space-y-2">
              {items.checks.map((check, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-lg text-white/90"
                >
                  {index === 0 ? (
                    <FaSquareFull size={15} className=" text-[#298CFD]" />
                  ) : (
                    <FaCheck size={15} className=" text-[#37C603]" />
                  )}
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RoadBlocks;
