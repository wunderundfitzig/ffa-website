import { css } from '@emotion/core'
import { NewsBlock } from 'lib/models/newsBlock'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import { colors, breakpoints, layout } from 'style'

const newsBannerStyle = css`
  width: 100% calc(100% - 40px);
  margin: 20px;

  @media (min-width: ${breakpoints.breakpointXL}px) {
    ${layout.container};
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const NewsBanner = (props: NewsBlock) => {
  return (
    <article css={newsBannerStyle} title='aktuell'>
      <SplitBanner
        showBanderole
        color={colors.lightGreen}
        title={props.title}
        image={props.image}
      >
        {props.content}
      </SplitBanner>
    </article>
  )
}

export default NewsBanner
