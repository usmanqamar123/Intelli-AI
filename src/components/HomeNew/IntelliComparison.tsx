import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const IntelliComparison = () => {
  const features = [
    "100% Human-Like Content",
    "SEO Optimization Tools",
    "Plagiarism-Free",
    "Custom Brand Voice",
    "AI Chat Assistance",
    "Optimized Blog Generation",
    "Readability Improvement",
    "Import from URL",
  ];

  const tools = [
    "Intelliwriter",
    "Writesonic",
    "Copy.ai",
    "Jasper",
    "Scalenut",
  ];

  const data = [
    [true, false, false, false, false],
    [true, true, false, true, true],
    [true, false, false, true, true],
    [true, true, false, true, true],
    [true, false, false, false, true],
    [true, true, false, true, true],
    [true, true, true, true, true],
    [true, false, false, false, false],
  ];

  return (
    <div className="relative w-full  max-w-[1240px] mx-auto px-4 md:px-6 xl:px-0 py-10 md:py-16 lg:py-20 z-10">
      <div className="absolute bottom-10 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px] -z-10"></div>

      <div className="w-full flex flex-col gap-6 items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row justify-between !text-white gap-24">
          {/* TITLE */}
          <span className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Why{" "}
            <span className="gradient-text not-italic text-transparent bg-clip-text leading-snug">
              Intelliwriter
            </span>
            <br />
            Outperforms the Rest
          </span>

          {/* TEXT */}
          <p className="!text-white font-extralight max-w-xl text-base xl:text-lg self-start lg:self-end">
            Compare the features that matter most and discover how Intelli goes
            beyond to provide superior AI content creation.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full flex flex-col gap-10">
          <div className="w-full p-[1px] rounded-3xl  transition-shadow duration-300">
            <div className="w-full h-full text-white pt-7 flex flex-col items-center justify-start gap-16">
              {/* Scrollable Wrapper */}
              <div className="w-full overflow-x-auto custom-comparison">
                <div className="flex justify-between items-center gap-10">
                  {/* Key Features Column */}
                  <div className="flex flex-col min-w-[230px] !font-extralight z-10">
                    <div className="!font-semibold text-lg md:text-xl xl:text-2xl mb-3 mt-4">
                      Key Features
                    </div>
                    {features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-sm md:text-base xl:text-lg !font-extralight  py-3 whitespace-nowrap"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tools Comparison Grid */}
                  <div className="w-fit overflow-x-auto custom-scrollbar ">
                    <div className="bg-white/10 gradient-border-wrapper p-5 xl:p-7">
                      <div className="flex gap-7">
                        {tools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="min-w-[150px] text-center px-2"
                          >
                            {toolIndex === 0 ? (
                              <Image
                                src="/Logo.svg"
                                width={130}
                                height={42}
                                alt="Intelliwriter"
                                className="-mt-1 mb-3"
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
                                  <FaCheck className="text-white" />
                                ) : (
                                  <IoMdClose className="text-white/60" />
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
