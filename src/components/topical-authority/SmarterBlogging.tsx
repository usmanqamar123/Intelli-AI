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
      listItem: "Select multiple articles in a batch",
    },
    {
      id: 1,
      listItem: "Set specific publish dates and times",
    },
    {
      id: 2,
      listItem: "Auto-publish to WordPress with zero manual effort",
    },
    {
      id: 3,
      listItem: "Stay consistent, grow faster",
    },
  ];

  return (
    <div className="relative w-full bg-transparent p-4 ">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">
          {/* Heading Section */}
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold max-w-4xl">
              Topical Authority Builder for{" "}
              <i
                className="not-italic text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(88.14deg, #BFAAFF 0%, #6B41FF 31%, #F64CFF 76%, #FFC553 100%)",
                }}
              >
                Smarter Blogging
              </i>
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-xl mt-4">
              Generate articles quickly with high-ranking content, analyze SEO performance, and
              publish directly to your WordPress site effortlessly.
            </p>
          </div>

       <div className="relative w-full bg-transparent py-4 mb-5 px-4">
             <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
               <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">
                 <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C0F3A] to-[#2A1A5E] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300 border border-[#a87fdb]/20 hover:border-[#a87fdb]/50">
                   <div className="absolute inset-0 overflow-hidden rounded-2xl">
                     <div className="absolute inset-0 bg-intelli-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-[1]" />
                   </div>
       
                   <div className="relative gradient-border backdrop-blur-lg p-6 md:p-8 lg:p-14">
                     <div className="flex flex-col-reverse md:flex-row-reverse gap-8 lg:gap-12 xl:gap-24 items-center">
                       {/* Text Content */}
                       <div className="flex-1 space-y-6 md:space-y-7 text-center md:text-left">
                         <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight">
                         Turn Your Blog Into a 24/7 Content Machine
                         </h3>
                         <p className="!text-white text-sm md:text-base lg:text-lg">
                         Build niche authority on autopilot with Intelli’s AI-powered Topical Authority Builder. Discover high-impact core topics and subtopics, generate 100+ SEO-optimized articles in minutes, and schedule effortless publishing to WordPress for up to 3 months — all while you focus on growing your brand.
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
                             className=" hidden sm:block border p-5 relative rounded-2xl lg:rounded-3xl"
                             style={{
                               boxShadow: `0px 0px 144.05px 0px rgba(0.5)`,
                             }}
                           >
                           <Image
                        src="/topical-authority-builder/TopicalAuthority.png"
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
                          <p className="!text-white text-sm md:text-base lg:text-lg">
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
                              className=" hidden sm:block border p-5 relative rounded-2xl lg:rounded-3xl"
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
        </div>
      </div>
    </div>
  );
};

export default WordpressPublish;
