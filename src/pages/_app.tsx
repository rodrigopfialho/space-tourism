import {AppProps} from 'next/app'
import {GlobalStyle} from '../styles/Glogal'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
