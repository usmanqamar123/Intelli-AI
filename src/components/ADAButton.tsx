"use client"
import React, { useState } from "react";
import ADASidebar from "./ADASidebar";
import { FaWheelchair } from "react-icons/fa";

const ADAButton = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <button
        className="fixed right-2 bottom-[15%] md:bottom-[10%] w-8 h-8 md:w-16 md:h-16 border-4 border-[#7b1fa2]  bg-[#ffff00] !text-black rounded-full flex items-center justify-center"
        onClick={isSidebarOpen ? closeSidebar : toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <>
            <FaWheelchair className="text-[#7b1fa2]  text-[24px] " />
          </>
        )}
      </button>
      {isSidebarOpen && <ADASidebar closeModal={closeSidebar} />}
    </div>
  );
};

export default ADAButton;
