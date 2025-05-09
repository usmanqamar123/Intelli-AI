"use client";

import { useWebContext } from "@/context/ContextProvider";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  pricingData as defaultPricingData,
  yearlyPricingData,
} from "../constants";
import createSubscription from "@/utils/createSubscription";
import { PricingData } from "../types";
import { BsRecord2 } from "react-icons/bs";
import Button from "./Button";
import Link from "next/link";

const tokens =
  typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;
const userId =
  typeof window !== "undefined" ? localStorage.getItem("intelliuserId") : null;

interface PricingPlanProps {
  pricingData?: PricingData[];
}

const PricingCard: React.FC<{
  card: PricingData;
  currentPlan: string | null;
  selectedOption: string;
}> = ({ card, selectedOption, currentPlan }) => {
  const router = useRouter();
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (tokens && userId) {
      if (card.id === 0 && currentPlan === "Basic Plan") {
        setSubscribed(true);
      } else if (
        card.id === 1 &&
        currentPlan === "Standard Pack" &&
        selectedOption === "monthly"
      ) {
        setSubscribed(true);
      } else if (
        card.id === 2 &&
        currentPlan === "Premium Pack" &&
        selectedOption === "monthly"
      ) {
        setSubscribed(true);
      } else if (
        card.id === 1 &&
        currentPlan === "Standard Pack Yearly" &&
        selectedOption === "yearly"
      ) {
        setSubscribed(true);
      } else if (
        card.id === 2 &&
        currentPlan === "Premium Pack Yearly" &&
        selectedOption === "yearly"
      ) {
        setSubscribed(true);
      } else {
        setSubscribed(false);
      }
    }
  }, [card.id, currentPlan, tokens, userId]);

  useEffect(() => {
    if (card.id === 0 && tokens) {
      setSubscribed(true);
    } else {
      setSubscribed(false);
    }
  }, [card.id, tokens]);

  const handleClick = async () => {
    if (!tokens && !subscribed) {
      if (card.id === 0) {
        router.push("/auth/register");
      } else {
        router.push("/auth/login");
      }
      return;
    }

    if (!userId) {
      console.error("User ID is null");
      return;
    }

    try {
      const { success, result } = await createSubscription({
        customerId: parseInt(userId, 10),
        productName: card.name,
      });

      if (success) {
        window.location.href = result;
      } else {
        console.error("Subscription creation failed:", result);
      }
    } catch (error) {
      console.error("Error creating subscription:", error);
    }
  };

  const renderCard = () => {
    switch (card.id) {
      case 0:
        return <div className="p-4"></div>;
      case 1:
        return <div className="p-4"></div>;
      case 2:
        return (
          <div className="bg-gradient-to-r xl:text-base lg:text-sm text-xs text-white font-medium from-[#00bcfe] to-[#cb41ff] py-1 text-center">
            Most Popular
          </div>
        );
      default:
        return null; // Handle default case if necessary
    }
  };

  const oldPrice = Number(card.price) || 0;

  const discountedPrice =
    selectedOption === "yearly" && card.id !== 0
    ? ((oldPrice * 12) * 0.8).toFixed(2)
      : selectedOption === "monthly"
      ? (oldPrice).toFixed(2)
      : oldPrice.toFixed(2);

  const isDisabled =
    card.id === 0 &&
    (selectedOption === "monthly" || selectedOption === "yearly") &&
    (currentPlan === "Standard Pack" ||
      currentPlan === "Premium Pack" ||
      currentPlan === "Standard Pack Yearly" ||
      currentPlan === "Premium Pack Yearly");

      const planLink = `${process.env.NEXT_PUBLIC_APP}user/plans`; 

  return (
    <div
      className={`bg-white/5 hover:bg-white/10 transition duration-500 md:max-w-[580px] sm:w-[50wh] w-[70wh] relative overflow-hidden border-[#FFFFFF14] text-white text-opacity-70 shadow-lg rounded-xl space-y-5 border ${
        card.id === 1 ? "border-white md:scale-110" : "border-white/20"
      } transition duration-300 `}
    >
      {renderCard()}

      <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
      <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[30px]"></div>
      <div className="absolute top-4 left-4 bg-[#9a58eb] w-16 h-16 blur-[50px]"></div>

      <div className="w-full flex flex-col justify-between gap-5 relative 2xl:px-6 xl:px-5 lg:px-4 px-3">
        {/* Card top */}
        <div className="flex items-center lg:gap-3 gap-2">
          <div className="xl:text-[40px] lg:text-[25px] text-xl text-white ">
            {React.createElement(card.icon)}
          </div>

          <div>
            <p className="!text-white xl:text-lg lg:text-base text-sm tracking-widest font-extralight">
              {card.packagehint}
            </p>
            <p className="!text-white xl:text-2xl lg:text-xl text-lg tracking-widest font-bold pb-3">
              {card.package}
            </p>
          </div>
        </div>

        {/* Card pricing */}
        <p className="xl:text-5xl lg:text-4xl text-3xl !text-white/90">
          <span>{discountedPrice}</span>
          <span className="text-base font-light pl-1">USD</span>
          <span className="text-base font-extralight">/{selectedOption}</span>
          {selectedOption === "yearly" && card.id === 1 && (
            <p className="text-base text-gray-400 line-through ">
              {119.99} USD
            </p>
          )}
          {selectedOption === "yearly" && card.id === 2 && (
            <p className="text-base text-gray-400 line-through ">{299.99} USD</p>
          )}
        </p>

        <div className="flex justify-center py-3 w-full">
          {card.id === 0 && currentPlan === "Basic Plan" ? (
            <Button
              title="Subscribed"
              btnType="button"
              className="btn pointer-events-none opacity-70"
            />
          ) : card.id === 1 &&
            currentPlan === "Standard Pack" &&
            selectedOption === "monthly" ? (
            <Button
              title="Subscribed"
              btnType="button"
              className="btn pointer-events-none opacity-70"
            />
          ) : card.id === 2 &&
            currentPlan === "Premium Pack" &&
            selectedOption === "monthly" ? (
            <Button
              title="Subscribed"
              btnType="button"
              className="btn pointer-events-none opacity-70"
            />
          ) : card.id === 1 &&
            currentPlan === "Standard Pack Yearly" &&
            selectedOption === "yearly" ? (
            <Button
              title="Subscribed"
              btnType="button"
              className="btn pointer-events-none opacity-70"
            />
          ) : card.id === 2 &&
            currentPlan === "Premium Pack Yearly" &&
            selectedOption === "yearly" ? (
            <Button
              title="Subscribed"
              btnType="button"
              className="btn pointer-events-none opacity-70"
            />
          ) : (
            <Link href={planLink} passHref>
              <Button
                title="Subscribe now"
                btnType="button"
                className={`!w-full ${
                  isDisabled ? "btn pointer-events-none opacity-70" : ""
                }`}
                disabled={isDisabled}
              />
            </Link>
          )}
        </div>

        <div className="py-6">
          <ul className="flex flex-col gap-3">
            {card.featuresName.map((featurename, index) => (
              <li
                key={index}
                className="flex xl:gap-2 gap-1 items-start xl:text-base lg:text-sm text-xs font-light text-white w-full"
              >
                <div className="saturate-[3] text-gray-400 lg:text-base text-sm mt-[5px]">
                  <BsRecord2 />
                </div>
                <div>{featurename}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PricingPlan: React.FC<PricingPlanProps> = ({
  pricingData = defaultPricingData,
}) => {
  const { pricingRef } = useWebContext();

  const [selectedOption, setSelectedOption] = useState("monthly");
  const [planName, setPlanName] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const fetchCurrentPlan = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/current-plan/get-plan/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch current plan");
      }
      const data = await response.json();
      setPlanName(data.plan_name);
    } catch (error: any) {
      console.error("Error fetching current plan:", error.message);
    }
  };

  useEffect(() => {
    if (tokens && userId) {
      fetchCurrentPlan();
    }
  }, [tokens, userId]);

  const pricingDataToShow =
    selectedOption === "yearly" ? yearlyPricingData : defaultPricingData;
  // Check if the current URL contains "/pricing-plan"
  const pathname = usePathname();
  const isPricingPlanPage = pathname.includes("/pricing-plan");
  return (
    <div
      className="w-full flex items-center flex-col justify-center pb-10"
      id="pricing"
      ref={pricingRef}
    >
      <div className="xl:px-16 md:px-6 px-4 w-full container">
        {!isPricingPlanPage && (
          <>
            <h2 className="lg:text-6xl text-5xl font-normal relative p-4">
              <span className="gradient-span-1 text-white relative  font-[600]">
                PRICING PLANS
              </span>
            </h2>

            <p className="md:text-[21px] text-[16px] font-[500] leading-[36px] !text-white lg:px-6  p-4">
              Simple pricing plans for everyone and every budget.
            </p>
          </>
        )}

        <div className=" w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="swatches flex justify-center mb-8 bg-black/50 rounded-[12px] w-[100px]">
              <div
                className={`swatch mr-4 cursor-pointer !text-white ${
                  selectedOption === "monthly"
                    ? "swatchesMonthly !text-black"
                    : ""
                }`}
                onClick={() => handleOptionChange("monthly")}
              >
                <span>Monthly</span>
              </div>
              <div
                className={`swatch cursor-pointer !text-white ${
                  selectedOption === "yearly"
                    ? "swatchesMonthly !text-black active"
                    : ""
                }`}
                onClick={() => handleOptionChange("yearly")}
              >
                <span>Yearly</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center xl:gap-10 gap-7 xl:px-10 md:p-6 p-4">
              {pricingDataToShow.map((card) => (
                <PricingCard
                  key={card.id}
                  card={card}
                  selectedOption={selectedOption}
                  currentPlan={planName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
