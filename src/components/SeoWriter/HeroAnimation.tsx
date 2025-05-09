"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroAnimation() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Compute center of container with offset
  const getCenter = () => {
    const container = containerRef.current;
    if (!container) return { x: 0, y: 0 };

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return {
      x: centerX + 80, // Offset 80px right
      y: centerY + 50, // Offset 50px down
    };
  };

  // Eclipse data with original positions and unique target offsets (halved)
  const eclipses = [
    {
      className: "eclipse eclipse-1",
      width: "720px",
      height: "720px",
      bgColor: "#7500FF",
      blur: "180px",
      left: "0",
      top: "280px",
      opacity: "0.7",
      rotate: "34deg",
      targetOffsetX: -200,
      targetOffsetY: -100,
    },
    {
      className: "eclipse eclipse-2",
      width: "400px",
      height: "400px",
      bgColor: "#DF1DF7",
      blur: "180px",
      left: "-190px",
      top: "100px",
      opacity: "0.7",
      rotate: "24deg",
      targetOffsetX: 150,
      targetOffsetY: -300,
    },
    {
      className: "eclipse eclipse-3",
      width: "600px",
      height: "600px",
      bgColor: "#7500FF",
      blur: "180px",
      right: "-300px",
      top: "233px",
      opacity: "0.7",
      rotate: "34deg",
      targetOffsetX: 300,
      targetOffsetY: 0,
    },
    {
      className: "eclipse eclipse-4",
      width: "590px",
      height: "590px",
      bgColor: "#208EFB",
      blur: "180px",
      right: "-156px",
      top: "-256px",
      opacity: "0.7",
      rotate: "41deg",
      targetOffsetX: -150,
      targetOffsetY: 300,
    },
    {
      className: "eclipse eclipse-5",
      width: "590px",
      height: "590px",
      bgColor: "#0009FF",
      blur: "180px",
      right: "300px",
      top: "50%",
      opacity: "0.7",
      rotate: "41deg",
      targetOffsetX: 0,
      targetOffsetY: -450,
    },
  ];

  // Compute translation to unique target positions around displaced center
  const getTranslateToCenter = (index: number) => {
    if (!animate || !shapeRefs.current[index]) {
      return {
        translateX: 0,
        translateY: 0,
      };
    }
    const center = getCenter();
    const shape = shapeRefs.current[index];
    const shapeRect = shape!.getBoundingClientRect();

    const shapeCenter = {
      x: shapeRect.left + shapeRect.width / 2,
      y: shapeRect.top + shapeRect.height / 2,
    };

    // Unique target position for each eclipse with reduced distance
    const targetX = center.x + eclipses[index].targetOffsetX;
    const targetY = center.y + eclipses[index].targetOffsetY;

    // Linear interpolation (lerp) for smooth movement
    const progress = Math.min((Date.now() - 500) / 3720, 1); // 500ms delay, 3.72s duration for 6.2s total
    const dx = (targetX - shapeCenter.x) * progress;
    const dy = (targetY - shapeCenter.y) * progress;

    return {
      translateX: dx,
      translateY: dy,
    };
  };

  return (
    <main className="relative w-full -z-10">
      <div
        className="absolute w-full flex flex-col justify-center items-center perspective-[1000px]"
        ref={containerRef}
      >
        <Image src={"/seo-artilce-writer/Square.png"} width={986} height={433} alt="Square" />
        {eclipses.map((eclipse, index) => {
          const { translateX, translateY } = getTranslateToCenter(index);
          return (
            <div
              key={index}
              ref={(el) => {
                shapeRefs.current[index] = el;
              }}
              className={`${eclipse.className} absolute rounded-full`}
              data-animate={animate}
              style={
                {
                  width: eclipse.width,
                  height: eclipse.height,
                  backgroundColor: eclipse.bgColor,
                  filter: `blur(${eclipse.blur})`,
                  left: eclipse.left,
                  right: eclipse.right,
                  top: eclipse.top,
                  opacity: eclipse.opacity,
                  transform: `rotate(${eclipse.rotate})`,
                  "--translate-x": `${translateX}px`,
                  "--translate-y": `${translateY}px`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
    </main>
  );
}
