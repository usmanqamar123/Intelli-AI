import React from "react";
import "./loader.css"; // import the CSS below

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="loader scale-75">
        <svg
          id="pegtopone"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shine">
              <feGaussianBlur stdDeviation="3" />
            </filter>
            <mask id="mask">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        <svg
          id="pegtoptwo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        <svg
          id="pegtopthree"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </div>
       <p className="mt-16 text-white text-lg font-medium tracking-wide animate-pulse">
    Analyzing your article SEO...
  </p>
    </div>
  );
};

export default Loader;
