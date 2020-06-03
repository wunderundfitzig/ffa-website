import { css } from '@emotion/core'
import Link from 'next/link'
import { colors, typography, layout, breakpoints, pattern } from 'style'
import SocialLinks from 'components/SocialLinks/SocialLinks'

const footerStyle = css`
  background-color: ${colors.darkGreen};
  color: white;
  padding: 20px 20px 30px;
  margin-top: 60px;
  position: relative;

  &::before {
    ${pattern.dashedLine};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 2px solid ${colors.darkGreen};
  }
`

const titleStyle = css`
  ${layout.container}
  ${typography.heading2}
`

const footerColsStyle = css`
  ${layout.container};
  font-size: 1em;
  line-height: 1.3em;

  @media (min-width: ${breakpoints.breakpointL}px) {
    display: flex;
  }

  & > *:not(:last-child) {
    margin-right: 40px;
  }

  a {
    color: white;
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
          <SocialLinks
            links={[
              {
                platform: 'instagram',
                url: 'https://www.instagram.com/abenteuerzentrum_im_grunewald/',
              },
              {
                platform: 'facebook',
                url: 'https://www.facebook.com/abenteuerzentrumgrunewald',
              },
              {
                platform: 'youtube',
                url: 'https://www.youtube.com/channel/UCjxdcpNTrGA2Go9njDYYWcA',
              },
            ]}
            color='white'
          />
        </div>
      </div>
    </footer>
  )
}
