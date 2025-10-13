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

type Row = {
  label: string;
  value: number | "NA";
  color: "red" | "amber" | "green" | "none";
  addKeyword?: boolean;
};

const ROWS: Row[] = [
  { label: "Keyword Factor", value: "NA", color: "none", addKeyword: true },
  { label: "Link Factor", value: 0, color: "none" },
  { label: "Video SEO", value: 0, color: "none" },
  { label: "Performance", value: 0, color: "none" },
  { label: "Accessibility", value: 0, color: "none" },
  { label: "Security", value: 40, color: "amber" },
  { label: "PWA", value: 30, color: "red" },
  { label: "Content Factor", value: 11, color: "red" },
  { label: "Domain Factor", value: 40, color: "amber" },
  { label: "Common SEO", value: 55, color: "amber" },
  { label: "Image SEO", value: 63, color: "green" },
  { label: "Networking", value: 71, color: "green" },
  { label: "Usability", value: 100, color: "green" },
];

export default function ResultsOverview() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0E032D] text-white pt-20">
      {/* page background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1335] via-[#110638] to-[#09041f]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_20%,rgba(246,76,255,0.25),transparent_60%),radial-gradient(650px_280px_at_95%_85%,rgba(255,197,83,0.24),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-5 pt-14 pb-8 md:pt-18 md:pb-10">
        {/* header */}
        <div className="mb-8 text-center">
          <p className="text-sm text-white/70">https://intelliwriter.io/</p>

          <h3 className="mt-2 text-2xl sm:text-3xl md:text-[32px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]">
            IntelliWriter – AI Content Writer Checker for SEO and Blog Automation
          </h3>

          <p className="mt-3 mx-auto max-w-2xl text-white/80 text-sm md:text-[17px] leading-relaxed">
            Create SEO-friendly articles, automate blog publishing, and boost authority on WordPress, Shopify, and Wix.
          </p>
        </div>

        {/* MAIN CARD */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <GradientCard radius="rounded-[22px]">
            <div className="grid gap-8 md:gap-10 xl:gap-12 px-6 md:px-8 py-7 lg:py-9 xl:py-10 lg:grid-cols-[280px_minmax(0,1fr)_360px]">
              {/* LEFT: Gauge + copy + CTA */}
              <div className="flex flex-col">
                {/* centered on mobile, slightly nudged inward on desktop */}
                <div className="mx-auto lg:ml-6 xl:ml-10">
                  <Gauge score={29} max={100} />
                </div>

                <div className="mt-5 rounded-xl bg-white/6 px-3 py-3">
                  <div className="text-sm text-white/85">Your current SEO Health</div>
                  <div className="text-sm text-white/80 mt-0.5">
                    <span className="font-semibold">29 / 100</span> — Needs Improvement
                  </div>
                </div>

                <div className="mt-3 text-emerald-300/90 text-sm">↑ +4 since last scan</div>

                {/* UPDATED: gradient button */}
                <button
                  className="mt-5 relative overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#8B5CFF]"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]" />
                  <span className="relative z-10">Re-Analyze Page</span>
                </button>

                {/* legend */}
                <div className="mt-6 flex flex-col gap-2 text-xs">
                  <Legend label="Critical error" count={8} color="red" />
                  <Legend label="Recommended" count={2} color="amber" />
                  <Legend label="Improved" count={3} color="green" />
                </div>
              </div>

              {/* MIDDLE: SEO Factors list */}
              <div className="relative">
                <SectionTitle>SEO Factors</SectionTitle>
                <div className="mt-3.5 space-y-3.5">
                  {ROWS.map((r) => (
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
                  <SparkCard title="Response Time" value="1 Mi">
                    <Sparkline />
                  </SparkCard>
                  <SparkCard title="File Size" value="1 MB">
                    <Sparkline />
                  </SparkCard>
                </div>

                <SectionTitle className="mt-6">Keyword Metrics</SectionTitle>

                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-6 items-start">
                  <Metric icon={ICONS.links} label="No. of Nofollow Links" value="Awaiting analysis" />
                  <Metric icon={ICONS.words} label="Total Words" value="Awaiting analysis" />
                  <Metric icon={ICONS.links} label="No. of External Links" value="Awaiting analysis" />
                  <Metric icon={ICONS.mediaFile} label="Media File" value="Awaiting analysis" />
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
