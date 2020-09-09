import React, { ReactNode, RefForwardingComponent } from 'react'
import { css } from '@emotion/core'
import { layout, colors, breakpoints } from 'style'

const columnStyle = css`
  border-left: 10px solid ${colors.lightGreen};
  padding-left: 20px;
  margin-bottom: 20px;
  margin-left: -10px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    margin-left: 0;
    border-width: 12px;
    padding-left: 26px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin-left: 0;
    margin-bottom: 0;

    &:not(:first-of-type) {
      border: 0;
      margin-left: 40px;
      padding-left: 0;
    }
  }
`

interface Props {
  children: ReactNode
  borderColor?: string
  className?: string
}
const Columns: RefForwardingComponent<HTMLDivElement, Props> = (
  props: Props,
  ref
) => {
  const borderColor = props.borderColor || colors.lightGreen
  const childCount = React.Children.count(props.children)
  const wrapperStyle = css`
    padding-bottom: 40px;

    @media (min-width: ${breakpoints.breakpointL}px) {
      ${layout.grid({ columns: childCount })}
    }

    @media (min-width: ${breakpoints.breakpointXL}px) {
      padding-bottom: 50px;
    }
  `

  return (
    <div ref={ref} css={wrapperStyle} className={props.className}>
      {React.Children.map(props.children, (child, idx) => (
        <div key={idx} css={columnStyle} style={{ borderColor }}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default React.forwardRef(Columns)
