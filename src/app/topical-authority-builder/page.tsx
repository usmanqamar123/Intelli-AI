import React from "react";
import dynamic from "next/dynamic";
import { TopicalAuthorityFaqs } from "@/constants/FaqsData";
import Hero from "@/components/topical-authority/Hero";
import SeoFAQs from "@/components/newSeoFAQs";
import WriteArticles from "@/components/topical-authority/WriteArticles";
import ArticlesInMinutes from "@/components/topical-authority/ArticlesInMinutes";
import ContentFails from "@/components/topical-authority/ContentFails";
import BetterRank from "@/components/Home3/BetterRank";
import DriveTraffic from "@/components/Home3/DriveTraffic";
import Testimonial from "@/components/Home3/Testimonial";
import FAQs from "@/components/Home3/FAQs";
import PricingPlan from "@/components/Home3/PricingPlan";
import PowerfulAiTools from "@/components/SeoWriter/PowerfulAiTools";
import HeroAnimation from "@/components/SeoWriter/HeroAnimation";

const page = () => {
  return (
    
  <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#010002] z-10">
  {/* Wrap all components that should have overflow-x-hidden */}
  <div className="w-full overflow-x-hidden">
    <HeroAnimation />
    <Hero />
    <ArticlesInMinutes />
    <ContentFails />
  </div>

  {/* This component should allow overflow-x */}
  <WriteArticles />

  {/* Resume overflow-x-hidden for the rest */}
  <div className="w-full overflow-x-hidden">
    <PowerfulAiTools />
    <DriveTraffic />
    <PricingPlan />
    <Testimonial />
      </div>
    <FAQs faqs={TopicalAuthorityFaqs} />
    <BetterRank />
</div>

  );
};

export default page;
