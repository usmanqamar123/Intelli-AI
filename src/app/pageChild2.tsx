"use client";

import AboutUs from "@/components/Home2/AboutUs";
import Models from "@/components/Home2/Models";
import { Accord } from "@/constants";
import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Home2/Footer"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/Home2/Hero"), { ssr: false });

const FAQs = dynamic(() => import("@/components/Home2/FAQs"), { ssr: false });

const PricingPlan = dynamic(() => import("@/components/Home2/PricingPlan"), {
  ssr: false,
});
const CookiePopup = dynamic(() => import("@/components/CookiePopup"), {
  ssr: false,
});
const Slider = dynamic(() => import("@/components/Home2/Slider"), {
  ssr: false,
});
export default function PageChild() {
  const { aboutRef, pricingRef } = useWebContext();

  return (
    <>
      <Header aboutRef={aboutRef} pricingRef={pricingRef} />
      <main className="overflow-hidden w-full">
        <div className="w-full flex flex-col items-center">
          <Hero />
          <AboutUs />
          <Slider />
          <Models />
          <PricingPlan />
          <FAQs faqs={Accord} />
        </div>
        <CookiePopup />
      </main>
      <Footer />
    </>
  );
}
