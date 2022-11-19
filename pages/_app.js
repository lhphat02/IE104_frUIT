import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider attribute='class'>
      <Head>
        <title>frUIT Marketplace</title>
        <link rel='icon' href='/logo.png'/>
      </Head>
      <div className="dark:bg-prim-dark bg-white">
        <Navbar/>
          <div className='pt-60'>
            <Component {...pageProps} />
          </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );

export default MyApp;
