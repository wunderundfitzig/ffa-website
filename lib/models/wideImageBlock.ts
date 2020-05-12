import { object, string, optional } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

export const wideImageBlock = object(
  {
    text: optional(string()),
    image: optional(parseJsonURLString(image)),
  },
  { allowExcessProperties: true }
)

export type WideImageBlock = ReturnType<typeof wideImageBlock>
