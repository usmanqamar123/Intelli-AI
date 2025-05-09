"use client";
import { FAQs } from "@/components";
import { AbstractGeneratorFaqs } from "@/constants/FaqsData";
import { MoretoolsALL, Abstract } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { aichat } from "../../../public";
import Button from "@/components/Button";

const ExcludedTitle = "AI Summarizer"; // Specify the title to exclude

const AbstractGenerator = () => {

  const filteredTools = MoretoolsALL.filter((tool) => tool.title !== ExcludedTitle);

  const tokens =
    typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;

  return (
    <div className="my-16">
      <div className="h-full hero-section">
        <div className="container mx-auto md:px-0 py-20 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 text-white flex flex-col mx-10 justify-between gap-3">
            <h1 className="text-3xl md:text-5xl mx-5 lg:mx-0 font-semibold capitalize w-[92%] xl:w-[85%] lg:text-start text-center">
              AI <span className="gradient-span-1"> SUMMARIZER</span>
            </h1>
            <p className="text-sm md:text-lg mx-5 lg:mx-0 my-4 w-[90%] text-center lg:text-start">
              An AI summarizer is a tool that automatically creates
              concise summaries of longer documents using advanced algorithms
              and natural language processing. It extracts key ideas and
              essential information, providing a quick overview of the original
              content. This tool is valuable for professionals, academics, and
              creatives who need to efficiently summarize and understand large
              volumes of text.{" "}
            </p>
            <div className="w-fit mx-auto lg:mx-0 justufy-center lg:justify-start text-center lg:text-left">
              <Link href={tokens ? `${process.env.NEXT_PUBLIC_APP}user/ai-summarizer` : `${process.env.NEXT_PUBLIC_APP}auth/register`}>
                <Button title="Try For Free !" btnType="button" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 pt-5 md:pt-5 lg:pt-0 flex justify-center">
            <Image
              src={aichat}
              alt="AI Chat"
              width={320}
              height={320}
              className="md:max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="xl:px-16 md:px-6 px-4 py-10 text-white  flex flex-col items- justify ">
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
            Our AI summarizer offers a dynamic journey of creativity,
            allowing users to transform complex texts into concise, vivid
            summaries with ease. Leveraging the power of AI, it brings your
            ideas to life by streamlining the content summarization process.
            With just a few clicks, the tool generates engaging and precise
            abstracts, making it an invaluable resource for efficiently
            producing high-quality summaries and enhancing the clarity and
            impact of your content.
          </p>
        </div>
        <div className="w-11/12 h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16">
          {Abstract.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="rounded-md shadow-[#ac7aeb] shadow-2xl">
                <Image
                  src={item.image}
                  alt="Steps"
                  loading="lazy"
                  height={400}
                  width={450}
                  className="w-full rounded-xl border border-[#1f1f7a]"
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
      <div className="reason xl:px-16 md:px-6 px-4 py-10 mt-8 text-white flex flex-col">
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
            Unleash the full potential of AI with our state-of-the-art abstract
            generator, expertly crafted to streamline your content summarization
            process and enhance your productivity. This sophisticated tool
            simplifies the complexities of creating concise and impactful
            summaries, empowering you to produce clear and precise abstracts
            with exceptional efficiency. By leveraging advanced algorithms, our
            AI Summarizer helps you distill complex documents into their
            essential points, making it easier to convey key information quickly
            and effectively.
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
      <div className="mt-6">
        <FAQs faqs={AbstractGeneratorFaqs} />
      </div>
      <div className="border border-[#554869] w-full h-72 bg-gradient-to-br from-[#201634] to-[#643cba8a] relative  my-16 flex items-center justify-center">
        <div className="absolute top-24 w-full flex flex-col items-center justify-center z-10">
          <p className="text-center text-xl md:text-4xl text-white">
            Start using {" "}
            <span className="gradient-span-1">AI Summarizer</span> now for
            free
          </p>
          <div className="mt-4">
            <Link href={tokens ? `${process.env.NEXT_PUBLIC_APP}user/ai-summarizer` : `${process.env.NEXT_PUBLIC_APP}auth/register`}>
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

export default AbstractGenerator;
