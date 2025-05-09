"use client";
import { FAQs } from "@/components";
import { SeoFaqs, SeoKeywordFaqs } from "@/constants/FaqsData";

import { MoretoolsALL, seoKeyword } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { keywordResearchHero } from "../../../public";
import { keywordResearchFeature } from "../../constants/index";
import { keywordcard } from "../../constants/index";
import Button from "@/components/Button";

const ExcludedTitle = "SEO Keyword Researcher"; // Specify the title to exclude

const seoKeywordResearch = () => {
  const filteredTools = MoretoolsALL.filter(
    (tool) => tool.title !== ExcludedTitle
  );

  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  return (
    <div className="w-full flex flex-col justify-center items-center my-16">
      <div className="w-full h-full hero-section flex flex-col px-2 justify-center items-center">
        <div className="max-w-[1400px] container mx-auto md:px-0 py-20 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 text-white flex flex-col mx-10 justify-between gap-3">
            <h1 className="text-3xl md:text-5xl mx-5 lg:mx-0 font-semibold capitalize w-[90%] xl:w-[85%] lg:text-start text-center">
              SEO <span className="gradient-span-1"> Keyword Research</span>
            </h1>
            <p className="text-sm md:text-lg mx-5 lg:mx-0 my-4 w-[90%] text-center lg:text-start">
              Elevate your website SEO with our cutting-edge AI-powered SEO
              keyword research tool, designed to meet the unique needs of
              professionals, website owner&apos;s, and creatives. Whether
              you&apos;re a website owner, SEO researcher, freelancer, or
              industry expert, our tool combines creativity and precision to
              produce SEO-optimized keywords that engage and inform. Experience
              a powerful writing platform that helps you generate high-quality,
              search-engine-friendly keywords quickly, keeping you ahead in your
              field and effectively conveying your ideas to a wider audience.
            </p>
            <div className="w-fit mx-auto lg:mx-0 justufy-center lg:justify-start text-center lg:text-left">
              <Link
                href={
                  tokens
                    ? `${process.env.NEXT_PUBLIC_APP}user/seo-keyword-research`
                    : `${process.env.NEXT_PUBLIC_APP}auth/register`
                }
              >
                <Button title="Try Now !" btnType="button" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 pt-5 md:pt-5 lg:pt-0 flex justify-center">
            <Image
              src={keywordResearchHero}
              alt="SEO Keyword Research"
              width={370}
              height={370}
              className="md:max-w-lg w-full h-auto md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>

      {/*  */}

      <div className="max-w-[1400px] xl:px-16 md:px-6 py-10 px-2 justify-center items-center flex flex-col">
        <h2 className="lg:text-6xl md:text-5xl text-4xl font-normal relative lg:p-10 md:p-6 p-4">
          <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
            Keyword Research
          </span>
          <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
            Key Features
          </span>
        </h2>
      </div>

      <div className="max-w-[1400px] w-10/12 md:w-11/12 mx-auto grid grid-cols-1 px-2 justify-center items-center gap-x-6 gap-y-4 md:grid-cols-2 ">
        {keywordResearchFeature.map((value) => {
          return (
            <>
              <div
                className="rounded-lg py-4 px-4 flex items-center justify-center bg-white/5 relative backdrop-blur-md text-white overflow-hidden border border-[#FFFFFF14]  hover:scale-105 hover:bg-[#67508471] hover:transition hover:ease-in-out hover:duration-500"
                key={value.id}
              >
                <div className="flex gap-4 items-center">
                  <div>
                    <Image
                      width={99}
                      height={99}
                      src={value.image}
                      priority={true}
                      alt="images"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg md:text-xl font-semibold relative top-1">
                      {value.title}
                    </h2>
                    <p className="text-sm md:text-lg mx-5 lg:mx-0  w-[90%] text-center lg:text-start ">
                      {value.para}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/*  */}
      <div className="max-w-[1400px] xl:px-16 md:px-6 px-2 py-10  text-white  flex flex-col items-justify ">
        <div className="py-10">
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-normal relative lg:p-10 md:p-6 p-4">
            <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
              How Keyword
            </span>
            <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
              Generates
            </span>
          </h2>
          <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">
            Unlock your creativity with our AI-powered SEO keyword research
            tool. This tool transforms your text into engaging, SEO-optimized
            keywords, streamlining the writing process. Ideal for professionals,
            website owner&apos;s, and SEO, it helps generate high-quality SEO
            keywords that resonates with your audience and boosts your online
            presence.
          </p>
          <div></div>
        </div>
        <div className="w-11/12 h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16 ">
          {seoKeyword.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="rounded-md shadow-[#ac7aeb] shadow-2xl">
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  alt="Steps"
                  loading="lazy"
                  className="w-full
                   rounded-xl border border-[#1f1f7a]"
                />
              </div>
              <div className="flex flex-col pt-5 text-center">
                <h2 className="text-lg md:text-xl font-semibold my-2">
                  {item.step}
                </h2>
                <p className="text-base md:text-lg">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" max-w-[1400px] w-[92%] grid mx-auto  md:grid-cols-2 grid-cols-1 gap-12 px-2 justify-center items-center md:gap-0 md:relative top-20">
        <div className="relative top-4 lg:top-40 xl:top-36 flex flex-col items-center gap-4 md:gap-8">
          <h1 className="text-3xl  text-white md:text-5xl mx-5 lg:mx-0 font-semibold capitalize w-[90%] xl:w-[85%] lg:text-start text-center">
            AI<span className="gradient-span-1 "> Keyword Research </span> With
            a 99% Success Rate
          </h1>
          <div>
            <p className="md:text-[21px] text-center text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">
              With AI-driven tools, marketers can stay competitive in the
              ever-evolving digital landscape, ensuring their content aligns
              with audience needs and search engine algorithms.
            </p>
          </div>
          <div className="w-1/2 ">
            <Button
              title=" Make AI Keyword Research for Free"
              btnType="button"
              className="mt-4 text-2xl block mx-auto"
            />
          </div>

          {/*
           */}
        </div>

        <div className="w-10/12 mx-auto md:w-full grid md:grid-cols-2 grid-cols-1 gap-6">
          {keywordcard.map((value, index) => {
            const isLast = index === keywordcard.length - 1;
            return (
              <div
                key={value.id}
                className={`flex flex-col items-center rounded-lg py-12 px-4 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center hover:scale-105 hover:bg-[#67508471] hover:transition hover:ease-in-out hover:duration-500 ${
                  isLast ? "flex justify-center items-center " : ""
                }`}
              >
                <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
                <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
                <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
                <div>
                  <Image
                    width={32}
                    height={32}
                    src={value.image}
                    priority={true}
                    alt="images"
                  />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-semibold my-2">
                    {value.title}
                  </h2>
                </div>
                <div>
                  <p>{value.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1400px] reason xl:px-16 md:px-6  py-10 mt-8 text-white flex flex-col px-2 justify-center items-center">
        <div className="py-10">
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-normal relative lg:p-10 md:p-4 p-4 mb-3">
            <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
              DISCOVER MORE
            </span>
            <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
              AI TOOLS
            </span>
          </h2>
          <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">
            Unleash the power of AI with our advanced AI SEO Keyword Research
            tool. Streamline your SEO and boost productivity with this
            sophisticated tool, which simplifies creating seo-friendly and
            impactful seo keywords.
          </p>
        </div>
        <div className="w-full md:w-11/12 justify-center items-center md:mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredTools.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-900 p-3 gap-3 bg-opacity-20 w-[100%] lg:w-[100%] mx-auto "
            >
              <span
                className="items-center justify-center block w-8 h-8 rounded-md text-lg p-2 "
                style={{
                  backgroundColor: item.bgcolor,
                  color: item.color,
                }}
              >
                {React.createElement(item.icon)}
              </span>
              <div className="text text-white ">
                <h2 className="text-xl">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1400px] mt-6 px-2 justify-center items-center flex">
        <FAQs faqs={SeoKeywordFaqs} />
      </div>
      <div className=" border border-[#554869] w-full h-72 bg-gradient-to-br from-[#201634] to-[#643cba8a] relative  my-16 flex items-center justify-center">
        <div className="absolute top-24 w-full flex flex-col items-center justify-center z-10">
          <p className="text-center text-xl md:text-4xl text-white">
            Start generating your{" "}
            <span className="gradient-span-1">SEO Keywords </span>now
          </p>
          <div className="mt-4">
            <Link
              href={
                tokens
                  ? `${process.env.NEXT_PUBLIC_APP}user/seo-keyword-research`
                  : `${process.env.NEXT_PUBLIC_APP}auth/register`
              }
            >
              <Button
                title="Start Now !"
                btnType="button"
                className="mt-4 text-2xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default seoKeywordResearch;
