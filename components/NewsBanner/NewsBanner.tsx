import { css } from '@emotion/core'
import { NewsBlock } from 'lib/models/newsBlock'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import { colors, breakpoints, layout, helpers } from 'style'

const newsBannerStyle = css`
  width: 100% calc(100% - 40px);
  margin: 20px;

  @media (min-width: ${breakpoints.breakpointXL}px) {
    ${layout.container};
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const linkStyle = css`
  display: block;
  ${helpers.resetLinkStyles};
  background-color: 'red';
`

const contentStyle = css`
  white-space: pre-wrap;
`

const callToActionStyle = css`
  font-weight: bold;
  text-decoration: underline;
`

function Inner(props: NewsBlock) {
  return (
    <SplitBanner
      showBanderole
      color={colors.lightGreen}
      title={props.title}
      image={props.image}
    >
      <p css={contentStyle}>{props.content}</p>
      <p css={callToActionStyle}>{props.call_to_action}</p>
    </SplitBanner>
  )
}

export default function NewsBanner(props: NewsBlock) {
  return (
    <article css={newsBannerStyle} title='aktuell'>
      {props.link ? (
        <a css={linkStyle} href={props.link}>
          <Inner {...props} />
        </a>
      ) : (
        <Inner {...props} />
      )}
    </article>
  )
}
