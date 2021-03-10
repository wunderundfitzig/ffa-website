import { object, string, optional, array } from 'fefe'
import { image } from './image'
import { parseJsonURLString } from './jsonURLString'

export const newsBlock = object(
  {
    title: string(),
    content: string(),
    image: parseJsonURLString(image),
    link: optional(string()),
    // eslint-disable-next-line @typescript-eslint/camelcase
    call_to_action: optional(string()),
  },
  { allowExcessProperties: true }
)

export const newsSliderBlock = object(
  {
    slides: parseJsonURLString(array(newsBlock)),
  },
  { allowExcessProperties: true }
)

export type NewsBlock = ReturnType<typeof newsBlock>
export type NewsSliderBlock = ReturnType<typeof newsSliderBlock>
