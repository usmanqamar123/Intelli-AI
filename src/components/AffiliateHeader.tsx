"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Swal from "sweetalert2";
import Image from "next/image";
import Button from "./Button";
import { Logo } from "../../public";

const AffiliateHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { nameLetter, setTokens, setNameLetter } = useAuth();

  const router = useRouter(); // Use next/router for client-side navigation

  const navbar = [
    { id: 1, title: "Dashboard", link: "/affiliates/dashboard" },
    { id: 2, title: "Details", link: "/affiliates/details" },
    { id: 3, title: "Referrals", link: "/affiliates/referrals" },
    { id: 4, title: "Profile", link: "/affiliates/profile" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logout = () => {
    localStorage.removeItem("intellitokens");
    localStorage.removeItem("intelliname");
    localStorage.removeItem("intellinameLetter");
    localStorage.removeItem("intelliuserId");
    setTokens(null, "affiliate"); 
    setNameLetter("");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Logout Successfully!",
    });
    router.push("/");
  };

  return (
    <header className="flex items-center sticky top-0 z-50 w-full">
      <nav
        className={`w-full p-4 shadow-md border-b border-b-white border-opacity-30 flex md:text-[14px] lg:text-[14px] items-center justify-center transition duration-500 ease-in-out ${
          isScrolled ? "bg-gradient-to-r from-[#471c7c]/40 to-[#030616]/20 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="w-full md:w-4/5 flex items-center justify-between gap-2">
        <Link href="/affiliates/dashboard" passHref>
      <div className="text-white font-extrabold text-[24px] tracking-wide font-montserrat">
        <Image src={Logo} alt="Logo" width={380} height={50} priority={true} className="object-contain h-16 w-auto" />
      </div>
    </Link>

          <ul className="w-full justify-center items-center gap-3 px-3 text-white hidden lg:flex">
            {navbar.map((menuItem, index) => (
              <li key={index} className="relative group px-3 py-2">
                <Link href={menuItem.link} passHref>
                  <div className="text-lg font-light py-1 transition-all duration-200 border-b-2 border-transparent hover:border-b-2 hover:border-[#af4db7]">
                    {menuItem.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Button title="Logout" btnType="button" className="!w-fit hidden lg:block" onClick={logout} />
          <GiHamburgerMenu className="text-3xl text-white lg:hidden block" onClick={toggleSidebar} />
        </div>
      </nav>

      <aside
        className={`lg:hidden ${showSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition duration-200 block fixed inset-0 bg-primary z-50 w-full siderbar overflow-y-auto`}
      >
        <div className="flex justify-between items-center pr-4 md:px-5">
        <Link href="/affiliates/dashboard" >
            <Image src={Logo} alt="Logo" width={180} height={18} priority={true} className="pl-5 pt-3 w-20" />
          </Link>

          <IoIosClose className="text-white absolute top-3 text-3xl right-2" onClick={closeSidebar} />
        </div>

        <div className="px-5 md:px-10">
          <ul className="py-5">
            {navbar.map((menuItem, index) => (
              <li key={index} className="text-sm relative group">
                <Link href={menuItem.link}>
                  <div className="w-full flex justify-between border-b !text-white border-transparent/30 items-center font-light py-3">
                    {menuItem.title}
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <Button title="Logout" btnType="button" className="!w-fit" onClick={logout} />
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
};

export default AffiliateHeader;
