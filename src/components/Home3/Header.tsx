"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
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
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import Button from "../Button";
import { BiLogOut } from "react-icons/bi";
import { useSearchParams } from "next/navigation";


interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement> | null;
  pricingRef: React.RefObject<HTMLDivElement> | null;
}

const Header: React.FC<HeaderProps> = ({ aboutRef, pricingRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [sessionTokens, setSessionTokens] = useState<string | null>(null);
  const [sessionLetter, setSessionLetter] = useState<string | null>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const { nameLetter,  setNameLetter } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
    const [tokens, setTokens] = useState<string | null>(null);

  // const tokens =
  //   typeof window !== "undefined"
  //     ? localStorage.getItem("intellitokens")
  //     : null;

        useEffect(() => {
          const extractedToken = searchParams.get("tokens");
        
          if (extractedToken) {
            setTokens(extractedToken);
            localStorage.setItem("intellitokens", extractedToken);
          }
        }, [searchParams]);

      useEffect(() => {
        if (typeof window !== "undefined") {
          const tokens = localStorage.getItem("intellitokens");
          const letter = localStorage.getItem("intellinameLetter");
          setSessionTokens(tokens);
          setSessionLetter(letter);
        }
    
        const handleScroll = () => {
          const scrolled = window.scrollY > 0;
          setIsScrolled(scrolled);
        };
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const navlinks = [
    { id: "1", label: "AI Tools", href: "" },
    { id: "2", label: "Humanizer", href: "/ai-humanizer" },
    { id: "3", label: "Pricing", href: "/pricing-plan" },
    { id: "4", label: "Blogs", href: "/blogs" },
    { id: "5", label: "Become an Affiliate", href: "/become-an-affiliate" },
  ];

  const writingTools = [
    {
      icon: <FaPen className="text-yellow-500" />,
      title: "AI Article Writer",
      description:
        "Create high-quality, SEO-friendly articles effortlessly using AI-driven content generation.",
      link: `${process.env.NEXT_PUBLIC_APP}user/ai-seo-articlewriter`,
      route: "/new-seo-aricle",
    },
    {
      icon: <FaChartLine className="text-blue-500" />,
      title: "Keyword Research",
      description:
        "Find top-performing keywords to improve SEO rankings and increase website visibility.",
      link: `${process.env.NEXT_PUBLIC_APP}user/seo-keyword-research`,
      route: "/seo-keyword-research",
    },
    {
      icon: <FaImage className="text-red-500" />,
      title: "Image Generator",
      description:
        "Generate stunning, high-resolution images using advanced AI technology for various needs.",
      link: `${process.env.NEXT_PUBLIC_APP}user/image-generator`,
      route: "/ai-image-generator",
    },
    {
      icon: <FaRobot className="text-green-500" />,
      title: "AI Chat",
      description:
        "Engage in AI-powered conversations using multiple models for intelligent responses.",
      link: `${process.env.NEXT_PUBLIC_APP}user/chat`,
      route: "/ai-chat",
    },
    {
      icon: <FaSyncAlt className="text-pink-500" />,
      title: "Topical Authority",
      description:
        "Enhance Google rankings with structured, human-like content for niche authority.",
      link: `${process.env.NEXT_PUBLIC_APP}user/tropical-map`,
      route: "/topical-authority-builder",
    },
    {
      icon: <FaFreeCodeCamp className="text-purple-600" />,
      title: "Other Free Tools",
      description:
        "Explore suite of other complimentary tools designed to introduce you to capabilities of AISEO.",
      link: `${process.env.NEXT_PUBLIC_APP}free-tools/template`,
      route: "/free-tools/template",
    },
  ];

  const logout = () => {
    localStorage.removeItem("intellitokens");
    localStorage.removeItem("intelliname");
    localStorage.removeItem("intellinameLetter");
    localStorage.removeItem("intelliuserId");
    // setTokens(null, "tokens");
    setSessionTokens(null);
    setNameLetter("");
    setIsLoggedIn(false);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Logout Successfully!",
    });
    router.push("/");
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

  return (
    <>
      {/* NAVBAR FOR LARGE SCREENS */}
      <div
      className={`fixed z-50 hidden lg:block top-0 w-full h-auto transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F062C] border-b border-[#888] shadow-xl"
          : "bg-transparent border-transparent"
      }`}
    >        <div className="flex w-full justify-center items-center">
          <nav className="w-full lg:max-w-7xl xl:container mx-auto flex justify-between items-center p-4 text-white">
            <Link href="/">
              <Image
                src={"/Logo.svg"}
                width={130}
                height={100}
                alt="Intelliwriter Logo"
                className="xl:w-[140px]"
              />
            </Link>
            <div className="flex lg:gap-4 xl:gap-7 font-medium ml-3">
              {navlinks.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => item.id === "1" && setShowDropdown(true)}
                  onMouseLeave={() => item.id === "1" && setShowDropdown(false)}
                >
                  {item.id === "1" ? (
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

                  {/* Dropdown Content */}
                  {item.id === "1" && showDropdown && (
                    <div
                      className="absolute top-4 left-0 w-screen max-w-2xl bg-[#0F061C] text-white rounded-xl shadow-lg px-6 py-4 mt-2 z-50"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <div className="absolute flex items-center self-center top-1/2 h-10 w-2/3 bg-intelli-gradient blur-[120px]"></div>

                      {/* Writing Tools Section */}
                      <div>
                        <h2 className="text-xl font-bold text-white mb-4">
                          Writing Tools
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                          {writingTools.map((tool, index) => (
                            <Link
                              href={tokens ? tool.link : tool.route}
                              key={item.id}
                              className="w-full h-full flex flex-row items-center gap-3 px-1 pb-3 justify-start hover:opacity-80"
                            >
                              <div className="group flex items-start p-4 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer">
                                <div className="mr-3 text-2xl text-white">
                                  {tool.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                      {tool.title}
                                    </h3>
                                    <FiArrowUpRight className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                                  </div>
                                  <p className="text-sm leading-relaxed text-gray-300 line-clamp-3">
                                    {tool.description}
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
              {(tokens || sessionTokens) !== null ? (
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-full uppercase bg-slate-300 border-2 flex items-center justify-center text-lg cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    {nameLetter || sessionLetter}
                  </div>
                  <ul
                    className={`absolute w-[200px] z-[999] right-0 bg-primary rounded-xl overflow-hidden p-2 ${
                      dropdown
                        ? "visible transition-all duration-200 translate-y-2"
                        : " invisible transition-all duration-200 translate-y-0 pointer-events-none "
                    }`}
                  >
                    {dropdownMenu.map((item) => (
                      <Link key={item.id} href={item.link} passHref>
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

        <nav className="w-full h-full flex flex-col text-left items-start px-4 md:px-7 py-2 gap-16  text-white">
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
                {item.id === "1" && showDropdown && (
                  <div className="w-full text-white rounded-xl p-3 z-50 mt-4">
                    <div>
                      <div className="grid grid-cols-1 gap-7">
                        {writingTools.map((tool, index) => (
                          <div
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
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col gap-3 md:gap-5 items-center">
            <Link
              className="w-full text-center bg-gradient-to-r from-[#7628D6] to-[#471C7C] hover:scale-105 duration-500 shadow-[0px_14px_40px_0px_#EF2B7040] p-3 px-7 rounded-full"
              href={`${process.env.NEXT_PUBLIC_APP}auth/register`}
            >
              <button>Register</button>
            </Link>

            <Link
              className="w-full text-center  bg-transparent p-2 px-7 rounded-full border-2 border-white hover:scale-105 duration-500"
              // href={`${process.env.NEXT_PUBLIC_APP}auth/login`}
              href={`${process.env.NEXT_PUBLIC_APP}auth/login`}
            >
              <button>Login</button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
