import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import Head from "next/head";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelliwriter.io – Become an Affiliate",
  description:
    "Join Intelliwriter.io's Affiliate Program. Promote innovative AI tools and earn rewards by helping others boost creativity with cutting-edge features.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Become an Affiliate</title>
        <meta
          name="description"
          content="Join the IntelliWriter.io affiliate program and start earning by promoting our AI-powered writing tools to a broader audience."
        />
        <link
          rel="canonical"
          href="https://intelliwriter.io/become-an-affiliate"
          as="script"
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
