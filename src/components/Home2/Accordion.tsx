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
    <div className="flex flex-col items-center">
      {faqs?.map((accord, index) => (
        <div
          key={index}
          className={`w-full my-1 overflow-hidden rounded-md border border-[#FFFFFF14] hover:bg-white/10 ${
            openIndex === index ? "bg-white/10" : "bg-white/5"
          } transition duration-500`}
        >
          <div
            className="rounded-sm w-full p-6 py-4 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center w-full justify-between">
              <span className="sm:text-base font-medium md:text-xl text-lg  text-white">
                {accord.question}
              </span>
              <div className="flex items-center">
                {openIndex === index ? (
                  <BsDash className="text-white md:text-3xl text-2xl mr-2" />
                ) : (
                  <BsPlus className="text-white md:text-3xl text-2xl mr-2" />
                )}
              </div>
            </div>
          </div>

          <div
            className={`px-8 drop-shadow-lg transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[1000px]" : "max-h-0"
            } overflow-hidden`}
          >
            <p className="text-white border-t border-t-white/30 font-light md:text-xl text-lg mt-2 py-4">
              {accord.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
