import React from "react";

const BetterRank = () => {
  return (
    <div className="relative  w-full text-center font-inter  px-4 md:px-6 xl:px-0 py-10 md:py-16 lg:py-20 z-10">
      {/* GRADIENT */}
      <div className="absolute top-1/2 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px] -z-10" />

      {/* TEXT BOX */}
      <div className=" w-full max-w-[1240px] mx-auto flex justify-center items-center text-center p-8 md:p-14 gradient-border-wrapper !rounded-lg">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold px-1 flex gap-x-4 justify-center leading-normal">
          <span>Write</span>
          <span className="gradient-text not-italic text-transparent bg-clip-text">
            Better.
          </span>
          <span>Rank</span>
          <span className="gradient-text not-italic text-transparent bg-clip-text">
            Higher.
          </span>
          <span>Scale</span>
          <span className="gradient-text not-italic text-transparent bg-clip-text">
            Faster.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default BetterRank;
