"use client";

import BetterRank from "@/components/Home3/BetterRank";
import DriveTraffic from "@/components/Home3/DriveTraffic";
import Faqs from "@/components/Home3/FAQs";
import PricingPlan from "@/components/Home3/PricingPlan";
import Testimonial from "@/components/Home3/Testimonial";
import IntelliComparison from "@/components/HomeNew/IntelliComparison";
import CreateOptimizeDominate from "@/components/SeoWriter/CreateOptimizeDominate";
import Hero from "@/components/SeoWriter/Hero";
import HeroAnimation from "@/components/SeoWriter/HeroAnimation";
import PowerfulAiTools from "@/components/SeoWriter/PowerfulAiTools";
import RoadBlocks from "@/components/SeoWriter/RoadBlocks";
import SeoContentCreation from "@/components/SeoWriter/SeoContentCreation";
import TopReasons from "@/components/SeoWriter/TopReasons";

export default function Home() {
  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center  bg-[#010002] overflow-x-hidden z-10">
      <HeroAnimation />
      <Hero />
      <SeoContentCreation />
      <RoadBlocks />
      <TopReasons />
      <CreateOptimizeDominate />
      <IntelliComparison />
      <PowerfulAiTools />
      <DriveTraffic />
      <PricingPlan />
      <Testimonial />
      <Faqs />
      <BetterRank />
    </section>
  );
}
