import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import { ContextProvider } from '../context/Context';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => (
  <ContextProvider>
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta
          name="google-site-verification"
          content="ucjOWH8YbEHaElZ781nK1KEgdES3YGtCGts-wfnW7s8"
        />
        <meta name="keywords" content="UIT, NFT, NFT Marketplace" />
        <meta
          name="description"
          content="An NFT marketplace for UIT students to explore, create, collect and trade NFTs."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C0Y7H3HPKH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C0Y7H3HPKH');
        `}
      </Script>
      <DefaultSeo
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        title="Fromuit, NFT marketplace from UIT"
        description="An NFT marketplace for UIT students to explore, collect and create NFTs."
        canonical="https://www.fromuitnft.online/"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.fromuitnft.online/',
          images: [
            {
              url: 'https://cdn-icons-png.flaticon.com/512/1139/1139100.png',
              width: 500,
              height: 500,
              alt: 'frUIT NFT Logo 1',
              type: 'image/jpeg/png',
            },
            {
              url: 'https://cdn-icons-png.flaticon.com/512/1139/1139100.png',
              width: 800,
              height: 800,
              alt: 'frUIT NFT Logo 2',
              type: 'image/jpeg/png',
            },
          ],
          siteName: 'Fromuit, NFT marketplace from UIT',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className="bg-white dark:bg-prim-dark">
        <Navbar />
        <div className="w-full pt-16">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  </ContextProvider>
);

export default MyApp;
