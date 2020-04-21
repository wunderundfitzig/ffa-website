import { object, string, parseJson, FefeError } from 'fefe'
import { image } from './image'

export const newsBlock = object(
  {
    title: string(),
    content: string(),
    image: (str: unknown) => {
      if (typeof str !== 'string') throw FefeError
      const jsonString = decodeURIComponent(str)
      const obj = parseJson()(jsonString)
      return image(obj)
    },
  },
  { allowExcessProperties: true }
)

export type NewsBlock = ReturnType<typeof newsBlock>
