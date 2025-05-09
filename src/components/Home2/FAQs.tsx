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
      className="xl:px-12 md:px-4 px-0 pb-10 w-full container faqs"
      id="faqs"
    >
      <div className="py-10 px-3">
        <h2 className="lg:text-6xl text-4xl font-normal relative lg:px-4 md:px-2 p-4">

          <span className="gradient-span-1 text-white relative font-[600]">
            Got Questions? We’ve Got Answers!
          </span>
        </h2>

        <p className="text-justify lg:text-start md:px-6 w-full !text-white text-base md:text-[21px] font-[400]">
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
