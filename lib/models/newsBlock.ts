import { object, string } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

export const newsBlock = object(
  {
    title: string(),
    content: string(),
    image: parseJsonURLString(image),
  },
  { allowExcessProperties: true }
)

export type NewsBlock = ReturnType<typeof newsBlock>
