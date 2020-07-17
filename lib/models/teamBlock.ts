import { object, string, array, enumerate, optional } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

const member = object(
  {
    name: string(),
    role: string(),
    image: optional(parseJsonURLString(image)),
    text: string(),
    quote: string(),
  },
  { allowExcessProperties: true }
)

export const teamBlock = object(
  {
    category: enumerate('house', 'educators', 'kita', 'others'),
    title: string(),
    image: parseJsonURLString(image),
    members: parseJsonURLString(array(member)),
  },
  { allowExcessProperties: true }
)

export type TeamBlock = ReturnType<typeof teamBlock>
