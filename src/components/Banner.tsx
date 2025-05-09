"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CTA_Graph, CTA_Shape1, CTA_Shape3 } from "../../public";
import Button from "./Button";

const tokens =
  typeof window !== "undefined" ? sessionStorage.getItem("intellitokens") : null;

const Banner = () => {
  const router = useRouter();

  const handleClick = () => {
    if (tokens) {
      router.push("/user/dashboard");
    } else {
      router.push("/auth/register");
    }
  };
  return (
    <div className="w-full p-5 md:px-10 xl:px-24 pb-16 relative">
      <div className="bg-gradient-to-r from-blue-500/10 to-pink-600/10 text-white md:flex items-center justify-center px-2 py-4 md:p-10 rounded-2xl relative">
        <div>
          <Image
            src={CTA_Shape3}
            className="absolute top-0 left-0"
            alt="cta shape 3"
            width={650}
            height={500}
          />
        </div>

        <div className="md:w-1/2 p-5 h-full filter saturate-150">
          <Image
            src={CTA_Graph}
            alt="cta graph"
            width={400}
            height={250}
            className="saturate-150"
          />
        </div>

        <div className="md:w-1/2 py-3 px-5 md:p-5 relative z-10">
          <h2 className="font-vietnam font-normal text-lg md:text-3xl lg:text-4xl md:my-6 relative">
            More than 13000 teams use our platform
          </h2>

          <p className="text-base my-4 md:my-8">
            Experience the difference and elevate your content creation with our
            cutting-edge tools and support.
          </p>
          <Button title="Get Started" btnType="button" onClick={handleClick} />
        </div>
      </div>

      <div className="absolute right-0 bottom-0 md:block hidden md:mr-8 mt-10 z-0 filter hue-rotate-[270deg]">
        <Image src={CTA_Shape1} alt="cta shape 1" width={300} height={100} />
      </div>
    </div>
  );
};

export default Banner;
