"use client";
import React, { useState } from "react";

import PricingPlan from "../../components/HomeNew/IntelliPricingPlan";
import IntelliComparisonPlan from "../../components/HomeNew/IntelliComparison";
import { PricingPlanFAQs } from "@/constants/FaqsData";
import { features } from "@/constants/FaqsData";
import { FAQs } from "@/components";
import { motion } from "framer-motion";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
// Define planType as a union type
type PlanType = "monthly" | "yearly";
const Pricingplan = () => {
  const [planType, setPlanType] = useState<PlanType>("monthly");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "How does  intelliwriter's plans and pricing work?",
      answer:
        "We offer transparent, no-hidden-charge plans and pricing for various types of users. In addition, we provide add-on subscription packages allowing you to increase the number of words available under your paid plan.",
    },
    {
      id: 2,
      question: "What if I exceed the word limit of my plan?",
      answer:
        "You'll need to upgrade to another plan or purchase additional credits to get more words to continue using our services.",
    },
    {
      id: 3,
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial that includes 10,000 content words, 10 chat prompts, and unlimited voice-over capabilities. This allows you to fully explore our platform and experience the power of IntelliWriter's AI-driven tools before committing to a paid plan.",
    },
    {
      id: 4,
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you're free to change your plan at any time. You can easily upgrade, downgrade or cancel your plan through your account settings.",
    },
    {
      id: 5,
      question: "Do you offer any pay-as-you-go option?",
      answer:
        "No. Currently all our plans are monthly or annual subscription plans.",
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards, Apple Pay, Google Pay, Link and PayNow.",
    },
  ];

  return (
    <>
      <div className="pricing w-full xl:pt-20 md:pt-10 pt-6">
        {/* <h1 className="md:text-[60px] text-2xl gap-3 !leading-normal flex flex-col justify-between font-bold text-white w-full relative text-center">
          Plan & Pricing
        </h1>
        <p className="md:text-[21px] text-center text-[16px] font-[500] leading-[36px] pt-4 !text-white pb-6 md:pb-10">
          Simple pricing plans for everyone and every budget.
        </p> */}
        {/* Pricing section */}
        <PricingPlan />
        {/* compare plan section */}
        {/* <div className="container mx-auto py-8 px-6 lg:px-20 text-white">
          <h2 className="md:text-[60px] text-2xl gap-3 !leading-normal flex flex-col justify-between font-bold text-white w-full relative text-center mb-8">
            Compare All Features
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${
                planType === "monthly"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gray-700"
              }`}
              onClick={() => setPlanType("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                planType === "yearly"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gray-700"
              }`}
              onClick={() => setPlanType("yearly")}
            >
              Yearly
            </button>
          </div>

          <div className="overflow-x-auto border rounded-lg ">
            <table className="min-w-full bg-[#1a013b] text-white border border-gray-200 rounded-lg overflow-hidden ">
              <thead>
                <tr className="bg-[#4d0663]">
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold">
                    Basic Pack
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">
                    Standard Pack
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">
                    Premium Pack
                  </th>
                </tr>
              </thead>
              <tbody>
                {features[planType].map((feature: any, index: any) => (
                  <tr key={index}>
                    <td className="border-t border-gray-200 py-4 px-6">
                      {feature.name}
                    </td>
                    <td className="border-t border-gray-200 py-4 px-6 text-center">
                      {feature.basic}
                    </td>
                    <td className="border-t border-gray-200 py-4 px-6 text-center">
                      {feature.standard}
                    </td>
                    <td className="border-t border-gray-200 py-4 px-6 text-center">
                      {feature.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

        <IntelliComparisonPlan />

        {/* <FAQs faqs={PricingPlanFAQs} /> */}
        <div className="relative w-full bg-transparent px-4  font-inter py-10">
          <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-4xl text-white gap-3 px-3">
              {/* TITLE */}
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(81.88deg, #BFAAFF 0%, #F64CFF 78%, #FFC553 100%)",
                }}
              >
                Got Questions? We’ve Got Answers!
              </h2>

              <p className="font-extralight text-center text-sm">
                We&apos;re dedicated to assisting individuals interested in
                generating AI-driven content and images.
              </p>
            </div>

            <div className="w-full flex flex-col gap-5">
              {faqs.map((item, index) => (
                <div key={index}>
                  {/* Question Section */}
                  <div
                    className="flex flex-col items-center justify-between px-5 py-4 bg-[#1B1337] border-2 h-auto text-white cursor-pointer"
                    style={{
                      borderImage:
                        "linear-gradient(to right, #6B41FF 50%, #F64CFF 80%, #FFC553 100%)  1% round",
                    }}
                    onClick={() => toggleAnswer(index)}
                  >
                    <div className="w-full flex justify-between items-center text-base xl:text-lg">
                      {item.question}

                      {/* Animated Icon */}
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {openIndex === index ? (
                          <IoMdRemove size={20} />
                        ) : (
                          <IoMdAdd size={20} />
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
                      <div className="px-0 py-2 mt-4 text-left bg-[#1b1337af] border-t !border-[#433C5A] h-auto text-white">
                        {item.answer}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricingplan;
