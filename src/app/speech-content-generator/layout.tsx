/* eslint-disable @next/next/next-script-for-ga */
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title:
    "IntelliWriter Speech text generator – Get Instant AI Generated Speech text",
  description:
    "Generate effortlessly speech text for our AI tool by defining you thoughts!",
};

const AIVoice = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Speech Content Generator</title>
        <meta
          name="description"
          content={
            metadata.description ??
            "Generate speech content effortlessly with our AI-powered tool. Simply define your thoughts, and let the AI craft the perfect speech text for you."
          }
        />
        <link
          rel="canonical"
          href="https://www.intelliwriter.io/speech-content-generator"
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

export default AIVoice;
