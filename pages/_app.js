import React from 'react';

import '../styles/globals.css'
import {Navbar, Footer} from './index';

function MyApp({ Component, pageProps }) {
  return 
  (
    <div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
