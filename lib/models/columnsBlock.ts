import { object, string, array, optional } from 'fefe'
import { parseJsonURLString } from './jsonURLString'

const column = object(
  {
    title: optional(string()),
    text: optional(string()),
  },
  { allowExcessProperties: true }
)

export const columnsBlock = object(
  {
    columns: parseJsonURLString(array(column)),
  },
  { allowExcessProperties: true }
)

export type ColumnsBlock = ReturnType<typeof columnsBlock>
