"use client";

import { Captionbg, dbYoutube, image_text, nft_2 } from "../../../public";
import Image from "next/image";
import GenImage from "../../../public/image-gen-min.webp";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
SwiperCore.use([EffectCards]);

const AboutSection = () => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center mt-[25px] md:mt-0">
        <div className="flex lg:flex-row flex-col items-center justify-evenly w-full lg:gap-6 gap-8 container py-10 ">
          <div className="relative rounded-[24px] ">
            <div className="relative overflow-hidden px-4 rounded-[24px]">
              <Image
                loading="eager"
                decoding="async"
                priority
                src={GenImage}
                alt="Gen Image"
                className="max-w-[600px"
                width={600}
                height={0}
                style={{ width: "600px", height: "auto" }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-left">
            <span className="text-white mb-3 text-[28px] leading-[52px] md:text-[54px] md:text-start text-center font-normal lg:w-full">
              Stunning{" "}
              <span className="gradient-span-1 font-bold text-[28px] md:text-[54px]">
                Images
              </span>{" "}
              in Minutes
            </span>
            <p className="md:text-[21px] text-[16px] px-2 font-[400] leading-[36px] !text-white mt-3 text-justify md:text-center lg:text-start">
              With IntelliWriter’s AI Image Generator, you can bring your vision
              to life. Whether it’s unique graphics for social media,
              eye-catching NFTs, or personalized content for your website, our
              easy-to-use platform makes image design effortless.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-center justify-evenly w-full lg:gap-2 gap-8 container py-10  border-t  border-b border-gray-300 rounded-md border-opacity-10">
          <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-left">
            <span className="text-white mb-3 text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] md:text-start text-center font-normal lg:w-full">
              Instantly Create{" "}
              <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
                Voiceovers
              </span>{" "}
            </span>
            <p className="md:text-[21px] text-[16px] px-2 font-[400] leading-[36px] !text-white mt-3 text-justify md:text-center lg:text-start">
              Need professional voiceovers for videos, ads, or presentations?
              Our AI-powered voice generator delivers high-quality results fast.
              Perfect for creators, marketers, and anyone looking to add that
              polished, professional touch to their audio projects.
            </p>
          </div>

          <div className=" relative rounded-[24px] ">
            <div className="relative overflow-hidden px-4 rounded-[24px]">
              <Image
                src="/voice-over-min.webp"
                alt="Voice Over"
                width={600}
                height={0}
                style={{ width: "600px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center">
        <div className="flex lg:flex-row flex-col items-center justify-evenly w-full lg:gap-6 gap-8 container py-6 px-4">
          <div className="relative rounded-[24px] ">
            <div className="relative overflow-hidden rounded-[24px]">
              <Image
                src={dbYoutube}
                alt="Image Youtube"
                width={600}
                height={0}
                style={{ width: "600px", height: "auto" }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-left">
            <span className="text-white mb-3 text-[28px] leading-[52px] md:text-[54px] md:text-start text-center font-normal lg:w-full">
              Create High-Impact{" "}
              <span className="gradient-span-1 font-bold text-[28px] md:text-[54px]">
                Content
              </span>{" "}
            </span>
            <p className="md:text-[21px] text-[16px] font-[400] leading-[36px] !text-white mt-3 text-justify md:text-center lg:text-start">
              Unlock the full potential of your writing with the power of
              IntelliWriter. Whether you’re crafting compelling blog posts,
              engaging social media content, or polished professional documents,
              IntelliWriter can streamline the process, enhance creativity, and
              elevate the quality. AI tools assist with everything from
              generating fresh ideas to optimizing tone, style, and grammar,
              ensuring your message resonates with your audience. With
              IntelliWriter, you can save time, improve clarity, and produce
              high-impact writing that grabs attention and drives results. Let
              IntelliWriter take your writing to the next level!{" "}
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-center justify-evenly w-full lg:gap-0 gap-8 container py-6 px-4 border-t  border-b border-gray-300  rounded-md border-opacity-10">
          <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-left">
            <span className="text-white mb-3 text-[24px] leading-[52px] md:text-[50px] lg:text-[54px] md:text-start text-center font-normal lg:w-full">
              15 Services in{" "}
              <span className="gradient-span-1 font-bold text-[24px] md:text-[50px] lg:text-[54px]">
                One Platform
              </span>{" "}
            </span>
            <p className="md:text-[21px] text-[16px] font-[400] leading-[36px] !text-white mt-3 text-justify md:text-center lg:text-start">
              Get a bunch of powerful services all in one platform! From content
              creation and image design to voiceovers and marketing tools,
              everything you need to boost your projects is right at your
              fingertips. Simplify your workflow and achieve more, faster!{" "}
            </p>
          </div>

          <div className=" relative rounded-[24px] ">
            <div className="relative overflow-hidden rounded-[24px]">
              <Image
                src={Captionbg}
                alt="Image Caption Bg"
                width={600}
                height={0}
                style={{ width: "600px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;

// "use client";

// import { Captionbg, dbYoutube, image_text, nft_2 } from "../../../public";
// import Image from "next/image";
// import GenImage from "../../../public/image-gen-min.webp";
// import SwiperCore from "swiper";
// import { EffectCards } from "swiper/modules";
// SwiperCore.use([EffectCards]);

// const sectionData = [
//   {
//     id: 1,
//     title: "Stunning Images in Minutes",
//     description:
//       "With IntelliWriter’s AI Image Generator, you can bring your vision to life. Whether it's unique graphics for social media, eye-catching NFTs, or personalized content for your website, our easy-to-use platform makes image design effortless.",
//     imageSrc: GenImage,
//     alt: "Gen Image",
//     reverse: false,
//   },
//   {
//     id: 2,
//     title: "Instantly Create Voiceovers",
//     description:
//       "Need professional voiceovers for videos, ads, or presentations? Our AI-powered voice generator delivers high-quality results fast. Perfect for creators, marketers, and anyone looking to add that polished, professional touch to their audio projects.",
//     imageSrc: "/voice-over-min.webp",
//     alt: "Voice Over",
//     reverse: true,
//   },
//   {
//     id: 3,
//     title: "Create High-Impact Content",
//     description:
//       "Unlock the full potential of your writing with the power of IntelliWriter. Whether you’re crafting compelling blog posts, engaging social media content, or polished professional documents, IntelliWriter can streamline the process, enhance creativity, and elevate the quality.",
//     imageSrc: dbYoutube,
//     alt: "Image Youtube",
//     reverse: false,
//   },
//   {
//     id: 4,
//     title: "15 Services in One Platform",
//     description:
//       "Get a bunch of powerful services all in one platform! From content creation and image design to voiceovers and marketing tools, everything you need to boost your projects is right at your fingertips. Simplify your workflow and achieve more, faster!",
//     imageSrc: Captionbg,
//     alt: "Image Caption Bg",
//     reverse: true,
//   },
// ];

// const AboutSection = () => {
//   return (
//     <>
//       {sectionData.map((section, index) => (
//         <div
//           key={index}
//           className={`flex flex-wrap w-full justify-center ${index % 2 === 0 ? "mt-[25px]" : ""}`}
//         >
//           <div
//             className={`flex lg:flex-row flex-col ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} ${section.id === 2 ? " pt-16 " : " "} items-center justify-evenly w-full gap-6 container`}
//           >
//             <div className="relative rounded-[24px]">
//               <div className="relative overflow-hidden rounded-[24px]">
//                 <Image
//                   loading="eager"
//                   decoding="async"
//                   priority
//                   src={section.imageSrc}
//                   alt={section.alt}
//                   className="max-w-[600px]"
//                   width={600}
//                   height={0}
//                   style={{ width: "600px", height: "auto" }}
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-left">
//               <span className="text-white mb-3 text-[28px] leading-[52px] md:text-[54px] md:text-start text-center font-normal lg:w-full">
//                 {section.title.split(" ")[0]}{" "}
//                 <span className="gradient-span-1 font-bold text-[28px] md:text-[54px]">
//                   {section.title.split(" ")[1]}
//                 </span>{" "}
//                 {section.title.split(" ").slice(2).join(" ")}
//               </span>
//               <p className="md:text-[21px] text-[16px] font-[400] leading-[36px] !text-white mt-3 text-justify md:text-center lg:text-start">
//                 {section.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default AboutSection;
