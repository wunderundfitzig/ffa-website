import { object, string, optional, boolean, union } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

export const wideImageBlock = object(
  {
    text: optional(string()),
    image: parseJsonURLString(image),
    asHeader: union(boolean(), () => false),
    color: optional(string()),
  },
  { allowExcessProperties: true }
)

export type WideImageBlock = ReturnType<typeof wideImageBlock>
