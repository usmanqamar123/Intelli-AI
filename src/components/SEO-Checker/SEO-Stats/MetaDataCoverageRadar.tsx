import React from 'react';

interface MetaData {
  title: string;
  title_length: number;
  description: string;
  description_length: number;
  keywords: string;
  url_slug: string;
  url_length: number;
  canonical_url: string;
}

export default function MetaDataCoverageRadar({ meta_data }: { meta_data: MetaData }) {

    const titleScore = Math.min((meta_data.title_length / 60) * 100, 100);
  const descriptionScore = Math.min((meta_data.description_length / 160) * 100, 100);
  const keywordScore = meta_data.keywords ? 100 : 30;
  const slugScore = Math.min((meta_data.url_length / 75) * 100, 100);
  const canonicalScore = meta_data.canonical_url ? 100 : 0;

  // Radar values (5 points)
  const radarValues = [
    titleScore,        // Readability
    descriptionScore,  // Headings
    keywordScore,      // Metadata
    slugScore,         // Depth
    canonicalScore,    // Media
  ];

  // Convert to coordinates (center 150,150 with radius 120)
  const radius = 120;
  const numPoints = radarValues.length;

  const angleStep = (2 * Math.PI) / numPoints;

  const points = radarValues
    .map((value, i) => {
      const angle = -Math.PI / 2 + i * angleStep;
      const r = (value / 100) * radius;
      const x = 150 + r * Math.cos(angle);
      const y = 150 + r * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");
    
  return (
 <div className="w-full py-8 px-4 sm:px-10 lg:px-18 bg-[#0E032D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-white text-3xl font-semibold">Meta Data Coverage Radar</h2>
          {/* <p className="text-left text-gray-400 text-sm max-w-3xl">
            This section analyzes your article’s key meta tags and evaluates their completeness for
            optimal SEO visibility.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 items-stretch">
          {/* 📋 Meta Data Section */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[rgba(107,65,255,1)] via-[rgba(246,76,255,1)] to-[rgba(255,197,83,1)]">
            <div className="bg-[#1A0D3E] rounded-2xl p-6 h-full">
              <h3 className="text-white text-xl font-bold mb-6">META DATA</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-[130px_1fr] gap-3">
                  <span className="text-gray-100 text-sm font-medium">TITLE</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{meta_data.title}</p>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-3">
                  <span className="text-gray-100 text-sm font-medium">META DESCRIPTION</span>
                  <p className="text-gray-300 text-xs leading-relaxed">{meta_data.description}</p>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-3">
                  <span className="text-gray-100 text-sm font-medium">CANONICAL URL</span>
                  <p className="text-gray-300 text-xs leading-relaxed">{meta_data.canonical_url}</p>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-3">
                  <span className="text-gray-100 text-sm font-medium">URL SLUG</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{meta_data.url_slug}</p>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-3">
                  <span className="text-gray-100 text-sm font-medium">KEYWORDS</span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {meta_data.keywords || "No keywords found"}
                  </p>
                </div>

                {/* Meta Length Info */}
                <div className="pt-2 space-y-1">
                  <p className="text-gray-400 text-sm">
                    Title Length:{" "}
                    <span
                      className={`${
                        meta_data.title_length >= 40 && meta_data.title_length <= 60
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {meta_data.title_length} chars
                    </span>{" "}
                    — {meta_data.title_length >= 40 && meta_data.title_length <= 60
                      ? "Good"
                      : "Needs adjustment"}
                  </p>

                  <p className="text-gray-400 text-xs">
                    Description Length:{" "}
                    <span
                      className={`${
                        meta_data.description_length >= 120 && meta_data.description_length <= 160
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {meta_data.description_length} chars
                    </span>{" "}
                    — {meta_data.description_length >= 120 && meta_data.description_length <= 160
                      ? "Optimal"
                      : "Too short or too long"}
                  </p>

                  <p className="text-gray-400 text-xs">
                    URL Length:{" "}
                    <span
                      className={`${
                        meta_data.url_length <= 75 ? "text-green-400" : "text-yellow-400"
                      }`}
                    >
                      {meta_data.url_length} chars
                    </span>{" "}
                    — {meta_data.url_length <= 75 ? "SEO-friendly" : "Too long"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 🧭 Coverage Radar Section */}
         <div className="p-[1px] rounded-2xl mx-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
            <div className="bg-[#1A0D3E] rounded-2xl p-6 h-full flex flex-col">
              <h3 className="text-white text-xl font-bold mb-3">COVERAGE RADAR</h3>
              <div className="border-b border-gray-500/40 mb-6"></div>

              <div className="flex-grow flex items-center justify-center relative">
                <svg viewBox="0 0 300 300" className="w-full h-[260px]">
                  {/* Grid Circles */}
                  {[30, 60, 90, 120].map((r, i) => (
                    <circle
                      key={i}
                      cx="150"
                      cy="150"
                      r={r}
                      fill="none"
                      stroke="#2D1B69"
                      strokeWidth="0.8"
                    />
                  ))}

                  {/* Axes */}
                  {Array.from({ length: numPoints }).map((_, i) => {
                    const angle = -Math.PI / 2 + i * angleStep;
                    const x = 150 + radius * Math.cos(angle);
                    const y = 150 + radius * Math.sin(angle);
                    return (
                      <line
                        key={i}
                        x1="150"
                        y1="150"
                        x2={x}
                        y2={y}
                        stroke="#2D1B69"
                        strokeWidth="0.8"
                      />
                    );
                  })}

                  {/* Radar Polygon */}
                  <polygon
                    points={points}
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

                {/* Labels */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-md">
                    <span className="absolute top-[6%] left-1/2 -translate-x-1/2 text-white text-xs">
                      Title
                    </span>
                    <span className="absolute top-1/2 right-[8%] -translate-y-1/2 text-white text-xs">
                      Description
                    </span>
                    <span className="absolute bottom-[15%] right-[20%] text-white text-xs">
                      Keywords
                    </span>
                    <span className="absolute bottom-[15%] left-[20%] text-white text-xs">
                      URL
                    </span>
                    <span className="absolute top-1/2 left-[10%] -translate-y-1/2 text-white text-xs">
                      Canonical
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