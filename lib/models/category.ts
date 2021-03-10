import { object, string, number, array } from 'fefe'

export const categoryFields = 'id,name,description'

export const category = object({
  id: number(),
  name: string(),
  description: string(),
})

export const categoryList = array(category)

export type Category = ReturnType<typeof category>
