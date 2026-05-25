"use client";

import React, { memo, useCallback, useRef, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiChatBubbleLeftRight, HiUsers } from "react-icons/hi2";
import { BsQuote } from "react-icons/bs";
import {
  LuTrendingUp,
  LuClock,
  LuTrophy,
  LuUsers,
  LuFileText,
  LuPenSquare,
  LuBarChart3,
} from "react-icons/lu";
import type { IconType } from "react-icons";

/* ─── Data (edit copy / avatars here) ─── */

type Accent = "purple" | "blue" | "pink" | "green" | "gold";

const ACCENT: Record<Accent, { icon: string; bg: string; text: string }> = {
  purple: {
    icon: "text-[#A855F7]",
    bg: "bg-[#A855F7]/15",
    text: "text-[#A855F7]",
  },
  blue: {
    icon: "text-[#3B82F6]",
    bg: "bg-[#3B82F6]/15",
    text: "text-[#3B82F6]",
  },
  pink: {
    icon: "text-[#EC4899]",
    bg: "bg-[#EC4899]/15",
    text: "text-[#EC4899]",
  },
  green: {
    icon: "text-[#22C55E]",
    bg: "bg-[#22C55E]/15",
    text: "text-[#22C55E]",
  },
  gold: {
    icon: "text-[#FBBF24]",
    bg: "bg-[#FBBF24]/15",
    text: "text-[#FBBF24]",
  },
};

const CARDS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "SEO Specialist",
    avatar: "/Testimonial1.webp",
    quote:
      "IntelliWriter helped us scale content production without sacrificing quality. Our organic traffic jumped within weeks.",
    metricIcon: LuTrendingUp,
    metricLabel: "+171% Organic Traffic",
    metricAccent: "purple" as Accent,
    ring: "ring-[#A855F7]/60 shadow-[0_0_20px_rgba(168,85,247,0.45)]",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Content Creator",
    avatar: "/Testimonial2.webp",
    quote:
      "I used to spend entire weekends writing blogs. Now I draft, optimize, and publish in a single afternoon.",
    metricIcon: LuClock,
    metricLabel: "12+ Hours Saved Every Week",
    metricAccent: "blue" as Accent,
    ring: "ring-[#3B82F6]/60 shadow-[0_0_20px_rgba(59,130,246,0.45)]",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "/Testimonial3.webp ",
    quote:
      "The topical authority workflows are a game-changer. We rank for competitive keywords we never touched before.",
    metricIcon: LuTrophy,
    metricLabel: "Top 3 Rankings For 50+ Keywords",
    metricAccent: "pink" as Accent,
    ring: "ring-[#EC4899]/60 shadow-[0_0_20px_rgba(236,72,153,0.45)]",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Blogger & Founder",
    avatar: "/Testimonial4.webp",
    quote:
      "Publishing consistently was my bottleneck. IntelliWriter keeps my site fresh and my traffic climbing.",
    metricIcon: LuUsers,
    metricLabel: "100K+ Monthly Visitors",
    metricAccent: "blue" as Accent,
    ring: "ring-[#3B82F6]/60 shadow-[0_0_20px_rgba(59,130,246,0.45)]",
  },
] as const;

const STATS: { icon: IconType; label: string; accent: Accent }[] = [
  { icon: HiUsers, label: "25,000+ Active Users", accent: "purple" },
  { icon: LuFileText, label: "3M+ Words Generated", accent: "blue" },
  { icon: LuPenSquare, label: "1M+ Pieces of Content", accent: "pink" },
  { icon: LuBarChart3, label: "200K+ Reports Generated", accent: "green" },
  { icon: FaStar, label: "4.9/5 User Rating", accent: "gold" },
];

const STARS = Array.from({ length: 5 }, (_, i) => i);

/* ─── Sub-components ─── */

const Stars = memo(function Stars({ accent }: { accent: Accent }) {
  const starColor = ACCENT[accent].icon;
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {STARS.map((i) => (
        <FaStar key={i} className={`text-xs ${starColor}`} />
      ))}
    </div>
  );
});
Stars.displayName = "Stars";

type CardData = (typeof CARDS)[number];

