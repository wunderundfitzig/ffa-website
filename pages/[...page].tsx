import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getBlocks } from 'lib/wordpressApi'
import { WordpressBlock } from 'lib/models/wordpressBlock'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'
import Title from 'components/Title/Title'

function NotFound() {
  return (
    <>
      <Head>
        <title>Abenteuerzentrum Berlin | Seite nicht gefunden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Title
          primary
          roofline='Hier ist leider ein Fehler passiert'
          title='Diese Seite existiert nicht'
        />
      </div>
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
