import { css } from '@emotion/core'
import { layout, colors, typography, breakpoints, helpers } from 'style'
import { TeamBlock, TeamCategory, TeamMember } from 'lib/models/teamBlock'

const memberStyle = css`
  ${layout.grid({ columns: 2 })};
  grid-template-columns: 40% 60%;
  grid-template-areas: 'content image';
  margin-bottom: 100px;
`

const memberContentStyle = (color: string) => css`
  grid-area: content;
  padding-left: 80px;
  margin-bottom: 30%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 47px;
    top: 12px;
    display: block;
    background-color: ${color};
    width: 13px;
    height: 150px;
  }
`

const titleStyle = css`
  ${typography.heading3};

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
  border-radius: 100%;
  height: auto;
  position: sticky;
  top: calc((100% - 300px) / 2 - 30px);
`

interface Props {
  member: TeamMember
  color: string
}
export default function Member(props: Props) {
  const member = props.member

  return (
    <div css={memberStyle}>
      <div css={memberContentStyle(props.color)}>
        <h3 css={titleStyle}>
          {member.name}
          <span>{member.role}</span>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: member.text }} />
        <p>{member.quote}</p>
      </div>
      {member.headshot && (
        <img
          css={memberImageStyle}
          alt={member.name}
          src={member.headshot.url}
        />
      )}
    </div>
  )
}
