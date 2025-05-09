"use client";
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import React from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

function capitalizeString(str: any) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }

  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  let pathName = usePathname();
  let toolName = capitalizeString(pathName.split("/").pop());

  // Generate title and description dynamically
  let title = `IntelliWriter.io – ${toolName}`;
  let description = `Discover the ${toolName} feature of IntelliWriter.io. Utilize advanced AI tools to enhance your content creation process and achieve exceptional results.`;

  return (
    <>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://intelliwriter.io${pathName}`} />
      </Head>
      <main>
        <PageProps>{children}</PageProps>
        <Scripts />
      </main>
    </>
  );
};

export default Layout;
