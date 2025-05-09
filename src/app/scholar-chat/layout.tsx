/* eslint-disable @next/next/next-script-for-ga */
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Intelliwriter.io –  Scholar Chat",
  description:
    "Scholar Chat with Intelliwriter.io's AI to create content in real-time. Boost productivity with smart, innovative conversations and seamless assistance.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Scholar Chat</title>
        <link rel="canonical" href="https://intelliwriter.io/scholar-chat" />
        <meta
          name="description"
          content={
            metadata.description ??
            "Scholar Chat with Intelliwriter.io's AI to create content in real-time. Boost productivity with smart, innovative conversations and seamless assistance."
          }
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNPNZ6PR');`,
          }}
        />
      </Head>
      <main>
        <PageProps>{children}</PageProps>
        <Scripts />
      </main>
    </>
  );
};

export default Layout;
