import { css } from '@emotion/core'
import { layout, colors, typography, breakpoints } from 'style'
import { ColumnsBlock } from 'lib/models/columnsBlock'

const wrapperStyle = css`
  ${layout.container};
  ${layout.block};

  @media (min-width: ${breakpoints.breakpointL}px) {
    display: flex;
  }
`

const columnStyle = css`
  border-left: 8px solid ${colors.lightGreen};
  padding-left: 12px;
  margin-left: -12px;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    border-width: 12px;
    padding-left: 38px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin-left: 0;

    &:not(:first-child) {
      border: 0;
      margin-left: 40px;
      padding-left: 0;
    }
  }
`

const titleStyle = css`
  ${typography.heading2};
`

const Columns = (props: ColumnsBlock) => {
  return (
    <div css={wrapperStyle}>
      {props.columns.map((column, idx) => (
        <div key={idx} css={columnStyle}>
          <h2 css={titleStyle}>{column.title}</h2>
          <p>{column.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Columns
