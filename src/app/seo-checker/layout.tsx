import PageProps from "@/components/PageProps";

import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "AI SEO Checker Tool | Smart AI SEO Checker",
  description:
    "AI SEO Checker helps you to analyze the SEO of an article just by pasting your article URL. Boost traffic, save time, and rank higher with this smart AI SEO Checker for blogs.",
    alternates:{
      canonical: 'https://intelliwriter.io/seo-checker',
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
