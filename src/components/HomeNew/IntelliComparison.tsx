import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const IntelliComparison = () => {
  const features = [
    "AI Super SEO Agents",
    "Automated SEO Fixes",
    "Keyword Optimization ",
    "Content SEO Scoring",
    "Automated On-Page SEO",
    "Auto Meta Title & Description",
    "Auto Content Optimization",
    "Technical SEO Optimization ",
  ];

  const tools = [
    "Intelliwriter",
    "Rank Math",
    "Yoast SEO",
    "All-in-One",
    "Scalenut",
  ];

  const data = [
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, false, false],
    [true, true, true, true, true],
    [true, false, false, false, false],
    [true, true, true, true, true],
  ];

  return (
    <div className="relative w-full  max-w-[1240px] font-geist mx-auto px-4 md:px-6 xl:px-0 py-10 md:py-12 z-10">
      <div className="absolute bottom-10 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px] -z-10"></div>

      <div className="w-full flex flex-col gap-6 items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row justify-between !text-white gap-10 md:gap-16 lg:gap-20">
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-geist font-bold">
          {/* <span > */}
            Why{" "}
            <span className="gradient-text not-italic text-transparent bg-clip-text font-geist leading-snug">
              Intelliwriter
            </span>
            <br />
            Stands Out
          {/* </span> */}
          </h2>

          {/* TEXT */}
          <p className="!text-white font-extralight max-w-xl text-base xl:text-lg self-start lg:self-end">
            IntelliWriter offers more than just content generation. Here’s why we’re different:
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full flex flex-col gap-10">
          <div className="w-full p-[1px] rounded-3xl transition-shadow duration-300">
            <div className="w-full h-full text-white pt-7 flex flex-col items-center justify-start gap-16">
              {/* Scrollable Wrapper */}
              <div className="w-full overflow-x-auto custom-comparison">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                  {/* DESKTOP (features outside) */}
                  <div className="hidden lg:flex flex-col min-w-[230px] font-extralight z-10">
                    <div className="font-semibold text-lg md:text-xl xl:text-2xl mb-4 mt-4">
                      Key Features
                    </div>
                    {features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-sm md:text-base xl:text-lg font-extralight py-[14px] whitespace-nowrap"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* TOOLS + FEATURES (mobile/tablet view combined) */}
                  <div className="w-full overflow-x-auto custom-scrollbar">
                    <div className="flex bg-white/10 gradient-border-wrapper p-5 xl:p-7 w-fit">
                      {/* MOBILE/TABLET: Features on top */}
                      <div className="flex flex-col lg:hidden w-[230px] font-extralight mb-6">
                        <div className="font-semibold text-lg md:text-xl mb-3 mt-1">
                          Key Features
                        </div>
                        {features.map((feature, index) => (
                          <span
                            key={index}
                            className="text-sm md:text-base font-extralight py-[14px] whitespace-nowrap"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Tools Grid */}
                      <div className="flex gap-7">
                        {tools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="min-w-[150px] text-center px-2"
                          >
                            {toolIndex === 0 ? (
                              <Image
                                src="/seo-artilce-writer/IntelliwriterLogo.png"
                                width={130}
                                height={42}
                                alt="Intelliwriter Logo"
                                className="-mt-1 mb-1"
                              />
                            ) : (
                              <div className="font-semibold text-lg md:text-xl xl:text-2xl mb-2 whitespace-nowrap">
                                {tool}
                              </div>
                            )}

                            {data.map((row, rowIndex) => (
                              <div
                                key={rowIndex}
                                className="py-4 flex justify-center"
                              >
                                {row[toolIndex] ? (
                                  <IoMdCheckmark className="text-white size-4 lg:size-5 xl:size-6" />
                                ) : (
                                  <IoMdClose className="text-red-500 size-4 lg:size-5 xl:size-6" />
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelliComparison;
