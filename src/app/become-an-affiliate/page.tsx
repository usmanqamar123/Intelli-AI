"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { affilliateData } from "@/constants";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AffilliateProgramFAQs } from "@/constants/FaqsData";

import image from "../../../public/affiliate-program/Affiliate-Icon1.png";
import { FAQs } from "@/components";
import styles from "./page.module.css";
import { Donts, Dos } from "@/constants/affiliate";
const page = () => {
  return (
    <>
      <div className="">

        <div className="h-screen hero-section">
          {/* Hero Section */}
          <div className="w-full h-full flex flex-col items-center justify-center ">
            <div className="w-full md:w-[60%] mx-auto  flex flex-col items-center justify-center z-10 mt-[-100px] lg:-mt-[100px]  px-4 lg:gap-3 gap-5 ">
              <div>
                <Image
                  src={image}
                  width="130"
                  height="130"
                  loading="lazy"
                  alt="images"
                  className={`${styles.upDown} w-full h-full`}
                />
              </div>

              <h1 className="bg-[#6424b3]/60 border border-[#6424b3] text-white rounded-full text-lg opacity-60 font-semibold w-fit mx-auto px-5 py-[6px] sm:text-xs sm:font-normal shadow-md">
                Affiliate Program
              </h1>

              <div className="text-white lg:relative lg:top-3 relative top-5 text-[28px] leading-[52px] md:text-[54px]  text-center font-normal lg:w-full">
                Earn{" "}
                <span className="gradient-span-1 font-bold text-[28px] md:text-[54px]">
                  15% Commission{" "}
                </span>{" "}
                <br />
                From Your Every Referral
              </div>
            </div>
            {/* Lucrative Affiliate Program */}
            <div className="md:w-[60%] w-full   flex flex-col mx-auto items-center justify-center ">
              <div className="w-full lg:relative lg:top-3 relative top-5 px-2">
                <p className="lg:relative lg:top-3 relative top-5  md:text-[21px] text-[16px] font-[400]  !text-white/80  text-center md:text-center  ">

                  Sign up for the affiliate program of Intelli.AI, the most
                  powerful, all-in-one writing copilot your audience will love.
                  Become our partner and get up to 15% commission for every
                  referral.
                </p>
              </div>

              <div className="flex justify-center items-center gap-5 mt-5">

              <Link
                className="lg:relative lg:top-5 relative top-5"
                href="/auth/register-affiliate"
              >
                <Button
                  title="Sign Up "
                  btnType="button"
                  className="mt-4 text-2xl"
                />
              </Link>

              <Link
                className="lg:relative lg:top-5 relative top-5"
                href="/auth/login-affiliate"
              >
                <Button
                  title="Sign In "
                  btnType="button"
                  className="mt-4 text-2xl"
                />
              </Link>
              </div>
            </div>
            {/* Lucrative Affiliate Program end*/}
          </div>
        </div>
        {/* Hero Secrtion End */}

        {/* Earn With Intelli.AI's Diverse Product Range */}
        <div className="py-12 w-full mx-auto px-4 ">
          <h2 className="text-white  text-[28px] leading-[52px] md:text-[54px]  text-center font-normal lg:w-full">
            Earn With{" "}
            <span className="gradient-span-1 font-bold text-[28px] md:text-[54px]">
              Intelli.AI&apos;s{" "}
            </span>{" "}
            Diverse Product Range
          </h2>

          <p className="pt-2 relative top-4 text-center  w-full md:w-[] !text-white/80 text-base md:text-[21px] font-[400]">

            Intelli.AI comes with multiple products and features. You can get
            paid by promoting any of them.
          </p>
          {/* card section */}

          <div className="mt-8  sm:mt-16 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-10/12 gap-4 px-8">
            {affilliateData.map((item, index) => (
              <Link
                href={item.route}
                key={index}
                className="flex flex-col items-center rounded-lg py-4 px-6 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] hover:transition hover:ease-in-out hover:duration-500"
              >
                <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
                <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
                <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
                <div className="h-[50%] flex items-center justify-center relative">
                  <Image
                    src={item.image}
                    alt="Features"
                    width={100}
                    height={0}
                    style={{width:"100px",height:"auto"}}
                  />
                </div>
                <div className="h-[50%] pt-2 md:pt-3 relative">
                  <h2 className="text-[22px] md:text-[20px] mb-2 xl:text-[22px]">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Earn With Intelli.AI's Diverse Product Range end*/}
        {/* Become a Intelli.AI Affiliate in 3 Steps */}
        <div className=" py-10 md:py-14 lg:py-20 border border-[#554869] bg-gradient-to-br from-[#201634] to-[#643cba8a] w-[80%] mx-auto rounded-2xl my-16">
          <div className="max-w-[1268px] mx-auto px-4">
            <h2 className="text-white  text-[28px] leading-[52px] md:text-[54px]  text-center font-normal lg:w-full">
              Become a Intelli.AI Affiliate in
              <span className="gradient-span-1 font-bold text-[28px] md:text-[54px]">
                {" "}
                3 Steps{" "}
              </span>
            </h2>
            <ul className="flex flex-col items-start justify-center gap-x-3 pt-5 md:flex-row md:pt-12 gap-6 md:gap-5">
              <li className="text-center w-full">
                <span className="text-white text-3xl font-bold md:text-5xl">
                  1
                </span>
                <p className="pt-2 text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200 ">
                  Sign up for our affiliate program and get your referral link.
                </p>
              </li>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 shrink-0 text-white translate-y-[28px] hidden md:block"
              >
                <path
                  opacity="0.8"
                  d="M19.334 23.333 26.666 16l-7.334-7.333"
                  stroke="currentColor"
                  strokeWidth="3.667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="0.5"
                  d="M5.333 23.333 12.668 16 5.334 8.667"
                  stroke="currentColor"
                  strokeWidth="3.667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <li className="text-center w-full">
                <span className="text-white text-3xl font-bold md:text-5xl">
                  2
                </span>
                <p className="pt-2 text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200  ">
                  Share your link on your website or other platforms.
                </p>
              </li>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 shrink-0 text-white translate-y-[28px] hidden md:block "
              >
                <path
                  opacity="0.8"
                  d="M19.334 23.333 26.666 16l-7.334-7.333"
                  stroke="currentColor"
                  strokeWidth="3.667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="0.5"
                  d="M5.333 23.333 12.668 16 5.334 8.667"
                  stroke="currentColor"
                  strokeWidth="3.667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <li className="text-center w-full ">
                <span className="text-white text-3xl font-bold md:text-5xl">
                  3
                </span>
                <p className="pt-2 text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200  ">
                  Earn commissions from sales you and your sub-affiliates drive.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Become a Intellu.AI Affiliate in 3 Steps end */}

        {/* DO's DONT's */}
        <div className=" py-10 md:py-14 lg:py-20 w-[80%] mx-auto flex  flex-col lg:flex-row justify-center gap-10">
          {/* Dos  */}
          <div className="w-full lg:w-1/2 border border-[#554869] bg-gradient-to-br from-[#201634] to-[#643cba8a] rounded-2xl p-6 ">
            <h2 className="text-center text-xl sm:text-4xl text-white font-bold">
              <span className="gradient-span-1"> Do&apos;s </span>
            </h2>
            {Dos.map((item) => (
              <ul className="space-y-4 mt-4" key={item.id}>
                <li className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 border border-green-500 rounded-full">
                    <FaCheck className="text-green-500" />
                  </span>
                  <p className="text-white">{item.title}</p>
                </li>
              </ul>
            ))}
          </div>
          {/* Donts  */}
          <div
            className="w-full lg:w-1/2 p-6 border border-[#554869] bg-gradient-to-br from-[#201634] to-[#643cba8a]
             rounded-2xl "
          >
            <h2 className="text-center text-xl sm:text-4xl text-white font-bold">
              <span className="gradient-span-1"> Don&apos;ts </span>
            </h2>
            {Donts.map((item) => (
              <ul className="space-y-4 mt-4" key={item.id}>
                <li className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 border border-red-500 rounded-full">
                    <FaTimes className="text-red-500" />
                  </span>
                  <p className="text-white">{item.title}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
        {/* DO's DONT's */}

        {/* FAQs */}
        <div className="mt-6 flex justify-center items-center">
          <FAQs faqs={AffilliateProgramFAQs} />
        </div>
        {/* FAQs */}

        {/* Start Earning with Our Affiliate Program Now */}
        <div className="w-full h-96 bg-gradient-to-br from-[#201634] to-[#643cba8a] relative my-16 flex items-center justify-center py-6">
          <div className="absolute top-15 w-full flex flex-col items-center justify-center z-10 px-2">
            <h2 className="text-white  text-[28px] leading-[52px] md:text-[54px]  text-center font-normal lg:w-full">
              Start Earning with Our{" "}
              <span className="gradient-span-1 font-bold text-[28px] md:text-[54px]">
                Affiliate{" "}
              </span>{" "}
              Program Now
            </h2>
            
            <p className="relative top-5 text-center  w-full md:w-[75%] !text-white/80 text-base md:text-[21px] font-[400]">

              Earn generous commissions while promoting a cutting-edge AI tool
              that will revolutionize your writing experience. Sign up and make
              money today!
            </p>
            <div className="mt-5">
              <Link href="/auth/register-affiliate">
                <Button
                  title="Sign Up Now "
                  btnType="button"
                  className="mt-4 text-2xl"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;