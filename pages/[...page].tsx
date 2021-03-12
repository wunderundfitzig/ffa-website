import { GetStaticPaths, GetStaticProps } from 'next'
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slugs = context.params?.page as string[]
  const res = await getBlocks('pages', slugs)
  if (res === null) return { notFound: true }

  return {
    revalidate: 1,
    props: { blocks: res.blocks },
  }
}
