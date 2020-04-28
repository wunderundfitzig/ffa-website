import { object, string, optional } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

export const collageBlock = object(
  {
    title: string(),
    image1: optional(parseJsonURLString(image)),
    image2: optional(parseJsonURLString(image)),
    image3: optional(parseJsonURLString(image)),
    image4: optional(parseJsonURLString(image)),
  },
  { allowExcessProperties: true }
)

export type CollageBlock = ReturnType<typeof collageBlock>
