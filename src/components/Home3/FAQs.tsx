"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeHelp,
  Check,
  ChevronDown,
  ChevronUp,
  Headset,
  Lock,
  RefreshCw,
  Shield,
  ShieldCheck,
  Sparkles,
  Ticket,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SectionBadge,
  panelBg,
  panelBorder,
  sectionSubtextClass,
} from "./SectionBadge";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
}

interface SeoFAQsProps {
  faqs?: Omit<
    AccordProps,
    "icon" | "iconColor" | "iconBg" | "iconBorder"
  >[];
}

const defaultFaqs: AccordProps[] = [
  {
    id: 1,
    question: "What is IntelliWriter?",
    answer:
      "IntelliWriter is an all-in-one AI SEO platform that helps you create, optimize, automate, and rank content with powerful AI tools and advanced SEO features.",
    icon: Sparkles,
    iconColor: "text-[#d98cff]",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(198,92,255,0.22)_0%,_rgba(74,17,122,0.14)_54%,_transparent_100%)]",
    iconBorder: "border-2 border-[#a855f7]/50",
  },
  {
    id: 2,
    question: "Is there a free trial available?",
    answer:
      "Yes. You can start with a 7-day free trial and explore IntelliWriter's core features before choosing a paid plan.",
    icon: Ticket,
    iconColor: "text-[#4f93ff]",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(79,147,255,0.2)_0%,_rgba(18,53,137,0.12)_54%,_transparent_100%)]",
    iconBorder: "border-2 border-[#3b82f6]/50",
  },
  {
    id: 3,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings with no long-term commitment.",
    icon: ShieldCheck,
    iconColor: "text-[#45de81]",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(69,222,129,0.18)_0%,_rgba(15,79,46,0.12)_54%,_transparent_100%)]",
    iconBorder: "border-2 border-[#22c55e]/50",
  },
  {
    id: 4,
    question: "Is my data safe and secure?",
    answer:
      "Yes. We use industry-standard encryption and security practices to keep your data private and protected at all times.",
    icon: Lock,
    iconColor: "text-[#eb54d8]",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(235,84,216,0.18)_0%,_rgba(98,19,93,0.12)_54%,_transparent_100%)]",
    iconBorder: "border-2 border-[#ec4899]/50",
  },
  {
    id: 5,
    question: "Do you offer refunds?",
    answer:
      "Refund eligibility depends on your plan and usage. Contact our support team and we'll review your request promptly.",
    icon: RefreshCw,
    iconColor: "text-[#ffb72d]",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(255,183,45,0.18)_0%,_rgba(110,68,12,0.12)_54%,_transparent_100%)]",
    iconBorder: "border-2 border-[#f59e0b]/50",
  },
];

const ctaFeatures = [
  {
    icon: Zap,
    lines: ["No Credit", "Card Required"] as const,
    color: "text-[#b57aff]",
    border: "border-2 border-[#a855f7]/55",
    bg: "bg-[radial-gradient(circle,_rgba(168,85,247,0.2)_0%,_transparent_72%)]",
  },
  {
    icon: Shield,
    lines: ["7-Day Free", "Trial"] as const,
    color: "text-[#5ecfff]",
    border: "border-2 border-[#3b82f6]/55",
    bg: "bg-[radial-gradient(circle,_rgba(59,130,246,0.2)_0%,_transparent_72%)]",
  },
  {
    icon: Check,
    lines: ["Cancel Anytime,", "No Hassle"] as const,
    color: "text-[#5ee89a]",
    border: "border-2 border-[#22c55e]/55",
    bg: "bg-[radial-gradient(circle,_rgba(34,197,94,0.2)_0%,_transparent_72%)]",
  },
] as const;

const Faqs: React.FC<SeoFAQsProps> = ({ faqs: propFaqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsToDisplay: AccordProps[] =
    propFaqs && propFaqs.length > 0
      ? propFaqs.map((faq, index) => ({
          ...defaultFaqs[index % defaultFaqs.length],
          ...faq,
        }))
      : defaultFaqs;

  const loginHref = `${process.env.NEXT_PUBLIC_APP ?? ""}auth/login`;

  return (
    <section className="relative z-[1] mx-auto w-full max-w-[1240px] px-4 py-14 font-geist md:px-6 md:py-16 xl:px-0 xl:py-20">
      <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-12">
        <SectionBadge
          icon={<BadgeHelp size={15} className="shrink-0 text-[#c084fc]" />}
        >
          <span className="text-white/95">Frequently Asked Questions</span>
        </SectionBadge>

        <h2 className="px-2 font-jakarta text-[2.25rem] font-bold leading-[1.03] text-white sm:text-[2.85rem] md:text-[3.5rem] lg:text-[4.2rem]">
          Got Questions?{" "}
          <span className="gradient-text bg-clip-text text-transparent">
            We&apos;ve Got Answers
          </span>
        </h2>

        <p className={`${sectionSubtextClass} px-2`}>
          Everything you need to know about IntelliWriter.
        </p>
      </div>

      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-7">
        <div className="w-full lg:w-[35.5%] lg:min-w-[340px]">
          <div
            className={`flex h-full flex-col items-center rounded-[24px] ${panelBorder} bg-[#070a14]/94 px-6 py-8 text-center shadow-[0_0_40px_rgba(109,40,217,0.06)] md:px-8 md:py-9`}
          >
            <div className="relative mb-6 aspect-square w-full max-w-[330px]">
              <Image
                src="/Question-mark.webp"
                alt="Still have questions illustration"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h3 className="text-[1.7rem] font-semibold leading-tight text-white md:text-[2rem]">
              Still have questions?
            </h3>
            <p className="mt-2 text-[1.55rem] font-semibold leading-tight gradient-text md:text-[1.85rem]">
              We&apos;re here to help!
            </p>

            <Link href="/contact" className="mt-7 w-full max-w-[270px]">
              <span className="flex w-full items-center justify-center gap-3 rounded-full border border-[#7c3aed]/45 bg-transparent px-6 py-3.5 text-[1.02rem] font-medium text-white transition-all duration-300 hover:border-[#a855f7]/55 hover:bg-[#9333ea]/[0.06]">
                <Headset size={19} className="text-[#b175ff]" />
                Contact Support
                <ArrowRight size={19} className="text-[#a56cff]" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col gap-3.5 md:gap-4">
          {faqsToDisplay.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id ?? index}
                className={`overflow-hidden rounded-[20px] border transition-colors duration-300 ${
                  isOpen
                    ? "border-[#5b4a8f]/55 bg-[#0b0d19]/92"
                    : "border-[#4c3d8f]/40 bg-[#080a16]/88 hover:border-[#6d4aff]/45"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center gap-4 px-4 py-4 text-left md:px-5 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border ${item.iconBorder} ${item.iconBg} md:h-[52px] md:w-[52px]`}
                  >
                    <Icon
                      size={23}
                      strokeWidth={2.15}
                      className={item.iconColor}
                    />
                  </span>

                  <span className="flex-1 pr-2 text-[1.06rem] font-medium leading-snug text-white md:text-[1.22rem]">
                    {item.question}
                  </span>

                  <span className="shrink-0 text-[#a959ff]">
                    {isOpen ? (
                      <ChevronUp size={28} strokeWidth={2.1} />
                    ) : (
                      <ChevronDown size={28} strokeWidth={2.1} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-5 pl-[4.9rem] text-[0.98rem] leading-[1.78] text-white/78 md:px-5 md:pb-6 md:pl-[5.35rem] md:text-[1rem]">
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
