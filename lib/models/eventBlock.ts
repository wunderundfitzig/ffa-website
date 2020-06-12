import { object, string, array, optional } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

const column = object(
  {
    title: optional(string()),
    text: optional(string()),
  },
  { allowExcessProperties: true }
)

export const eventBlock = object(
  {
    title: string(),
    description: string(),
    category: string(),
    image: parseJsonURLString(image),
    date: string(),
    time: optional(string()),
    place: optional(string()),
    content: optional(string()),
    info: optional(parseJsonURLString(array(column))),
  },
  { allowExcessProperties: true }
)

export type EventBlock = ReturnType<typeof eventBlock>
