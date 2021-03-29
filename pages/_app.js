import '../styles/styles.scss'
import '../styles/layout.scss'
import { Head } from 'next/document'
import Layout from '../components/Layout'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
