import { css } from '@emotion/core'
import { colors, layout, breakpoints } from 'style'
import Navigation from 'components/Navigation/Navigation'
import logo from './_logo.svg'
import dash from './_dash.svg'
import pattern from './_pattern.svg'

const headerStyle = css`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 20px 30px;
  background-color: ${colors.lightGreen};
  background-image: url(${pattern});
  background-size: auto 100%;
  margin-bottom: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background-repeat: repeat-x;
    background-color: ${colors.darkGreen};
    background-image: url(${dash});
    background-position: 0 7px;
  }

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-bottom: 30px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    padding-bottom: 10px;
  }
`

const wrapperStyle = css`
  ${layout.container}
  ${layout.grid()};
`

const logoStyle = css`
  width: 100px;
  height: 50px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    width: 150px;
    height: 70px;
    grid-column: span 4;
  }

  @media (min-width: ${breakpoints.breakpointXXL}px) {
    margin-left: -75px;
  }
`

const titleStyle = css`
  display: none;
  @media (min-width: ${breakpoints.breakpointL}px) {
    display: flex;
    justify-content: end;
    align-items: center;
    grid-column: span 8;
    margin: 15px 0 0 0;
    color: ${colors.darkGreen};
  }
`

const navigationStyle = css`
  grid-column: span 1 / 13;
  place-self: center end;
  @media (min-width: ${breakpoints.breakpointL}px) {
    grid-column: span 12;
    place-self: end start;
  }
`

const Header = () => (
  <header css={headerStyle}>
    <div css={wrapperStyle}>
      <img css={logoStyle} alt='Fahrten Ferne Abenteuer' src={logo} />
      <h1 css={titleStyle}>Abenteuerzentrum Berlin</h1>
      <Navigation css={navigationStyle} />
    </div>
  </header>
)

export default Header
