import { css } from '@emotion/core'
import * as breakpoints from './breakpoints'

export const museoSlab = css`
  font-family: Museo, sans-serif;
`

export const museoSans = css`
  font-family: 'Museo Sans', sans-serif;
`

export const heading = css`
  ${museoSlab};
  font-family: Museo, sans-serif;
  font-weight: 700;
`

export const heading1 = css`
  ${heading};
  font-size: 1.3em;
  line-height: 1.3em;

  @media (min-width: ${breakpoints.breakpointS}px) {
    font-size: 1.5em;
    line-height: 1.3em;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    font-size: 2em;
    line-height: 1.3em;
  }
`

export const heading2 = css`
  ${heading};
  font-size: 1.2em;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  font-weight: 700;

  @media (min-width: ${breakpoints.breakpointS}px) {
    font-size: 1.35em;
    line-height: 1.3em;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    font-size: 1.5em;
    line-height: 1.3em;
  }
`

export const heading3 = css`
  ${heading};
  font-size: 1.1em;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  font-weight: 700;

  @media (min-width: ${breakpoints.breakpointS}px) {
    font-size: 1.2em;
  }
`
