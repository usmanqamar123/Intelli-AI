import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";

interface AccordProps {
  id: number;
  question: string;
  answer: string;
}

const Accordion = ({ faqs }: { faqs?: AccordProps[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center w-full">
      {faqs?.map((accord, index) => (
        <div
          key={accord.id}
          className={`w-full my-1 overflow-hidden rounded-md border border-[#FFFFFF14] hover:bg-white/10 ${
            openIndex === index ? "bg-white/10" : "bg-white/5"
          } transition duration-500`}
        >
          {/* Accordion Header */}
          <div
            className="flex items-center justify-between w-full p-6 py-4 cursor-pointer rounded-sm transition-all duration-300 ease-in-out"
            onClick={() => toggleAccordion(index)}
            role="button"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg sm:text-base md:text-xl font-medium text-white">
              {accord.question}
            </span>
            <div className="flex items-center">
              {openIndex === index ? (
                <BsDash className="text-2xl md:text-3xl text-white" />
              ) : (
                <BsPlus className="text-2xl md:text-3xl text-white" />
              )}
            </div>
          </div>

          {/* Accordion Content */}
          <div
            className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <p className="text-lg md:text-xl font-light text-white border-t border-white/30 mt-2 py-4">
              {accord.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
