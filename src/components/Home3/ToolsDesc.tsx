import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbClockPlay } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TbMessageChatbot } from "react-icons/tb";
import Link from "next/link";

const ToolsDesc = () => {
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const allTools = [
    {
      id: 0,
      title: "Topical Authority Builder",
      desc: "Launch a full blog content strategy in minutes. Expand topics, dominate niches, and create expert-level content that sounds human — with just one click.",
      btn1Text: "BUILD AUTHORITY AT SCALE",
      btn2Text: "Build Your Authority Today",
      img: "/TopicalAuthority.png",
      link: "/topical-authority-builder",
      list: [
        {
          listItem: "Generate 100+ blogs in minutes",
        },
        {
          listItem: "Expand into profitable topic clusters",
        },
        {
          listItem: "Authentic, human-sounding output",
        },
        {
          listItem: "One-click WordPress integration",
        },
        {
          listItem: "Build topical authority and trust fast",
        },
      ],
      color: "#298CFD",
    },
    {
      id: 1,
      title: "Website Content Updater",
      desc: "Easily refresh and upgrade your existing website articles. Boost SEO, improve engagement, and keep your site at the top of Google’s rankings.",
      btn1Text: "KEEP CONTENT FRESH & RANKING",
      btn2Text: "Create Fresh Content Daily",
      img: "/WebsiteContent.png",
      link: `${process.env.NEXT_PUBLIC_APP}user/wp-automation`,
      list: [
        {
          listItem: "Instantly refresh outdated blogs",
        },
        {
          listItem: "Maintain SEO freshness signals",
        },
        {
          listItem: "Boost search engine visibility",
        },
        {
          listItem: "Retain reader engagement",
        },
        {
          listItem: "Automate regular content updates",
        },
      ],
      color: "#CE17F8",
    },
    {
      id: 2,
      title: "Blog Generator",
      desc: "Turn words into beautiful, scroll-worthy blogs — complete with custom AI graphics that make every post look professionally designed.",
      btn1Text: "CREATE VISUAL-FIRST BLOG POSTS",
      btn2Text: "Generate Impactful Blogs",
      img: "/BlogGenerator.png",
      link: `${process.env.NEXT_PUBLIC_APP}user/seo-article-writer`,
      list: [
        {
          listItem: "Auto-generate blog visuals",
        },
        {
          listItem: "Save on stock photo costs",
        },
        {
          listItem: "Speed up publishing workflow",
        },
        {
          listItem: "Make posts visually engaging",
        },
        {
          listItem: "Stand out with original graphics",
        },
      ],
      color: "#7E3BFF",
    },
    {
      id: 3,
      title: "SEO Humanizer",
      desc: "Instantly transform robotic AI output into natural, authentic human language — helping you pass AI detection tools and connect with real audiences.",
      btn1Text: "MAKE AI SOUND HUMAN",
      btn2Text: "Humanize Your Content Now",
      img: "/Humanizer.png",
      link: `${process.env.NEXT_PUBLIC_APP}user/new-ai-humanizer`,
      list: [
        {
          listItem: "Reduce AI-detection risks",
        },
        {
          listItem: "Enhance reader trust",
        },
        {
          listItem: "Boost content relatability",
        },
        {
          listItem: "Improve SEO authenticity scores",
        },
        {
          listItem: "Sound natural, stay credible",
        },
      ],
      color: "#298CFD",
    },
    {
      id: 4,
      title: "SEO Keyword Research",
      desc: "Discover the keywords your audience is actually searching for — so you can rank higher, attract more traffic, and outsmart your competition faster.",
      btn1Text: "FIND HIGH-IMPACT KEYWORDS",
      btn2Text: "Find Winning Keyword",
      img: "/KeywordResearch.png",
      link: `${process.env.NEXT_PUBLIC_APP}user/seo-keyword-research`,
      list: [
        {
          listItem: "Instant keyword discovery",
        },
        {
          listItem: "Find hidden ranking opportunities",
        },
        {
          listItem: "Target long-tail and trending terms",
        },
        {
          listItem: "Speed up content planning",
        },
        {
          listItem: "Win faster SEO results",
        },
      ],
      color: "#DF1DF7",
    },
    {
      id: 5,
      title: "YouTube Content  Generator",
      desc: "Instantly generate high-converting YouTube scripts and content ideas — no video editing skills needed, just pure content that gets views.",
      btn1Text: "CREATE VIDEO CONTENT AT SCALE",
      btn2Text: "Create Your Next Viral Video",
      img: "/YoutubeContent.png",
      link: `${process.env.NEXT_PUBLIC_APP}user/dashboard`,
      list: [
        {
          listItem: "Create video scripts fast",
        },
        {
          listItem: "No editing experience required",
        },
        {
          listItem: "Craft scroll-stopping video ideas",
        },
        {
          listItem: "Boost YouTube SEO",
        },
        {
          listItem: "Grow your video presence quickly",
        },
      ],
      color: "#7E3BFF",
    },
  ];

  

  return (
    <div className="relative w-full py-4 px-4 ">
       
       <div className="absolute bottom-16 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>
       <div className="absolute bottom-56 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]"></div>
       <div className="absolute bottom-0 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px]"></div>
       <div className="absolute bottom-1/4 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7E3BFF] blur-[120px]"></div>
       <div className="absolute bottom-1/4 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
       <div className="absolute bottom-[30%] right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>
       <div className="absolute top-1/4 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>
       <div className="absolute top-[30%] left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>
       <div className="absolute top-[70%] left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px]"></div>
       <div className="absolute top-1/2 left-1/4 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]"></div>
       <div className="absolute top-[40%] left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#0009FF] blur-[120px]"></div>
       <div className="absolute top-[20%] right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]"></div>
       <div className="absolute top-32 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#DF1DF7] blur-[120px]"></div>
       <div className="absolute top-10 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>

       <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 mx-auto">
          {allTools.map((item) => {
            const words = item.title.split(" ");
            const lastWord = words.pop();
            const firstPart = words.join(" ");

            return (
              <div key={item.id} className="group relative overflow-hidden">
                {/* Gradient overlay container */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-[1]" />
                </div>

                <div className="relative backdrop-blur-lg p-6 md:p-8 lg:p-10">
                  <div
                    className={`flex flex-col ${
                      item.id % 2 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 lg:gap-12 xl:gap-16 items-center mx-auto`}
                  >
                    {/* Text Content */}
                    <div className="flex-1 space-y-7 ">
                      <button className="px-8 py-2 gradient-border-wrapper rounded-full font-semibold text-white/90 hover:text-white flex items-center gap-3 shadow-lg hover:shadow-purple-500/20">
                        <span className="text-sm lg:text-base text-center xl:text-lg">
                          {item.btn1Text}
                        </span>
                      </button>

                      <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                        {firstPart}{" "}
                        <span className="gradient-text bg-clip-text text-transparent">
                          {lastWord}
                        </span>
                      </h3>
                      <p>{item.desc}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16">
                        {/* First column with first 3 items */}
                        <ul className="space-y-4">
                          {item.list.slice(0, 3).map((listItem, index) => (
                            <li key={`col1-${index}`} className="flex items-start gap-3">
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

                        {/* Second column with remaining items */}
                        <ul className="space-y-4">
                          {item.list.slice(3).map((listItem, index) => (
                            <li key={`col2-${index}`} className="flex items-start gap-3">
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
                      </div>

                      <Link href={item.link}>
                        <button
                          style={{ backgroundColor: item.color }}
                          className="inline-flex items-center mt-4 gap-2 px-4 py-2 lg:px-10 lg:py-2 rounded-3xl text-white/90 hover:text-white transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl font-semibold"
                        >
                          <span className="text-sm lg:text-base xl:text-lg">
                            {item.btn2Text}
                          </span>
                        </button>
                      </Link>
                    </div>

                    {/* Image Container */}
                    <div
                      className="md:flex flex-1 w-full md:max-w-[50%] lg:max-w-[60%] relative z-10"
                    >
                      <div className="relative rounded-2xl lg:rounded-3xl overflow-visible w-full">
                        <div className="w-full relative rounded-2xl lg:rounded-3xl">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={1600} // increase width here if needed
                            height={1200}
                            className="w-full h-auto object-cover rounded-2xl lg:rounded-3xl"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ToolsDesc;
