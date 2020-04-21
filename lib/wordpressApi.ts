import fetch from 'isomorphic-unfetch'
import { object, array, string } from 'fefe'
import { newsBlock } from './models/newsBlock'
import { titleBlock } from './models/titleBlock'

type DefaultName = 'default'
const defaultBlock = object(
  {
    blockName: (): DefaultName => 'default',
    innerHTML: string(),
  },
  { allowExcessProperties: true }
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export type WordpressBlock = ReturnType<typeof block>

export async function getBlocks(pageId: string): Promise<WordpressBlock[]> {
  const url = `${process.env.WP_API_URL}/pages/${pageId}?_fields=content.raw,blocks`
  const res = await fetch(url)
  const json = await res.json()
  const page = validatePage(json)
  return page.blocks
}
