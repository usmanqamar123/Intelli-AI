import React from 'react';

export default function MetaDataCoverageRadar() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#0E032D]">
      <div className="max-w-5xl mx-auto">
        <div className="text-left mb-12">
  <h2 className="text-white text-3xl sm:text-3xl lg:text-3xl font-bold mb-4">
    Meta Data Coverage Radar
  </h2>
  <p className="text-left text-gray-600 text-sm max-w-3xl">
    This section identifies your site's most critical SEO issues and delivers clear recommendations to resolve them and strengthen search performance.
  </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-3 items-stretch">
  {/* Meta Data Section */}
  <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[rgba(107,65,255,1)] via-[rgba(246,76,255,1)] to-[rgba(255,197,83,1)]">
    <div className="bg-[#1A0D3E] rounded-2xl p-6 h-full">
      <h3 className="text-white text-xl font-bold mb-6">META DATA</h3>

      <div className="space-y-4">
        {[
          { label: "TITLE", value: "Best Running Shoes for Flat Feet (2025 Guide)" },
          {
            label: "META DESCRIPTION",
            value: "A Practical Guide to Choosing supporting running Shoes for Flat Feet.",
          },
          {
            label: "CANONICAL",
            value: "https://example.com/best-running-shoes-for-flat-feet",
          },
          {
            label: "OPEN GRAPH TITLE",
            value: "A Practical Guide to Choosing supporting running Shoes for Flat Feet.",
          },
          {
            label: "TWITTER CARD",
            value: "A Practical Guide to Choosing supporting running Shoes for Flat Feet.",
          },
        ].map((item, index) => (
          <div key={index} className="grid grid-cols-[130px_1fr] gap-3">
            <span className="text-gray-100 text-xs sm:text-sm font-medium">
              {item.label}
            </span>
            <p className="text-gray-300 text-xs sm:text-xs leading-relaxed">
              {item.value}
            </p>
          </div>
        ))}

        <div className="pt-2">
          <p className="text-gray-400 text-xs sm:text-sm">
            Words Detected ....... <span className="text-white">66</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Coverage Radar Section */}
<div className="p-[1px] rounded-2xl bg-gradient-to-r from-[rgba(107,65,255,1)] via-[rgba(246,76,255,1)] to-[rgba(255,197,83,1)]">
  <div className="bg-[#1A0D3E] rounded-2xl p-6 h-full flex flex-col">
    <h3 className="text-white text-xl font-bold mb-3">COVERAGE RADAR</h3>
    <div className="border-b border-gray-500/40 mb-6"></div>

    <div className="flex-grow flex items-center justify-center relative">
      <svg viewBox="0 0 300 300" className="w-full h-[220px] sm:h-[250px] lg:h-[260px]">
        <circle cx="150" cy="150" r="120" fill="none" stroke="#2D1B69" strokeWidth="0.8" />
        <circle cx="150" cy="150" r="90" fill="none" stroke="#2D1B69" strokeWidth="0.8" />
        <circle cx="150" cy="150" r="60" fill="none" stroke="#2D1B69" strokeWidth="0.8" />
        <circle cx="150" cy="150" r="30" fill="none" stroke="#2D1B69" strokeWidth="0.8" />
        <line x1="150" y1="30" x2="150" y2="270" stroke="#2D1B69" strokeWidth="0.8" />
        <line x1="30" y1="150" x2="270" y2="150" stroke="#2D1B69" strokeWidth="0.8" />
        <line x1="60" y1="60" x2="240" y2="240" stroke="#2D1B69" strokeWidth="0.8" />
        <line x1="240" y1="60" x2="60" y2="240" stroke="#2D1B69" strokeWidth="0.8" />
        <polygon
          points="150,50 220,100 230,150 200,210 100,210 70,150 80,100"
          fill="url(#radarGradient)"
          fillOpacity="0.6"
          stroke="#8B5CF6"
          strokeWidth="1.5"
        />

        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-md">
          <span className="absolute top-[7%] left-1/2 -translate-x-1/2 text-white text-xs">
            Readability
          </span>
          <span className="absolute top-1/2 right-[12%] -translate-y-1/2 text-white text-xs text-center">
            Headings
          </span>
          <span className="absolute bottom-[18%] right-[20%] text-white text-xs">
            Metadata
          </span>
          <span className="absolute bottom-[18%] left-[25%] text-white text-xs">
            Depth
          </span>
          <span className="absolute top-1/2 left-[15%] -translate-y-1/2 text-white text-xs">
            Media
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

      </div>
    </div>
  );
}