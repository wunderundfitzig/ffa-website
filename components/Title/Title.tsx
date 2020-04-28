import { css } from '@emotion/core'
import { TitleBlock } from 'lib/models/titleBlock'
import { layout, colors, typography, breakpoints } from 'style'
import flag from './_flag.png'

const titleBlockStyle = css`
  ${layout.container};
  ${layout.block};
  padding-top: 40px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-top: 60px;
  }
`

const rooflineStyle = css`
  display: block;
  color: ${colors.darkGreen};
  padding-left: 10px;
  margin-bottom: 0.7em;
  line-height: 1.1em;

  @media (min-width: ${breakpoints.breakpointL}px) {
    padding-left: 35px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    font-size: 1.15em;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-left: 80px;
  }
`

const titleStyle = css`
  ${typography.heading1};
  position: relative;
  padding-left: 10px;
  min-height: 70px;
  margin: 0;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    min-height: 80px;
    padding-left: 35px;
    padding-right: 25%;
    margin-bottom: 40px;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-left: 80px;
    margin-bottom: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    left: -95px;
    top: -8px;
    width: 100px;
    height: 100px;
    background-image: url(${flag});
    background-repeat: no-repeat;
    background-size: 100%;

    @media (min-width: ${breakpoints.breakpointM}px) {
      width: 120px;
    }

    @media (min-width: ${breakpoints.breakpointXL}px) {
      left: -64px;
    }
  }
`

const Title = (props: TitleBlock) => {
  return (
    <header css={titleBlockStyle}>
      <span css={rooflineStyle}>{props.roofline}</span>
      <h1 css={titleStyle}>{props.title}</h1>
    </header>
  )
}

export default Title
