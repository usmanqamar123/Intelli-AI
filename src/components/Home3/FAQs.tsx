"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { PiSparkle } from "react-icons/pi";
import { FiGift, FiShield, FiLock, FiRefreshCw } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaShieldAlt, FaCheck } from "react-icons/fa";
import type { IconType } from "react-icons";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
  icon: IconType;
  iconColor: string;
  iconBg: string;
}

interface SeoFAQsProps {
  faqs?: Omit<AccordProps, "icon" | "iconColor" | "iconBg">[];
}

const defaultFaqs: AccordProps[] = [
  {
    id: 1,
    question: "What is IntelliWriter?",
    answer:
      "IntelliWriter is an all-in-one AI writing assistant that helps you create high-quality articles, build topical authority, generate SEO-optimized content, and even produce visuals and voiceovers.",
    icon: PiSparkle,
    iconColor: "text-[#A855F7]",
    iconBg: "bg-[#A855F7]/15 shadow-[0_0_24px_rgba(168,85,247,0.35)]",
  },
  {
    id: 2,
    question: "Is there a free trial available?",
    answer:
      "Yes. You can start with a 7-day free trial and explore IntelliWriter's core features before choosing a paid plan.",
    icon: FiGift,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/15 shadow-[0_0_24px_rgba(59,130,246,0.35)]",
  },
  {
    id: 3,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings with no long-term commitment.",
    icon: FiShield,
    iconColor: "text-[#22C55E]",
    iconBg: "bg-[#22C55E]/15 shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
  {
    id: 4,
    question: "Is my data safe and secure?",
    answer:
      "Yes. We use industry-standard encryption and security practices to keep your data private and protected at all times.",
    icon: FiLock,
    iconColor: "text-[#EC4899]",
    iconBg: "bg-[#EC4899]/15 shadow-[0_0_24px_rgba(236,72,153,0.35)]",
  },
  {
    id: 5,
    question: "Do you offer refunds?",
    answer:
      "Refund eligibility depends on your plan and usage. Contact our support team and we'll review your request promptly.",
    icon: FiRefreshCw,
    iconColor: "text-[#F97316]",
    iconBg: "bg-[#F97316]/15 shadow-[0_0_24px_rgba(249,115,22,0.35)]",
  },
];

const ctaFeatures = [
  {
    icon: BsLightningChargeFill,
    label: "No Credit Card Required",
    color: "text-[#A855F7]",
  },
  {
    icon: FaShieldAlt,
    label: "7-Day Free Trial",
    color: "text-[#3B82F6]",
  },
  {
    icon: FaCheck,
    label: "Cancel Anytime, No Hassle",
    color: "text-[#22C55E]",
  },
];

const Faqs: React.FC<SeoFAQsProps> = ({ faqs: propFaqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsToDisplay: AccordProps[] =
    propFaqs && propFaqs.length > 0
      ? propFaqs.map((faq, index) => ({
          ...defaultFaqs[index % defaultFaqs.length],
          ...faq,
        }))
      : defaultFaqs;

  const loginHref = `${process.env.NEXT_PUBLIC_APP ?? ""}auth/login`;

  return (
    <section className="relative w-full max-w-[1240px] mx-auto font-geist px-4 md:px-6 xl:px-0 py-14 md:py-16 z-[1]">
      {/* Header — centered */}
      <div className="flex flex-col items-center text-center gap-4 mb-10">
        <p className="gradient-border-wrapper rounded-full px-5 py-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/90 uppercase flex items-center gap-2">
          <HiOutlineQuestionMarkCircle className="text-[#A855F7] text-base shrink-0" />
          <span className="gradient-text-new text-base md:text-lg">
            Frequently Asked Questions
          </span>
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[3.25rem] font-bold font-jakarta text-white leading-tight">
          Got Questions?{" "}
          <span className="gradient-text text-transparent bg-clip-text">
            We&apos;ve Got Answers
          </span>
        </h2>

        <p className="text-sm md:text-lg text-white/60 max-w-xl">
          Everything you need to know about IntelliWriter.
        </p>
      </div>

      {/* Two columns */}
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
        {/* Left — support card */}
        <div className="w-full lg:w-[38%] shrink-0">
          <div className="gradient-border-wrapper rounded-2xl bg-[#010006] h-full flex flex-col items-center text-center px-6 py-8 md:py-10">
            <div className="relative w-full h-full max-w-[300px] aspect-square">
              <Image
                src="/Question-mark.webp"
                alt="Still have questions illustration"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Still have questions?
            </h3>
            <p className="mt-2 gradient-text text-sm md:text-2xl">
              We&apos;re here to help!
            </p>

            <Link href="/contact" className="mt-8 w-full max-w-xs">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-transparent px-5 py-3.5 text-white text-sm font-medium hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                <BiHeadphone className="text-[#724BB2] text-base lg:text-xl shrink-0" />
                Contact Support
                <HiArrowRight className="text-[#724BB2] text-base lg:text-xl shrink-0" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-4">
          {faqsToDisplay.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id ?? index}
                className={`rounded-xl border transition-colors duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "border-white/15 bg-white/[0.04]"
                    : "border-white/10 bg-black/40 hover:border-white/15"
                }`}
                onClick={() => toggleAnswer(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleAnswer(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 px-4 md:px-5 py-4 md:py-5">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${item.iconBg}`}
                  >
                    <Icon className={`text-xl ${item.iconColor}`} />
                  </div>

                  <h3 className="flex-1 text-left text-sm md:text-base lg:text-lg font-medium text-white pr-2">
                    {item.question}
                  </h3>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 ${item.iconColor}`}
                  >
                    <IoChevronDown size={22} />
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 md:px-5 pb-5 pl-[4.25rem] md:pl-[4.75rem] text-sm md:text-[15px] text-white/55 leading-relaxed text-left">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
