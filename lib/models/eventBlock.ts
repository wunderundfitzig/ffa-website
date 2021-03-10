import {
  object,
  string,
  array,
  optional,
  enumerate,
  boolean,
  defaultTo,
} from 'fefe'
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
    booked_out: defaultTo(boolean(), false),
    // eslint-disable-next-line @typescript-eslint/camelcase
    registration_type: enumerate('request', 'mail', 'pdf', 'link'),
    mail: optional(string()),
    pdf: optional(parseJsonURLString(pdf)),
    link: optional(string()),
  },
  { allowExcessProperties: true }
)

export type EventBlock = ReturnType<typeof eventBlock>
