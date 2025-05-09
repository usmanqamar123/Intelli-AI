import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightFill } from "react-icons/ri";

const WhyIntelli = () => {

    const Why =[
        {
            id:0,
            Percentage:"95%+",
            title: "Human-Like Content Accuracy",
            desc: "Outputs crafted to pass AI detection and feel naturally written."
        },
        {
            id:1,
            Percentage:"80%",
            title: "Faster Content Production",
            desc: "Slash content creation time and publish at scale."
        },
        {
            id:2,
            Percentage:"3k+",
            title: "Businesses & Creators Served",
            desc: "From startups to agencies, trusted worldwide."
        },
        {
            id:3,
            Percentage:"95%",
            title: "Customer Satisfaction Rate",
            desc: "Users love the quality, ease, and results they achieve with IntelliWriter."
        },
    ]
  return (
    <div className="relative w-full font-inter py-16 px-4">

{/* GRADIENT */}
        {/* <div className="absolute top-16 tight-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]"></div>
        <div className="absolute top-24 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
        <div className="absolute top-0 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px]"></div>
        <div className="absolute top-16 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
        <div className="absolute top-24 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div> */}


<div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>

      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold max-w-3xl">
        Why Top Marketers Choose
        <br />
          <i
            className="gradient-text not-italic text-transparent bg-clip-text"
          >
            IntelliWriter
          </i>
        </h2>
      </div>

        <div className="w-full max-w-6xl mt-16 mx-auto flex flex-col gap-12 items-center justify-center">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white mx-auto px-10 md:px-0">
{Why.map((item) => (
    <div
    key={item.id}
    className="flex flex-col gap-3 !text-white"
    >
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{item.Percentage}</h1>
<p className="text-lg md:text-xl !text-white">{item.title}</p>
<p>{item.desc}</p>
    </div>
))

}
    

       </div>
        </div>
    </div>
  );
};

export default WhyIntelli;
