import { css } from '@emotion/core'
import { typography } from 'style'
import { ColumnsBlock } from 'lib/models/columnsBlock'
import Columns from 'components/Columns/Columns'
import { Fragment } from 'react'

const titleStyle = css`
  ${typography.heading2};
`

const TextColumns = (props: ColumnsBlock) => {
  return (
    <Columns>
      {props.columns.map((column, idx) => (
        <Fragment key={idx}>
          <h2 css={titleStyle}>{column.title}</h2>
          <p>{column.text}</p>
        </Fragment>
      ))}
    </Columns>
  )
}

export default TextColumns
