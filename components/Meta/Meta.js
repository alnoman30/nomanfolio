import Head from "next/head";
import { metadata } from "../../constants";

const Meta = () => (
  <Head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={metadata.keywords} />
    <meta name="robots" content="index,follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content={metadata.language} />
    <meta name="author" content={metadata.author} />
    <meta name="theme-color" content={metadata.themeColor} />
    <meta httpEquiv="content-language" content="en" />
    <meta
    name="google-site-verification"
    content="FKYt7Ak8JwVgbNhyg7GFQEOBe58USLN4EbkJj9M9nRU"
  />

    {/* Open Graph */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content={metadata.image} />
    <meta property="og:owner" content={metadata.owner} />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:site" content={metadata.twitterHandle} />
    <meta name="twitter:creator" content={metadata.twitterHandle} />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:image" content={metadata.image} />

    {/* Single Favicon */}
<link
  rel="icon"
  href="/favicons/favicon.ico"
/>

    <meta name="msapplication-TileColor" content="#7000FF" />
    <link rel="manifest" href="/manifest.json" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: metadata.author,
          url: metadata.siteUrl,
          sameAs: [
            `https://instagram.com/${metadata.instagramHandle}`,
          ],
        }),
      }}
    />
  </Head>
);

export default Meta;