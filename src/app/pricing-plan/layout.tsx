/* eslint-disable @next/next/next-script-for-ga */
// import PageProps from "@/components/PageProps";
import PageProps from "../../components/PageProps";
// import Scripts from "@/components/Scripts";
import Scripts from "../../components/Scripts";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Intelliwriter.io – Pricing Plan",
  description:
    "Explore the pricing plans of Intelliwriter.io and find the perfect plan to suit your AI-driven content creation needs. Choose from a variety of options tailored to your requirements.",
};

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Pricing Plan</title>
        <link rel="canonical" href="https://intelliwriter.io/pricing-plan" />
        <meta
          name="description"
          content={
            metadata.description ??
            "Explore the pricing plans of Intelliwriter.io and find the perfect plan to suit your AI-driven content creation needs. Choose from a variety of options tailored to your requirements."
          }
        />
      </Head>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNPNZ6PR');`,
        }}
      />
      <main>
        <PageProps>{children}</PageProps>
        <Scripts />
      </main>
    </>
  );
};

export default ChatLayout;
