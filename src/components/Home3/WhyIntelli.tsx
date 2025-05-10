import React from "react";

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
    <div className="relative w-full max-w-[1024px] font-inter md:my-4 py-10 md:py-12 px-4 xl:px-0">

{/* GRADIENT */}
<div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[130px]"></div>

      <div className="flex flex-col justify-center items-center text-center leading-relaxed">
  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold max-w-3xl mb-2 leading-relaxed">
    Why Top Marketers Choose
    <br />
    <span className="gradient-text not-italic text-transparent bg-clip-text">
      IntelliWriter
    </span>
  </h2>
</div>


        <div className="w-full max-w-[1024px] mt-8 md:mt-16 mx-auto flex flex-col gap-12 items-center justify-center">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white mx-auto px-10 md:px-0">
{Why.map((item) => (
    <div
    key={item.id}
    className="flex flex-col gap-3 !text-white"
    >
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{item.Percentage}</h1>
<p className="text-xs md:text-sm !text-white font-bold">{item.title}</p>
<p className="text-xs md:text-sm">{item.desc}</p>
    </div>
))

}
    

       </div>
        </div>
    </div>
  );
};

export default WhyIntelli;
