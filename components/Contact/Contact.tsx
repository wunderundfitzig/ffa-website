import { css } from '@emotion/core'
import { typography, breakpoints, helpers } from 'style'
import { ContactBlock } from 'lib/models/contactBlock'
import Columns from 'components/Columns/Columns'
import instagramLogo from './_instagram.svg'
import facebookLogo from './_facebook.svg'

const titleStyle = css`
  ${typography.heading2};
  height: 30px;
  margin-bottom: 0;
`

const textStyle = css`
  margin: 0;
  white-space: pre-line;
`

const rightColStyle = css`
  @media (min-width: ${breakpoints.breakpointL}px) {
    padding-top: 30px;
  }
`

const phoneAndMailStyle = css`
  ${helpers.resetDefinitionListStyles};
  display: grid;
  grid-template-columns: auto auto;

  dt {
    display: block;
    width: 50px;
  }
  dd {
    display: inline-block;
  }
`

const linkStyle = css`
  ${helpers.resetLinkStyles};
`

const socialLinkStyle = css`
  ${helpers.resetLinkStyles};
  display: inline-block;
  margin: 15px 15px 0 0;
  width: 20px;

  img {
    width: 100%;
  }
`

const Contact = (props: ContactBlock) => {
  return (
    <Columns>
      <>
        <h2 css={titleStyle}>Kontakt</h2>
        <p css={textStyle}>{props.address}</p>
      </>
      <div css={rightColStyle}>
        <dl css={phoneAndMailStyle}>
          <dt>Büro:</dt>
          <dd>{props.phone}</dd>
          <dt>Mail:</dt>
          <dd>
            <a css={linkStyle} href={`mailto:${props.phone}`}>
              {props.mail}
            </a>
          </dd>
        </dl>
        <a
          css={socialLinkStyle}
          href={props.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={instagramLogo} alt='instagram' />
        </a>
        <a
          css={socialLinkStyle}
          href={props.facebook}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={facebookLogo} alt='facebook' />
        </a>
      </div>
    </Columns>
  )
}

export default Contact
