import fetch from 'isomorphic-unfetch'
import { object, array, string, union } from 'fefe'

const validateBlock = object(
  { blockName: union(string(), () => null), innerHTML: string() },
  { allowExcessProperties: true }
)
const validatePage = object(
  { blocks: array(validateBlock) },
  { allowExcessProperties: true }
)
export type WordpressBlock = ReturnType<typeof validateBlock>

export async function getBlocks(pageId: string): Promise<WordpressBlock[]> {
  const url = process.env.WP_API_URL + '/pages/' + pageId
  const res = await fetch(url)
  const json = await res.json()
  console.log(json)
  const page = validatePage(json)
  return page.blocks
}
