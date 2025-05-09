import React from "react";
import { PiTidalLogoBold } from "react-icons/pi";
import { SiAudiomack, SiOpenaigym } from "react-icons/si";

const Models = () => {
  const features = [
    {
      icon: (
        <SiOpenaigym className="lg:text-5xl md:text-4xl text-3xl text-white" />
      ),
      label: "Intelli. GPT-4",
    },
    {
      icon: (
        <PiTidalLogoBold className="lg:text-5xl md:text-4xl text-3xl text-white" />
      ),
      label: "Intelli. Imagine",
    },
    {
      icon: (
        <SiAudiomack className="lg:text-5xl md:text-4xl text-3xl text-white" />
      ),
      label: "Intelli. Voice",
    },
  ];

  return (
    <div className="w-full flex items-center flex-col justify-center relative">
      {/* Background borders behind everything */}
      <div className="absolute inset-0 -z-10">
        {/* Horizontal lines */}
        <div className="w-full h-[650px] sm:h-[450px] opacity-30 flex flex-col justify-between">
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full sm:hidden block" />
          <div className="border-b h-1 border-white-40 w-full sm:hidden block" />
        </div>
        {/* Vertical lines */}
        <div className="w-full h-[750px] sm:h-[550px] opacity-30 flex absolute top-0 justify-between">
          <div className="border-l w-1 border-white-40 h-full" />
          <div className="border-l w-1 border-white-40 h-full" />
          <div className="border-l w-1 border-white-40 h-full" />
          <div className="border-l w-1 border-white-40 h-full" />
          <div className="border-l w-1 border-white-40 h-full" />
          <div className="border-l w-1 border-white-40 h-full" />
          <div className="border-l w-1 border-white-40 h-full" />
          <div className="border-l w-1 border-white-40 h-full sm:block hidden" />
          <div className="border-l w-1 border-white-40 h-full md:block hidden" />
          <div className="border-l w-1 border-white-40 h-full md:block hidden" />
          <div className="border-l w-1 border-white-40 h-full md:block hidden" />
          <div className="border-l w-1 border-white-40 h-full md:block hidden" />
        </div>
      </div>

      <div className="xl:px-4 md:px-6 px-4 pb-6 w-full container">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4">
          <span className="gradient-span-1 text-white relative text-justify font-[600]">
            Advanced AI Tools{" "}
          </span>
        </h2>

        <p className="md:text-[21px] text-start text-[16px] font-[500] leading-[36px] !text-white lg:px-10 px-2">
          We bring the latest AI technology to your fingertips. With powerful
          tools like GPT-4, IntelliImagine, and IntelliVoice, you can generate
          content, design visuals, and enhance your work like never before.
        </p>
      </div>

      <div className="lg:p-20 px-3 relative w-full h-[225px] flex justify-between lg:justify-center gap-4 lg:gap-24 md:flex-row flex-col items-center z-30">
        {features.map(({ icon, label }, index) => (
          <div
            key={index}
            className="p-3 md:border-2 border flex gap-4 justify-between items-center border-white rounded-full text-white lg:text-2xl md:text-xl text-lg pr-4 font-semibold"
          >
            <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-12 h-12 rounded-full border border-white bg-gradient-to-tr from-[#a65dff]/40 to-transparent flex items-center justify-center">
              {icon}
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
