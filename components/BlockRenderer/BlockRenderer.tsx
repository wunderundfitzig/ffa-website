import { css } from '@emotion/core'
import { WordpressBlock } from 'lib/models/wordpressBlock'
import { layout } from 'style'
import NewsBanner from 'components/NewsBanner/NewsBanner'
import Title from 'components/Title/Title'
import TextColumns from 'components/TextColumns/TextColumns'
import Collage from 'components/Collage/Collage'
import ImageLinks from 'components/ImageLinks/ImageLinks'
import Contact from 'components/Contact/Contact'
import WideImage from 'components/WideImage/WideImage'
import Event from 'components/Event/Event'
import ParseErrorDisplay from 'components/ParseErrorDisplay/ParseErrorDisplay'
import TeamSection from 'components/TeamSection/TeamSection'
import Premises from 'components/Premises/Premises'

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
            return <NewsBanner key={idx} {...{ slides: [block.attrs] }} />
          case 'lazyblock/news-slider':
            return <NewsBanner key={idx} {...block.attrs} />
          case 'lazyblock/title':
            return <Title key={idx} {...block.attrs} />
          case 'lazyblock/columns':
            return <TextColumns key={idx} {...block.attrs} />
          case 'lazyblock/collage':
            return <Collage key={idx} {...block.attrs} />
          case 'lazyblock/image-links':
            return <ImageLinks key={idx} {...block.attrs} />
          case 'lazyblock/contact':
            return <Contact key={idx} {...block.attrs} />
          case 'lazyblock/wide-image':
            return <WideImage key={idx} {...block.attrs} />
          case 'lazyblock/event':
            return <Event key={idx} {...block.attrs} />
          case 'lazyblock/team':
            return <TeamSection key={idx} {...block.attrs} />
          case 'lazyblock/premises':
            return <Premises key={idx} {...block.attrs} />
          case 'error':
            return <ParseErrorDisplay key={idx} {...block.attrs} />
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
