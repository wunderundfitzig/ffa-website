import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getPages } from 'lib/wordpressApi'
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

export const getServerSideProps: GetServerSideProps = async () => {
  const content = await getPages()
  console.log(content)
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
