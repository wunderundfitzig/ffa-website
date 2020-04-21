import { TitleBlock } from 'lib/wordpressApi'

const Title = (props: TitleBlock) => {
  return (
    <header>
      <p>{props.roofline}</p>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Title
