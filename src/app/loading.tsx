import Image from "next/image";
import { Logo } from "../../public";
function Loading() {
  return (
    <div className="fixed inset-0 bg-opacity-90 flex items-center justify-center z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-44 w-44 md:h-56 md:w-56 flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="outer-ring rounded-full border-4 border-opacity-50 border-[#823fd3] h-full w-full animate-slow-spin"></div>

        {/* Inner glowing circle with logo */}
        <div className="absolute border-4 border-[#823fd3] rounded-full h-36 w-36 md:h-44 md:w-44 flex items-center justify-center z-10 glow">
          <div className="logoCircle text-center">
            <Image
              src={"/Logo.svg"}
              alt="Logo"
              width={0}
              height={0}
              priority={true}
              sizes="(max-width: 640px) 100vw, 2000px"
              className="w-[130px] animate-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
