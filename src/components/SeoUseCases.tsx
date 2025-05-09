import React from "react";
import Image from "next/image";

const SeoUseCases = () => {
  const tools = [
    {
      id: "1",
      title: "Short Articles",
      description: "Get quick summaries, updates, or posts fast.",
      image: "/shortArticles.svg",
    },
    {
      id: "2",
      title: "Blog Posts",
      description: "Generate deep topic dives up to 3000 words.",
      image: "/LongArticles.svg",
    },
    {
      id: "3",
      title: "SEO Content",
      description:
        "Create keyword-optimized content to rank higher on search engines.",
      image: "/Intros.svg",
    },
    {
      id: "4",
      title: "Hands-Free Blogging",
      description:
        " Generate and publish posts automatically, even on a schedule.",
      image: "/ProductDescriptions.svg",
    },
    {
      id: "5",
      title: "AI Image Matching",
      description:
        "Find or generate blog-friendly images for each section of the article.",
      image: "/YoutubeDesc.svg",
    },
  ];

  return (
    <div className="relative w-full bg-transparent pt-10 py-6 px-4">
      <div className="w-full container mx-auto flex flex-col items-center justify-center">
        {/* TITLE */}
        <h1
          className="text-transparent bg-clip-text text-2xl md:text-4xl xl:text-[2.5rem] !font-extrabold text-center uppercase font-inter md:max-w-5xl"
          style={{
            lineHeight: 3.5,
            backgroundImage:
              "linear-gradient(to right, #6B41FF 27%, #F64CFF 68%)",
          }}
        >
          Most Popular Use Cases
        </h1>

        {/* Grid Layout for Responsiveness */}
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center items-start">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col gap-3 transition-transform transform hover:scale-105 duration-500 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className=" flex justify-center items-center">
                <Image
                  src={tool.image}
                  width={120}
                  height={150}
                  alt={tool.title}
                  className="object-cover w-full h-auto"
                  priority={false}
                />
              </div>

              {/* Button Section */}
              <div className="text-white p-4 w-full items-center text-center flex flex-col justify-center gap-2 ">
                <h1 className="font-bold">{tool.title}</h1>
                <span className="text-sm line-clamp-2">{tool.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoUseCases;
