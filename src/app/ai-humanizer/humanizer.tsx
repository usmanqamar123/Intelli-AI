import Link from "next/link";
import React from "react";

const Humanizer = () => {
  return (
    <>
      <div className="max-w-[1400px] w-[90%] py-10 md:py-14 lg:py-16 border border-[#554869] bg-gradient-to-br from-[#201634] to-[#643cba8a] mx-auto rounded-2xl my-16 px-4 ">
        <div className="w-full mx-auto px-4  flex flex-col gap-12">

          <h1 className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] w-full  !text-center font-normal lg:w-full">
            Use Our Free{" "}
            <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
              AI Humanizer
            </span>{" "}
            to Bypass AI Detection
          </h1>
          <ul className="flex flex-col items-start justify-center gap-x-3 md:flex-row gap-6 md:gap-5">
            <li className="text-center w-full">
              <span className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] ">
                1
              </span>
              <p className="text-center md:text-[21px] text-[16px] font-[500] w-[80%] mx-auto md:w-full  !text-white leading-[22px] md:leading-[36px] mt-2 ">
                Input the AI-generated text in Intelli Bypass.
              </p>
            </li>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 shrink-0 text-white translate-y-[28px] hidden md:block"
            >
              <path
                opacity="0.8"
                d="M19.334 23.333 26.666 16l-7.334-7.333"
                stroke="currentColor"
                strokeWidth="3.667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                opacity="0.5"
                d="M5.333 23.333 12.668 16 5.334 8.667"
                stroke="currentColor"
                strokeWidth="3.667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <li className="text-center w-full">
              <span className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px]">
                2
              </span>
              <p className="text-center md:text-[21px] text-[16px] font-[500] w-[80%] mx-auto md:w-full  !text-white leading-[22px] md:leading-[36px] mt-2 ">
                Start running Intelli Bypass and let it work its magic.
              </p>
            </li>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 shrink-0 text-white translate-y-[28px] hidden md:block "
            >
              <path
                opacity="0.8"
                d="M19.334 23.333 26.666 16l-7.334-7.333"
                stroke="currentColor"
                strokeWidth="3.667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                opacity="0.5"
                d="M5.333 23.333 12.668 16 5.334 8.667"
                stroke="currentColor"
                strokeWidth="3.667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <li className="text-center w-full ">
              <span className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px]">
                3
              </span>
              <p className="text-center md:text-[21px] text-[16px] font-[500] w-[80%] mx-auto md:w-full  !text-white leading-[22px] md:leading-[36px] mt-2 ">
                Get your humanized text and safely use it anywhere you like.
              </p>
            </li>
          </ul>
          <Link href={`${process.env.NEXT_PUBLIC_APP}auth/register`}>
            <button className="text-white block sm:w-fit mx-auto rounded-full px-[30px] md:px-[62px] bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 font-semibold sm:text-lg py-2 lg:py-[15px] md:text-base">
              Start for Free
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Humanizer;
