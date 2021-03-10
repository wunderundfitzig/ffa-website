import { css } from '@emotion/core'
import { colors, layout, typography, helpers, pattern } from 'style'
import { EventBlock } from 'lib/models/eventBlock'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import Columns from 'components/Columns/Columns'
import { Fragment } from 'react'
import MailtoButton from './MailtoButton'

const eventStyle = css`
  ${layout.container};
  margin-top: 20px;
  margin-bottom: 20px;
`

const bannerContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;

  p {
    width: 100%;
  }
`

const registerButtonStyle = css`
  ${pattern.button};
  margin-top: 1em;
`

const contentStyle = css`
  ${layout.block};
  padding-top: 10px;
`

const dateStyle = (textColor: string) => css`
  ${typography.heading3};
  ${typography.museoSans};
  ${helpers.resetDefinitionListStyles};
  color: ${textColor};
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

const columnContentStyle = css`
  ${pattern.wysiwygContent};
`

interface Color {
  main: string
  text: string
  colorfullText: string
}
function getColor(colorName: string): Color {
  switch (colorName) {
    case 'darkBlue':
      return {
        main: colors.darkBlue,
        text: 'white',
        colorfullText: colors.darkBlue,
      }
    case 'lightBlue':
      return {
        main: colors.blue,
        text: colors.brown,
        colorfullText: colors.darkBlue,
      }
    case 'darkGreen':
      return {
        main: colors.darkGreen,
        text: 'white',
        colorfullText: colors.darkGreen,
      }
    case 'lightGreen':
    default:
      return {
        main: colors.lightGreen,
        text: colors.brown,
        colorfullText: colors.darkGreen,
      }
  }
}

function ActionButton(props: { event: EventBlock }) {
  if (props.event.booked_out) {
    return (
      <button disabled css={registerButtonStyle}>
        Ausgebucht
      </button>
    )
  }
  switch (props.event.registration_type) {
    default:
    case 'mail':
      if (!props.event.mail) return null
      return (
        <MailtoButton
          css={registerButtonStyle}
          mail={props.event.mail}
          subject={`Anmeldung: ${props.event.title}`}
        >
          Anmelden
        </MailtoButton>
      )
    case 'request':
      if (!props.event.mail) return null
      return (
        <MailtoButton
          css={registerButtonStyle}
          mail={props.event.mail}
          subject={`Anfrage für: ${props.event.title}`}
        >
          Anfrage senden
        </MailtoButton>
      )
    case 'link':
      if (!props.event.link) return null
      return (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={props.event.link}
          css={registerButtonStyle}
        >
          Online Anmeldung
        </a>
      )
    case 'pdf':
      if (!props.event.pdf) return null
      return (
        <a
          download
          target='_blank'
          rel='noopener noreferrer'
          href={props.event.pdf.url}
          css={registerButtonStyle}
        >
          Anmeldeformular herunterladen
        </a>
      )
  }
}

function EventBanner(props: { color: Color; event: EventBlock }) {
  return (
    <SplitBanner
      color={props.color.main}
      textColor={props.color.text}
      title={props.event.title}
      image={props.event.image}
    >
      <div css={bannerContentStyle}>
        <p>{props.event.description}</p>
        <ActionButton event={props.event} />
      </div>
    </SplitBanner>
  )
}

function WhenAndWhere(props: { color: Color; event: EventBlock }) {
  return (
    <dl css={dateStyle(props.color.colorfullText)}>
      {props.event.date && (
        <span>
          <dt>Termin:</dt> <dd>{props.event.date}</dd>
        </span>
      )}
      {props.event.place && (
        <span>
          <dt>Ort:</dt> <dd>{props.event.place}</dd>
        </span>
      )}
      {props.event.time && (
        <span>
          <dt>Uhrzeit:</dt> <dd>{props.event.time}</dd>
        </span>
      )}
    </dl>
  )
}

export default function Event(props: EventBlock) {
  const color = getColor(props.colorName)

  return (
    <article css={eventStyle}>
      <EventBanner event={props} color={color} />
      <div css={contentStyle}>
        <WhenAndWhere event={props} color={color} />
        {props.content && (
          <p
            css={textStyle}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        )}
        <Columns borderColor={color.main}>
          {props.info.map((column, idx) => (
            <Fragment key={idx}>
              <h3 css={columnTitleStyle}>{column.title}</h3>
              <div
                css={columnContentStyle}
                dangerouslySetInnerHTML={{ __html: column.description }}
              />
            </Fragment>
          ))}
        </Columns>
      </div>
    </article>
  )
}
