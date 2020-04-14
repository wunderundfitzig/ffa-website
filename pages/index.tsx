import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getPages } from 'lib/wordpressApi'
import Layout from 'components/Layout/Layout'
import NewsBanner from 'components/NewsBanner/NewsBanner'

const Home = () => (
  <div className='container'>
    <Head>
      <title>Abenteuerzentrum Berlin</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <NewsBanner
        title='geschlossen'
        text='lorem ipsum'
        imageURL='https://source.unsplash.com/w9KEokhajKw/400x200'
      />
    </Layout>
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
