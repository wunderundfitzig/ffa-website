import { css } from '@emotion/core'
import Link from 'next/link'
import { colors, typography, layout } from 'style'
import instagramLogo from './_instagram.svg'
import facebookLogo from './_facebook.svg'
import { breakpointL } from 'style/breakpoints'

const footerStyle = css`
  background-color: ${colors.darkGreen};
  color: white;
  padding: 20px 20px 30px;
  margin-top: 60px;
`

const titleStyle = css`
  ${layout.container}
  ${typography.heading2}
`

const footerColsStyle = css`
  ${layout.container};
  font-size: 1em;
  line-height: 1.3em;

  @media (min-width: ${breakpointL}px) {
    display: flex;
  }

  & > *:not(:last-child) {
    margin-right: 40px;
  }

  a {
    color: white;
  }
`

const socialLinkStyle = css`
  display: inline-block;
  width: 25px;
  margin-right: 10px;
  img {
    width: 100%;
  }
`

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <h2 css={titleStyle}>Kontakt</h2>
      <div css={footerColsStyle}>
        <p>
          Fahrten-Ferne-Abenteuer
          <br /> Abenteuerzentrum Berlin
          <br /> gemeinnützige GmbH
        </p>
        <p>
          Adresse:
          <br /> Eichhörnchensteig 3
          <br /> 14193 Berlin
        </p>
        <p>
          Büro: +49 30 8261317 <br />
          Mail: abenteuerzentrum@fahrten-ferne-abenteuer.de <br />
          <Link href='[...page]' as='impressum'>
            <a>Impressum</a>
          </Link>
        </p>
        <div>
          <a
            css={socialLinkStyle}
            href=''
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagramLogo} alt='instagram' />
          </a>
          <a
            css={socialLinkStyle}
            href=''
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebookLogo} alt='facebook' />
          </a>
        </div>
      </div>
    </footer>
  )
}
