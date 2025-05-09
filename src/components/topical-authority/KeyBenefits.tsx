import React from "react";
import FeatureGrid from "./FeatureGrid";

const KeyBenefits = () => {
  return (
    <div className="w-full h-full flex justify-center py-10">
      <div className="w-full max-w-7xl p-4 md:p-8 gap-3 flex flex-col items-center">
        {/* HEADING */}
        <div className="space-y-3 max-w-3xl text-white text-center">
          <h1
            className="text-2xl md:text-3xl xl:text-4xl  font-semibold"
            style={{ lineHeight: 1.2 }}
          >
            Key Benefits of Our{" "}
            <i
              className="not-italic bg-clip-text text-transparent "
              style={{
                backgroundImage:
                  "linear-gradient(91.87deg, #6B41FF 27%, #F64CFF 68%, #FFC553 100%)",
              }}
            >
              Topical Authority Builder
            </i>
          </h1>

          <p className="text-gray-100">
            Generate high-ranking content, analyze SEO performance, and publish
            directly to your WordPress site effortlessly.
          </p>
        </div>

        <FeatureGrid />
      </div>
    </div>
  );
};

export default KeyBenefits;
