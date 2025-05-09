import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollButton = () => {
  return (
    <Link
      href="/#about"
      className="flex flex-col items-center text-white cursor-pointer"
    >
      <svg
        width="40px"
        height="100%"
        viewBox="0 0 247 390"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="fill-none stroke-white stroke-[10] cursor-pointer"
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          className="scroll-animation"
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        />
      </svg>

      <MdKeyboardDoubleArrowDown className="text-white text-3xl scroll-animation2" />
    </Link>
  );
};

export default ScrollButton;
