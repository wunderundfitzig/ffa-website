import { css } from '@emotion/core'
import { layout, colors, typography, breakpoints } from 'style'
import { ColumnsBlock } from 'lib/models/columnsBlock'

const Columns = (props: ColumnsBlock) => {
  return (
    <div>
      {props.columns.map((column, idx) => (
        <div key={idx}>
          <h2>{column.title}</h2>
          <p>{column.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Columns
