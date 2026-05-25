"use client";
import { Star } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaCheck,
  FaCrown,
  FaGem,
  FaHeadset,
  FaRocket,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Image from "next/image";

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
      monthlyPrice: 15,
      yearlyPrice: 140,
      planFeatures: [
        {
          feature: "50000 Words Content",
        },
        {
          feature: "50 Image Generation",
        },
        {
          feature: "AI Humanizer",
        },
        {
          feature: "AI Chat",
        },
        {
          feature: "One Click Blog Creation",
        },
        {
          feature: "10 Topical Builder",
        },
        {
          feature: "Keyword Research",
          available: true,
        },
        // {
        //   feature: "Simultaneous User",
        //   available: false,
        // },
        // {
        //   feature: "WordPress Integration",
        //   available: false,
        // },
        // {
        //   feature: "WordPress Site Allowed",
        //   available: false,
        // },
        // {
        //   feature: "WordPress Blog Automation",
        //   available: false,
        // },
      ],
    },

    {
      id: 2,
      planName: "Standard",
      description:
        "Unlock advanced tools for growing needs and higher productivity.",
      trialPrice: 25,
      monthlyPrice: 29,
      yearlyPrice: 275,
      planFeatures: [
        {
          feature: "1M Words Content",
        },
        {
          feature: "500 Image Generation",
        },
        {
          feature: "AI Humanizer",
        },
        {
          feature: "AI Chat",
        },
        {
          feature: "One Click Blog Creation",
        },
        {
          feature: "100 Topical Builder",
        },
        {
          feature: "Keyword Research Unlimited",
        },
        {
          feature: "2 Simultaneous Users",
        },
        {
          feature: "WordPress Integration",
        },
        {
          feature: "SEO Plugin Free Access Only",
        },
        // {
        //   feature: "WordPress Blog Automation",
        //   available: false,
        // },
      ],
    },

    {
      id: 3,
      planName: "Premium",
      description: "The ultimate package with full access for professionals.",
      trialPrice: 500,
      monthlyPrice: 200,
      yearlyPrice: 1900,
      planFeatures: [
        {
          feature: "Unlimited Words Content",
        },
        {
          feature: "Unlimited Image Generation",
        },
        {
          feature: "AI Humanizer",
        },
        {
          feature: "AI Chat",
        },
        {
          feature: "One Click Blog Creation",
        },
        {
          feature: "Unlimited Topical Builder",
        },
        {
          feature: "Keyword Research",
        },
        {
          feature: "4 Simultaneous Users",
        },
        {
          feature: "WordPress Integration",
        },
        {
          feature: "1k WordPress Blog Automation",
        },
        {
          feature: "SEO Plugin Agents Pro Access",
        },
      ],
    },
  ];

  function doubleNumbersInFeature(featureStr: string, isYearly: boolean) {
    if (!isYearly) return featureStr;

    const regex = /(\d[\d,.]*)/;

    const match = featureStr.match(regex);
    if (!match) return featureStr;

    let numberStr = match[1];
    const cleanNumberStr = numberStr.replace(/,/g, "");
    const number = parseFloat(cleanNumberStr);

    if (isNaN(number)) return featureStr;

    const doubledNumber = number * 2;

    const formattedNumber = doubledNumber.toLocaleString();

    return featureStr.replace(numberStr, formattedNumber);
  }

  return (
    <div className="relative  max-w-[1240px] mx-auto px-4 md:px-6 xl:px-0 w-full py-10 md:py-12 z-10">
      <Image
        src="/purple-spot.webp"
        alt=""
        width={200}
        height={200}
        className="absolute top-0 lg:top-24 left-0 opacity-70 pointer-events-none -z-[1]"
        aria-hidden
      />
      <Image
        src="/blue-spot.webp"
        alt=""
        width={200}
        height={200}
        className="absolute top-0 lg:top-24 right-0 opacity-70 pointer-events-none -z-[1] scale-x-[-1]"
        aria-hidden
      />

      <div className="w-full max-w-[1240px]  mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-4xl text-white gap-3 px-3 z-50">
          <p className="gradient-border-wrapper gradient-text-new rounded-full px-5 py-2 mb-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/90 uppercase flex items-center justify-center gap-2">
            <Star className="text-[#A855F7] text-base shrink-0" />
            Simple Pricing, Maximum Value
          </p>
          {/* TITLE */}
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] text-white font-bold font-jakarta">
            Choose the Perfect Plan
            <br />
            <span className="gradient-text block">That Grows With You</span>
          </h2>

          <span className="font-extralight text-center max-w-lg text-base xl:text-lg">
            Simple pricing plans for everyone and every budget.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center p-[4.3px] gap-0 rounded-full bg-[#10182899] border-t-[0.86px] border-t-[#36415399] w-[247px] h-[49px]">
            <button
              onClick={() => setPlan("monthly")}
              className={`flex-1 h-full rounded-full font-medium transition-all duration-300
      ${
        plan === "monthly"
          ? "bg-gradient-to-r from-[#3B1666] to-[#561382] text-white"
          : "text-white/70"
      }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setPlan("annual")}
              className={`flex-1 h-full rounded-full flex items-center justify-center gap-2 font-medium transition-all duration-300
      ${
        plan === "annual"
          ? "bg-gradient-to-r from-[#3B1666] to-[#561382] text-white"
          : "text-white/70"
      }`}
            >
              Annual
            </button>
          </div>

          <span className="text-[#00D492] text-sm md:text-base font-medium whitespace-nowrap ml-auto">
            &lt; Save up to 20%
          </span>
        </div>
        {/* PRICING PLANS CARDS */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 items-center justify-center lg:justify-between gap-6">
          {plans.map((item) => (
            <div
              key={item.id}
              className={` relative flex flex-col justify-between h-full ${
                item.id === 2
                  ? " mt-6 md:mt-0 gradient-border-wrapper bg-[#040311] "
                  : " bg-[#040311] border border-[#E2E8F080]"
              }  rounded-2xl `}
            >
              <div className="absolute bg-[#26184f] w-10 h-10 blur-xl top-0 left-0"></div>

              <div
                className={` ${
                  item.id === 2 ? " block " : " hidden "
                } absolute -top-4 left-1/2 -translate-x-1/2 z-20 items-center justify-center`}
              >
                <button className="bg-[#E14EE9] text-white rounded-full px-4 py-2 capitalize text-sm font-medium shadow-lg">
                  Most Popular
                </button>
              </div>

              <div className="flex flex-col h-full">
                <div className="flex flex-col gap-6 p-4 md:p-7">
                  {/* Plan Header */}
                  <div className="flex items-start gap-4 !text-white">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                        item.id === 1
                          ? "bg-[#371077] text-white"
                          : item.id === 2
                            ? "bg-[#023DCC] text-white"
                            : "bg-[#03402C] text-white"
                      }`}
                    >
                      {item.id === 1 ? (
                        <FaRocket />
                      ) : item.id === 2 ? (
                        <FaCrown />
                      ) : (
                        <FaGem />
                      )}
                    </div>

                    {/* Text */}
                    <div className="space-y-1">
                      <h3 className="font-bold !text-white text-lg md:text-xl lg:text-2xl">
                        {item.planName}
                      </h3>

                      <p className="text-sm xl:text-base !text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 text-white">
                    <div className="flex gap-2 items-center justify-center text-center">
                      <h4 className="font-bold text-xl md:text-3xl lg:text-[40px]">
                        ${" "}
                        {plan === "annual"
                          ? (item.yearlyPrice - 0.01).toFixed(2)
                          : (item.monthlyPrice - 0.01).toFixed(2)}
                        <span className="text-base text-white/60">
                          {" "}
                          / {plan === "monthly" ? "mo" : "yr"}{" "}
                        </span>
                      </h4>
                    </div>

                    {/* <div className="flex gap-1">
                      <p className={`text-sm xl:text-base text-gray-200 `}>
                        billed {plan === "monthly" ? "monthly" : "annually"}
                      </p>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaCheck
                      className={`text-sm ${
                        item.id === 1
                          ? "text-purple-500"
                          : item.id === 2
                            ? "text-blue-500"
                            : "text-green-500"
                      }`}
                    />

                    <span
                      className={`font-semibold text-sm ${
                        item.id === 1
                          ? "text-purple-500"
                          : item.id === 2
                            ? "text-blue-500"
                            : "text-green-500"
                      }`}
                    >
                      7-Day Free Trial
                    </span>
                  </div>
                  <hr className="border-white/10 border-[0.5px]" />
                </div>

                <div className="flex-1 flex flex-col gap-3 p-4 md:px-7 !text-white">
                  {item.planFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="h-full flex items-center gap-3 !text-white text-sm md:text-base"
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          item.id === 1
                            ? "bg-[#371077]"
                            : item.id === 2
                              ? "bg-[#023DCC]"
                              : "bg-[#03402C]"
                        }`}
                      >
                        {feature.available === false ? (
                          <FaTimes size={10} className="text-red-500" />
                        ) : (
                          <FaCheck
                            size={10}
                            className={`${
                              item.id === 1
                                ? "text-white"
                                : item.id === 2
                                  ? "text-white"
                                  : "text-white"
                            }`}
                          />
                        )}
                      </span>
                      {doubleNumbersInFeature(
                        feature.feature,
                        plan === "annual",
                      )}{" "}
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-center mt-auto p-6">
                  <Link href={`${process.env.NEXT_PUBLIC_APP}user/plans`}>
                    <button
                      className="min-w-[220px] text-sm md:text-base gap-2 flex items-center justify-center px-6 py-4 text-center font-bold rounded-xl text-white capitalize hover:scale-105 duration-500"
                      style={{
                        backgroundColor:
                          item.id === 1
                            ? "#371077"
                            : item.id === 2
                              ? "#023DCC"
                              : "#03402C",
                      }}
                    >
                      Get Started
                      <FaArrowRight className="text-sm" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Features */}
        <div className="border border-white/10 rounded-3xl bg-black/40 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Trial */}
            <div className="p-6 flex items-center gap-4 border-b lg:border-b-0 lg:border-r-1 border-white/10">
              <div className="flex items-center justify-center text-[#512296] text-3xl shrink-0">
                <FaRocket />
              </div>

              <div>
                <h4 className="text-white font-semibold">7-Day Free Trial</h4>

                <p className="text-sm text-white/60 mt-1">
                  Try all premium AI tools before upgrading.
                </p>
              </div>
            </div>

            {/* Cancel Anytime */}
            <div className="p-6 flex items-center gap-4 border-b lg:border-b-0 border-white/10">
              <div className="flex items-center justify-center text-[#48A9F7] text-3xl shrink-0">
                <MdVerified />
              </div>

              <div>
                <h4 className="text-white font-semibold">Cancel Anytime</h4>

                <p className="text-sm text-white/60 mt-1">
                  No long-term contracts or hidden commitments.
                </p>
              </div>
            </div>

            {/* Secure */}
            <div className="p-6 flex items-center gap-4 border-b lg:border-b-0 border-white/10">
              <div className="flex items-center justify-center text-[#9C3070] text-3xl shrink-0">
                <FaShieldAlt />
              </div>

              <div>
                <h4 className="text-white font-semibold">Secure & Reliable</h4>

                <p className="text-sm text-white/60 mt-1">
                  Enterprise-level security for your data and content.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="p-6 flex items-center gap-4">
              <div className="flex items-center justify-center text-[#1DE987] text-3xl shrink-0">
                <FaHeadset />
              </div>

              <div>
                <h4 className="text-white font-semibold">24/7 Support</h4>

                <p className="text-sm text-white/60 mt-1">
                  Dedicated support team available anytime you need help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
