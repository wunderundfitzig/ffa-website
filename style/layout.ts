import { css } from '@emotion/core'
import { transparentize } from 'polished'
import * as breakpoints from './breakpoints'
import * as colors from './colors'

export const container = css`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: ${breakpoints.breakpointXL}px) {
    max-width: 1000px;
  }
`

export const block = css`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  box-sizing: border-box;
  background-color: ${transparentize(0.15, colors.beige)};

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-left: 45px;
    padding-right: 45px;
  }
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
  grid-auto-rows: auto;
`
