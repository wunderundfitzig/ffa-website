import { object, string, array, boolean, optional } from 'fefe'
import { parseJsonURLString } from './jsonURLString'
import { image } from './image'

export const imageLinksBlock = object(
  {
    links: parseJsonURLString(
      array(
        object(
          {
            title: string(),
            url: string(),
            external: optional(boolean()),
            image: image,
          },
          { allowExcessProperties: true }
        )
      )
    ),
  },
  { allowExcessProperties: true }
)

export type ImageLinksBlock = ReturnType<typeof imageLinksBlock>
