import { CreateOptimizeDominateData } from "../../constants/SeoArticleData";
import Image from "next/image";
import React from "react";
import GradientText from "../GradientText";
import Button from "../SEOButton";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const CreateOptimizeDominate = () => {
  return (
    <main className="relative w-full max-w-[1240px] px-4 md:px-6 xl:px-0  mx-auto py-10 md:py-16 lg:py-20 flex flex-col gap-10 md:gap-16 lg:gap-20 justify-start items-center z-10">
      <div className="absolute top-0 -left-1/2 w-[800px] h-[800px] bg-[#0009FF] rotate-[40deg] opacity-30 blur-3xl rounded-full -z-10" />
      <div className="absolute top-96 -left-[40%] w-[400px] h-[400px] bg-[#208EFB] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-32 left-[150px] w-[400px] h-[400px] bg-[#0009FF] rotate-[40deg] opacity-40 blur-3xl rounded-full -z-10" />
      <div className="absolute -bottom-40 -right-[40%] w-[700px] h-[600px] bg-[#7500FF] rotate-[30deg] opacity-40 blur-3xl rounded-full -z-10" />

      {/* TOP TEXT WITH TITLE AND DESCRIPTION */}
      <section className="flex flex-col items-center gap-4 text-center">
        <GradientText
          whiteText="Everything You Need to"
          gradientText="Create, Optimize, and Dominate"
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-normal leading-tight max-w-3xl"
          breakLine={true}
        />
        <p className="text-white text-base md:text-lg max-w-2xl">
          One Powerful Platform. Every Content Format. Unlimited Possibilities.
        </p>
      </section>

      {/* TOOLS' SECTION */}
      {/* SEO KEYWORD RESEARCH & BLOG IMAGE GENERATOR */}
      <section className="w-full flex flex-col gap-20 lg:gap-40">
        {CreateOptimizeDominateData.map((item, index) => (
          <article
            key={index}
            className={`w-full flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } justify-between items-start gap-6 md:gap-10 lg:gap-16`}
          >
            {/* LEFT SIDE IMAGE */}
            <div className="w-full lg:w-1/2">
              <Image
                src={item.image}
                width={590}
                height={390}
                alt={`${item.titleWhite} ${item.titleGradient}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 590px"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* RIGHT SIDE TEXT */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6 md:gap-8 lg:gap-10">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="w-fit bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8] rounded-full p-[1.25px]">
                  <div className="bg-[#010002] text-white text-sm px-4 py-1 uppercase rounded-full">
                    {item.topText}
                  </div>
                </div>
                <GradientText
                  whiteText={item.titleWhite}
                  gradientText={item.titleGradient}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-normal leading-tight"
                />
                <p className="text-base md:text-lg text-white/90">
                  {item.description}
                </p>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 font-bold">
                {item.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-base md:text-lg text-white/90"
                  >
                    <IoCheckmarkCircleOutline
                      size={18}
                      className="text-[#298CFD]"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                text={item.buttonText}
                variant={item.buttonVariant}
                className="pt-2 pb-2 px-4 md:py-3 md:px-6 text-sm md:text-base font-semibold"
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CreateOptimizeDominate;
