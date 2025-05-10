"use client";
import React, { useState } from "react";
import Image from "next/image";

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
    <section className="w-full relative font-geist py-10 md:py-12 z-10">
      <div className="absolute top-12 -left-10 h-28 w-28 opacity-40 bg-[#7500FF] blur-[120px] -z-10" />
      <div className="absolute top-10 left-[35%] h-[500px] w-[500px] opacity-50 bg-[#7500FF] blur-[120px] -z-10" />
      <div className="absolute top-20 right-0 h-20 lg:h-28 w-10/12 lg:w-1/4 opacity-40 bg-[#208EFB] blur-[120px] -z-10" />

      {/* Top Section */}
      <div className="flex flex-col items-center justify-center max-w-5xl text-center gap-6 !mb-20 px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white capitalize">
          Loved by Writers, Marketers, and Business Owners{" "}
          <span className="gradient-text not-italic text-transparent leading-snug bg-clip-text">
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
              className="w-[400px] h-[520px] rounded-xl flex items-center justify-center shadow-sm shrink-0 relative overflow-hidden"
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
  );
};

export default Testimonial;
