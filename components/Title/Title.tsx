import { css } from '@emotion/core'
import { TitleBlock } from 'lib/models/titleBlock'
import { layout, colors, typography, breakpoints } from 'style'
import flag from './_flag.png'

const titleBlockStyle = css`
  ${layout.container};
  ${layout.block};
  padding-top: 40px;
  margin-top: 20px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-top: 50px;
  }
`

const rooflineStyle = (primary: boolean) => css`
  ${typography.museoSlab};
  display: block;
  font-weight: 300;
  color: ${colors.darkGreen};
  padding-left: ${primary ? '10px' : '0'};
  margin-bottom: ${primary ? '0.7em' : '0.2em'};
  line-height: 1.1em;

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-left: ${primary ? '35px' : '0'};
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    font-size: 1.15em;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-left: ${primary ? '80px' : '15px'};
  }
`

const _titleStyle = css`
  position: relative;
  min-height: 70px;
  margin: 0;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    min-height: 80px;
    padding-right: 25%;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-left: 80px;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100px;
    background-image: url(${flag});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`

const primaryTitleStyle = css`
  ${_titleStyle};
  ${typography.heading1};
  padding-left: 10px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-left: 35px;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-left: 80px;
  }

  &::before {
    left: -95px;
    top: -25px;
    width: 100px;
    height: 100px;

    @media (min-width: ${breakpoints.breakpointM}px) {
      width: 120px;
    }

    @media (min-width: ${breakpoints.breakpointXL}px) {
      left: -64px;
    }
  }
`

const secondaryTitleStyle = css`
  ${_titleStyle};
  ${typography.heading2};
  margin-top: 0;
  padding-left: 0;

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-left: 0;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-left: 15px;
  }

  &::before {
    left: -65px;
    top: -25px;
    width: 60px;
    height: 100px;

    @media (min-width: ${breakpoints.breakpointM}px) {
      left: -70px;
    }

    @media (min-width: ${breakpoints.breakpointXL}px) {
      left: -54px;
    }
  }
`

const Title = (props: TitleBlock) => {
  return (
    <header css={titleBlockStyle}>
      <span css={rooflineStyle(props.primary || false)}>{props.roofline}</span>
      {props.primary ? (
        <h1 css={primaryTitleStyle}>{props.title}</h1>
      ) : (
        <h2 css={secondaryTitleStyle}>{props.title}</h2>
      )}
    </header>
  )
}

export default Title
