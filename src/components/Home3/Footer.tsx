import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      category: "Quick Links",
      links: [
        { label: "Home", link: "/" },
        { label: "Blogs", link: "/blogs" },
        { label: "Contact", link: "/contact" },
        { label: "Become an Affiliate", link: "/become-an-affiliate" },
        { label: "FAQs", link: "" },
      ],
    },
    {
      category: "Features",
      links: [
        { label: "AI Humanizer", link: "/ai-humanizer" },
        { label: "Image Generator", link: "/ai-image-generator" },
        { label: "Voice Generator", link: "/ai-voice-generator" },
        {
          label: "Speech to Text Generator",
          link: "/speech-content-generator",
        },
        { label: "Chatting", link: "/ai-chat" },
        { label: "AI SEO Article Writer", link: "/new-seo-aricle" },
        { label: "SEO Keyword Research", link: "/seo-keyword-research" },
      ],
    },
    {
      category: "Legal",
      links: [
        { label: "Terms & Conditions", link: "/termsandcondition" },
        { label: "Privacy Policy", link: "/privacypolicy" },
        { label: "Ada Compliance", link: "/adacompliance" },
      ],
    },
  ];

  return (
    <footer className="overflow-hidden w-full !text-white pt-10 z-10 bg-black">
      {/* GRADIENT */}

      <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 !text-white items-start justify-between px-6 md:px-10 xl:px-0">
        {/* Left Section */}
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-8">
          <Image
            src={"/Logo.svg"}
            width={200}
            height={70}
            alt="Intelliwriter Logo"
            className="w-40 md:w-60 transition-transform duration-300 hover:scale-105"
          />
          <p className="!text-white text-sm md:text-base leading-relaxed">
            Intelliwriter is an AI-powered tool crafted to streamline and
            elevate your writing experience. Whether you’re a content creator,
            marketer, student, or business owner, Intelliwriter transforms and
            enhances your content creation process with ease.
          </p>
        </div>

        {/* Right Section - Pushed to Rightmost Side */}
        <div className="w-full lg:w-[60%] flex justify-start lg:justify-end !text-white">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 max-w-lg">
            {footerLinks.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <h4 className="text-white text-xl font-semibold tracking-wide w-fit pb-2">
                  {item.category}
                </h4>
                <ul className="flex flex-col gap-2">
                  {item.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.link}>
                        <span className="text-gray-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute container inset-0 pointer-events-none overflow-hidden -z-10" />
      <div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[120px] -z-10" />
      <div className="absolute -top-10 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#CE17F8] blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px] -z-10" />
      <div className="absolute -top-10 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[100px] -z-10" />
      <div className="absolute -top-10 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[100px] -z-10" />

      <div className="flex flex-col md:flex-row gap-3 justify-between items-center max-w-6xl mx-auto">
        <div className="border-t-2 border-white"></div>
        <div className="w-full text-white text-sm mt-10 py-6">
          © {new Date().getFullYear()} Intelliwriter. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link
            href="https://linkedin.com/company/intelliwriter.io"
            target="_blank"
          >
            <span className="group flex items-center justify-center w-10 h-10 bg-[#1B1337] rounded-full gradient-border-wrapper hover:bg-[#6D28D9] transition-all duration-300">
              <FaLinkedinIn
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </span>
          </Link>
          <Link
            href="https://www.facebook.com/Intelliwriter.io/"
            target="_blank"
          >
            <span className="group flex items-center justify-center w-10 h-10 bg-[#1B1337] rounded-full gradient-border-wrapper hover:bg-[#6D28D9] transition-all duration-300">
              <FaFacebookF
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </span>
          </Link>
          <Link href="https://instagram.com/intelliwriter_" target="_blank">
            <span className="group flex items-center justify-center w-10 h-10 bg-[#1B1337] rounded-full gradient-border-wrapper hover:bg-[#6D28D9] transition-all duration-300">
              <FaInstagram
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </span>
          </Link>
          {/* Uncomment if Twitter link is added */}
          {/* <Link href="">
          <span className="group flex items-center justify-center w-10 h-10 bg-[#1B1337] rounded-full border border-[#6D28D9] hover:bg-[#6D28D9] transition-all duration-300">
            <FaXTwitter size={20} className="text-gray-300 group-hover:text-white" />
          </span>
        </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
