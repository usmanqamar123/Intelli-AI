"use client";

import Accordion from "./Accordion";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

const FAQs = ({ faqs }: { faqs?: AccordProps[] }) => {
  return (
    <div
      className="xl:px-16 md:px-6 px-0 pb-10 w-full container faqs"
      id="faqs"
    >
      <div className="py-10">
        <h2 className="lg:text-6xl text-4xl font-normal relative lg:p-10 md:p-6 p-4">
          <span className="gradient-span-1 text-white relative font-[600]">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </h2>

        <p className="text-center md:text-start md:px-10  w-full md:w-[] !text-white text-base md:text-[21px] font-[400]">
          We&apos;re dedicated to assisting individuals interested in generating
          AI-driven content and images.
        </p>
      </div>

      <div className="w-full flex items-center justify-center lg:px-10 md:px-6 px-4">
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FAQs;
