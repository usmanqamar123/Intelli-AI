import Image from "next/image";
import React from "react";
import { Logo, SocialApp, SocialAppMob } from "../../public";

const SocialApps = () => {
  return (
    <div className="xl:px-16 md:px-6 px-4 w-full container">
      <div className="">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4">
          <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
            EXPLORE OUR
          </span>
          <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
            SOCIAL SPHERE
          </span>
        </h2>
        <div className="flex items-center justify-center py-10">
          <div className="max-w-[90%] sm:max-w-[70%] md:max-w-[90%]  relative flex items-center justify-center">
            <div className="absolute justify-self-center bg-[#0f062c] rounded-full w-[15%] h-[10%] md:w-[10%] md:h-[10%] flex items-center justify-center ">
              <Image
                src={Logo}
                alt="Intelliwriter"
                width={100}
                height={100}
                priority={true}
              />
            </div>
            <Image
              src={SocialAppMob}
              alt={""}
              width={1200}
              height={1200}
              className="md:hidden"
            />
            <Image
              src={SocialApp}
              alt={""}
              width={1200}
              height={800}
              className="hidden md:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialApps;
