import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowRightFill } from "react-icons/ri";

const ArticleWriter = () => {

  const list = [
    {
      id: 0,
      listItem: "Human-like tone and flow",
    },
    {
      id: 1,
      listItem: "SEO-ready out of the box",
    },
    {
      id: 2,
      listItem: "Direct WordPress publishing",
    },
    {
      id: 3,
      listItem: "Real-time readability and SEO scores",
    },
    {
      id: 4,
      listItem: "Save hours on manual writing",
    },
    {
      id: 5,
      listItem: "Publish SEO-Optimized Content Every Time",
    },
  ];

  return (
    <div className="relative w-full font-geist py-10 md:py-16 lg:py-20 px-4 xl:px-0 ">
             <div className="absolute bottom-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
             <div className="absolute top-1/2 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
             <div className="absolute bottom-1/4 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[110px]"></div>
             <div className="absolute top-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]"></div>
             <div className="absolute top-[40%] right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>

      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-6 items-center justify-center">
        <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6 mx-auto">
          {/* Gradient overlay container */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-[1]" />
          </div>

          <div className="relative backdrop-blur-lg p-4 md:p-6 lg:p-8">
            <div
              className={`flex flex-col  md:flex-row gap-4 lg:gap-10 xl:gap-16 items-center mx-auto`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-7 !text-white">
                <button className="gradient-border-wrapper px-6 py-2 rounded-full font-semibold text-white hover:text-white flex items-center shadow-lg hover:shadow-purple-500/20">
                  <span className="text-xs md:text-xs text-center xl:text-sm">
                    WRITE SMARTER, FASTER
                  </span>
                </button>
                <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  SEO{" "}
                  <i className="gradient-text not-italic text-transparent bg-clip-text">
                    Article Writer
                  </i>
                </h3>
                <p>
                Generate high-ranking content, analyze SEO performance, and publish directly to your WordPress site effortlessly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
  {/* First column with 3 items */}
  <ul className="space-y-4">
    {list.slice(0, 3).map((item) => (
      <li key={item.id} className="flex items-start gap-2">
        <span className="shrink-0 mt-1 text-lg lg:text-xl" style={{ color: "#298CFD" }}>
          <FaRegCheckCircle />
        </span>
        <p className="!text-white font-semibold text-xs md:text-sm lg:text-base leading-relaxed">
          {item.listItem}
        </p>
      </li>
    ))}
  </ul>

  {/* Second column with 2 items */}
  <ul className="space-y-4">
    {list.slice(3, 5).map((item) => (
      <li key={item.id} className="flex items-start gap-2 ">
        <span className="shrink-0 mt-1 text-lg lg:text-xl" style={{ color: "#298CFD" }}>
          <FaRegCheckCircle />
        </span>
        <p className="!text-white font-semibold text-xs md:text-sm lg:text-base leading-relaxed">
          {item.listItem}
        </p>
      </li>
    ))}
  </ul>
</div>



                <Link
                  href={`${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`}
                >
                  <button className="inline-flex items-center bg-[#7E3BFF] hover:bg-[#7E3BFF]/50 mt-8 px-4 py-1 lg:px-6 lg:py-2 text-sm md:text-base rounded-3xl text-white hover:text-white/90 transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl font-semibold">
                  Write Your First Article             
                  </button>
                </Link>
              </div>

              {/* Image Container */}
              <div
  className={`md:flex flex-1 w-full md:max-w-[50%] lg:max-w-[60%] relative transition-transform duration-500 group-hover:rotate-0 z-10`}
>
  <div className="relative rounded-2xl lg:rounded-3xl overflow-visible w-full">
    <div
      className="w-full relative transform transition-transform duration-500 group-hover:scale-[1.02] rounded-2xl lg:rounded-3xl"
    >
      <Image
        src="/ArticleWriter.png"
        alt="Article Writer"
        width={1600} // increase width here if needed
        height={1200}
        className="w-full h-auto object-cover rounded-2xl lg:rounded-3xl"
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
  );
};

export default ArticleWriter;
