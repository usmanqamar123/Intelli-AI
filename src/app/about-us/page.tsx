"use client";

import { ABOUTUS_CONTENT } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });
const FAQs = dynamic(() => import("@/components/FAQs"), { ssr: false });
import { Accord } from "@/constants";

const AboutUs = () => {
  const { aboutRef } = useWebContext();
  const content = ABOUTUS_CONTENT[0];
  return (
    <>
      <div
        className="w-full  flex flex-col gap-3 py-10 items-center"
        id="about"
        ref={aboutRef}
      >
        <div className="xl:px-16 md:px-6 px-4  flex items-center justify-center flex-col pt-3 py-0 w-full container">
          <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4">
            <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
              ABOUT US
            </span>
          </h2>

          <p className="md:text-[21px] w-[100%] md:max-w-[70%] text-center  text-[14px] font-[500] leading-[22px] md:leading-[36px] !text-white lg:px-10 md:p-6">
            Intelliwriter is an AI-based content generator designed to simplify
            and enhance your writing experience. Whether you are a content
            creator, marketer,student, or business owner, Intelliwriter is here
            to take your content creation process to a whole new level.
          </p>
        </div>
        <>
          <AboutSection />
          <FAQs faqs={Accord} />
        </>
      </div>
    </>
  );
};

export default AboutUs;
