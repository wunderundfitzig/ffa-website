import { css } from '@emotion/core'
import { layout, colors, breakpoints, typography } from 'style'
import { WideImageBlock } from 'lib/models/wideImageBlock'
import { transparentize } from 'polished'

const wideImageStyle = (url: string) => css`
  ${layout.container};
  box-sizing: border-box;
  height: 200px;
  padding: 40px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  position: relative;
  background-image: url(${url});
  background-size: cover;
  background-position: center;
  border-right: 12px solid ${colors.lightGreen};
  z-index: -2;

  @media (min-width: ${breakpoints.breakpointM}px) {
    height: 300px;
    border-width: 20px;
  }
`

const headerStyle = css`
  margin-bottom: 0;
`

const textOverlayStyle = css`
  ${typography.museoSlab};
  margin: 0;
  margin-bottom: 15px;
  color: white;
  text-shadow: 1px 1px 2px black;
  white-space: pre-line;
  font-size: 1.3em;
  font-weight: 300;

  @media (min-width: ${breakpoints.breakpointM}px) {
    max-width: 60%;
    font-size: 1.4em;
    line-height: 1.2em;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    font-size: 1.6em;
    line-height: 1.3em;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${transparentize(0.7, 'black')};
    z-index: -1;
  }
`

function Header(props: WideImageBlock) {
  const hasText = props.text !== undefined && props.text !== ''

  return (
    <div css={[wideImageStyle(props.image.url), headerStyle]}>
      {hasText && <h2 css={textOverlayStyle}>{props.text}</h2>}
    </div>
  )
}

function Image(props: WideImageBlock) {
  const hasText = props.text !== undefined && props.text !== ''

  return (
    <figure css={wideImageStyle(props.image.url)}>
      {hasText && <p css={textOverlayStyle}>{props.text}</p>}
    </figure>
  )
}

export default function WideImage(props: WideImageBlock) {
  if (props.isHeader) return <Header {...props} />
  return <Image {...props} />
}
