// components/seostats/sections/ResultsOverview.tsx
"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

const ICONS = {
  responseTime: "/seo-checker/seostats/svg1.png",
  fileSize: "/seo-checker/seostats/svg5.png",
  mediaFile: "/seo-checker/seostats/svg3.png",
  links: "/seo-checker/seostats/svg4.png",
  words: "/seo-checker/seostats/svg2.png",
  container: "/seo-checker/seostats/container.png",
};

interface ResultsOverviewProps {
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
  contentAnalysis: {
    content_length: number;
    paragraphs_count: number;
    avg_paragraph_length: number;
    word_count: number;
  };
  url: string;
  analyzedAt: string;
    onAnalyze: (url: string) => void;
}

type Row = {
  label: string;
  value: number | "NA";
  color: "red" | "amber" | "green" | "none";
  addKeyword?: boolean;
};

// const ROWS: Row[] = [
//   { label: "Keyword Factor", value: "NA", color: "none", addKeyword: true },
//   { label: "Link Factor", value: 0, color: "none" },
//   { label: "Video SEO", value: 0, color: "none" },
//   { label: "Performance", value: 0, color: "none" },
//   { label: "Accessibility", value: 0, color: "none" },
//   { label: "Security", value: 40, color: "amber" },
//   { label: "PWA", value: 30, color: "red" },
//   { label: "Content Factor", value: 11, color: "red" },
//   { label: "Domain Factor", value: 40, color: "amber" },
//   { label: "Common SEO", value: 55, color: "amber" },
//   { label: "Image SEO", value: 63, color: "green" },
//   { label: "Networking", value: 71, color: "green" },
//   { label: "Usability", value: 100, color: "green" },
// ];

