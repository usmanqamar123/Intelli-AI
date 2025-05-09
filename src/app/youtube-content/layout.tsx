/* eslint-disable @next/next/next-script-for-ga */
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IntelliWriter.io – AI YouTube Content Generator",
  description:
    "Create engaging YouTube content effortlessly with IntelliWriter.io's AI YouTube Content Generator. Enhance your video scripts and descriptions with smart AI tools.",
};

const YoutubeContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – YouTube Content Generator</title>
        <link
          rel="canonical"
          href="https://www.intelliwriter.io/youtube-content"
        />
        <meta
          name="description"
          content={
            metadata.description ??
            "Create engaging YouTube content effortlessly with IntelliWriter.io's AI YouTube Content Generator. Enhance your video scripts and descriptions with smart AI tools."
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

export default YoutubeContent;
