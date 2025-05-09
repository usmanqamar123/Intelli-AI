"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import {
  affiliateReferralDetail,
  affiliateReferralPaying,
  affiliateReferralFree,
} from "@/utils/affiliateReferralDetail";

interface UserDetails {
  email: string;
  createdAt: string;
  duration: {
    years: number;
    months: number;
  };
}

const Referrals: React.FC = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>("all");
  const [details, setDetails] = useState<UserDetails[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (endpoint: string) => {
    const sessionTokens = localStorage.getItem("intelliaffiliate_token");
    const referralCode = localStorage.getItem("intelliaf_code");

    if (!sessionTokens || !referralCode) {
      router.push("/auth/login-affiliate");
      return;
    }

    try {
      let response;
      switch (endpoint) {
        case "all":
          response = await affiliateReferralDetail(sessionTokens, referralCode);
          break;
        case "free":
          response = await affiliateReferralFree(sessionTokens, referralCode);
          break;
        case "paying":
          response = await affiliateReferralPaying(sessionTokens, referralCode);
          break;
        default:
          break;
      }

      if (response && response.success) {
        setDetails(response.result);
      } else {
        setError((response && response.message) || "Unknown error occurred");
      }
    } catch (error) {
      setError("Error fetching affiliate details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedOption);
  }, [selectedOption]);

  const handleDownload = () => {
    if (!details || details.length === 0) {
      alert("No data available to download.");
      return;
    }

    const csvContent =
      "data:text/csv;charset=utf-8," +
      details
        .map(
          (detail) =>
            `${detail.email},${detail.createdAt},${detail.duration.years} years, ${detail.duration.months} months`
        )
        .join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "referrals.csv");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <div
          className={`h-20 w-20 animate-spin rounded-full text-white border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        ></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-20 text-white w-full px-4 flex flex-col items-center justify-center gap-10 md:text-center md:text-lg text-base">
      <div className="w-full md:w-3/4 bg-[#161738] shadow-xl py-7 px-5 md:px-10 rounded-xl border border-[#FFFFFF14] flex flex-col items-center justify-center gap-5">
        <h1 className="md:text-4xl text-3xl text-center font-semibold">
          Your latest referrals
        </h1>
        <div className="w-fit">
          <Button
            onClick={handleDownload}
            title="Download"
            btnType="button"
            className="text-2xl"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-sm md:text-xl text-white/80 cursor-pointer">
          <div
            onClick={() => setSelectedOption("all")}
            className={`underline ${
              selectedOption === "all" ? "text-white font-semibold" : ""
            }`}
          >
            All
          </div>
          |
          <div
            onClick={() => setSelectedOption("free")}
            className={`underline ${
              selectedOption === "free" ? "text-white font-semibold" : ""
            }`}
          >
            Free/Trial
          </div>
          |
          <div
            onClick={() => setSelectedOption("paying")}
            className={`underline ${
              selectedOption === "paying" ? "text-white font-semibold" : ""
            }`}
          >
            Paying
          </div>
        </div>

        {details && details.length > 0 ? (
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Email
                </th>
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Created
                </th>
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Customer Since
                </th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, index: number) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#21224d] transition ease-in-out delay-150 cursor-pointer"
                >
                  <td>{detail.email}</td>
                  <td>{new Date(detail.createdAt).toLocaleDateString()}</td>
                  <td>{`${detail.duration.years} years, ${detail.duration.months} months`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No details available</div>
        )}
      </div>
    </div>
  );
};

export default Referrals;
