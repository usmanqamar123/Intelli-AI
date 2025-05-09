"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const IntelliPricingPlan = () => {
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
    <div className="relative w-full bg-transparent px-4 py-7">
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
            Choose Your Plan
          </h2>

          <p className="font-extralight text-center max-w-lg text-sm xl:text-base">
            Simple pricing plans for everyone and every budget.
          </p>
        </div>

        <div className="flex gap-7 text-white">
          <button
            onClick={changePlan}
            className={`pb-3 text-base md:text-lg font-medium ${
              plan === "monthly"
                ? " border-b-2 border-[#8B5CF6] "
                : " border-none "
            } `}
          >
            Monthly
          </button>

          <button
            onClick={changePlan}
            className={`flex items-center gap-2 ${
              plan === "annual"
                ? " border-b-2 border-[#8B5CF6] "
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

        <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:justify-between gap-6">
          {plans.map((item) => (
            <div
              key={item.id}
              className={` relative flex flex-col justify-between h-full ${
                item.id === 2
                  ? " mt-6 md:mt-0 bg-pricing border-[#E2E8F080]"
                  : " bg-[#241a47]  border-[#241a47]  "
              }  rounded-2xl border `}
            >
              <div className="absolute bg-[#26184f] w-10 h-10 blur-xl top-0 left-0"></div>

              <div
                className={` ${
                  item.id === 2 ? " block " : " hidden "
                } z-10 absolute -top-5 right-7 `}
              >
                <button className="bg-[#E14EE9] text-white rounded-lg capitalize p-2 px-3">
                  Popular
                </button>
              </div>

              <div>
                <div className="flex flex-col gap-3 p-4 md:p-7 border-b border-[#E5E7EB]">
                  <div className="space-y-1 text-white">
                    <h4 className="font-bold text-xl md:text-2xl lg:text-3xl">
                      {item.planName}
                    </h4>
                    <p className="text-sm xl:text-base text-gray-200">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-3 text-white">
                    <div className="flex gap-2 items-center">
                      <h4 className="font-bold text-xl md:text-2xl lg:text-3xl">
                        $ {plan === "annual"
                          ? (item.monthlyPrice * 12 * 0.8).toFixed(2)
                          : (item.monthlyPrice - 0.01).toFixed(2)}
                        / {plan === "monthly" ? "mo" : "yr"}
                      </h4>
                      {/* <span
                        className="rounded-lg px-2 text-[#1B1237]"
                        style={{
                          backgroundImage:
                            "linear-gradient(101.82deg, #00BCFE 35%, #CB41FF 76%, #F64CFF 95%)",
                        }}
                      >
                        1 day free trial
                      </span> */}
                    </div>

                    <div className="flex gap-1">
                      {/* <p className="text-sm xl:text-base text-gray-200">
                        then only $
                        {plan === "annual"
                          ? (item.monthlyPrice * 12 * 0.8).toFixed(2)
                          : (item.monthlyPrice - 0.01).toFixed(2)}
                        / {plan === "monthly" ? "mo" : "yr"}
                      </p> */}

                      <p className={`text-sm xl:text-base text-gray-200 `}>
                        billed {plan === "monthly" ? "monthly" : "annually"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 md:p-7">
                  {item.planFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="h-full flex items-center gap-3 text-white text-sm md:text-base"
                    >
                      <span>
                        <FaCheck
                          size={25}
                          className={` ${
                            item.id === 2
                              ? " bg-[#F5F3FF] text-[#D941FF] "
                              : " bg-[#F5F3FF] text-[#8B5CF6] "
                          }  rounded-full w-5 h-5 p-1`}
                        />
                      </span>
                      {feature.feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center p-4 md:p-7">
                <Link href={`${process.env.NEXT_PUBLIC_APP}user/plans`}>
                  <button className={`w-full text-sm md:text-base flex gap-3 items-center justify-center ${
                            item.id === 2
                              ? " bg-[#D941FF] "
                              : " bg-purple-gradient"
                          } p-2 px-4 text-center font-bold rounded-xl text-white capitalize hover:scale-105 duration-500`}>
                    Start today
                    <FaArrowRight size={17} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntelliPricingPlan;
