import { array, object, string } from 'fefe'

export const postListItemFields = 'title,excerpt,date,slug'

const unrendered = (value: unknown): string => {
  const h = object(
    { rendered: string() },
    { allowExcessProperties: true }
  )(value)
  return h.rendered.replace(/<[^>]*>/g, '').replace('[&hellip;]', '…')
}

export const postListItem = object({
  title: unrendered,
  excerpt: unrendered,
  date: string(),
  slug: string(),
})

export const postList = array(postListItem)

export type PostListItem = ReturnType<typeof postListItem>
