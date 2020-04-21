import { object, string } from 'fefe'

export const titleBlock = object(
  {
    roofline: string(),
    title: string(),
  },
  { allowExcessProperties: true }
)

export type TitleBlock = ReturnType<typeof titleBlock>
