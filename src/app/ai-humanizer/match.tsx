import React from "react";
import Image from "next/image";

const industries = [
  {
    title: "Small Businesses",
    description:
      "Small businesses can utilize Intelli Bypass to detect AI content, whether it's from freelancers, agencies, or other sources, and humanize it to ensure their website, blogs, and ad copies truly reflect their brand and messaging.",
    imageUrl: "/ai-bypass/match/small-business.svg",
  },
  {
    title: "Advertising Professionals",
    description:
      "With Intelli Bypass, advertisers can transform their AI-generated ad copies into engaging and persuasive content that bypasses AI detectors, driving readers to take action.",
    imageUrl: "/ai-bypass/match/advertising.svg",
  },
  {
    title: "SEO Experts",
    description:
      "Futureproof your AI-generated content from Google penalties with our AI checker and bypasser, eliminating the risk of being flagged by AI detectors and remaining compliant with search engine guidelines.",
    imageUrl: "/ai-bypass/match/seo.svg",
  },
  {
    title: "Students",
    description:
      "Writing essays and assignments can take up a significant amount of time for students. With HIX Bypass, you can efficiently generate drafts that bypass AI detection and plagiarism checks.",
    imageUrl: "/ai-bypass/match/student.svg",
  },
];

const Match = () => {
  return (
    <div className="max-w-[1400px] py-10 md:py-14 lg:py-16 w-[90%] mx-auto px-4 flex flex-col gap-12">
      <div className="mx-auto w-full px-4">
        <h1 className="text-white text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] text-center font-normal lg:w-full">
          Suitable for{" "}
          <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
            Many Industries
          </span>{" "}
          and Professions
        </h1>
      </div>
      <div className="mx-auto max-w-[1150px]">
        <p className="text-center  md:text-[21px] text-[16px] font-[500] w-[100%] md:max-w-[73%] mx-auto md:w-full  !text-white leading-[22px] md:leading-[36px]">
          Intelli Bypass is helpful for a wide range of occasions. Here&apos;s a
          look at some of the people who can benefit from using our free AI
          content detector and AI Humanizer
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2 gap-y-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1f1738] to-[#3b2d5c] p-4 rounded-lg"
          >
            <div className="flex flex-col justify-center items-center md:items-start gap-x-3 lg:flex-row gap-4">
              <span className="w-[10%] md:w-[8%] lg:w-[30%] h-full self-center">
                <Image
                  alt="Bypass AI With a 99% Success Rate"
                  loading="lazy"
                  width="170"
                  height="170"
                  decoding="async"
                  data-nimg="1"
                  // priority={true}
                  style={{ color: "transparent" }}
                  src={industry.imageUrl}
                />
              </span>
              <div className="space-y-[6px] text-center md:text-start">
                <h2 className="!text-white text-[22px] md:text-[20px] mb-2 xl:text-[22px] font-semibold">
                  {industry.title}
                </h2>
                <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
                  {industry.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Match;
