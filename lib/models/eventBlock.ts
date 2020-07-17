import { object, string, array, optional } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

const column = object(
  {
    title: string(),
    description: string(),
  },
  { allowExcessProperties: true }
)

const pdf = object(
  {
    url: string(),
  },
  { allowExcessProperties: true }
)

export const eventBlock = object(
  {
    title: string(),
    description: string(),
    colorName: string(),
    image: parseJsonURLString(image),
    date: optional(string()),
    time: optional(string()),
    place: optional(string()),
    content: optional(string()),
    info: parseJsonURLString(array(column)),
    // eslint-disable-next-line @typescript-eslint/camelcase
    registration_type: string(),
    mail: optional(string()),
    pdf: optional(parseJsonURLString(pdf)),
  },
  { allowExcessProperties: true }
)

export type EventBlock = ReturnType<typeof eventBlock>
