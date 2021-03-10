import { array, object, optional, string } from 'fefe'

export const postListItemFields = 'title,excerpt,date,slug,_links,_embedded'
export const postListItemEmbeds = 'wp:featuredmedia'

const unrendered = (value: unknown): string => {
  const h = object(
    { rendered: string() },
    { allowExcessProperties: true }
  )(value)
  return h.rendered.replace(/<[^>]*>/g, '').replace('[&hellip;]', '…')
}

export const postListItem = object(
  {
    title: unrendered,
    excerpt: unrendered,
    date: string(),
    slug: string(),
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

export const postList = array(postListItem)

export type PostListItem = ReturnType<typeof postListItem>
