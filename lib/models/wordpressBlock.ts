import { object, string } from 'fefe'
import { newsBlock } from './newsBlock'
import { titleBlock } from './titleBlock'
import { columnsBlock } from './columnsBlock'
import { eventBlock } from './eventBlock'
import { collageBlock } from './collageBlock'
import { imageLinksBlock } from './imageLinksBlock'
import { contactBlock } from './contactBlock'
import { wideImageBlock } from './wideImageBlock'

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
  makeValidator('lazyblock/contact' as 'lazyblock/contact', contactBlock),
  makeValidator('lazyblock/event' as 'lazyblock/event', eventBlock),
  makeValidator(
    'lazyblock/wide-image' as 'lazyblock/wide-image',
    wideImageBlock
  ),
  makeValidator(
    'lazyblock/image-links' as 'lazyblock/image-links',
    imageLinksBlock
  ),
]

function makeErrorBlock(
  message: string,
  block: any
): { blockName: 'error'; attrs: { errorMessage: string; block: any } } {
  return { blockName: 'error', attrs: { errorMessage: message, block: block } }
}

export function wordpressBlock(block: { blockName: string }) {
  const validator = blockValidators.find(
    (validator) => validator.name === block.blockName
  )
  if (!validator) return defaultBlock(block)
  try {
    return validator.validate(block)
  } catch (e) {
    return makeErrorBlock(e.message, block)
  }
}

export type WordpressBlock = ReturnType<typeof wordpressBlock>
