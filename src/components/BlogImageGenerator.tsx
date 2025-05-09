import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowRightFill } from "react-icons/ri";

const BlogImageGenerator = () => {
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const list = [
    {
      id: 0,
      listItem: "Schedule Posts with Ease",
    },
    {
      id: 1,
      listItem: "Seamless WordPress Integration",
    },
    {
      id: 2,
      listItem: "Edit Before You Publish",
    },
    {
      id: 3,
      listItem: "Secure & Reliable Publishing Workflow",
    },
    {
      id: 4,
      listItem: "Instant Updates & Re-Publishing",
    },
    {
      id: 5,
      listItem: "Publish SEO-Optimized Content Every Time",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center pb-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold max-w-4xl">
          Instantly Create or Find the{" "}
          <i
            className="not-italic text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(88.14deg, #BFAAFF 0%, #6B41FF 31%, #F64CFF 76%, #FFC553 100%)",
            }}
          >
            Perfect Blog Image
          </i>
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-xl md:max-w-2xl mt-4">
          No need for a seprate image hunt. Generate apealing visuals that
          complement your text for more engaging reader experience- all within
          the same work flow.{" "}
        </p>
      </div>
      <div className="relative w-full bg-transparent py-4 mb-8 px-4 ">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
          <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C0F3A] to-[#2A1A5E] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300 border border-[#a87fdb]/20 hover:border-[#a87fdb]/50">
              {/* Gradient overlay container */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-intelli-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-[1]" />
              </div>

              <div className="relative backdrop-blur-lg p-6 md:p-8 lg:p-10">
                <div
                  className={`flex flex-row gap-8 lg:gap-12 xl:gap-16 items-center`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-7">
                    <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      Blog Image Generator{" "}
                    </h3>
                    <p>
                      Bring your articles to life with our Blog Image Generator.
                      Whether you want to create unique visuals or search for
                      the perfect stock photo, our tool helps you add stunning,
                      SEO-friendly images in seconds no design skills needed.
                    </p>
                  </div>

                  {/* Image Container */}
                  <div
                    className={`hidden md:flex flex-1 w-full md:max-w-[50%] lg:max-w-[65%] relative transition-transform duration-500 group-hover:rotate-0 z-10`}
                  >
                    <div className="relative rounded-2xl lg:rounded-3xl overflow-visible">
                      <div
                        className="w-full border p-5 relative transform transition-transform duration-500 group-hover:scale-[1.02] rounded-2xl lg:rounded-3xl"
                        style={{
                          boxShadow: `0px 0px 144.05px 0px rgba(0.5)`,
                        }}
                      >
                        <Image
                          src="/BlogImage.png"
                          alt="WordPress"
                          width={800}
                          height={800}
                          className="w-full h-full object-cover rounded-2xl"
                          priority
                        />
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

export default BlogImageGenerator;
