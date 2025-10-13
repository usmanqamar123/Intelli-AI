"use client";
import Hero from "@/components/SEO-Checker/Hero";
import HeroAnimation from "@/components/SEO-Checker/HeroAnimation";
import HowItWorks from "@/components/SEO-Checker/HowItWorks";
import WhatYouGet from "@/components/SEO-Checker/WhatYouGet";
import StatsSection from "@/components/SEO-Checker/StatsSection";  
import ProblemsSolutions from "@/components/SEO-Checker/ProblemsSolutions";
import SeoAudit from "@/components/SEO-Checker/SeoAudit";
import CapabilityMatrixPage from "@/components/SEO-Checker/CapibilityMatrixPage";
import SEOInsightsCTA from "@/components/SEO-Checker/SEO-Stats/SEOInsightsCTA";
import MetaDataCoverageRadar from "@/components/SEO-Checker/SEO-Stats/MetaDataCoverageRadar";
import SeoAuditTable from "@/components/SEO-Checker/SEO-Stats/SeoAuditTable"
import ResultsOverview from "@/components/SEO-Checker/SEO-Stats/ResultsOverview";
import OnPageScore from "@/components/SEO-Checker/SEO-Stats/OnPageScore";
import SeoIssuesDiscovered from "@/components/SEO-Checker/SEO-Stats/SeoIssuesDiscovered";
import Faq from "@/components/SEO-Checker/Faq";
import { useState } from "react";


const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    url: string;
    analyzed_at: string;
    scores: {
      overall_seo_score: number;
      on_page_seo_score: number;
      readability_score: number;
      content_quality_score: number;
    };
    performance: {
      speed_index: number;
      total_blocking_time: number;
      page_load_time: number;
    };
    meta_data: {
      title: string;
      description: string;
      og_title: string;
      twitter_title: string;
    };
     technical: {
      has_schema_markup: boolean;
      is_mobile_friendly: boolean;
      ssl_enabled: boolean;
      page_size_estimate: string;
    };
    readability: {
      score: number;
      flesch_reading_ease: number;
      flesch_kincaid_grade: number;
      avg_sentence_length: number;
      avg_word_length: number;
      complex_word_percentage: number;
      total_sentences: number;
      total_words: number;
      readability_level: string;
    };
    content_analysis: {
      content_length: number;
      paragraphs_count: number;
      avg_paragraph_length: number;
      word_count: number;
    };
  };
}


export default function Home() {

    const [showResults, setShowResults] = useState<boolean>(false);
     const [loading, setLoading] = useState<boolean>(false);
  const [analysisData, setAnalysisData] = useState<any>(null);


     const handleAnalyze = async (url: string) => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokens ? `Bearer ${tokens}` : "",
        },
        body: JSON.stringify({ url }),
      });

      const data: ApiResponse = await res.json();

      if (data.success) {
                setAnalysisData(data.data);
        setShowResults(true);
      } else {
        console.error("Analysis failed:", data.message);
        alert("Failed to analyze. Please try again.");
      }
    } catch (err) {
      console.error("Error analyzing URL:", err);
      alert("Something went wrong while analyzing the URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center font-geist bg-[#010002] !overflow-x-hidden z-10">
           {loading ? (
        <div className="w-full flex justify-center items-center h-screen">
          <div className="h-20 w-20 animate-spin rounded-full border-4 border-white border-r-transparent"></div>
        </div>
      ) : !showResults ? (
                <>
      <HeroAnimation />
          <Hero tokens={tokens} onAnalyze={handleAnalyze} 
          scores={analysisData?.scores}
            performance={analysisData?.performance}
            technical={analysisData?.technical}
            readability={analysisData?.readability}
            contentAnalysis={analysisData?.content_analysis}
          />
      <CapabilityMatrixPage />  
      <HowItWorks />
      <WhatYouGet />
      <StatsSection />
      <ProblemsSolutions />
      <SeoAudit />
      <Faq/>
        </>
      ) : (
        analysisData && (
        <>
        <ResultsOverview />
        <OnPageScore />
        <SeoIssuesDiscovered />
        <SEOInsightsCTA />
        <MetaDataCoverageRadar />
        <SeoAuditTable />
        <Faq />
     </>
        )
      )}
    </section>
  );
}
