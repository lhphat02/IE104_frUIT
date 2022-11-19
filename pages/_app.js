import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider>
      <Head>
        <title>frUIT Marketplace</title>
        <link rel='icon' href='/logo.png'/>
      </Head>
      <Navbar/>
        <div className='pt-60'>
          <Component {...pageProps} />
        </div>
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
