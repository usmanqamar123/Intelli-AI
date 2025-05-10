import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Tools = () => {
  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  return (
    <div className="relative w-full py-10 md:py-12 px-4 overflow-hidden -z-10 xl:px-0">
      <div className="w-full container max-w-[1024px] mx-auto flex flex-col items-center justify-center">
        {/* Grid Layout for Responsiveness */}
        <div className="flex flex-col md:flex-row overflow-x-auto md:overflow-visible custom-scrollbar gap-4">
          {/* Left Box */}
          <div className="w-full md:w-[280px] h-[330px] flex flex-col items-start text-white gradient-border-wrapper p-3 px-5 rounded-lg shadow-md">
            <h2 className="text-sm md:text-base font-semibold my-4">
              100 Blog Posts. WordPress in 10 minutes.
            </h2>
            <Link href={`${process.env.NEXT_PUBLIC_APP}user/topical-map`}>
              <div className="flex items-center gap-2 text-xs md:text-sm !text-[#01BBFA] mb-3 cursor-pointer">
                <p className="!text-[#01BBFA]">
                  Try AI Topical Authority Builder
                </p>
                <HiOutlineArrowNarrowRight className="text-xl" />
              </div>
            </Link>
            <div className="w-full h-auto rounded-md overflow-hidden">
              <Image
                src="/Tools1.png"
                alt="WordPress"
                width={300}
                height={150}
                className="rounded-md object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Middle Boxes */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="sm:basis-[40%] bg-transparent p-3 px-5 gradient-border-wrapper text-white rounded-lg shadow-sm">
                <h3 className="text-sm md:text-base font-semibold my-2">
                  Blogs researched and created for you.
                </h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`}
                >
                  <div className="flex items-center gap-2 text-xs md:text-xs !text-[#01BBFA] cursor-pointer">
                    <p className="!text-[#01BBFA]">Try AI Blog Writer now</p>
                    <HiOutlineArrowNarrowRight className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="sm:basis-[60%] bg-transparent text-white p-3 px-5 gradient-border-wrapper rounded-lg shadow-sm">
                <h3 className="text-sm md:text-base font-semibold my-2">
                  Articles researched, written, SEO and human optimized.
                </h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`}
                >
                  <div className="flex items-center gap-2 text-xs md:text-sm !text-[#01BBFA] mb-4 cursor-pointer">
                    <p className="!text-[#01BBFA]">Try AI Article Writer now</p>
                    <HiOutlineArrowNarrowRight className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-transparent p-3 px-5 text-white gradient-border-wrapper rounded-lg shadow-sm">
              <h3 className="text-sm md:text-base font-semibold my-2">
                Automatic content updates re-energizes search engine rankings.
              </h3>
              <Link href={`${process.env.NEXT_PUBLIC_APP}user/dashboard`}>
                <div className="flex items-center gap-2 text-xs md:text-sm !text-[#01BBFA] mb-4 cursor-pointer">
                  <p className="!text-[#01BBFA]">
                    Try AI Website Content Updater now
                  </p>
                  <HiOutlineArrowNarrowRight className="text-xl" />
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[280px] h-[330px] flex flex-col items-start text-white gradient-border-wrapper bg-transparent p-3 px-5 rounded-lg shadow-md">
            <h2 className="text-sm md:text-base font-semibold my-4">
              Content humanizer, increases search engine rankings and reader
              engagement.
            </h2>
            <Link href={`${process.env.NEXT_PUBLIC_APP}user/new-ai-humanizer`}>
              <div className="flex items-center text-xs md:text-sm gap-2 !text-[#01BBFA] mb-4 cursor-pointer">
                <p className="m-0 !text-[#01BBFA]">Try AI Humanizer Now</p>
                <HiOutlineArrowNarrowRight className="text-xl" />
              </div>
            </Link>
            <div className="w-full h-[160px] relative rounded-md overflow-hidden">
              <Image
                src="/Tools2.png"
                alt="WordPress image"
                width={300}
                height={200}
                className="rounded-md object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
