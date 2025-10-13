// components/seostats/sections/SeoIssuesDiscovered.tsx
"use client";

export default function SeoIssuesDiscovered() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0E032D] text-white">
      {/* very light vignette + grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_60%_-20%,rgba(107,65,255,0.35),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10 pt-10 pb-6 md:pt-12 md:pb-8">
        {/* Heading + sub */}
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-[32px]">
          SEO Issues Discovered
        </h2>
        <p className="mt-3 text-center text-white/80 max-w-3xl mx-auto text-sm sm:text-[17px] leading-relaxed">
          This section identifies your site’s most critical SEO issues and
          delivers clear recommendations to resolve them and strengthen search
          performance.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] gap-5 md:gap-6">
          {/* Left: Pages Crawled */}
          <GradientCard>
            <div className="relative rounded-[18px] bg-[#151039]/85 backdrop-blur-xl border border-white/10 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="tracking-wide">PAGES CRAWLED</span>
                <InfoDot />
              </div>

              <div className="mt-3 text-3xl font-semibold tabular-nums">63</div>
              <p className="mt-1 text-[12px] text-white/65">
                We’ve crawled 63 pages and found 0 blocked pages.
              </p>

              <hr className="my-4 border-white/10" />

              <div className="text-xs text-white/80">PAGE STATUS</div>
              <div className="mt-3 space-y-2">
                <StatusRow color="#22C55E" label="Successful" value={43} />
                <StatusRow color="#F59E0B" label="Redirected" value={18} />
                <StatusRow color="#EF4444" label="Broken" value={2} />
                <StatusRow color="#991B1B" label="Blocked" value={0} />
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <button className="group inline-flex items-center gap-2 text-[13px] text-white/85 hover:text-white">
                  See All Pages
                  <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </GradientCard>

          {/* Right: Issues & Top Items */}
          <GradientCard>
            <div className="relative rounded-[18px] bg-[#151039]/85 backdrop-blur-xl border border-white/10 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="tracking-wide">SEO ISSUES DISCOVERED</span>
                <InfoDot />
              </div>

              <div className="mt-3 text-3xl font-semibold tabular-nums">30</div>

              <hr className="my-4 border-white/10" />

              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="tracking-wide">TOP SEO ISSUES</span>
                <InfoDot />
              </div>

              <div className="mt-3 divide-y divide-white/10">
                <IssueRow
                  left={
                    <>
                      <span className="text-[#FFC553] font-semibold">12 pages</span>{" "}
                      have a low word count
                    </>
                  }
                />
                <IssueRow
                  left={
                    <>
                      <span className="text-[#FFC553] font-semibold">1 pages</span>{" "}
                      with no &lt;title&gt; tag
                    </>
                  }
                />
                <IssueRow
                  left={
                    <>
                      <span className="text-[#FFC553] font-semibold">11 pages</span>{" "}
                      without a H1 heading
                    </>
                  }
                />
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <button className="group inline-flex items-center gap-2 text-[13px] text-white/85 hover:text-white">
                  See All SEO Issues
                  <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </GradientCard>
        </div>

        {/* CTA Banner — heading centered, bullets left, button & credit line LEFT-aligned */}
        <div className="mt-8 md:mt-10">
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]">
            <div className="rounded-2xl bg-[#151039]/85 backdrop-blur-xl border border-white/10 px-6 md:px-10 py-8 md:py-10 shadow-[0_0_60px_-15px_rgba(107,65,255,0.35)] min-h-[220px]">
              {/* centered headline with side breathing room */}
              <h2 className="text-white text-2xl sm:text-2xl lg:text-2xl font-bold leading-tight text-center mb-8">
            Get SEO Insights, Fix Issues, And Grow With A Free Intelliwriter Account.
          </h2>

              {/* LEFT points, RIGHT button + credit line (both left-aligned in that column) */}
              <div className="mt-7 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8 md:gap-12">
                {/* LEFT: bullets (bigger text) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 px-0 md:px-2">
                  <BenefitRow>Instantly see all keywords positions</BenefitRow>
                  <BenefitRow>Analyze competitors strategies</BenefitRow>
                  <BenefitRow>Track performance over time</BenefitRow>
                  <BenefitRow>Unlock 55+ more powerful tools</BenefitRow>
                </div>

                {/* RIGHT: button + credit line, left-aligned */}
                 <div className="flex-shrink-0 text-center">
              <button className="relative px-6 py-3 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]" />
                <span className="relative z-10">Create Free Account</span>
              </button>
              <p className="text-gray-400 text-sm mt-3">No credit card needed</p>
            </div>
          
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}

/* ---------- UI bits ---------- */

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
  value: number;
}) {
  return (
    <div className="flex items-center justify-between text-[13px]">
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
      <button className="group inline-flex items-center gap-1 text-[12px] text-white/70 hover:text-white">
        View Details
        <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </button>
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
