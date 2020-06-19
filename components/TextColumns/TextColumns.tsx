import { css } from '@emotion/core'
import { typography, colors } from 'style'
import { ColumnsBlock } from 'lib/models/columnsBlock'
import Columns from 'components/Columns/Columns'
import { Fragment } from 'react'

const titleStyle = css`
  ${typography.heading3};
  margin: 0;
  margin-bottom: 0.5em;
`

const contentStyle = css`
  ul {
    padding-left: 15px;
  }

  li {
    margin-bottom: 4px;
  }
`

const TextColumns = (props: ColumnsBlock) => {
  return (
    <Columns>
      {props.columns.map((column, idx) => (
        <Fragment key={idx}>
          <h3 css={titleStyle}>{column.title}</h3>
          {column.text && (
            <div
              css={contentStyle}
              dangerouslySetInnerHTML={{ __html: column.text }}
            />
          )}
        </Fragment>
      ))}
    </Columns>
  )
}

export default TextColumns
