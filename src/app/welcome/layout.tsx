/* eslint-disable @next/next/next-script-for-ga */
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title: "Intelliwriter.io – Welcome to our Intelliwriter",
  description:
    "Welcome to Intelliwriter, our AI tool – designed to simplify tasks, inspire creativity, and enhance productivity. Dive in and unlock the potential of seamless, intelligent assistance!",
};

const WelcomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Welcome to Intelliwriter</title>
        <link rel="canonical" href="https://intelliwriter.io/welcome" />
        <meta
          name="description"
          content={
            metadata.description ??
            "Welcome to Intelliwriter, our AI tool – designed to simplify tasks, inspire creativity, and enhance productivity. Dive in and unlock the potential of seamless, intelligent assistance!"
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
        {children}
        <Scripts />
      </main>
    </>
  );
};

export default WelcomeLayout;
