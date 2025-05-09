"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hey } from "../../../public";
import { useRouter } from "next/navigation";

const welcome = () => {
  const router = useRouter();

  const handleUpdateUser = async () => {
    const userId = localStorage.getItem("intelliuserId");
    if (!userId) {
      console.error("User ID not found in localStorage.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/update-new-user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.statusText}`);
      }

      const data = await response.json();

      // Navigate to the dashboard
      router.push("/user/dashboard");
    } catch (error) {
      console.error("Error updating user:", (error as Error).message);
    }
  };

  return (
    <div className="fixed inset-0 py-16 bg-black bg-opacity-60 flex justify-center items-center z-100">
      <div className="bg-[#1C0F3A] p-4 sm:p-6 rounded-lg relative w-[95%] sm:w-11/12 lg:w-3/4 max-w-6xl overflow-hidden">
        {/* Add the circles as background elements */}
        <div className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 bg-[#6C0988] rounded-full blur-3xl opacity-80 bottom-0 left-0 z-0"></div>
        <div className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 bg-[#1F3174] rounded-full blur-3xl opacity-80 top-0 right-0 z-0"></div>

        {/* Main Content */}
        <div className="relative text-white overflow-hidden text-center z-10">
          <div className="relative flex flex-col z-40 items-center justify-center h-full px-4 sm:px-6">
            <div className="flex flex-row justify-center items-center">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Hey
              </h1>
              <Image
                src={Hey}
                alt="HI, Welcome"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-28"
              />
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 md:mt-4">
              Welcome to Intelliwriter
            </h1>
            <p className="w-11/12 sm:w-9/12 md:w-11/12 my-4 md:my-10 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Welcome to our AI tool – designed to simplify tasks, inspire
              creativity, and enhance productivity. Dive in and unlock the
              potential of seamless, intelligent assistance!
            </p>
            <Link href="/user/dashboard" onClick={handleUpdateUser}>
              <button className="bg-[#C407B9] hover:bg-[#C407B9]/90 mb-4 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-xl">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;
