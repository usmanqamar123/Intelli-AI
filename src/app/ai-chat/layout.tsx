import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Intelliwriter.io – AI Chat",
  description:
    "Chat with Intelliwriter.io's AI to create content in real-time. Boost productivity with smart, innovative conversations and seamless assistance.",
};

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – AI Chat</title>
        <link rel="canonical" href="https://intelliwriter.io/ai-chat" />
        <meta
          name="description"
          content={
            metadata.description ??
            "Chat with Intelliwriter.io's AI to create content in real-time. Boost productivity with smart, innovative conversations and seamless assistance."
          }
        />
      </Head>
      {/* Google Tag Manager Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MNPNZ6PR');
        `}
      </Script>
      <main>
        <PageProps>{children}</PageProps>
        <Scripts />
      </main>
    </>
  );
};

export default ChatLayout;