export default function ResultsOverview({
  scores,
  performance,
  technical,
  readability,
  contentAnalysis,
  url,
  analyzedAt,
  onAnalyze,
}: ResultsOverviewProps) {  

const seoFactors: Row[] = useMemo(() => {
  const getColor = (score: number): "red" | "amber" | "green" | "none" => {
    if (score < 40) return "red";
    if (score < 70) return "amber";
    return "green";
  };

  const safeNumber = (val: any): number =>
    typeof val === "number" && !isNaN(val) ? val : 0;

   return [
    { 
      label: "Page Load", 
      value: performance?.page_load_time 
        ? Math.round(Math.max(0, 100 - (performance.page_load_time / 20) * 100))
        : 0, 
      color: getColor(performance?.page_load_time 
        ? Math.round(Math.max(0, 100 - (performance.page_load_time / 20) * 100))
        : 0) 
    },
    { 
      label: "SSL Enabled", 
      value: technical?.ssl_enabled ? 100 : 0, 
      color: technical?.ssl_enabled ? "green" : "red" 
    },
    { 
      label: "Content Quality Score", 
      value: safeNumber(scores?.content_quality_score), 
      color: getColor(safeNumber(scores?.content_quality_score)) 
    },
    // { 
    //   label: "Common SEO", 
    //   value: safeNumber(scores?.on_page_seo_score), 
    //   color: getColor(safeNumber(scores?.on_page_seo_score)) 
    // },
    { 
      label: "Mobile Friendly", 
      value: technical?.is_mobile_friendly ? 100 : 0, 
      color: technical?.is_mobile_friendly ? "green" : "red" 
    },

    // --- Scores Section ---
    { label: "On-Page SEO Score", value: safeNumber(scores?.on_page_seo_score), color: getColor(safeNumber(scores?.on_page_seo_score)) },
    { label: "Readability Score", value: safeNumber(scores?.readability_score), color: getColor(safeNumber(scores?.readability_score)) },
    { label: "Content Quality Score", value: safeNumber(scores?.content_quality_score), color: getColor(safeNumber(scores?.content_quality_score)) },

    // --- Content Analysis Section ---
    // { label: "Content Length", value: safeNumber(contentAnalysis?.content_length), color: "none" },
    // { label: "Paragraph Count", value: safeNumber(contentAnalysis?.paragraphs_count), color: "none" },
    // { label: "Avg Paragraph Length", value: safeNumber(contentAnalysis?.avg_paragraph_length), color: "none" },
    // { label: "Word Count", value: safeNumber(contentAnalysis?.word_count), color: "none" },

    // --- Readability Section ---
    { label: "Flesch Reading Ease", value: safeNumber(readability?.flesch_reading_ease), color: getColor(safeNumber(readability?.flesch_reading_ease)) },
    { label: "Flesch-Kincaid Grade", value: safeNumber(readability?.flesch_kincaid_grade), color: getColor(100 - safeNumber(readability?.flesch_kincaid_grade) * 5) },
    // { label: "Avg Sentence Length", value: safeNumber(readability?.avg_sentence_length), color: "none" },
    // { label: "Avg Word Length", value: safeNumber(readability?.avg_word_length), color: "none" },
    { label: "Complex Word %", value: safeNumber(readability?.complex_word_percentage), color: getColor(100 - safeNumber(readability?.complex_word_percentage)) },
    // { label: "Total Sentences", value: safeNumber(readability?.total_sentences), color: "none" },
    // { label: "Total Words", value: safeNumber(readability?.total_words), color: "none" },
    // { label: "Readability Level", value: "NA", color: "none" },
  ];
}, [scores, contentAnalysis, readability, performance, technical]);


    const criticalErrors = seoFactors.filter(f => f.color === "red" && f.value !== "NA").length;
  const recommended = seoFactors.filter(f => f.color === "amber").length;
  const improved = seoFactors.filter(f => f.color === "green").length;

  // Format page load time
  const formatLoadTime = (seconds: number) => {
    if (seconds < 1) return `${Math.round(seconds * 1000)}ms`;
    return `${seconds?.toFixed(2)}s`;
  };

  // Format file size
  const formatFileSize = (estimate: string) => {
    if (estimate === "N/A") return "N/A";
    return estimate;
  };

   const handleDownloadPDF = () => {
    // 🔽 Your download logic here (PDF generation or API)
    alert("Download PDF feature coming soon!");
  };
  
  return (
    <section className="w-full relative overflow-hidden bg-[#0E032D] text-white pt-20">
      {/* page background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1335] via-[#110638] to-[#09041f]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_20%,rgba(246,76,255,0.25),transparent_60%),radial-gradient(650px_280px_at_95%_85%,rgba(255,197,83,0.24),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pt-14 pb-8 md:pt-18 md:pb-10 md:px-12">
        {/* MAIN CARD */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <GradientCard radius="rounded-[22px]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 border-b border-white/20 p-4 md:p-6 pb-4">
            <div className="flex flex-col gap-3 ">
          <span className="font-semibold text-white text-sm sm:text-lg break-all">
            {url || "No URL available"}
          </span>
           {analyzedAt && (
      <span className="text-sm text-white/80">
        Report generated at: {analyzedAt}
      </span>
    )}
    </div>

          <button
            onClick={handleDownloadPDF}
            className="mt-3 sm:mt-0 relative overflow-hidden rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#8B5CFF]"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]" />
            <span className="relative z-10">Download PDF</span>
          </button>
        </div>

            <div className="grid gap-8 md:gap-10 xl:gap-12 px-6 md:px-8 py-4 lg:py-5 xl:py-6 lg:grid-cols-[280px_minmax(0,1fr)_360px]">
              {/* LEFT: Gauge + copy + CTA */}
              <div className="flex flex-col">
                {/* centered on mobile, slightly nudged inward on desktop */}
                <div className="mx-auto lg:ml-6 xl:ml-10">
                  <Gauge score={scores?.overall_seo_score} max={100} />
                </div>

                <div className="mt-5 rounded-xl bg-white/6 px-3 py-3">
                  <div className="text-sm text-white/85">Your current SEO Health</div>
                  <div className="text-sm text-white/80 mt-0.5">
 <span className="font-semibold">{scores?.overall_seo_score} / 100</span> — {
                      scores?.overall_seo_score < 40 ? "Needs Improvement" :
                      scores?.overall_seo_score < 70 ? "Fair" : "Good"
                    }                  </div>
                </div>

                {/* UPDATED: gradient button */}
                <button
                onClick={() => onAnalyze(url)}
                  className="mt-5 relative overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#8B5CFF]"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]" />
                  <span  className="relative z-10">Re-Analyze Page</span>
                </button>

                {/* legend */}
                <div className="mt-6 flex flex-col gap-2 text-xs">
                  <Legend label="Critical error" count={criticalErrors} color="red" />
                  <Legend label="Recommended" count={recommended} color="amber" />
                  <Legend label="Improved" count={improved} color="green" />
                </div>
              </div>

              {/* MIDDLE: SEO Factors list */}
              <div className="relative">
                <SectionTitle>SEO Factors</SectionTitle>
                <div className="mt-3.5 space-y-3.5">
                  {seoFactors.map((r) => (
                    <motion.div key={r.label} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}>
                      <BarRow row={r} />
                    </motion.div>
                  ))}
                </div>
                <div className="hidden lg:block absolute right-[-24px] top-0 h-full w-px bg-white/12 rounded" />
              </div>

              {/* RIGHT: Performance & Keyword Metrics */}
              <div className="flex flex-col">
                <SectionTitle>Performance Insights</SectionTitle>

                   <div className="mt-3 grid grid-cols-2 gap-4">
                  <SparkCard title="Page Load Time" value={formatLoadTime(performance?.page_load_time)}>
                    <Sparkline />
                  </SparkCard>
                  <SparkCard title="Speed Index" value={performance?.speed_index ? `${performance.speed_index}ms` : "N/A"}>
                    <Sparkline />
                  </SparkCard>
                </div>

                {/* <div className="mt-3 grid grid-cols-2 gap-4">
                  <SparkCard title="Total Blocking Time" value={performance?.total_blocking_time ? `${performance.total_blocking_time}ms` : "N/A"}>
                    <Sparkline />
                  </SparkCard>
                  <SparkCard title="File Size" value={formatFileSize(technical?.page_size_estimate)}>
                    <Sparkline />
                  </SparkCard>
                </div> */}

                <SectionTitle className="mt-6">Keyword Metrics</SectionTitle>

                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-6 items-start">
                  <Metric icon={ICONS.words} label="Total Words" value={readability?.total_words.toString()} />
                  <Metric icon={ICONS.links} label="Total Sentences" value={readability?.total_sentences.toString()} />
                  <Metric icon={ICONS.mediaFile} label="Paragraphs" value={contentAnalysis?.paragraphs_count.toString()} />
                  <Metric icon={ICONS.links} label="Avg Sentence Length" value={`${readability?.avg_sentence_length.toFixed(1)} words`} />
                </div>
              </div>
            </div>
          </GradientCard>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Shared gradient wrapper ---------- */

