import { css } from '@emotion/core'
import { useRef } from 'react'
import { transparentize } from 'polished'

import { layout, colors, breakpoints, helpers } from 'style'
import { TeamBlock, TeamCategory } from 'lib/models/teamBlock'
import useIntersectionObserver from 'lib/hooks/useIntersectionObserver'
import useIsBelowBreakpoint from 'lib/hooks/useIsBelowBreakpoint'

import WideImage from 'components/WideImage/WideImage'
import TeamMember from './_Member'
import leaveHouseImg from './_leave-house.svg'
import leaveEducatorsImg from './_leave-educators.svg'
import leaveKitaImg from './_leave-kita.svg'
import leaveOthersImg from './_leave-others.svg'

const teamContentStyle = css`
  ${layout.container};
  ${layout.block};
  overflow: visible;
  background-color: ${colors.lightGreen};
  padding-top: 20px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    ${layout.grid({ columns: 2, rows: 2 })};
    align-items: start;
    grid-template-columns: minmax(250px, 50%) 1fr;
    grid-template-areas: 'members image';
    background-color: ${transparentize(0.2, colors.lightGreen)};
    padding-top: 40px;
    padding-bottom: 80px;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    grid-template-columns: 40% 1fr;
    padding-left: 80px;
  }
`

const memberListStyle = css`
  ${helpers.resetListStyles};
  grid-area: members;

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding-left: 10px;
  }
`

const memberImageStyle = css`
  width: calc(100% + 60px);
  grid-area: image;
  position: sticky;
  bottom: 0px;
  display: grid;
  grid-template-areas: 'center';
  justify-items: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${colors.lightGreen};
  z-index: 1;
  margin-left: -30px;
  margin-right: -30px;
  padding: 40px 50px;
  border-bottom: 20px solid ${colors.lightGreen};
  box-sizing: border-box;

  @media (min-width: ${breakpoints.breakpointM}px) {
    margin: 0;
    width: 100%;
    border-bottom: 0;
    background-color: transparent;
    top: 40px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    top: calc((100% - 300px) / 2 - 30px);
    padding: 70px;
    min-height: 380px;
  }
`

const imgStyle = css`
  opacity: 0;
  grid-area: center;
  width: 100%;
  max-width: 200px;
  border-radius: 100%;
  transition: opacity 0.5s;

  @media (min-width: ${breakpoints.breakpointL}px) {
    max-width: 250px;
  }
`

const activeImgStyle = css`
  opacity: 1;
  z-index: 1;
`

function getColor(category: TeamCategory) {
  switch (category) {
    case 'house':
      return colors.darkGreen
    case 'educators':
      return colors.darkBlue
    case 'kita':
      return colors.brown
    case 'others':
      return colors.orange
  }
}

function getBackgroundImage(category: TeamCategory) {
  switch (category) {
    case 'house':
      return leaveHouseImg
    case 'educators':
      return leaveEducatorsImg
    case 'kita':
      return leaveKitaImg
    case 'others':
      return leaveOthersImg
  }
}

export default function TeamSection(props: TeamBlock) {
  const color = getColor(props.category)
  const bgImage = getBackgroundImage(props.category)
  const refs = useRef<Array<HTMLLIElement | null>>([])
  const isMedium = useIsBelowBreakpoint('l', true)
  const isSmall = useIsBelowBreakpoint('m', true)

  const activeSectionIndex = useIntersectionObserver(refs.current, {
    topOffset: (height) => {
      if (isSmall) return height - 370
      if (isMedium) return height - height * 0.5
      return height * 0.7
    },
  })

  return (
    <section>
      <header title={props.title}>
        <WideImage
          asHeader
          text={props.title}
          image={props.image}
          color={color}
        />
      </header>
      <div css={teamContentStyle}>
        <ul css={memberListStyle}>
          {props.members.map((member, i) => (
            <li
              key={i}
              style={{ opacity: activeSectionIndex === i ? 1 : 0.5 }}
              ref={(ref) => (refs.current[i] = ref)}
            >
              <TeamMember member={member} color={color} />
            </li>
          ))}
        </ul>
        <div
          css={memberImageStyle}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {props.members.map((member, i) => (
            <img
              key={i}
              css={[imgStyle, activeSectionIndex === i && activeImgStyle]}
              alt={member.name}
              src={member.headshot?.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
