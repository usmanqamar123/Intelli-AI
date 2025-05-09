import AffiliateHeader from "@/components/AffiliateHeader";
import ADAButton from "@/components/ADAButton";
import Scripts from "@/components/Scripts";
import React from "react";
import Head from "next/head";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Affiliate Program | Intelliwriter</title>
        <meta
          name="description"
          content="Join the Intelliwriter Affiliate Program and earn by sharing our smart writing tools with your network. Boost productivity with innovative AI-powered solutions."
        />
        <link rel="canonical" href="https://intelliwriter.io/affiliates" />
      </Head>
      <div className="relative">
        <div className="min-h-screen">
          <AffiliateHeader />
          {children}
        </div>
        <div style={{ zIndex: 1000, position: "relative" }}>
          <ADAButton />
        </div>
        <div className="absolute bottom-0 w-full mt-8 py-3 text-white md:text-lg border-t-2 border-[#FFFFFF40] flex items-center justify-center">
          Powered by @Intelliwriter.io
        </div>
        <Scripts />
      </div>
    </>
  );
};

export default layout;
