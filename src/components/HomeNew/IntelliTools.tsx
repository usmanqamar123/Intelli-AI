import React from "react";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";

const IntelliTools = () => {
  const tools = [
    {
      id: "1",
      title: "Topical Authority",
      image: "/TopicalBuilder.svg",
      link: '/topical-authority-builder',
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
    { id: "5", title: "AI Chat", image: "/AiChatTool.svg", link: "/ai-chat", route: `${process.env.NEXT_PUBLIC_APP}user/chat`,
  },
  ];

  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  return (
    <div className="relative w-full bg-transparent py-10 px-4 ">
      <div className="w-full container mx-auto flex flex-col items-center justify-center">
        {/* Grid Layout for Responsiveness */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center items-start max-w-6xl">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col  border border-[#5E4288] rounded-xl shadow-[0px_14px_40px_0px_#EF2B7040] transition-transform transform hover:scale-105 duration-500 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="bg-[#452972] shadow-lg rounded-t-xl flex justify-center items-center">
                <Image
                  src={tool.image}
                  width={120}
                  height={150}
                  alt={tool.title}
                  className="object-cover lg:w-[150px] xl:w-[230px]"
                  priority={false}
                />
              </div>

              {/* Button Section */}
              <div className="bg-[#0F062C] text-white p-4 w-full items-center text-center flex justify-center rounded-b-xl ">
                <Link href={tokens
                    ? tool.route
                    : tool.link}>
                  <button className="bg-gradient-to-r from-[#7628D6] via-[#471C7C] to-[#2C0F5C] text-wrap lg:text-nowrap rounded-lg gap-1 text-left md:text-center justify-center flex w-full items-center p-2 lg:p-3 text-xs md:text-sm xl:text-base font-semibold transition-all hover:shadow-md">
                    Try {tool.title}
                    <LuArrowRight className="hidden md:flex" size={15} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntelliTools;
