"use client";

import Link from "next/link";

interface Issue {
  type: string;
  category: string;
  message: string;
}

interface IssuesData {
  total: number;
  critical: number;
  warning: number;
  info: number;
  details: Issue[];
}

interface SummaryData {
  strengths: string[];
  improvements: string[];
}

interface ContentAnalysis {
  content_length: number;
  paragraphs_count: number;
  avg_paragraph_length: number;
  word_count: number;
}

interface Headings {
  h1_count: number;
  h2_count: number;
  h3_count: number;
  total_headings: number;
  h1_texts: string[];
}

interface Images {
  total_images: number;
  images_with_alt: number;
  images_without_alt: number;
  alt_text_coverage: number;
}

interface Links {
  internal_links: number;
  external_links: number;
  broken_links: number;
  total_links: number;
}

interface Technical {
  has_schema_markup: boolean;
  is_mobile_friendly: boolean;
  ssl_enabled: boolean;
  page_size_estimate: string;
}

interface Props {
  issues: IssuesData;
  summary: SummaryData;
  contentAnalysis: ContentAnalysis;
  headings: Headings;
  images: Images;
  links: Links;
  technical: Technical;
}

const SeoIssuesDiscovered: React.FC<Props> = ({
  issues,
  summary,
  contentAnalysis,
  headings,
  images,
  links,
  technical,
}) => {
  const getHeadingSuggestion = (count: number, type: string) => {
    switch (type) {
      case "H1":
        return count === 1
          ? "✅ Ideal — exactly one H1 heading found."
          : count === 0
          ? "❌ Missing H1 — add one clear main heading."
          : "⚠️ Too many H1s — only one main heading should exist.";
      case "H2":
        return count >= 2 && count <= 15
          ? "✅ Good — balanced number of H2 headings."
          : count < 2
          ? "⚠️ Add more H2s to structure your content better."
          : "⚠️ Too many H2s — consider simplifying sections.";
      case "H3":
        return count >= 2 && count <= 20
          ? "✅ Good — supporting subheadings are well used."
          : count < 2
          ? "⚠️ Add more H3s for better content hierarchy."
          : "⚠️ Too many H3s — simplify for readability.";
      default:
        return "";
    }
  };

  const getIssueColor = (type: string) => {
    switch (type) {
      case "critical":
        return "#EF4444"; // Red
      case "warning":
        return "#F59E0B"; // Yellow
      case "info":
        return "#5d8dda"; // Blue
      default:
        return "#FFFFFF";
    }
  };

  return (
    <section className="w-full relative overflow-hidden bg-[#0E032D] text-white">
      {/* very light vignette + grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_60%_-20%,rgba(107,65,255,0.35),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-6 pb-6 md:pt-8 md:pb-8">
        {/* Heading + sub */}
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px]">
          SEO Issues Discovered
        </h2>
        {/* <p className="mt-3 text-center text-white/80 max-w-3xl mx-auto text-sm sm:text-[17px] leading-relaxed">
          This section identifies your site’s most critical SEO issues and
          delivers clear recommendations to resolve them and strengthen search
          performance.
        </p> */}

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] gap-5 md:gap-6">
          {/* Left: SEO Summary */}
          <GradientCard>
            <div className="relative rounded-[18px] bg-[#151039]/85 backdrop-blur-xl border border-white/10 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="tracking-wide text-base md:text-lg">
                  ARTICLE SEO OVERVIEW
                </span>
                <InfoDot />
              </div>

              <p className="mt-3 text-[14px] text-white/70 leading-relaxed">
                Here’s a summary of your article’s technical and link health
                based on the latest SEO analysis.
              </p>

              <hr className="my-4 border-white/10" />

              {/* 🔗 Link Health */}
              <div className="text-sm text-white/80 uppercase">Link Health</div>
              <div className="mt-3 space-y-2">
  <StatusRow
    color="#3B82F6"
    label="Internal Links"
    value={links.internal_links}
  />
  <StatusRow
    color="#8B5CF6"
    label="External Links"
    value={links.external_links}
  />
  <StatusRow
    color={links.broken_links > 0 ? "#EF4444" : "#22C55E"}
    label="Broken Links"
    value={links.broken_links}
  />
  <StatusRow
    color="#10B981"
    label="Total Links"
    value={links.total_links}
  />
