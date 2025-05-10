"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link"

interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

interface SeoFAQsProps {
  faqs?: AccordProps[];
}

const Faqs: React.FC<SeoFAQsProps> = ({}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "What is IntelliWriter and how does it help with content creation?",
      answer:
        "IntelliWriter is an all-in-one AI writing assistant that helps you create high-quality articles, build topical authority, generate SEO-optimized content, and even produce visuals and voiceovers. Whether you're a blogger, marketer, or business owner, it simplifies the entire content creation process with AI-driven efficiency.",
    },
    {
      id: 2,
      question: "How does the Article Writer ensure quality and originality?",
      answer:
        "The Article Writer uses advanced natural language models to generate human-like, plagiarism-free content based on your input. It follows SEO best practices and your desired tone, ensuring the final output is both engaging and search engine-friendly.",
    },
    {
      id: 3,
      question: "What is the Topical Authority Builder and why is it important?",
      answer:
        "The Topical Authority Builder helps you create a structured content strategy by generating clusters of related articles around your main niche. This improves your domain authority and helps Google recognize your site as a trusted source in your field, boosting search rankings.",
    },
    {
      id: 4,
      question: "Can I create visuals and voiceovers with IntelliWriter?",
      answer:
        "Yes, IntelliWriter includes an AI Image Generator and Voiceover tool. You can create custom visuals to enhance your articles and generate natural sounding voiceovers for videos, podcasts, or accessibility—without needing any design or audio editing skills.",
    },
    {
      id: 5,
      question: "Is there discount for non-profits?",
      answer: "Please get in touch with us below.",
    },
  ];
  return (
    <div className="relative w-full max-w-[1240px] font-geist max-auto px-4 md:px-6 xl:px-0 py-10 md:py-12 z-10">
      {/* GRADIENT */}
      <div className="absolute top-1/2 -left-96 h-[400px] w-[400px] bg-[#CE17F8] blur-[120px] opacity-40 -z-10" />
      {/* <div className="absolute bottom-0 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px] -z-10" /> */}
      <div className="absolute top-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] -z-10" />
      <div className="absolute top-1/2 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] -z-10" />
      <div className="absolute top-0 -left-64 h-24 lg:h-32 w-10/12 lg:w-1/4 opacity-40 bg-[#7500FF] blur-[120px] -z-10" />

      <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center">
        <div className="flex flex-col w-1/2 text-white gap-6 px-3 mx-auto">
          {/* TITLE */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text">
            Got Questions?
            <br />
            <span className="gradient-text  text-transparent bg-clip-text leading-snug">
              We’ve Got Answers!
            </span>
          </h2>

          <p className="!font-extralight text-base lg:text-lg !text-white max-w-lg">
            We&apos;re dedicated to assisting individuals interested in
            generating AI-driven content and images.
          </p>
<Link href="/contact">
          <button className="mt-6 w-fit gradient-bg rounded-full font-semibold text-white !px-14 py-4">
            Get in Touch
          </button>
          </Link>
        </div>

        <div className="w-1/2 flex flex-col gap-5">
          {faqs.map((item, index) => (
            <div key={index}>
              {/* Question Section */}
              <div
                className="flex flex-col items-center justify-between px-5 py-4 bg-transparent h-auto text-white cursor-pointer gradient-border-wrapper !rounded-md z-50"
                onClick={() => toggleAnswer(index)}
              >
                <div className="w-full flex justify-between items-center text-base md:text-lg xl:text-2xl">
                  {item.question}

                  {/* Animated Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <IoIosArrowUp size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </motion.div>
                </div>

                {/* Answer Section */}
                <motion.div
                  initial={false}
                  animate={{
                    maxHeight: openIndex === index ? "300px" : "0px",
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-full"
                >
                  <div className="px-0 py-2 mt-4 text-left bg-transparent h-auto text-white">
                    {item.answer}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
