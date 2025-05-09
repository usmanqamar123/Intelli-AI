"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "../../../public";
import { useEffect, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    const currentUrl = window.location.href;
    const queryString = currentUrl.split("?")[1];
    if (queryString) {
      const queryParams = new URLSearchParams(queryString);
      const tokens = queryParams.get("tokens");
      const name = queryParams.get("name");
      localStorage.setItem("intellinameLetter",name || "");
      localStorage.setItem("intellitokens", tokens || "");
      const referralCode = queryParams.get("referral");
      localStorage.setItem("intellireferralCode", referralCode || "");
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" as="image" href={HeroSection} />
      </Head>
      <div className="hero-section w-full xl:pt-[100px] pt-[16px] px-4 md:px-0 pb-14">
        <div className="flex flex-col lg:flex-row items-center w-full justify-between relative overflow-hidden">
          {/* Left Side with Text */}
          <div className="w-full md:1/6 lg:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 md:pl-5 xl:pl-24">
            <div className="w-full flex flex-col items-center md:items-start justify-center md:justify-start text-justify md:text-left">
              <h1 className="xl:text-[68px] md:text-[60px] lg:text-[64px] text-3xl leading-tight font-bold text-white w-full">
                <span className="">
                  The Ultimate AI Toolbox for Creativity and Content Creators
                </span>
              </h1>

              <p className="md:text-[21px] text-[16px] font-light leading-[36px] text-white mt-4 px-4 lg:px-0 lg:text-start">
                Ready to create amazing content without the hassle? Welcome to
                IntelliWriter—your all-in-one AI tool for crafting images,
                voiceovers, and so much more!
              </p>

              <div className="mt-5">
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP}user/dashboard`}
                  className="btn-gradient w-full h-14 md:w-auto flex items-center justify-center rounded-full"
                >
                  <div className="gradient-btt w-full h-full"></div>
                  <div className="bnt-inner flex items-center space-x-2 p-3">
                    <Image
                      src="https://assets-global.website-files.com/65e6ec2daf39c088fe6cd402/65e6ffd665b03bba0228d49d_rocket-01.svg"
                      alt="Rocket Icon"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-xs md:text-xl">Try for Free</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side with Video/Image */}
          <div className="w-full lg:w-1/2 hidden md:flex justify-center mt-8 md:mt-0 relative overflow-hidden">
            <div className="relative">
              <Image
                src={HeroSection}
                alt="Video Thumbnail"
                width={600}
                height={400}
                loading="eager"
                decoding="async"
                priority
                className="w-full h-auto"
              />
              <button
                onClick={openModal}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="play-bttn p-4 animate-pulse rounded-full text-white transition-transform duration-500 ease-in-out hover:scale-105">
                  <FaRegCirclePlay size={80} className="" />
                </div>
              </button>
            </div>
          </div>

          {/* Video Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
              <div className="bg-[#1C0F3A] p-6 rounded-lg relative w-full max-w-4xl">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-white text-2xl"
                >
                  &times;
                </button>
                <iframe
                  className="w-full h-64 md:h-96"
                  src="https://www.youtube.com/embed/T0s0TOop-A8?si=If496X8aEnWNUeqK"
                  loading="lazy"
                  title="Watch AI Free Course"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
