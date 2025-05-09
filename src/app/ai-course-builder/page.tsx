"use client";
import { FAQs } from "@/components";
import { CourseBuilderFAQs } from "@/constants/FaqsData";
import { MoretoolsALL, dataCourse, stepsCourse } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { coursecontent } from "../../../public";
import Button from "@/components/Button";
import React from "react";

const ExcludedTitle = "Course Builder"; 

const CourseBuilderPage = () => {
  const filteredTools = MoretoolsALL.filter(
    (tool) => tool.title !== ExcludedTitle
  );

  const tokens =
    typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;

  return (
    <div className="my-16">
      <div className="h-full hero-section flex px-2 justify-center items-center">
        <div className="container mx-auto md:px-0 py-20 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 text-white flex flex-col mx-10 justify-between gap-3">
            <h1 className="text-3xl md:text-5xl mx-5 lg:mx-0 font-semibold capitalize w-[90%] xl:w-[85%] lg:text-start text-center">
              <span>
                AI <span className="gradient-span-1">Course </span>Builder
              </span>
            </h1>
            <p className="text-sm md:text-lg mx-5 lg:mx-0 my-4 w-[90%] text-center lg:text-start">
              Explore your creativity through digital art exploration. Immerse
              yourself in a realm of creation and dynamic prompts that nurture
              artistic expression. Whether you&apos;re a
              Professor,Teacher,Academic controller or seeking to infuse
              creativity into your projects, our AI-powered tool empowers you to
              craft captivating Courses within seconds.
            </p>
            <div className="w-fit mx-auto lg:mx-0 justufy-center lg:justify-start text-center lg:text-left">
              <Link href={tokens ? `${process.env.NEXT_PUBLIC_APP}user/course-builder` : `${process.env.NEXT_PUBLIC_APP}auth/register`}>
                <Button title="Try For Free !" btnType="button" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-5 md:pt-5 lg:pt-0 flex justify-center">
            <Image
              src={coursecontent}
              alt="Course Builder"
              width={320}
              height={320}
              className="md:w-[30rem] md:h-[30rem] z-10  rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="xl:px-16 md:px-6  py-10 text-white  flex flex-col px-2 justify-center items-center ">
        <div className="py-10">
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-normal relative lg:p-10 md:p-6 p-4">
            <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
              UNLOCK YOUR
            </span>
            <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
              POTENTIALS
            </span>
          </h2>
          <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">
            Embracing the age of Artifical Intelligence. Discover Boundless
            power and impact of AI Course Builder.
          </p>
        </div>
      </div>

      <div className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5 px-2 justify-center items-center ">
        {dataCourse.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col rounded-lg py-4 px-4 bg-white/5 relative backdrop-blur-md text-white gap-2 overflow-hidden border border-[#FFFFFF14]"
          >
            <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
            <span className=" bg-[#f3e8ff] m-2 block w-10 h-10 rounded-md text-[#9333ea] text-2xl  p-2">
              {React.createElement(item.icon)}
            </span>
            <div className="text text-white p-2">
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="xl:px-16 md:px-6  py-10 text-white  flex flex-col px-2 justify-center items-center ">
        <div className="py-10">
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-normal relative lg:p-10 md:p-6 p-4">
            <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
              HOW CONTENT
            </span>
            <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
              GENERATES
            </span>
          </h2>
          <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">
            Embark on an unstoppable journey of your with our Course Builder –
            where your text come to life with captivating course builder in just
            a few clicks!
          </p>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16">
          {stepsCourse.map((item) => (
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
              <div className="flex flex-col pt-5">
                <h2 className="text-lg md:text-xl font-semibold text-center my-2">
                  {item.step}
                </h2>
                <p className="text-base md:text-lg text-center">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reason xl:px-16 md:px-6  py-10 mt-8 text-white flex flex-col px-2 justify-center items-center">
        <div className="py-10">
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-normal relative lg:p-10 md:p-6 p-4">
            <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10">
              DISCOVER MORE
            </span>
            <span className="gradient-span-1 text-white relative lg:p-6 p-6 font-[600]">
              AI TOOLS
            </span>
          </h2>
          <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">
            Unlock the power of AI with our suite of innovative tools, designed
            to simplify your tasks and elevate your productivity to new heights!{" "}
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
      <div className="mt-6 flex px-2 justify-center items-center">
        <FAQs faqs={CourseBuilderFAQs} />
      </div>
      <div className="border border-[#554869] w-full h-72 bg-gradient-to-br from-[#201634] to-[#643cba8a] relative  my-16 flex items-center justify-center">
        <div className="absolute top-24 w-full flex flex-col items-center justify-center z-10">
          <p className="text-center text-xl md:text-4xl text-white">
            Start building your{" "}
            <span className="gradient-span-1">Courses </span>now for free
          </p>
          <div className="mt-4">
            <Link href={tokens ? `${process.env.NEXT_PUBLIC_APP}user/course-builder` : `${process.env.NEXT_PUBLIC_APP}auth/register`}>
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

export default CourseBuilderPage;
