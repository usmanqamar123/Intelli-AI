"use client"
import Image from "next/image";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Access the Intelliwriter Topical Authority Map",
    description:
      "Access the Intelliwriter Topical Authority Map: Open your web browser, visit Intelliwriter.io, log in, and navigate to the Topical Authority section from the user dashboard.",
    image: "/topical-authority/TopicalStep1.png",
  },
  {
    number: "02",
    title: "Enter your text to generate a Topical Map",
    description:
      "Within the Topical Authority tab, you'll find a text field where you can input your topic to create a structured Topical Map.",
    image: "/topical-authority/TopicalStep2.png",
  },
  {
    number: "03",
    title: "Wait for the response",
    description:
      "After generating the Topical Map, click the 'Open' button and allow some time for the system to generate core topics.",
    image: "/topical-authority/TopicalStep3.png",
  },
  {
    number: "04",
    title: "Explore your results",
    description:
      "Once the core topics are generated, click on any topic to reveal its subtopics and detailed descriptions.",
    image: "/topical-authority/TopicalStep4.png",
  },
];

const WriteArticles = () => {

  return (
 <div className="relative w-full min-h-screen font-geist text-white">
  {/* Glows */}
 <div className="absolute top-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
        <div className="absolute top-10 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px]"></div>
       <div className="absolute top-32 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>
       <div className="absolute top-1/4 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]"></div>
       <div className="absolute top-1/4 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
       <div className="absolute top-[30%] right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px]"></div>
       <div className="absolute bottom-1/2 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
       <div className="absolute bottom-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px]"></div>
       <div className="absolute bottom-1/4 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
       <div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row">
    {/* Left (Sticky) */}
    <div className="w-[90%] md:w-1/2 md:sticky md:top-36 h-screen flex items-center px-4 md:px-6 lg:px-8 z-10">
      <div className="backdrop-blur-lg p-6 lg:p-8">
        <div className="flex gap-3 items-center ">
         <Image
              src="/Logo.png"
              alt="Logo" 
              width={40}
              height={40}
              className="object-cover"
              priority
            />
        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
          How Topical Authority Builder <br />
          <span className="gradient-text not-italic text-transparent bg-clip-text">Generates</span>
        </h3>
        </div>
        <p className="mt-4 text-white text-base">
          Unlock your content strategy with our AI-powered Topical Authority Map tool. It structures your topics into an SEO-optimized roadmap, enhancing credibility and search rankings.
        </p>
      </div>
    </div>

    {/* Right (Scrollable content) */}
    <div className="w-[90%] md:w-1/2 flex flex-col md:mx-auto gap-14 py-6 md:py-16 px-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col gap-3 text-white min-h-[80vh]">
          <h1 className="font-semibold gradient-text text-3xl md:text-4xl lg:text-5xl">{step.number}</h1>
          <h4 className="font-semibold text-lg">{step.title}</h4>
          <p className="text-sm lg:text-base">{step.description}</p>
          <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              width={1600}
              height={1200}
              className="w-full h-auto object-cover rounded-2xl lg:rounded-3xl"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default WriteArticles;
