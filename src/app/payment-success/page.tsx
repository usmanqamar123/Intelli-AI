"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Link from "next/link";
import { Logo } from "../../../public";
import Image from "next/image";

const PaymentSuccess: React.FC<any> = (props) => {
  const router = useRouter();
  const tokens =
    typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;

  useEffect(() => {
    const saveUserSubscription = async () => {
      const sessionId = new URLSearchParams(window.location.search).get(
        "session_id"
      );
      const plan = new URLSearchParams(window.location.search).get("plan");
      const option = new URLSearchParams(window.location.search).get("option");
      const customerId = new URLSearchParams(window.location.search).get("id");
      // const customerId =
      //   typeof window !== "undefined" ? localStorage.getItem("intelliuserId") : null;

      if (!sessionId || !customerId) {
        console.error("Missing sessionId or customerId");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stripe/save-subscription`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sessionId,
              customerId,
              plan,
              option,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to save subscription");
        }

        const result = await response.json();
      } catch (error: any) {
        console.error("Error saving subscription:", error.message);
      }
    };

    saveUserSubscription();
  }, []);

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
              <Image
                src="/Logo.webp"
                alt="logo"
                width={200}
                height={200}
                priority={true}
                className="w-1/2 h-1/2 md:w-full md:h-full mb-4"
              />
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4">
              Thank You for Subscribing
            </h1>
            <p className="w-3/4 sm:w-1/3 md:w-3/4 lg:w-1/3 my-4 md:my-10 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              Thank you for upgrading your plan with Intelliwriter.io
            </p>
            <Link href={tokens ?`${process.env.NEXT_PUBLIC_APP}user/dashboard` : `${process.env.NEXT_PUBLIC_APP}auth/login`}>
              <button className="bg-[#C407B9] hover:bg-[#C407B9]/90 mb-4 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-xl">
                Continue to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
