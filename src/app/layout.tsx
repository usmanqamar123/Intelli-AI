import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import { ContextProvider } from "@/context/ContextProvider";
import { SEOContextProvider } from "@/context/SEOContextProvider";
import { LoadingProvider } from "@/context/LoadingContext";
import Context from "@/context/Context";
import Script from "next/script"; // Import the Script component
import "./globals.css";
// import "swiper/css";
// import "swiper/css/effect-cards";

import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <title>IntelliWriter.io – AI Content Solutions</title>
        <meta
          name="description"
          content="IntelliWriter.io offers AI-powered solutions for content creation, including article writing, SEO optimization, and more."
        />
        <link
          rel="canonical"
          href="https://intelliwriter.io/"
        />

        {/* Google Tag Manager Script */}
        <Script
          async
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16796421200"
        ></Script>
        <Script id="gtag-init" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16796421200');
        `}
        </Script>

        {/* Microsoft Clarity Script */}
        <Script id="clarity-init" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "omnw2hbwud");
          `}
        </Script>

        {/* Facebook Pixel Script */}
        {/* <Script id="fb-pixel-init" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '888393822792378');
            fbq('track', 'PageView');
          `}
        </Script> */}

        {/* TINY MCE EDITOR */}
        <Script
          src="/tinymce/tinymce.min.js"
          strategy="afterInteractive"
          referrerPolicy="origin"
        />

        <noscript>
          <Image
            height="1"
            width="1"
            alt="Facebook icon"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=888393822792378&ev=PageView&noscript=1"
            loading="lazy"
          />
        </noscript>
      </head>

      {/* Move this out of the <html> tag */}
      <body>
        <LoadingProvider>
          <SEOContextProvider>
            <ContextProvider>
              <AuthProvider>
                <Context>{children}</Context>
              </AuthProvider>
            </ContextProvider>
          </SEOContextProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
