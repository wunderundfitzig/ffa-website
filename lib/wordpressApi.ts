import { WordpressBlock, wordpressBlock } from './models/wordpressBlock'
import { BlockMeta } from 'lib/types'
import {
  postList,
  PostListItem,
  postListItemEmbeds,
  postListItemFields,
} from './models/postListItem'
import { Category, categoryFields, categoryList } from './models/category'
import { object, string } from 'fefe'

const validatePageMeta = object(
  {
    title: object({ rendered: string() }),
  },
  { allowExcessProperties: true }
)

type WordpressPage = { title: string; blocks: WordpressBlock[] }
export type WordpressPost = WordpressPage

export async function getBlocks(
  resource: 'pages' | 'posts',
  slugs: string[]
): Promise<WordpressPage | null> {
  try {
    const pageSlug = slugs[slugs.length - 1]
    const wpLink = `https://ffaback.uber.space/${slugs.join('/')}/`
    const extraFields = 'title'
    const url = `${process.env.WP_API_URL}/${resource}?slug=${pageSlug}&_fields=content.raw,blocks,link,${extraFields}`
    const res = await fetch(url)
    let pages = await res.json()

    // we can only filter pages by the last part of the slug
    // but this is not unique so make shure we only get the page matching
    // the real link we need
    if (pages.length > 1) {
      pages = pages.filter((p: { link: string }) => p.link === wpLink)
    }
    const pageMeta = validatePageMeta(pages[0])
    console.log(pageMeta)

    const blocks: WordpressBlock[] = await Promise.all(
      pages[0].blocks
        .filter(
          (block: { blockName: string | null }) => block.blockName !== null
        )
        .map((block: BlockMeta<string>) => wordpressBlock(block))
    )
    return { blocks, title: pageMeta.title.rendered }
  } catch (error) {
    return null
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const url = `${process.env.WP_API_URL}/categories?slug=${slug}&_fields=${categoryFields}`
  const res = await fetch(url)
  const categories = await res.json()
  return categoryList(categories)[0]
}

export async function getPostList(
  categorySlug?: string
): Promise<PostListItem[]> {
  let url = ''
  if (categorySlug === undefined) {
    url = `${process.env.WP_API_URL}/posts?_fields=${postListItemFields}&_embed=${postListItemEmbeds}`
  } else {
    const category = await getCategoryBySlug(categorySlug)
    url = `${process.env.WP_API_URL}/posts?_fields=${postListItemFields}&_embed=${postListItemEmbeds}&categories=${category.id}`
  }
  const res = await fetch(url)
  const posts = await res.json()
  return postList(posts)
}
