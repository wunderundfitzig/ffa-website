import { css } from '@emotion/core'
import { useRef } from 'react'
import { transparentize } from 'polished'

import { CompassBlock } from 'lib/models/compassBlock'
import useIntersectionObserver from 'lib/hooks/useIntersectionObserver'
import useIsBelowBreakpoint from 'lib/hooks/useIsBelowBreakpoint'
import { layout, colors, breakpoints } from 'style'

import Columns from 'components/Columns/Columns'
import Graph from './_Graph'

const compassStyle = css`
  ${layout.block};
  ${layout.container};
  overflow: visible;
  background-color: ${colors.lightGreen};
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.breakpointL}px) {
    padding-top: 50px;
    padding-bottom: 100px;
    background-color: ${transparentize(0.2, colors.lightGreen)};
    grid-template-columns: 1fr 1fr;
    display: grid;
    align-items: flex-start;
    grid-template-areas: 'content graph';
  }
`

const contentStyle = css`
  margin-top: 30px;
  grid-area: content;

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin-bottom: 20px;
    padding-right: 60px;
  }
`

const sectionStyle = css`
  opacity: 0.1;
  transition: opacity 1.2s;

  @media (min-width: ${breakpoints.breakpointL}px) {
    margin-top: 80px;
    transition: opacity 0.8s;
    opacity: 0.3;
  }
`

const activeSectionStyle = css`
  opacity: 1;
  color: ${colors.brown};

  @media (min-width: ${breakpoints.breakpointL}px) {
    opacity: 1;
  }
`

const graphStyle = css`
  position: sticky;
  bottom: 0;
  background-color: ${colors.lightGreen};
  grid-area: graph;
  text-align: center;
  box-sizing: border-box;
  height: 350px;
  margin: 0 -30px;
  padding: 20px 10px 0;

  @media (min-width: ${breakpoints.breakpointL}px) {
    background-color: transparent;
    top: calc(50% - 300px);
    height: auto;
    margin: 0 auto;
    padding: 0;
    max-width: 450px;
    width: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`

const sectionColors = [
  colors.blue,
  colors.violett,
  colors.orange,
  colors.darkGreen,
]

export default function Compass(props: CompassBlock) {
  const graphRef = useRef<HTMLDivElement>(null)
  const refs = useRef<Array<HTMLDivElement | null>>([])
  const isSmall = useIsBelowBreakpoint('l', true)
  const activeSectionIndex = useIntersectionObserver(refs.current, {
    topOffset: (height) => (isSmall ? height - 400 : height * 0.5 + 0),
  })

  return (
    <article css={compassStyle}>
      <div css={contentStyle}>
        {props.sections.map((section, idx) => (
          <Columns
            css={[
              sectionStyle,
              activeSectionIndex === idx && activeSectionStyle,
            ]}
            key={idx}
            ref={(ref) => (refs.current[idx] = ref)}
            borderColor={sectionColors[idx]}
          >
            <div>
              <h3>{section.section_title}</h3>
              <p>{section.section_text}</p>
            </div>
          </Columns>
        ))}
      </div>
      <div css={graphStyle} ref={graphRef}>
        <Graph activeIndex={activeSectionIndex} />
      </div>
    </article>
  )
}
