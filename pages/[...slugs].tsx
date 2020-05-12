import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getBlocks } from 'lib/wordpressApi'
import { WordpressBlock } from 'lib/models/wordpressBlock'
import Layout from 'components/Layout/Layout'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'

function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Abenteuerzentrum Berlin | Seite nicht gefunden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p>Seite nicht gefunden</p>
    </Layout>
  )
}

export default function Page(props: { blocks: WordpressBlock[] | null }) {
  if (props.blocks === null) return <NotFound />

  return (
    <Layout>
      <Head>
        <title>Abenteuerzentrum Berlin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BlockRenderer blocks={props.blocks} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slugs = context.query.slugs as string[]
  const blocks = await getBlocks(slugs)

  return {
    props: { blocks },
  }
}
