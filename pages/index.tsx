import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getBlocks } from 'lib/wordpressApi'
import { WordpressBlock } from 'lib/models/wordpressBlock'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'
import Map from 'components/Map/Map'

const Home = (props: { blocks: WordpressBlock[] }) => (
  <>
    <Head>
      <title>Abenteuerzentrum Berlin</title>
    </Head>
    <BlockRenderer blocks={props.blocks} />
    <Map />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await getBlocks('pages', ['home'])
  if (res === null) {
    return {
      notFound: true,
    }
  }

  return {
    revalidate: 1,
    props: { blocks: res.blocks }, // will be passed to the page component as props
  }
}

export default Home
