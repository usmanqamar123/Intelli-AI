"use client"
import React, { useState } from 'react'
import Image from 'next/image'


const testimonials = [
    {
      id: 1,
      thumbnail: "/Testimonial11.png", // Background image
      videoUrl: "/testimonial-video-1.mp4", // Video path
    },
    {
      id: 2,
      thumbnail: "/Testimonial2.png",
      videoUrl: "/testimonial-video-2.mp4",
    },
    {
      id: 3,
      thumbnail: "/Testimonial1.png",
      videoUrl: "/testimonial-video-3.mp4",
    },
    {
      id: 4,
      thumbnail: "/Testimonial3.png",
      videoUrl: "/testimonial-video-3.mp4",
    }, 
    {
      id: 5,
      thumbnail: "/Testimonial4.png",
      videoUrl: "/testimonial-video-3.mp4",
    },
  ];

const Testimonial = () => {

    const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="w-full relative py-10 md:py-16 lg:py-20 font-inter">
      <div className="absolute top-12 left-0 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>
      <div className="absolute top-12 right-[10%] h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#208EFB] blur-[120px]"></div>
      <div className="absolute top-10 left-1/2 h-20 lg:h-28 w-10/12 lg:w-1/4 bg-[#7500FF] blur-[120px]"></div>

      {/* Top Section */}
      <div className="flex flex-col items-center justify-center max-w-4xl text-center gap-6 mb-12 px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
          Loved by Writers, Marketers, and Business Owners{" "}
          <span className="gradient-text not-italic text-transparent bg-clip-text">
            Everywhere
          </span>
        </h2>
      </div>

  {/* Cards Section */}
 <div className="relative w-full overflow-x-auto md:overflow-hidden custom-scrollbar px-4 md:px-8">
  <div className="min-w-max flex gap-4">
    {testimonials.map((item, index) => (
      <div
        key={item.id}
        className="w-[400px] md:w-[300px] h-[400px] rounded-xl flex items-center justify-center shadow-sm shrink-0 relative overflow-hidden"
      >
        {playingVideo === index ? (
          <video
            src={item.videoUrl}
            autoPlay
            controls
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <>
            <Image
              src={item.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover rounded-xl"
            />
            <button
              onClick={() => setPlayingVideo(index)}
              className="absolute z-10 w-24 h-24"
            >
              <Image
                src="/PlayButton.svg"
                alt="Play Button"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </button>
          </>
        )}
      </div>
    ))}
  </div>
</div>

</section>

  )

}

export default Testimonial;
