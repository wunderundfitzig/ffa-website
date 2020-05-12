import { css } from '@emotion/core'
import { colors, breakpoints, helpers } from 'style'
import mobileNavigationButton from './_mobileNavigationButton.svg'
import closeIcon from './_closeIcon.svg'
import { useState } from 'react'
import NavigationLink from './_NavigationLink'
import navigationItems from './_navigationItems'

const buttonStyle = css`
  ${helpers.resetButtonStyles};
  cursor: pointer;

  img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    display: none;
  }
`

const navButtonStyle = css`
  ${buttonStyle};
  width: 50px;
`

const closeButtonStyle = css`
  ${buttonStyle};
  position: absolute;
  top: 25px;
  right: 20px;
  width: 20px;
`

const navigationListStyle = ({ isExpanded }: { isExpanded: boolean }) => css`
  ${helpers.resetListStyles};
  display: ${isExpanded ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.beige};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 80px 30px;
  z-index: 100;

  @media (min-width: ${breakpoints.breakpointL}px) {
    position: static;
    display: flex;
    background-color: transparent;
    padding: 0;
    margin-top: 30px;
  }
`

const Navigation = (props: { className?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <nav className={props.className}>
      <button
        css={navButtonStyle}
        onClick={() => {
          setIsExpanded(true)
        }}
      >
        <img src={mobileNavigationButton} />
      </button>
      <ul css={navigationListStyle({ isExpanded })}>
        <button
          css={closeButtonStyle}
          onClick={() => {
            setIsExpanded(false)
          }}
        >
          <img src={closeIcon} />
        </button>
        {navigationItems.map((navigationItem, i) => {
          return (
            <li key={i}>
              <NavigationLink {...navigationItem} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
