import React from "react";
import Image from "next/image";

const logos = [
  "/WordPress.png",
  "/Shopify.png",
  "/WordPress.png",
  "/Shopify.png",
  "/WordPress.png",
  "/Shopify.png",
];

const DriveTraffic = () => {
  return (
    <section className="w-full relative font-geist px-4 md:px-6 xl:px-0 py-10 md:py-12 z-10">
      <div className="absolute top-0 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px] -z-10" />

      {/* Top Section */}
      <div className="flex  flex-col items-center text-center gap-6 mb-12 !text-white">
        <span className="text-3xl md:text-4xl lg:text-5xl max-w-3xl !leading-snug font-bold">
          Generate High Quality Content & Drive Traffic
        </span>
        <span className="text-base lg:text-lg text-white max-w-2xl">
          Ready to create amazing content without the hassle? Welcome to
          IntelliWriter—your all-in-one AI tool for crafting images,articles,
          wordpress integration, seo keyword research, AI models, voiceovers,
          and so much more!
        </span>
      </div>

      {/* Cards Section */}
      <div className="relative w-full overflow-hidden py-8 px-10 md:px-12">
        <div className="flex w-max animate-scrollX gap-4">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-[291px] h-[163px] bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriveTraffic;
