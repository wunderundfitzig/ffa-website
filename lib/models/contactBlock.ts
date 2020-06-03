import { object, string } from 'fefe'

export const contactBlock = object(
  {
    address: string(),
    phone: string(),
    mail: string(),
    instagram: string(),
    facebook: string(),
    youtube: string(),
  },
  { allowExcessProperties: true }
)

export type ContactBlock = ReturnType<typeof contactBlock>
