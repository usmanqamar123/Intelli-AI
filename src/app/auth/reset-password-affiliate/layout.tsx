/* eslint-disable @next/next/next-script-for-ga */
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title:
    "Join IntelliWriter.io – Register for Free AI Writing & Image Generation",
  description:
    "Sign up now on IntelliWriter.io to access the ultimate AI writing generator and image creator. Register today for free and unleash your content's potential.",
};

const RegisterPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>
          Join IntelliWriter.io – Register for Free AI Writing & Image
          Generation
        </title>
        {/* <meta
          name="description"
          content="Sign up now on IntelliWriter.io to access the ultimate AI writing generator and image creator. Register today for free and unleash your content's potential."
        /> */}
        <meta
          name="description"
          content={
            metadata.description ??
            "work with Intelliwriter.io's to create content in real-time. Boost productivity with smart, innovative conversations and seamless assistance."
          }
        />
        <link
          rel="canonical"
          href="https://intelliwriter.io/auth/reset-password-affiliate"
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
      <body>
        {children}
        <Scripts />
      </body>
    </>
  );
};

export default RegisterPage;
