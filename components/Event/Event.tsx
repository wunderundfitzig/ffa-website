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

  p {
    width: 100%;
  }
`

const registerLinkStyles = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`

const pdfLinkStyle = (textColor: string) => css`
  color: ${textColor};
`

const registerButtonStyle = css`
  ${pattern.button};
`

const contentStyle = css`
  ${layout.block};
  padding-top: 10px;
  padding-bottom: 25px;
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
        <div css={registerLinkStyles}>
          {props.event.pdf ? (
            <a
              css={pdfLinkStyle(props.color.text)}
              href={props.event.pdf.url}
              target='_blank'
            >
              Anmeldeformular herunterladen
            </a>
          ) : (
            <span></span>
          )}
          {props.event.mail && (
            <MailtoButton
              css={registerButtonStyle}
              mail={props.event.mail}
              subject={`Anmeldung: ${props.event.title}`}
            >
              Anmelden
            </MailtoButton>
          )}
        </div>
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
        <p css={textStyle}>{props.content}</p>
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
