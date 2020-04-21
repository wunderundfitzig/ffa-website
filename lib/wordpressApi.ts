import fetch from 'isomorphic-unfetch'
import { object, array, string, parseJson, FefeError } from 'fefe'

type DefaultName = 'default'
const defaultBlock = object(
  {
    blockName: (): DefaultName => 'default',
    innerHTML: string(),
  },
  { allowExcessProperties: true }
)
const image = object({ url: string() }, { allowExcessProperties: true })
const newsBlock = object(
  {
    title: string(),
    content: string(),
    image: (str: unknown) => {
      if (typeof str !== 'string') throw FefeError
      const jsonString = decodeURIComponent(str)
      const obj = parseJson()(jsonString)
      return image(obj)
    },
  },
  { allowExcessProperties: true }
)
const titleBlock = object(
  {
    roofline: string(),
    title: string(),
  },
  { allowExcessProperties: true }
)

function block(block: any) {
  switch (block.blockName) {
    case 'lazyblock/news':
      return object(
        {
          blockName: (): 'lazyblock/news' => 'lazyblock/news',
          attrs: newsBlock,
        },
        { allowExcessProperties: true }
      )(block)
    case 'lazyblock/title':
      return object(
        {
          blockName: (): 'lazyblock/title' => 'lazyblock/title',
          attrs: titleBlock,
        },
        { allowExcessProperties: true }
      )(block)
    default:
      return defaultBlock(block)
  }
}

const validatePage = object(
  { blocks: array(block) },
  { allowExcessProperties: true }
)
export type NewsBlock = ReturnType<typeof newsBlock>
export type TitleBlock = ReturnType<typeof titleBlock>
export type WordpressBlock = ReturnType<typeof block>

export async function getBlocks(pageId: string): Promise<WordpressBlock[]> {
  const url = `${process.env.WP_API_URL}/pages/${pageId}?_fields=content.raw,blocks`
  const res = await fetch(url)
  const json = await res.json()
  const page = validatePage(json)
  return page.blocks
}
