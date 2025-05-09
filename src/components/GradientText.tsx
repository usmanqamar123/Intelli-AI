// components/GradientText.tsx
import React from "react";

interface GradientTextProps {
  whiteText: string;
  gradientText: string;
  className?: string;
  breakLine?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  whiteText,
  gradientText,
  className = "",
  breakLine,
}) => {
  return (
    <span className={`text-white ${className}`}>
      {whiteText} {breakLine && <br />}
      <span className="bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8] bg-clip-text text-transparent">
        {gradientText}
      </span>
    </span>
  );
};

export default GradientText;
