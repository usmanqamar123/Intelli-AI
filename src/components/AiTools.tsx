import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing arrow icon from React Icons

const tools = [
  {
    id: 0,
    title: "Course Builder",
  },
  {
    id: 1,
    title: "Image Generator",
  },
  {
    id: 2,
    title: "Topical Authority",
  },
  {
    id: 3,
    title: "Voice Generator",
  },
  {
    id: 4,
    title: "Speech to Text",
  },
  {
    id: 5,
    title: "Chat",
  },
  {
    id: 6,
    title: "YouTube Content Generator",
  },
  {
    id: 7,
    title: "SEO Keyword Research",
  },
];

const AiTools: React.FC = () => {
  return (
    <div className="h-fit py-6 flex justify-center px-4">
      <div className="max-w-6xl w-full text-center">
        {/* Gradient Text Heading */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6B41FF] from-[27%] via-[#F64CFF] via-[68%] to-[#FFC553] text-transparent bg-clip-text mb-8">
          Discover More AI Tools
        </h2>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          {tools.map((tool) => (
            <Link href={`${process.env.NEXT_PUBLIC_APP}auth/login`}>
              <div
                key={tool.id}
                className="relative w-full flex items-center justify-between bg-[#0B0217] text-start text-white text-sm md:text-lg font-semibold px-6 py-3 rounded-xl  cursor-pointer transition-transform transform duration-300 hover:scale-105 min-h-[60px] border-x-2 border-transparent bg-gradient-to-r from-[#6B41FF] from-[27%] via-[#F64CFF] via-[68%] to-[#FFC553] bg-origin-border shadow-subtle-glow hover:shadow-subtle-glow-hover"
              >
                {/* Inner content with solid background to overlay the gradient */}
                <div className="absolute inset-[1px] w-full bg-gradient-to-r from-[#7628d6] to-[#471c7c] rounded-[10px] flex items-center justify-between px-6 py-3">
                  <span className="truncate">{tool.title}</span>
                  {/* Styled Arrow Button */}
                  <span className="w-7 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] via-[68%] to-[#FFC553] flex-shrink-0">
                    <FiArrowRight className="text-white text-sm" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiTools;
