/* eslint-disable @next/next/next-script-for-ga */
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import Head from "next/head";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Intelliwriter.io – Terms and Conditions",
  description:
    "Review the Terms and Conditions of Intelliwriter.io. Understand the rules and guidelines for using our services and AI tools effectively.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Terms and Conditions</title>
        <link
          rel="canonical"
          href="https://intelliwriter.io/termsandcondition"
        />
        <meta
          name="description"
          content={
            metadata.description ??
            "Review the Terms and Conditions of Intelliwriter.io. Understand the rules and guidelines for using our services and AI tools effectively."
          }
        />{" "}
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

export default layout;
