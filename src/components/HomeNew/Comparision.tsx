import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { RxRocket } from 'react-icons/rx';



const Comparison = () => {
  return (
<section className="py-14 font-inter">
  {/* Top Section */}
  <div className="text-center mb-14 px-4">
  <h2 className="text-3xl md:text-4xl xl:text-[2.5rem] font-bold text-white uppercase text-center">
  ChatGPT vs. Intelliwriter’s <br />
  <span className="bg-intelli-gradient text-transparent bg-clip-text">
    AI Article Writer
  </span>
</h2>

    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mt-4">
      A Side-by-Side Comparison
    </p>
  </div>

  {/* Comparison Cards */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl grid grid-cols-1 lg:grid-cols-2">
    {/* ChatGPT Card */}
    <div className="rounded-xl flex flex-col overflow-hidden">
      <Image
          src="/ChatGPT.svg"
          alt="ChatGPT Article"
          width={380}
          height={280}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
    </div>

    {/* Intelliwriter Card */}
    <div className="rounded-xl hover:border-[#a87fdb]/50 shadow-lg flex flex-col overflow-hidden">
      <Image
          src="/Intelli.svg"
          alt="ChatGPT Article"
          width={380}
          height={280}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
    </div>
  </div>
</section>
 )
}

export default Comparison