import { WordpressBlock } from 'lib/wordpressApi'
import NewsBanner from 'components/NewsBanner/NewsBanner'

const BlockRenderer = (props: { blocks: WordpressBlock[] }) => {
  return (
    <>
      {props.blocks.map((block, idx) => {
        switch (block.blockName) {
          case 'lazyblock/news':
            return (
              <NewsBanner
                key={idx}
                title={block.attrs.title}
                text={block.attrs.content}
                imageURL={block.attrs.image.url}
              />
            )
          default:
            return (
              <div
                key={idx}
                dangerouslySetInnerHTML={{ __html: block.innerHTML }}
              />
            )
        }
      })}
    </>
  )
}

export default BlockRenderer
