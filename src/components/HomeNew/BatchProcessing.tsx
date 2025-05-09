import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiArrowRightFill } from "react-icons/ri";

const BatchProcessing = () => {
  const list = [
    {
      id: 0,
      listItem: "Select multiple articles in a batch",
    },
    {
      id: 1,
      listItem: " Set specific publish dates and times",
    },
    {
      id: 2,
      listItem: " Auto-publish to WordPress with zero manual effort",
    },
    {
      id: 3,
      listItem: "Stay consistent, grow faster",
    },
  ];

  return (
    <div className="relative w-full bg-transparent py-4 mb-5 px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C0F3A] to-[#2A1A5E] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300 border border-[#a87fdb]/20 hover:border-[#a87fdb]/50">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-intelli-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-[1]" />
            </div>

            <div className="relative gradient-border backdrop-blur-lg p-6 md:p-8 lg:p-20">
              <div className="flex flex-col-reverse md:flex-row-reverse gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* Text Content */}
                <div className="flex-1 space-y-6 md:space-y-7 text-center md:text-left">
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight">
                    Publish Smarter with Batch Processing. Select. Schedule.
                    Relax.
                  </h3>
                  <p className="text-white/80 text-sm md:text-base lg:text-lg">
                    With Intelli’s powerful batch processing, you can select
                    multiple articles at once, set custom publish dates and
                    times, and automate your entire posting calendar. No need to
                    schedule posts one by one.
                  </p>
                  <ul className="space-y-2 xl:space-y-1">
                    {list.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-start gap-3 lg:gap-4"
                      >
                        <span className="text-[#FFC553] text-lg lg:text-xl mt-1">
                          <FaRegCheckCircle />
                        </span>
                        <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                          {item.listItem}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="!text-white text-sm md:text-base lg:text-lg">
                    Save hours of work and keep your blog active 24/7 All with
                    just a few clicks.{" "}
                  </p>
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
                      src="/BatchProcessing.png"
                      alt="Batch Processing"
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
  );
};

export default BatchProcessing;
