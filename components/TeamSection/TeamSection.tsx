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
  background-color: ${colors.lightGreen};
  padding-top: 20px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    ${layout.grid({ columns: 2, rows: 2 })};
    align-items: start;
    grid-template-columns: minmax(250px, 50%) 1fr;
    grid-template-areas: 'members image';
    background-color: ${transparentize(0.2, colors.lightGreen)};
    margin-bottom: 100px;
    padding-top: 40px;
    padding-right: 0;
  }

  @media (min-width: ${breakpoints.breakpointXL}px) {
    grid-template-columns: 40% 60%;
    padding-left: 80px;
  }
`

const memberListStyle = css`
  ${helpers.resetListStyles};
  grid-area: members;
`

const activeMemberImageStyle = css`
  grid-area: image;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${colors.lightGreen};
  z-index: 1;
  margin-left: -30px;
  margin-right: -30px;
  padding: 40px;
  border-bottom: 20px solid ${colors.lightGreen};
  text-align: center;
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

  img {
    width: 280px;
    max-width: 80%;
    border-radius: 100%;
  }
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
      if (isMedium) return height - height * 0.7
      if (isSmall) return height - height * 0.15
      return height * 0.5
    },
  })

  const activeMember = props.members[activeSectionIndex]

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
        <div
          css={activeMemberImageStyle}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <img alt={activeMember.name} src={activeMember.headshot?.url} />
        </div>
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
      </div>
    </section>
  )
}
