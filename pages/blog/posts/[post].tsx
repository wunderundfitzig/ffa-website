import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getBlocks } from 'lib/wordpressApi'
import { WordpressBlock } from 'lib/models/wordpressBlock'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'
import Title from 'components/Title/Title'
import { TitleBlock } from 'lib/models/titleBlock'

function NotFound() {
  return (
    <>
      <Head>
        <title>Abenteuerzentrum Berlin | Seite nicht gefunden</title>
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

interface TitleBlockWrapper {
  blockName: 'lazyblock/title'
  attrs: TitleBlock
}

export default function Page(props: { blocks: WordpressBlock[] | null }) {
  if (props.blocks === null) return <NotFound />
  const titleBlock = props.blocks.find(
    (block) => block.blockName === 'lazyblock/title'
  ) as TitleBlockWrapper | undefined

  return (
    <>
      <Head>
        <title>
          Abenteuerzentrum Berlin{' '}
          {titleBlock ? `| ${titleBlock.attrs.title}` : ''}
        </title>
      </Head>
      <BlockRenderer blocks={props.blocks} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.post as string
  const blocks = await getBlocks('posts', [slug])
  if (blocks === null) context.res.statusCode = 404

  return {
    props: { blocks },
  }
}
