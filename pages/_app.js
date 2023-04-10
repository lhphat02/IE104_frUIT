import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { DefaultSeo, NextSeo } from 'next-seo';

import { ContextProvider } from '../context/Context';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ContextProvider>
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NextSeo
        title="frUIT NFT"
        description="An NFT marketplace for NFTs created by students from UIT"
      />
      <DefaultSeo
        title="frUIT Marketplace, from UIT NFT Marketplace"
        description="An NFT marketplace for NFTs created by students from UIT"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.fromuitnft.online/',
          siteName: 'from UIT NFT Marketplace',
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
