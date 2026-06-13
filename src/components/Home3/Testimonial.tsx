"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import {
  ChartNoAxesCombined,
  Clock3,
  FileText,
  MessageCircleMore,
  PencilLine,
  Quote,
  Star,
  Trophy,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  SectionBadge,
  TrustBarCell,
  TrustBarGrid,
  panelBorder,
  sectionSubtextClass,
} from "./SectionBadge";

type Accent = "purple" | "blue" | "pink" | "green" | "gold";

const ACCENT = {
  purple: {
    ring: "ring-2 ring-[#a855f7]/55 shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    star: "text-[#a855f7]",
    quote: "text-[#9333ea]",
    metricText: "text-[#c084fc]",
    metricIcon: "text-[#a855f7]",
    metricBorder: "border-[#9333ea]/30",
    metricBg: "bg-[#12081f]/90",
    iconRing: "border-[#a855f7]/45",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(168,85,247,0.18)_0%,_rgba(59,18,109,0.12)_55%,_transparent_100%)]",
  },
  blue: {
    ring: "ring-2 ring-[#3b82f6]/55 shadow-[0_0_20px_rgba(59,130,246,0.22)]",
    star: "text-[#3b82f6]",
    quote: "text-[#2563eb]",
    metricText: "text-[#60a5fa]",
    metricIcon: "text-[#3b82f6]",
    metricBorder: "border-[#3b82f6]/30",
    metricBg: "bg-[#08101f]/90",
    iconRing: "border-[#3b82f6]/45",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(59,130,246,0.18)_0%,_rgba(16,45,122,0.12)_55%,_transparent_100%)]",
  },
  pink: {
    ring: "ring-2 ring-[#ec4899]/55 shadow-[0_0_20px_rgba(236,72,153,0.22)]",
    star: "text-[#ec4899]",
    quote: "text-[#db2777]",
    metricText: "text-[#f472b6]",
    metricIcon: "text-[#ec4899]",
    metricBorder: "border-[#ec4899]/30",
    metricBg: "bg-[#1a0814]/90",
    iconRing: "border-[#ec4899]/45",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(236,72,153,0.18)_0%,_rgba(106,19,71,0.12)_55%,_transparent_100%)]",
  },
  green: {
    ring: "ring-2 ring-[#22c55e]/55 shadow-[0_0_20px_rgba(34,197,94,0.2)]",
    star: "text-[#22c55e]",
    quote: "text-[#16a34a]",
    metricText: "text-[#4ade80]",
    metricIcon: "text-[#22c55e]",
    metricBorder: "border-[#22c55e]/30",
    metricBg: "bg-[#061410]/90",
    iconRing: "border-[#22c55e]/45",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(34,197,94,0.18)_0%,_rgba(11,81,43,0.12)_55%,_transparent_100%)]",
  },
  gold: {
    ring: "ring-2 ring-[#f59e0b]/55 shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    star: "text-[#f59e0b]",
    quote: "text-[#d97706]",
    metricText: "text-[#fbbf24]",
    metricIcon: "text-[#f59e0b]",
    metricBorder: "border-[#f59e0b]/30",
    metricBg: "bg-[#141008]/90",
    iconRing: "border-[#f59e0b]/45",
    iconBg:
      "bg-[radial-gradient(circle,_rgba(245,158,11,0.18)_0%,_rgba(99,67,10,0.12)_55%,_transparent_100%)]",
  },
} as const;

const TESTIMONIALS = [
  {
    id: 1,
    name: "James Carter",
    role: "SEO Specialist",
    avatar: "/Testimonial1.webp",
    accent: "purple" as Accent,
    quote:
      "IntelliWriter has completely changed the way I create and optimize content. My rankings and traffic have never been better!",
    metricValue: "+171%",
    metricLabel: "Organic Traffic",
    metricIcon: TrendingUp,
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Content Creator",
    avatar: "/Testimonial2.webp",
    accent: "blue" as Accent,
    quote:
      "The AI writing is incredible! It's fast, accurate, and the content sounds so natural. It saves me hours every single day.",
    metricValue: "12+ Hours",
    metricLabel: "Saved Every Week",
    metricIcon: Clock3,
  },
  {
    id: 3,
    name: "Daniel Thomas",
    role: "Agency Owner",
    avatar: "/Testimonial3.webp",
    accent: "pink" as Accent,
    quote:
      "From keyword research to auto publishing, everything is automated. My team is more productive and our clients love the results.",
    metricValue: "Top 3 Rankings",
    metricLabel: "For 50+ Keywords",
    metricIcon: Trophy,
  },
  {
    id: 4,
    name: "Olivia Bennett",
    role: "Blogger",
    avatar: "/Testimonial4.webp",
    accent: "blue" as Accent,
    quote:
      "IntelliWriter helped me grow my blog from 0 to 100K+ monthly visitors. The automation and SEO tools are a game changer!",
    metricValue: "100K+",
    metricLabel: "Monthly Visitors",
    metricIcon: Users,
  },
] as const;

const STATS = [
  {
    label: "25,000+",
    sublabel: "Active Users",
    accent: "purple" as Accent,
    Icon: Users,
  },
  {
    label: "3M+",
    sublabel: "Words Generated",
    accent: "blue" as Accent,
    Icon: FileText,
  },
  {
    label: "1M+",
    sublabel: "Pieces of Content",
    accent: "pink" as Accent,
    Icon: PencilLine,
  },
  {
    label: "200K+",
    sublabel: "SEO Reports Generated",
    accent: "green" as Accent,
    Icon: ChartNoAxesCombined,
  },
  {
    label: "4.9/5",
    sublabel: "User Rating",
    accent: "gold" as Accent,
    Icon: Star,
  },
] as const;

