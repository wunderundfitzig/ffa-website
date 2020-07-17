import { object, string, optional, boolean, union } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

export const wideImageBlock = object(
  {
    text: optional(string()),
    image: parseJsonURLString(image),
    isHeader: union(boolean(), () => false),
  },
  { allowExcessProperties: true }
)

export type WideImageBlock = ReturnType<typeof wideImageBlock>
