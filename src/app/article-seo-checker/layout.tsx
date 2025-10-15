import PageProps from "@/components/PageProps";

import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Free Article SEO Checker|Analyze & Optimize Articles",
  description:
    "Use our free Article SEO Checker to analyze content quality, readability & structure. Get actionable fixes to improve your rankings. Try For Free Now!",
    alternates:{
      canonical: 'https://intelliwriter.io/article-seo-checker',
    }
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <PageProps>{children}</PageProps>
      </main>
    </>
  );
};

export default Layout;
