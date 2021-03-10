import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getBlocks } from 'lib/wordpressApi'
import { WordpressBlock } from 'lib/models/wordpressBlock'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'
import { TitleBlock } from 'lib/models/titleBlock'

interface TitleBlockWrapper {
  blockName: 'lazyblock/title'
  attrs: TitleBlock
}

export default function Page(props: { blocks: WordpressBlock[] }) {
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
  const slugs = context.query.page as string[]
  const res = await getBlocks('pages', slugs)
  if (res === null) return { notFound: true }

  return {
    props: { blocks: res.blocks },
  }
}
