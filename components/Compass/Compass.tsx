import { css } from '@emotion/core'
import { CompassBlock } from 'lib/models/compassBlock'
import { layout, colors, breakpoints } from 'style'
import { useRef } from 'react'
import useIntersectionObserver from 'lib/hooks/useIntersectionObserver'
import { transparentize } from 'polished'
import Columns from 'components/Columns/Columns'
import useWindowSize from 'lib/hooks/useWindowSize'
import { isBelowBreakpoint } from 'style/breakpoints'
import Graph from './_Graph'

const compassStyle = css`
  ${layout.block};
  ${layout.container};
  background-color: ${transparentize(0.2, colors.lightGreen)};
  margin-bottom: 20px;
  padding-bottom: 100px;
  padding-top: 50px;
  display: grid;
  align-items: flex-start;
  grid-template-areas:
    'graph'
    'content';

  @media (min-width: ${breakpoints.breakpointL}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'content graph';
  }
`

const contentStyle = css`
  margin-top: 30px;

  grid-area: content;
  margin-bottom: 20px;
  padding-right: 60px;
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
  top: 0;
  grid-area: graph;
  text-align: center;
  box-sizing: border-box;
  height: 300px;
  margin: 0 -30px;

  @media (min-width: ${breakpoints.breakpointL}px) {
    top: calc(50% - 300px);
    height: auto;
    margin: 0 auto;
    max-width: 450px;
  }

  svg {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`

const sectionColors = [colors.blue, colors.brown, colors.orange, colors.violett]

export default function Compass(props: CompassBlock) {
  const graphRef = useRef<HTMLDivElement>(null)
  const refs = useRef<Array<HTMLDivElement | null>>([])
  const { width } = useWindowSize()
  const isSmall = isBelowBreakpoint('l', width || 0)
  const sectionVisibility = useIntersectionObserver(refs.current, {
    topOffset: (height) =>
      isSmall ? height - height * 0.15 : height * 0.5 + 0,
  })

  let activeSectionIndex = sectionVisibility.lastIndexOf(true)
  activeSectionIndex = activeSectionIndex === -1 ? 0 : activeSectionIndex

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
        <Graph />
      </div>
    </article>
  )
}
