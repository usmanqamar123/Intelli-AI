"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoGraph } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import { FiLink, FiClipboard } from "react-icons/fi";

interface HeroSectionProps {
  tokens: string | null;
}

const PRO_POINTS = [
  "Flesch + Sentence Length",
  "H1 single + Hierarchy",
  "Alts and Media Balance",
  "Passive voice %",
  "Title/meta/OG/Twitter",
  "Keyword Signals",
];

const HeroSection: React.FC<HeroSectionProps> = ({ tokens }) => {
  const ctaHref = process.env.NEXT_PUBLIC_APP || "/";
  const [url, setUrl] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = ctaHref;
  };

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setUrl(text);
    } catch {
      /* ignore */
    }
  };

  return (
    <main className="relative w-full overflow-hidden">
      {/* Background: soft grid + subtle radial glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:44px_44px]" />
        {/* transparent -> fade into #11022F to avoid black band */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_-10%,rgba(107,65,255,0.33),rgba(17,2,47,0)_60%,rgba(17,2,47,1)_100%),radial-gradient(120%_100%_at_100%_10%,rgba(246,76,255,0.22),rgba(17,2,47,0)_55%,rgba(17,2,47,1)_100%)]" />
      </div>

      {/* whole section top margin */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-12 mt-6 md:mt-8 lg:mt-12 pt-20 md:pt-24 xl:pt-28 pb-8 lg:pb-10 text-white">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left: Copy + CTA */}
          <div className="w-full lg:w-[52%] flex flex-col gap-6 lg:gap-8">
            <div className="inline-flex items-center gap-2 text-[15px] md:text-[16px] leading-relaxed text-white/70 justify-center md:justify-start">
              <BsStars className="text-white/80 text-[18px]" />
              <span>AI-Backed • Diagnostics • Actionable Fixes</span>
            </div>

            <h1 className="font-geist font-bold tracking-tight text-center md:text-left leading-[1.05] text-3xl md:text-5xl xl:text-[56px] mb-1 md:mb-2 max-w-[16ch] md:max-w-none mx-auto md:mx-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B41FF] via-[#8A5BFF] to-[#3BB8FF]">
                AI-Backed
              </span>{" "}
              SEO
              <br className="hidden md:block" />{" "}
              Diagnostics{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F64CFF] via-[#FF8AE0] to-[#FFC553]">
                With Actionable Fixes
              </span>
            </h1>

            <p
              className="text-base md:text-lg text-white/85 mx-auto md:mx-0
                         md:max-w-[64ch] lg:max-w-[66ch] [text-wrap:balance] leading-relaxed -mt-1"
            >
              Readability, structure, metadata, links, accessibility, keyword placement,
              and snippet-readiness, all prioritized by impact
              <br className="hidden md:block" />
              with clear, step-by-step fixes.
            </p>

            {/* URL bar */}
            <motion.form
              role="search"
              aria-label="Analyze article SEO"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="min-w-0 mx-auto md:mx-0 w-full max-w-2xl flex flex-col sm:flex-row items-stretch gap-3"
            >
              <div className="relative flex-1 min-w-0">
                <FiLink
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600/80"
                />
                <input
                  id="hero-url"
                  type="url"
                  inputMode="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Drop a URL — Intelliwriter will handle the audit."
                  aria-label="Article URL"
                  className="h-[46px] w-full pl-10 pr-12 rounded-2xl bg-white/95 backdrop-blur-0
                             text-slate-900 placeholder-slate-600 shadow-sm
                             [box-shadow:inset_0_0_0_1px_rgba(0,0,0,0.02)]
                             focus:outline-none focus:ring-2 focus:ring-[#8B5CFF]"
                />
                <button
                  type="button"
                  onClick={pasteFromClipboard}
                  aria-label="Paste from clipboard"
                  title="Paste"
                  className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center
                             h-8 w-8 rounded-lg text-slate-700/90 hover:bg-slate-200/60
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CFF]"
                >
                  <FiClipboard />
                </button>
              </div>

              <button
                type="submit"
                className="relative h-[46px] px-6 rounded-xl font-inter font-semibold text-[15px] text-white shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#8B5CFF] w-full sm:w-auto"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]
                                 transition-transform will-change-transform hover:scale-[1.01]" />
                <span className="relative z-10">Analyze Score</span>
              </button>
            </motion.form>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 text-sm md:text-[15px] leading-relaxed text-white/65">
              <div className="flex items-center gap-2">
                <GoGraph className="opacity-80 text-[18px]" />
                <span>Fix-First Prioritization</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <GoGraph className="opacity-80 text-[18px]" />
                <span>No guesswork — clear steps</span>
              </div>
            </div>
          </div>

          {/* Right: Feature card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="w-full lg:w-[44%] self-start mt-3 md:mt-5 lg:mt-8"
          >
            <div className="rounded-3xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] shadow-[0_0_20px_rgba(246,76,255,0.22)]">
              {/* Purple-tinted inner card */}
              <div className="rounded-3xl bg-[#1D0B3A]/95 p-7 md:p-9">
                <h2 className="text-2xl md:text-3xl font-bold mb-7 text-center md:text-left">
                  Why it’s{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                    Pro-Grade
                  </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PRO_POINTS.map((title, i) => (
                    <div
                      key={`${title}-${i}`}
                      className="min-w-0 flex items-center gap-3 min-h-[56px] rounded-xl border border-white/10 bg-white/5
                                 px-4 py-2 text-white/90 hover:bg-white/[0.08] transition"
                    >
                      <GoGraph className="text-xl opacity-90 shrink-0" />
                      <span className="text-sm md:text-[15px] font-medium whitespace-nowrap truncate">
                        {title}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center md:text-left">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white hover:underline"
                  >
                    <span>View sample report</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                      <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
