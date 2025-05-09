import React from "react";
import FeatureGrid from "./FeatureGrid";

const AIArticle = () => {
  return (
    <div className="w-full h-full flex justify-center py-10">
      <div className="w-full max-w-7xl p-4 md:p-8 flex flex-col items-center">
        {/* HEADING */}
        <div className="space-y-3 max-w-3xl text-white text-center">
          <h1
            className="text-2xl md:text-3xl xl:text-4xl  font-semibold"
            style={{ lineHeight: 1.2 }}
          >
            Top Reasons{" "}
            <i
              className="not-italic bg-clip-text text-transparent "
              style={{
                backgroundImage:
                  "linear-gradient(91.87deg, #6B41FF 27%, #F64CFF 68%, #FFC553 100%)",
              }}
            >
              Intelliwriter&apos;s Article Writer
            </i>{" "}
            Beats the Rest
          </h1>

          <p className="text-gray-100">
            Discover why Intelliwriter&apos;s Article Writer stands out from the
            crowd from lightning-fast AI-generated content and smart SEO scoring
            to seamless WordPress publishing and built-in image generation. It’s
            everything you need to create, optimize, and publish top-ranking
            content in one powerful platform.
          </p>
        </div>

        <FeatureGrid />
      </div>
    </div>
  );
};

export default AIArticle;
