import { css } from '@emotion/core'
import { CompassBlock } from 'lib/models/compassBlock'
import { layout, colors, breakpoints } from 'style'
import { useRef } from 'react'
import useIntersectionObserver from 'lib/hooks/useIntersectionObserver'
import { transparentize } from 'polished'
import Columns from 'components/Columns/Columns'

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
  grid-area: content;
  margin-bottom: 20px;
  padding-right: 60px;
`

const sectionStyle = css`
  margin-top: 80px;
  opacity: 0.3;
  transition: opacity 0.8s;
`

const activeSectionStyle = css`
  opacity: 1;
  color: ${colors.brown};
`

const graphStyle = css`
  position: sticky;
  top: 0;
  grid-area: graph;
  text-align: center;
  background-color: blue;

  @media (min-width: ${breakpoints.breakpointM}px) {
    top: calc(50% - 150px);
  }

  svg {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`

const sectionColors = [colors.blue, colors.brown, colors.orange, colors.violett]

export default function Compass(props: CompassBlock) {
  const graphRef = useRef<HTMLDivElement>(null)
  const refs = useRef<Array<HTMLDivElement | null>>([])
  const sectionVisibility = useIntersectionObserver(refs.current, {
    topOffset: (height) => height * 0.5 + 100,
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
