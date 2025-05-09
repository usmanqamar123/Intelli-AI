import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IntelliWriter AI Blog Generator – Get Support for AI Content Tools",
  description:
    "Generate effortlessly blog content for our AI tool by defining your thoughts!",
};

const AIBlogs = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>
          IntelliWriter AI Blog Generator – Get Support for AI Content Tools
        </title>
        <meta
          name="description"
          content="Generate effortlessly blog content for our AI tool by defining your thoughts!"
        />
        <link
          rel="canonical"
          href="https://intelliwriter.io/ai-blog-generator"
        />
      </Head>

      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MNPNZ6PR');
          `,
        }}
      />

      <main>
        <PageProps >{children}</PageProps>
        <Scripts />
      </main>
    </>
  );
};

export default AIBlogs;
