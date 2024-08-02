import { css } from '@emotion/core'
import { transparentize } from 'polished'
import { typography, layout, colors, breakpoints, helpers } from 'style'
import { PremisesBlock } from 'lib/models/premisesBlock'
import mapImage from './_map.svg'
import legend from './_legend'
import { Fragment } from 'react'

const premisesStyle = css`
  ${layout.container};
  margin-bottom: 20px;
  overflow: visible;
`

const descriptionTextStyle = css`
  color: ${colors.darkGreen};
  ${layout.block};
  margin: 0;
  padding-bottom: 20px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    p {
      width: 60%;
    }
  }
`

const mapWrapperStyle = css`
  ${layout.block};
  background-color: ${transparentize(0.2, colors.lightGreen)};
  margin: 0 auto;

  @media (min-width: ${breakpoints.breakpointM}px) {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr minmax(50%, 400px);
    justify-items: center;
    grid-template-rows: auto 1fr;
    grid-column-gap: 60px;
    grid-template-areas:
      'title title'
      'left right';
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    grid-template-columns: auto 1fr;
    justify-items: flex-start;
    grid-row-gap: 30px;
  }
`

const titleStyle = css`
  ${typography.heading2};
  max-width: 500px;
  margin-top: 1.2em;
  margin-bottom: 1.5em;
  grid-area: title;
`

const mapImageStyle = css`
  width: 100%;
  margin-bottom: 30px;
  grid-area: right;
  position: sticky;
  @media (min-width: ${breakpoints.breakpointM}px) {
    top: 2em;
  }
  @media (min-width: ${breakpoints.breakpointXL}px) {
    position: static;
    margin-top: 100px;
    margin-left: -150px;
    width: calc(100% + 150px);
  }
`

const legendStyle = css`
  @media (min-width: ${breakpoints.breakpointS}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-column-gap: 30px;
  }
  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${breakpoints.breakpointXL}px) {
    grid-template-columns: 1fr 1fr;
  }
`

const legendSectionStyle = css`
  grid-column: span 1;
  margin-bottom: 30px;
`

const sectionTitleStyle = css`
  color: ${colors.brown};
  margin-bottom: 1em;
`

const legendListStyle = css`
  ${helpers.resetListStyles};

  li {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    font-size: 0.9em;

    @media (min-width: ${breakpoints.breakpointM}px) {
      font-size: 1em;
    }

    @media (min-width: ${breakpoints.breakpointL}px) {
      font-size: 0.9em;
    }

    @media (min-width: ${breakpoints.breakpointXL}px) {
      font-size: 1em;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 15px;

      @media (min-width: ${breakpoints.breakpointM}px) {
        width: 40px;
        height: 40px;
      }

      @media (min-width: ${breakpoints.breakpointL}px) {
        width: 30px;
        height: 30px;
      }

      @media (min-width: ${breakpoints.breakpointXL}px) {
        width: 40px;
        height: 40px;
      }
    }
  }
`

const highlightStyle = css`
  color: ${colors.darkRed};

  img {
    /* background: white; */
    border-radius: 100%;
    box-sizing: border-box;
    /* padding: 0.4em; */
    filter: brightness(150%) saturate(220%) hue-rotate(337deg);
  }
`

const Premises = (props: PremisesBlock) => {
  return (
    <section css={premisesStyle}>
      <div css={descriptionTextStyle}>
        <p>{props.description}</p>
      </div>
      <figure css={mapWrapperStyle}>
        <figcaption css={titleStyle}>{props.title}</figcaption>
        <img css={mapImageStyle} src={mapImage} alt='Karte des Geländes' />
        <div css={legendStyle}>
          {legend.map((section, i) => (
            <Fragment key={i}>
              <div css={legendSectionStyle}>
                <h3 css={sectionTitleStyle}>{section.title}</h3>
                <ul css={legendListStyle}>
                  {section.items.map((item) => (
                    <li key={item.name} css={item.highlight && highlightStyle}>
                      <img src={item.icon} alt={item.name} />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          ))}
        </div>
      </figure>
    </section>
  )
}

export default Premises
