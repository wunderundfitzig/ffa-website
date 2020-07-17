import { css } from '@emotion/core'
import { layout, typography, breakpoints } from 'style'
import { TeamMember } from 'lib/models/teamBlock'

const memberStyle = css`
  padding-left: 20px;
  text-align: center;

  @media (min-width: ${breakpoints.breakpointM}px) {
    ${layout.grid({ columns: 2, rows: 2 })};
    padding-left: 35px;
    grid-template-columns: 45% 55%;
    grid-template-areas:
      'title image'
      'content image';
    margin-bottom: 100px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    grid-template-columns: 40% 60%;
    padding-left: 80px;
  }
`

const memberContentStyle = css`
  grid-area: content;
  margin-bottom: 30%;
  text-align: left;
`

const titleStyle = (color: string) => css`
  ${typography.heading3};
  grid-area: title;
  position: relative;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    left: -25px;
    top: 8px;
    display: block;
    background-color: ${color};
    width: 11px;
    height: 150px;

    @media (min-width: ${breakpoints.breakpointM}px) {
      left: -30px;
    }
  }

  span {
    display: block;
    font-size: 0.9em;
    margin: 0.2em 0 1em 0;
  }
`

const memberImageStyle = css`
  grid-area: image;
  justify-self: center;
  width: 280px;
  max-width: 80%;
  border-radius: 100%;
  margin: 10px auto 30px;

  @media (min-width: ${breakpoints.breakpointM}px) {
    position: sticky;
    top: 40px;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    top: calc((100% - 300px) / 2 - 30px);
  }
`

interface Props {
  member: TeamMember
  color: string
}
export default function Member(props: Props) {
  const member = props.member

  return (
    <div css={memberStyle}>
      <h3 css={titleStyle(props.color)}>
        {member.name}
        <span>{member.role}</span>
      </h3>
      {member.headshot && (
        <img
          css={memberImageStyle}
          alt={member.name}
          src={member.headshot.url}
        />
      )}
      <div css={memberContentStyle}>
        <div dangerouslySetInnerHTML={{ __html: member.text }} />
        <p>{member.quote}</p>
      </div>
    </div>
  )
}
