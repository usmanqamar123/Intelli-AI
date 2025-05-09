"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FlashSaleTimer = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [shake, setShake] = useState(false);

  const tokens =
    typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 3000);

    return () => clearInterval(shakeInterval);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const calculateTimeLeft = (): TimeLeft | {} => {
    const now = new Date();
    const cycleDuration = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
    const cycleStart = new Date(
      now.getTime() - (now.getTime() % cycleDuration)
    );
    const cycleEnd = new Date(cycleStart.getTime() + cycleDuration);
    const difference = cycleEnd.getTime() - now.getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),

        // seconds: Math.floor((difference / 1000) % 60),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = (timeLeft as TimeLeft)[interval as keyof TimeLeft];
    if (value === undefined) return;

    timerComponents.push(
      <div key={interval} className="flex space-x-1">
        <p className="border border- !text-black bg-white px-1">
          {Math.floor(value / 10)}
        </p>
        <p className="border border- !text-black bg-white px-1">{value % 10}</p>
      </div>
    );
  });

  return (
    <>
      {isVisible && (
        <div
          ref={sidebarRef}
          className={`fixed right-2 bottom-2 md:right-4 md:bottom-4 lg:right-2 lg:bottom-2 rounded-lg px-4 py-2 text-white bg-[#6a25bf] flex items-center justify-center z-50 w-80 md:w-96 lg:w-[24rem] ${
            shake ? "shake" : ""
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-8 h-8 rounded-full bg-[#ffffff33] border-2 border-[#ffffff50] top-10 left-8"></div>
            <div className="absolute w-12 h-12 rounded-full border-dotted border-4 border-[#ffffff33] top-10 right-8"></div>
            <div className="absolute w-10 h-10 bg-[#ffffff33] clip-polygon top-36 left-10"></div>
            <div className="absolute w-16 h-16 rounded-full bg-[#ffffff20] border-4 border-[#ffffff40] bottom-3 right-10"></div>
          </div>

          <div className="relative flex flex-col justify-center items-center w-full">
            <button
              onClick={closePopup}
              className="absolute top-1 right-0 text-white bg-[#cd4db8] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
            >
              &times;
            </button>
            <h1
              className="!text-white font-bold text-[14px] md:text-[18px] lg:text-[20px] text-center"
              style={{
                color: "#ffffff",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              FLASH SALE
            </h1>

            <div className="border-grsdient-span-1 border-dotted bg-[#04234f] border-2 px-16 py-1 my-3">
              <p className="!text-white text-sm md:text-base lg:text-lg">
                30% OFF
              </p>
            </div>
            <div className="text-center text-xs md:text-sm">
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {/* Column for Days */}
                <div className="flex flex-col items-center">
                  <p className="!text-white">Days</p>
                  <div className="flex justify-center items-center space-x-1">
                    {timerComponents[0]}
                  </div>
                </div>

                {/* Column for Hours */}
                <div className="flex flex-col items-center">
                  <p className="!text-white">Hours</p>
                  <div className="flex justify-center items-center space-x-1 !text-white">
                    {timerComponents[1]}
                  </div>
                </div>

                {/* Column for Minutes */}
                <div className="flex flex-col items-center">
                  <p className="!text-white">Minutes</p>
                  <div className="flex justify-center items-center space-x-1">
                    {timerComponents[2]}{" "}
                  </div>
                </div>

                {/* Column for Seconds */}
                <div className="flex flex-col items-center">
                  <p className="!text-white">Seconds</p>
                  <div className="flex justify-center items-center space-x-1">
                    {timerComponents[3]}
                  </div>
                </div>
              </div>

              {/* Handle Time's Up scenario */}
              {!timerComponents.length && (
                <div className="mt-2 text-white">Time&apos;s up!</div>
              )}
            </div>
            <Link href={tokens ? "/user/plans" : "/auth/register"}>
              <button className="!py-1 !px-4 md:!px-6 lg:!px-8 my-3 !text-xs !text-white bg-[#cd4db8]">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FlashSaleTimer;
