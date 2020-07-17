import { object, string, optional } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

export const newsBlock = object(
  {
    title: string(),
    content: string(),
    image: parseJsonURLString(image),
    link: optional(string()),
    call_to_action: optional(string()),
  },
  { allowExcessProperties: true }
)

export type NewsBlock = ReturnType<typeof newsBlock>
