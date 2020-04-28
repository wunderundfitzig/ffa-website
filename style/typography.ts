import { css } from '@emotion/core'
import * as breakpoints from './breakpoints'

export const heading1 = css`
  font-size: 1.2em;
  line-height: 1.3em;
  font-weight: 700;

  @media (min-width: ${breakpoints.breakpointS}px) {
    font-size: 1.5em;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    font-size: 1.8em;
  }
`

export const heading2 = css`
  font-size: 1.2em;
  font-weight: 700;
`
