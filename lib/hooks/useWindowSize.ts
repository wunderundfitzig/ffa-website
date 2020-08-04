import { useState, useEffect } from 'react'

type Size = {
  width: number | undefined
  height: number | undefined
}

export default function useWindowSize(): Size {
  const getSize = (): Size => {
    if (!process.browser) return { width: undefined, height: undefined }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize())

  useEffect(() => {
    function onResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return windowSize
}
