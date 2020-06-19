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

export const button = css`
  background: ${colors.red};
  background: linear-gradient(90deg, ${colors.red} 0%, ${colors.darkRed} 100%);
  box-shadow: 2px 2px 5px -2px black;
  color: white;
  padding: 7px 15px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.2em;
  cursor: pointer;
`

export const wysiwygContent = css`
  ul {
    padding-left: 15px;
  }

  li {
    margin-bottom: 4px;
  }
`