const Card = memo(function Card({ data }: { data: CardData }) {
  const MetricIcon = data.metricIcon;
  const s = ACCENT[data.metricAccent];

  return (
    <article className="gradient-border-wrapper rounded-2xl bg-black/50 h-full flex flex-col min-w-[280px] sm:min-w-[300px] xl:min-w-0">
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <header className="flex items-center gap-3">
          <div
            className={`relative size-12 rounded-full ring-2 ${data.ring} shrink-0 overflow-hidden`}
          >
            <Image
              src={data.avatar}
              alt={data.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm md:text-base truncate">
              {data.name}
            </p>
            <p className="text-[#7DD3FC] text-xs md:text-sm">{data.role}</p>
            <div className="mt-1">
              <Stars accent={data.metricAccent} />
            </div>
          </div>
        </header>

        <blockquote className="mt-5 flex gap-2">
          <BsQuote
            className="text-xl shrink-0 rotate-180"
            style={{ color: data.metricAccent }}
            aria-hidden
          />
          <p className="text-white/80 text-sm leading-relaxed">{data.quote}</p>
        </blockquote>

        <footer className="mt-auto pt-5">
          <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 flex items-center gap-3">
            <span
              className={`size-9 rounded-full flex items-center justify-center shrink-0 ${s.bg}`}
            >
              <MetricIcon className={`text-lg ${s.icon}`} />
            </span>
            <span className={`text-sm font-medium ${s.text}`}>
              {data.metricLabel}
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
});

/* ─── Main section ─── */

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((i: number) => {
    setActive(i);
    (trackRef.current?.children[i] as HTMLElement | undefined)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let min = Infinity;
    Array.from(track.children).forEach((el, i) => {
      const node = el as HTMLElement;
      const d = Math.abs(node.offsetLeft + node.offsetWidth / 2 - center);
      if (d < min) {
        min = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  return (
    <section className="relative w-full max-w-[1240px] mx-auto font-geist px-4 md:px-6 xl:px-0 py-14 md:py-20 z-10 overflow-hidden">
      <Image
        src="/purple-spot.webp"
        alt=""
        width={200}
        height={200}
        className="absolute top-0 lg:top-24 -left-16 opacity-70 pointer-events-none -z-[1]"
        aria-hidden
      />

      <Image
        src="/blue-spot.webp"
        alt=""
        width={200}
        height={200}
        className="absolute top-0 lg:top-24 -right-16 opacity-70 pointer-events-none -z-[1]"
        aria-hidden
      />

      <Image
        src="/Quote-Purple.svg"
        alt=""
        width={120}
        height={160}
        className="absolute top-0 lg:top-24 left-0 md:left-16 opacity-70 pointer-events-none -z-[1]"
        aria-hidden
      />

      <Image
        src="/Quote-Blue.svg"
        alt=""
        width={120}
        height={160}
        className="absolute top-0 lg:top-24 right-0 md:right-16 opacity-70 pointer-events-none -z-[1]"
        aria-hidden
      />

      <header className="relative flex flex-col items-center text-center gap-4 mb-6 md:mb-8 max-w-4xl mx-auto">
        {/* <Image src="/home3/testimonials/quote-decoration-left.svg" alt="" width={100} height={84} className="hidden lg:block absolute -left-4 xl:-left-16 top-8 opacity-80 pointer-events-none" aria-hidden />
        <Image src="/home3/testimonials/quote-decoration-right.svg" alt="" width={100} height={84} className="hidden lg:block absolute -right-4 xl:-right-16 top-8 opacity-80 pointer-events-none" aria-hidden /> */}

        <p className="gradient-border-wrapper rounded-full px-5 py-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/90 uppercase flex items-center gap-2">
          <HiChatBubbleLeftRight className="text-[#A855F7] text-base shrink-0" />
          <span className="gradient-text-new">Trusted by Thousands</span>
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[3.25rem] font-bold font-jakarta text-white !leading-tight px-2">
          Loved by Marketers, <br />
          <span className="gradient-text text-transparent bg-clip-text">
            Writers &amp; Business Owners
          </span>
        </h2>

        <p className="text-sm md:text-base text-white/60 max-w-xl">
          See how IntelliWriter is helping people create better content, rank
          higher, and save hours of work every day.
        </p>
      </header>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex xl:grid xl:grid-cols-4 gap-4 md:gap-5 overflow-x-auto xl:overflow-visible snap-x snap-mandatory scroll-smooth pb-2 xl:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="snap-center shrink-0 w-[85vw] sm:w-[320px] xl:w-auto xl:shrink"
          >
            <Card data={card} />
          </div>
        ))}
      </div>

      <nav
        className="flex xl:hidden justify-center gap-2 mt-6"
        aria-label="Testimonial pagination"
      >
        {CARDS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Testimonial ${i + 1}`}
            aria-current={active === i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-[#A855F7]" : "w-2 bg-white/25 hover:bg-white/40"}`}
          />
        ))}
      </nav>

      <div className="gradient-border-wrapper border-[0.5px] rounded-2xl mt-6 md:mt-8 bg-black/50 overflow-hidden">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STATS.map(({ icon: Icon, label, accent }) => {
            const s = ACCENT[accent];
            return (
              <li
                key={label}
                className="flex items-center justify-center sm:justify-start gap-3 px-5 py-5 md:py-6"
              >
                <span
                  className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${s.bg}`}
                >
                  <Icon className={`text-lg ${s.icon}`} />
                </span>
                <span className="text-sm md:text-[15px] font-medium text-white whitespace-nowrap">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
