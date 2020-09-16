import { WordpressBlock, wordpressBlock } from './models/wordpressBlock'

export async function getBlocks(
  slugs: string[]
): Promise<WordpressBlock[] | null> {
  try {
    const pageSlug = slugs[slugs.length - 1]
    const wpLink = `https://ffaback.uber.space/${slugs.join('/')}/`
    const url = `${process.env.WP_API_URL}/pages?slug=${pageSlug}&_fields=content.raw,blocks,link`
    const res = await fetch(url)
    let pages = await res.json()

    // we can only filter pages by the last part of the slug
    // but this is not unique so make shure we only get the page matching
    // the real link we need
    if (pages.length > 1) {
      pages = pages.filter((p: { link: string }) => p.link === wpLink)
    }

    return pages[0].blocks
      .filter((block: { blockName: string | null }) => block.blockName !== null)
      .map((block: { blockName: string }) => wordpressBlock(block))
  } catch (error) {
    return null
  }
}
