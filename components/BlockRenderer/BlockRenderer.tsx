import { css } from '@emotion/core'
import { WordpressBlock } from 'lib/wordpressApi'
import { layout } from 'style'
import NewsBanner from 'components/NewsBanner/NewsBanner'
import Title from 'components/Title/Title'

const defaultBlockStyle = css`
  ${layout.container};
  ${layout.block};
  overflow: hidden;
`

const BlockRenderer = (props: { blocks: WordpressBlock[] }) => {
  return (
    <>
      {props.blocks.map((block, idx) => {
        switch (block.blockName) {
          case 'lazyblock/news':
            return <NewsBanner key={idx} {...block.attrs} />
          case 'lazyblock/title':
            return <Title key={idx} {...block.attrs} />
          default:
            return (
              <div
                key={idx}
                css={defaultBlockStyle}
                dangerouslySetInnerHTML={{ __html: block.innerHTML }}
              />
            )
        }
      })}
    </>
  )
}

export default BlockRenderer
