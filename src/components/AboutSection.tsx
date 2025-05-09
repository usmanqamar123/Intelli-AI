"use client";

import Image from "next/image";
// import SwiperCore from "swiper";
// import { EffectCards } from "swiper/modules";
// SwiperCore.use([EffectCards]);

const AboutSection = () => {
  return (
    <div className="flex flex-wrap w-full justify-center">
      {/* First Section */}
      <div className="flex lg:flex-row flex-col items-center justify-evenly w-full lg:gap-6 gap-8 container py-10 px-4">
        <div className="relative rounded-[24px]">
          <div className="relative overflow-hidden rounded-[24px]">
            <Image
              src="/image-gen-min.webp"
              alt="Innovative Image Design"
              width={600}
              height={400}
              priority={true}
              style={{ width: "auto", height: "auto" }} // Ensure aspect ratio is maintained
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-left">
          <span className="text-white mb-3 text-[28px] leading-[52px] md:text-[54px] md:text-start text-center font-normal lg:w-full">
            Innovative{" "}
            <span className="gradient-span-1 font-bold text-[28px] md:text-[54px]">
              Image
            </span>{" "}
            Design
          </span>
          <p className="md:text-[21px] text-[16px] font-[400] leading-[36px] text-white mt-3 text-center md:text-center lg:text-start">
            The Intelliwriter Image Generator Module is a powerful addition to
            the Intelliwriter platform, enabling users to effortlessly create
            custom images that enhance their written content. With intuitive
            controls and advanced algorithms, this module ensures a seamless
            integration of dynamic visuals, elevating the overall impact and
            engagement of your message across various platforms.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex lg:flex-row flex-col-reverse items-center justify-evenly w-full lg:gap-2 gap-8 container py-10 px-4 border-t border-b border-gray-300 rounded-md border-opacity-10">
        <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-left">
          <span className="text-white mb-3 text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] md:text-start text-center font-normal lg:w-full">
            Enhance{" "}
            <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
              Voice
            </span>{" "}
            Experience
          </span>
          <p className="md:text-[21px] text-[16px] font-[400] leading-[36px] text-white mt-3 text-center md:text-center lg:text-start">
            Discover the impact of professional voice-overs with our
            cutting-edge voice services. Ideal for both novices and seasoned
            professionals, our platform not only enhances your projects with
            high-quality audio but also offers a unique voice replication
            feature. With intuitive controls and advanced technology, you can
            input a voice sample and generate the same voice tone across your
            projects, ensuring consistency and quality.
          </p>
        </div>

        <div className="relative rounded-[24px]">
          <div className="relative overflow-hidden rounded-[24px]">
            <Image
              src="/voice-over-min.webp"
              alt="Voice Over Services"
              width={600}
              height={400}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
