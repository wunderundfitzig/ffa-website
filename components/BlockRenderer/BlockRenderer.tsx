import { WordpressBlock } from 'lib/wordpressApi'
import NewsBanner from 'components/NewsBanner/NewsBanner'

const BlockRenderer = (props: { blocks: WordpressBlock[] }) => {
  return (
    <>
      {props.blocks.map((block) => {
        switch (block.blockName) {
          case 'lazyblock/news':
            return (
              <NewsBanner
                title='geschlossen'
                text='lorem ipsum'
                imageURL='https://source.unsplash.com/w9KEokhajKw/400x200'
              />
            )
          default:
            return <div dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
        }
      })}
    </>
  )
}

export default BlockRenderer
