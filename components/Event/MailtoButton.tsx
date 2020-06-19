interface Props {
  className?: string
  mail: string
  subject: string
  body?: string
  children: string
}
export default function MailtoButton(props: Props) {
  const link = props.body
    ? `mailto:${props.mail}?subject=${props.subject}&body=${props.body}`
    : `mailto:${props.mail}?subject=${props.subject}`

  return (
    <a className={props.className} href={link}>
      {props.children}
    </a>
  )
}
