"use client"
import React from "react";

const Assets = () => {
  const tokens =
    typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;

  return (
    <>
      <div className='py-20 text-white w-full px-4 flex flex-col items-center justify-center gap-10 md:text-center md:text-lg text-base'>
        <div className='w-full md:w-3/4 bg-[#161738] shadow-xl py-7 px-5 md:px-10 rounded-xl border border-[#FFFFFF14] space-y-3'>
          <h1 className="md:text-4xl text-3xl text-center font-semibold">
            Your marketing assets
          </h1>
          <p className="py-10 text-sm md:text-xl text-center">
            There are no uploaded assets at this time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Assets;
