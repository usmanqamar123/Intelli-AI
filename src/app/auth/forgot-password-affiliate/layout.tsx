import Scripts from "@/components/Scripts";
import Head from "next/head";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (

    <>
      <Head>
        <title>IntelliWriter.io – Home</title>
        <meta
          name="description"
          content="Welcome to IntelliWriter.io – Your go-to platform for AI-powered writing tools and productivity boosters."
        />
        <link rel="canonical" href="https://intelliwriter.io" />
      </Head>
      <body>
        {children}
        <Scripts />
      </body>
    </>
  );
};

export default layout;
