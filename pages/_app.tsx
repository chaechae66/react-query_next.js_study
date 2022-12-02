import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
