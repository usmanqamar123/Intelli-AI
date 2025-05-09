"use client";

import { useWebContext } from "@/context/ContextProvider";
import dynamic from "next/dynamic";
import React from "react";
import ADAButton from "@/components/ADAButton";
const Header = dynamic(() => import("@/components/Home3/Header"));
const Footer = dynamic(() => import("@/components/Home3/Footer"));

const PageProps = ({ children }: { children: React.ReactNode }) => {
  const { aboutRef, pricingRef } = useWebContext();
  return (
    <>
      <Header aboutRef={aboutRef} pricingRef={pricingRef} />
      {children}
      <ADAButton />
      <Footer />
    </>
  );
};

export default PageProps;
