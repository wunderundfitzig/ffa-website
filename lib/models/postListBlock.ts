import { object, string, optional, boolean, defaultTo } from 'fefe'
import { PromiseResolvedType } from 'lib/types'
import { getPostList } from 'lib/wordpressApi'

const postListValidator = object(
  { filter: defaultTo(boolean(), false), category: optional(string()) },
  { allowExcessProperties: true }
)

export const postListBlock = async (value: unknown) => {
  const config = postListValidator(value)
  const category = config.filter ? config.category : undefined
  const posts = await getPostList(category)
  return { posts }
}

export type PostListBlock = PromiseResolvedType<
  ReturnType<typeof postListBlock>
>
