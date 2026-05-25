import React from "react";

const BetterRank = () => {
  return (
    <div className="overflow-y-clip w-full text-center font-jakarta  px-4 md:px-6 xl:px-0 py-10 md:py-16 lg:py-20 z-10">
      <div className="w-full max-w-[1240px] mx-auto flex justify-center items-center text-center p-4 md:p-14 gradient-border-wrapper !rounded-lg overflow-visible">
        <h2 className="text-xl !font-jakarta md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold px-1 py-2 flex gap-x-1 md:gap-x-4 justify-center leading-relaxed overflow-visible">
          <span className="py-2">Write</span>
          <span className="gradient-text not-italic text-transparent bg-clip-text py-2">
            Better.
          </span>
          <br className="block lg:hidden" />
          <span className="py-2">Rank</span>
          <span className="gradient-text not-italic text-transparent bg-clip-text py-2">
            Higher.
          </span>
          <br className="block lg:hidden" />
          <span className="py-2">Scale</span>
          <span className="gradient-text not-italic text-transparent bg-clip-text py-2">
            Faster.
          </span>
        </h2>
      </div>
    </div>
  );
};

export default BetterRank;
