import React from 'react'
import Image from 'next/image'

const integrations = [
  {
    id: 0,
    image: '/Integration.webp',
    name: 'Integration',
    title: 'Connect Your Intelliwriter with WordPress',
    desc: 'Ready to create amazing content without the hassle? Welcome to IntelliWriter—your all-in-one AI tool for crafting images, articles, WordPress integration, SEO keyword research, AI models, voiceovers, and so much more!',
  },
  {
    id: 1,
    image: '/Integration 2.webp',
    name: 'Models',
    title: 'Choose Any AI Model You Need',
    desc: 'Tap into top-tier AI models like ChatGPT-4o, Claude, Llama-3, Gemma2, Mixtral, Qwen and more—all within a single, flexible interface.',
  },
]

const Integration = () => {
  return (
    <section className="relative py-10 font-inter">
      {/* Top Section */}
      <div className="flex  flex-col items-center text-center gap-6 mb-12 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
          Generate High Quality{" "}
          <span className="bg-intelli-gradient text-transparent bg-clip-text">
            Content & Drive Traffic
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
        Ready to create amazing content without the hassle? Welcome to IntelliWriter—your all-in-one AI tool for crafting images,articles, wordpress integration, seo keyword research, AI models, voiceovers, and so much more!
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative w-full py-8 px-10 md:px-12">
  <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 items-center justify-center">
    <div className="w-full flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-12">
      {integrations.map((item) => (
        <div
          key={item.id}
          className="group relative w-full md:w-1/2 gradient-border rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C0F3A] to-[#2A1A5E] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300 p-5 sm:p-6 md:p-8 lg:p-10 border border-[#a87fdb]/20 hover:border-[#a87fdb]/50"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(97,0,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={250}
              className="w-full rounded-xl object-cover shadow-md"
            />
            <span className="text-lg md:text-2xl font-medium text-blue-400 tracking-wide uppercase mt-6">
              {item.name}
            </span>
            <h4 className="text-lg md:text-2xl font-semibold text-white">
              {item.title}
            </h4>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    </section>
  )
}

export default Integration
