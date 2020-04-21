import { transparentize } from 'polished'
import { css } from '@emotion/core'
import { WordpressBlock } from 'lib/wordpressApi'
import { layout, colors } from 'style'
import NewsBanner from 'components/NewsBanner/NewsBanner'
import Title from 'components/Title/Title'

const defaultBlockStyle = css`
  ${layout.container};
  box-sizing: border-box;
  background-color: ${transparentize(0.2, colors.beige)};
  overflow: hidden;
  padding: 20px;
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
