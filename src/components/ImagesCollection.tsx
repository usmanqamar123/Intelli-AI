import { useEffect, useState } from "react";
import Button from "./Button";
import { FaRegCopy } from "react-icons/fa6";
import Image from "next/image";

interface ImageData {
  id: number;
  prompt:string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImagesCollection: React.FC = () => {
  const [imagesData] = useState<ImageData[]>([
    {
      id: 0,
      prompt:"Beautiful view of the city from above",
      src: "/imagesCollection/image1.webp",
      alt: "Image 1",
      width: 300,
      height: 300,
    },
    {
      id: 1,
      prompt:"Abstract modern hyper-realistic Times Square Spirit Airlines.",
      src: "/imagesCollection/image2.webp",
      alt: "Image 2",
      width: 400,
      height: 400,
    },
    {
      id: 2,
      prompt:"The warrior with a crown covering his face is playing a set behind the DJ booth realism",
      src: "/imagesCollection/image3.webp",
      alt: "Image 3",
      width: 400,
      height: 400,
    },
    {
      id: 3,
      prompt:"Abstract modern hyper-realistic Times Square Spirit Airlines.",
      src: "/imagesCollection/image4.webp",
      alt: "Image 4",
      width: 400,
      height: 800,
    },
    {
      id: 4,
      prompt:"cute robot",
      src: "/imagesCollection/image5.webp",
      alt: "Image 5",
      width: 400,
      height: 400,
    },
    {
      id: 5,
      prompt:"Brad Pitt is sitting on the 33 bridge in Isfahan, Iran, and is selling cigarettes",
      src: "/imagesCollection/image6.webp",
      alt: "Image 6",
      width: 400,
      height: 900,
    },
    {
      id: 6,
      prompt:"A 25-year-old Colombian girl, wears glasses, loves sports like ice skiing, snowboarding, and playing the piano.",
      src: "/imagesCollection/image7.webp",
      alt: "Image 7",
      width: 400,
      height: 800,
    },
    {
      id: 7,
      prompt:" A cute and tiny frog commander inside the Space Shuttle's control cockpit.",
      src: "/imagesCollection/image8.webp",
      alt: "Image 8",
      width: 400,
      height: 400,
    },
    {
      id: 8,
      prompt:"Hacking cat with computer . Real photo",
      src: "/imagesCollection/image9.webp",
      alt: "Image 9",
      width: 400,
      height: 900,
    },
    {
      id: 9,
      prompt:"Fish seller, behind his counter, looking at the camera",
      src: "/imagesCollection/image10.webp",
      alt: "Image 10",
      width: 400,
      height: 400,
    },

    {
      id: 10,
      prompt:"A sphere shaped like a drought, with the lower part resembling water, a dripping drop falls from the sphere, set against a blue sky with white clouds, surrealism art",
      src: "/imagesCollection/image11.webp",
      alt: "Image 11",
      width: 400,
      height: 800,
    },
    {
      id: 11,
      prompt:"beautiful blonde woman with blue eyes wearing a long trench coat  with a dress, sitting on a bar",
      src: "/imagesCollection/image12.webp",
      alt: "Image 12",
      width: 400,
      height: 400,
    },
    {
      id: 12,
      prompt:"flash riding a tiger wearing full body heavy duty armour in highly detailed digital painting in cyberpunk style",
      src: "/imagesCollection/image13.webp",
      alt: "Image 13",
      width: 400,
      height: 400,
    },
    {
      id: 13,
      prompt:"handsome man retro America style 1970-1990, hippie",
      src: "/imagesCollection/image14.webp",
      alt: "Image 14",
      width: 400,
      height: 400,
    },
    {
      id: 14,
      prompt:"A HUGE HOMELESS MAN WITH A MUSTACHE WEARING DIRTY SHORTS AND A HOODIE",
      src: "/imagesCollection/image15.webp",
      alt: "Image 15",
      width: 400,
      height: 400,
    },
    {
      id: 15,
      prompt:"stunning still-life photo render of a Mexican Skull Calavera, surrounded by poetic ornamental elements such as fruits, flowers, garlands of lights and native plants",
      src: "/imagesCollection/image16.webp",
      alt: "Image 16",
      width: 400,
      height: 400,
    },
    {
      id: 16,
      prompt:"watercolor flowers pattern, photorealistic with warm tones, 8k high resolution",
      src: "/imagesCollection/image17.webp",
      alt: "Image 17",
      width: 400,
      height: 400,
    },
    {
      id: 17,
      prompt:"A small human with a mouse head. The mouse looks scared.",
      src: "/imagesCollection/image18.webp",
      alt: "Image 18",
      width: 400,
      height: 400,
    },
    {
      id: 18,
      prompt:"A stunning, translucent polycarbonate toaster designed by BRAUN, Dieter Rams. Unreal engine render, natural lighting, on desk, beautiful shot",
      src: "/imagesCollection/image19.webp",
      alt: "Image 19",
      width: 400,
      height: 400,
    },
    {
      id: 19,
      prompt:"The landscape features forest houses, endangered species, waterfalls, ponds, and a huge Indian temple in the background.",
      src: "/imagesCollection/image20.webp",
      alt: "Image 20",
      width: 400,
      height: 400,
    },
    {
      id: 20,
      prompt:"Varanus exanthematicus with ram horns in the form of a dragon",
      src: "/imagesCollection/image21.webp",
      alt: "Image 21",
      width: 400,
      height: 400,
    },
    {
      id: 21,
      prompt:"purple space station in space from top",
      src: "/imagesCollection/image22.webp",
      alt: "Image 22",
      width: 400,
      height: 400,
    },
    {
      id: 22,
      prompt:"spooky medieval english street, night, ghostly monk standing",
      src: "/imagesCollection/image23.webp",
      alt: "Image 23",
      width: 400,
      height: 400,
    },
    {
      id: 23,
      prompt:"Anime art of a mechanical gear-driven mecha, 8k, stunning intricate details, by artgerm",
      src: "/imagesCollection/image24.webp",
      alt: "Image 24",
      width: 400,
      height: 400,
    },
     {
      id: 24,
      prompt:"An intact circular coconut with a milky background and completely empty.",
      src: "/imagesCollection/image25.webp",
      alt: "Image 25",
      width: 400,
      height: 400,
    },
    {
      id: 25,
      prompt:"Animal crossing themed LEGO set",
      src: "/imagesCollection/image26.webp",
      alt: "Image 26",
      width: 400,
      height: 400,
    },
  ]);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [copyStatus, setCopyStatus] = useState<string>("");

  const openModal = (index: number): void => {
    setSelectedImage(index);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  const downloadImage = (imageUrl: string): void => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image";
    link.click();
  };

  const handleCopyPrompt = (): void => {
    navigator.clipboard.writeText(imagesData[selectedImage!].prompt).then(() => {
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy Prompt"), 2000); // Reset status after 2 seconds
    });
  };

  return (
    <div className="w-[100%] px-0">
    <div className="masonry w-full">
  {imagesData.map((item) => (
    <div
      key={item.id}
      className="relative mb-2 break-inside-avoid flex flex-col items-center rounded-lg"
      onMouseEnter={() => setHoveredImage(item.id)}
      onMouseLeave={() => setHoveredImage(null)}
      onClick={() => openModal(item.id)} 
    >
      {/* Image */}
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="object-cover w-full rounded-lg"
      />

      {/* Hover content */}
      {hoveredImage === item.id && (
        <div className="absolute inset-0 flex flex-col items-start justify-end pl-5 cursor-pointer bg-black bg-opacity-50 text-white">
          <h5 className="mb-2 text-sm">
            {item.prompt
              .split(' ')
              .slice(0, 4)
              .join(' ')}
          </h5>
          <p className="text-xs mb-4">
            {`${item.prompt
              .split(' ')
              .slice(0, 10)
              .join(' ')}...`}
          </p>
        </div>
      )}
    </div>
  ))}
</div>

      {selectedImage !== null && (
        <div className="fixed md:top-1 top-0 md:left-16 left-0 w-full h-full md:pb-24 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div
            className="max-w-2xl md:h-[calc(100vh-290px)] w-full relative"
            style={{ width: "600px" }}
          >
            <div className="flex flex-col p-2 text-white bg-[#1C0F3A] ">
              <p className="my-2">
              {imagesData[selectedImage].prompt}
              </p>

                <button
                  type="submit"
                  className="bg-gradient-to-bl from-btnPrimary to-btnSecondary font-semibold my-5 px-4 py-2 rounded-md h-fit w-fit text-center flex justify-center items-center hover:opacity-90 whitespace-nowrap"
                  onClick={handleCopyPrompt}

                >
                  <FaRegCopy className="text-white text-center text-sm md:text-base" />
                  {copyStatus || "Copy Prompt"}
                </button>
            </div>
            <Image
              alt={imagesData[selectedImage].alt}
              width={800}
              height={700}
              className="block h-[20%] w-[95%] mx-auto max-h-[65vh] md:max-h-full md:h-full md:w-full object-cover object-center"
              src={imagesData[selectedImage].src}
            />

            <div className="absolute md:-bottom-32 bottom-3 left-0 right-0 flex justify-between px-8 ">
              <button
                type="button"
                className="text-white bg-gray-700 px-4 py-2 text-xs md:text-base rounded-lg hover:bg-gray-600 focus:outline-none"
                onClick={closeModal}
              >
                Close
              </button>
              <Button
                btnType="button"
                title="Download"
                className="!w-fit !rounded-lg text-xs md:text-base"
                onClick={() => downloadImage(imagesData[selectedImage].src)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagesCollection;
