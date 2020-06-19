import { css } from '@emotion/core'
import { typography } from 'style'
import { ColumnsBlock } from 'lib/models/columnsBlock'
import Columns from 'components/Columns/Columns'
import { Fragment } from 'react'

const titleStyle = css`
  ${typography.heading3};
  margin: 0;
  margin-bottom: 0.5em;
`

const TextColumns = (props: ColumnsBlock) => {
  return (
    <Columns>
      {props.columns.map((column, idx) => (
        <Fragment key={idx}>
          <h3 css={titleStyle}>{column.title}</h3>
          <p>{column.text}</p>
        </Fragment>
      ))}
    </Columns>
  )
}

export default TextColumns
