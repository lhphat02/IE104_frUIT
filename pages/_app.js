import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

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
        title="frUIT, NFT marketplace from UIT"
        description="An NFT marketplace for UIT students to connect, explore, create, collect and trade NFTs. Be the pioneers to the Web3 Universe, UITers fly together."
        canonical="https://www.fromuitnft.online/"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.fromuitnft.online/',
          images: [
            {
              url: 'https://cdn-icons-png.flaticon.com/512/1139/1139100.png',
              width: 800,
              height: 800,
              alt: 'frUIT NFT Logo 1',
              type: 'image/jpeg/png',
            },
            {
              url: 'https://cdn-icons-png.flaticon.com/512/1139/1139100.png',
              width: 600,
              height: 600,
              alt: 'frUIT NFT Logo 2',
              type: 'image/jpeg/png',
            },
          ],
          siteName: 'frUIT, NFT marketplace from UIT',
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
