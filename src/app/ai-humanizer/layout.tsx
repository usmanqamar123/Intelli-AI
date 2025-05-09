// /* eslint-disable @next/next/next-script-for-ga */
// import PageProps from "@/components/PageProps";
// import Scripts from "@/components/Scripts";
// import type { Metadata } from "next";
// import React from "react";
// import Head from "next/head";
// export const metadata: Metadata = {
//   title: "Intelliwriter.io – AI Humanizer",
//   description:
//     "What is AI-Humanizer? AI-Humanizer by Intelliwriter is a tool to convert AI-generated content into human-like text, making your content more authentic and engaging.",
// };

// const ChatLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <Head>
//         <title>IntelliWriter.io – AI Humanizer</title>
//         <meta
//           name="description"
//           content="2 Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools."
//         />
//         <link rel="canonical" href="https://intelliwriter.io/ai-humanizer" />
//         {/* Preload CSS (if necessary) with 'as="style"' */}
//         <link
//           rel="preload"
//           href="http://localhost:3000/_next/static/css/app/become-an-affiliate/page.css?v=1735142917745"
//           as="style"
//           type="text/css"
//           // crossorigin="anonymous"
//         />

//         {/* Preload Google Tag Manager script with the correct 'as' value */}
//         <link
//           rel="preload"
//           href="https://www.googletagmanager.com/gtm.js?id=GTM-MNPNZ6PR"
//           as="script"
//           type="application/javascript"
//           // crossorigin="anonymous"
//         />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-MNPNZ6PR');`,
//           }}
//         />
//       </Head>
//       <main>
//         <PageProps>{children}</PageProps>
//         <Scripts />
//       </main>
//     </>
//   );
// };

// export default ChatLayout;

/* eslint-disable @next/next/next-script-for-ga */
import PageProps from "@/components/PageProps";
import Scripts from "@/components/Scripts";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Intelliwriter.io – AI Humanizer",
  description:
    "What is AI-Humanizer? AI-Humanizer by Intelliwriter is a tool to convert AI-generated content into human-like text, making your content more authentic and engaging.",
};

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>IntelliWriter.io – AI Humanizer</title>
        <meta
          name="description"
          content="2 Access your IntelliWriter.io dashboard to manage and create AI-driven content effortlessly. Write, design, and innovate with our comprehensive tools."
        />
        <link rel="canonical" href="https://intelliwriter.io/ai-humanizer" />

        {/* Preload CSS (if necessary) with 'as="style"' */}
        <link
          rel="preload"
          href="http://localhost:3000/_next/static/css/app/become-an-affiliate/page.css?v=1735142917745"
          as="style"
          type="text/css"
        />

        {/* Preload Google Tag Manager script with the correct 'as' value */}
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtm.js?id=GTM-MNPNZ6PR"
          as="script"
          type="application/javascript"
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
      <main>
        <PageProps>{children}</PageProps>
        <Scripts />
      </main>
    </>
  );
};

export default ChatLayout;
