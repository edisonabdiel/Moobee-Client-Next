import Layout from '../components/Layout'
import '../styles/globals.css'

const MooBee = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MooBee;
