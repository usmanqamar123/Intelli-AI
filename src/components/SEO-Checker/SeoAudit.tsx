"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SeoAudit() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let angle = 0;
    let direction = 1; // 1 = forward, -1 = backward

    const interval = setInterval(() => {
      if (wrapperRef.current) {
        angle += 0.3 * direction; // tilt speed
        if (angle >= 15 || angle <= -15) {
          direction *= -1; // reverse direction at limits
        }
        wrapperRef.current.style.transform = `rotate(${angle}deg)`;
      }
    }, 30); // smoother animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full bg-[#0E032D] flex justify-center items-center py-14">
      {/* Outer wrapper with gradient + glow + thinner border */}
      <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 shadow-[0_0_25px_rgba(255,100,200,0.6)]">
        <div className="bg-[#29185C] rounded-xl px-10 py-12 max-w-6xl w-full">
          
          {/* 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Heading + Features */}
            <div className="space-y-6 text-white/85">
              <h3 className="text-3xl font-bold mb-6 
                bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                Understand Your Competitor’s<br/> SEO and Backlinking Profile
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✔</span>
                <p>Instantly view keyword rankings with real-time updates</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✔</span>
                <p>Analyze competitor SEO strategies for deeper insights</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✔</span>
                <p>Track article performance trends across multiple channels</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✔</span>
                <p>Unlock 55+ advanced SEO tools for smarter optimization</p>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                  <Link
              href={`${process.env.NEXT_PUBLIC_APP}auth/register`}
              >
                <button className="px-8 py-3 rounded-lg font-semibold 
                  bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 text-white shadow-md">
                  Create Free Account
                </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Tilting Stats Image */}
            <div className="flex justify-center">
              <div ref={wrapperRef} className="rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                <Image
                  src="/seo-checker/seoanalyzerimages/stats.png"
                  alt="SEO Stats"
                  width={340}
                  height={340}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
