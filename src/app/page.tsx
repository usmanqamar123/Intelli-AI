// /* eslint-disable @next/next/next-script-for-ga */
// import Scripts from "@/components/Scripts";
// import Head from "next/head";
// import Script from "next/script";
// import PageChild3 from "./pageChild3";
// const Home = () => {
//   return (
//     <>
//       <Head>
//         <title>
//           Intelliwriter.io: Best AI Image Generator & Free AI Writing
//         </title>
//         <meta
//           name="description"
//           content="Boost creativity with the best AI image generator & free AI writing tools. Explore 70+ innovative features!"
//         />
//         <meta
//           name="google-site-verification"
//           content="jOLdFKT4EB_AxoR8fQqHLckgsvnJ_Ta4WPY40UNfjwo"
//         />
//         <link rel="canonical" href="https://intelliwriter.io/" />
//         <link
//           rel="preload"
//           href="/_next/static/css/app/layout.css"
//           as="style"
//         />
//       </Head>
//       <Script
//         id="gtm-script"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-MNPNZ6PR');`,
//         }}
//       />

//       <div className="relative">
//         <PageChild3 />
//         <Scripts />
//       </div>
//     </>
//   );
// };

// export default Home;



/* eslint-disable @next/next/next-script-for-ga */
import Scripts from "@/components/Scripts";
import { Poppins, AR_One_Sans } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import PageChild3 from "./pageChild3";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Custom CSS variable
  display: "swap", // Improves performance
});

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ar-one-sans", // Custom CSS variable
  display: "swap",
});

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Intelliwriter.io: Best AI Image Generator & Free AI Writing
        </title>
        <meta
          name="description"
          content="Boost creativity with the best AI image generator & free AI writing tools. Explore 70+ innovative features!"
        />
        <meta name="google-site-verification" content="jOLdFKT4EB_AxoR8fQqHLckgsvnJ_Ta4WPY40UNfjwo" />
        <link rel="canonical" href="https://intelliwriter.io/" />
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
      </Head>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNPNZ6PR');`,
        }}
      />

      <div  className={`${poppins.variable} ${arOneSans.variable} font-sans relative`}>
        <PageChild3 />
        <Scripts />
      </div>
    </>
  );
};

export default Home;
