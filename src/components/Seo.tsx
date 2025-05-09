import Image from "next/image";
import Link from "next/link";

const Seo = () => {
  const allTools = [
    {
      id: 0,
      title: "How to Use AI Article Writer",
      description:
        "Get your article ready instantly with the AI article writer. Here's how to use it:",
      img: "/Seo1.svg",
      color: "#6100FF",
      steps: [
        "On the AI Writer App, click on 'Explore AI Templates'. Search for the 'Article Writer'.",
        "Add your topic and some other information. Adjust your preferences like the Number of Results, Creativity Level, and Output Language.",
        "Click ‘Generate’ to let the AI analyze your text prompt and write a new article.",
      ],
      additionalText:
        "Boost your writing quickly with the free AI article writer on Simplified.",
    },
    {
      id: 1,
      title: "Boost Your Content Potential with AI Article Writer",
      description:
        "Ready to take your content to the next level? AI Article Writer is here to help! With features like SEO optimization, grammar correction, and plagiarism detection, creating polished, engaging articles has never been easier. Whether you're aiming to captivate your audience or climb the search engine rankings, our free AI article writer can do it all. Start creating awesome content without any hassle today and see the difference!",
      img: "/Seo2.svg",
      color: "#E14EE9",
    },
    {
      id: 2,
      title: "Write Content with Precision and Personality",
      description:
        "Dive into the future of content creation with AI Article Writer! Tailor your voice and style smoothly to match your brand’s personality. Keep your SEO on point by integrating relevant keywords smoothly into your articles. Speak to a global audience with support for multiple languages and refine existing content with our smart paraphrasing feature. It's time to enhance your writing experience and connect more effectively with your readers!",
      img: "/Seo3.svg",
      color: "#6B41FF",
    },
    {
      id: 3,
      title: "Smooth Content Creation with Real-Time Collaboration",
      description:
        "Looking for an easy way to write amazing articles with your team? Check out Simplified AI Article Writer! It's easy to use, so you can start right away. Plus, you can work with your team in real time, which makes everything smoother. This tool is perfect for anyone — whether you're on your own, in a small team, or part of a big business. It helps you write engaging articles that grab people's attention and get results. Let’s make something awesome together!",
      img: "/Seo4.svg",
      color: "#fcad32",
    },
    {
      id: 4,
      title: "Write Content with Precision and Personality",
      description:
        "Dive into the future of content creation with AI Article Writer! Tailor your voice and style smoothly to match your brand’s personality. Keep your SEO on point by integrating relevant keywords smoothly into your articles. Speak to a global audience with support for multiple languages and refine existing content with our smart paraphrasing feature. It's time to enhance your writing experience and connect more effectively with your readers!",
      img: "/Seo5.svg",
      color: "#43ACFF",
    },
  ];
  return (
    <div className="relative w-full py-6 px-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 items-center justify-center">
        <div className="w-full flex flex-col gap-8 md:gap-10 lg:gap-12">
          {allTools.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C0F3A] to-[#2A1A5E] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300 p-6 md:p-8 lg:p-10 border border-[#a87fdb]/20 hover:border-[#a87fdb]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(97,0,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className={`flex flex-col ${
                  item.id % 2 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 lg:gap-12 xl:gap-16 items-center relative z-10`}
              >
                <div className="w-full lg:w-[50%] transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl shadow-lg border border-[#a87fdb]/30 group-hover:border-[#a87fdb] transition-colors duration-300"
                  />
                </div>
                <div className="w-full lg:w-[52%] text-white">
                  <h3
                    className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${item.color}, #ffffff)`,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mt-4 lg:mt-6 font-light">
                    {item.description}
                  </p>
                  {item.steps && item.id === 0 && (
                    <div className="mt-4 space-y-3">
                      {item.steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-[#FFD350] text-2xl font-bold mr-3">
                            •
                          </span>
                          <span className="text-white/80 text-sm md:text-base leading-relaxed">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.additionalText && (
                    <p className="text-white/80 text-sm md:text-base mt-4">
                      {item.additionalText}
                    </p>
                  )}

                  {item.id === 0 && (
                    <Link href={`${process.env.NEXT_PUBLIC_APP}auth/login`}>
                      <button className="mt-6 px-6 py-3 bg-[#FFD350] text-[#1E1E1E] rounded-3xl font-semibold hover:bg-yellow-500 transition duration-300">
                        Write Article Now
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seo;
