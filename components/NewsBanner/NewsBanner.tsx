import { css } from '@emotion/core'
import { NewsBlock, NewsSliderBlock } from 'lib/models/newsBlock'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import { colors, breakpoints, layout, helpers } from 'style'
import Slider from 'components/Slider/Slider'
import { useState, useEffect, useRef } from 'react'

const newsBannerStyle = css`
  width: 100% calc(100% - 40px);
  margin: 20px;

  @media (min-width: ${breakpoints.breakpointXL}px) {
    ${layout.container};
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const linkStyle = css`
  display: block;
  ${helpers.resetLinkStyles};
  background-color: 'red';
`

const contentStyle = css`
  white-space: pre-wrap;
`

const callToActionStyle = css`
  font-weight: bold;
  text-decoration: underline;
`

function Inner(props: NewsBlock) {
  return (
    <SplitBanner
      showBanderole
      color={colors.lightGreen}
      title={props.title}
      image={props.image}
    >
      <p css={contentStyle}>{props.content}</p>
      <p css={callToActionStyle}>{props.call_to_action}</p>
    </SplitBanner>
  )
}

export default function NewsBanner(props: NewsSliderBlock) {
  const intervalHandle = useRef<NodeJS.Timeout>()
  const [index, setIndex] = useState(props.slides.length)

  useEffect(() => {
    intervalHandle.current = setInterval(() => {
      setIndex((idx) => idx + 1)
    }, 6000)

    return () => {
      intervalHandle.current && clearInterval(intervalHandle.current)
    }
  }, [])

  function handleNavigation(newIndex: number) {
    setIndex(newIndex)
    intervalHandle.current && clearInterval(intervalHandle.current)
  }

  return (
    <article css={newsBannerStyle} title='aktuell'>
      <Slider
        index={index}
        onBackwardNavigation={handleNavigation}
        onForwardNavigation={handleNavigation}
      >
        {(index) => {
          const idx = index % props.slides.length
          const slide = props.slides[idx]

          return slide.link ? (
            <a css={linkStyle} href={slide.link}>
              <Inner {...slide} />
            </a>
          ) : (
            <Inner {...slide} />
          )
        }}
      </Slider>
    </article>
  )
}
