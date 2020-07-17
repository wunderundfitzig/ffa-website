import { object, string, array, enumerate, optional } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

const member = object(
  {
    name: string(),
    role: string(),
    headshot: optional(image),
    text: string(),
    quote: optional(string()),
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
export type TeamMember = ReturnType<typeof member>
export type TeamCategory = ReturnType<typeof category>
