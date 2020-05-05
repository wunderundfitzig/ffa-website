import { css } from '@emotion/core'
import { layout, colors, typography, breakpoints, helpers } from 'style'
import { ImageLinksBlock } from 'lib/models/imageLinksBlock'
import { image } from 'lib/models/image'
import { transparentize } from 'polished'

const wrapperStyle = css`
  ${helpers.resetListStyles};
  ${layout.container};
  ${layout.block};
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: ${breakpoints.breakpointS}px) {
    ${layout.grid({ columns: 3 })}
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-bottom: 30px;
  }
`

const LinkStlye = (imgURL: string) => css`
  ${helpers.resetLinkStyles};
  position: relative;
  display: block;
  width: 100%;
  height: 100px;
  color: white;
  background-color: ${colors.darkGreen};
  background-image: url(${imgURL});
  background-blend-mode: hard-light;
  background-size: cover;
  background-position: center;
  margin: 20px 0;
`

const linkTextStyle = css`
  background-color: ${transparentize(0.3, colors.darkGreen)};
  font-size: 1.3em;
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

// TODO: if links are local detect this and convert them to slugs

const ImageLinks = (props: ImageLinksBlock) => {
  return (
    <ul css={wrapperStyle}>
      {props.links.map((link, idx) => (
        <li key={idx}>
          <a css={LinkStlye(link.image.url)} href={link.url}>
            <span css={linkTextStyle}>{link.title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ImageLinks
