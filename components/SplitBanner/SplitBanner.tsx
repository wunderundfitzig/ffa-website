import { css } from '@emotion/core'
import { layout, typography, breakpoints, colors } from 'style'
import banderole from './_banderole.png'

const splitBannerStyle = (backgroundColor: string, textColor: string) => css`
  ${layout.grid({ columns: 12, rows: 2 })};
  grid-template-rows: auto 1fr;
  width: 100%;
  min-height: 250px;
  background-color: ${backgroundColor};
  color: ${textColor};
`

const imageStyle = (imageURL: string) => css`
  grid-column: span 12;
  background-image: url(${imageURL});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 150px;
  margin: 0;

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 4;
    grid-row: 1 / span 2;
    height: 100%;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    grid-column: span 6;
  }
`

const headerStyle = css`
  grid-column: span 12;
  grid-row: 1 / span 1;
  position: relative;
  box-sizing: border-box;
  min-height: 60px;
  padding: 20px 120px 0 20px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 8;
    padding-left: 5px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    grid-column: span 6;
    padding-left: 5px;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-top: 22px;
    min-height: 70px;
  }
`

const titleStyle = css`
  ${typography.heading2};
  margin: 0;
  margin-bottom: 0.4em;
`

const banderoleStyle = css`
  position: absolute;
  width: 120px;
  top: -7px;
  right: -14px;

  @media (min-width: ${breakpoints.breakpointXL}px) {
    width: 140px;
    top: -8px;
    right: -17px;
  }
`

const contentStyle = css`
  grid-column: span 12;
  grid-row: 2 / span 1;
  margin: 10px 0 20px;
  padding: 0 20px;

  @media (min-width: ${breakpoints.breakpointS}px) {
    margin-bottom: 30px;
  }

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 8;
    padding-left: 5px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    grid-column: span 6;
    padding-left: 5px;
    padding-right: 40px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin-bottom: 40px;
  }
`

interface Props {
  image: { url: string }
  title: string
  showBanderole?: boolean
  color: string
  textColor?: string
  children: React.ReactNode
}

const SplitBanner = (props: Props) => {
  const textColor = props.textColor || colors.brown

  return (
    <div css={splitBannerStyle(props.color, textColor)}>
      <figure css={imageStyle(props.image.url)} />
      <header css={headerStyle}>
        {props.showBanderole && <img css={banderoleStyle} src={banderole} />}
        <h2 css={titleStyle}>{props.title}</h2>
      </header>

      <div css={contentStyle}>{props.children}</div>
    </div>
  )
}

export default SplitBanner
