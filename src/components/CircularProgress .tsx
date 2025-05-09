import React from "react";

type CircularProgressProps = {
  progress: number;
};

const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const radius = 40;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#0f1021"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        stroke="#fff"
        dy=".3em"
        fontSize="16px"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default CircularProgress;
