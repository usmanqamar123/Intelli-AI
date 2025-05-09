"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import Button from "@/components/Button";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import {
  affiliateTotalReferral,
  affiliateTotalUnpaidReferral,
  affiliateTotalPaidReferral,
} from "@/utils/affiliateTotalReferral";
import Image from "next/image";

interface DashboardLayoutProps {
  children: React.ReactNode;
  name?: string;
  af_code: string;
  profile_picture: string;
}

const DashboardPage: React.FC<DashboardLayoutProps> = () => {
  const dashboardDetails = [
    { id: 1, count: 0, title: "Referrals" },
    { id: 2, count: 0, title: "Paid Referrals" },
    { id: 3, count: 0, title: "Unpaid Referrals" },
  ];

  const router = useRouter();
  const [payoutMethod, setPayoutMethod] = useState(false);
  const [name, setName] = useState<string>("");
  const [af_code, setAf_Code] = useState<string>("");
  const { nameLetter, setNameLetter } = useAuth();
  const [sessionTokens, setSessionTokens] = useState<string | null>(null);
  const [sessionLetter, setSessionLetter] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [TotalReferralCount, setTotalReferralCount] = useState(0);
  const [TotalUnpaidReferralCount, setTotalUnpaidReferralCount] = useState(0);
  const [TotalPaidReferralCount, setTotalPaidReferralCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const tokens = localStorage.getItem("intelliaffiliate_token");
    const userId = localStorage.getItem("intelliuserId");
    
    if (!tokens || !userId) {
      router.push("/auth/login-affiliate");
      return;
    }

    setSessionTokens(tokens);

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/affiliate/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${tokens}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();

        setName(data.name || "");
        setAf_Code(data.af_code || "");

        const firstLetter = data.name ? data.name.charAt(0).toUpperCase() : "";
        setNameLetter(firstLetter);
        localStorage.setItem("intellinameLetter", firstLetter);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchUserData();
  }, [router, setNameLetter]);

  useEffect(() => {
    const tokens = localStorage.getItem("intelliaffiliate_token");
    const letter = localStorage.getItem("intellinameLetter");
    setSessionTokens(tokens);
    setSessionLetter(letter);
  }, []);

  useEffect(() => {
    const tokens = localStorage.getItem("intelliaffiliate_token");
    const referralCode = localStorage.getItem("intelliaf_code");

    if (!tokens || !referralCode) {
      router.push("/auth/login-affiliate");
      return;
    }

    const fetchData = async () => {
      try {
        const [
          totalReferralResponse,
          totalUnpaidReferralResponse,
          totalPaidReferralResponse,
        ] = await Promise.all([
          affiliateTotalReferral(tokens, referralCode),
          affiliateTotalUnpaidReferral(tokens, referralCode),
          affiliateTotalPaidReferral(tokens, referralCode),
        ]);

        if (totalReferralResponse.success) {
          setTotalReferralCount(totalReferralResponse.result);
        }

        if (totalUnpaidReferralResponse.success) {
          setTotalUnpaidReferralCount(totalUnpaidReferralResponse.result);
        }

        if (totalPaidReferralResponse.success) {
          setTotalPaidReferralCount(totalPaidReferralResponse.result);
        }
      } catch (error) {
        setError("Error fetching referral counts");
      }
    };

    fetchData();
  }, [router]);

  const copyToClipboard = () => {
    if (textareaRef.current) {
      navigator.clipboard
        .writeText(textareaRef.current.value)
        .then(() => {
          // Set copied to true to show the message
          setCopied(true);
          // Hide the message after 2 seconds
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <div className="text-white w-full px-4 py-8 md:py-16 flex flex-col items-center justify-center gap-10 text-center md:text-lg text-base ">
      <h1 className="w-full md:w-3/4 text-3xl md:text-4xl text-left font-semibold">
        Dashboard
      </h1>
      {/* user section */}
      <div className="w-full md:w-3/4 bg-[#161738] shadow-xl py-7 px-5 md:px-10 rounded-xl border border-[#FFFFFF14]">
        <div className="h-full p-0 flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="w-full h-full md:w-2/5 flex flex-col items-center justify-center gap-3">
            <div>
              {sessionTokens && (
                <div className="relative">
                  <div className="w-10 h-10 rounded-full uppercase bg-black border-2 flex items-center justify-center text-lg cursor-pointer">
                    {sessionLetter || nameLetter}
                  </div>
                </div>
              )}
            </div>
            <p className="font-semibold text-2xl">{name}</p>
            <Link
              href={"/affiliates/profile"}
              className="hover:scale-105 text-white/80 hover:text-white underline underline-offset-2"
            >
              Edit profile
            </Link>
          </div>
          <div className="w-full h-full md:w-[3/5] flex flex-wrap md:flex-nowrap">
            <div className="h-full flex flex-col gap-2 items-center justify-center my-auto p-2 border-r-2 border-h-full border-[#FFFFFF14] flex-1">
              {dashboardDetails
                .filter((item) => item.id === 1)
                .map((item) => (
                  <div key={item.id}>
                    <p className="text-4xl font-semibold">
                      {TotalReferralCount}
                    </p>
                    <p className="text-lg capitalize">{item.title}</p>
                  </div>
                ))}
            </div>
            <div className="h-full flex flex-col gap-4 items-center justify-center p-2 flex-1">
              {dashboardDetails
                .filter((item) => item.id === 2 || item.id === 3)
                .map((item) => (
                  <div key={item.id}>
                    {/* Display UnpaidCount for id === 2 */}
                    {item.id === 2 && (
                      <>
                        <p className="text-4xl font-semibold">
                          {TotalPaidReferralCount}
                        </p>
                        <p className="text-lg capitalize">{item.title}</p>
                      </>
                    )}
                    {/* Display PaidCount for id === 3 */}
                    {item.id === 3 && (
                      <>
                        <p className="text-4xl font-semibold">
                          {TotalUnpaidReferralCount}
                        </p>
                        <p className="text-lg capitalize">{item.title}</p>
                      </>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* payout method */}
      <div className="w-full md:w-3/4 bg-[#161738] flex flex-col md:flex-row items-center justify-center shadow-xl px-5 py-8 md:p-10 rounded-xl border border-[#FFFFFF14]">
        {payoutMethod ? (
          <p>hello</p>
        ) : (
          <div className="space-y-3">
            <div className="text-red-500 text-2xl">Important</div>
            <p>
              You don&apos;t have any payout method selected. Please select one
              now so we can pay you.
            </p>
            {/* <Link
              href={"/affiliates/payouts"}
              className="hover:scale-105 text-white/80 hover:text-white underline underline-offset-2"
            >
              Select payout method
            </Link> */}
          </div>
        )}
      </div>

      {/* reward */}
      <div className="w-full md:w-3/4 bg-[#161738] gap-5 flex flex-col md:flex-row items-center justify-center shadow-xl px-5 py-8 md:p-10 rounded-xl border border-[#FFFFFF14]">
        <div className="w-fit">
          <Image
            src="/refer.png"
            alt="Reward"
            layout="intrinsic"
            className="w-24 h-auto"
          />
        </div>
        <div className="w-fit space-y-3">
          <p className="font-semibold">
            Your reward for referring new customers
          </p>
          <p>
            You get{" "}
            <span className="font-semibold">15% recurring commission</span> for
            each referred customer{" "}
          </p>
        </div>
      </div>

      {/* social media */}
      <div className="w-full md:w-3/4 bg-[#161738] gap-3 flex flex-col items-center justify-center shadow-xl px-5 py-8 md:p-10 rounded-xl border border-[#FFFFFF14]">
        <p className="text-xl">Share on social media</p>
        <div className="flex gap-4">
          <Link href={"https://twitter.com/"} target="_blank">
            <FaTwitter size={32} color="#1DA1F2" />
          </Link>
          <Link href={"https://www.facebook.com/"} target="_blank">
            <FaFacebook size={32} color="#2E4576" />
          </Link>
          <Link href={"https://www.linkedin.com/"} target="_blank">
            <FaLinkedinIn size={32} color="#0A66C2" />
          </Link>
        </div>
        <p>Share this referral link to your friends and followers</p>
        <div className="relative w-full flex cursor-none">
          <Button
            title="Links"
            btnType="button"
            onClick={copyToClipboard}
            className="!w-fit !rounded-none !p-2 md:!px-4"
          />
          <textarea
            className="w-full bg-[#2d20512d] text-white/70 p-1 h-10 md:h-12 focus:outline-none border-gradient-blue-purple scrollbar-hide overflow-hidden text-base md:text-lg"
            name="af_code"
            value={`https://intelliwriter.io/?referral=${af_code}`}
            readOnly
            ref={textareaRef}
          ></textarea>
          <Button
            title={copied ? "Copied!" : "Copy"}
            btnType="button"
            className="!w-fit !rounded-none !p-2 md:!px-4"
            onClick={copyToClipboard}
            disabled={copied}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
