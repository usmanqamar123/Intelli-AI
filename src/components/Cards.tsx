"use client";

interface CardData {
  heading: string;
  paragraph: string;
}

const Cards = ({ data }: { data: CardData }) => {
  return (
    <div className="text-white p-5 basis-1/3 bg-[rgba(32,45,72,0.41)] overflow-hidden relative backdrop-blur-md shadow rounded-md h-[200px]">
      <div className="absolute -bottom-4 -right-4 bg-blue-500 w-28 h-28 blur-[80px]"></div>
      <div className="absolute -bottom-4 -right-4 bg-cyan-400 w-16 h-16 blur-[50px]"></div>

      <div className="flex items-center gap-1 justify-end text-center">
        <p className="bg-[#de1df5] text-white font-semibold pb-[1px] pt-1 px-2 md:text-[10px] text-[8px] rounded-full">
          New
        </p>
        <p className="bg-[#011dfd] text-white font-semibold pb-[1px] pt-1 px-2 md:text-[10px] text-[8px] rounded-full">
          Live Demo
        </p>
      </div>

      <div className="py-4">
        <h3 className="font-medium text-lg">{data.heading}</h3>
        <p className="text-sm font-extralight">{data.paragraph}</p>
      </div>
    </div>
  );
};

export default Cards;
