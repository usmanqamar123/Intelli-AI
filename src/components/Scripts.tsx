const Scripts = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1S9VKDRTK8"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1S9VKDRTK8');
            `,
        }}
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11342236188"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-11342236188');
        `,
      }}
      />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNPNZ6PR" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
    </>
  );
};

export default Scripts;
