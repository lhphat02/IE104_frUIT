import { ThemeProvider } from 'next-themes'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider>
      <Navbar/>
      <div className='mt-10' />
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
