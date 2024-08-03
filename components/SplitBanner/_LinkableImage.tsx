import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { breakpoints, colors } from 'style'
import { css } from '@emotion/core'

const imageStyle = css`
  position: relative;
  width: 100%;
  height: 150px;
  margin: 0;
  background-color: ${colors.brown};

  @media (min-width: ${breakpoints.breakpointM}px) {
    height: 100%;
  }
`

function InnerImage(props: { url: string; priority?: boolean }) {
  return (
    <Image
      alt=''
      unoptimized
      priority={props.priority}
      key={props.url}
      src={props.url}
      layout='fill'
      objectFit='cover'
      objectPosition='center'
    />
  )
}

interface Props {
  className?: string
  image: { url: string }
  preloadImage?: boolean
  link?: string
}
export default function LinkableImage(props: Props) {
  if (props.link === undefined) {
    return (
      <div css={imageStyle} className={props.className}>
        <InnerImage priority={props.preloadImage} {...props.image} />
      </div>
    )
  }
  return (
    <div css={imageStyle} className={props.className}>
      <Link href={props.link}>
        <InnerImage priority={props.preloadImage} {...props.image} />
      </Link>
    </div>
  )
}
