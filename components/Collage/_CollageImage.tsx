import { css } from '@emotion/core'
import Image from 'next/image'

const imageStyle = css`
  position: relative;
  width: 100%;
  padding-bottom: 60%;
`

interface Props {
  className?: string
  image: { url: string }
}
export default function CollageImage(props: Props) {
  return (
    <div className={props.className} css={imageStyle}>
      <Image
        src={props.image.url}
        layout='fill'
        objectFit='cover'
        objectPosition='top'
      />
    </div>
  )
}
