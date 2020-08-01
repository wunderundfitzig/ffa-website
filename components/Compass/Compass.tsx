import { css } from '@emotion/core'
import { CompassBlock } from 'lib/models/compassBlock'
import { layout, colors, breakpoints } from 'style'
import { useRef } from 'react'
import useIntersectionObserver from 'lib/hooks/useIntersectionObserver'

const compassStyle = css`
  ${layout.block};
  ${layout.container};
  margin-bottom: 20px;
  padding-bottom: 150px;
  display: grid;
  align-items: flex-start;
  grid-template-areas:
    'graph'
    'content';

  @media (min-width: ${breakpoints.breakpointM}px) {
    grid-template-columns: 60% 1fr;
    grid-template-areas: 'content graph';
  }
`

const contentStyle = css`
  grid-area: content;
  margin-top: 150px;
  margin-bottom: 20px;
  padding-right: 60px;
`

const sectionStyle = css`
  margin-bottom: 150px;
`

const graphStyle = css`
  position: sticky;
  top: 0;
  grid-area: graph;
  display: inline;
  text-align: center;
  background-color: blue;

  @media (min-width: ${breakpoints.breakpointM}px) {
    top: 200px;
  }

  svg {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`

export default function Compass(props: CompassBlock) {
  const graphRef = useRef<HTMLDivElement>(null)
  const refs = useRef<Array<HTMLDivElement | null>>([])
  const sectionVisibility = useIntersectionObserver(refs.current, {
    bottomOffset: '-40%',
  })

  let activeSectionIndex = sectionVisibility.lastIndexOf(true)
  activeSectionIndex = activeSectionIndex === -1 ? 0 : activeSectionIndex

  return (
    <article css={compassStyle}>
      <div css={contentStyle}>
        {props.sections.map((section, idx) => (
          <div
            css={sectionStyle}
            key={idx}
            ref={(ref) => (refs.current[idx] = ref)}
            data-title={section.section_title}
          >
            <h3>{section.section_title}</h3>
            <p>{section.section_text}</p>
          </div>
        ))}
      </div>
      <div css={graphStyle} ref={graphRef}>
        <svg viewBox='0 0 100 100'>
          <circle cx={50} cy={50} r={50} fill={colors.blue} />
          <text x={50} y={50} textAnchor='middle' fill='white'>
            {props.sections[activeSectionIndex].section_title}
          </text>
        </svg>
      </div>
    </article>
  )
}
