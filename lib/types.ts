export type PromiseResolvedType<T> = T extends Promise<infer R> ? R : never
export type BlockMeta<T> = {
  blockName: T
  attrs: unknown
}
