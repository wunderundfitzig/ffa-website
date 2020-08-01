import { useEffect, useReducer, useState } from 'react'

function reducer(
  state: Array<boolean>,
  action: {
    refs: Array<HTMLDivElement | null>
    entry: IntersectionObserverEntry
  }
) {
  return action.refs.map((ref, idx) =>
    ref === action.entry.target
      ? action.entry.isIntersecting
      : state[idx] || false
  )
}

// We pass refs to the observer so we can access
// the actual reference to the dom node we are targeting
export default function useIntersectionObserver(
  refs: Array<HTMLDivElement | null>,
  options: {
    bottomOffset: string
  }
) {
  const [intersecting, dispatch] = useReducer(
    reducer,
    refs.map(() => false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          dispatch({ refs, entry })
        })
      },
      {
        root: null,
        threshold: [0],
        rootMargin: `${Number.MAX_SAFE_INTEGER}px 0px ${options.bottomOffset} 0px`,
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
  }, [refs])

  return intersecting
}
