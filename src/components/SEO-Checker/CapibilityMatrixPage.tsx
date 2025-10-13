// pages/CapabilityMatrixPage.tsx
"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Role = "Writer" | "Editor" | "SEO";
type Tag = "Live" | "Pro" | "Planned" | "Pro (server)";
type Category = "All" | Role;

type Feature = {
  icon: string;
  title: string;
  desc: string;
  roles: Role[];
  tag?: Tag;
};

const CATEGORIES: Category[] = ["All", "Writer", "Editor", "SEO"];

const FEATURES: Feature[] = [
  { icon: "/seo-checker/seoanalyzerimages/Vector1.png", title: "Flesch & Sentences", desc: "Reading ease, avg length, dispersion", roles: ["Writer", "Editor"], tag: "Live" },
  { icon: "/seo-checker/seoanalyzerimages/Vector2.png", title: "Passive & Hedging", desc: "Passage % hedge terms", roles: ["Writer", "Editor"], tag: "Live" },
  { icon: "/seo-checker/seoanalyzerimages/Vector3.png", title: "Heading Hierarchy", desc: "H1 single, jump detection", roles: ["SEO", "Editor"], tag: "Live" },
  { icon: "/seo-checker/seoanalyzerimages/Vector4.png", title: "Meta Audit", desc: "Title/meta windows, OG/Twitter", roles: ["SEO", "Editor"], tag: "Live" },
  { icon: "/seo-checker/seoanalyzerimages/Vector5.png", title: "Link Balance", desc: "Internal/external counts", roles: ["SEO", "Editor"], tag: "Live" },
  { icon: "/seo-checker/seoanalyzerimages/Vector6.png", title: "Alt Text", desc: "Missing/empty alt detection", roles: ["SEO", "Editor"], tag: "Live" },
  { icon: "/seo-checker/seoanalyzerimages/Vector7.png", title: "Keyword Signal", desc: "Title/H1/Intro presence, density", roles: ["SEO"], tag: "Live" },
  { icon: "/seo-checker/seoanalyzerimages/Vector10.png", title: "Article Schema", desc: "Structured data checks & hints", roles: ["SEO"], tag: "Pro (server)" },
  { icon: "/seo-checker/seoanalyzerimages/Vector9.png", title: "E-E-A-T", desc: "Byline, updated date, about/contact", roles: ["SEO", "Editor"], tag: "Live" },
  { icon: "/seo-checker/seoanalyzerimages/Vector8.png", title: "CORS-safe Fetch", desc: "Bypass CORS via API", roles: ["SEO"], tag: "Planned" },
  { icon: "/seo-checker/seoanalyzerimages/Vector11.png", title: "One-Click Fixes", desc: "Rewrite titles/meta, FAQ suggestions", roles: ["Writer", "SEO"], tag: "Planned" },
  { icon: "/seo-checker/seoanalyzerimages/Vector12.png", title: "Benchmarks", desc: "Team targets & progress", roles: ["SEO", "Editor"], tag: "Live" },
];

// Badge styles (higher contrast, consistent)
const tagStyles: Record<Tag, string> = {
  Live: "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30",
  Pro: "bg-amber-400/15 text-amber-300 border border-amber-400/30",
  Planned: "bg-fuchsia-400/15 text-fuchsia-300 border border-fuchsia-400/30",
  "Pro (server)": "bg-amber-400/15 text-amber-300 border border-amber-400/30",
};

const CapabilityMatrixPage: NextPage = () => {
  const [category, setCategory] = useState<Category>("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (category === "All") return FEATURES;
    return FEATURES.filter((f) => f.roles.includes(category));
  }, [category]);

  return (
    <main className="w-full relative overflow-hidden text-white">
      {/* Background layers (cleaner + responsive) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C0836] via-[#0E032D] to-[#100429]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* soft glows only on lg+ */}
        <div
          className="hidden lg:block absolute w-[420px] h-[420px] blur-[200px] opacity-80 rotate-[42deg]"
          style={{ top: "18%", left: "-140px", background: "linear-gradient(90deg,#6B41FF 0%,#F64CFF 50%,#FFC553 100%)" }}
        />
        <div
          className="hidden lg:block absolute w-[420px] h-[420px] blur-[200px] opacity-80 rotate-[42deg]"
          style={{ bottom: "10%", right: "-160px", background: "linear-gradient(90deg,#6B41FF 0%,#F64CFF 50%,#FFC553 100%)" }}
        />
      </div>

      {/* Main Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 py-14 md:py-16 lg:py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
          className="text-center mb-7 md:mb-9"
        >
          <h1 className="font-bold leading-tight text-[clamp(28px,4vw,46px)]">
            Deep{" "}
            <span className="bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] bg-clip-text text-transparent">
              Capability Matrix
            </span>
          </h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto text-[15px] sm:text-[17px] leading-relaxed">
            Drop in a URL. Get a real-time SEO report with actionable insights. No setup, no signup, no waiting.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2.5 sm:gap-3 mb-6 flex-wrap">
          {CATEGORIES.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={[
                  "px-5 sm:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 border outline-none",
                  active
                    ? "border-transparent bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] text-white shadow hover:brightness-110 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#CFA8FF]"
                    : "border-white/12 bg-white/[0.08] text-white/85 hover:bg-white/15 hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-white/30",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filtered.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: prefersReducedMotion ? 0 : i * 0.04 }}
              className="group rounded-[20px] p-[1px]
                         bg-[linear-gradient(135deg,#6B41FF,transparent_35%),linear-gradient(315deg,#FFC553,transparent_40%),linear-gradient(45deg,#F64CFF,transparent_35%)]
                         shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]
                         transition duration-300 will-change-transform
                         hover:-translate-y-2 hover:scale-[1.01]
                         focus-within:-translate-y-2 hover:[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.12)]"
            >
              {/* INNER CARD */}
              <div
                className="
                  rounded-[19px] h-full backdrop-blur-xl border border-white/10
                  px-6 py-6 flex flex-col min-h-[220px]
                  bg-[linear-gradient(135deg,#170A34_0%,#1B0A3D_45%,#240D53_100%)]
                "
              >
                <header className="flex items-center gap-3">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Image src={f.icon} alt="" width={24} height={24} className="opacity-90" />
                  </div>
                  <h3 className="font-semibold text-[17px] sm:text-[18px] md:text-[19px] leading-snug">
                    {f.title}
                  </h3>
                  {f.tag && (
                    <span className={`ml-auto text-[11px] px-2 py-[3px] rounded-md ${tagStyles[f.tag]}`}>
                      {f.tag}
                    </span>
                  )}
                </header>

                <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed mt-3">
                  {f.desc}
                </p>

                <footer className="mt-4 text-white/60 text-[12px]">
                  {f.roles.join(" · ")}
                </footer>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CapabilityMatrixPage;
