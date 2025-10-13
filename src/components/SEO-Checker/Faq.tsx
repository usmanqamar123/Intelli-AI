// src/components/Faq.tsx
"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const QA_LIST: QA[] = [
  {
    q: "What does this tool do?",
    a: "It scans any article or blog and gives you a detailed SEO audit.",
  },
  {
    q: "How quickly do I get the audit?",
    a: "Your report is generated instantly after you paste the link or text.",
  },
  {
    q: "What areas does it analyze?",
    a: "It checks keywords, readability, engagement, and overall SEO health.",
  },
  {
    q: "Do I need to be an SEO expert to use it?",
    a: "No, the tool is made for everyone — simple and easy to understand.",
  },
  {
    q: "Can this tool impact my search visibility?",
    a: "Yes, it highlights SEO factors that influence how your content performs online.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpen((prev) => (prev === i ? null : i));
  };

  return (
    <section className="w-full relative bg-[#0F062C] py-14 px-6">
      <div className="mx-auto w-full max-w-4xl">
        {/* Heading */}
        <h2 className="text-center font-aronesans text-[28px] md:text-[34px] font-bold leading-tight text-white">
          Got Questions?{" "}
          <span className="bg-gradient-to-r from-[#BFAAFF] via-[#F64CFF] to-[#FFC553] bg-clip-text text-transparent">
            We’ve Got Answers!
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-2 text-center font-aronesans text-[14px] md:text-[15px] text-white/80">
          We’re dedicated to assisting individuals who want to understand their blog’s SEO performance.
        </p>

        {/* FAQ list */}
        <div className="mt-8 space-y-4">
          {QA_LIST.map((item, i) => (
            <div
              key={item.q}
              className="rounded-[8px] border bg-transparent px-4 py-3 text-left [border-image:linear-gradient(90deg,#6B41FF,#F64CFF,#FFC553)_1]"
            >
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between"
              >
                <span className="font-aronesans text-[15px] font-bold text-white">
                  {item.q}
                </span>
                <span
                  className="grid h-6 w-6 place-items-center text-white"
                  aria-hidden="true"
                >
                  {open === i ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="1.5" y="5.25" width="9" height="1.5" rx="0.75" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="1.5" y="5.25" width="9" height="1.5" rx="0.75" fill="currentColor" />
                      <rect x="5.25" y="1.5" width="1.5" height="9" rx="0.75" fill="currentColor" />
                    </svg>
                  )}
                </span>
              </button>

              {/* Answer */}
              {open === i && (
                <div className="mt-3 text-white/85">
                  <p className="font-inter text-[14px] leading-[22px]">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
