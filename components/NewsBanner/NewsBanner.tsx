import { css } from '@emotion/core'
import { colors, layout, typography, breakpoints } from 'style'
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
  top: -6px;
  right: -15px;

  @media (min-width: ${breakpoints.breakpointXL}px) {
    width: 140px;
    top: -7px;
    right: -18px;
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
`

const NewsBanner = (props: {
  title: string
  text: string
  imageURL: string
}) => {
  return (
    <section css={newsBannerStyle}>
      <figure css={imageStyle(props.imageURL)} />
      <header css={headerStyle}>
        <img css={banderoleStyle} src={banderole} />
        <h2 css={titleStyle}>{props.title}</h2>
      </header>

      <p css={textStyle}>{props.text}</p>
    </section>
  )
}

export default NewsBanner
