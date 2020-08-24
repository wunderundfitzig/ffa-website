import { css } from '@emotion/core'
import { transparentize } from 'polished'
import { layout, colors, breakpoints, helpers } from 'style'
import { TeamBlock, TeamCategory } from 'lib/models/teamBlock'
import WideImage from 'components/WideImage/WideImage'
import TeamMember from './_Member'
import leaveHouseImg from './_leave-house.svg'
import leaveEducatorsImg from './_leave-educators.svg'
import leaveKitaImg from './_leave-kita.svg'
import { useState } from 'react'

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
    case 'others':
      return leaveKitaImg
  }
}

export default function TeamSection(props: TeamBlock) {
  const color = getColor(props.category)
  const bgImage = getBackgroundImage(props.category)
  const [activeMember, setActiveMember] = useState(props.members[0])

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
            <li key={i}>
              <TeamMember member={member} color={color} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
