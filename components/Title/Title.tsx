import { TitleBlock } from 'lib/models/titleBlock'

const Title = (props: TitleBlock) => {
  return (
    <header>
      <span>{props.roofline}</span>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Title
