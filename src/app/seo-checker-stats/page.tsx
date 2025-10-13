"use client";
import ResultsOverview from "@/components/SEO-Checker/SEO-Stats/ResultsOverview";
import OnPageScore from "@/components/SEO-Checker/SEO-Stats/OnPageScore";
import SeoIssuesDiscovered from "@/components/SEO-Checker/SEO-Stats/SeoIssuesDiscovered";
//import SEOInsightsCTA from "@/components/SEO-Checker/SEO-Stats/SEOInsightsCTA";
//import MetaDataCoverageRadar from "@/components/SEO-Checker/SEO-Stats/MetaDataCoverageRadar";
import SeoAuditTable from "@/components/SEO-Checker/SEO-Stats/SeoAuditTable";
import Faq from "@/components/SEO-Checker/Faq";
import MetaCoverageRadar from "@/components/SEO-Checker/SEO-Stats/MetaCoverageRadar";

const tokens =
  typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;

export default function Home() {
  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center font-geist bg-[#010002] !overflow-x-hidden z-10">
      <ResultsOverview />
      <OnPageScore />
      <SeoIssuesDiscovered />
      
      <MetaCoverageRadar />
      <SeoAuditTable />
      <Faq />
    </section>
  );
}
