import fetch from 'isomorphic-unfetch'
import { WordpressBlock, wordpressBlock } from './models/wordpressBlock'

export async function getBlocks(pageId: string): Promise<WordpressBlock[]> {
  const url = `${process.env.WP_API_URL}/pages/${pageId}?_fields=content.raw,blocks`
  const res = await fetch(url)
  const json = await res.json()

  return json.blocks
    .filter((block: { blockName: string | null }) => block.blockName !== null)
    .map((block: { blockName: string }) => wordpressBlock(block))
}
