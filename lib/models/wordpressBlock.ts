import { FefeError, object, string } from 'fefe'
import { newsBlock, newsSliderBlock } from './newsBlock'
import { titleBlock } from './titleBlock'
import { columnsBlock } from './columnsBlock'
import { eventBlock } from './eventBlock'
import { collageBlock } from './collageBlock'
import { imageLinksBlock } from './imageLinksBlock'
import { contactBlock } from './contactBlock'
import { wideImageBlock } from './wideImageBlock'
import { teamBlock } from './teamBlock'
import { premisesBlock } from './premisesBlock'
import { compassBlock } from './compassBlock'
import { postListBlock } from './postListBlock'
import { BlockMeta, PromiseResolvedType } from 'lib/types'
import { Validator } from 'react'

const defaultBlock = object(
  {
    blockName: (): 'default' => 'default',
    innerHTML: string(),
  },
  { allowExcessProperties: true }
)

const validateBlockMeta = <T>(value: unknown, name: T): BlockMeta<T> => {
  if (typeof value !== 'object' || value === null) {
    throw new FefeError(value, 'not an object')
  }
  if (!('attrs' in value)) {
    throw new FefeError(value, 'missing member: attrs')
  }
  if (!('blockName' in value)) {
    throw new FefeError(value, 'missing member: blockName')
  }
  if ((value as BlockMeta<T>).blockName !== name) {
    throw new FefeError(value, 'wrong blockName')
  }
  return value as BlockMeta<T>
}

const makeValidator = <R, T>(
  name: T,
  validator: (value: unknown) => Promise<R> | R
) => ({
  name: name,
  validate: async (value: unknown): Promise<{ blockName: T; attrs: R }> => {
    const block = validateBlockMeta(value, name)
    const attrs = await Promise.resolve(validator(block.attrs))
    return {
      blockName: name,
      attrs,
    }
  },
})

const blockValidators = [
  makeValidator('lazyblock/news' as 'lazyblock/news', newsBlock),
  makeValidator(
    'lazyblock/news-slider' as 'lazyblock/news-slider',
    newsSliderBlock
  ),
  makeValidator('lazyblock/title' as 'lazyblock/title', titleBlock),
  makeValidator('lazyblock/columns' as 'lazyblock/columns', columnsBlock),
  makeValidator('lazyblock/collage' as 'lazyblock/collage', collageBlock),
  makeValidator('lazyblock/contact' as 'lazyblock/contact', contactBlock),
  makeValidator('lazyblock/event' as 'lazyblock/event', eventBlock),
  makeValidator('lazyblock/team' as 'lazyblock/team', teamBlock),
  makeValidator('lazyblock/premises' as 'lazyblock/premises', premisesBlock),
  makeValidator('lazyblock/compass' as 'lazyblock/compass', compassBlock),
  makeValidator('lazyblock/posts' as 'lazyblock/posts', postListBlock),
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
  block: object
): { blockName: 'error'; attrs: { errorMessage: string; block: object } } {
  return { blockName: 'error', attrs: { errorMessage: message, block: block } }
}

export async function wordpressBlock(block: BlockMeta<string>) {
  const validator = blockValidators.find(
    (validator) => validator.name === block.blockName
  )
  if (!validator) return defaultBlock(block)
  try {
    return await validator.validate(block)
  } catch (e) {
    return makeErrorBlock(e.message, block)
  }
}

export type WordpressBlock = PromiseResolvedType<
  ReturnType<typeof wordpressBlock>
>
