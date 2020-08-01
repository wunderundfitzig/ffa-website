import { css } from '@emotion/core'
import { CompassBlock } from 'lib/models/compassBlock'
import { layout } from 'style'
import { useRef } from 'react'
import useIntersectionObserver from 'lib/hooks/useIntersectionObserver'

const compassStyle = css`
  ${layout.block};
  ${layout.container};
`

export default function Compass(props: CompassBlock) {
  const refs = useRef<Array<HTMLDivElement | null>>([])
  const sectionVisibility = useIntersectionObserver(refs.current, {
    rootMargin: '0px 0px -50% 0px',
    root: null,
    threshold: [0],
  })

  let activeSectionIndex = sectionVisibility.lastIndexOf(true)
  activeSectionIndex = activeSectionIndex === -1 ? 0 : activeSectionIndex
  console.log(props.sections[activeSectionIndex].section_title)

  return (
    <article css={compassStyle}>
      <h2>{props.title}</h2>
      {props.sections.map((section, idx) => (
        <div
          key={idx}
          ref={(ref) => (refs.current[idx] = ref)}
          data-title={section.section_title}
        >
          <h3>{section.section_title}</h3>
          <p>{section.section_text}</p>
        </div>
      ))}
    </article>
  )
}
