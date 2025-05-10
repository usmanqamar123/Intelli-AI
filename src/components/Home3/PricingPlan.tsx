"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const PricingPlan = () => {
  const [plan, setPlan] = useState("monthly");

  const changePlan = () => {
    if (plan === "monthly") {
      setPlan("annual");
    } else if (plan === "annual") {
      setPlan("monthly");
    }
  };

  const plans = [
    {
      id: 1,
      planName: "Basic",
      description:
        "Perfect for starters—get essential features to kickstart your AI journey.",
      trialPrice: 5,
      monthlyPrice: 5,
      planFeatures: [
        {
          feature: "10000 Content Words",
        },
        {
          feature: "No Free Images",
        },
        {
          feature: "LLM Models Integration",
        },
        {
          feature: "10 Chats Prompts",
        },
        {
          feature: "Voice Over Limited Words",
        },
        {
          feature: "No Keyword Research",
        },
        {
          feature: "10 One Click Blog Creation",
        },
        // {
        //   feature: "All Tools Access",
        // },
        {
          feature: "No Simultaneous Users",
        },
      ],
    },

    {
      id: 2,
      planName: "Standard",
      description:
        "Unlock advanced tools for growing needs and higher productivity.",
      trialPrice: 25,
      monthlyPrice: 25,
      planFeatures: [
        {
          feature: "150000 Content Words",
        },
        {
          feature: "500 Free Images",
        },
        {
          feature: "LLM Models Integration",
        },
        {
          feature: "5000 Chats Prompts",
        },
        {
          feature: "Voice Over Unlimited Words",
        },
        {
          feature: "Keyword Research Unlimited",
        },
        // {
        //   feature: "All Tools Access",
        // },
        {
          feature: "50 One Click Blog Creation",
        },
        {
          feature: "WordPress Integration",
        },
        {
          feature: "1 WordPress Site Allowed",
        },
        {
          feature: "2 Simultaneous Users",
        },
      ],
    },

    {
      id: 3,
      planName: "Premium",
      description:
        "The ultimate package with full access and priority support for professionals.",
      trialPrice: 500,
      monthlyPrice: 500,
      planFeatures: [
        {
          feature: "Unlimited Content Words",
        },
        {
          feature: "Unlimited Free Images",
        },
        {
          feature: "LLM Models Integration",
        },
        {
          feature: "Unlimited Chats Prompts",
        },
        {
          feature: "Voice Over Unlimited Words",
        },
        {
          feature: "Keyword Research Unlimited",
        },
        // {
        //   feature: "All Tools Access",
        // },
        {
          feature: "Unlimited One Click Blog Creation",
        },
        {
          feature: "WordPress Integration",
        },
        {
          feature: "1k WordPress Blog Automation",
        },
        {
          feature: "1 WordPress Site Allowed",
        },
        {
          feature: "4 Simultaneous Users",
        },
      ],
    },
  ];
  return (
    <div className="relative  max-w-[1240px] mx-auto px-4 md:px-6 xl:px-0 w-full py-10 md:py-16 lg:py-20 z-10">
      <div className="absolute top-40 -left-40 h-[550px] w-[550px] opacity-40 bg-[#CE17F8] blur-[120px] -z-10" />
      <div className="absolute top-80 left-[30%] h-[550px] w-[550px] bg-[#7500FF] opacity-75 blur-[120px] -z-10" />
      <div className="absolute top-40 -right-40 h-[550px] w-[550px] opacity-40 bg-[#0009FF] blur-[120px] -z-10" />

      <div className="w-full max-w-[1240px]  mx-auto flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-4xl text-white gap-3 px-3 z-50">
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl !text-white font-bold text-transparent bg-clip-text">
            Choose Your{" "}
            <span className="gradient-text not-italic text-transparent bg-clip-text">
              {" "}
              Plan{" "}
            </span>
          </h2>

          <span className="font-extralight text-center max-w-lg text-base xl:text-lg">
            Simple pricing plans for everyone and every budget.
          </span>
        </div>

        <div className="flex gap-7 text-white">
          <button
            onClick={changePlan}
            className={`py-1 px-6 text-base font-medium ${
              plan === "monthly"
                ? " gradient-border-wrapper  "
                : " border-none "
            } `}
          >
            Monthly
          </button>

          <button
            onClick={changePlan}
            className={`flex items-center gap-2 ${
              plan === "annual"
                ? " gradient-border-wrapper px-10 "
                : " border-none "
            } pb-2`}
          >
            <span className="font-medium text-base md:text-lg">Annual</span>

            <span className="bg-[#8B5CF6] p-1 px-4 text-white rounded-full text-sm md:text-base">
              save 20%
            </span>
          </button>
        </div>

        {/* PRICING PLANS CARDS */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 items-center justify-center lg:justify-between gap-6">
          {plans.map((item) => (
            <div
              key={item.id}
              className={` relative flex flex-col justify-between h-full ${
                item.id === 2
                  ? " mt-6 md:mt-0 gradient-border-wrapper "
                  : " bg-black/30 "
              }  rounded-2xl `}
            >
              <div className="absolute bg-[#26184f] w-10 h-10 blur-xl top-0 left-0"></div>

              {/* <div
                className={` ${
                  item.id === 2 ? " block " : " hidden "
                } z-10 absolute -top-5 right-7 `}
              >
                <button className="bg-[#E14EE9] text-white rounded-lg capitalize p-2 px-3">
                  Popular
                </button>
              </div> */}

              <div>
                <div className="flex flex-col gap-6 p-4 md:p-7">
                  <div className="space-y-1 !text-white">
                    <h4 className="font-bold !text-white text-lg md:text-xl lg:text-2xl">
                      {item.planName}
                    </h4>
                    <p className="text-sm xl:text-base !text-white">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-5 text-white">
                    <div className="flex gap-2 items-center">
                      <h4 className="font-bold text-3xl md:text-4xl lg:text-[50px]">
                        ${" "}
                        {plan === "annual"
                          ? (item.monthlyPrice * 12 * 0.8).toFixed(2)
                          : (item.monthlyPrice - 0.01).toFixed(2)}
                        / {plan === "monthly" ? "mo" : "yr"}
                      </h4>
                    </div>

                    {/* <div className="flex gap-1">
                      <p className={`text-sm xl:text-base text-gray-200 `}>
                        billed {plan === "monthly" ? "monthly" : "annually"}
                      </p>
                    </div> */}
                  </div>
                  <div className="w-full">
                    <Link href={`${process.env.NEXT_PUBLIC_APP}user/plans`}>
                      <button
                        className={`w-full text-sm md:text-base flex gradient-bg items-center justify-center px-6 py-4 text-center font-bold rounded-full text-white capitalize hover:scale-105 duration-500`}
                      >
                        Get Started today
                      </button>
                    </Link>
                  </div>
                </div>

                <span className="mt-10 font-medium px-4 md:px-7 text-white text-lg md:text-xl lg:text-2xl">
                  Inclusions:
                </span>

                <div className="flex flex-col gap-3 p-4 md:p-7 !text-white">
                  {item.planFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="h-full flex items-center gap-3 !text-white text-sm md:text-base"
                    >
                      <span>
                        <FaCheck
                          size={25}
                          className="border border-[#298CFD] text-[#298CFD] rounded-full w-5 h-5 p-1"
                        />
                      </span>
                      {feature.feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
