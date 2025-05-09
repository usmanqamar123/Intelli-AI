import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  variant?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick,
  variant = "gradient",
  icon,
}) => {
  const buttonStyles =
    variant === "gradient"
      ? "bg-gradient-to-r from-[#298CFD] via-[#2B38F9] to-[#7E3BFF]"
      : "bg-[#7E3BFF]";

  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-white ${buttonStyles} ${className} flex items-center justify-center`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
