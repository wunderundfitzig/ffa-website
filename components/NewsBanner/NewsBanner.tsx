import { css } from '@emotion/core'
import { colors, layout, typography, breakpoints } from 'style'
import { NewsBlock } from 'lib/models/newsBlock'
import banderole from './_banderole.png'

const newsBannerStyle = css`
  ${layout.container};
  ${layout.grid({ columns: 12, rows: 2 })};
  grid-template-rows: auto 1fr;
  width: calc(100% - 40px);
  min-height: 250px;
  margin: 20px;
  background-color: ${colors.lightGreen};

  @media (min-width: ${breakpoints.breakpointXL}px) {
    ${layout.container};
    margin-top: 20px;
    margin-bottom: 20px;
  }
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
    grid-column: span 6;
    grid-row: 1 / span 2;
    height: 100%;
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
    grid-column: span 6;
    padding-left: 5px;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-top: 22px;
    min-height: 70px;
  }
`

const titleStyle = css`
  ${typography.heading1};
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

const textStyle = css`
  grid-column: span 12;
  grid-row: 2 / span 1;
  margin: 0;
  padding: 0 20px 20px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 6;
    padding-left: 5px;
    padding-right: 40px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    font-size: 1.2em;
    line-height: 1.4em;
  }
`

const NewsBanner = (props: NewsBlock) => {
  return (
    <section css={newsBannerStyle}>
      <figure css={imageStyle(props.image.url)} />
      <header css={headerStyle}>
        <img css={banderoleStyle} src={banderole} />
        <h2 css={titleStyle}>{props.title}</h2>
      </header>

      <p css={textStyle}>{props.content}</p>
    </section>
  )
}

export default NewsBanner
