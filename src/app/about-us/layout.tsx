/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import PageProps from "../../components/PageProps";
import Scripts from "../../components/Scripts";
import Script from "next/script";

const AboutUs = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Meta Information */}
      <Head>
        <title>Intelliwriter.io – About us</title>
        <meta
          name="description"
          content="Work with Intelliwriter.io's to create content in real-time. Boost productivity with smart, innovative conversations and seamless assistance."
        />
        <link rel="canonical" href="https://intelliwriter.io/about-us" as="script"/>
      </Head>

      {/* Google Tag Manager Script */}
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

      {/* Main Content */}
      <main>
        <PageProps>{children}</PageProps>
        <Scripts />
      </main>
    </>
  );
};

export default AboutUs;
