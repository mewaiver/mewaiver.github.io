import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        id="google-analytics"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZX7XSEP3NY`}
      />
      <Script id="google-analytics-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZX7XSEP3NY', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
