import { object, string, optional } from 'fefe'
import { PromiseResolvedType } from 'lib/types'
import { getPostList } from 'lib/wordpressApi'

const postListValidator = object(
  { category: optional(string()) },
  { allowExcessProperties: true }
)

export const postListBlock = async (value: unknown) => {
  const p = postListValidator(value)
  const posts = await getPostList(p.category)
  return { posts }
}

export type PostListBlock = PromiseResolvedType<
  ReturnType<typeof postListBlock>
>
