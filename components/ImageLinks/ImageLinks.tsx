import { css } from '@emotion/core'
import { layout, colors, breakpoints, helpers, typography } from 'style'
import { ImageLinksBlock } from 'lib/models/imageLinksBlock'
import { transparentize } from 'polished'

const wrapperStyle = css`
  ${helpers.resetListStyles};
  ${layout.container};
  ${layout.block};
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: ${breakpoints.breakpointS}px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-left: 35px;
    padding-right: 35px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    ${layout.grid({ columns: 3 })}
    padding-left: 45px;
    padding-right: 45px;
  }
`

const listItemStyle = css`
  display: block;
  flex: 1 1 auto;
  margin: 0 10px;

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin: 0;
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

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin-bottom: 30px;
  }

  &:hover span {
    background-color: transparent;
  }
`

const overlayStyle = css`
  position: absolute;
  background-color: ${transparentize(0.2, colors.darkGreen)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s;
`

const linkTextStyle = css`
  ${typography.museoSlab};
  position: relative;
  font-weight: 300;
  font-size: 1.15em;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  z-index: 1;
`

// TODO: if links are local detect this and convert them to slugs

const ImageLinks = (props: ImageLinksBlock) => {
  return (
    <ul css={wrapperStyle}>
      {props.links.map((link, idx) => (
        <li key={idx} css={listItemStyle}>
          <a
            css={LinkStlye(link.image.url)}
            href={link.url}
            target={link.external ? '_blank' : ''}
          >
            <span css={overlayStyle}></span>
            <span css={linkTextStyle}>{link.title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ImageLinks
