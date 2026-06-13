"use client";
import {
  ArrowRight,
  Check,
  Crown,
  Gem,
  Headset,
  Lock,
  RefreshCcw,
  Rocket,
  Shield,
  ShieldCheck,
  Sparkles,
  Undo,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  SectionBadge,
  TrustBarCell,
  TrustBarGrid,
  sectionSubtextClass,
} from "./SectionBadge";

const PricingPlan = () => {
  const [plan, setPlan] = useState("monthly");

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
          feature: "Super SEO Agents (Limited Access)",
        },
        {
          feature: "AI Humanizer",
        },
        {
          feature: "10 Topical Builder",
        },
        {
          feature: "50 Image Generation",
        },
        {
          feature: "One Click Blog Creation",
        },
        {
          feature: "No Wordpress Blog Automation",
        },
        {
          feature: "No Advanced Agents Access",
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
          feature: "Super SEO Agents Pro Access",
        },
        {
          feature: "Wordpress Blog Automation",
        },
        {
          feature: "AI Humanizer",
        },
        {
          feature: "100 Topical Builder",
        },
        {
          feature: "Keyword Research Unlimited",
        },
        {
          feature: "500 Image Generation",
        },
        {
          feature: "One Click Blog Creation",
        },

        {
          feature: "3 Website Allowed",
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
          feature: "Full Super SEO Agents Suite",
        },
        {
          feature: "Wordpress Blog Automation",
        },
        {
          feature: "AI Humanizer",
        },
        {
          feature: "Unlimited Topical Builder",
        },
        {
          feature: "Keyword Research Unlimited",
        },
        {
          feature: "Unlimited Image Generation",
        },
        {
          feature: "One Click Blog Creation",
        },
        {
          feature: "8 Website Allowed",
        },
      ],
    },
  ];

  const planStyles = {
    1: {
      iconWrap:
        "border-2 border-[#a855f7]/65 bg-[radial-gradient(circle_at_top,_rgba(185,98,255,0.42),_rgba(101,35,184,0.88)_56%,_rgba(32,11,61,0.98)_100%)] text-[#f6eeff] shadow-[0_0_26px_rgba(162,75,255,0.28)]",
      bullet: "bg-[#7f2dff] text-white shadow-[0_0_18px_rgba(127,45,255,0.36)]",
      button:
        "bg-[linear-gradient(90deg,#5d26d9_0%,#9f16f4_100%)] shadow-[0_16px_40px_rgba(159,22,244,0.24)]",
      border: "border border-[#9333ea]/50",
      glow: "from-[#972bff]/35 via-transparent to-transparent",
      Icon: Rocket,
    },
    2: {
      iconWrap:
        "border-2 border-[#3b82f6]/65 bg-[radial-gradient(circle_at_top,_rgba(74,153,255,0.5),_rgba(18,72,214,0.94)_56%,_rgba(7,22,60,0.99)_100%)] text-[#f3f9ff] shadow-[0_0_28px_rgba(37,99,235,0.32)]",
      bullet: "bg-[#1a6bff] text-white shadow-[0_0_18px_rgba(26,107,255,0.34)]",
      button:
        "bg-[linear-gradient(90deg,#1564f7_0%,#9418ff_100%)] shadow-[0_18px_44px_rgba(21,100,247,0.26)]",
      border:
        "border border-[#3b82f6]/55 shadow-[0_0_32px_rgba(37,99,235,0.14)]",
      glow: "from-[#1f7cff]/38 via-transparent to-[#ad25ff]/18",
      Icon: Crown,
    },
    3: {
      iconWrap:
        "border-2 border-[#22c55e]/65 bg-[radial-gradient(circle_at_top,_rgba(47,217,119,0.38),_rgba(14,113,67,0.9)_56%,_rgba(5,33,20,0.98)_100%)] text-[#f0fff6] shadow-[0_0_24px_rgba(34,197,94,0.22)]",
      bullet: "bg-[#147a4b] text-white shadow-[0_0_18px_rgba(20,122,75,0.3)]",
      button:
        "bg-[linear-gradient(90deg,#0d9154_0%,#16bc72_100%)] shadow-[0_16px_40px_rgba(22,188,114,0.2)]",
      border: "border border-[#22c55e]/50",
      glow: "from-[#18bf73]/28 via-transparent to-transparent",
      Icon: Gem,
    },
  } as const;

  const trialChipClass =
    "inline-flex items-center gap-2 rounded-full border border-[#9333ea]/40 bg-[#3b1863]/75 px-3.5 py-1.5 text-sm font-medium text-[#f3e8ff]";

  const bottomFeatures = [
    {
      title: "7-Day Free Trial",
      description: "Try all premium AI tools before upgrading.",
      accent: "text-[#9a54ff]",
      iconBg:
        "bg-[radial-gradient(circle,_rgba(154,84,255,0.24)_0%,_rgba(56,15,114,0.18)_50%,_transparent_76%)]",
      type: "trial",
    },
    {
      title: "Cancel Anytime",
      description: "No long-term contracts or hidden commitments.",
      accent: "text-[#46a3ff]",
      iconBg:
        "bg-[radial-gradient(circle,_rgba(70,163,255,0.22)_0%,_rgba(6,48,105,0.16)_50%,_transparent_76%)]",
      type: "cancel",
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-level security for your data and content.",
      accent: "text-[#f051b7]",
      iconBg:
        "bg-[radial-gradient(circle,_rgba(240,81,183,0.22)_0%,_rgba(105,17,72,0.16)_50%,_transparent_76%)]",
      type: "secure",
    },
    {
      title: "24/7 Support",
      description: "Dedicated support team available anytime you need help.",
      accent: "text-[#29e37d]",
      iconBg:
        "bg-[radial-gradient(circle,_rgba(41,227,125,0.22)_0%,_rgba(8,81,42,0.16)_50%,_transparent_76%)]",
      type: "support",
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
    <section className="relative z-10 mx-auto w-full max-w-[1240px] px-4 py-14 md:px-6 md:py-16 xl:px-0 xl:py-20">
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

      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-8 md:gap-10">
        <div className="z-50 flex max-w-4xl flex-col items-center justify-center gap-3 px-3 text-white">
          <SectionBadge
            icon={<Sparkles className="shrink-0 text-[#c084fc]" size={14} />}
          >
            <span className="text-white/95">Simple Pricing,</span>{" "}
            <span className="gradient-text-new bg-clip-text text-transparent">
              Maximum Value
            </span>
          </SectionBadge>
          <h2 className="text-center font-jakarta text-[2.35rem] font-bold leading-[1.75] text-white md:text-5xl lg:text-6xl xl:text-[4.0rem]">
            Choose the Perfect Plan
            <br />
            <span className="gradient-text block">That Grows With You</span>
          </h2>

          <p className={sectionSubtextClass}>
            Start free, upgrade anytime. All plans include{" "}
            <span className="text-[#c084fc]">7-day free trial.</span>
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center gap-3 md:h-[52px] md:block">
          <div className="md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2">
            <div className="flex h-[52px] w-[274px] items-center rounded-full border border-[#4c3d8f]/50 bg-[#0a0b18]/95 p-1 shadow-[inset_0_1px_0_rgba(147,51,234,0.08)]">
              <button
                onClick={() => setPlan("monthly")}
                className={`h-full flex-1 rounded-full text-sm font-semibold transition-all duration-300 md:text-base ${
                  plan === "monthly"
                    ? "bg-[linear-gradient(90deg,#5f25d9_0%,#7f21f2_100%)] text-white shadow-[0_10px_24px_rgba(127,33,242,0.26)]"
                    : "text-[#94a3b8]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPlan("annual")}
                className={`flex h-full flex-1 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 md:text-base ${
                  plan === "annual"
                    ? "bg-[linear-gradient(90deg,#5f25d9_0%,#7f21f2_100%)] text-white shadow-[0_10px_24px_rgba(127,33,242,0.26)]"
                    : "text-[#94a3b8]"
                }`}
              >
                Annual
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1.5 md:absolute md:left-1/2 md:top-0 md:flex md:h-[52px] md:translate-x-[calc(137px+1.25rem)] md:items-center">
            <Undo
              className="h-7 w-7 shrink-0 -rotate-45 text-[#a855f7] md:h-8 md:w-8"
              strokeWidth={2.25}
              aria-hidden
            />
            <p className="whitespace-nowrap bg-linear-to-r from-[#a855f7] to-[#60a5fa] bg-clip-text text-sm font-medium italic text-transparent md:text-base">
              Save up to 20%
            </p>
          </div>
        </div>

        <div className="mt-2 grid w-full grid-cols-1 items-stretch justify-center gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {plans.map((item) => {
            const style = planStyles[item.id as keyof typeof planStyles];
            const PlanIcon = style.Icon;

            return (
              <div
                key={item.id}
                className={`relative mx-auto flex h-full w-full max-w-[410px] flex-col justify-between overflow-visible rounded-[24px] bg-[#070814] ${
                  item.id === 2
                    ? "mt-6 md:mt-0 xl:max-w-[430px] xl:scale-[1.04] xl:shadow-[0_0_48px_rgba(37,99,235,0.22)]"
                    : ""
                } ${style.border}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-28 rounded-t-[24px] bg-gradient-to-b ${style.glow} blur-2xl`}
                />

                <div
                  className={`absolute left-1/2 z-20 -translate-x-1/2 items-center justify-center ${
                    item.id === 2 ? "flex" : "hidden"
                  } -top-[14px]`}
                >
                  <button className="rounded-full border border-[#f495ff]/40 bg-[linear-gradient(90deg,#b047ff_0%,#ec4ed6_100%)] px-5 py-1.5 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(236,78,214,0.28)]">
                    Most Popular
                  </button>
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex min-h-[250px] flex-col gap-5 p-5 md:min-h-[258px] md:p-7 xl:min-h-[268px]">
                    <div className="flex min-h-[92px] items-start gap-4 text-white md:min-h-[96px] xl:min-h-[104px]">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${style.iconWrap}`}
                      >
                        <PlanIcon
                          size={27}
                          strokeWidth={2.15}
                          className={item.id === 1 ? "-rotate-12" : ""}
                        />
                      </div>

                      <div className="flex min-h-full flex-col justify-start space-y-0.5 pt-1">
                        <h3 className="text-2xl font-bold text-white">
                          {item.planName}
                        </h3>

                        <p className="max-w-[15rem] text-sm leading-snug text-white/72 md:text-[1.02rem]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto space-y-4 text-white">
                      <div className="flex items-end justify-center gap-1 text-center">
                        <h4 className="text-[2.55rem] font-bold leading-none tracking-[-0.04em] md:text-[3.15rem]">
                          ${" "}
                          {plan === "annual"
                            ? (item.yearlyPrice - 0.01).toFixed(2)
                            : (item.monthlyPrice - 0.01).toFixed(2)}
                          <span className="ml-1 text-[1.05rem] font-medium text-white/68 md:text-[1.12rem]">
                            /{plan === "monthly" ? "mo" : "yr"}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className={trialChipClass}>
                        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#9333ea]/35">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        7-Day Free Trial
                      </span>
                    </div>
                    <hr className="border-[#4c3d8f]/35" />
                  </div>

                  <div className="flex min-h-[252px] flex-col gap-2.5 px-5 pb-3 text-white md:min-h-[304px] md:px-7 xl:min-h-[318px]">
                    {item.planFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-sm leading-snug text-white/92 md:text-[1.02rem]"
                      >
                        <span
                          className={`mt-[2px] flex h-[1.2rem] w-[1.2rem] shrink-0 items-center justify-center rounded-full ${style.bullet}`}
                        >
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span className="text-white/90">
                          {doubleNumbersInFeature(
                            feature.feature,
                            plan === "annual",
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex w-full justify-center p-5 pt-6 md:p-7">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP}user/plans`}
                      className={`flex w-full items-center justify-center gap-2 rounded-[11px] px-6 py-3.5 text-center text-lg font-semibold capitalize text-white transition-transform duration-300 hover:scale-[1.02] ${style.button}`}
                    >
                      Get Started
                      <ArrowRight size={20} strokeWidth={2.25} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
