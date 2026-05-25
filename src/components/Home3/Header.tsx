/* eslint-disable no-console */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu, GiRank3 } from "react-icons/gi";
import { TbSettingsAutomation } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { MegaMenu, NAV_LINKS, dropdownMenu } from "../../constants";
import Swal from "sweetalert2";

import {
  FaPen,
  FaSyncAlt,
  FaChartLine,
  FaImage,
  FaRobot,
  FaFreeCodeCamp,
  FaRegUserCircle,
  FaKey,
  FaEye,
  FaMagic,
  FaLink,
  FaChartBar,
  FaFileAlt,
  FaSearch,
  FaTags,
  FaStar,
  FaArrowRight,
  FaBook,
  FaCogs,
  FaTachometerAlt,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import Button from "../Button";
import { BiLogOut } from "react-icons/bi";
import { useSearchParams } from "next/navigation";
import createGuest from "cross-domain-storage/guest";
import { RiSeoLine } from "react-icons/ri";
import { AiFillCaretRight } from "react-icons/ai";

interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement> | null;
  pricingRef: React.RefObject<HTMLDivElement> | null;
}

type FeatureProps = {
  title: string;
  desc: string;
  icon: JSX.Element;
};

const Header: React.FC<HeaderProps> = ({ aboutRef, pricingRef }) => {
  const [storage, setStorage] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [sessionTokens, setSessionTokens] = useState<string | null>(null);
  const [sessionLetter, setSessionLetter] = useState<string | null>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const { nameLetter, setNameLetter } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tokens, setTokens] = useState<string | null>(null);
  const NAV_TOP_OFFSET = 80;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setShowDropdown(true);
  };

  const handleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 150);
  };

  useEffect(() => {
    const extractedToken = searchParams.get("t");
    const extractedNameLetter = searchParams.get("n") || "";

    if (extractedToken) {
      const decodedToken = decodeURIComponent(extractedToken);
      const decodedNameLetter = decodeURIComponent(extractedNameLetter);

      setTokens(decodedToken);
      console.log("token decoed", decodedToken);
      localStorage.setItem("intellitokens", decodedToken);

      setSessionLetter(decodedNameLetter);
      console.log("session decoded", decodedNameLetter);
      localStorage.setItem("intellinameLetter", decodedNameLetter);

      const cleanedUrl = window.location.pathname;
      router.replace(cleanedUrl);
    }
  }, [router, searchParams]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("intellitokens");
      const storedLetter = localStorage.getItem("intellinameLetter");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseEnter = (id: string) => {
    setActiveMenu(id);
    setShowDropdown(true);
  };

 const handleMouseLeave = () => {
  closeTimeoutRef.current = setTimeout(() => {
    setShowDropdown(false);
    setActiveMenu(null);
  }, 100); 
};

  const navlinks = [
    { id: "1", label: "AI Tools", href: "" },
    { id: "2", label: "Wordpress SEO Agents", href: "" },
    { id: "3", label: "AI Humanizer", href: "/ai-humanizer" },
    { id: "4", label: "Pricing", href: "/intelliwriter-pricing-plans" },
    { id: "5", label: "Article SEO Checker", href: "/article-seo-checker" },
    // { id: "6", label: "About Us", href: "/about-us" },
  ];

  const Feature = ({ title, desc, icon }: FeatureProps) => (
    <div className="flex items-start gap-3">
      <div className="text-lg mt-0.5">{icon}</div>

      <div>
        <p className="text-sm md:text-base !text-white font-semibold">
          {title}
        </p>
        <p className="text-xs md:text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );

  const writingTools = [
    {
      icon: <FaPen className="text-[#5595BF]" />,
      title: "AI Article Writer",
      description: "Create SEO-friendly articles with AI-driven generation.",
      link: `${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`,
      route: "/seo-ai-blog-writer",
      color: "bg-[#041F5E]",
    },
    {
      icon: <GiRank3 className="text-[#A05EC5]" />,
      title: "Outrank Article",
      description: "Create SEO-optimized articles to outrank competitors.",
      link: `${process.env.NEXT_PUBLIC_APP}user/outrank`,
      route: "/ai-outrank-article",
      color: "bg-[#2D0F5A] text-[#2D0F5A]",
    },
    {
      icon: <TbSettingsAutomation className="text-[#AAEDD4]" />,
      title: "Blog Automation",
      description: "Automate blog creation and keep content fresh.",
      link: `${process.env.NEXT_PUBLIC_APP}user/wp-automation`,
      route: "/ai-blog-automation",
      color: "bg-[#02472B] text-[#02472B]",
    },
    {
      icon: <RiSeoLine className="text-[#F7B35A]" />,
      title: "AI SEO Checker",
      description: "Check readability, metadata, keywords, and rankings.",
      link: `/article-seo-checker`,
      route: "/article-seo-checker",
      color: "bg-[#854606] text-[#854606]",
    },
    {
      icon: <FaImage className="text-[#B956AC]" />,
      title: "Image Generator",
      description: "Generate high-resolution images with AI.",
      link: `${process.env.NEXT_PUBLIC_APP}user/image-generator`,
      route: "/ai-image-generator",
      color: "bg-[#460C46] text-[#460C46]",
    },
    {
      icon: <FaRobot className="text-[#1390B2]" />,
      title: "Scholar Chat",
      description: "AI-powered conversations with multiple models.",
      link: `${process.env.NEXT_PUBLIC_APP}user/chat`,
      route: "/scholar-chat",
      color: "bg-[#012F5F] text-[#012F5F]",
    },
    {
      icon: <FaSyncAlt className="text-pink-500" />,
      title: "Topical Authority",
      description: "Build niche authority with structured content.",
      link: `${process.env.NEXT_PUBLIC_APP}user/topical-map`,
      route: "/ai-topical-authority-builder",
      color: "bg-pink-500/20 text-pink-400",
    },
    {
      icon: <FaFreeCodeCamp className="text-purple-600" />,
      title: "Free Tools",
      description: "Explore complimentary SEO tools.",
      link: `${process.env.NEXT_PUBLIC_APP}free-tools/free-seo-tools`,
      route: "/free-tools/free-seo-tools",
      color: "bg-purple-500/20 text-purple-400",
    },
  ];

  const seoTools = [
    {
      icon: <FaPen className="text-[#5595BF]" />,
      title: "Meta Data Agent ",
      description:
        "Automates meta title and description creation for better SEO rankings",
      link: `${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`,
      route: "/seo-ai-blog-writer",
      color: "bg-[#041F5E]",
    },
    {
      icon: <GiRank3 className="text-[#A05EC5]" />,
      title: "Indexation Agent",
      description:
        "Resolves indexing issues and ensures proper search engine crawling",
      link: `${process.env.NEXT_PUBLIC_APP}user/outrank`,
      route: "/ai-outrank-article",
      color: "bg-[#2D0F5A] text-[#2D0F5A]",
    },
    {
      icon: <TbSettingsAutomation className="text-[#AAEDD4]" />,
      title: "Content Optimization Agent",
      description: "Optimize content for better search engine performance.",
      link: `${process.env.NEXT_PUBLIC_APP}user/wp-automation`,
      route: "/ai-blog-automation",
      color: "bg-[#02472B] text-[#02472B]",
    },
    {
      icon: <RiSeoLine className="text-[#F7B35A]" />,
      title: "Robots.txt Agent",
      description:
        "Manages robots.txt file to control search engine crawling behavior.",
      link: `/article-seo-checker`,
      route: "/article-seo-checker",
      color: "bg-[#854606] text-[#854606]",
    },
    {
      icon: <FaImage className="text-[#B956AC]" />,
      title: "Performance Tracker Agent",
      description:
        "Tracks SEO performance metrics and provides actionable optimization insights",
      link: `${process.env.NEXT_PUBLIC_APP}user/image-generator`,
      route: "/ai-image-generator",
      color: "bg-[#460C46] text-[#460C46]",
    },
    // {
    //   icon: <FaRobot className="text-[#1390B2]" />,
    //   title: "Scholar Chat",
    //   description: "AI-powered conversations with multiple models.",
    //   link: `${process.env.NEXT_PUBLIC_APP}user/chat`,
    //   route: "/scholar-chat",
    //       color: "bg-[#012F5F] text-[#012F5F]",
    // },
    // {
    //   icon: <FaSyncAlt className="text-pink-500" />,
    //   title: "Topical Authority",
    //   description: "Build niche authority with structured content.",
    //   link: `${process.env.NEXT_PUBLIC_APP}user/topical-map`,
    //   route: "/ai-topical-authority-builder",
    //       color: "bg-pink-500/20 text-pink-400",
    // },
  ];

  // 🟢 REPLACEMENT LOGOUT FUNCTION
  const logout = () => {
    // clear the same keys you set on login
    localStorage.removeItem("intellitokens");
    localStorage.removeItem("intellinameLetter");
    localStorage.removeItem("intelliuserId");

    if (storage) {
      // also clear cross-domain storage
      storage.remove("intellitokens", () => {
        storage.remove("intellinameLetter", () => {
          // force state reset
          setTokens(null);
          setSessionTokens(null);
          setSessionLetter("");
          setNameLetter("");
          setIsLoggedIn(false);

          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Logout Successfully!",
          });

          router.push("/");
        });
      });
    } else {
      // fallback for when storage isn't ready
      setTokens(null);
      setSessionTokens(null);
      setSessionLetter("");
      setNameLetter("");
      setIsLoggedIn(false);
      router.push("/");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 20;

      if (
        aboutRef?.current &&
        scrollPosition >= aboutRef.current.offsetTop &&
        (pricingRef?.current?.offsetTop ?? Number.MAX_SAFE_INTEGER) >
          scrollPosition
      ) {
        setActiveSection("about");
      } else if (
        pricingRef?.current &&
        scrollPosition >= pricingRef.current.offsetTop
      ) {
        setActiveSection("pricing");
      } else {
        setActiveSection(null);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef, pricingRef]);

  // only create guest on client
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const guest = createGuest("https://app.intelliwriter.io/");
      setStorage(guest);

      guest.get("intellinameLetter", (error: any, value: any) => {
        console.log("name:", value, error);
        if (!error && value) {
          console.log("set from session", value);
          setNameLetter(value.trim());
          setSessionLetter(value.trim());
        }
      });
    }
  }, [setNameLetter]);

  return (
    <>
      {/* NAVBAR FOR LARGE SCREENS */}
      <div
        className={`fixed z-50 hidden lg:block top-0 w-full h-auto transition-all duration-300 ${
          isScrolled
            ? "bg-[#0F062C] border-b border-[#888] shadow-xl"
            : "bg-transparent border-transparent"
        }`}
      >
        {" "}
        <div className="flex w-full justify-center items-center">
          <nav className="w-full lg:max-w-7xl xl:container mx-auto flex justify-between items-center p-4 text-white">
            <Link href="/">
              <Image
                src={"/Logo.svg"}
                width={250}
                height={130}
                alt="Intelliwriter Logo"
                className="xl:w-[160px]"
              />
            </Link>
            <div className="flex lg:gap-4 xl:gap-7 font-medium ml-3"
            onMouseLeave={handleMouseLeave}
            >
              {navlinks.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="relative group"
 onMouseEnter={() => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setActiveMenu(item.id);
        setShowDropdown(true);
      }}
                >
                  {item.id === "1" || item.id === "2" ? (
                    // Dropdown Trigger
                    <div className="relative">
                      <Link
                        href={item.href}
                        className="flex items-center hover:text-[#F64CFF] duration-500 font-medium text-sm xl:text-base gap-1"
                        aria-expanded={showDropdown}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <MdOutlineKeyboardArrowDown className="transition-transform duration-300 transform group-hover:rotate-180" />
                      </Link>
                    </div>
                  ) : (
                    // Regular Navigation Link
                    <Link
                      className={`flex items-center hover:text-[#F64CFF] duration-500 font-medium text-sm xl:text-base ${
                        (activeSection === item.label.toLowerCase() &&
                          activeSection !== null) ||
                        (pathname === item.href && activeSection === null)
                          ? isScrolled
                            ? "border-b-2 border-white"
                            : "border-b-2 border-[#af4db7]"
                          : ""
                      } ${
                        isScrolled
                          ? "hover:border-white"
                          : "hover:border-[#af4db7]"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Content AI Tools */}
                  {showDropdown && activeMenu === "1" && (
                    <div
                      className="fixed left-0 right-0 z-[100]"
                       style={{ top: NAV_TOP_OFFSET - 16 }}
 onMouseEnter={() => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setShowDropdown(true);
      }}
                            onMouseLeave={handleMouseLeave}
                    >
                      <div className="mx-auto w-full px-6 lg:px-10 xl:px-16">
                        <div className="mx-auto max-w-[1240px] rounded-2xl bg-[#01061A] text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
                          <div className="grid lg:grid-cols-[260px_minmax(0,1fr)_260px]">
                            {/* ================= LEFT RAIL ================= */}
                            <aside className="border-r border-white/10 p-5">
                              <div className="w-fit flex items-center border border-white/10 rounded-md gap-2 mb-4">
                                <FaStar className="text-yellow-400 text-sm" />

                                <h3 className="text-sm font-semibold uppercase text-purple-400">
                                  Featured
                                </h3>
                              </div>

                              <h2 className="text-2xl font-semibold gradient-text not-italic text-transparent bg-clip-text">
                                AI Writing Studio
                              </h2>

                              <p className="mt-3 text-sm leading-relaxed text-white/70">
                                Intelliwriter provides powerful AI tools to
                                write, rewrite, humanize, create, and automate
                                high-quality content
                              </p>

                              <Image
                                src="/MegaMenu.webp"
                                alt="AI Super SEO Agents"
                                width={220}
                                height={160}
                                className="mt-10 rounded-xl object-cover w-full"
                              />

                              <Link href={""}>
                                <button className="w-full mt-5 py-3 rounded-lg gradient-bg text-sm md:text-base font-semibold hover:scale-105 duration-500 flex items-center justify-center gap-2">
                                  Explore AI Tools
                                  <FaArrowRight className="text-xs" />
                                </button>
                              </Link>
                            </aside>

                            {/* ================= MIDDLE ================= */}
                            <section className="p-6 border-r border-white/10">
                              {/* ===== AUTOMATION ===== */}
                              {activeMenu === "1" && (
                                <>
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                    {writingTools.map((tool, index) => (
                                      <Link
                                        key={tool.title || index}
                                        href={tokens ? tool.link : tool.route}
                                        className="group flex items-start border border-white/10 gap-4 rounded-lg -mx-2 px-2 py-2 bg-[#040C21] hover:bg-white/5 transition"
                                      >
                                        <div
                                          className={`text-xl border border-white/20 rounded-lg p-3 text-white group-hover:text-purple-400 ${tool.color}`}
                                        >
                                          {tool.icon}
                                        </div>

                                        <div>
                                          <p className="text-sm md:text-base !text-white font-semibold group-hover:text-purple-400">
                                            {tool.title}
                                          </p>
                                          <p className="text-xs md:text-sm text-white/70 leading-relaxed mt-2">
                                            {tool.description}
                                          </p>
                                        </div>
                                        <div className="flex items-center justify-center h-full">
                                          <AiFillCaretRight className="text-white/40 text-sm group-hover:text-white transition" />
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              )}
                            </section>

                            {/* ================= RIGHT ================= */}
                            <aside className="p-5">
                              <>
                                <h4 className="text-sm font-semibold mb-3">
                                  AI Resources
                                </h4>
                                <div className="space-y-3">
                                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
                                    <div className="flex gap-2">
                                      <div className="rounded-lg text-white p-2">
                                        <FaTachometerAlt />
                                      </div>
                                      <div className="flex flex-col flex-1">
                                        <span className="text-sm font-medium">
                                          Overview
                                        </span>
                                        <p className="text-xs text-white/80 mt-1">
                                          See what Intelliwriter AI can do
                                        </p>
                                      </div>
                                    </div>
                                    <AiFillCaretRight className="text-white/40 text-xs group-hover:text-white transition" />
                                  </div>

                                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
                                    <div className="flex gap-3">
                                      <div className="rounded-lg text-white p-2 ">
                                        <FaCogs />
                                      </div>
                                      <div className="flex flex-col flex-1">
                                        <span className="text-sm font-medium">
                                          How it Works
                                        </span>
                                        <p className="text-xs text-white/80 mt-1">
                                          Simple 3-step AI content workflow
                                        </p>
                                      </div>
                                    </div>
                                    <AiFillCaretRight className="text-white/40 text-xs group-hover:text-white transition" />
                                  </div>

                                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
                                    <div className="flex gap-3">
                                      <div className="rounded-lg text-white p-2">
                                        <FaBook />
                                      </div>
                                      <div className="flex flex-col flex-1">
                                        <span className="text-sm font-medium">
                                          Documentation
                                        </span>
                                        <p className="text-xs text-white/80 mt-1">
                                          Guides, tutorials & best practices
                                        </p>
                                      </div>
                                    </div>
                                    <AiFillCaretRight className="text-white/40 text-xs group-hover:text-white transition" />
                                  </div>
                                </div>
                              </>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dropdown Content SEO Tools */}
                  {showDropdown && activeMenu === "2" && (
                    <div
                      className="fixed left-0 right-0 z-[100]"
                        style={{ top: NAV_TOP_OFFSET - 16 }}
 onMouseEnter={() => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setShowDropdown(true);
      }}
                            onMouseLeave={handleMouseLeave}
                    >
                      <div className="mx-auto w-full px-6 lg:px-10 xl:px-16">
                        <div className="mx-auto max-w-[1240px] rounded-2xl bg-[#01061A] text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
                          <div className="grid lg:grid-cols-[260px_minmax(0,1fr)_260px]">
                            {/* ================= LEFT RAIL ================= */}
                            <aside className="border-r border-white/10 p-5">
                              <div className="w-fit flex items-center border border-white/10 rounded-md gap-2 mb-4">
                                <FaStar className="text-yellow-400 text-sm" />

                                <h3 className="text-sm font-semibold uppercase text-purple-400">
                                  Featured
                                </h3>
                              </div>

                              <h2 className="text-2xl font-semibold gradient-text not-italic text-transparent bg-clip-text">
                                SEO Tools Suite
                              </h2>

                              <p className="mt-3 text-sm leading-relaxed text-white/70">
                                Powerful SEO tools to research, optimize,
                                humanize, create, and improve rankings.
                                Everything you need for content SEO, metadata,
                                and ranking insights.
                              </p>

                              <Image
                                src="/MegaMenu.webp"
                                alt="AI Super SEO Agents"
                                width={220}
                                height={160}
                                className="mt-10 rounded-xl object-cover w-full"
                              />

                              <Link href={""}>
                                <button className="w-full mt-5 py-3 rounded-lg gradient-bg text-sm md:text-base font-semibold hover:scale-105 duration-500 flex items-center justify-center gap-2">
                                  Explore SEO Tools
                                  <FaArrowRight className="text-xs" />
                                </button>
                              </Link>
                            </aside>

                            {/* ================= MIDDLE ================= */}
                            <section className="p-6 border-r border-white/10">
                              {/* ===== AUTOMATION ===== */}
                              {activeMenu === "2" && (
                                <>
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                    {seoTools.map((tool, index) => (
                                      <Link
                                        key={tool.title || index}
                                        href={tokens ? tool.link : tool.route}
                                        className="group flex items-start border border-white/10 gap-4 rounded-lg -mx-2 px-2 py-2 bg-[#040C21] hover:bg-white/5 transition"
                                      >
                                        <div
                                          className={`text-xl border border-white/20 rounded-lg p-3 text-white group-hover:text-purple-400 ${tool.color}`}
                                        >
                                          {tool.icon}
                                        </div>

                                        <div>
                                          <p className="text-sm md:text-base !text-white font-semibold group-hover:text-purple-400">
                                            {tool.title}
                                          </p>
                                          <p className="text-xs md:text-sm text-white/70 leading-relaxed mt-2">
                                            {tool.description}
                                          </p>
                                        </div>
                                        <div className="flex items-center justify-center h-full">
                                          <AiFillCaretRight className="text-white/40 text-sm group-hover:text-white transition" />
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              )}
                            </section>

                            {/* ================= RIGHT ================= */}
                            <aside className="p-5">
                              <>
                                <h4 className="text-sm font-semibold mb-3">
                                  AI Resources
                                </h4>
                                <div className="space-y-3">
                                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
                                    <div className="flex gap-3">
                                      <div className="rounded-lg text-white p-2">
                                        <FaTachometerAlt />
                                      </div>
                                      <div className="flex flex-col flex-1">
                                        <span className="text-sm font-medium">
                                          Overview
                                        </span>
                                        <p className="text-xs text-white/80 mt-1">
                                          See what Intelliwriter AI can do
                                        </p>
                                      </div>
                                    </div>
                                    <AiFillCaretRight className="text-white/40 text-xs group-hover:text-white transition" />
                                  </div>

                                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
                                    <div className="flex gap-3">
                                      <div className="rounded-lg text-white p-2 ">
                                        <FaCogs />
                                      </div>
                                      <div className="flex flex-col flex-1">
                                        <span className="text-sm font-medium">
                                          How it Works
                                        </span>
                                        <p className="text-xs text-white/80 mt-1">
                                          Simple 3-step AI content workflow
                                        </p>
                                      </div>
                                    </div>
                                    <AiFillCaretRight className="text-white/40 text-xs group-hover:text-white transition" />
                                  </div>

                                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
                                    <div className="flex gap-3">
                                      <div className="rounded-lg text-white p-2">
                                        <FaBook />
                                      </div>
                                      <div className="flex flex-col flex-1">
                                        <span className="text-sm font-medium">
                                          Documentation
                                        </span>
                                        <p className="text-xs text-white/80 mt-1">
                                          Guides, tutorials & best practices
                                        </p>
                                      </div>
                                    </div>
                                    <AiFillCaretRight className="text-white/40 text-xs group-hover:text-white transition" />
                                  </div>
                                </div>
                              </>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* <div className="flex gap-4 xl:gap-7 items-center text-sm xl:text-base font-medium">
              <Link
                className="bg-gradient-to-r from-[#7628D6] to-[#471C7C] hover:scale-105 duration-500 shadow-[0px_14px_40px_0px_#EF2B7040] p-[0.6rem] px-7 rounded-full"
                href={`${process.env.NEXT_PUBLIC_APP}auth/register`}
                >
                <button>Register</button>
              </Link>

              <Link
                className="bg-transparent p-[0.6rem] px-7 rounded-full border-2 border-white hover:scale-105 duration-500"
                href={`${process.env.NEXT_PUBLIC_APP}auth/login`}
                >
                <button>Login</button>
              </Link>
            </div> */}

            <div className="flex item-center gap-2">
              {sessionLetter ? (
                <div className="relative">
                  <h1
                    className="w-10 h-10 rounded-full uppercase text-black bg-slate-300 border-2 flex items-center justify-center text-lg cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    {sessionLetter}
                    {/* Z */}
                  </h1>
                  <ul
                    className={`absolute w-[200px] z-[999] right-0 bg-primary rounded-xl overflow-hidden p-2 ${
                      dropdown
                        ? "visible transition-all duration-200 translate-y-2"
                        : " invisible transition-all duration-200 translate-y-0 pointer-events-none "
                    }`}
                  >
                    {dropdownMenu.map((item, index) => (
                      <Link
                        key={`${item.id}-${index}`}
                        href={item.link}
                        passHref
                      >
                        <li
                          className="p-3 flex cursor-pointer items-center justify-start gap-3 text-white hover:hover:scale-105 transition duration-200"
                          onClick={() => setDropdown(!dropdown)}
                        >
                          {item.icon && (
                            <Image
                              src={item.icon}
                              width={20}
                              height={20}
                              alt="Icon"
                            />
                          )}
                          <span>{item.title}</span>
                        </li>
                      </Link>
                    ))}

                    <li
                      className="p-3 flex items-center justify-start gap-3 text-white hover:scale-105 transition duration-200 cursor-pointer"
                      onClick={() => {
                        setDropdown(!dropdown);
                        logout();
                      }}
                    >
                      <span className="text-xl">
                        <BiLogOut />
                      </span>
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex items-center gap-1 mx-2">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_APP}auth/login`}
                    className="lg:flex hidden items-center gap-2 text-white rounded-3xl px-6 py-2 md:text-base text-sm tracking-wider font-semibold"
                  >
                    <FaRegUserCircle className="text-white text-lg" />
                    Sign in
                  </Link>

                  <Link
                    href={`${process.env.NEXT_PUBLIC_APP}auth/register`}
                    className="lg:block hidden text-white gradient-bg rounded-3xl px-6 py-3 md:text-base text-sm tracking-wider font-semibold "
                  >
                    Sign Up Now
                  </Link>
                </div>
              )}

              <GiHamburgerMenu
                className="text-3xl text-white lg:hidden block"
                onClick={toggleSidebar}
              />
            </div>
          </nav>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------- */}

      {/* NAVBAR FOR SMALL & MEDIUM SCREENS */}
      <div className="fixed z-40 block lg:hidden top-0 w-full h-auto bg-gradient-to-r from-[#401771] to-[#321B59] border-b-2 border-[#7628D6] shadow-xl">
        <div className="flex w-full justify-center items-center">
          <nav className="w-full max-w-7xl flex justify-between items-center px-4 md:px-7 py-2 text-white">
            <Link href="/">
              <Image
                src={"/Logo.svg"}
                width={130}
                height={100}
                alt="Intelliwriter Logo"
              />
            </Link>

            <button
              onClick={toggleSidebar}
              className="cursor-pointer text-white hover:scale-105 duration-500"
            >
              <motion.div
                key={isVisible ? "close" : "hamburger"}
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isVisible ? (
                  <IoClose size={30} />
                ) : (
                  <GiHamburgerMenu size={25} />
                )}
              </motion.div>
            </button>
          </nav>
        </div>
      </div>

      {/* SMALL, MEDIUM SCREENS' SIDEBAR */}

      <div
        className={`fixed overflow-y-auto z-50 top-0 left-0 w-full md:w-2/5 h-full bg-gradient-to-r from-[#401771] to-[#321B59] border-r-2 border-[#7628D6] shadow-xl transform transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 cursor-pointer text-white hover:scale-105 duration-500"
        >
          <IoClose size={25} />
        </button>

        <nav className="w-full h-full flex flex-col text-left items-start px-4 md:px-7 py-2 gap-12  text-white">
          <Link href="/">
            <Image
              src={"/Logo.svg"}
              width={130}
              height={100}
              alt="Intelliwriter Logo"
            />
          </Link>

          <div className="flex flex-col gap-7 font-medium">
            {navlinks.map((item) => (
              <div key={item.id} className="relative">
                {item.id === "1" ? (
                  // Dropdown Trigger
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown();
                    }}
                    className="flex items-center hover:text-[#F64CFF] duration-500 w-full"
                  >
                    <p>{item.label}</p>
                    <span className="ml-3">
                      <MdOutlineKeyboardArrowDown className="transition-transform duration-300" />
                    </span>
                  </button>
                ) : (
                  // Regular Link
                  <Link
                    className="flex items-center hover:text-[#F64CFF] duration-500"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Content */}
                {activeMenu === "1" && showDropdown && (
                  <div className="w-full text-white rounded-xl p-3 z-50 mt-4">
                    <div>
                      <div className="grid grid-cols-1 gap-7">
                        {writingTools.map((tool, index) => (
                          <Link
                            href={tokens ? tool.link : tool.route}
                            key={index}
                            className="group flex items-center rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                          >
                            <div className="mr-3 text-base text-white">
                              {tool.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <p className="text-base text-white mb-1">
                                  {tool.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col gap-3 md:gap-5 justify-center items-center">
            <Link
              href={`${process.env.NEXT_PUBLIC_APP}auth/login`}
              className="lg:block w-full flex items-center gap-2 !text-white text-center justify-center rounded-3xl px-6 py-2 border tracking-wider font-semibold"
            >
              <FaRegUserCircle className="!text-white text-lg" />

              <button>Sign in</button>
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_APP}auth/register`}
              className="lg:hidden w-full !text-white gradient-bg rounded-3xl text-center px-6 py-3 md:text-base text-sm tracking-wider font-semibold "
            >
              <button>Sign Up Now</button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
