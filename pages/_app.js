import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import { ContextProvider } from '../context/Context';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ContextProvider>
    <ThemeProvider attribute="class">
      <Head>
        <title>frUIT Marketplace</title>
        <link rel="icon" href="/logo.png" />
      </Head>
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
