import { css } from '@emotion/core'
import { colors, layout, typography } from 'style'
import banderole from './_banderole.png'

const newsBannerStyle = css`
  ${layout.container};
  ${layout.grid()};
  width: calc(100% - 40px);
  margin: 20px;
  background-color: ${colors.lightGreen};
`

const imageStyle = (imageURL: string) => css`
  grid-column: span 12;
  background-image: url(${imageURL});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 150px;
  margin: 0;
`

const headerStyle = css`
  grid-column: span 12;
  grid-row: 1 / span 1;
  position: relative;
  box-sizing: border-box;
  min-height: 60px;
  padding: 20px 120px 0 20px;
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
`

const textStyle = css`
  grid-column: span 12;
  grid-row: 2 / span 1;
  margin: 0 20px 20px;
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
