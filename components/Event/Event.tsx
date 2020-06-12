import { css } from '@emotion/core'
import { colors, layout, typography, breakpoints } from 'style'
import { EventBlock } from 'lib/models/eventBlock'
import SplitBanner from 'components/SplitBanner/SplitBanner'

const eventStyle = css`
  ${layout.container};
  margin-top: 20px;
`

const contentStyle = css`
  ${layout.block};
`

const dateStyle = css`
  color: ${colors.darkBlue};
  font-size: 1.5em;
`

function getColor(category: string) {
  switch (category) {
    case 'educators':
      return colors.blue
    case 'family':
      return colors.orange
    default:
      return colors.darkGreen
  }
}

const Event = (props: EventBlock) => {
  const color = getColor(props.category)

  return (
    <article css={eventStyle}>
      <SplitBanner
        color={color}
        title={props.title}
        image={props.image}
        content={props.description}
      />
      <div css={contentStyle}>
        <p css={dateStyle}>
          Termin: {props.date}
          {props.place ? ` | Ort: ${props.place}` : ''}
          {props.time ? ` | Uhrzeit: ${props.time}` : ''}
        </p>
        <p>{props.content}</p>
      </div>
    </article>
  )
}

export default Event
