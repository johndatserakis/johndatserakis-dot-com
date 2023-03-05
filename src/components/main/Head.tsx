import Script from 'next/script';
import { DEFAULT_PROGRAM_COLOR } from 'src/contants/style';

export const RootHead = () => (
  <>
    {/* Basic settings */}
    <meta charSet="utf-8" />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta content="initial-scale=1, width=device-width" name="viewport" />
    <meta content="index,follow" name="robots" />

    {/* Manifest and Settings */}
    <link href="/manifest.json" rel="manifest" />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="default" name="apple-mobile-web-app-status-bar-style" />
    <meta content="John Datserais" name="apple-mobile-web-app-title" />
    <meta content="John Datserais" name="application-name" />
    <meta content="yes" name="mobile-web-app-capable" />
    <meta content="#ffffff" name="msapplication-TileColor" />
    <meta content={DEFAULT_PROGRAM_COLOR} name="theme-color" />

    {/* Favicons */}
    <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
    <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
    <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
    <link href="/favicon.ico" rel="shortcut icon" />

    {/* Fallback Title and Description */}
    <title>John Datserakis</title>
    <meta
      content="Hey there! My name's John Datserakis and I'm a Senior Software Engineer from Boston's North Shore."
      name="description"
    />

    {/* Keywords */}
    <meta content="john, datserakis, software, engineer, frontend, boston" name="keywords" />

    {/* Twitter */}
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="@johndatserakis" name="twitter:creator" />
    <meta
      content="Hey there! My name's John Datserakis and I'm a Senior Software Engineer from Boston's North Shore."
      name="twitter:description"
    />
    <meta content="John Datserais Logo" name="twitter:image:alt" />
    <meta content="/john-datserakis-profile-image.png" name="twitter:image" />
    <meta content="@johndatserakis" name="twitter:site" />
    <meta content="John Datserais" name="twitter:title" />

    {/* Facebook */}
    <meta
      content="Hey there! My name's John Datserakis and I'm a Senior Software Engineer from Boston's North Shore."
      property="og:description"
    />
    <meta content="/john-datserakis-profile-image.png" property="og:image" />
    <meta content="John Datserais" property="og:title" />
    <meta content="website" property="og:type" />
    <meta content="https://www.johndatserakis.com" property="og:url" />

    {/* Intersection Observer Polyfill */}
    <Script
      crossOrigin="anonymous"
      src="//polyfill.io/v3/polyfill.min.js?features=es2015,IntersectionObserver"
    />
  </>
);
