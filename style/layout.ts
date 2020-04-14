import { css } from '@emotion/core'

export const container = css`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

export const grid = ({
  columns = 12,
  rows = 1,
  columnGap = 20,
  rowGap = 0,
} = {}) => css`
  display: grid;
  grid-column-gap: ${columnGap}px;
  grid-row-gap: ${rowGap}px;
  grid-template-columns: repeat(${columns}, minmax(0, 1fr));
  grid-template-rows: repeat(${rows}, minmax(0, auto));
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
`
