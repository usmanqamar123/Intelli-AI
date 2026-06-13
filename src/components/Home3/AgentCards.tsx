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
  description: React.ReactNode;
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
                className="mb-6 w-fit flex justify-center lg:justify-start rounded-2xl hover:opacity-80"
                style={{ backgroundColor: bulletColor }}
              >
                <button className="text-white text-center  font-semibold px-6 py-3 shadow-lg">
                  Activate SEO Agents
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
          Write <span style={{ color: "#2D8FE9" }}></span> Page Titles
        </>
      ),
      logo: FileCode,
      slideName: "page title helper",
      description: (
        <>
          <span className="font-bold">Improve page discoverability</span>
          <br />
          Clear titles and descriptions that help people find your site.
        </>
      ),
      image: "/seo-agents/metadata.jpeg",
      bulletColor: "#2D8FE9",
      bulletPoints: [
        "Write simple page titles",
        "Create clear descriptions",
        "Set social preview info",
        "Keep page tags updated",
      ],
      extraFeature: (
        <>
          <span className="font-bold">Boost your search rankings and </span>
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
          Help <span style={{ color: "#AD46FF" }}>Search Engines</span> Find You
        </>
      ),
      logo: SearchCheck,
      slideName: "page discovery helper",
      description: (
        <>
          <span className="font-bold">Ensure pages are discoverable</span>
          <br />
          Make it easy for search engines to find your content.
        </>
      ),
      image: "/seo-agents/indexation.jpeg",
      bulletColor: "#AD46FF",
      bulletPoints: [
        "Check page visibility",
        "Submit new pages fast",
        "Keep your sitemap current",
        "Fix pages that are missing",
      ],
      extraFeature: (
        <>
          <span className="font-bold">Ensure every page gets indexed </span>
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
          Manage <span style={{ color: "#8B0A50" }}>Site Access</span>
          <br />for Search Engines
        </>
      ),
      logo: FileText,
      slideName: "site access manager",
      description: (
        <>
          <span className="font-bold">Control site visibility</span>
          <br />
          Choose which pages are public and which remain private.
        </>
      ),
      image: "/seo-agents/robots.jpeg",
      bulletColor: "#8B0A50",
      bulletPoints: [
        "Block private pages",
        "Allow public pages to be found",
        "Hide duplicate pages",
        "Control search access easily",
      ],
      extraFeature: (
        <>
          <span className="font-bold">Maximize crawl efficiency and protect </span>
          <br />
          your site architecture with automated robots.txt management.
        </>
      ),
    },
    {
      id: 4,
      title: (
        <>
          Update <span style={{ color: "#F54900" }}>Content</span> Faster
        </>
      ),
      logo: Zap,
      slideName: "content helper",
      description: (
        <>
          <span className="font-bold">Strengthen your content</span>
          <br />
          Actionable edits that improve clarity and reader engagement.
        </>
      ),
      image: "/seo-agents/content-opt.jpeg",
      bulletColor: "#F54900",
      bulletPoints: [
        "Improve headlines and layout",
        "Make text easier to read",
        "Add missing useful details",
        "Fix weak paragraphs fast",
      ],
      extraFeature: (
        <>
          <span className="font-bold">
            Create high-ranking content that resonates
          </span>
          <br />
          with both search engines and your audience effortlessly.
        </>
      ),
    },
    {
      id: 5,
      title: (
        <>
          Track <span style={{ color: "#5D1451" }}>Results</span> Easily
        </>
      ),
      logo: ChartColumn,
      slideName: "traffic tracker",
      description: (
        <>
          <span className="font-bold">Monitor page performance</span>
          <br />
          Track visits and receive alerts before traffic drops.
        </>
      ),
      image: "/seo-agents/performance-tracking.jpeg",
      bulletColor: "#5D1451",
      bulletPoints: [
        "Track page visits",
        "See your top pages",
        "Find pages losing traffic",
        "Get alerts when things change",
      ],
      extraFeature: (
        <>
          <span className="font-bold">Stay ahead of the competition </span>
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
      {/* <div className="absolute top-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]" /> */}
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
         Automate metadata, indexing, content quality, and performance improvements with intelligent super SEO agents designed for modern WordPress websites.

        </p>
      </div>

     {/* PREMIUM FEATURE TABS */}
<div className="flex justify-center mb-14 px-4">
  <div
    className="
      flex flex-wrap items-center justify-center gap-2
      p-2
      rounded-full
      border border-[#6B41FF]
      bg-white/[0.03]
      backdrop-blur-xl
      shadow-[0_10px_60px_rgba(0,0,0,0.35)]
      w-fit
      max-w-full
    "
  >
    {featuresList.map((feature, idx) => {
      const Logo = feature.logo;
      const isActive = idx === activeIndex;

      return (
        <button
          key={feature.id}
          onClick={() => swiperRef.current?.slideTo(idx)}
          className={`
            relative
            flex items-center gap-2
            px-5 py-3
            rounded-full
            overflow-hidden
            transition-all
            duration-500
            cursor-pointer
            group
            ${
              isActive
                ? "scale-105"
                : "hover:scale-105 opacity-75 hover:opacity-100"
            }
          `}
        >
          {/* Active Background */}
          {isActive && (
            <div
              className="
                absolute inset-0
                rounded-full
                bg-gradient-to-r
                from-[#6B41FF]
                via-[#8B5CF6]
                to-[#A855F7]
                shadow-[0_0_30px_rgba(139,92,246,0.55)]
                animate-pulse
              "
            />
          )}

          {/* Content */}
          <div className="relative z-10 flex items-center gap-2">
            <Logo
              size={18}
              className={`transition-all duration-300 ${
                isActive ? "text-white" : "text-gray-400"
              }`}
            />

            <span
              className={`
                text-sm font-medium tracking-wide uppercase
                transition-all duration-300
                ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                }
              `}
            >
              {feature.slideName}
            </span>
          </div>
        </button>
      );
    })}
  </div>
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
