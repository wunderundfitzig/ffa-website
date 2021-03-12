import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getBlocks, WordpressPage } from 'lib/wordpressApi'
import BlockRenderer from 'components/BlockRenderer/BlockRenderer'
import Title from 'components/Title/Title'
import { TitleBlock } from 'lib/models/titleBlock'
import WideImage from 'components/WideImage/WideImage'
import { colors } from 'style'

interface TitleBlockWrapper {
  blockName: 'lazyblock/title'
  attrs: TitleBlock
}

export default function Page(props: WordpressPage) {
  const date = new Date(props.date)
  return (
    <>
      <Head>
        <title>Abenteuerzentrum Berlin | {props.title} </title>
      </Head>
      {props.image && (
        <WideImage
          asHeader={false}
          image={props.image}
          color={colors.lightGreen}
          text={undefined}
        />
      )}
      <Title
        primary
        roofline={date.toLocaleDateString('de')}
        title={props.title}
      />
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
  const slug = context.params?.post as string
  const res = await getBlocks('posts', [slug])
  if (res === null) return { notFound: true }

  return {
    props: res,
  }
}