const STAR_SLOTS = Array.from({ length: 5 }, (_, index) => index);

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  const accent = ACCENT[testimonial.accent];
  const MetricIcon = testimonial.metricIcon;

  return (
    <article
      className={`relative flex h-full min-h-[400px] flex-col rounded-[20px] ${panelBorder} bg-[#070a14]/96 p-5 md:min-h-[420px] md:p-6`}
    >
      <header className="flex items-center gap-3.5 md:gap-4">
        <div
          className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full md:h-[76px] md:w-[76px] ${accent.ring}`}
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="76px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-[1.15rem] font-semibold text-white md:text-[1.2rem]">
            {testimonial.name}
          </h3>
          <p className="mt-0.5 text-[0.9rem] text-[#94a3b8] md:text-[0.95rem]">
            {testimonial.role}
          </p>
          <div className="mt-3 flex items-center gap-0.5">
            {STAR_SLOTS.map((slot) => (
              <Star
                key={slot}
                size={16}
                fill="currentColor"
                className={accent.star}
                strokeWidth={1.8}
              />
            ))}
          </div>
        </div>
      </header>

      <div className="mt-7 flex flex-1 gap-3">
        <Quote
          size={32}
          fill="currentColor"
          strokeWidth={0}
          className={`mt-0.5 shrink-0 rotate-180 ${accent.quote}`}
        />
        <p className="text-[0.98rem] leading-[1.7] text-white/88 md:text-[1rem] md:leading-[1.75]">
          {testimonial.quote}
        </p>
      </div>

      <footer className="mt-6">
        <div
          className={`flex min-h-[92px] items-center gap-3 rounded-[16px] border px-3.5 py-3 md:gap-4 md:px-4 ${accent.metricBorder} ${accent.metricBg}`}
        >
          <span
            className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-2 md:h-[54px] md:w-[54px] ${accent.iconRing} ${accent.iconBg}`}
          >
            <MetricIcon
              size={24}
              strokeWidth={2.1}
              className={accent.metricIcon}
            />
          </span>

          <div className="min-w-0 flex-1">
            <p
              className={`text-[1.1rem] font-semibold leading-tight md:text-[1.25rem] ${accent.metricText}`}
            >
              {testimonial.metricValue}
            </p>
            <p className="mt-1 text-[0.85rem] leading-snug text-white/82 md:text-[0.92rem]">
              {testimonial.metricLabel}
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
    (trackRef.current?.children[index] as HTMLElement | undefined)?.scrollIntoView(
      {
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      },
    );
  }, []);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let minDistance = Infinity;

    Array.from(track.children).forEach((child, index) => {
      const node = child as HTMLElement;
      const distance = Math.abs(
        node.offsetLeft + node.offsetWidth / 2 - center,
      );
      if (distance < minDistance) {
        minDistance = distance;
        best = index;
      }
    });

    setActive(best);
  }, []);

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1240px] overflow-hidden px-4 py-14 font-geist md:px-6 md:py-16 xl:px-0 xl:py-20">
      <Image
        src="/purple-spot.webp"
        alt=""
        width={220}
        height={220}
        className="pointer-events-none absolute left-0 top-10 -z-[1] opacity-70"
        aria-hidden
      />
      <Image
        src="/blue-spot.webp"
        alt=""
        width={220}
        height={220}
        className="pointer-events-none absolute right-0 top-10 -z-[1] opacity-70"
        aria-hidden
      />
      <Image
        src="/Quote-Purple.svg"
        alt=""
        width={118}
        height={160}
        className="pointer-events-none absolute left-4 top-28 -z-[1] hidden opacity-85 md:block xl:left-10"
        aria-hidden
      />
      <Image
        src="/Quote-Blue.svg"
        alt=""
        width={118}
        height={160}
        className="pointer-events-none absolute right-4 top-28 -z-[1] hidden opacity-85 md:block xl:right-10"
        aria-hidden
      />

      <header className="relative z-10 mx-auto mb-9 flex max-w-5xl flex-col items-center gap-4 text-center md:mb-11">
        <SectionBadge
          icon={
            <MessageCircleMore
              size={15}
              className="shrink-0 text-[#60a5fa]"
              fill="#60a5fa"
            />
          }
        >
          <span className="text-white/95">Trusted by Thousands</span>
        </SectionBadge>

        <h2 className="px-2 font-jakarta text-[2.35rem] font-bold leading-[1.02] text-white sm:text-[2.9rem] md:text-[3.5rem] lg:text-[4.3rem]">
          Loved by Marketers,
          <br />
          <span className="gradient-text bg-clip-text text-transparent">
            Writers &amp; Business Owners
          </span>
        </h2>

        <p className={`${sectionSubtextClass} max-w-[44rem]`}>
          See how IntelliWriter is helping people create better content, rank
          higher, and save hours of work every day.
        </p>
      </header>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="relative z-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 xl:grid-cols-4"
      >
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-[min(88vw,340px)] shrink-0 snap-center sm:w-[min(88vw,352px)] lg:w-auto lg:max-w-none lg:shrink"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      <nav
        className="relative z-10 mt-7 flex justify-center gap-3 lg:hidden"
        aria-label="Testimonial pagination"
      >
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Testimonial ${index + 1}`}
            aria-current={active === index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              active === index
                ? "h-3 w-3 bg-[#a855f7] shadow-[0_0_18px_rgba(168,85,247,0.55)]"
                : "h-3 w-3 bg-white/20 hover:bg-white/35"
            }`}
          />
        ))}
      </nav>
    </section>
  );
}
