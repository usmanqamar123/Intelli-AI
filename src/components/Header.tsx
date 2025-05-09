"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { BiLogOut } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import Swal from "sweetalert2";
import { MegaMenu, NAV_LINKS, dropdownMenu } from "../constants";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "./Button";
import { Logo } from "../../public";
import { GiHamburgerMenu } from "react-icons/gi";

interface DropdownMenuItem {
  id: number;
  icon: IconType;
  title: string;
  link: string;
}

interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement> | null;
  pricingRef: React.RefObject<HTMLDivElement> | null;
}

const Header: React.FC<HeaderProps> = ({ aboutRef, pricingRef }) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { nameLetter, setTokens, setNameLetter } = useAuth();
  const [sessionTokens, setSessionTokens] = useState<string | null>(null);
  const [sessionLetter, setSessionLetter] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Mega Menu route
  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

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

  const logout = () => {
    localStorage.removeItem("intellitokens");
    localStorage.removeItem("intelliname");
    localStorage.removeItem("intellinameLetter");
    localStorage.removeItem("intelliuserId");
    setTokens(null, "tokens");
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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const NottoggleSidebar = () => {
    setShowSidebar(showSidebar);
  };

  const NotcloseSidebar = () => {
    if (!showSidebar) {
      NottoggleSidebar;
    }
  };

  const pathname = usePathname();

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
      <header className="flex items-center sticky top-0 z-50 w-full">
        <nav
          className={`w-full py-4 md:px-10 px-4 shadow-md border-b border-b-white border-opacity-30 flex md:text-[14px] lg:text-[14px] items-center justify-between transition duration-500 ease-in-out ${
            isScrolled
              ? "bg-gradient-to-r from-[#471c7c]/40 to-[#030616]/20 backdrop-blur-sm"
              : "bg-transparent"
          }`}
        >
          <div className="w-11/12 h-full flex items-center justify-center gap-2">
            <Link
              href="/"
              passHref
              className="text-white font-extrabold text-[26px] tracking-wide -ml-2 font-montserrat"
            >
              <Image
                src={"/Logo.svg"}
                alt="Logo"
                width={250}
                height={35}
                className="object-contain w-auto h-16"
                priority={true}
              />
            </Link>

            <ul className="md:w-4/5 gap-3 px-3 text-white hidden lg:flex h-full lg:items-center lg:justify-center">
              {NAV_LINKS.map((menuItem, index) =>
                menuItem.id === 1 ? null : (
                  <li key={index} className="relative group px-3">
                    <Link
                      href={menuItem.route}
                      passHref
                      className={` text-[16px] py-1 font-light transition-all duration-200 outline-none border-b-0 hover:border-b-2 ${
                        (activeSection === menuItem.title.toLowerCase() &&
                          activeSection !== null) ||
                        (pathname === menuItem.route && activeSection === null)
                          ? isScrolled
                            ? "border-b-2 border-white"
                            : "border-b-2 border-[#af4db7]"
                          : ""
                      } ${
                        isScrolled
                          ? "hover:border-white"
                          : "hover:border-[#af4db7]"
                      }`}
                    >
                      {menuItem.title}
                    </Link>

                    {menuItem.id === 3 && (
                      <div>
                        <div className="absolute top-[16px] -left-40 transition group-hover:translate-y-4 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 xl:w-[1050px] w-[800px] transform">
                          <div className="relative px-10 py-14 bg-[#020511] rounded-xl shadow-xl w-full">
                            <div className="relative z-10 siderbar">
                              <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 overflow-y-auto lg:overflow-y-scroll custom-scrollbar"
                                style={{ maxHeight: "400px" }} // Set a max height for the scrollable container
                              >
                                {MegaMenu.map((item) => (
                                  <Link
                                    className="w-full"
                                    href={tokens ? item.link : item.route}
                                    key={item.id}
                                  >
                                    <div className="w-full flex text-white transition duration-200 hover:opacity-80 gap-4">
                                      <div className="flex text-2xl justify-center items-center md:text-3xl">
                                        {React.createElement(item.icon)}
                                      </div>
                                      <div className="flex flex-col gap-1 text-base">
                                        <span>{item.title}</span>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>

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
              <div className="flex items-center gap-3 mx-2">
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP}auth/register`}
                  className="lg:block hidden"
                >
                  <Button title="Register" btnType="button" />
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP}auth/login`}
                  className="lg:block hidden text-white border-[2.5px] rounded-3xl px-6 py-2 md:text-base text-sm tracking-wider font-semibold "
                >
                  Login
                </Link>
              </div>
            )}

            <GiHamburgerMenu
              className="text-3xl text-white lg:hidden block"
              onClick={toggleSidebar}
            />
          </div>
        </nav>

        <aside
          className={`lg:hidden ${
            showSidebar
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } transition duration-200 block fixed inset-0 bg-primary z-50 w-full siderbar overflow-y-auto`}
        >
          <div className="flex justify-between items-center pr-4 md:px-5">
            <Link href="/">
              <Image
                src={Logo}
                alt={Logo}
                width={300}
                height={28}
                priority={true}
                className="pl-5 pt-3 w-36"
              />
            </Link>

            {/* Close icon */}
            <IoIosClose
              className="text-white absolute top-3 text-3xl right-2"
              onClick={closeSidebar}
            />
          </div>

          <div className="px-5 md:px-10">
            <ul className="py-5">
              {NAV_LINKS.map((menuItem, index) => (
                <li key={index} className="text-sm relative group">
                  <Link
                    href={
                      menuItem.id === 4
                        ? tokens
                          ? `${process.env.NEXT_PUBLIC_APP}/user/ai-humanizer`
                          : "/ai-humanizer"
                        : menuItem.route
                    }
                  >
                    <div
                      className="w-full flex justify-between border-b !text-white border-transparent/30 items-center font-light py-3"
                      onClick={menuItem.id === 3 ? toggleDropdown : () => {}}
                    >
                      {menuItem.title}

                      {menuItem.id === 3 && (
                        <div className="cursor-pointer relative ml-2">
                          <MdKeyboardArrowDown size={20} />
                        </div>
                      )}
                    </div>
                  </Link>

                  {menuItem.id === 3 && (
                    <div className="relative">
                      <div
                        className="overflow-hidden whitespace-nowrap"
                        style={{
                          maxHeight: showDropdown ? "750px" : "0",
                          transition: "max-height 0.3s ease-out",
                        }}
                      >
                        <ul className="py-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            {MegaMenu.map((item) => (
                              <Link
                                href={tokens ? item.link : item.route}
                                key={item.id}
                                className="w-full h-full flex flex-row items-center gap-3 px-1 pb-3 justify-start hover:opacity-80"
                              >
                                <div className="!text-white text-lg">
                                  {React.createElement(item.icon)}
                                </div>
                                <div className="flex flex-col">
                                  <span className="!text-white font-thin">
                                    {item.title}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {tokens ? (
              <div className="w-full flex flex-col justify-center items-center text-center py-10">
                <Button
                  title="Logout"
                  btnType="button"
                  width="w-full"
                  className="w-full text-white rounded-3xl px-3 py-2.5 text-sm"
                  onClick={logout}
                />
              </div>
            ) : (
              <div className="w-full flex flex-col justify-center items-center text-center gap-6 py-10">
                <Link
                  className="sm:w-3/4 w-full"
                  href={`${process.env.NEXT_PUBLIC_APP}auth/register`}
                >
                  <Button
                    title="Register"
                    btnType="button"
                    width="w-full"
                    className="w-full"
                  />
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP}auth/login`}
                  className="sm:w-3/4 w-full text-white border-2 rounded-3xl px-3 py-2.5 text-sm"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </aside>
      </header>

      {dropdown && (
        <div
          className="w-full h-screen z-30 fixed top-0 left-0 bg-primary/30 transition-all duration-200"
          onClick={() => setDropdown(!dropdown)}
        />
      )}
    </>
  );
};

export default Header;
