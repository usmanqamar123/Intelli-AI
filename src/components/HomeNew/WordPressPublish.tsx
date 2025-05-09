import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowRightFill } from "react-icons/ri";

const WordpressPublish = () => {
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
    <div className="relative w-full bg-transparent py-4 mb-5 px-4 ">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C0F3A] to-[#2A1A5E] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300 border border-[#a87fdb]/20 hover:border-[#a87fdb]/50">
            {/* Gradient overlay container */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-intelli-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-[1]" />
            </div>

            <div className="relative backdrop-blur-lg p-6 md:p-8 lg:p-10">
              <div
                className={`flex flex-row-reverse gap-8 lg:gap-12 xl:gap-16 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-7">
                  <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                    One Click Publish On WordPress
                  </h3>
                  <p>
                    No more copy-paste—publish your AI-generated article
                    directly to your WordPress blog in a single click.
                  </p>
                  <ul className="space-y-2 xl:space-y-1">
                    {list.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-4 lg:gap-5"
                      >
                        <span
                          className="shrink-0 mt-1 text-lg lg:text-xl"
                          style={{ color: "#F3CA50" }}
                        >
                          <FaRegCheckCircle />
                        </span>
                        <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
                          {item.listItem}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`}
                  >
                    <button className="inline-flex items-center bg-[#F3CA50] hover:bg-[#F3CA50]/50 mt-8 gap-2 px-4 py-1 lg:px-8 lg:py-2 rounded-xl text-white/90 hover:text-white transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl font-semibold">
                      Publish Article Now
                      <RiArrowRightFill size={18} />
                    </button>
                  </Link>
                </div>

                {/* Image Container */}
                <div
                  className={`hidden md:flex flex-1 w-full md:max-w-[55%] lg:max-w-[45%] relative transition-transform duration-500 group-hover:rotate-0 z-10`}
                >
                  <div className="relative rounded-2xl lg:rounded-3xl overflow-visible">
                    <div
                      className="!w-10/12 2xl:w-11/12 border p-3 relative transform transition-transform duration-500 group-hover:scale-[1.02] rounded-2xl lg:rounded-3xl"
                      style={{
                        boxShadow: `0px 0px 144.05px 0px rgba(0.5)`,
                      }}
                    >
                      <Image
                        src="/wordPress.webp"
                        alt="WordPress"
                        width={750}
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
  );
};

export default WordpressPublish;
