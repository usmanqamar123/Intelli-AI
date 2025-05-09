import React from "react";
import { PiTidalLogoBold } from "react-icons/pi";
import { SiAudiomack, SiOpenaigym } from "react-icons/si";

const Models = () => {
  const modelData = [
    {
      icon: <SiOpenaigym className="lg:text-5xl md:text-4xl text-3xl text-white" />,
      label: "Intelli. GPT-4",
    },
    {
      icon: <PiTidalLogoBold className="lg:text-5xl md:text-4xl text-3xl text-white" />,
      label: "Intelli. Imagine",
    },
    {
      icon: <SiAudiomack className="lg:text-5xl md:text-4xl text-3xl text-white" />,
      label: "Intelli. Voice",
    },
  ];

  return (
    <div className="w-full flex items-center flex-col justify-center">
      <div className="xl:px-16 md:px-6 px-4 pb-10 w-full container">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4">
          <span className="gradient-span-1 text-white relative font-[600]">ADVANCED AI LLMs</span>
        </h2>
        <p className="md:text-[21px] text-start text-[16px] font-[500] leading-[36px] !text-white lg:px-10 p-4">
          Start your journey with GPT-4, the latest in Advanced AI LLMs, and discover a world where technology enhances creativity. Explore how you can create compelling content and voiceovers, bringing your unique ideas to life. Begin your adventure today and experience the joy of creativity unleashed in the digital world.
        </p>
        <p className="md:text-[21px] text-start text-[16px] font-[500] leading-[36px] !text-white lg:px-10 p-4">
          We monitor AI technologies - constantly updating our models so that you don&apos;t have to. We are truly your one suite AI toolbox.
        </p>
      </div>

      <div className="w-full relative h-[470px] -mb-10">
        <div className="w-full h-[300px] absolute -top-10 left-0 -z-0" />
        <div className="w-full h-[300px] absolute bottom-0 left-0 -z-0" />
        <div className="w-full h-[400px] opacity-30 absolute flex flex-col justify-between -z-10">
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full " />
          <div className="border-b h-1 border-white-40 w-full sm:hidden block" />
          <div className="border-b h-1 border-white-40 w-full sm:hidden block" />
        </div>

        <div className="w-full opacity-30 h-[500px] flex absolute -top-10 justify-between -z-10">
          {Array(7)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="border-l w-1 border-white-40 h-[500px]" />
            ))}
        </div>

        <div className="lg:p-20 py-10 px-3 relative w-full h-[425px] flex justify-between gap-6 md:flex-row flex-col items-center z-30">
          {modelData.map((model, index) => (
            <div
              key={index}
              className="p-3 md:border-2 border flex gap-4 justify-between items-center border-white rounded-full text-white lg:text-2xl md:text-xl text-lg pr-4 font-semibold"
            >
              <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-12 h-12 rounded-full border border-white bg-gradient-to-tr from-[#a65dff]/40 to-transparent flex items-center justify-center">
                {model.icon}
              </div>
              <span>{model.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
