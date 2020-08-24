import { object, string, array } from 'fefe'
import { parseJsonURLString } from './jsonURLString'

const compassSection = object(
  {
    // eslint-disable-next-line @typescript-eslint/camelcase
    section_title: string(),
    // eslint-disable-next-line @typescript-eslint/camelcase
    section_text: string(),
  },
  { allowExcessProperties: true }
)

export const compassBlock = object(
  {
    sections: parseJsonURLString(array(compassSection)),
  },
  { allowExcessProperties: true }
)

export type CompassBlock = ReturnType<typeof compassBlock>
export type CompassSection = ReturnType<typeof compassSection>
