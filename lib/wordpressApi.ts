import fetch from 'isomorphic-unfetch'
import {
  object,
  array,
  string,
  union,
  enumerate,
  parseJson,
  FefeError,
} from 'fefe'

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
    blockName: enumerate('lazyblock/news'),
    attrs: object(
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
    ),
  },
  { allowExcessProperties: true }
)
const block = union(newsBlock, defaultBlock)

const validatePage = object(
  { blocks: array(block) },
  { allowExcessProperties: true }
)
export type WordpressBlock = ReturnType<typeof block>

export async function getBlocks(pageId: string): Promise<WordpressBlock[]> {
  const url = `${process.env.WP_API_URL}/pages/${pageId}?_fields=content.raw,blocks`
  const res = await fetch(url)
  const json = await res.json()
  const page = validatePage(json)
  return page.blocks
}
