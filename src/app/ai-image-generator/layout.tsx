/* eslint-disable @next/next/next-script-for-ga */
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import Script from "next/script";
export const metadata: Metadata = {
  title: "IntelliWriter Image generator – Get Instant AI Generated Images",
  description:
    "Generate effortlessly images for our AI tool by defining you thoughts!",
};

const AIImages = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>AI Image Generator | Intelliwriter</title>
        <meta
          name="description"
          content="Create stunning AI-generated images with Intelliwriter's AI Image Generator. Unleash your creativity and generate unique visuals in seconds."
        />
        <link
          rel="canonical"
          href="https://www.intelliwriter.io/ai-image-generator"
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
      <div>
        <PageProps>{children}</PageProps>
        <Scripts />
      </div>
    </>
  );
};

export default AIImages;
