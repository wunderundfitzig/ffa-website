import { WordpressBlock, wordpressBlock } from './models/wordpressBlock'
import { BlockMeta } from 'lib/types'
import {
  postList,
  PostListItem,
  postListItemEmbeds,
  postListItemFields,
} from './models/postListItem'
import { Category, categoryFields, categoryList } from './models/category'
import { array, object, optional, string } from 'fefe'

const validatePageMeta = object(
  {
    title: object({ rendered: string() }),
    date: string(),
    _embedded: optional(
      object({
        'wp:featuredmedia': array(
          object(
            // eslint-disable-next-line @typescript-eslint/camelcase
            { source_url: optional(string()) },
            { allowExcessProperties: true }
          )
        ),
      })
    ),
  },
  { allowExcessProperties: true }
)

export type WordpressPage = {
  title: string
  date: string
  blocks: WordpressBlock[]
  image?: { url: string }
}

export async function getBlocks(
  resource: 'pages' | 'posts',
  slugs: string[]
): Promise<WordpressPage | null> {
  try {
    const pageSlug = slugs[slugs.length - 1]
    const wpLink = `https://ffaback.uber.space/${slugs.join('/')}/`
    const fields = 'content.raw,blocks,link,title,date,_links,_embedded'
    const embed = 'wp:featuredmedia'
    const url = `${process.env.WP_API_URL}/${resource}?slug=${pageSlug}&_fields=${fields}&_embed=${embed}`
    const res = await fetch(url)
    let pages = await res.json()

    // we can only filter pages by the last part of the slug
    // but this is not unique so make shure we only get the page matching
    // the real link we need
    if (pages.length > 1) {
      pages = pages.filter((p: { link: string }) => p.link === wpLink)
    }
    const pageMeta = validatePageMeta(pages[0])
    const imageUrl = pageMeta._embedded?.['wp:featuredmedia'][0].source_url

    const blocks: WordpressBlock[] = await Promise.all(
      pages[0].blocks
        .filter(
          (block: { blockName: string | null }) => block.blockName !== null
        )
        .map((block: BlockMeta<string>) => wordpressBlock(block))
    )
    return {
      blocks,
      date: pageMeta.date,
      title: pageMeta.title.rendered,
      image: imageUrl ? { url: imageUrl } : undefined,
    }
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
