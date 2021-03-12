import { css } from '@emotion/core'
import { useState, useEffect, useRef } from 'react'
import { colors, breakpoints, layout, helpers } from 'style'
import { isAtOrAboveBreakpoint, breakpointM } from 'style/breakpoints'
import useWindowSize from 'lib/hooks/useWindowSize'
import { NewsBlock, NewsSliderBlock } from 'lib/models/newsBlock'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import Slider from 'components/Slider/Slider'
import Link from 'next/link'

const newsBannerStyle = css`
  width: 100%x;
  margin: 20px;

  @media (min-width: ${breakpoints.breakpointXL}px) {
    ${layout.container};
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: visible;
  }
`

const sliderStyle = css`
  margin: 0 -20px;
`

const slideWrapperStyle = css`
  padding: 0 20px;
  height: 100%;
`

const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 15px;
`

const buttonStyle = css`
  ${helpers.resetButtonStyles};
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin: 0 5px;
  background-color: white;
  opacity: 0.8;
  transition: opacity 0.5s, transform 0.5s, background-color 0.5s;
`

const activeButtonStyle = css`
  cursor: default;
  opacity: 1;
  transform: scale(1.5, 1.5);
  background-color: ${colors.lightGreen};
`

const contentStyle = css`
  white-space: pre-wrap;
`

const callToActionStyle = css`
  font-weight: bold;
  color: inherit;
`

function Inner(props: NewsBlock) {
  const { width } = useWindowSize()
  const showText = isAtOrAboveBreakpoint('m', width || breakpointM)

  return (
    <div css={slideWrapperStyle}>
      <SplitBanner
        css={{ height: '100%' }}
        showBanderole
        color={colors.lightGreen}
        title={props.title}
        image={props.image}
        imageLink={props.link}
        preloadImage={true}
      >
        {showText && <p css={contentStyle}>{props.content}</p>}
        <p css={callToActionStyle}>
          {props.link ? (
            <Link href={props.link} passHref>
              <a css={callToActionStyle}>{props.call_to_action}</a>
            </Link>
          ) : (
            props.call_to_action
          )}
        </p>
      </SplitBanner>
    </div>
  )
}

function Indicators(props: {
  slides: NewsBlock[]
  currentIndex: number
  onNavigation: (idx: number) => void
}) {
  if (props.slides.length <= 1) return null

  return (
    <div css={buttonContainerStyle}>
      {props.slides.map((_, idx) => {
        const isActive = props.currentIndex === idx
        return (
          <button
            key={idx}
            css={[buttonStyle, isActive && activeButtonStyle]}
            onClick={() => {
              props.onNavigation(idx)
            }}
          />
        )
      })}
    </div>
  )
}

export default function NewsBanner(props: NewsSliderBlock) {
  const intervalHandle = useRef<NodeJS.Timeout>()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (props.slides.length <= 1) return

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
    <aside css={newsBannerStyle} title='aktuell'>
      <Indicators
        currentIndex={index % props.slides.length}
        slides={props.slides}
        onNavigation={handleNavigation}
      />
      <Slider
        css={sliderStyle}
        index={index}
        onBackwardNavigation={handleNavigation}
        onForwardNavigation={handleNavigation}
      >
        {(index) => {
          const length = props.slides.length
          const wrappedIndex = (index + length) % length
          const slide = props.slides[wrappedIndex]

          return <Inner {...slide} />
        }}
      </Slider>
    </aside>
  )
}
