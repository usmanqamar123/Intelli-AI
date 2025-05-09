import React from "react";
import type { Metadata } from "next";
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IntelliWriter.io Blogs – Keep in touch with Us",
  description:
    "Daily Updated blogs of Intelliwriter AI Development and features",
};
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Maintenance</title>
        <meta
          name="description"
          content={
            metadata.description ??
            "Daily Updated blogs of Intelliwriter AI Development and features"
          }
        />
        <link rel="canonical" href="https://intelliwriter.io/maintenance" />
      </Head>
      <main>
        <PageProps>{children}</PageProps>
        <Scripts />
      </main>
    </>
  );
}
