import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RiArrowRightFill } from "react-icons/ri";

const BlogTopicalAuthority = () => {
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
    <div className="relative w-full bg-transparent py-4 px-4 ">
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center max-w-xl font-bold">
        Why Regular {" "}
        <i
          className="not-italic text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(88.14deg, #BFAAFF 0%, #6B41FF 31%, #F64CFF 76%, #FFC553 100%)",
          }}
        >
          Publishing Matters{" "}
        </i>
        
         for Google Rankings
      </h2>

    <div className="relative w-full bg-transparent py-4 mb-5 px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C0F3A] to-[#2A1A5E] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300 border border-[#a87fdb]/20 hover:border-[#a87fdb]/50">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-intelli-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-[1]" />
            </div>

            <div className="relative gradient-border backdrop-blur-lg p-6 md:p-8 lg:p-20">
              <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* Text Content */}
                <div className="flex-1 space-y-6 md:space-y-6 text-center md:text-left">
                  <p className="!text-white text-sm md:text-base lg:text-lg">
                    Google rewards websites that publish fresh, consistent
                    content. When you post daily, your site signals relevance,
                    boosts crawl frequency, and builds topical authority — all
                    key to climbing search rankings.
                  </p>

                  <p className="!text-white text-sm md:text-base lg:text-lg py-2">
                    With Intelli’s automated scheduling, you don’t have to lift
                    a finger. Just set it once, and let your blog grow traffic
                    on autopilot — every single day.
                  </p>

                  <Link
                    href={`${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`}
                  >
                    <button className="inline-flex items-center bg-[#F64CFF] hover:bg-[#F64CFF]/50 mt-8 gap-2 px-4 py-1 lg:px-8 lg:py-2 rounded-xl text-white/90 hover:text-white transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl font-semibold">
                      START BLOGGING
                      <RiArrowRightFill size={18} />
                    </button>
                  </Link>
                </div>

                {/* Image */}
                <div className="flex-1 w-full max-w-md md:max-w-lg lg:max-w-xl relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <div
                      className=" hidden sm:block border p-3 relative rounded-2xl lg:rounded-3xl"
                      style={{
                        boxShadow: `0px 0px 144.05px 0px rgba(0.5)`,
                      }}
                    >
                      <Image
                        src="/GoogleRanking.png"
                        alt="Topical Authority"
                        width={900}
                        height={600}
                        className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
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
    </div>
  );
};

export default BlogTopicalAuthority;
