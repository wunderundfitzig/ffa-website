import { css } from '@emotion/core'
import {
  colors,
  layout,
  typography,
  breakpoints,
  helpers,
  pattern,
} from 'style'
import { EventBlock } from 'lib/models/eventBlock'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import Columns from 'components/Columns/Columns'
import { Fragment } from 'react'
import MailtoButton from './MailtoButton'

const eventStyle = css`
  ${layout.container};
  margin-top: 20px;
`

const bannerContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
`

const registerButtonStyle = css`
  ${pattern.button}
`

const contentStyle = css`
  ${layout.block};
  padding-top: 10px;
  padding-bottom: 25px;
`

const dateStyle = css`
  ${typography.heading3};
  ${typography.museoSans};
  ${helpers.resetDefinitionListStyles};
  color: ${colors.darkBlue};
  margin-top: 1em;
  margin-bottom: 1em;

  span {
    margin-right: 20px;
  }

  dt {
    font-size: 0.9em;
  }

  dd {
    font-weight: 300;
  }
`

const textStyle = css`
  margin-bottom: 40px;
`

const columnTitleStyle = css`
  ${typography.heading3};
`

function getColor(category: string) {
  switch (category) {
    case 'educators':
      return { main: colors.darkBlue, text: 'white' }
    case 'family':
      return { main: colors.blue, text: 'black' }
    default:
      return { main: colors.darkGreen, text: 'white' }
  }
}

const Event = (props: EventBlock) => {
  const color = getColor(props.category)

  return (
    <article css={eventStyle}>
      <SplitBanner
        color={color.main}
        textColor={color.text}
        title={props.title}
        image={props.image}
      >
        <div css={bannerContentStyle}>
          <p>{props.description}</p>
          {props.mail && (
            <MailtoButton
              css={registerButtonStyle}
              mail={props.mail}
              subject={`Anmeldung: ${props.title}`}
            >
              Anmelden
            </MailtoButton>
          )}
        </div>
      </SplitBanner>
      <div css={contentStyle}>
        <dl css={dateStyle}>
          <span>
            <dt>Termin:</dt> <dd>{props.date}</dd>
          </span>
          {props.place && (
            <span>
              <dt>Ort:</dt> <dd>{props.place}</dd>
            </span>
          )}
          {props.time && (
            <span>
              <dt>Uhrzeit:</dt> <dd>{props.time}</dd>
            </span>
          )}
        </dl>
        <p css={textStyle}>{props.content}</p>
        <Columns borderColor={color.main}>
          {props.info.map((column, idx) => (
            <Fragment key={idx}>
              <h3 css={columnTitleStyle}>{column.title}</h3>
              <p>{column.description}</p>
            </Fragment>
          ))}
        </Columns>
      </div>
    </article>
  )
}

export default Event
