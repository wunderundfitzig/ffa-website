import { object, string } from 'fefe'

export const premisesBlock = object(
  {
    title: string(),
    description: string(),
  },
  { allowExcessProperties: true }
)

export type PremisesBlock = ReturnType<typeof premisesBlock>
