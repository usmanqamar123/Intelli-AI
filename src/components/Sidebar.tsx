"use client";

import "@/app/globals.css";
import { useAuth } from "@/context/AuthContext";
import { useWebContext } from "@/context/ContextProvider";
import {
  Alert,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BiChevronRight, BiSolidImageAlt } from "react-icons/bi";
import { CgTemplate } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { GiSoundWaves, GiStarKey, GiStarMedal } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContactSupport, MdVoiceChat } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
// import BiChevronDown
import { BiChevronDown } from "react-icons/bi";
import { SiChatbot } from "react-icons/si";
import { GrArticle } from "react-icons/gr";
import { GiBookshelf } from "react-icons/gi";
import { useLoading } from "@/context/LoadingContext";

import Swal from "sweetalert2";
import { Logo, logoMin } from "../../public";
import { BsFillMotherboardFill } from "react-icons/bs";

// icons
import { GoHistory } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiSolidImageAdd } from "react-icons/bi";
import { PiSelectionBackgroundBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import Image from "next/image";

export function Sidebar() {
  const router = useRouter();
  const [openAlert, setOpenAlert] = React.useState(true);
  const { largeToggle, setLargeToggle, toggle, setToggle } = useWebContext();
  const { setTokens, setNameLetter } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth >= 1024);
  const pathname = usePathname();
  const isAIChat = pathname === "/user/chat";
  const { isLoading, setLoading } = useLoading();
  const [userPlan, setUserPlan] = useState<string>(""); // Explicitly define the state as a string
  const [showdropDown, setShowDropDown] = useState<Boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarMouseEnter = () => {
    if (isAIChat) {
      setLargeToggle(true); // Expand sidebar on mouse enter for AI Chat
    }
  };

  const handleSidebarMouseLeave = () => {
    if (isAIChat) {
      setLargeToggle(false); // Collapse sidebar on mouse leave for AI Chat
    }
  };

  const logout = async () => {
    localStorage.removeItem("intellitokens");
    localStorage.removeItem("intelliname");
    localStorage.removeItem("intellinameLetter");
    localStorage.removeItem("intelliuserId");
    localStorage.removeItem("intellidisplayedImages"); // Add this to clear image history

    setTokens(null, "tokens");
    setNameLetter("");
    await Swal.fire({
      icon: "success",
      title: "Success",
      text: "Logout Successfully!",
    });
    router.push("/");
  };

  function handleDropdownClick(e: any) {
    e.stopPropagation(); // Prevent the event from propagating to the parent
  }
  const pathName = usePathname();

  useEffect(() => {
    const userPlan = localStorage.getItem("intelliuserPlan");
    if (userPlan === "Basic Plan") {
      setOpenAlert(true);
    } else {
      setOpenAlert(false);
    }
  }, []);

  return (
    <div
      className={`sm:w-[250px] lg:w-[250px] w-full border-r z-[999] fixed top-0 lg:left-0 transition-all duration-300 ease-in-out ${
        toggle ? "left-0" : "sm:-left-[250px] -left-full"
      } ${
        largeToggle ? "lg:left-0" : "lg:w-[60px]"
      } border-[#54515b] rounded-none h-screen p-0 py-4 pt-0 shadow-xl bg-[rgb(32,45,72)] md:bg-[rgba(32,45,72,0.4)] backdrop-blur-sm overflow-y-auto custom-scrollbar`}
      onMouseEnter={handleSidebarMouseEnter}
      onMouseLeave={handleSidebarMouseLeave}
    >
      <IoIosClose
        className="text-white text-4xl absolute top-5 right-2 lg:hidden block"
        onClick={() => setToggle(!toggle)}
      />

      <div className="mb-0 p-4 border-b border-[#54515b]">
        {largeToggle ? (
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              width={150}
              height={0}
              style={{ width: "150px", height: "auto" }}
              priority={true}
            />{" "}
          </Link>
        ) : (
          <Image
            src={logoMin}
            alt="Logo"
            width={50}
            height={0}
            style={{ width: "150px", height: "auto" }}
            priority={true}
          />
        )}
      </div>

      <List placeholder="" className="py-4 rounded-none space-y-2">
        {/* Dashboard */}
        <div className="space-y-2">
          <p
            className={`text-[12px] font-medium uppercase text-gray-300 ${
              largeToggle ? "block" : "hidden text-center"
            }`}
          >
            Start Here
          </p>

          <Link
            href="/user/dashboard"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px]  ${
              pathName == "/user/dashboard" ? "bg-btnPrimary" : ""
            }`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <LuLayoutDashboard className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                Dashboard
              </Typography>
            </ListItem>
          </Link>
        </div>

        <div className="pt-3 space-y-2">
          <p
            className={`text-[12px] font-medium uppercase text-gray-300 ${
              largeToggle ? "block" : "hidden"
            }`}
          >
            Our Tools
          </p>

          {/* AI Image Generator */}
          {/* <Link
            href="/user/image-generator"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/image-generator" ? "bg-btnPrimary" : ""
            }`}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2 relative">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <BiSolidImageAlt className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                AI Image Generator
              </Typography>
            </ListItem>
          </Link> */}

          {/* onClick={(e) => {
                e.preventDefault();
                setShowDropDown(!showdropDown);
              }}
               */}

          <div
            onClick={(e) => {
              e.preventDefault();
              setShowDropDown(!showdropDown);
            }}
            className="relative"
          >
            <div
              className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
                pathName === "/user/image-generator" ? "bg-btnPrimary" : ""
              }`}
            >
              <ListItem placeholder="" className="p-0 space-x-2 relative">
                <ListItemPrefix
                  placeholder=""
                  className={`${largeToggle ? "block" : "mx-auto"}`}
                >
                  <BiSolidImageAlt className="h-4 w-4 text-white" />
                </ListItemPrefix>
                <Typography
                  placeholder=""
                  className={`text-white font-normal text-[15px] ${
                    largeToggle ? "block" : "hidden"
                  }`}
                >
                  AI Image Generator
                </Typography>
                {largeToggle && (
                  <span className="ml-auto cursor-pointer">
                    {showdropDown ? (
                      <BiChevronDown className="h-4 w-4 text-white transition-transform duration-300" />
                    ) : (
                      <BiChevronRight className="h-4 w-4 text-white transition-transform duration-300" />
                    )}
                  </span>
                )}
              </ListItem>
            </div>

            {/* Dropdown Items */}
            {showdropDown && (
              <div
                onClick={handleDropdownClick}
                className="ml-6 mt-2 space-y-2"
              >
                <div className="flex">
                  <Link
                    href="/user/image-generator?active=Images"
                    className="flex items-center p-2 list-item-hover rounded-[6px] text-white text-sm"
                  >
                    <BiSolidImageAlt className="mr-3" />
                    AI Images
                  </Link>
                </div>
                <div className="flex">
                  <Link
                    href="/user/image-generator?active=History"
                    className="flex items-center p-2 list-item-hover rounded-[6px] text-white text-sm"
                  >
                    <GoHistory className="mr-3" />
                    History
                  </Link>
                </div>
                <div className="flex">
                  <Link
                    href="/user/image-generator?active=Enhancer"
                    className="flex items-center p-2 list-item-hover rounded-[6px] text-white text-sm"
                  >
                    <BiSolidImageAdd className="mr-3" />
                    Image Enhancer
                  </Link>
                </div>
                <Link
                  href="/user/image-generator?active=Background"
                  className="flex items-center p-2 list-item-hover rounded-[6px] text-white text-sm"
                >
                  <PiSelectionBackgroundBold className="mr-3" />
                  Background Remover
                </Link>

                <Link
                  href="/user/image-generator?active=Draw"
                  className="flex items-center p-2 list-item-hover rounded-[6px] text-white text-sm"
                >
                  <FaRegEye className="mr-3" />
                  AI Visionary
                </Link>

                <Link
                  href="/user/image-generator?active=Profile"
                  className="flex items-center p-2 list-item-hover rounded-[6px] text-white text-sm"
                >
                  <CgProfile className="mr-3" />
                  Profile Picture
                </Link>
              </div>
            )}
          </div>

          {/* AI Voice Generator */}
          <Link
            href="/user/voice-generator"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/voice-generator" ? "bg-btnPrimary" : ""
            }`}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <GiSoundWaves className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                AI Voice Over
              </Typography>
            </ListItem>
          </Link>

          {/* AI Humanizer */}
          <Link
            href="/user/ai-humanizer"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/ai-humanizer" ? "bg-btnPrimary" : ""
            }`}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <FaRocketchat className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                AI Humanizer
              </Typography>
            </ListItem>
          </Link>


          {/*SPEECH CONTENT*/}

          <Link
            href="/user/speech-content-generator"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/speech-content-generator"
                ? "bg-btnPrimary"
                : " "
            } `}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <MdVoiceChat className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                Speech Content
              </Typography>
            </ListItem>
          </Link>

          {/*AI SEO Article Writer*/}

          <Link
            href="/user/ai-seo-articlewriter"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/ai-seo-articlewriter" ? "bg-btnPrimary" : " "
            } `}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <GrArticle className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <div className="relative flex items-center">
                <Typography
                  placeholder=""
                  className={`text-white font-normal text-[15px] ${
                    largeToggle ? "block" : "hidden"
                  }`}
                >
                  AI SEO Article Writer
                </Typography>
              </div>
            </ListItem>
          </Link>

          {/*SEO KEYWORD RESEARCH*/}

          <Link
            href="/user/seo-keyword-research"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/seo-keyword-research" ? "bg-btnPrimary" : " "
            } `}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <GiStarKey className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <div className="relative flex items-center">
                <Typography
                  placeholder=""
                  className={`text-white font-normal text-[15px] ${
                    largeToggle ? "block" : "hidden"
                  }`}
                >
                  SEO Keyword Research
                </Typography>
              </div>
            </ListItem>
          </Link>




          {/*  Youtube Caption Generator */}
          {/* 
            <Link
               href="/user/youtube-video-article"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
            pathName == "/user/youtube-video-article" ? "bg-btnPrimary" : ""
            } `}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <PiVideoDuotone   className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <div className="relative flex items-center">
                <Typography
                  placeholder=""
                  className={`text-white font-normal text-[15px] ${
                    largeToggle ? "block" : "hidden"
                  }`}
                >
                                 Youtube Video to Article
                </Typography>
              </div>
            </ListItem>
          </Link> */}

          {/*  AI Slides Generator */}

          {/* <Link
               href="/user/ai-slidegenerator"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
            pathName == "/user/ai-slidegenerator" ? "bg-btnPrimary" : ""
            } `}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <FaSlideshare    className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <div className="relative flex items-center">
                <Typography
                  placeholder=""
                  className={`text-white font-normal text-[15px] ${
                    largeToggle ? "block" : "hidden"
                  }`}
                >
                                AI Slide Generator
                </Typography>
              </div>
            </ListItem>
          </Link> */}

          {/* Research Title */}
          {/* <Link
            href="/user/research-title"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/research-title" ? "bg-btnPrimary" : ""
            }`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <AiOutlineRead className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <div className="relative flex items-center">
                <Typography
                  placeholder=""
                  className="text-white font-normal text-[15px]"
                >
                  Research Title
                </Typography>
                <div className="absolute top-[-3px] -right-7 text-red-500 text-[10px]">
                  βeta
                </div>
              </div>
            </ListItem>
          </Link> */}

          {/* scholarchat */}
          {/* <Link
            href="/user/scholarchat"
            className={`flex items-center border-b-0 p-2 list-item-hover rounded-[6px] ${
              pathName == "/user/scholarchat" ? "bg-btnPrimary" : ""
            }`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <AiOutlineRead className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <div className="relative flex items-center">
                <Typography
                  placeholder=""
                  className={`text-white font-normal text-[15px] ${
                    largeToggle ? "block" : "hidden"
                  }`}
                >
                  Scholar Chat
                </Typography>
                {/* <div className="absolute top-[-3px] -right-7 text-red-500 text-[10px]">
                  βeta
                </div> */}
          {/* </div> */}
          {/* </ListItem> */}
          {/* </Link> */}

          {/* Chat */}
          <Link
            href="/user/chat"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/chat" ? "bg-btnPrimary" : " "
            } `}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <SiChatbot className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[17px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                AI Chat
              </Typography>
            </ListItem>
          </Link>

          {/*Intelli APis Pricing*/}
          {/* <Link
            href="/user/intelli-apis"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/intelli-apis" ? "bg-btnPrimary" : " "
            } `}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <TbApi className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className="text-white font-normal text-[15px]"
              >
                Intelli APIs
              </Typography>
            </ListItem>
          </Link> */}
        </div>

        <div className="pt-3 space-y-2">
          <p
            className={`text-[12px] font-medium uppercase text-gray-300 ${
              largeToggle ? "block" : "hidden"
            }`}
          >
            Support
          </p>
          {/* Plans */}
          <Link
            href="/user/plans"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/plans" ? "bg-btnPrimary" : " "
            } `}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <FaDollarSign className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px]" ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                Pricing Plans
              </Typography>
            </ListItem>
          </Link>

          {/* Rewards and Community Program */}
          <Link
            href="/user/reward-program"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/reward-program" ? "bg-btnPrimary" : " "
            } `}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <GiStarMedal className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                Rewards and Community
              </Typography>
            </ListItem>
          </Link>

          {/* FAQs & Help */}
          <Link
            href="/user/faqs"
            className={`flex items-center border-b-0 p-3 list-item-hover rounded-[6px] ${
              pathName == "/user/faqs" ? "bg-btnPrimary" : " "
            } `}
            onClick={() => {
              setToggle(!toggle);
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <MdContactSupport className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                FAQs & Help
              </Typography>
            </ListItem>
          </Link>

          {/* Logout */}
          <div
            className="flex items-center border-b-0 p-3 list-item-hover rounded-[6px]"
            onClick={() => {
              logout();
              // handleClick();
            }}
          >
            <ListItem placeholder="" className="p-0 space-x-2">
              <ListItemPrefix
                placeholder=""
                className={`${largeToggle ? "block" : "mx-auto"}`}
              >
                <RiLogoutBoxRFill className="h-4 w-4 text-white" />
              </ListItemPrefix>
              <Typography
                placeholder=""
                className={`text-white font-normal text-[15px] ${
                  largeToggle ? "block" : "hidden"
                }`}
              >
                Log Out
              </Typography>
            </ListItem>
          </div>
        </div>
      </List>

      <Alert
        open={openAlert}
        className={`sidebarAlert mt-0 bg-gradient-to-bl from-btnPrimary to-btnSecondary ${
          largeToggle ? "block" : "hidden"
        }`}
        onClose={() => setOpenAlert(false)}
      >
        <Typography placeholder="" variant="h6" className="mb-1">
          Upgrade to Premium
        </Typography>
        <Typography
          placeholder=""
          variant="small"
          className="font-normal opacity-80"
        >
          Upgrade to premium and get even more advanced features and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            placeholder=""
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography
            placeholder=""
            as="a"
            href="/user/plans"
            variant="small"
            className="font-medium"
          >
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </div>
  );
}
