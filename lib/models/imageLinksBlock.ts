import { object, string, array } from 'fefe'
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
