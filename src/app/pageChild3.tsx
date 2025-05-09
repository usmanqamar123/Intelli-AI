"use client";
import { useEffect } from "react";
import Tools from "@/components/Home3/Tools";
import Comparison from "@/components/HomeNew/Comparision";
import { Accord } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
import Header from "@/components/Home3/Header";
import Footer from "@/components/Home3/Footer";
import Hero from "@/components/Home3/Hero";
import FAQs from "@/components/Home3/FAQs";
import AiArticleImage from "@/components/HomeNew/AiArticleImage";
import WordpressPublish from "@/components/HomeNew/WordPressPublish";
import Integration from "@/components/HomeNew/Integration";
import IntelliComparison from "@/components/HomeNew/IntelliComparison";
import BatchProcessing from "@/components/HomeNew/BatchProcessing";
import WhyIntelli from "@/components/Home3/WhyIntelli";
import ArticleWriter from "@/components/Home3/ArticleWriter";
import ToolsDesc from "@/components/Home3/ToolsDesc";
import BetterRank from "@/components/Home3/BetterRank";
import DriveTraffic from "@/components/Home3/DriveTraffic";
import Testimonial from "@/components/Home3/Testimonial";
import HeroAnimation from "@/components/SeoWriter/HeroAnimation";

const PricingPlan = dynamic(() => import("@/components/Home3/PricingPlan"), {
  ssr: false,
});
const CookiePopup = dynamic(() => import("@/components/CookiePopup"), {
  ssr: false,
});
const ToolDescription = dynamic(
  () => import("@/components/HomeNew/IntelliToolsDesc"),
  {
    ssr: false,
  }
);
export default function PageChild() {
  const { aboutRef, pricingRef } = useWebContext();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/meta/track-event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: "PageView",
      }),
    });
  }, []);

  return (
    <>
      <Header aboutRef={aboutRef} pricingRef={pricingRef} />
      <main className="overflow-hidden w-full">
        <div className="relative w-full flex flex-col justify-center items-center bg-black z-10">
<HeroAnimation/>
          <Hero />
          <Tools />
          <WhyIntelli />
          <ArticleWriter />
          <ToolsDesc />
          <IntelliComparison />
          <DriveTraffic />
          <PricingPlan />
          <Testimonial />
          <FAQs />
          <BetterRank />
        </div>
        <CookiePopup />
      </main>
      <Footer />
    </>
  );
}
