import Head from 'next/head'
import Layout from 'components/Layout/Layout'

const Home = () => (
  <div className='container'>
    <Head>
      <title>Abenteuerzentrum Berlin</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>Hello World: {process.env.WP_API_URL}</Layout>
  </div>
)

export default Home
