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
  {
    icon: "/seo-checker/seoanalyzerimages/Vector1.png",
    title: "Flesch & Sentences",
    desc: "Looks at sentence length and Flesch readability to rate how easy it is to read. Draws attention to long or complicated lines and shows how they split out in the text. Makes it clear how to improve flow and reader retention to get better results.",
    roles: ["Writer", "Editor"],
    tag: "Live"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector2.png",
    title: "Passive & Hedging",
    desc: "Finds passive voice and words that mean more than one thing in the text. Finds affected sections and counts the number of passive or uncertain words used. Stronger active rewrites are suggested to make the text clearer and more powerful.",
    roles: ["Writer", "Editor"],
    tag: "Live"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector3.png",
    title: "Heading Hierarchy",
    desc: "Makes sure there are no structure problems with the use of H1, heading order, and jump recognition. Looks through the piece for missing levels and inconsistent heading patterns. Fixes are suggested to make a sensible hierarchy that makes the site easier to crawl and better for users.",
    roles: ["SEO", "Editor"],
    tag: "Live"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector4.png",
    title: "Meta Audit",
    desc: "Examines the title tag, meta description, and OG/Twitter metadata usage. Marks tags that are missing, shortened, or duplicate and gives a score for snippet-readiness. It makes ideas that are optimized to boost CTR and social sharing.",
    roles: ["SEO", "Editor"],
    tag: "Live"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector5.png",
    title: "Link Balance",
    desc: "Analyze internal and external links and anchors texts. Finds areas that are missing content, broken links, and too many external links. Recommends balancing and internal linking to improve authority and navigation.",
    roles: ["SEO", "Editor"],
    tag: "Live"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector6.png",
    title: "Alt Text",
    desc: "Detects missing, empty, or non-descriptive image alt attributes. Gives images a score based on how accessible they are and how well they fit with the text. suggests short, keyword-rich alt text to improve picture SEO and make it more accessible.",
    roles: ["SEO", "Editor"],
    tag: "Live"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector7.png",
    title: "Keyword Signal",
    desc: "Checks to see if the keywords are in the title, H1, introduction, and important sections. Checks placement and quantity to find weak or spammy usage. Recommends target adjustments to strengthen on-page relevance without over-optimization.",
    roles: ["SEO"],
    tag: "Live"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector10.png",
    title: "Article Schema",
    desc: "Checks to see if the article schema and organized data are correct. Finds JSON-LD code that is missing or wrong and stops rich results from showing up. Gives model suggestions to improve the chances of getting higher SERP rankings.",
    roles: ["SEO"],
    tag: "Pro (server)"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector9.png",
    title: "E-E-A-T",
    desc: "Checks the author byline, update date, and 'about' or 'contact' information for signs of trust. Highlight gaps in experties, experience, authority, and trustworthiness. Gives steps that can be taken to improve credibility and get in line with Google's quality signs.",
    roles: ["SEO", "Editor"],
    tag: "Live"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector8.png",
    title: "CORS-safe Fetch",
    desc: "Does safe remote fetches through API to get around CORS restrictions. Guarantees the safe access of public pages so that analysis can be done consistently. Lets you scan any URL right away without any client-side CORS problems or blockers.",
    roles: ["SEO"],
    tag: "Planned"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector11.png",
    title: "One-Click Fixes",
    desc: "Offers quick rewrites for titles, meta, and FAQ snippets. Uses AI to make suggestions that you can accept with just one click. Makes the optimization process go faster so editors can quickly post content that is ready to rank.",
    roles: ["Writer", "SEO"],
    tag: "Planned"
  },
  {
    icon: "/seo-checker/seoanalyzerimages/Vector12.png",
    title: "Benchmarks",
    desc: "It checks your writing against team goals and averages from the past. Shows progress bars and delta measures to see how SEO is getting better over time. Helps teams set goals, measure wins, and prioritize tasks for higher rankings.",
    roles: ["SEO", "Editor"],
    tag: "Live"
  }
]
;

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
      <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 py-14 md:py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
          className="text-center mb-7 md:mb-9"
        >
          <h2 className="font-bold leading-tight text-[clamp(28px,4vw,46px)]">
            Deep{" "}
            <span className="bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] bg-clip-text text-transparent">
              Capability Matrix
            </span>
          </h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto text-[15px] sm:text-[17px] leading-relaxed">
Drop in a URL. Get a real-time SEO article checker report with actionable insights. No setup, no signup, no waiting.          </p>
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
