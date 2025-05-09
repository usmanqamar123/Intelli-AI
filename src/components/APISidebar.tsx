"use client";

import { sidebarLinks } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdClose } from "react-icons/io";

export default function APISidebar() {
  const { apiSidebartoggle, setApiSidebartoggle } = useWebContext();
  const pathName = usePathname();

  return (
    <div
      className={`${
        apiSidebartoggle ? "w-full" : "w-0"
      } md:w-[300px] bg-transparent bg-opacity-70 backdrop-blur-md text-white border-r-2 border-opacity-10 border-white border-solid md:sticky fixed md:top-[80px] h-[90vh] md:left-0 left-0 flex flex-col justify-start transition-all duration-300 ease-in-out overflow-y-hidden hover:overflow-y-auto z-20 siderbar py-10`}
    >
      <div className="p-5 md:w-[295px]">
        <div className="md:hidden block absolute right-2 top-2 text-white">
          <IoMdClose onClick={() => setApiSidebartoggle(false)} />
        </div>

        <ul className="text-left mt-5 md:mt-0">
          {sidebarLinks.map((item) => (
            <li key={item.id} onClick={() => setApiSidebartoggle(false)}>
              <Link href={item.link}>
                <div
                  className={`flex gap-3 w-full p-2 hover:bg-[#640f6c] items-center transition-all text-white duration-200 sm:text-base text-sm my-2 rounded-md ${
                    pathName == item.link ? "bg-[#640f6c]" : ""
                  }`}
                >
                  <span>{React.createElement(item.icon)}</span>
                  <span className={`font-medium`}>{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