</div>

              <hr className="my-4 border-white/10" />

              {/* 🧩 Technical Factors */}
              <div className="text-sm text-white/80 uppercase">
                Technical Factors
              </div>
              <div className="mt-3 space-y-2">
                <StatusRow
                  color={technical.ssl_enabled ? "#22C55E" : "#EF4444"}
                  label="SSL Enabled"
                  value={technical.ssl_enabled ? "Yes" : "No"}
                />
                <StatusRow
                  color={technical.is_mobile_friendly ? "#22C55E" : "#EF4444"}
                  label="Mobile Friendly"
                  value={technical.is_mobile_friendly ? "Yes" : "No"}
                />
                <StatusRow
                  color={technical.has_schema_markup ? "#22C55E" : "#EF4444"}
                  label="Schema Markup"
                  value={technical.has_schema_markup ? "Yes" : "No"}
                />
              </div>

              <hr className="my-4 border-white/10" />

              {/* 🖼️ Image Optimization */}
              <div className="text-sm text-white/80 uppercase">
                Image Optimization
              </div>
              <div className="mt-3 space-y-2">
                <StatusRow
                  color={images.alt_text_coverage >= 80 ? "#22C55E" : "#F59E0B"}
                  label="Alt Text Coverage (%)"
                  value={images.alt_text_coverage}
                />
                <StatusRow
                  color="#22C55E"
                  label="Images with Alt"
                  value={images.images_with_alt}
                />
                <StatusRow
                  color="#EF4444"
                  label="Images without Alt"
                  value={images.images_without_alt}
                />
              </div>
              {/* ✳️ Suggested Improvements */}
              <hr className="my-4 border-white/10" />
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span className="tracking-wide">SUGGESTED IMPROVEMENTS</span>
                <InfoDot />
              </div>

              <ul className="mt-3 space-y-2 text-[13px] text-white/75 list-disc pl-4">
                {summary.improvements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </GradientCard>

          {/* Right: Issues & Top Items */}
          <GradientCard>
            <div className="relative rounded-[18px] bg-[#151039]/85 backdrop-blur-xl border border-white/10 p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-center gap-2 text-base md:text-lg text-white/80">
                <span className="tracking-wide">SEO ISSUES DISCOVERED</span>
                <InfoDot />
              </div>

              <div className="mt-3 text-3xl font-semibold tabular-nums">
                {issues.total}
              </div>

              {/* Issue counts summary */}
              <div className="mt-2 text-sm text-white/65">
                <span className="text-[#EF4444] font-medium">
                  {issues.critical} Critical
                </span>
                {" • "}
                <span className="text-[#F59E0B] font-medium">
                  {issues.warning} Warnings
                </span>
                {" • "}
                <span className="text-[#3B82F6] font-medium">
                  {issues.info} Info
                </span>
              </div>

              <hr className="my-4 border-white/10" />

              {/* Top Issues */}
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span className="tracking-wide">TOP SEO ISSUES</span>
                <InfoDot />
              </div>

              <div className="mt-3 divide-y divide-white/10">
                {issues.details.slice(0, 3).map((issue, index) => (
                  <IssueRow
                    key={index}
                    left={
                      <span
                        className="text-sm text-white/85 leading-relaxed"
                        style={{ color: getIssueColor(issue.type) }}
                      >
                        {issue.message}
                      </span>
                    }
                  />
                ))}
              </div>

              <hr className="my-4 border-white/10" />

              {/* Headings Overview */}
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span className="tracking-wide">HEADING STRUCTURE</span>
                <InfoDot />
              </div>

              <div className="mt-3 space-y-2 text-sm text-white/85">
                <div>
                  <span className="font-semibold text-[#22C55E]">H1:</span>{" "}
                  {headings.h1_count} –{" "}
                  {getHeadingSuggestion(headings.h1_count, "H1")}
                </div>
                <div>
                  <span className="font-semibold text-[#FACC15]">H2:</span>{" "}
                  {headings.h2_count} –{" "}
                  {getHeadingSuggestion(headings.h2_count, "H2")}
                </div>
                <div>
                  <span className="font-semibold text-[#60A5FA]">H3:</span>{" "}
                  {headings.h3_count} –{" "}
                  {getHeadingSuggestion(headings.h3_count, "H3")}
                </div>
              </div>
              {/* 💪 Strengths */}
              <hr className="my-4 border-white/10" />
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span className="tracking-wide">STRENGTHS</span>
                <InfoDot />
              </div>

              <ul className="mt-3 space-y-2 text-[13px] text-white/75 list-disc pl-4">
                {summary.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-white/10">
                <Link href={`${process.env.NEXT_PUBLIC_APP}auth/register`}>
                  <button className="group inline-flex items-center gap-2 text-[16px] text-white/85 hover:text-white">
                    See All SEO Issues
                    <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
};

function GradientCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-[20px] p-[2px] bg-gradient-to-r from-[#6B41FF66] via-[#F64CFF66] to-[#FFC55366]">
      {/* soft inner glow (very subtle) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] opacity-40 blur-[36px]"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 0%, #F64CFF2b 0%, transparent 60%), radial-gradient(60% 80% at 80% 100%, #FFC55324 0%, transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}

function InfoDot() {
  return <span className="inline-block h-2 w-2 rounded-full bg-[#8A1431]" />;
}

function StatusRow({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: number | string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <span
          className="inline-block h-3 w-3 rounded-sm"
          style={{ backgroundColor: color }}
        />
        <span className="text-white/80">{label}</span>
      </div>
      <span className="tabular-nums text-white/70">{value}</span>
    </div>
  );
}

function IssueRow({ left }: { left: React.ReactNode }) {
  return (
    <div className="py-3 flex items-center justify-between">
      <div className="text-[13px] sm:text-[14px] text-white/85">{left}</div>
      <Link href={`${process.env.NEXT_PUBLIC_APP}auth/register`}>
        <button className="group inline-flex items-center gap-1 text-[12px] text-white/70 hover:text-white">
          View Details
          <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </button>
      </Link>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
      ✓
    </span>
  );
}

/** Row with consistent icon / text alignment used in the CTA bullets */
function BenefitRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[26px_1fr] items-start justify-self-start gap-3 text-white/85 text-[16px] sm:text-[17px]">
      <Check />
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}

export default SeoIssuesDiscovered;
