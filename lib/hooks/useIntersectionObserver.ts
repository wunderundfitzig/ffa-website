import { useEffect, useReducer } from 'react'

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
  refs = [] as Array<HTMLDivElement | null>,
  options = {
    rootMargin: '0px',
    root: null,
    threshold: [0.5],
  }
) {
  const [intersecting, dispatch] = useReducer(
    reducer,
    refs.map(() => false)
  )
  // Setup our api here
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRect.top <= 0) return
        dispatch({ refs, entry })
      })
    }, options)

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
