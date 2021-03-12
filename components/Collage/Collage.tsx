import { css } from '@emotion/core'
import { layout, colors, breakpoints } from 'style'
import { CollageBlock } from 'lib/models/collageBlock'
import CollageImage from './_CollageImage'

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
  font-size: 1.2em;
  grid-column: span 2;
  font-weight: normal;
  text-align: center;
  padding: 20px;
  margin: 0;
  color: white;
  background-color: ${colors.brown};
  overflow-wrap: break-word;
  hyphens: auto;

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`

const firstImage = css`
  grid-column: span 2;
  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 1;
    grid-row: span 2;
  }
`

const secondImage = css`
  grid-column: span 1;

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 1;
    grid-row: span 2;
  }
`

const thirdImage = css`
  grid-column: span 1;

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`

const lastImage = css`
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
      {props.image1 && <CollageImage image={props.image1} css={firstImage} />}
      {props.image2 && <CollageImage image={props.image2} css={secondImage} />}
      {props.image3 && <CollageImage image={props.image3} css={thirdImage} />}
      {props.image4 && <CollageImage image={props.image4} css={lastImage} />}
    </div>
  )
}

export default Collage
