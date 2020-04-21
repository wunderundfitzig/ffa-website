import { css } from '@emotion/core'
import { TitleBlock } from 'lib/models/titleBlock'
import { layout, colors, typography } from 'style'

const titleBlockStyle = css`
  ${layout.container};
  ${layout.block};
`

const rooflineStyle = css`
  color: ${colors.darkGreen};
`

const titleStyle = css`
  ${typography.heading1};
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
