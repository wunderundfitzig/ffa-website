import { css } from '@emotion/core'
import { colors, layout } from 'style'

const newsBannerStyle = css`
  ${layout.container};
  ${layout.grid()};
  width: calc(100% - 40px);
  margin: 20px;
  height: 200px;
  background-color: ${colors.lightGreen};
`

const imageStyle = (imageURL: string) => css`
  grid-column: span 6;
  grid-row: span 2;
  background-image: url(${imageURL});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
`

const titleStyle = css`
  grid-column: span 6;
  margin: 0.4em 0;
`

const textStyle = css`
  grid-column: span 6;
  margin: 0;
`

const NewsBanner = (props: {
  title: string
  text: string
  imageURL: string
}) => {
  return (
    <section css={newsBannerStyle}>
      <figure css={imageStyle(props.imageURL)} />
      <h2 css={titleStyle}>{props.title}</h2>
      <p css={textStyle}>{props.text}</p>
    </section>
  )
}

export default NewsBanner
