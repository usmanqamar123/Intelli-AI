"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { SiCodemagic } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import {
  FaPenNib,
  FaWordpress,
  FaTools,
  FaRobot,
  FaMagic,
  FaChartLine,
  FaArrowRight,
  FaTimes,
  FaPlay,
} from "react-icons/fa";

interface HeroProps {
  onAnalyze: (url: string) => void;
}

const Hero = ({ onAnalyze }: HeroProps) => {
  const [url, setUrl] = useState<string>("");
     const [showVideoModal, setShowVideoModal] = useState(false);
 
  // Separate ref for the background video
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  // Separate ref for the modal video
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

 
  // Auto-play modal video when modal opens
  useEffect(() => {
    if (showVideoModal && modalVideoRef.current) {
      modalVideoRef.current.play()?.catch(() => {
        // autoplay blocked, ignore
      });
    }
  }, [showVideoModal]);

  useEffect(() => {
  const video = bgVideoRef.current;
  if (!video) return;

  const tryPlay = async () => {
    try {
      video.muted = true; // IMPORTANT for autoplay policies
      await video.play();
    } catch (err) {
    }
  };

  // Try immediately
  tryPlay();

  // Also retry when metadata is ready
  const handleLoaded = () => {
    tryPlay();
  };

  video.addEventListener("loadeddata", handleLoaded);
  video.addEventListener("canplay", handleLoaded);

  return () => {
    video.removeEventListener("loadeddata", handleLoaded);
    video.removeEventListener("canplay", handleLoaded);
  };
}, []);


  const tokens =
    typeof window !== "undefined"
      ? localStorage.getItem("intellitokens")
      : null;

  const handleClick = () => {
    if (!url.trim()) return alert("Please enter a valid article URL.");
    onAnalyze(url);
  };


  const features = [
  {
    title: "AI Blog Writer",
    icon: <FaPenNib className="text-xs xl:text-sm text-[#EC4899]" />,
  },
  {
    title: "Wordpress SEO Plugin",
    icon: <FaWordpress className="text-xs xl:text-sm text-[#FFFFFF]" />,
  },
  {
    title: "Blog Automation",
    icon: <FaRobot className="text-xs xl:text-sm text-[#F59E0B]" />,
  },
];

   return (
  <>
    <div className="relative w-full overflow-hidden min-h-[80vh] flex items-center bg-black">
      <div className="relative z-10 w-full mx-auto py-10 lg:pb-14 pl-6 lg:pl-44">

        {/* FLEX ROW */}
        <div className="flex flex-col lg:flex-row items-stretch min-h-[80vh] gap-8">

          {/* LEFT SIDE (OVERLAPS VIDEO) */}
          <div className="
            flex-[1.8]
            text-white
            flex flex-col justify-center
            relative z-30
            lg:-mr-[420px]
          ">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2 mb-4 w-fit">
              <SiCodemagic className="text-[#A855F7]" />
              <span className="uppercase tracking-[0.2em] text-xs lg:text-base font-semibold">
                All-In-One AI SEO Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold !leading-[1.3] font-jakarta whitespace-nowrap relative z-40">
  <span className="gradient-text"> Super SEO Agents </span>
  <br/>
   All In One Place 
</h1>

            <p className="mt-8 text-[#D1D5DB] text-lg lg:text-2xl max-w-[900px] leading-relaxed">
              Automate technical SEO, content optimization, metadata generation,
              indexing management, with Super SEO agents built specifically for WordPress websites.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href={
                  tokens
                    ? `${process.env.NEXT_PUBLIC_FRONTEND}user/dashboard`
                    : `${process.env.NEXT_PUBLIC_FRONTEND}auth/login`
                }
                className="gradient-bg px-8 py-4 text-base lg:text-xl rounded-xl font-semibold flex items-center gap-3 hover:scale-105 duration-300"
              >
                Explore Agents
                <FaArrowRight />
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE (WIDER VIDEO - PREMIUM BLENDED STYLE) */}
<div className="
  flex-[3.5]
  relative
  flex
  items-stretch
  z-10
  mt-20
  lg:-ml-[180px]
">

  {/* OUTER SOFT WRAPPER (KEY FOR BLEND) */}
  <div className="
    relative
    w-full
    h-[620px]
    rounded-l-full
    overflow-hidden
    shadow-[0_40px_120px_rgba(0,0,0,0.6)]
  ">

    {/* RADIAL EDGE FADE LAYER (THIS CREATES INNER BLEND) */}
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute inset-0 bg-black/20" />

      {/* left fade into hero */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 via-20% to-transparent" />

  {/* extra edge reinforcement */}
  <div className="absolute left-0 top-0 h-full w-[20%] bg-black" />

      {/* top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

      {/* bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* soft vignette (VERY IMPORTANT for “InnerAI feel”) */}
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,transparent_40%,black_100%)] bg-black/30" />
    </div>

    {/* VIDEO */}
    <video
      ref={bgVideoRef}
      muted
      autoPlay
      loop
      playsInline
      preload="auto"
      controls={false}
      className="w-full h-full object-cover scale-[1.02]"
    >
      <source src="/HeroSection.mp4" type="video/mp4" />
    </video>

    {/* CENTER PLAY BUTTON */}
    <button
      onClick={() => setShowVideoModal(true)}
      className="
        absolute
        left-[70%] top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-24 h-24
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
        hover:scale-110 duration-300
        z-20
      "
    >
      <FaPlay className="text-white text-2xl ml-1" />
    </button>

  </div>
</div>

        </div>
      </div>
    </div>

    {/* FULLSCREEN VIDEO MODAL */}
   {showVideoModal && (
  <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-6">

    {/* VIDEO CARD */}
    <div className="relative w-full max-w-7xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl">

      {/* CLOSE BUTTON (INSIDE CARD) */}
      <button
        onClick={() => setShowVideoModal(false)}
        className="
          absolute
          top-4
          right-4
          z-50
          w-10
          h-10
          rounded-full
          bg-black/60
          backdrop-blur-md
          text-white
          flex
          items-center
          justify-center
          hover:scale-110
          transition
        "
      >
        <FaTimes />
      </button>

      {/* VIDEO */}
      <video
        ref={bgVideoRef}
        autoPlay
        loop
        controls
        playsInline
        preload="auto"
        disablePictureInPicture
        className="w-full h-full object-cover"
      >
        <source src="/HeroSection.mp4" type="video/mp4" />
      </video>

    </div>

  </div>
)}
  </>
);
};

export default Hero;
