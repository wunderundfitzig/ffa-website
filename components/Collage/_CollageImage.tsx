import { css } from '@emotion/core'
import Image from 'next/image'
import { colors } from 'style'

const imageStyle = css`
  position: relative;
  width: 100%;
  padding-bottom: 60%;
  background-color: ${colors.brown};
`

interface Props {
  className?: string
  image: { url: string }
}
export default function CollageImage(props: Props) {
  return (
    <div className={props.className} css={imageStyle}>
      <Image
        alt=''
        unoptimized
        src={props.image.url}
        layout='fill'
        objectFit='cover'
        objectPosition='top'
      />
    </div>
  )
}
