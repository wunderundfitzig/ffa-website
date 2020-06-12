import { css } from '@emotion/core'
import { layout, colors, breakpoints, typography } from 'style'
import { WideImageBlock } from 'lib/models/wideImageBlock'
import { transparentize } from 'polished'

const errorDisplayStyle = css`
  ${layout.container};
  ${layout.block};
  padding: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-family: monospace;
`

const messageStyle = css`
  font-size: 1.5em;
  color: ${colors.violett};
  text-align: center;
`

const codeStyle = css`
  white-space: pre-wrap;
`

export default function ParseErrorDisplay(props: {
  errorMessage: string
  block: any
}) {
  return (
    <div css={errorDisplayStyle}>
      <p css={messageStyle}>{props.errorMessage}</p>
      <code css={codeStyle}>{JSON.stringify(props.block, null, 2)}</code>
    </div>
  )
}
