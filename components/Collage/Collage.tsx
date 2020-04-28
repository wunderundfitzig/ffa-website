import { css } from '@emotion/core'
import { layout, colors, typography, breakpoints } from 'style'
import { CollageBlock } from 'lib/models/collageBlock'

const wrapperStyle = css`
  ${layout.container};
  ${layout.grid({ columns: 2, rows: 4, columnGap: 15, rowGap: 15 })};
  margin: 20px auto;

  @media (min-width: ${breakpoints.breakpointM}px) {
    ${layout.grid({ columns: 3, rows: 3, columnGap: 15, rowGap: 15 })};
    grid-auto-flow: column;
  }
`

const titleStyle = css`
  ${typography.heading2};
  grid-column: span 2;
  text-align: center;
  padding: 20px;
  margin: 0;
  color: white;
  background-color: ${colors.brown};

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`

const _imageStyle = (url: string) => css`
  display: block;
  background-image: url(${url});
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-bottom: 60%;
  margin: 0;
`

const firstImage = (url: string) => css`
  ${_imageStyle(url)};
  grid-column: span 2;
  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 1;
    grid-row: span 2;
  }
`

const secondImage = (url: string) => css`
  ${_imageStyle(url)};
  grid-column: span 1;

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 1;
    grid-row: span 2;
  }
`

const thirdImage = (url: string) => css`
  ${_imageStyle(url)};
  grid-column: span 1;

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`

const lastImage = (url: string) => css`
  ${_imageStyle(url)};
  grid-column: span 2;
  border-right: 12px solid ${colors.lightGreen};
  width: calc(100% - 12px);

  @media (min-width: ${breakpoints.breakpointM}px) {
    border-width: 20px;
    width: calc(100% - 20px);
    grid-column: span 1;
    grid-row: span 3;
  }
`

const Collage = (props: CollageBlock) => {
  return (
    <div css={wrapperStyle}>
      <h2 css={titleStyle}>{props.title}</h2>
      {props.image1 && <figure css={firstImage(props.image1.url)} />}
      {props.image2 && <figure css={secondImage(props.image2.url)} />}
      {props.image3 && <figure css={thirdImage(props.image3.url)} />}
      {props.image4 && <figure css={lastImage(props.image4.url)} />}
    </div>
  )
}

export default Collage
