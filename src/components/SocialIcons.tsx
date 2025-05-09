import React from "react";
import { SocialIcon } from "react-social-icons";

interface SocialIconsProps {
  socialLinks: string[];
  iconColor?: string;
  bgColor?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  socialLinks,
}) => {
  return (
    <ul className="flex gap-3 p-2 w-[200px] justify-between">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <div className="w-10 h-10">
            <SocialIcon
              url={link}
              className="!w-full !h-full rounded-md cursor-pointer opacity-60 hover:opacity-100 border border-slate-700"
              target="_blank"
              bgColor="black"
              style={{width: '100% !important', height: '100% !important'}}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
