import { css } from '@emotion/core'
import { useRef, useEffect } from 'react'

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
  children: {
    current: React.ReactNode
    previous?: React.ReactNode
    next?: React.ReactNode
  }
  /** called after user did navigate forward */
  onBackwardNavigation: () => void
  /** called after user did navigate backward */
  onForwardNavigation: () => void
  className?: string
}
/**
 * Provides functions for navigating
 * backward and forward throgh content (on mobile with swipe gesture).
 */
export default function Slider(props: Props) {
  const contentRef = useRef<HTMLDivElement>(null)
  const touchStartPosition = useRef(null as React.Touch | null)
  const { children: slides } = props

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
    if (!slides.previous && !isForwardNavigation)
      return resetTransition({ animated: true })
    if (!slides.next && isForwardNavigation)
      return resetTransition({ animated: true })

    contentRef.current.style.transition = 'transform 0.5s'
    contentRef.current.style.transform = `translateX(${offset}px)`

    setTimeout(() => {
      isForwardNavigation
        ? props.onForwardNavigation()
        : props.onBackwardNavigation()
    }, 500)
  }

  const handleTouchCancel = () => {
    touchStartPosition.current = null
    resetTransition()
  }

  const resetTransition = ({ animated = false } = {}) => {
    if (contentRef.current === null) return

    if (!animated) {
      contentRef.current.style.transition = ''
      contentRef.current.style.transform = ''
    } else {
      contentRef.current.style.transition = 'transform 0.5s'
      contentRef.current.style.transform = `translateX(0px)`
      setTimeout(() => {
        if (contentRef.current === null) return

        contentRef.current.style.transition = ''
        contentRef.current.style.transform = ''
      }, 500)
    }
  }

  useEffect(resetTransition)

  return (
    <div
      css={sliderWrapperStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div ref={contentRef}>
        {slides.previous && <div css={prevSlidesStyle}>{slides.previous}</div>}
        {slides.current}
        {slides.next && <div css={nextSlidesStyle}>{slides.next}</div>}
      </div>
    </div>
  )
}
