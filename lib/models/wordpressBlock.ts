import { object, string } from 'fefe'
import { newsBlock } from './newsBlock'
import { titleBlock } from './titleBlock'
import { columnsBlock } from './columnsBlock'
import { collageBlock } from './collageBlock'

const defaultBlock = object(
  {
    blockName: (): 'default' => 'default',
    innerHTML: string(),
  },
  { allowExcessProperties: true }
)

const makeValidator = <R, T>(name: T, validator: (value: unknown) => R) => ({
  name: name,
  validate: object(
    {
      blockName: (): T => name,
      attrs: validator,
    },
    { allowExcessProperties: true }
  ),
})

const blockValidators = [
  makeValidator('lazyblock/news' as 'lazyblock/news', newsBlock),
  makeValidator('lazyblock/title' as 'lazyblock/title', titleBlock),
  makeValidator('lazyblock/columns' as 'lazyblock/columns', columnsBlock),
  makeValidator('lazyblock/collage' as 'lazyblock/collage', collageBlock),
]

export function wordpressBlock(block: { blockName: string }) {
  const validator = blockValidators.find(
    (validator) => validator.name === block.blockName
  )
  if (!validator) return defaultBlock(block)
  if (validator.name === 'lazyblock/collage') console.log(block)
  return validator.validate(block)
}

export type WordpressBlock = ReturnType<typeof wordpressBlock>
