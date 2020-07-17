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

const category = enumerate('house', 'educators', 'kita', 'others')

export const teamBlock = object(
  {
    category: category,
    title: string(),
    image: parseJsonURLString(image),
    members: parseJsonURLString(array(member)),
  },
  { allowExcessProperties: true }
)

export type TeamBlock = ReturnType<typeof teamBlock>
export type TeamCategory = ReturnType<typeof category>
