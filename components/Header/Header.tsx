import { css } from '@emotion/core'
import { colors, layout } from 'style'
import logo from './_logo.svg'
import dash from './_dash.svg'
import pattern from './_pattern.svg'

const headerStyle = css`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: ${colors.lightGreen};
  background-image: url(${pattern});
  background-size: auto 100%;

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
`

const wrapperStyle = css`
  ${layout.container}
`

const logoStyle = css`
  width: 100px;
  height: 50px;
`

const titleStyle = css`
  display: none;
`

const Header = () => (
  <header css={headerStyle}>
    <div css={wrapperStyle}>
      <img css={logoStyle} alt='Fahrten Ferne Abenteuer' src={logo} />
      <h1 css={titleStyle}>Abenteuerzentrum Berlin</h1>
    </div>
  </header>
)

export default Header
