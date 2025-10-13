"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SquareImg from "../../../public/seo-artilce-writer/Square.png";

export default function HeroAnimation() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const animationFrame = useRef<number | null>(null);

  const eclipses = [
    {
      className: "eclipse eclipse-1",
      width: 720,
      height: 720,
      bgColor: "#7500FF",
      blur: 180,
      left: "0",
      top: "280px",
      opacity: 0.7,
      rotate: "34deg",
      offsetX: -200,
      offsetY: -100,
    },
    {
      className: "eclipse eclipse-2",
      width: 400,
      height: 400,
      bgColor: "#DF1DF7",
      blur: 180,
      left: "-190px",
      top: "100px",
      opacity: 0.7,
      rotate: "24deg",
      offsetX: 150,
      offsetY: -300,
    },
    {
      className: "eclipse eclipse-3",
      width: 600,
      height: 600,
      bgColor: "#7500FF",
      blur: 180,
      right: "-300px",
      top: "233px",
      opacity: 0.7,
      rotate: "34deg",
      offsetX: 300,
      offsetY: 0,
    },
    {
      className: "eclipse eclipse-4",
      width: 590,
      height: 590,
      bgColor: "#208EFB",
      blur: 180,
      right: "-156px",
      top: "-256px",
      opacity: 0.7,
      rotate: "41deg",
      offsetX: -150,
      offsetY: 300,
    },
    {
      className: "eclipse eclipse-5",
      width: 590,
      height: 590,
      bgColor: "#0009FF",
      blur: 180,
      right: "300px",
      top: "50%",
      opacity: 0.7,
      rotate: "41deg",
      offsetX: 0,
      offsetY: -450,
    },
  ];

  const animateShapes = () => {
    const center = getCenter();

    eclipses.forEach((e, i) => {
      const el = shapeRefs.current[i];
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const currentX = rect.left + rect.width / 2;
      const currentY = rect.top + rect.height / 2;

      const targetX = center.x + e.offsetX;
      const targetY = center.y + e.offsetY;

      const dx = (targetX - currentX) * 0.05;
      const dy = (targetY - currentY) * 0.05;

      el.style.transform = `translate(${dx}px, ${dy}px) rotate(${e.rotate})`;
    });

    animationFrame.current = requestAnimationFrame(animateShapes);
  };

  const getCenter = () => {
    const container = containerRef.current;
    if (!container) return { x: 0, y: 0 };
    const rect = container.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 + 80,
      y: rect.top + rect.height / 2 + 50,
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.01 }
    );

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  useEffect(() => {
    if (animate) {
      animationFrame.current = requestAnimationFrame(animateShapes);
    }
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [animate]);

  return (
    <main className="relative w-full -z-10">
      <div
        className="absolute w-full flex flex-col justify-center items-center perspective-[1000px]"
        ref={containerRef}
      >
        {/* <Image
          src="/seo-artilce-writer/Square.png"
          width={986}
          height={433}
          alt="Square"
          priority // ✅ Improves LCP
        /> */}
        <Image src={SquareImg} alt="Square" priority placeholder="blur" />

        {eclipses.map((e, i) => (
          <div
            key={i}
            ref={(el) => (shapeRefs.current[i] = el)}
            className={`${e.className} absolute rounded-full`}
            style={{
              width: e.width,
              height: e.height,
              backgroundColor: e.bgColor,
              filter: `blur(${e.blur}px)`,
              left: e.left,
              right: e.right,
              top: e.top,
              opacity: e.opacity,
              transform: `rotate(${e.rotate})`,
              transition: "transform 1.5s ease-out",
            }}
          />
        ))}
      </div>
    </main>
  );
}
