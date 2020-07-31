import { css } from '@emotion/core'
import { useRef, useEffect, useLayoutEffect } from 'react'

const sliderWrapperStyle = css`
  overflow: hidden;
  position: relative;
`

const _hiddenSlidesStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`

const prevSlidesStyle = css`
  ${_hiddenSlidesStyle};
  left: -100%;
`

const nextSlidesStyle = css`
  ${_hiddenSlidesStyle};
  right: -100%;
`

interface Props {
  index: number
  children: (index: number) => React.ReactNode
  /** called after user did navigate forward */
  onBackwardNavigation: (newIndex: number) => void
  /** called after user did navigate backward */
  onForwardNavigation: (newIndex: number) => void
  className?: string
}
/**
 * Provides functions for navigating
 * backward and forward throgh content (on mobile with swipe gesture).
 */
export default function Slider(props: Props) {
  const internalIndex = useRef<number>(props.index)
  const contentRef = useRef<HTMLDivElement>(null)
  const touchStartPosition = useRef(null as React.Touch | null)
  const getSlide = props.children
  const previousSlide = getSlide(props.index - 1)
  const currentSlide = getSlide(props.index)
  const nextSlide = getSlide(props.index + 1)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (contentRef.current !== null) contentRef.current.style.transition = ''
    touchStartPosition.current = e.changedTouches[0]
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartPosition.current || !contentRef.current) return

    const diffX =
      (touchStartPosition.current.clientX - e.changedTouches[0].clientX) * -1
    const diffY =
      touchStartPosition.current.clientY - e.changedTouches[0].clientY

    if (Math.abs(diffX) < 20 || Math.abs(diffY) > Math.abs(diffX)) return

    contentRef.current.style.transition = ''
    contentRef.current.style.transform = `translateX(${diffX}px)`
    e.preventDefault()
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartPosition.current || !contentRef.current) return

    const { width } = contentRef.current.getBoundingClientRect()
    const diff =
      touchStartPosition.current.clientX - e.changedTouches[0].clientX
    const isForwardNavigation = diff > 0
    const offset = isForwardNavigation ? width * -1 : width

    touchStartPosition.current = null

    if (Math.abs(diff) < 100) return resetTransition({ animated: true })

    // cancel transition when there is no slide to go to
    if (!previousSlide && !isForwardNavigation)
      return resetTransition({ animated: true })
    if (!nextSlide && isForwardNavigation)
      return resetTransition({ animated: true })

    contentRef.current.style.transition = 'transform 0.5s'
    contentRef.current.style.transform = `translateX(${offset}px)`

    setTimeout(() => {
      if (isForwardNavigation) {
        internalIndex.current = props.index + 1
        props.onForwardNavigation(props.index + 1)
      } else {
        internalIndex.current = props.index - 1
        props.onBackwardNavigation(props.index - 1)
      }
    }, 500)
  }

  const handleTouchCancel = () => {
    touchStartPosition.current = null
    resetTransition()
  }

  const resetTransition = ({ animated = false } = {}) => {
    if (contentRef.current === null) return

    contentRef.current.style.transition = animated ? 'transform 0.5s' : ''
    contentRef.current.style.transform = 'translateX(0px)'
  }

  useLayoutEffect(() => {
    if (contentRef.current === null) return
    if (props.index === internalIndex.current) return resetTransition()

    const offset = props.index > internalIndex.current ? 100 : -100

    contentRef.current.style.transition = ''
    contentRef.current.style.transform = `translateX(${offset}%)`
    setTimeout(() => {
      if (contentRef.current === null) return

      contentRef.current.style.transition = 'transform 0.5s'
      contentRef.current.style.transform = 'translateX(0%)'
      internalIndex.current = props.index
    }, 50)
  }, [props.index])

  return (
    <div
      css={sliderWrapperStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div ref={contentRef}>
        <div css={prevSlidesStyle}>{previousSlide}</div>
        {currentSlide}
        <div css={nextSlidesStyle}>{nextSlide}</div>
      </div>
    </div>
  )
}