function GradientCard({
  children,
  radius = "rounded-xl",
}: {
  children: React.ReactNode;
  radius?: string;
}) {
  return (
    <div className={`relative ${radius} p-[2px] bg-gradient-to-r from-[#6B41FF66] via-[#F64CFF66] to-[#FFC55366]`}>
      <div
        className={`pointer-events-none absolute inset-0 ${radius} opacity-40 blur-[36px]`}
        style={{
          background:
            "radial-gradient(60% 80% at 20% 0%, #F64CFF2b 0%, transparent 60%), radial-gradient(60% 80% at 80% 100%, #FFC55324 0%, transparent 60%)",
        }}
      />
      <div className={`relative ${radius} bg-[#160A3D]/60 backdrop-blur-xl border border-white/12`}>
        {children}
      </div>
    </div>
  );
}

/* ---------- Atoms ---------- */

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h4 className={`text-white/90 font-semibold text-[15px] sm:text-[16px] ${className}`}>{children}</h4>;
}

function Legend({ label, count, color }: { label: string; count: number; color: "red" | "amber" | "green" }) {
  const pill = useMemo(
    () => ({ red: "bg-[#FF4D4F]", amber: "bg-[#F59E0B]", green: "bg-[#22C55E]" }[color]),
    [color]
  );
  return (
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-semibold ${pill}`}>{count}</div>
      <div className="flex-1 h-1.5 rounded-full bg-white/12 relative overflow-hidden">
        <div className={`absolute left-0 top-0 h-full w-[55%] ${pill}`} />
      </div>
      <span className="min-w-[7.5rem] text-right text-white/90 font-medium text-[13px] sm:text-[14px]">
        {label}
      </span>
    </div>
  );
}

function BarRow({ row }: { row: Row }) {
  const bar =
    row.color === "red"
      ? "bg-[#FF4D4F]"
      : row.color === "amber"
      ? "bg-[#F59E0B]"
      : row.color === "green"
      ? "bg-[#22C55E]"
      : "bg-white/25";
  const valueText = row.value === "NA" ? "N/A" : `${row.value}%`;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-3">
        <div className="text-[13px] text-white/85">{row.label}</div>
        {row.addKeyword && (
          <button className="ml-2 text-[14px] sm:text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] hover:underline">
            Add Keyword
          </button>
        )}
        <div className="ml-auto text-xs text-white/60 tabular-nums">{valueText}</div>
      </div>
      <div className="h-2 rounded-full bg-white/10 relative overflow-hidden">
        {row.value !== "NA" && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${row.value}%` }}
            transition={{ duration: 0.6 }}
            className={`absolute left-0 top-0 h-full ${bar}`}
          />
        )}
      </div>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="rounded-lg p-[1.5px] bg-gradient-to-r from-[#6B41FF33] via-[#F64CFF33] to-[#FFC55333]">
      <div
        className="
          rounded-lg bg-[#160A3D]/70 border border-white/10 py-3 px-2
          grid justify-items-center gap-2 [grid-template-rows:28px_34px_auto]
        "
      >
        <Image src={icon} alt="" width={28} height={28} className="opacity-90" />
        <div className="text-[13px] text-white/80 leading-snug text-center min-h-[34px] flex items-center justify-center">
          {label}
        </div>
        <div className="text-xs text-white/65 tabular-nums leading-tight min-h-[18px]">{value}</div>
      </div>
    </div>
  );
}

