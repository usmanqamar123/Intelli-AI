/* eslint-disable @next/next/next-script-for-ga */
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import Head from "next/head";
import React from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IntelliWriter.io – Privacy Policy",
  description:
    "Read IntelliWriter.io's Privacy Policy to understand how we collect, use, and protect your data. Your privacy is important to us.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.intelliwriter.io/privacypolicy"
        />
        <meta
          name="description"
          content={
            metadata.description ??
            "Read IntelliWriter.io's Privacy Policy to understand how we collect, use, and protect your data. Your privacy is important to us."
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

export default layout;
