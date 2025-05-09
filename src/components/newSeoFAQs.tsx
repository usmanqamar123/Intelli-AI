"use client";

import Accordion from "./Accordion";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

interface SeoFAQsProps {
  faqs?: AccordProps[];
}

const newSeoFAQs: React.FC<SeoFAQsProps> = ({ faqs = [] }) => {
  return (
    <section className="relative w-full bg-transparent font-inter flex flex-col justify-center items-center">
      <div
        className="container max-w-6xl flex flex-col items-center justify-center py-10 w-full"
        id="faqs"
      >
        {/* Header Section */}
        <div className="w-full flex flex-col items-center text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            <span className="gradient-span-1 relative">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </h2>
          <p className="text-base md:text-lg text-white mt-3 md:px-10">
            We&apos;re dedicated to assisting individuals interested in
            generating AI-driven content and images.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="w-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-10">
          <Accordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
};

export default newSeoFAQs;
