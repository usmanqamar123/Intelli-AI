"use client";

import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { freeTools } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const FreeTool = () => {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredTools, setFilteredTools] = useState(freeTools);

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    const handleSearchAndFilter = () => {
      let filtered = freeTools;
      if (query !== "") {
        filtered = filtered.filter((tool) =>
          tool.title.toLowerCase().includes(query.toLowerCase())
        );
      }
      if (selectedTag !== "All") {
        filtered = filtered.filter((tool) =>
          tool.title.toLowerCase().includes(selectedTag.toLowerCase())
        );
      }
      setFilteredTools(filtered);
    };
    handleSearchAndFilter();
  }, [query, selectedTag]);

  const truncateDescription = (desc: string): string => {
    const words = desc.split(" ");
    if (words.length > 8) {
      return words.slice(0, 8).join(" ") + "...";
    }
    return desc;
  };

  const tags = [
    { id: 1, name: "All" },
    { id: 2, name: "Text" },
    { id: 3, name: "Video" },
    { id: 4, name: "Rephraser" },
    { id: 5, name: "Blog" },
    { id: 6, name: "Solution" },
    { id: 7, name: "Web scrapper" },
    { id: 8, name: "Generator" },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#471c7c]/40 to-[#030616]/20 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className=" text-center text-white py-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-7xl md:w-[80%] flex flex-col gap-4 md:gap-6 items-center justify-center px-4  mt-20 lg:mt-10 2xl:mt-20">
          <h1 className="text-2xl md:text-4xl font-bold">
            Looking for some help with your content marketing?
          </h1>
          <p className="text-base md:text-2xl">
            Check out our collection of templates. From blog posts to social
            media posts, we&apos;ve got you covered.
          </p>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className="w-full sm:w-[300px] md:w-[450px] p-2 pl-12 pr-4 bg-transparent border border-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6624BA] focus:border-[#6624BA] truncate"
              placeholder="Search content types like blog posts, social media posts, etc."
            />
            <BiSearchAlt className="absolute top-1/2 left-4 transform -translate-y-1/2 text-xl" />
          </div>
          <div className="w-full sm:w-auto flex flex-wrap justify-center gap-4 my-5 px-4">
            {tags.map((item) => (
              <button
                key={item.id}
                className={`rounded-3xl px-4 py-1 border ${
                  selectedTag === item.name
                    ? "bg-[#6624BA] border-[#6624BA] text-white scale-110"
                    : "border-gray-400"
                } text-sm md:text-base hover:text-white hover:bg-[#6624BA] `}
                onClick={() => handleTagClick(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          {filteredTools.length > 0 ? (
            filteredTools.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="flex flex-col items-center rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] hover:transition hover:ease-in-out hover:duration-500"
              >
                <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
                <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
                <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
                <div className="h-[50%] flex items-center justify-center relative">
                  <Image
                    src={item.icon}
                    alt="Features"
                    width={160}
                    height={0}
                    style={{ width: "160px", height: "auto" }}
                    // className="w-[160px] h-auto "
                  />
                </div>
                <div className="h-[50%] pt-2 md:pt-3 relative">
                  <h2 className="text-[22px] md:text-[20px] mb-2 xl:text-[22px] font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
                    {truncateDescription(item.desc)}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-xl text-gray-400 text-center">
              Whoops! No tools found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeTool;
