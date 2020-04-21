import { css } from '@emotion/core'
import { colors, breakpoints, helpers } from 'style'
import mobileNavigationButton from './_mobileNavigationButton.svg'
import closeIcon from './_closeIcon.svg'
import { useState } from 'react'

const navigationStyle = css``
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
  position: absolute;
  top: 25px;
  right: 20px;
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

const navigationLinkStyle = ({ isActive }: { isActive: boolean }) => css`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 1.3em;
  margin: 35px 0;
  text-decoration: none;
  color: ${isActive ? colors.orange : colors.brown};

  @media (min-width: ${breakpoints.breakpointL}px) {
    background-color: ${isActive ? colors.darkGreen : colors.lightGreen};
    color: white;
    border: 1px solid;
    border-color: ${isActive ? colors.darkGreen : 'white'};
    border-bottom: none;
    width: auto;
    font-size: 1.1em;
    padding: 5px 10px;
    margin: 0;
    margin-right: 15px;
  }
`

const navigationItems = [
  {
    url: '',
    displayName: 'Willkommen',
  },
  {
    url: '',
    displayName: 'Über Uns',
  },
  {
    url: '',
    displayName: 'Unsere Angebote',
  },
  {
    url: '',
    displayName: 'Unsere Projekte',
  },
  {
    url: '',
    displayName: 'Waldkita Fila',
  },
]

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <nav css={navigationStyle}>
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
        {navigationItems.map((navigationItem, i) => (
          <li key={i}>
            <a
              css={navigationLinkStyle({ isActive: i === 0 })}
              href={navigationItem.url}
            >
              {navigationItem.displayName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header
