import { css } from '@emotion/core'
import { layout, typography, breakpoints } from 'style'
import { TeamMember } from 'lib/models/teamBlock'

const memberStyle = css`
  padding-left: 20px;
  text-align: center;
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

const quoteStyle = css`
  font-style: italic;
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
      <div css={memberContentStyle}>
        <div dangerouslySetInnerHTML={{ __html: member.text }} />
        <p css={quoteStyle} style={{ color: props.color }}>
          {member.quote}
        </p>
      </div>
    </div>
  )
}
