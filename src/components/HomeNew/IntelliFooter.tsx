import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const IntelliFooter = () => {
  const footerLinks = [
    {
      category: "General Links",
      links: [
        { label: "Home", link: "/" },
        { label: "Blogs", link: "/blogs" },
        { label: "Contact", link: "/contact" },
        { label: "Terms & Conditions", link: "/termsandcondition" },
        { label: "FAQs", link: "" },
        { label: "Privacy Policy", link: "/privacypolicy" },
        { label: "Ada Compliance", link: "/adacompliance" },
        { label: "Become an Affiliate", link: "/become-an-affiliate" },
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
  ];

  return (
    <footer className="relative w-full bg-transparent border-t border-[#433C5A] !bg-[#0F062C] pt-8 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start justify-between px-6 md:px-10 xl:px-0">
        {/* Left Section */}
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-8">
          <Image
            src={"/Logo.svg"}
            width={200}
            height={70}
            alt="Intelliwriter Logo"
            className="w-40 md:w-60 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            Intelliwriter is an AI-powered tool crafted to streamline and
            elevate your writing experience. Whether you’re a content creator,
            marketer, student, or business owner, Intelliwriter transforms and
            enhances your content creation process with ease.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://linkedin.com/company/intelliwriter.io"
              target="_blank"
            >
              <span className="group flex items-center justify-center w-10 h-10 bg-[#1B1337] rounded-full border border-[#6D28D9] hover:bg-[#6D28D9] transition-all duration-300">
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
              <span className="group flex items-center justify-center w-10 h-10 bg-[#1B1337] rounded-full border border-[#6D28D9] hover:bg-[#6D28D9] transition-all duration-300">
                <FaFacebookF
                  size={20}
                  className="text-gray-300 group-hover:text-white"
                />
              </span>
            </Link>
            <Link href="https://instagram.com/intelliwriter_" target="_blank">
              <span className="group flex items-center justify-center w-10 h-10 bg-[#1B1337] rounded-full border border-[#6D28D9] hover:bg-[#6D28D9] transition-all duration-300">
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

        {/* Right Section - Pushed to Rightmost Side */}
        <div className="w-full lg:w-[60%] flex justify-start lg:justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-lg">
            {footerLinks.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <h4 className="text-white text-xl font-semibold tracking-wide border-b w-fit border-[#6D28D9] pb-2">
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#6D28D9]/10 to-transparent pointer-events-none" />
      <div className="w-full text-center text-gray-400 text-sm mt-10 py-6 border-t border-[#433C5A]">
        © {new Date().getFullYear()} Intelliwriter. All rights reserved.
      </div>
    </footer>
  );
};

export default IntelliFooter;
