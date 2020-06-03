import { css } from '@emotion/core'
import * as colors from './colors'
import dash from './_dash.svg'

export const dashedLine = css`
  background-repeat: repeat-x;
  background-color: ${colors.darkGreen};
  background-image: url(${dash});
  background-position: 0 0;
  height: 1px;
`
