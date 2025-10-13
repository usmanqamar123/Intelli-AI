// app/seostats/OnPageScore.tsx  (or pages/OnPageScore.tsx)
"use client";

type Metric = {
  label: string;
  value: number | string;
  badge?: "GREAT" | "OK" | "LOW";
};

const METRICS: Metric[] = [
  { label: "ON-PAGE SEO SCORE", value: 79, badge: "GREAT" },
  { label: "ORGANIC MONTHLY TRAFFIC", value: 6 },
  { label: "ORGANIC KEYWORDS", value: 11 },
  { label: "BACKLINKS", value: 232, badge: "GREAT" },
];

export default function OnPageScore() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0E032D]">
      {/* very light vignette + grid (keeps your palette) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_60%_-20%,rgba(107,65,255,0.35),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* reduced vertical padding */}
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10 py-6 md:py-8">
        {/* heading + sub (centered, same sizes as reference) */}
        <h2 className="text-center text-white font-bold text-2xl sm:text-3xl md:text-[32px]">
          ON-Page SEO Score
        </h2>
        {/* slightly tighter gap under heading */}
        <p className="mt-2 text-center text-white/80 max-w-3xl mx-auto text-sm sm:text-[17px] leading-relaxed">
          This section identifies your site’s most critical SEO issues and
          delivers clear recommendations to resolve them and strengthen search
          performance.
        </p>

        {/* tighter gap before cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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
    /* gradient border like the reference (g1) */
    <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]">
      {/* inner surface */}
      <div className="rounded-2xl bg-[#151039]/85 backdrop-blur-xl border border-white/10 px-5 py-5 min-h-[140px] flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_-18px_rgba(0,0,0,0.6)]">
        {/* soft inner glow (very subtle) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-40 blur-[36px]"
          style={{
            background:
              "radial-gradient(60% 80% at 20% 0%, #F64CFF2b 0%, transparent 60%), radial-gradient(60% 80% at 80% 100%, #FFC55324 0%, transparent 60%)",
          }}
        />

        {/* title row */}
        <div className="relative flex items-center justify-between">
          <p className="text-[12px] tracking-wide text-white/85">{label}</p>
          <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full text-[11px] leading-none bg-[#8A1431] text-white/90">
            ?
          </span>
        </div>

        {/* value + badge */}
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
