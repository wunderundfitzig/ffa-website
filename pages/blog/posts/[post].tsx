import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getBlocks, WordpressPost } from 'lib/wordpressApi'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'
import Title from 'components/Title/Title'
import { TitleBlock } from 'lib/models/titleBlock'

interface TitleBlockWrapper {
  blockName: 'lazyblock/title'
  attrs: TitleBlock
}

export default function Page(props: WordpressPost) {
  return (
    <>
      <Head>
        <title>Abenteuerzentrum Berlin | {props.title} </title>
      </Head>
      <Title primary roofline='Post' title={props.title} />
      <BlockRenderer blocks={props.blocks} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.post as string
  const res = await getBlocks('posts', [slug])
  if (res === null) return { notFound: true }

  return {
    props: res,
  }
}
