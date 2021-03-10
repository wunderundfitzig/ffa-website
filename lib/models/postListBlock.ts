import {
  object,
  string,
  array,
  optional,
  enumerate,
  boolean,
  defaultTo,
} from 'fefe'
import { PromiseResolvedType } from 'lib/types'
import { getPostList } from 'lib/wordpressApi'

export const postListBlock = async (value: unknown) => {
  const posts = await getPostList()
  return { posts }
}

export type PostListBlock = PromiseResolvedType<
  ReturnType<typeof postListBlock>
>
