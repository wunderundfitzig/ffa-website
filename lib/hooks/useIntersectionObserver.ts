import { useEffect, useReducer } from 'react'
import useWindowSize from './useWindowSize'

function reducer(
  state: Array<boolean>,
  action: {
    refs: Array<HTMLDivElement | null>
    entry: IntersectionObserverEntry
  }
) {
  return action.refs.map((ref, idx) => {
    return ref === action.entry.target
      ? action.entry.isIntersecting
      : state[idx] || false
  })
}

export default function useIntersectionObserver(
  refs: Array<HTMLDivElement | null>,
  options: {
    topOffset: (height: number) => number
  }
) {
  const { height } = useWindowSize()
  const [intersecting, dispatch] = useReducer(
    reducer,
    refs.map(() => false)
  )

  useEffect(() => {
    if (height === undefined) return
    const bottomOffset = (height - options.topOffset(height)) * -1

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          dispatch({ refs, entry })
        })
      },
      {
        root: null,
        threshold: [0],
        rootMargin: `999999px 0px ${bottomOffset}px 0px`,
      }
    )

    refs.forEach((ref) => {
      if (ref === null) return
      observer.observe(ref)
    })

    // Cleanup when the component unmnounts
    return () => {
      observer.disconnect()
    }
  }, [refs, height])

  return intersecting
}
