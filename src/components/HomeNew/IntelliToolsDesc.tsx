import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbClockPlay } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TbMessageChatbot } from "react-icons/tb";
import Link from "next/link";

const IntelliToolsDesc = () => {
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const allTools = [
    // {
    //   id: 0,
    //   title: "Generate Human-Like Articles Instantly with AI Power",
    //   btn1Text: "Generate SEO-Optimized Articles with AI",
    //   btn2Text: "Try AI SEO Article Generator",
    //   img: "/AI SEO Article Writer.webp",
    //   link: "/new-seo-aricle",
    //   icon: <FaStar />,
    //   list: [
    //     {
    //       listItem: "Generate High-Quality Articles in Seconds",
    //     },
    //     {
    //       listItem: "100% Unique and Plagiarism-Free",
    //     },
    //     {
    //       listItem: "SEO-Optimized Out of the Box",
    //     },
    //     {
    //       listItem: "Customizable Tone and Style",
    //     },
    //     {
    //       listItem: "No More Writer’s Block",
    //     },
    //     {
    //       listItem: "Try It Risk-Free",
    //     },
    //   ],
    //   color: "#6100FF",
    // },
    {
      id: 0,
      title: "Create Stunning Blog Images with AI Magic",
      btn1Text: "AI Blog image Generator",
      btn2Text: "Generate Your Images",
      img: "/AI Image Generator.webp",
      link: `${process.env.NEXT_PUBLIC_APP}user/ai-image-generator`,
      icon: <TbClockPlay />,
      list: [
        {
          listItem: "Generate Eye-Catching Images in Seconds",
        },
        {
          listItem: "Customizable to Match Your Content",
        },
        {
          listItem: "No Design Skills Required",
        },
        {
          listItem: "100% Unique and Royalty-Free",
        },
        {
          listItem: "Optimized for social media",
        },
        {
          listItem: "Endless Creative Possibilities",
        },
      ],
      color: "#E14EE9",
    },
    {
      id: 1,
      title: "Make AI Content Sound 100% Human",
      btn1Text: "AI Seo Humanizer",
      btn2Text: "Start Humanizing",
      img: "/AI Content.webp",
      link: `${process.env.NEXT_PUBLIC_APP}user/ai-humanizer`,
      icon: <AiOutlineUserSwitch />,
      list: [
        {
          listItem: "Transform Robotic Text into Natural Language",
        },
        {
          listItem: "Perfect for Any Audience",
        },
        {
          listItem: "Boost Engagement and Trust",
        },
        {
          listItem: "Ideal for SEO and Marketing",
        },
        {
          listItem: "Plagiarism-Free and Unique",
        },
        {
          listItem: "Quick and Easy to Use",
        },
      ],
      color: "#6B41FF",
    },
    // {
    //   id: 2,
    //   title: "Build Engaging Courses with AI-Powered Ease",
    //   btn1Text: "AI-Course Builder",
    //   btn2Text: "Try AI Course Builder",
    //   img: "/AI Course Builder .webp",
    //   link: `${process.env.NEXT_PUBLIC_APP}user/course-builder`,
    //   icon: <IoCartOutline />,
    //   list: [
    //     {
    //       listItem: "Create Courses in Minutes, Not Months",
    //     },
    //     {
    //       listItem: "Tailored to Your Audience",
    //     },
    //     {
    //       listItem: "Interactive and Engaging Content",
    //     },
    //     {
    //       listItem: "Customizable Templates",
    //     },
    //     {
    //       listItem: "SEO-Optimized Course Descriptions",
    //     },
    //     {
    //       listItem: "Scalable and Cost-Effective",
    //     },
    //   ],
    //   color: "#fcad32",
    // },
    // {
    //   id: 3,
    //   title: "Chat Smarter with Multi-Model AI Power",
    //   btn1Text: "AI Chat",
    //   btn2Text: "Start Chat",
    //   img: "/AI CHAT.webp",
    //   link: "/ai-chat",
    //   icon: <TbMessageChatbot />,
    //   list: [
    //     {
    //       listItem: "Access Top AI Models in One Place",
    //     },
    //     {
    //       listItem: "Perfect for Every Need",
    //     },
    //     {
    //       listItem: "Human-Like Conversations",
    //     },
    //     {
    //       listItem: "Customizable Responses",
    //     },
    //     {
    //       listItem: "Seamless Integration",
    //     },
    //     {
    //       listItem: "Always Learning and Improving",
    //     },
    //   ],
    //   color: "#43ACFF",
    // },
  ];

  return (
    <div className="relative w-full bg-transparent py-4 px-4 ">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center max-w-xl font-bold">
          Transform your Business with{" "}
          <i
            className="not-italic text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(88.14deg, #BFAAFF 0%, #6B41FF 31%, #F64CFF 76%, #FFC553 100%)",
            }}
          >
            AI-Powered Automation
          </i>
        </h2>

        <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">
          {allTools.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-4xl overflow-hidden bg-[#1B1237] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.5)] transition-shadow duration-300"
            >
              {/* Gradient overlay container */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-intelli-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-[1]" />
              </div>

              <div className="relative backdrop-blur-lg p-6 md:p-8 lg:p-10 gradient-border">
                {item.id === 0 && (
                  <div
                    style={{ backgroundColor: `${item.color}` }}
                    className="w-fit mx-auto mb-6 md:mb-10 rounded-full px-4 md:px-6 py-2 flex items-center gap-2 transition-all"
                  >
                    <FaStar className="text-[#FFC553] text-sm md:text-base hidden md:flex" />
                    <span className="text-white text-sm md:text-base text-center">
                      {item.btn1Text}
                    </span>
                    <FaStar className="text-[#FFC553] text-sm md:text-base hidden md:flex" />
                  </div>
                )}

                <div
                  className={`flex flex-col ${
                    item.id % 2 ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-8 lg:gap-12 xl:gap-16 items-center`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-7">
                    {item.id !== 0 && (
                      <button className="bg-intelli-gradient hover:bg-intelli-gradient-reverse transition-all duration-300 px-6 py-3 rounded-full font-semibold text-white/90 hover:text-white flex items-center gap-3 shadow-lg hover:shadow-purple-500/20">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm lg:text-base text-center xl:text-lg">
                          {item.btn1Text}
                        </span>
                      </button>
                    )}

                    <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                      {item.title}
                    </h3>
                    <ul className="space-y-5 xl:space-y-8">
                      {item.list.map((listItem, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4 lg:gap-5"
                        >
                          <span
                            className="shrink-0 mt-1 text-lg lg:text-xl"
                            style={{ color: item.color }}
                          >
                            <FaRegCheckCircle />
                          </span>
                          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
                            {listItem.listItem}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <Link href={item.link}>
                      <button
                        style={{ backgroundColor: item.color }}
                        className="inline-flex items-center mt-4 gap-2 px-4 py-2 lg:px-8 lg:py-4 rounded-xl text-white/90 hover:text-white transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl font-semibold"
                      >
                        <span className="text-sm lg:text-base xl:text-lg">
                          {item.btn2Text}
                        </span>
                        <MdKeyboardArrowRight className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>

                  {/* Image Container */}
                  <div
                    className={`hidden md:flex flex-1 w-full md:max-w-[45%] lg:max-w-[40%] relative ${
                      item.id % 2 ? "md:rotate-2" : "md:-rotate-2"
                    } transition-transform duration-500 group-hover:rotate-0 z-10`}
                  >
                    <div className="relative rounded-2xl lg:rounded-3xl overflow-visible">
                      <div
                        className="!w-10/12 2xl:w-11/12 relative transform transition-transform duration-500 group-hover:scale-[1.02] rounded-2xl lg:rounded-3xl"
                        style={{
                          boxShadow: `0px 0px 144.05px 0px rgba(${hexToRgb(
                            item.color
                          )}, 0.5)`,
                        }}
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={480}
                          height={480}
                          className="w-full h-auto object-cover rounded-2xl lg:rounded-3xl"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntelliToolsDesc;
