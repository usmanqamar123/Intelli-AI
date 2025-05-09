"use client";
import { FAQs } from "@/components";
import { SeoFaqs } from "@/constants/FaqsData";

import { MoretoolsALL, stepsChat, seoContent } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { articleHero } from "../../../public";
import Button from "@/components/Button";

const ExcludedTitle = "SEO Article Writer"; // Specify the title to exclude

const SeoArticleWriter = () => {
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
              SEO <span className="gradient-span-1"> ARTICLE WRITER</span>
            </h1>
            <p className="text-sm md:text-lg mx-5 lg:mx-0 my-4 w-[90%] text-center lg:text-start">
              Elevate your content creation with our cutting-edge AI-powered SEO
              article writer, designed to meet the unique needs of
              professionals, academics, and creatives. Whether you&apos;re a
              professor, student, researcher, or industry expert, our tool
              combines creativity and precision to produce SEO-optimized
              articles that engage and inform. Experience a powerful writing
              platform that helps you generate high-quality,
              search-engine-friendly content quickly, keeping you ahead in your
              field and effectively conveying your ideas to a wider audience.
            </p>
            <div className="w-fit mx-auto lg:mx-0 justufy-center lg:justify-start text-center lg:text-left">
              <Link
                href={
                  tokens
                    ? `${process.env.NEXT_PUBLIC_APP}user/chat`
                    : `${process.env.NEXT_PUBLIC_APP}auth/register`
                }
              >
                <Button title="Try For Free !" btnType="button" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 pt-5 md:pt-5 lg:pt-0 flex justify-center">
            <Image
              src={articleHero}
              alt="SEO Article Writer"
              width={370}
              height={370}
              priority={true}
              className="md:max-w-lg w-full h-auto md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] xl:px-16 md:px-6 px-4 py-10 text-white  flex flex-col items-justify ">
        <div className="py-10">
          <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4">
            <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
              How Content
            </span>
            <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
              Generates
            </span>
          </h2>
          <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">
            Unlock your creativity with our AI-powered SEO article writer. This
            tool transforms your text into engaging, SEO-optimized content,
            streamlining the writing process. Ideal for professionals,
            academics, and creatives, it helps generate high-quality content
            that resonates with your audience and boosts your online presence.
          </p>
        </div>
        <div className="w-11/12 h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16">
          {seoContent.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="rounded-md shadow-[#ac7aeb] shadow-2xl">
                <Image
                  src={item.image}
                  width={400} // Set the width
                  height={400} // Set the height to be the same as width
                  alt="Steps"
                  loading="lazy"
                  className="
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
      <div className="max-w-[1400px] reason xl:px-16 md:px-6 px-4 py-10 mt-8 text-white flex flex-col  justify-center items-center">
        <div className="py-10">
          <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-4 p-4 mb-3">
            <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
              DISCOVER MORE
            </span>
            <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
              AI TOOLS
            </span>
          </h2>
          <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">
            Unleash the power of AI with our advanced AI SEO Article Writer.
            Streamline your content summarization and boost productivity with
            this sophisticated tool, which simplifies creating concise and
            impactful abstracts. Leverage advanced algorithms to distill complex
            documents into clear, precise summaries, making key information easy
            to convey efficiently.
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
        <FAQs faqs={SeoFaqs} />
      </div>
      <div className="max-w-[1400px] border border-[#554869] w-full h-72 bg-gradient-to-br from-[#201634] to-[#643cba8a] relative  my-16 flex items-center justify-center">
        <div className="absolute top-24 w-full flex flex-col items-center justify-center z-10">
          <p className="text-center text-xl md:text-4xl text-white">
            Start generating your{" "}
            <span className="gradient-span-1">SEO ARTICLE </span>Content now for
            free
          </p>
          <div className="mt-4">
            <Link
              href={
                tokens
                  ? `${process.env.NEXT_PUBLIC_APP}user/chat`
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

export default SeoArticleWriter;
