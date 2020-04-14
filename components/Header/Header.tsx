import { css } from '@emotion/core'
import { colors, layout } from 'style'
import logo from './_logo.svg'
import pattern from './_pattern.svg'

const headerStyle = css`
  width: 100%;
  height: 200px;
  background-color: ${colors.lightGreen};
  background-image: url(${pattern});
  background-size: auto 100%;
`

const wrapperStyle = css`
  ${layout.container}
`

const imgStyle = css`
  width: 200px;
`

const Header = () => (
  <header css={headerStyle}>
    <div css={wrapperStyle}>
      <img css={imgStyle} alt='Fahrten Ferne Abenteuer' src={logo} />
      <h1>Abenteuerzentrum Berlin</h1>
    </div>
  </header>
)

export default Header
