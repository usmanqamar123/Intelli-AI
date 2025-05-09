import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import React from "react";
import Head from "next/head";

const PaymentSuccess = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – Payment Successful</title>
        <meta
          name="description"
          content="Your payment was successful! Thank you for using IntelliWriter.io. Enjoy our AI-powered content tools and boost your productivity."
        />
        <link rel="canonical" href="https://intelliwriter.io/payment-success" />
      </Head>
      <main>
        {children}
        <Scripts />
      </main>
    </>
  );
};

export default PaymentSuccess;
