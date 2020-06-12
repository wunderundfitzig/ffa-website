import React, { ReactNode } from 'react'
import { css } from '@emotion/core'
import { layout, colors, breakpoints } from 'style'

const wrapperStyle = (childCount: number) => css`
  ${layout.container};
  ${layout.block};
  padding-bottom: 20px;

  @media (min-width: ${breakpoints.breakpointL}px) {
    ${layout.grid({ columns: childCount })}
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-bottom: 30px;
  }
`

const columnStyle = (borderColor: string) => css`
  border-left: 8px solid ${borderColor};
  padding-left: 12px;
  margin-left: -12px;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    margin-left: 0;
    border-width: 12px;
    padding-left: 26px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin-left: 0;

    &:not(:first-of-type) {
      border: 0;
      margin-left: 40px;
      padding-left: 0;
    }
  }
`

const Columns = (props: { children: ReactNode; borderColor?: string }) => {
  const borderColor = props.borderColor || colors.lightGreen
  const childCount = React.Children.count(props.children)

  return (
    <div css={wrapperStyle(childCount)}>
      {React.Children.map(props.children, (child, idx) => (
        <div key={idx} css={columnStyle(borderColor)}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default Columns
