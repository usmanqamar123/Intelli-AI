"use client";

import { ABOUTUS_CONTENT } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";

import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/Home2/AboutSection"));

const AboutUs = () => {
  const { aboutRef } = useWebContext();
  const content = ABOUTUS_CONTENT[0];
  return (
    <>
      <div
        className="w-full flex flex-col gap-3 py-10 items-center"
        id="about"
        ref={aboutRef}
      >
        <AboutSection />
      </div>
    </>
  );
};

export default AboutUs;
