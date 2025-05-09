import React, { useEffect } from "react";
import { slider } from "@/constants/index";
import { Logo } from "../../public";
import Image from "next/image";

const Slider: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLDivElement>(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers: NodeListOf<HTMLDivElement>) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner =
        scroller.querySelector<HTMLDivElement>(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  }

  return (
    <div
      className="w-full flex flex-col gap-3 py-10 pt-0 justify-center items-center "
      id="/about"
    >
      <div className="xl:px-16 md:px-6 px-4 py-10 w-full container">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10 md:p-6 p-4">
          {/* <span className='border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 lg:left-10'>GET STARTED WITH</span> */}
          <span className="gradient-span-1 text-white relative  font-[600]">
            GENERATE IMAGES & NFTS
          </span>
        </h2>
        <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-10  p-4">
          Begin your creative odyssey with Images & NFTs. Immerse yourself in a
          realm where art merges with innovation, enabling exploration,
          creation, and sharing of your distinct vision through digital marvels
          and NFTs. Start now to ignite limitless digital creativity.
        </p>
      </div>

      <div className="relative py-10 w-full flex flex-col gap-3">
        <div className="scroller" data-direction="right" data-speed="slow">
          <div className="scroller__inner">
            {slider.map((image, index) => (
              <Image
                key={index}
                src={image.img}
                alt={image.img}
                width={125}
                height={125}
                className="object-cover rounded-md"
                priority={true}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 border border-[#823fd3] transform -translate-x-1/2 -translate-y-1/2 rounded-full h-36 w-36 md:h-44 md:w-44 bg-opacity-90 flex items-center justify-center z-10 glow">
          <div className="externalRing">
            <div className="logoCircle text-center">
              <Image
                src={Logo}
                alt={Logo}
                width={130}
                height={0}
                style={{ width: "130px", height: "auto" }}
                priority={true}
              />
            </div>
          </div>
        </div>

        <div className="scroller" data-direction="left" data-speed="slow">
          <div className="scroller__inner">
            {slider.map((image, index) => (
              <div className="" key={index}>
                <Image
                  src={image.img}
                  alt={image.img}
                  width={125}
                  height={125}
                  className="rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
