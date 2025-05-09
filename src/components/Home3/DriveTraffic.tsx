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
    <section className="w-full relative py-10 md:py-16 lg:py-20 font-inter">
      <div className="absolute top-0 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px] z-0"></div>
      <div className="absolute top-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px]"></div>

      {/* Top Section */}
      <div className="flex  flex-col items-center text-center gap-6 mb-12 px-4 z-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold !text-white uppercase">
          Generate High QualityContent
          <br />& Drive Traffic
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          Ready to create amazing content without the hassle? Welcome to
          IntelliWriter—your all-in-one AI tool for crafting images,articles,
          wordpress integration, seo keyword research, AI models, voiceovers,
          and so much more!
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative w-full overflow-hidden py-8 px-10 md:px-12">
        <div className="flex w-max animate-scrollX gap-4">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-[280px] h-[150px] bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={200}
                height={200}
                className="object-contain"
              />
              {/* Or use an SVG icon instead */}
              {/* <svg ... /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriveTraffic;