function SparkCard({
  title,
  value,
  children,
}: {
  title: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <GradientCard>
      <div className="p-4 rounded-xl">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-sm text-white/85">{title}</div>
            <div className="text-xs text-white/60">{value}</div>
          </div>
        </div>
        <div className="mt-3 h-14">{children}</div>
      </div>
    </GradientCard>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 120 40" className="w-full h-full">
      {[8, 18, 12, 24, 16, 28, 10, 26, 14, 30].map((h, i) => (
        <rect key={i} x={i * 12} y={40 - h} width="6" height={h} rx="2" className="fill-cyan-300/85" />
      ))}
    </svg>
  );
}

function Gauge({ score, max }: { score: number; max: number }) {
  const pct = Math.max(0, Math.min(1, score / max));
  const R = 45;
  const C = 2 * Math.PI * R;
  const stroke = pct < 0.34 ? "#FF4D4F" : pct < 0.67 ? "#F59E0B" : "#22C55E";

  return (
    <div className="relative w-44 h-44">
      <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={R} stroke="rgba(255,255,255,0.18)" strokeWidth="10" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r={R}
          stroke={stroke}
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={{ strokeDashoffset: C * (1 - pct) }}
          transition={{ duration: 0.9 }}
        />
      </svg>
      <div className="absolute inset-0 rounded-full shadow-[0_0_18px_rgba(246,76,255,0.22)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold tabular-nums">{score}</div>
          <div className="text-xs text-white/70">/100</div>
        </div>
      </div>
    </div>
  );
}
