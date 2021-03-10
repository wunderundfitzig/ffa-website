import { WordpressBlock, wordpressBlock } from './models/wordpressBlock'
import { BlockMeta } from 'lib/types'

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

    return Promise.all(
      pages[0].blocks
        .filter(
          (block: { blockName: string | null }) => block.blockName !== null
        )
        .map((block: BlockMeta<string>) => wordpressBlock(block))
    )
  } catch (error) {
    return null
  }
}

interface Category {
  id: number
  name: string
  description: string
}
export async function getCategoryBySlug(slug: string): Promise<Category> {
  const url = `${process.env.WP_API_URL}/categories?slug=${slug}&_fields=id,name,description`
  const res = await fetch(url)
  const categories = await res.json()
  return categories[0]
}

export interface PostListItem {
  title: { rendered: string }
  date: string
  slug: string
}

export async function getPostList(
  categorySlug?: string
): Promise<PostListItem[]> {
  const fields = 'title,date,slug'
  let url = ''
  if (categorySlug === undefined) {
    url = `${process.env.WP_API_URL}/posts?_fields=${fields}`
  } else {
    const category = await getCategoryBySlug(categorySlug)
    url = `${process.env.WP_API_URL}/posts?_fields=${fields}&categories=${category.id}`
  }
  const res = await fetch(url)
  const posts = await res.json()
  return posts as PostListItem[]
}
