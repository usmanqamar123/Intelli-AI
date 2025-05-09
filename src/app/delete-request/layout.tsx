/* eslint-disable @next/next/next-script-for-ga */
import React from "react";
import type { Metadata } from "next";
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Request Intelliwriter.io – Get Support for AI Content Tools",
  description:
    "Need help with Intelliwriter.io? Contact us for support with our AI content tools. We're here to help you maximize your creativity and productivity.",
};

const RequestPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>
          Request IntelliWriter.io – Get Support for AI Content Tools
        </title>
        <meta
          name="description"
          content="Get in touch with IntelliWriter.io for support and inquiries regarding our AI-powered content tools. Our team is here to assist you with any questions you have."
        />
        <link rel="canonical" href="https://intelliwriter.io/request-page" />
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

export default RequestPage;
