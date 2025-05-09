import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

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
    <div className="relative w-full px-4 py-10 md:py-16 lg:py-20">
      <div className="absolute bottom-10 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px]"></div>
      <div className="absolute top-1/2 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
      <div className="absolute top-1/2 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px]"></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-between !text-white px-3 gap-3 md:gap-24">
          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl text-white lg:text-4xl font-bold">
            Why
            <span className="gradient-text not-italic text-transparent bg-clip-text">
              Intelliwriter
            </span>
            <br />
            Outperforms the Rest
          </h2>

          {/* TEXT */}
          <p className="font-extralight max-w-lg text-sm xl:text-base self-start lg:self-end">
            Compare the features that matter most and discover how Intelli goes
            beyond to provide superior AI content creation.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full flex flex-col gap-10">
          <div className="w-full p-[1px] rounded-3xl  transition-shadow duration-300">
            <div className="w-full h-full text-white pt-7 px-4 md:px-7 flex flex-col items-center justify-start gap-16">
              {/* Scrollable Wrapper */}
              <div className="w-full overflow-x-auto custom-comparison">
                <div className="flex justify-between">
                  {/* Key Features Column */}
                  <div className="flex flex-col min-w-[180px] sticky left-0 z-10 pr-10">
                    <div className="font-semibold text-lg md:text-xl px-2 mb-3 mt-4">
                      Key Features
                    </div>
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="text-sm md:text-base xl:text-lg py-3 whitespace-nowrap"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tools Comparison Grid */}
                  <div className="flex-1 overflow-x-auto custom-scrollbar ">
                    <div className="md:bg-white/10 gradient-border-wrapper p-5">
                      <div className="flex">
                        {tools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="min-w-[150px] text-center px-2"
                          >
                            <div className="font-semibold text-lg md:text-xl mb-2 whitespace-nowrap">
                              {tool}
                            </div>
                            {data.map((row, rowIndex) => (
                              <div
                                key={rowIndex}
                                className="py-5 flex justify-center"
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
