// components/SEO-Checker/SEO-Stats/MetaCoverageRadar.tsx
"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

export default function MetaCoverageRadar() {
  const axes = ["Readability", "Headings", "Metadata", "Depth", "Media"];

  const values: Record<string, number> = {
    Readability: 62,
    Headings: 95,
    Metadata: 48,
    Depth: 30,
    Media: 20,
  };

  const data = axes.map((key) => ({
    key,
    value: values[key],
    frame: 100,
  }));

  return (
    <section className="w-full relative overflow-hidden bg-[#0E032D] text-white">
      {/* Full-bleed solid bg */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ backgroundColor: "#120A2F" }} />
      </div>

      {/* Same container as your other sections (max-w-6xl + px) */}
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10 pt-10 pb-6 md:pt-12 md:pb-8">
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-[32px]">
          Meta Data Coverage Radar
        </h2>
        <p className="mt-3 text-center text-white/80 max-w-3xl mx-auto text-sm sm:text-[17px] leading-relaxed">
          This section identifies your site’s most critical SEO issues and
          delivers clear recommendations to resolve them and strengthen search
          performance.
        </p>

        {/* Desktop: meta fixed width; radar fills rest */}
        <div className="mt-8 grid items-stretch grid-cols-1 gap-5 md:gap-6 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,520px)_minmax(0,1fr)]">
          {/* LEFT: Meta data table */}
          <GradientCard className="h-full">
            <div className="relative rounded-[18px] bg-[#151039]/85 backdrop-blur-xl border border-white/10 p-5 sm:p-6 h-full flex flex-col">
              <div className="text-white font-bold text-[20px] md:text-[18px] mb-4">
                META DATA
              </div>

              <div className="divide-y divide-white/10">
                <MetaRow label="TITLE" value={`Best Running Shoes for Flat Feet (2025 Guide)`} />
                <MetaRow
                  label="META DESCRIPTION"
                  value={`A Practical Guide to Choosing supporting running Shoes for Flat Feet with expert tips, FAQ’s and top Picks.`}
                />
                <MetaRow
                  label="CANONICAL"
                  value={`A Practical Guide to Choosing supporting running Shoes for Flat Feet with expert tips, FAQ’s and top Picks.`}
                />
                <MetaRow
                  label="OPEN GRAPH TITLE"
                  value={`A Practical Guide to Choosing supporting running Shoes for Flat Feet with expert tips, FAQ’s and top Picks.`}
                />
                <MetaRow
                  label="TWITTER CARD"
                  value={`A Practical Guide to Choosing supporting running Shoes for Flat Feet with expert tips, FAQ’s and top Picks.`}
                />
              </div>

              <div className="mt-5 text-white/70 text-[14px] md:text-[15px]">
                Words Detected …… <span className="text-white">66</span>
              </div>
            </div>
          </GradientCard>

          {/* RIGHT: Coverage radar (more colorful) */}
          <GradientCard className="h-full">
            <div className="relative rounded-[18px] bg-[#151039]/85 backdrop-blur-xl border border-white/10 p-5 sm:px-6 h-full flex flex-col">
              <div className="text-white font-bold text-[20px] md:text-[18px]">
                COVERAGE RADAR
              </div>
              <hr className="mt-3 mb-6 border-white/10" />

              <div
                className="flex-1 min-h-[360px] sm:min-h-[420px] lg:min-h-[520px] xl:min-h-[560px] outline-none select-none"
                tabIndex={-1}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={data} margin={{ top: 6, right: 6, bottom: 6, left: 6 }}>
                    <defs>
                      {/* VIBRANT polygon fill */}
                      <linearGradient id="radarFillVibrant" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.85} />
                        <stop offset="45%" stopColor="#D946EF" stopOpacity={0.78} />
                        <stop offset="75%" stopColor="#F59E0B" stopOpacity={0.70} />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity={0.60} />
                      </linearGradient>

                      {/* Gradient stroke for the outline */}
                      <linearGradient id="radarStroke" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#E9D5FF" />
                        <stop offset="50%" stopColor="#FCA5A5" />
                        <stop offset="100%" stopColor="#93C5FD" />
                      </linearGradient>

                      {/* Soft outer glow for the outline */}
                      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Brighter wireframe */}
                    <PolarGrid
                      gridType="polygon"
                      radialLines
                      stroke="#FFFFFF"
                      strokeOpacity={0.35}
                    />

                    {/* Labels */}
                    <PolarAngleAxis
                      dataKey="key"
                      tick={{ fill: "#FFFFFF", fontSize: 14, fontWeight: 700 }}
                      tickLine={false}
                    />

                    {/* Clean white outer frame */}
                    <Radar
                      dataKey="frame"
                      stroke="#FFFFFF"
                      strokeOpacity={0.95}
                      strokeWidth={1.6}
                      fillOpacity={0}
                      isAnimationActive={false}
                      dot={false}
                      activeDot={false}
                    />

                    {/* Glow gradient outline (on top of white frame) */}
                    <Radar
                      dataKey="frame"
                      stroke="url(#radarStroke)"
                      strokeWidth={2.2}
                      fillOpacity={0}
                      isAnimationActive={false}
                      dot={false}
                      activeDot={false}
                      className="pointer-events-none"
                      /* soft colored glow */
                      filter="url(#softGlow)"
                    />

                    {/* Vibrant coverage polygon */}
                    <Radar
                      dataKey="value"
                      stroke="url(#radarStroke)"
                      strokeOpacity={0.95}
                      strokeWidth={1.8}
                      fill="url(#radarFillVibrant)"
                      fillOpacity={0.82}
                      animationDuration={700}
                      dot={false}
                      activeDot={false}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>

      {/* Kill focus outlines from Recharts + give tiny text glow for labels */}
      <style jsx global>{`
        .recharts-wrapper:focus,
        .recharts-responsive-container:focus,
        .recharts-surface:focus,
        .recharts-wrapper *:focus {
          outline: none !important;
        }
        /* Soft readability for axis labels */
        .recharts-polar-angle-axis text {
          paint-order: stroke;
          stroke: rgba(17, 2, 47, 0.45);
          stroke-width: 2px;
        }
      `}</style>
    </section>
  );
}

/* ---------- bits ---------- */

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[160px_minmax(0,1fr)] gap-2 sm:gap-4 py-3">
      <div className="text-white/80 text-[14px] md:text-[15px] font-medium tracking-wide uppercase">
        {label}
      </div>
      <div className="text-white/90 text-[14px] leading-relaxed">{value}</div>
    </div>
  );
}

function GradientCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative rounded-[20px] p-[2px]",
        "bg-gradient-to-r from-[#6B41FF66] via-[#F64CFF66] to-[#FFC55366]",
        className,
      ].join(" ")}
    >
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
