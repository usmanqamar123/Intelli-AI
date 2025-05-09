"use client";
import React from "react";
import Head from "next/head";

import { usePathname } from "next/navigation";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <>
      <Head>
        <title>Admin | Intelliwriter</title>
        <link rel="canonical" href={`https://intelliwriter.io${pathName}`} />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AdminLayout;
