import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getBlocks } from 'lib/wordpressApi'
import { WordpressBlock } from 'lib/models/wordpressBlock'
import Layout from 'components/Layout/Layout'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'
import Map from 'components/Map/Map'

const Home = (props: { blocks: WordpressBlock[] }) => (
  <div className='container'>
    <Head>
      <title>Abenteuerzentrum Berlin</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <BlockRenderer blocks={props.blocks} />
      <Map />
    </Layout>
  </div>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const blocks = await getBlocks('5')

  return {
    props: { blocks }, // will be passed to the page component as props
  }
}

export default Home
