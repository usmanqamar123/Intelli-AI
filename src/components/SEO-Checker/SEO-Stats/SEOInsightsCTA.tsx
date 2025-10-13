import React from "react";

export default function SeoInsightsCTA() {
  return (
    <div className="w-full py-10 px-4 sm:px-8 lg:px-16 bg-[#0E032D]">
      {/* Outer gradient border that matches Capability Matrix Page */}
      <div className="max-w-5xl mx-auto relative rounded-3xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] shadow-[0_0_22px_rgba(246,76,255,0.12),0_0_40px_rgba(107,65,255,0.1)]">
        {/* Inner container */}
        <div className="bg-[#1C0F3B] rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-12">
          <h2 className="text-white text-2xl sm:text-2xl lg:text-2xl font-bold leading-tight text-center mb-8">
            Get SEO Insights, Fix Issues, And Grow With A Free Intelliwriter Account.
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            {/* Feature list */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Instantly see all keywords positions",
                "Analyze competitors strategies",
                "Track performance over time",
                "Unlock 55+ more powerful tools",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#FFC553] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-200 text-md">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
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
  );
}
