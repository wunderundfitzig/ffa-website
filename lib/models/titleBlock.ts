import { object, string, optional, boolean } from 'fefe'

export const titleBlock = object(
  {
    roofline: string(),
    title: string(),
    primary: optional(boolean()),
  },
  { allowExcessProperties: true }
)

export type TitleBlock = ReturnType<typeof titleBlock>
