import {AppProps} from 'next/app'
// import { api } from '../service/api'
import {GlobalStyle} from '../styles/Glogal'

// if (process.env.NODE_ENV === 'development') {
//   api();
// }

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
