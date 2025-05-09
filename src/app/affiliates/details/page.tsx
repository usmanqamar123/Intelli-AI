"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  fetchAffiliateStatsForWeeks,
  fetchAffiliateStatsForMonths,
  affiliateStatsSevenDays,
} from "@/utils/affiliateSignupsStats";

const Page = () => {
  const [sevenDaysData, setSevenDaysData] = useState([]);
  const [fourWeeksData, setFourWeeksData] = useState([]);
  const [sixMonthsData, setSixMonthsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("sevenDays"); 
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const sessionTokens = localStorage.getItem("intelliaffiliate_token");
      const referralCode = localStorage.getItem("intelliaf_code");

      if (!sessionTokens || !referralCode) {
        router.push("/auth/login-affiliate");
        return;
      }

      try {
        const response7Days = await affiliateStatsSevenDays(
          sessionTokens,
          referralCode
        );
        if (response7Days.success) {
          setSevenDaysData(response7Days.result);
        } else {
          console.error(
            "Failed to fetch signup counts for 7 days:",
            response7Days.message
          );
        }

        const response4Weeks = await fetchAffiliateStatsForWeeks(
          sessionTokens,
          referralCode
        );
        if (response4Weeks.success) {
          setFourWeeksData(response4Weeks.result);
        } else {
          console.error(
            "Failed to fetch signup counts for 4 weeks:",
            response4Weeks.message
          );
        }

        const response6Months = await fetchAffiliateStatsForMonths(
          sessionTokens,
          referralCode
        );
        if (response6Months.success) {
          setSixMonthsData(response6Months.result);
        } else {
          console.error(
            "Failed to fetch signup counts for 6 Months:",
            response6Months.message
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const renderData = (data: any) => (
    <tbody>
      {Array.isArray(data) &&
        data.map((item: any, index: number) => (
          <tr
            key={index}
            className="border-b border-gray-700 hover:bg-[#21224d] transition ease-in-out delay-150 cursor-pointer"
          >
            <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">
              {item.date}
            </td>
            <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">
              {item.signUpCount}
            </td>
            <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">
              ${item.commission.toFixed(2)}
            </td>
          </tr>
        ))}
    </tbody>
  );

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <div
          className={`h-20 w-20 animate-spin rounded-full text-white border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        ></div>
      </div>
    );
  }

  return (
    <div className="py-20 text-white w-full px-4 flex flex-col items-center justify-center gap-10 md:text-center md:text-lg text-base">
      <div className="w-full md:w-3/4 bg-[#161738] shadow-xl py-7 px-5 md:px-10 rounded-xl border border-[#FFFFFF14] flex flex-col items-center justify-center gap-5 md:gap-8">
        <h1 className="md:text-4xl text-3xl text-center font-semibold">
          Performance details
        </h1>
        <div className="text-white/80 flex flex-row items-center justify-center gap-2 text-sm md:text-xl cursor-pointer">
          <div
            className={`underline ${
              activeTab === "sevenDays" ? "text-white font-semibold" : ""
            }`}
            onClick={() => handleTabChange("sevenDays")}
          >
            Last 7 days
          </div>
          |
          <div
            className={`underline ${
              activeTab === "fourWeeks" ? "text-white font-semibold" : ""
            }`}
            onClick={() => handleTabChange("fourWeeks")}
          >
            Last 4 weeks
          </div>
          |
          <div
            className={`underline ${
              activeTab === "sixMonths" ? "text-white font-semibold" : ""
            }`}
            onClick={() => handleTabChange("sixMonths")}
          >
            Last 6 months
          </div>
        </div>

        {activeTab === "sevenDays" && (
          <table className="table-auto border-collapse w-full ">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Date
                </th>
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Signups
                </th>
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Earnings
                </th>
              </tr>
            </thead>
            {renderData(sevenDaysData)}
          </table>
        )}

        {activeTab === "fourWeeks" && (
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Weeks
                </th>
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Signups
                </th>
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(fourWeeksData) &&
                fourWeeksData.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 hover:bg-[#21224d] transition ease-in-out delay-150 cursor-pointer"
                  >
                    <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">{`${item.weekStartDate} - ${item.weekEndDate}`}</td>
                    <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">
                      {item.signUpCount}
                    </td>
                    <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">
                      ${item.commission.toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}

        {activeTab === "sixMonths" && (
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Months
                </th>
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Signups
                </th>
                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(sixMonthsData) &&
                sixMonthsData.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 hover:bg-[#21224d] transition ease-in-out delay-150 cursor-pointer"
                  >
                    <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">{`${item.monthStartDate} - ${item.monthEndDate}`}</td>
                    <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">
                      {item.signUpCount}
                    </td>
                    <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">
                      ${item.commission.toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Page;
