import React from "react";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Tools = () => {
  const tools = [
    {
      id: "1",
      title: "Topical Authority",
      image: "/TopicalBuilder.svg",
      link: "/topical-authority-builder",
      route: `${process.env.NEXT_PUBLIC_APP}user/topical-map`,
    },
    {
      id: "2",
      title: "Keyword Research",
      image: "/SeoKeywordResearhTool.svg",
      link: "/seo-keyword-research",
      route: `${process.env.NEXT_PUBLIC_APP}user/seo-keyword-research`,
    },
    {
      id: "3",
      title: "Article Writer",
      image: "/SeoArticlerWiterTool.svg",
      link: "/new-seo-aricle",
      route: `${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`,
    },
    {
      id: "4",
      title: "Image Generator",
      image: "/AiImageTool.svg",
      link: "/ai-image-generator",
      route: `${process.env.NEXT_PUBLIC_APP}user/image-generator`,
    },
    {
      id: "5",
      title: "AI Chat",
      image: "/AiChatTool.svg",
      link: "/ai-chat",
      route: `${process.env.NEXT_PUBLIC_APP}user/chat`,
    },
  ];

  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  return (
    <div className="relative w-full -mt-10 py-24 px-4 overflow-hidden">
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 pointer-events-none">
        <Image
          src="/Checkbox.svg"
          alt="Checkbox Background"
          width={800}
          height={800}
          priority
        />
      </div> */}

      <div className="absolute -top-10 left-10 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] animate-to-center animation-reverse"></div>

      <div className="absolute bottom-0 left-10 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] animate-to-center animation-reverse"></div>

      <div className="absolute -top-10 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px] animate-to-center"></div>

      <div className="absolute bottom-0 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px] animate-to-center"></div>

      <div className="absolute -top-10 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] animate-to-center animation-reverse"></div>

      <div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] animate-to-center animation-reverse"></div>

      <div className="w-full container max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Grid Layout for Responsiveness */}
        <div className="flex flex-col md:flex-row overflow-x-auto md:overflow-visible custom-scrollbar gap-4">
          {/* Left Box */}
          <div className="w-full md:w-[380px] h-[400px] flex flex-col items-start text-white gradient-border-wrapper p-5 px-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              100 Blog Posts. WordPress in 10 minutes.
            </h2>
            <div className="flex items-center gap-2 !text-[#01BBFA] mb-4 cursor-pointer">
              <p className="!text-[#01BBFA] mb-4">
                Try AI Topical Authority Builder
              </p>
              <HiOutlineArrowNarrowRight className="text-xl" />
            </div>
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
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-transparent p-5 px-6 gradient-border-wrapper text-white rounded-lg shadow-sm flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  Blogs researched and created for you.
                </h3>
                <div className="flex items-center gap-2 !text-[#01BBFA] mb-4 cursor-pointer">
                  <p className="text-[#01BBFA]">Try AI Blog Writer now</p>
                  <HiOutlineArrowNarrowRight className="text-xl" />
                </div>
              </div>
              <div className="bg-transparent text-white p-5 px-6 gradient-border-wrapper rounded-lg shadow-sm flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  Articles researched, written, SEO and human optimized.
                </h3>
                <div className="flex items-center gap-2 !text-[#01BBFA] mb-4 cursor-pointer">
                  <p className="text-[#01BBFA]">Try AI Article Writer now</p>
                  <HiOutlineArrowNarrowRight className="text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-transparent p-5 px-6 text-white gradient-border-wrapper rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Automatic content updates re-energizes search engine rankings.
              </h3>
              <div className="flex items-center gap-2 !text-[#01BBFA] mb-4 cursor-pointer">
                <p className="text-[#01BBFA]">
                  Try AI Website Content Updater now
                </p>
                <HiOutlineArrowNarrowRight className="text-xl" />
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="w-full md:w-[380px] h-[400px] flex flex-col items-start text-white gradient-border-wrapper bg-transparent p-5 px-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Content humanizer, increases search engine rankings and reader
              engagement.
            </h2>
            <div className="flex items-center gap-2 !text-[#01BBFA] mb-4 cursor-pointer">
              <p className="m-0">Try AI Topical Authority Builder</p>
              <HiOutlineArrowNarrowRight className="text-xl" />
            </div>
            <div className="w-full h-[160px] relative rounded-md overflow-hidden">
              <Image
                src="/Tools2.png"
                alt="WordPress image"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
