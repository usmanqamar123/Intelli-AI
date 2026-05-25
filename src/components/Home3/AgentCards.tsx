"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {
  Check,
  FileCode,
  FileText,
  Zap,
  ChartColumn,
  SearchCheck,
} from "lucide-react";
import Link from "next/link";

interface FeatureProps {
  id: number;
  title: string | React.ReactNode;
  description: string;
  image: string;
  bulletColor: string;
  extraFeature?: React.ReactNode;
  bulletPoints: string[];
  slideName: string;
  logo: any;
}

const FeatureItem = ({
  id,
  title,
  description,
  image,
  bulletColor,
  extraFeature,
  bulletPoints,
}: FeatureProps) => {
  return (
    <div className="w-full flex justify-center">
      {/* Gradient border */}
      <div
        className="w-[95%] lg:w-[85%] p-[2px] rounded-3xl"
        style={{
          background:
            "linear-gradient(91.87deg, #6B41FF 27%, #F64CFF 68%, #FFC553 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center p-6 lg:p-12 bg-gradient-to-b from-[#1B1337] to-[#240F4B] rounded-3xl shadow-xl">
          {/* Image */}
          <div className="relative w-full lg:w-[50%] flex justify-center items-center overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt="Feature Image"
              width={600}
              height={600}
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center mt-8 lg:mt-0 lg:ml-12 lg:w-[50%] text-center lg:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-[15px] md:text-[16px] font-normal text-[#D1D5DC] mb-6">
                {description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <ul className="flex flex-col gap-4">
                  {bulletPoints.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 items-start justify-center lg:justify-start"
                    >
                      <div
                        className="mt-1 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: bulletColor }}
                      >
                        <Check size={15} className="font-bold text-white" />
                      </div>
                      <span className="text-[14px] md:text-[15px] font-medium text-white/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="https://superagents.intelliwriter.io/" target="_blank">
              <div
                className="mb-6 flex justify-center lg:justify-start hover:opacity-80"
                style={{ backgroundColor: bulletColor }}
              >
                <button className="text-white text-center  font-semibold px-6 py-3 !rounded-xl shadow-lg">
                  Activate your SEO Agents Now
                </button>
              </div>
            </Link>

            {/* CTA / extra feature */}
            <div className="border-t border-[#6E11B080] mt-4 pt-3">
              <p className="text-[14px] md:text-[15px] font-light text-white/70">
                {extraFeature}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgentCards = () => {
  const featuresList: FeatureProps[] = [
    {
      id: 1,
      title: (
        <>
          Optimize <span style={{ color: "#2D8FE9" }}>Smarter</span> With{" "}
          <span style={{ color: "#2D8FE9" }}>AI-Powered</span> Metadata
        </>
      ),
      logo: FileCode,
      slideName: "metadata agent",
      description:
        "The Metadata Agent automatically generates and optimizes meta titles, descriptions, and Open Graph tags using advanced AI analysis for maximum click-through rates and search visibility.",
      image: "/seo-agents/metadata.jpeg",
      bulletColor: "#2D8FE9",
      bulletPoints: [
        "Generate optimized meta titles automatically",
        "Create compelling meta descriptions",
        "Auto-update Open Graph tags for social sharing",
        "Improve CTR with AI-driven insights",
      ],
      extraFeature: (
        <>
          <span className="font-bold">Boost your search rankings and </span>{" "}
          <br />
          drive more organic traffic with intelligent metadata optimization
          working 24/7.
        </>
      ),
    },
    {
      id: 2,
      title: (
        <>
          Get <span style={{ color: "#AD46FF" }}>Indexed</span> Faster{" "}
          <span style={{ color: "#AD46FF" }}>With</span> Smart Automation
        </>
      ),
      logo: SearchCheck,
      slideName: "indexation agent",
      description:
        "The Indexation Agent monitors search engine crawling status, automatically submits URLs, manages sitemaps, and resolves indexation issues before they impact your rankings.",
      image: "/seo-agents/indexation.jpeg",
      bulletColor: "#AD46FF",
      bulletPoints: [
        "Monitor crawl status across all search engines",
        "Auto-submit new pages for faster indexation",
        "Manage and update XML sitemaps automatically",
        "Detect and fix indexation errors instantly",
      ],
      extraFeature: (
        <>
          <span className="font-bold">Ensure every page gets indexed </span>{" "}
          <br />
          quickly and maintain optimal search engine visibility around the
          clock.
        </>
      ),
    },
    {
      id: 3,
      title: (
        <>
          Manage <span style={{ color: "#8B0A50" }}>Crawlers</span> With{" "}
          <span style={{ color: "#8B0A50" }}>Intelligent</span> Control
        </>
      ),
      logo: FileText,
      slideName: "robot.txt control agent",
      description:
        "The Robot.txt Control Agent intelligently manages robots.txt directives, optimizes crawl budgets, and controls search engine access to protect sensitive pages and prevent duplicate content.",
      image: "/seo-agents/robots.jpeg",
      bulletColor: "#8B0A50",
      bulletPoints: [
        "Auto-generate optimal robots.txt rules",
        "Control crawler access to specific pages",
        "Optimize crawl budget allocation",
        "Prevent indexing of duplicate content",
      ],
      extraFeature: (
        <>
          <span className="font-bold">
            Maximize crawl efficiency and protect{" "}
          </span>{" "}
          <br />
          your site architecture with automated robots.txt management.
        </>
      ),
    },
    {
      id: 4,
      title: (
        <>
          Write <span style={{ color: "#F54900" }}>Better</span> Content{" "}
          <span style={{ color: "#F54900" }}>With</span> AI Insights
        </>
      ),
      logo: Zap,
      slideName: "content optimization agent",
      description:
        "The Content Optimization Agent analyzes content quality, keyword density, readability scores, and semantic relevance to provide actionable AI-driven suggestions for improved rankings.",
      image: "/seo-agents/content-opt.jpeg",
      bulletColor: "#F54900",
      bulletPoints: [
        "Analyze content quality and readability",
        "Optimize keyword density automatically",
        "Enhance semantic relevance with AI",
        "Get real-time content improvement suggestions",
      ],
      extraFeature: (
        <>
          <span className="font-bold">
            Create high-ranking content that resonates{" "}
          </span>{" "}
          <br />
          with both search engines and your audience effortlessly.
        </>
      ),
    },
    {
      id: 5,
      title: (
        <>
          Track <span style={{ color: "#5D1451" }}>Results</span> With{" "}
          <span style={{ color: "#5D1451" }}>Real-Time</span> Analytics
        </>
      ),
      logo: ChartColumn,
      slideName: "performance tracking agent",
      description:
        "The Performance Tracking Agent continuously monitors rankings, traffic patterns, conversions, and technical performance metrics while detecting anomalies and alerting you to critical changes.",
      image: "/seo-agents/performance-tracking.jpeg",
      bulletColor: "#5D1451",
      bulletPoints: [
        "Track keyword rankings in real-time",
        "Monitor traffic and conversion metrics",
        "Detect performance anomalies instantly",
        "Receive alerts for critical ranking changes",
      ],
      extraFeature: (
        <>
          <span className="font-bold">Stay ahead of the competition </span>{" "}
          <br />
          with 24/7 performance monitoring and instant insights into your SEO
          success.
        </>
      ),
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 md:py-20 w-full px-4 md:px-6 lg:px-8">
      {/* Background blurs */}
      <div className="absolute bottom-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]" />
      <div className="absolute top-1/2 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[110px]" />
      <div className="absolute top-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]" />
      <div className="absolute top-[40%] right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]" />

      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white animate-fadeInUp [animation-delay:0.2s]">
          AI Powered{" "}
          <i className="gradient-text not-italic text-transparent bg-clip-text">
            Super SEO Agents
          </i>
        </h2>
        <p className="mt-3 text-base md:text-lg !text-white leading-relaxed max-w-4xl mx-auto animate-fadeInUp [animation-delay:0.4s]">
          Ready to create amazing content without the hassle? Welcome to
          IntelliWriter—your all-in-one AI tool for crafting images, articles,
          WordPress integration, SEO keyword research, AI models, voiceovers,
          and so much more!
        </p>
      </div>

      {/* Slide-name cards */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4 sm:px-6 md:px-12 transition-all">
        {featuresList.map((feature, idx) => {
          const Logo = feature.logo;
          const isActive = idx === activeIndex;
          return (
            <div
              key={feature.id}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className="flex flex-row items-center justify-center gap-3 px-3 py-2 rounded-full border flex-shrink-0 cursor-pointer hover:scale-[1.03] hover:opacity-80"
              style={{
                backgroundColor: isActive ? feature.bulletColor : "#59168B80",
                borderColor: isActive ? feature.bulletColor : "#8200DB80",
                transition: "all 0.3s",
              }}
            >
              <Logo
                size={18}
                style={{ color: isActive ? "#FFFFFF" : "#D1D5DC" }}
              />
              <p
                className="uppercase text-sm leading-relaxed"
                style={{
                  color: isActive ? "#FFFFFF" : "#D1D5DC",
                  transition: "color 0.3s",
                  whiteSpace: "nowrap",
                }}
              >
                {feature.slideName}
              </p>
            </div>
          );
        })}
      </div>

      {/* Swiper */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={50}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
            setActiveIndex(s.activeIndex);
          }}
          className="!w-full !h-auto"
        >
          {featuresList.map((feature) => (
            <SwiperSlide
              key={feature.id}
              className="!h-auto !flex !flex-col !justify-center !items-stretch"
            >
              <FeatureItem {...feature} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        {!isBeginning && (
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#59168B80] border border-[#8200DB80] rounded-full text-white text-3xl z-50 hover:bg-[#6B41FF] transition"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ‹
          </button>
        )}
        {!isEnd && (
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#59168B80] border border-[#8200DB80] rounded-full text-white text-3xl z-50 hover:bg-[#6B41FF] transition"
            onClick={() => swiperRef.current?.slideNext()}
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
};

export default AgentCards;
