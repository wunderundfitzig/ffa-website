import { css } from '@emotion/core'
import { layout, typography, breakpoints, colors } from 'style'
import banderole from './_banderole.png'
import LinkableImage from './_LinkableImage'

const splitBannerStyle = (backgroundColor: string, textColor: string) => css`
  ${layout.grid({ columns: 1, rows: 3 })};
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'image'
    'title'
    'content';
  position: relative;
  width: 100%;
  min-height: 250px;
  background-color: ${backgroundColor};
  color: ${textColor};

  @media (min-width: ${breakpoints.breakpointM}px) {
    ${layout.grid({ columns: 12, rows: 2 })};
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'title   title   title   title   title   title   title   image image image image image'
      'content content content content content content content image image image image image';
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    grid-template-areas:
      'image image image image image title   title   title   title   title   title   title'
      'image image image image image content content content content content content content';
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    grid-template-areas:
      'image image image image image image title   title   title   title   title   title'
      'image image image image image image content content content content content content';
  }
`

const imageStyle = css`
  grid-area: image;
`

const headerStyle = css`
  grid-area: title;
  position: relative;
  box-sizing: border-box;
  min-height: 60px;
  padding: 20px 20px 0 20px;

  @media (min-width: ${breakpoints.breakpointL}px) {
    padding-left: 0;
    padding-right: 120px;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    padding-top: 22px;
    min-height: 70px;
  }
`

const titleStyle = css`
  ${typography.heading2};
  margin: 0;
  margin-bottom: 0.4em;
`

const banderoleStyle = css`
  position: absolute;
  width: 120px;
  top: -7px;
  right: -14px;

  @media (min-width: ${breakpoints.breakpointXL}px) {
    width: 140px;
    top: -8px;
    right: -17px;
  }
`

const contentStyle = css`
  grid-area: content;
  margin: 10px 0 20px;
  padding: 0 20px;

  @media (min-width: ${breakpoints.breakpointS}px) {
    margin-bottom: 30px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    padding-left: 0;
    padding-right: 40px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin-bottom: 40px;
  }
`

interface Props {
  image: { url: string }
  imagePriority?: boolean
  imageLink?: string
  title: string
  showBanderole?: boolean
  color: string
  textColor?: string
  className?: string
  children: React.ReactNode
}

const SplitBanner = (props: Props) => {
  const textColor = props.textColor || colors.brown

  return (
    <div
      css={splitBannerStyle(props.color, textColor)}
      className={props.className}
    >
      {props.showBanderole && <img css={banderoleStyle} src={banderole} />}
      <LinkableImage
        css={imageStyle}
        imagePriority={props.imagePriority}
        image={props.image}
        link={props.imageLink}
      />
      <header css={headerStyle}>
        <h2 css={titleStyle}>{props.title}</h2>
      </header>

      <div css={contentStyle}>{props.children}</div>
    </div>
  )
}

export default SplitBanner
