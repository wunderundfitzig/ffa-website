import { css } from '@emotion/core'

export const resetLinkStyles = css`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

export const resetListStyles = css`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const resetDefinitionListStyles = css`
  margin: 0;
  padding: 0;

  dt,
  dd {
    display: inline-block;
  }

  dd {
    margin: 0;
  }
`

export const resetButtonStyles = css`
  padding: 0;
  background: none;
  border: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
`
