import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import React from "react";
import Head from "next/head";

const checkoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Payment Page</title>
        <meta
          name="description"
          content="Complete your payment for IntelliWriter.io services quickly and securely. Start using our AI-powered writing tools after a seamless checkout process."
        />
        <link
          rel="canonical"
          href="https://intelliwriter.io/payment"
        />
      </Head>
      <head>
        <link rel="canonical" href="https://intelliwriter.io/checkout-page" />
      </head>
      <div>
        {children}
        <Scripts />
      </div>
    </>
  );
};

export default checkoutPage;
