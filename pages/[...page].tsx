import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getBlocks } from 'lib/wordpressApi'
import { WordpressBlock } from 'lib/models/wordpressBlock'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'

function NotFound() {
  return (
    <>
      <Head>
        <title>Abenteuerzentrum Berlin | Seite nicht gefunden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p>Seite nicht gefunden</p>
    </>
  )
}

export default function Page(props: { blocks: WordpressBlock[] | null }) {
  if (props.blocks === null) return <NotFound />

  return (
    <>
      <Head>
        <title>Abenteuerzentrum Berlin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BlockRenderer blocks={props.blocks} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slugs = context.query.page as string[]
  const blocks = await getBlocks(slugs)
  if (blocks === null) context.res.statusCode = 404

  return {
    props: { blocks },
  }
}
