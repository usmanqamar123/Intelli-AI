import { TopReasonsData } from "../../constants/SeoArticleData";
import React from "react";
import GradientText from "../GradientText";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopReasons = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <main className="relative w-full max-w-[1240px] px-4 md:px-6 xl:px-0 mx-auto py-10 md:py-16 lg:py-20 flex flex-col gap-10 lg:gap-20 justify-start items-center z-10">
      <div className="absolute top-28 -right-[400px] w-[300px] h-[300px] bg-[#7500FF] rotate-[30deg] opacity-60 blur-3xl rounded-full -z-10" />
      <div className="absolute top-[70%] right-[40%] w-[300px] h-[300px] bg-[#298CFD] rotate-[41deg] opacity-25 blur-3xl rounded-full -z-10" />

      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5">
        <Image
          src="/seo-artilce-writer/Intelliwriter-I.svg"
          width={48}
          height={166}
          alt="Intelliwriter logo"
          sizes="(max-width: 640px) 48px, 48px"
          className="w-12 h-auto"
        />
        <GradientText
          whiteText="Top Reasons Why Intelliwriter's Article Writer"
          gradientText="Beats the Rest"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight w-fit text-center md:text-left"
        />
        <div className="text-white text-base md:text-lg w-full text-center lg:text-left">
          From lightning-fast AI-generated content and smart SEO scoring to
          seamless WordPress publishing and built-in image generation. It&apos;s
          everything you need to create, optimize, and publish top-ranking
          content in one powerful platform.
        </div>
      </section>

      <section className="w-full">
        <Slider {...settings}>
          {TopReasonsData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative overflow-hidden w-[300px] md:w-[280px] h-[290px] rounded-2xl p-8 flex flex-col gap-3 text-white">
                <h4
                  className="text-[64px] font-bold text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(88.61deg, #298CFD -39.08%, #2B38F9 -14.94%, #7E3BFF 5.75%, #CE17F8 39.6%)",
                  }}
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </h4>
                <p className="text-2xl text-white font-bold ">{item.title}</p>
                <p className="text-base text-white/90">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
};

export default TopReasons;
