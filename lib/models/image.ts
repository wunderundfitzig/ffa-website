import { object, string } from 'fefe'

export const image = object({ url: string() }, { allowExcessProperties: true })
