// app/seostats/OnPageScore.tsx  (or pages/OnPageScore.tsx)
"use client";

type AnalysisData = {
  scores: {
    on_page_seo_score: number;
  };
  meta_data: {
    title_length: number;
    description_length: number;
    url_length: number;
  };
  links: {
    total_links: number;
    broken_links: number;
  };
};

type Metric = {
  label: string;
  value: number | string;
  badge?: "GREAT" | "OK" | "LOW";
};



export default function OnPageScore({ analysisData }: { analysisData: AnalysisData }) {
  const { scores, meta_data, links } = analysisData;

   const METRICS: Metric[] = [
    {
      label: "ON-PAGE SEO SCORE",
      value: `${scores.on_page_seo_score} %`,
      badge:
        scores.on_page_seo_score >= 90
          ? "GREAT"
          : scores.on_page_seo_score >= 70
          ? "OK"
          : "LOW",
    },
    {
      label: "TITLE LENGTH",
      value: meta_data.title_length,
      badge:
        meta_data.title_length >= 50 && meta_data.title_length <= 60
          ? "GREAT"
          : meta_data.title_length >= 30 && meta_data.title_length <= 70
          ? "OK"
          : "LOW",
    },
    {
      label: "DESCRIPTION LENGTH",
      value: meta_data.description_length,
      badge:
        meta_data.description_length >= 140 && meta_data.description_length <= 160
          ? "GREAT"
          : meta_data.description_length >= 100 && meta_data.description_length <= 180
          ? "OK"
          : "LOW",
    },
    {
      label: "TOTAL LINKS",
      value: links.total_links,
      badge:
        links.total_links >= 50 && links.total_links <= 150
          ? "GREAT"
          : links.total_links >= 20 && links.total_links <= 200
          ? "OK"
          : "LOW",
    },
    {
      label: "BROKEN LINKS",
      value: links.broken_links,
      badge:
        links.broken_links === 0
          ? "GREAT"
          : links.broken_links <= 3
          ? "OK"
          : "LOW",
    },
  ];

  return (
     <section className="w-full relative overflow-hidden bg-[#0E032D]">
      {/* Background gradient grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_60%_-20%,rgba(107,65,255,0.35),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-6 md:py-12">
        <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-[32px]">
          On-Page SEO Score
        </h2>
        {/* <p className="mt-2 text-center text-white/80 max-w-3xl mx-auto text-sm sm:text-[17px] leading-relaxed">
          This section evaluates your page’s key SEO signals and metadata
          quality to measure how well-optimized your page is for search engines.
        </p> */}

        {/* Metric Cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value, badge }: Metric) {
  return (
    <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]">
      <div className="rounded-2xl bg-[#151039]/85 backdrop-blur-xl border border-white/10 px-5 py-5 min-h-[140px] flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_-18px_rgba(0,0,0,0.6)]">
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-40 blur-[36px]"
          style={{
            background:
              "radial-gradient(60% 80% at 20% 0%, #F64CFF2b 0%, transparent 60%), radial-gradient(60% 80% at 80% 100%, #FFC55324 0%, transparent 60%)",
          }}
        />
        <div className="relative flex items-center justify-between">
          <p className="text-[12px] tracking-wide text-white/85">{label}</p>
          {/* <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full text-[11px] leading-none bg-[#8A1431] text-white/90">
            ?
          </span> */}
        </div>

        <div className="relative mt-4 flex items-end justify-between">
          <div className="text-[28px] md:text-[32px] font-semibold text-white tabular-nums">
            {value}
          </div>

          {badge && (
            <span
              className={[
                "inline-flex items-center rounded-md px-2.5 py-[6px] text-[11px] font-semibold uppercase tracking-wide",
                badge === "GREAT"
                  ? "bg-emerald-600 text-white"
                  : badge === "OK"
                  ? "bg-amber-500 text-black"
                  : "bg-rose-600 text-white",
              ].join(" ")}
            >
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
