"use client"
import { PowerfulAiToolsData } from "../../constants/SeoArticleData";
import React from "react";
import GradientText from "../GradientText";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PowerfulAiTools = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="w-full  px-4 md:px-6 xl:px-0 mx-auto py-10 md:py-16 lg:py-20 flex flex-col gap-10 lg:gap-20 justify-center items-center z-10">
      <section className="max-w-[1240px] w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
        <GradientText
          whiteText="Other"
          gradientText="Powerful AI Tools Included"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight w-fit text-center"
        />
      </section>

      <section className="w-full">
        <Slider {...settings}>
          {PowerfulAiToolsData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8] p-[1px] rounded-2xl">
                <div
                  className="relative overflow-hidden w-[290px] md:w-full h-[450px] rounded-2xl p-4 flex flex-col items-end justify-end bg-cover bg-fixed bg-left-bottom bg-no-repeat gap-3 text-white"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="w-full flex items-center self-end justify-between">
                    <h4 className="font-bold text-lg lg:text-xl">
                      {item.title}
                    </h4>
                    <div className="bg-gradient-to-r from-[#298CFD] via-[#7E3BFF] to-[#CE17F8] rounded-full flex justify-center items-center !p-4 w-10 h-10">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
};

export default PowerfulAiTools;
