import React from "react";

const BetterRank = () => {
  return (
    <div className="relative w-full text-center font-inter py-10 md:py-16 lg:py-20">
      {/* GRADIENT */}
      <div className="absolute top-1/2 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px]"></div>
      <div className="absolute top-1/2 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px]"></div>

         {/* TEXT BOX */}
    <div className="mx-auto w-fit flex justify-center items-center text-center p-6 px-6 md:p-14 md:px-16 gradient-border-wrapper !rounded-lg">
  <h1 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold px-1 flex gap-x-1 md:gap-x-4 justify-center leading-normal">
    <span>Write</span>
    <span className="gradient-text not-italic text-transparent bg-clip-text">Better.</span>
    <span>Rank</span>
    <span className="gradient-text not-italic text-transparent bg-clip-text">Higher.</span>
    <span>Scale</span>
    <span className="gradient-text not-italic text-transparent bg-clip-text">Faster.</span>
  </h1>
</div>
    </div>
  );
};

export default BetterRank;
